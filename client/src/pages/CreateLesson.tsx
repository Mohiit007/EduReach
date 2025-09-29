import React, { useState, useRef, useEffect } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { StopCircleIcon, PlayIcon, SaveIcon, SendIcon } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";
import { useLesson } from '../context/LessonContext';

const mockSubjects = ["Mathematics", "Science", "English", "Hindi", "Punjabi", "Social Science", "IT", "EVS"];

export default function CreateLesson() {
  const [lessonTitle, setLessonTitle] = useState<string>("");
  const [selectedSubject, setSelectedSubject] = useState<string>("");
  const [lessonContent, setLessonContent] = useState<string>("");
  const [isAudioRecording, setIsAudioRecording] = useState<boolean>(false);
  const [isTranscribing, setIsTranscribing] = useState<boolean>(false); // Re-introduce speech recognition state
  const [audioBlob, setAudioBlob] = useState<Blob | null>(null);
  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const audioChunksRef = useRef<Blob[]>([]);
  const mediaStreamRef = useRef<MediaStream | null>(null); // New ref for MediaStream
  const { toast } = useToast();
  const recognitionRef = useRef<any | null>(null); // Re-introduce speech recognition ref
  const audioPlayerRef = useRef<HTMLAudioElement | null>(null);
  const { addLesson } = useLesson();

  const [className, setClassName] = useState<string>('');
  const [section, setSection] = useState<string>('');
  const [pdfFile, setPdfFile] = useState<File | null>(null);
  const [pptFile, setPptFile] = useState<File | null>(null);
  const [imageFile, setImageFile] = useState<File | null>(null);

  // Cleanup for audio stream and speech recognition on component unmount
  useEffect(() => {
    return () => {
      if (recognitionRef.current) {
        recognitionRef.current.abort();
        recognitionRef.current = null;
      }
      if (mediaStreamRef.current) {
        mediaStreamRef.current.getTracks().forEach(track => track.stop());
        mediaStreamRef.current = null;
      }
    };
  }, []); // Run once on mount, cleanup on unmount

  const handleToggleAudioRecording = async () => {
    if (isAudioRecording) {
      // Stop speech recognition first
      if (recognitionRef.current) {
        recognitionRef.current.stop();
        recognitionRef.current = null; // Explicitly nullify the ref
      }
      setIsTranscribing(false); // Update state immediately after stopping

      // Stop recording
      mediaRecorderRef.current?.stop();
      setIsAudioRecording(false);

      // Stop all tracks in the stream to properly release microphone
      if (mediaStreamRef.current) {
        mediaStreamRef.current.getTracks().forEach(track => track.stop());
        mediaStreamRef.current = null; // Clear the stream reference
      }

    } else {
      // Start recording
      try {
        const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
        mediaStreamRef.current = stream; // Store the stream reference
        mediaRecorderRef.current = new MediaRecorder(stream);
        audioChunksRef.current = [];

        mediaRecorderRef.current.ondataavailable = (event) => {
          audioChunksRef.current.push(event.data);
        };

        mediaRecorderRef.current.onstop = () => {
          const newAudioBlob = new Blob(audioChunksRef.current, { type: "audio/webm" });
          setAudioBlob(newAudioBlob);
        };

        mediaRecorderRef.current.start();
        setIsAudioRecording(true);

        // Start speech recognition
        if ("SpeechRecognition" in window || "webkitSpeechRecognition" in window) {
          const SpeechRecognition = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
          const currentRecognition = new SpeechRecognition(); // Create new instance
          recognitionRef.current = currentRecognition; // Store in ref

          currentRecognition.continuous = true;
          currentRecognition.interimResults = true;
          currentRecognition.lang = "en-IN";
          
          currentRecognition.onresult = (event: any) => {
            console.log("Speech recognition onresult event:", event);
            let finalTranscript = "";
            let interimTranscript = "";

            for (let i = event.resultIndex; i < event.results.length; ++i) {
              const transcript = event.results[i][0].transcript;
              if (event.results[i].isFinal) {
                finalTranscript += transcript + " ";
              } else {
                interimTranscript += transcript;
              }
            }

            // Update lessonContent with final transcript, and interim transcript for real-time feedback
            setLessonContent((prevContent) => {
              // Remove any previous interim text if present to update with the latest interim or final text
              const contentWithoutPreviousInterim = prevContent.replace(/ \[interim\][^]*$/, '');
              return contentWithoutPreviousInterim + finalTranscript + (interimTranscript ? ` [interim]${interimTranscript}` : '');
            });
          };
          currentRecognition.onerror = (event: any) => {
            console.error("Speech recognition error:", event.error, event);
            toast({
              title: "Voice Input Error",
              description: `An error occurred during speech recognition: ${event.error === 'network' ? 'Please check your internet connection or browser settings.' : event.error}`,
              variant: "destructive",
            });
            setIsTranscribing(false);
            if (recognitionRef.current) {
                recognitionRef.current.abort();
                recognitionRef.current = null;
            }
          };
          currentRecognition.onend = () => {
            setIsTranscribing(false);
            if (recognitionRef.current) {
                recognitionRef.current.abort();
                recognitionRef.current = null;
            }
          };
          currentRecognition.start();
          setIsTranscribing(true);
        } else {
          toast({
            title: "Browser Not Supported",
            description: "Speech recognition is not supported in your browser. Audio recording will still work.",
            variant: "destructive",
          });
        }

        toast({
          title: "Recording Started",
          description: "Recording audio and transcribing your speech.",
        });
      } catch (error) {
        console.error("Error accessing microphone:", error);
        toast({
          title: "Microphone Access Denied",
          description: "Please allow microphone access to record audio and transcribe speech.",
          variant: "destructive",
        });
      }
    }
  };

  const handlePlayAudio = () => {
    if (audioBlob) {
      const audioUrl = URL.createObjectURL(audioBlob);
      if (audioPlayerRef.current) {
        audioPlayerRef.current.src = audioUrl;
        audioPlayerRef.current.play();
        audioPlayerRef.current.onended = () => {
          URL.revokeObjectURL(audioUrl);
        };
      } else {
        const audio = new Audio(audioUrl);
        audio.play();
        audio.onended = () => {
          URL.revokeObjectURL(audioUrl);
        };
      }
    }
  };

  const handleSaveLesson = async () => {
    if (!lessonTitle || !selectedSubject || !lessonContent || !audioBlob || !className || !section) {
      toast({
        title: "Missing Information",
        description: "Please fill in all lesson details, including class, section, and recording audio, before saving.",
        variant: "destructive",
      });
      return;
    }

    const formData = new FormData();
    formData.append('title', lessonTitle);
    formData.append('subject', selectedSubject);
    formData.append('content', lessonContent);
    formData.append('className', className);
    formData.append('section', section);
    if (audioBlob) {
      formData.append('audio', audioBlob, 'audio.webm');
    }
    if (pdfFile) {
      formData.append('pdfFile', pdfFile);
    }
    if (pptFile) {
      formData.append('pptFile', pptFile);
    }
    if (imageFile) {
      formData.append('imageFile', imageFile);
    }

    try {
      const response = await fetch('/api/teacher/lessons', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        const result = await response.json();
        console.log("Saved Lesson:", result.lesson);
        toast({
          title: "Lesson Saved!",
          description: `\"${lessonTitle}\" has been saved.`, // Escaping quotes for lessonTitle
        });
      } else {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Failed to save lesson');
      }
    } catch (error: any) {
      console.error("Error saving lesson:", error);
      toast({
        title: "Error Saving Lesson",
        description: error.message || "An unexpected error occurred while saving the lesson.",
        variant: "destructive",
      });
    }
  };

  const assignLessonToStudents = async () => {
    if (!lessonTitle || !selectedSubject || !lessonContent || !audioBlob || !className || !section) {
      toast({
        title: "Missing Information",
        description: "Please fill in all lesson details, including class, section, and recording audio, before assigning.",
        variant: "destructive",
      });
      return;
    }

    const formData = new FormData();
    formData.append('title', lessonTitle);
    formData.append('subject', selectedSubject);
    formData.append('content', lessonContent);
    formData.append('className', className);
    formData.append('section', section);
    if (audioBlob) {
      formData.append('audio', audioBlob, 'audio.webm');
    }
    if (pdfFile) {
      formData.append('pdfFile', pdfFile);
    }
    if (pptFile) {
      formData.append('pptFile', pptFile);
    }
    if (imageFile) {
      formData.append('imageFile', imageFile);
    }

    try {
      const response = await fetch('/api/teacher/lessons', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        const result = await response.json();
        addLesson(result.lesson); // Use the lesson returned from the backend
        toast({
          title: "Lesson Assigned!",
          description: `\"${lessonTitle}\" has been made available to students.`,  // Escaping quotes for lessonTitle
        });
        // Clear form after assignment and refresh page
        setLessonTitle("");
        setSelectedSubject("");
        setLessonContent("");
        setAudioBlob(null);
        setClassName("");
        setSection("");
        setPdfFile(null);
        setPptFile(null);
        setImageFile(null);
        window.location.reload(); // Refresh the page to show updated lessons in student dashboard
      } else {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Failed to assign lesson');
      }
    } catch (error: any) {
      console.error("Error assigning lesson:", error);
      toast({
        title: "Error Assigning Lesson",
        description: error.message || "An unexpected error occurred while assigning the lesson.",
        variant: "destructive",
      });
    }
  };
  
  return (
    <div className="container mx-auto py-8">
      <Card className="w-full max-w-2xl mx-auto">
        <CardHeader>
          <CardTitle className="text-3xl">Create New Lesson</CardTitle>
          <CardDescription>Fill out the details to create a new lesson.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid w-full items-center gap-1.5">
            <Label htmlFor="lessonTitle">Lesson Title</Label>
            <Input
              id="lessonTitle"
              placeholder="Enter lesson title"
              value={lessonTitle}
              onChange={(e) => setLessonTitle(e.target.value)}
            />
          </div>

          <div className="grid w-full items-center gap-1.5">
            <Label htmlFor="subject">Subject</Label>
            <Select onValueChange={setSelectedSubject} value={selectedSubject}>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select a subject" />
              </SelectTrigger>
              <SelectContent>
                {mockSubjects.map((subject) => (
                  <SelectItem key={subject} value={subject}>
                    {subject}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="grid w-full items-center gap-1.5">
            <Label htmlFor="className">Class</Label>
            <Input
              id="className"
              placeholder="Enter class name (e.g., 10th Grade)"
              value={className}
              onChange={(e) => setClassName(e.target.value)}
            />
          </div>

          <div className="grid w-full items-center gap-1.5">
            <Label htmlFor="section">Section</Label>
            <Input
              id="section"
              placeholder="Enter section (e.g., A, B, C)"
              value={section}
              onChange={(e) => setSection(e.target.value)}
            />
          </div>

          <div className="grid w-full items-center gap-1.5">
            <Label htmlFor="pdfUpload">Upload PDF</Label>
            <Input
              id="pdfUpload"
              type="file"
              accept=".pdf"
              onChange={(e) => setPdfFile(e.target.files ? e.target.files[0] : null)}
            />
          </div>

          <div className="grid w-full items-center gap-1.5">
            <Label htmlFor="pptUpload">Upload PPT</Label>
            <Input
              id="pptUpload"
              type="file"
              accept=".ppt,.pptx"
              onChange={(e) => setPptFile(e.target.files ? e.target.files[0] : null)}
            />
          </div>

          <div className="grid w-full items-center gap-1.5">
            <Label htmlFor="imageUpload">Upload Image</Label>
            <Input
              id="imageUpload"
              type="file"
              accept=".jpg,.jpeg,.png,.gif"
              onChange={(e) => setImageFile(e.target.files ? e.target.files[0] : null)}
            />
          </div>

          <div className="grid w-full gap-1.5">
            <Label htmlFor="lessonContent">Lesson Content</Label>
            <Textarea
              id="lessonContent"
              placeholder="Start typing or use voice input..."
              value={lessonContent}
              onChange={(e) => setLessonContent(e.target.value)}
              rows={10}
            />
            <div className="flex items-center gap-2 mt-2">
              <Button
                variant={isAudioRecording ? "destructive" : "outline"}
                size="icon"
                onClick={handleToggleAudioRecording}
              >
                {isAudioRecording ? (
                  <StopCircleIcon className="w-5 h-5 animate-pulse" />
                ) : (
                  <PlayIcon className="w-5 h-5" /> // Now functions as a combined record/start button
                )}
              </Button>
              {(isAudioRecording || isTranscribing) && (
                <span className="text-sm text-muted-foreground">
                  {isAudioRecording && isTranscribing
                    ? "Recording audio and transcribing..."
                    : isAudioRecording
                    ? "Audio recording..."
                    : "Listening for words..."}
                </span>
              )}
            </div>
          </div>

          {audioBlob && (
            <div className="grid w-full gap-1.5">
              <Label>Audio Preview</Label>
              <div className="flex items-center gap-2">
                <Button variant="outline" size="icon" onClick={handlePlayAudio}>
                  <PlayIcon className="w-5 h-5" />
                </Button>
                <span className="text-sm text-muted-foreground">Audio recorded. Click to play.</span>
                <audio ref={audioPlayerRef} hidden />
              </div>
            </div>
          )}
        </CardContent>
        <CardFooter className="flex justify-end gap-2">
          <Button variant="outline" onClick={handleSaveLesson}>
            <SaveIcon className="w-4 h-4 mr-2" />
            Save Lesson
          </Button>
          <Button onClick={assignLessonToStudents} disabled={!lessonTitle || !selectedSubject || !lessonContent || !audioBlob}>
            <SendIcon className="w-4 h-4 mr-2" />
            Assign to Students
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
