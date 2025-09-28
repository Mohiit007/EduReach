import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "next-themes";
import Index from "./pages/Index";
import Auth from "./pages/Auth";
import StudentDashboard from "./pages/StudentDashboard";
import TeacherDashboard from "./pages/TeacherDashboard";
import AdminDashboard from "./pages/AdminDashboard";
import ParentDashboard from "./pages/ParentDashboard";
import LessonPage from "./pages/LessonPage";
import LessonsList from "./pages/LessonsList";
import CreateLesson from "./pages/CreateLesson";
import QuizPage from "./pages/QuizPage";
import ProgressPage from "./pages/ProgressPage";
import VirtualLabPage from "./pages/VirtualLabPage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/auth/signin" element={<Auth />} />
            <Route path="/auth/signup" element={<Auth />} />
            <Route path="/student/lessons" element={<LessonsList />} />
            <Route path="/student/lesson/:lessonId" element={<LessonPage />} />
            <Route path="/student/quizzes" element={<QuizPage />} />
            <Route path="/student/progress" element={<ProgressPage />} />
            <Route path="/student/lab" element={<VirtualLabPage />} />
            <Route path="/teacher/create-lesson" element={<CreateLesson />} />
            <Route path="/student/*" element={<StudentDashboard />} />
            <Route path="/teacher" element={<TeacherDashboard />} />
            <Route path="/teacher/*" element={<TeacherDashboard />} />
            <Route path="/admin" element={<AdminDashboard />} />
            <Route path="/admin/*" element={<AdminDashboard />} />
            <Route path="/parent" element={<ParentDashboard />} />
            <Route path="/parent/*" element={<ParentDashboard />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
