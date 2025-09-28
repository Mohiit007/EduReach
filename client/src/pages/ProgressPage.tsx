import { Header } from "@/components/Header";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';

const mockProgressData = {
  overallProgress: 75,
  lessonsCompleted: 12,
  quizzesPassed: 8,
  unitTestScores: [
    { name: "Week 1", score: 65 },
    { name: "Week 2", score: 70 },
    { name: "Week 3", score: 75 },
    { name: "Week 4", score: 80 },
    { name: "Week 5", score: 78 },
    { name: "Week 6", score: 85 },
    { name: "Week 7", score: 90 },
  ],
};

const mockSyllabusCompletion = [
  { name: "Mathematics", value: 70, color: "hsl(var(--primary))" },
  { name: "Science", value: 50, color: "hsl(var(--secondary))" },
  { name: "English", value: 90, color: "hsl(var(--accent))" },
  { name: "History", value: 30, color: "hsl(var(--destructive))" },
];

const ProgressPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header isAuthenticated={true} userRole="student" />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-foreground mb-6">Student Progress Overview</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          <Card>
            <CardHeader>
              <CardTitle>Overall Progress</CardTitle>
            </CardHeader>
            <CardContent>
              <Progress value={mockProgressData.overallProgress} className="w-full mb-2" />
              <p className="text-sm text-muted-foreground">{mockProgressData.overallProgress}% Completed</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Lessons Completed</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-4xl font-bold text-primary">{mockProgressData.lessonsCompleted}</p>
              <p className="text-sm text-muted-foreground">Lessons</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Quizzes Passed</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-4xl font-bold text-success">{mockProgressData.quizzesPassed}</p>
              <p className="text-sm text-muted-foreground">Quizzes</p>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card className="mb-8 lg:mb-0">
            <CardHeader>
              <CardTitle>Unit Test Scores Trend</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="w-full max-w-md mx-auto">
                <ResponsiveContainer width="100%" height={300}>
                  <LineChart
                    data={mockProgressData.unitTestScores}
                    margin={{
                      top: 5, right: 30, left: 20, bottom: 5,
                    }}
                  >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Line type="monotone" dataKey="score" stroke="hsl(var(--primary))" activeDot={{ r: 8 }} />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>

          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Syllabus Completion by Subject</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie
                    data={mockSyllabusCompletion}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    outerRadius={100}
                    fill="#8884d8"
                    dataKey="value"
                    label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                  >
                    {mockSyllabusCompletion.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </div>

      </div>
    </div>
  );
};

export default ProgressPage;
