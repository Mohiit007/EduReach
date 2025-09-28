import { Header } from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Link } from "react-router-dom";
import {
  BookOpen,
  CheckCircle,
  Clock,
  Trophy,
  FlaskConical,
  BarChart3,
  Play,
  Award
} from "lucide-react";
import { useLesson } from "@/context/LessonContext";

const StudentDashboard = () => {
  const initialRecentLessons = [
    { id: "1", title: "Basic Chemistry Reactions", progress: 85, status: "in-progress", subject: "Chemistry" },
    { id: "2", title: "Algebra Fundamentals", progress: 100, status: "completed", subject: "Mathematics" },
    { id: "3", title: "English Grammar", progress: 45, status: "in-progress", subject: "English" },
  ];

  const { lessons: assignedLessons } = useLesson();

  // Combine initial mock lessons with dynamically assigned lessons
  // Filter out duplicates if a dynamic lesson has the same ID as an initial lesson
  const allLessonsMap = new Map();
  initialRecentLessons.forEach(lesson => allLessonsMap.set(lesson.id, lesson));
  assignedLessons.forEach(lesson => allLessonsMap.set(lesson.id, { ...lesson, progress: 0, status: "not-started" })); // Add new lessons with default progress/status

  const recentLessons = Array.from(allLessonsMap.values());

  const quizResults = [
    { id: 1, subject: "Chemistry", score: 92, date: "2024-01-15" },
    { id: 2, subject: "Mathematics", score: 88, date: "2024-01-14" },
    { id: 3, subject: "English", score: 95, date: "2024-01-13" },
  ];

  const achievements = [
    { id: 1, title: "First Quiz Completed", icon: Trophy, color: "accent" },
    { id: 2, title: "5-Day Streak", icon: Award, color: "success" },
    { id: 3, title: "Lab Explorer", icon: FlaskConical, color: "primary" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header isAuthenticated={true} userRole="student" />

      <div className="container mx-auto px-4 py-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">
            Welcome back, Student! 👋
          </h1>
          <p className="text-muted-foreground">
            Continue your learning journey and track your progress.
          </p>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center space-x-2">
                <BookOpen className="w-8 h-8 text-primary" />
                <div>
                  <p className="text-2xl font-bold">12</p>
                  <p className="text-sm text-muted-foreground">Lessons Completed</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-8 h-8 text-success" />
                <div>
                  <p className="text-2xl font-bold">8</p>
                  <p className="text-sm text-muted-foreground">Quizzes Passed</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center space-x-2">
                <Clock className="w-8 h-8 text-accent" />
                <div>
                  <p className="text-2xl font-bold">5</p>
                  <p className="text-sm text-muted-foreground">Day Streak</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center space-x-2">
                <BarChart3 className="w-8 h-8 text-secondary" />
                <div>
                  <p className="text-2xl font-bold">92%</p>
                  <p className="text-sm text-muted-foreground">Average Score</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Continue Learning */}
          <div className="lg:col-span-2 space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Continue Learning</CardTitle>
                <CardDescription>Pick up where you left off</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {recentLessons.map((lesson) => (
                  <div key={lesson.id} className="flex items-center justify-between p-4 border rounded-lg">
                    <div className="flex-1">
                      <h3 className="font-medium">{lesson.title}</h3>
                      <p className="text-sm text-muted-foreground mt-1">
                        Explore interactive simulations in the Virtual Lab.
                      </p>
                      <div className="flex items-center space-x-2 mt-2">
                        <Progress value={lesson.progress} className="flex-1 max-w-xs" />
                        <span className="text-sm text-muted-foreground">{lesson.progress}%</span>
                      </div>
                      {lesson.audio && (
                        <div className="mt-2">
                          <audio controls src={URL.createObjectURL(lesson.audio)} className="w-full" />
                        </div>
                      )}
                    </div>
                    <Link to={`/student/lesson/${lesson.id}`}>
                      <Button variant={lesson.status === "completed" ? "success" : "hero"} size="sm">
                        {lesson.status === "completed" ? (
                          <CheckCircle className="w-4 h-4 mr-2" />
                        ) : (
                          <Play className="w-4 h-4 mr-2" />
                        )}
                        {lesson.status === "completed" ? "Review" : "Continue"}
                      </Button>
                    </Link>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card>
              <CardHeader>
                <CardTitle>Quick Actions</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <Button variant="learning" className="h-20 flex-col">
                    <BookOpen className="w-6 h-6 mb-2" />
                    Browse Lessons
                  </Button>
                  <Button variant="hero" className="h-20 flex-col">
                    <CheckCircle className="w-6 h-6 mb-2" />
                    Take Quiz
                  </Button>
                  <Button variant="accent" className="h-20 flex-col">
                    <FlaskConical className="w-6 h-6 mb-2" />
                    Virtual Lab
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Recent Quiz Results */}
            <Card>
              <CardHeader>
                <CardTitle>Recent Quiz Results</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {quizResults.map((quiz) => (
                  <div key={quiz.id} className="flex justify-between items-center p-3 bg-muted/50 rounded-lg">
                    <div>
                      <p className="font-medium text-sm">{quiz.subject}</p>
                      <p className="text-xs text-muted-foreground">{quiz.date}</p>
                    </div>
                    <div className="text-right">
                      <p className="font-bold text-lg text-primary">{quiz.score}%</p>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Achievements */}
            <Card>
              <CardHeader>
                <CardTitle>Recent Achievements</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {achievements.map((achievement) => {
                  const Icon = achievement.icon;
                  return (
                    <div key={achievement.id} className="flex items-center space-x-3 p-3 bg-muted/50 rounded-lg">
                      <div className={`w-10 h-10 bg-gradient-${achievement.color} rounded-lg flex items-center justify-center`}>
                        <Icon className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <p className="font-medium text-sm">{achievement.title}</p>
                      </div>
                    </div>
                  );
                })}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentDashboard;