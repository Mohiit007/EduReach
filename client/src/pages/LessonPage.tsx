import { useParams, Link } from "react-router-dom";
import { useToast } from "@/components/ui/use-toast";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useTranslation } from "react-i18next";
import { LanguageSwitcher } from "@/components/LanguageSwitcher"; // Import LanguageSwitcher
import { useLesson } from '@/context/LessonContext';
import React, { useEffect, useState } from "react";

export default function LessonPage() {
  const { lessonId } = useParams();
  const { toast } = useToast();
  const { t } = useTranslation();
  const { lessons: assignedLessons } = useLesson();
  const [audioUrl, setAudioUrl] = useState<string | null>(null);

  // Use assigned lessons directly, as mockLessons are now in context
  const allLessons = assignedLessons;

  const lesson = allLessons.find((l) => l.id === lessonId);

  useEffect(() => {
    if (lesson?.audio) {
      const url = URL.createObjectURL(lesson.audio);
      setAudioUrl(url);
      return () => {
        URL.revokeObjectURL(url);
      };
    } else {
      setAudioUrl(null);
    }
  }, [lesson?.audio]);

  if (!lesson) {
    return (
      <div className="container mx-auto p-4">
        <h1 className="text-3xl font-bold mb-4">{t("lesson_not_found_title")}</h1>
        <p className="text-lg text-gray-600 mb-4">
          {t("lesson_not_found_description")}
        </p>
        <Link to="/student/dashboard">
          <Button>{t("back_to_dashboard")}</Button>
        </Link>
      </div>
    );
  }

  const handleMarkAsRead = () => {
    toast({
      title: t("lesson_complete_title"),
      description: t("lesson_complete_description", { lessonTitle: lesson.title }),
    });
  };

  return (
    <div className="container mx-auto p-4">
      <Card className="w-full">
        <CardHeader className="flex justify-between items-start">
          <div>
            <CardTitle className="text-4xl font-extrabold mb-2">
              {t(`lesson_${lesson.id}_title`)}
            </CardTitle>
            <CardDescription>
              <Badge variant="secondary">{t(`lesson_${lesson.id}_subject`)}</Badge>
            </CardDescription>
          </div>
          {/* Language Switcher added here */}
          <LanguageSwitcher />
        </CardHeader>
        <CardContent>
          <p className="text-gray-700 mb-4">
            {t(`lesson_${lesson.id}_description`)}
          </p>
          <div
            className="prose prose-lg dark:prose-invert max-w-none"
            dangerouslySetInnerHTML={{
              __html: t(`lesson_${lesson.id}_content`),
            }}
          />

          {audioUrl && (
            <div className="mt-4">
              <h3 className="text-lg font-semibold mb-2">Audio Lesson</h3>
              <audio controls src={audioUrl} className="w-full" />
            </div>
          )}

        </CardContent>
        <CardFooter className="flex justify-end">
          <Button onClick={handleMarkAsRead}>{t("mark_as_read")}</Button>
        </CardFooter>
      </Card>
    </div>
  );
}