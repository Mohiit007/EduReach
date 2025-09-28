import React, { createContext, useContext, useState, ReactNode, useEffect } from 'react';
import { mockLessonsData } from '../data/mockLessons';

interface Lesson {
  id: string;
  title: string;
  subject: string;
  description: string;
  content: string;
  audio?: Blob;
}

interface LessonContextType {
  lessons: Lesson[];
  setLessons: (lessons: Lesson[]) => void;
  lesson: Lesson | null;
  setLesson: (lesson: Lesson | null) => void;
  addLesson: (lesson: Lesson) => void;
}

const LessonContext = createContext<LessonContextType | undefined>(undefined);

export const LessonProvider = ({ children }: { children: ReactNode }) => {
  const [lessons, setLessons] = useState<Lesson[]>(mockLessonsData);
  const [lesson, setLesson] = useState<Lesson | null>(null);

  const addLesson = (newLesson: Lesson) => {
    setLessons((prevLessons) => [...prevLessons, newLesson]);
  };

  return (
    <LessonContext.Provider value={{ lessons, setLessons, lesson, setLesson, addLesson }}>
      {children}
    </LessonContext.Provider>
  );
};

export const useLesson = () => {
  const context = useContext(LessonContext);
  if (context === undefined) {
    throw new Error('useLesson must be used within a LessonProvider');
  }
  return context;
};
