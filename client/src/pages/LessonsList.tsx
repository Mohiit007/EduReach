import { useState } from "react";
import { Link } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowLeftIcon } from "lucide-react";
import { useTranslation } from "react-i18next";
import { useLesson } from "../context/LessonContext"; // Import useLesson

export default function LessonsList() {
  const [selectedSubject, setSelectedSubject] = useState<string | null>(null);
  const { t } = useTranslation();
  const { lessons: assignedLessons } = useLesson(); // Get assigned lessons from context

  // Use assigned lessons directly, as mockLessons are now in context
  const allLessons = assignedLessons;

  const uniqueSubjects = Array.from(new Set(allLessons.map((lesson) => lesson.subject)));

  const filteredLessons = selectedSubject
    ? allLessons.filter((lesson) => lesson.subject === selectedSubject)
    : [];

  return (
    <div className="container mx-auto py-8">
      {selectedSubject ? (
        <div className="mb-6">
          <Button
            variant="outline"
            onClick={() => setSelectedSubject(null)}
            className="flex items-center gap-2 mb-4"
          >
            <ArrowLeftIcon className="h-4 w-4" />
            {t("back_to_subjects")}
          </Button>
          <h1 className="text-3xl font-bold">{t(`subject_${selectedSubject?.toLowerCase()}_lessons_title`, { subject: selectedSubject })}</h1>
        </div>
      ) : (
        <h1 className="text-3xl font-bold mb-6">{t("subjects_title")}</h1>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {selectedSubject
          ? filteredLessons.map((lesson) => (
              <Link key={lesson.id} to={`/student/lesson/${lesson.id}`}>
                <Card className="h-full flex flex-col">
                  <CardHeader>
                    <Badge className="w-fit mb-2" variant="secondary">{t(`lesson_${lesson.id}_subject`)}</Badge>
                    <CardTitle>{t(`lesson_${lesson.id}_title`)}</CardTitle>
                    <CardDescription className="flex-grow">
                      {t(`lesson_${lesson.id}_description`)}
                    </CardDescription>
                    {lesson.audio && (
                      <div className="mt-2">
                        <audio controls src={URL.createObjectURL(lesson.audio)} className="w-full" />
                      </div>
                    )}
                  </CardHeader>
                  <CardContent>
                    <span className="text-sm text-primary hover:underline">{t("read_lesson")}</span>
                  </CardContent>
                </Card>
              </Link>
            ))
          : uniqueSubjects.map((subject) => (
              <Card
                key={subject}
                className="h-full flex flex-col items-center justify-center cursor-pointer hover:bg-muted/50 transition-colors"
                onClick={() => setSelectedSubject(subject)}
              >
                <CardHeader>
                  <CardTitle className="text-center">{t(`subject_${subject.toLowerCase()}_title`, { subject: subject })}</CardTitle>
                </CardHeader>
                <CardContent>
                  <span className="text-sm text-primary">{t("view_lessons")}</span>
                </CardContent>
              </Card>
            ))}
      </div>
    </div>
  );
}
