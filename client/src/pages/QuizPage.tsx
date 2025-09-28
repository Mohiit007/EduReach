import { Header } from "@/components/Header";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

interface Quiz {
  id: string;
  title: string;
  description: string;
  status: "completed" | "in-progress" | "not-started";
  score?: number;
}

const mockQuizzes: Quiz[] = [
  {
    id: "1",
    title: "Introduction to Algebra",
    description: "Test your basic algebra knowledge.",
    status: "not-started",
  },
  {
    id: "2",
    title: "Chemistry Basics",
    description: "Fundamental concepts of chemistry.",
    status: "in-progress",
  },
  {
    id: "3",
    title: "English Literature: Macbeth",
    description: "Questions on Shakespeare's Macbeth.",
    status: "completed",
    score: 85,
  },
  {
    id: "4",
    title: "History: World War II",
    description: "Key events and figures of WWII.",
    status: "not-started",
  },
];

const QuizPage = () => {
  const navigate = useNavigate();
  const [quizzes, setQuizzes] = useState<Quiz[]>([]);

  useEffect(() => {
    // In a real application, you would fetch quizzes from an API
    setQuizzes(mockQuizzes);
  }, []);

  const handleStartQuiz = (id: string) => {
    // In a real application, this would navigate to a specific quiz taking page
    console.log(`Starting quiz ${id}`);
    navigate(`/student/quiz/${id}`); // Example navigation to a quiz instance
  };

  return (
    <div className="min-h-screen bg-background">
      <Header isAuthenticated={true} userRole="student" />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-foreground mb-4">Quizzes</h1>
        <p className="text-muted-foreground mb-8">
          Here you can find all your assigned quizzes. Good luck!
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {quizzes.map((quiz) => (
            <Card key={quiz.id} className="flex flex-col">
              <CardHeader>
                <CardTitle>{quiz.title}</CardTitle>
                <p className="text-sm text-muted-foreground mt-1">
                  {quiz.description}
                </p>
              </CardHeader>
              <CardContent className="flex-grow flex flex-col justify-between">
                <div className="text-sm text-muted-foreground mb-4">
                  Status: {" "}
                  <span
                    className={`font-semibold ${quiz.status === "completed"
                        ? "text-green-500"
                        : quiz.status === "in-progress"
                          ? "text-yellow-500"
                          : "text-gray-500"
                      }`}
                  >
                    {quiz.status === "completed"
                      ? `Completed (Score: ${quiz.score}%)`
                      : quiz.status === "in-progress"
                        ? "In Progress"
                        : "Not Started"}
                  </span>
                </div>
                {
                  quiz.status !== "completed" && (
                    <Button
                      onClick={() => handleStartQuiz(quiz.id)}
                      className="w-full"
                    >
                      {quiz.status === "in-progress" ? "Continue Quiz" : "Start Quiz"}
                    </Button>
                  )
                }
                {
                  quiz.status === "completed" && (
                    <Button
                      variant="outline"
                      onClick={() => navigate(`/student/quiz/${quiz.id}/review`)}
                      className="w-full"
                    >
                      Review Quiz
                    </Button>
                  )
                }
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default QuizPage;
