import React, { useState, useEffect, useRef } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { toast } from "@/components/ui/use-toast";
import { CheckCircleIcon, BookOpenIcon } from "lucide-react";

interface Chapter {
  id: string;
  name: string;
}

interface Lesson {
  id: string;
  title: string;
  subject: string;
  chapters: Chapter[];
  pdfUrl?: string; // Optional PDF URL
  imageUrl?: string; // Optional Image URL
}

interface ClassData {
  id: string;
  name: string;
  section: string;
  assignedLessons: {
    lessonId: string;
    chapterIds: string[];
    selectedPdfFile?: File; // New: Optional selected PDF file for the assignment
    selectedImageFile?: File; // New: Optional selected Image file for the assignment
  }[];
}

// Mock Data - In a real application, this would come from an API
const mockLessons: Lesson[] = [
  {
    id: "lesson1",
    title: "Introduction to Algebra",
    subject: "Mathematics",
    chapters: [
      { id: "chap1_alg", name: "Variables and Expressions" },
      { id: "chap2_alg", name: "Solving Linear Equations" },
      { id: "chap3_alg", name: "Inequalities" },
    ],
  },
  {
    id: "lesson2",
    title: "Chemical Reactions",
    subject: "Science",
    chapters: [
      { id: "chap1_chem", name: "Types of Reactions" },
      { id: "chap2_chem", name: "Balancing Equations" },
      { id: "chap3_chem", name: "Acids and Bases" },
    ],
  },
  {
    id: "lesson3",
    title: "Parts of Speech",
    subject: "English",
    chapters: [
      { id: "chap1_eng", name: "Nouns and Pronouns" },
      { id: "chap2_eng", name: "Verbs and Adverbs" },
      { id: "chap3_eng", name: "Adjectives and Prepositions" },
    ],
  },
  {
    id: "lesson4",
    title: "Historical Events of India",
    subject: "Social Science",
    chapters: [
      { id: "chap1_hist", name: "Ancient Civilizations" },
      { id: "chap2_hist", name: "Mughal Empire" },
      { id: "chap3_hist", name: "British Raj" },
    ],
  },
];

const mockClasses: ClassData[] = [
  {
    id: "class1",
    name: "10th Grade",
    section: "A",
    assignedLessons: [
      { lessonId: "lesson1", chapterIds: ["chap1_alg", "chap2_alg"] },
    ],
  },
  {
    id: "class2",
    name: "9th Grade",
    section: "B",
    assignedLessons: [],
  },
  {
    id: "class3",
    name: "8th Grade",
    section: "C",
    assignedLessons: [
      { lessonId: "lesson3", chapterIds: ["chap1_eng"] },
    ],
  },
  {
    id: "class4",
    name: "10th Grade",
    section: "B",
    assignedLessons: [
      { lessonId: "lesson2", chapterIds: ["chap1_chem"] },
      { lessonId: "lesson4", chapterIds: [] }, // Lesson without specific chapters assigned yet
    ],
  },
];

export default function AssignPage() {
  const [selectedClassId, setSelectedClassId] = useState<string | null>(null);
  const [selectedLessonId, setSelectedLessonId] = useState<string | null>(null);
  const [selectedChapters, setSelectedChapters] = useState<string[]>([]);
  const [classes, setClasses] = useState<ClassData[]>(mockClasses);
  const [lessons, setLessons] = useState<Lesson[]>(mockLessons);
  const [selectedPdfFileForAssignment, setSelectedPdfFileForAssignment] = useState<File | null>(null); // New state for selected PDF file
  const [selectedImageFileForAssignment, setSelectedImageFileForAssignment] = useState<File | null>(null); // New state for selected Image file

  const pdfInputRef = useRef<HTMLInputElement>(null); // Ref for PDF file input
  const imageInputRef = useRef<HTMLInputElement>(null); // Ref for Image file input

  const handlePdfFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      setSelectedPdfFileForAssignment(event.target.files[0]);
    } else {
      setSelectedPdfFileForAssignment(null);
    }
  };

  const handleImageFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      setSelectedImageFileForAssignment(event.target.files[0]);
    } else {
      setSelectedImageFileForAssignment(null);
    }
  };

  const handleAssignChapters = () => {
    if (!selectedClassId || !selectedLessonId || selectedChapters.length === 0) {
      toast({
        title: "Missing Information",
        description: "Please select a class, a lesson, and at least one chapter to assign.",
        variant: "destructive",
      });
      return;
    }

    setClasses((prevClasses) =>
      prevClasses.map((cls) =>
        cls.id === selectedClassId
          ? {
              ...cls,
              assignedLessons: [
                ...cls.assignedLessons.filter((al) => al.lessonId !== selectedLessonId),
                { 
                  lessonId: selectedLessonId,
                  chapterIds: selectedChapters,
                  selectedPdfFile: selectedPdfFileForAssignment,   // Store selected PDF URL
                  selectedImageFile: selectedImageFileForAssignment, // Store selected Image URL
                },
              ],
            }
          : cls
      )
    );

    toast({
      title: "Chapters Assigned!",
      description: "Selected chapters have been assigned to the class.",
    });
    setSelectedLessonId(null);
    setSelectedChapters([]);
    setSelectedPdfFileForAssignment(null); // Clear selected PDF file after assignment
    setSelectedImageFileForAssignment(null); // Clear selected Image file after assignment
  };

  const currentSelectedLesson = selectedLessonId
    ? lessons.find((lesson) => lesson.id === selectedLessonId)
    : null;

  const currentClassAssignedLessons = selectedClassId
    ? classes.find((cls) => cls.id === selectedClassId)?.assignedLessons
    : [];

  return (
    <div className="container mx-auto py-8">
      <Card className="w-full max-w-4xl mx-auto">
        <CardHeader>
          <CardTitle className="text-3xl">Assign Chapters to Classes</CardTitle>
          <CardDescription>Select a class and assign lessons or specific chapters.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid md:grid-cols-2 gap-4">
            {/* Class Selection */}
            <div>
              <Label htmlFor="selectClass">Select Class</Label>
              <Select onValueChange={setSelectedClassId} value={selectedClassId || ""}>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Choose a class" />
                </SelectTrigger>
                <SelectContent>
                  {classes.map((cls) => (
                    <SelectItem key={cls.id} value={cls.id}>
                      {cls.name} ({cls.section})
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Lesson Selection */}
            <div>
              <Label htmlFor="selectLesson">Select Lesson</Label>
              <Select onValueChange={setSelectedLessonId} value={selectedLessonId || ""}>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Choose a lesson" />
                </SelectTrigger>
                <SelectContent>
                  {lessons.map((lesson) => (
                    <SelectItem key={lesson.id} value={lesson.id}>
                      {lesson.title} ({lesson.subject})
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Chapter Selection (if lesson is selected) */}
          {currentSelectedLesson && (
            <Card className="mt-4 p-4">
              <CardTitle className="text-lg mb-4">Select Chapters for "{currentSelectedLesson.title}"</CardTitle>
              <div className="flex flex-wrap gap-2 mb-4">
                {/* PDF Selection */}
                <input
                  type="file"
                  accept=".pdf"
                  ref={pdfInputRef}
                  onChange={handlePdfFileChange}
                  className="hidden"
                />
                <Button
                  variant={selectedPdfFileForAssignment ? "default" : "outline"}
                  onClick={() => pdfInputRef.current?.click()}
                >
                  {selectedPdfFileForAssignment ? `PDF: ${selectedPdfFileForAssignment.name}` : "Select PDF"}
                  {selectedPdfFileForAssignment && <CheckCircleIcon className="ml-2 h-4 w-4" />}
                </Button>

                {/* Image Selection */}
                <input
                  type="file"
                  accept=".jpg,.jpeg,.png,.gif"
                  ref={imageInputRef}
                  onChange={handleImageFileChange}
                  className="hidden"
                />
                <Button
                  variant={selectedImageFileForAssignment ? "default" : "outline"}
                  onClick={() => imageInputRef.current?.click()}
                >
                  {selectedImageFileForAssignment ? `Image: ${selectedImageFileForAssignment.name}` : "Select Image"}
                  {selectedImageFileForAssignment && <CheckCircleIcon className="ml-2 h-4 w-4" />}
                </Button>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                {currentSelectedLesson.chapters.map((chapter) => (
                  <Button
                    key={chapter.id}
                    variant={selectedChapters.includes(chapter.id) ? "default" : "outline"}
                    onClick={() =>
                      setSelectedChapters((prev) =>
                        prev.includes(chapter.id)
                          ? prev.filter((id) => id !== chapter.id)
                          : [...prev, chapter.id]
                      )
                    }
                  >
                    {chapter.name}
                    {selectedChapters.includes(chapter.id) && <CheckCircleIcon className="ml-2 h-4 w-4" />}
                  </Button>
                ))}
              </div>
            </Card>
          )}

          {/* Assign Button */}
          <div className="flex justify-end">
            <Button onClick={handleAssignChapters} disabled={!selectedClassId || !selectedLessonId || selectedChapters.length === 0}>
              <BookOpenIcon className="mr-2 h-4 w-4" />
              Assign Chapters
            </Button>
          </div>

          {/* Assigned Chapters Display */}
          {selectedClassId && (
            <Card className="mt-6 p-4">
              <CardTitle className="text-2xl mb-4">Assignments for {classes.find(c => c.id === selectedClassId)?.name} ({classes.find(c => c.id === selectedClassId)?.section})</CardTitle>
              {currentClassAssignedLessons.length === 0 ? (
                <p className="text-muted-foreground">No lessons or chapters assigned to this class yet.</p>
              ) : (
                <div className="space-y-4">
                  {currentClassAssignedLessons.map((assignment) => {
                    const lesson = lessons.find(l => l.id === assignment.lessonId);
                    if (!lesson) return null;
                    const assignedChapterNames = lesson.chapters
                      .filter(chapter => assignment.chapterIds.includes(chapter.id))
                      .map(chapter => chapter.name);

                    return (
                      <div key={assignment.lessonId} className="border p-3 rounded-lg bg-secondary/10">
                        <h4 className="font-semibold">Lesson: {lesson.title}</h4>
                        <p className="text-sm text-muted-foreground">Subject: {lesson.subject}</p>
                        {assignedChapterNames.length > 0 ? (
                          <p className="text-sm mt-1">Assigned Chapters: {assignedChapterNames.join(", ")}</p>
                        ) : (
                          <p className="text-sm mt-1 text-muted-foreground">No specific chapters assigned from this lesson.</p>
                        )}
                        {(assignment.selectedPdfFile || assignment.selectedImageFile) && (
                          <div className="flex flex-wrap gap-2 mt-2">
                            {assignment.selectedPdfFile && (
                              <Button variant="link" size="sm" asChild>
                                <a href={URL.createObjectURL(assignment.selectedPdfFile)} target="_blank" rel="noopener noreferrer">
                                  Assigned PDF: {assignment.selectedPdfFile.name}
                                </a>
                              </Button>
                            )}
                            {assignment.selectedImageFile && (
                              <Button variant="link" size="sm" asChild>
                                <a href={URL.createObjectURL(assignment.selectedImageFile)} target="_blank" rel="noopener noreferrer">
                                  Assigned Image: {assignment.selectedImageFile.name}
                                </a>
                              </Button>
                            )}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              )}
            </Card>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
