import { Header } from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Users,
  BookOpen,
  BarChart3,
  Plus,
  Clock,
  CheckCircle,
  TrendingUp,
  GraduationCap
} from "lucide-react";
import { useState } from "react";

const TeacherDashboard = () => {
  const [isCreateClassOpen, setIsCreateClassOpen] = useState(false);
  const [newClassName, setNewClassName] = useState("");
  const [newClassSection, setNewClassSection] = useState("");
  const [newClassSubject, setNewClassSubject] = useState("");

  const [myClasses, setMyClasses] = useState([
    { id: 1, name: "Class 10 Chemistry", students: 28, activeAssignments: 3, section: "A", subject: "Chemistry" },
    { id: 2, name: "Class 9 Mathematics", students: 25, activeAssignments: 2, section: "B", subject: "Mathematics" },
    { id: 3, name: "Class 11 Physics", students: 22, activeAssignments: 4, section: "C", subject: "Physics" },
  ]);

  const handleCreateClass = () => {
    const newClass = {
      id: myClasses.length + 1,
      name: newClassName,
      section: newClassSection,
      subject: newClassSubject,
      students: 0, // New classes start with 0 students
      activeAssignments: 0, // New classes start with 0 active assignments
    };
    setMyClasses([...myClasses, newClass]);
    console.log("Creating class:", { name: newClassName, section: newClassSection, subject: newClassSubject });
    // In a real application, you would send this data to an API
    // For now, let's just close the dialog and reset the form
    setIsCreateClassOpen(false);
    setNewClassName("");
    setNewClassSection("");
    setNewClassSubject("");
  };

  const recentActivity = [
    { id: 1, student: "Sarah Khan", action: "Completed Chemistry Quiz", time: "2 hours ago" },
    { id: 2, student: "Ahmed Ali", action: "Started Algebra Lesson", time: "4 hours ago" },
    { id: 3, student: "Fatima Sheikh", action: "Submitted Lab Report", time: "6 hours ago" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header isAuthenticated={true} userRole="teacher" />
      
      <div className="container mx-auto px-4 py-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">
            Teacher Dashboard 📚
          </h1>
          <p className="text-muted-foreground">
            Manage your classes, track student progress, and create engaging lessons.
          </p>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center space-x-2">
                <Users className="w-8 h-8 text-primary" />
                <div>
                  <p className="text-2xl font-bold">75</p>
                  <p className="text-sm text-muted-foreground">Total Students</p>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center space-x-2">
                <BookOpen className="w-8 h-8 text-success" />
                <div>
                  <p className="text-2xl font-bold">9</p>
                  <p className="text-sm text-muted-foreground">Active Assignments</p>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center space-x-2">
                <TrendingUp className="w-8 h-8 text-accent" />
                <div>
                  <p className="text-2xl font-bold">87%</p>
                  <p className="text-sm text-muted-foreground">Avg Completion</p>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center space-x-2">
                <GraduationCap className="w-8 h-8 text-secondary" />
                <div>
                  <p className="text-2xl font-bold">3</p>
                  <p className="text-sm text-muted-foreground">Active Classes</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* My Classes */}
            <Card>
              <CardHeader className="flex flex-row items-center justify-between">
                <div>
                  <CardTitle>My Classes</CardTitle>
                  <CardDescription>Manage your active classes and students</CardDescription>
                </div>
                <Dialog open={isCreateClassOpen} onOpenChange={setIsCreateClassOpen}>
                  <DialogTrigger asChild>
                    <Button variant="hero" size="sm">
                      <Plus className="w-4 h-4 mr-2" />
                      Create Class
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-[425px]">
                    <DialogHeader>
                      <DialogTitle>Create New Class</DialogTitle>
                      <DialogDescription>
                        Fill in the details for your new class.
                      </DialogDescription>
                    </DialogHeader>
                    <div className="grid gap-4 py-4">
                      <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="className" className="text-right">
                          Class Name
                        </Label>
                        <Input
                          id="className"
                          value={newClassName}
                          onChange={(e) => setNewClassName(e.target.value)}
                          className="col-span-3"
                        />
                      </div>
                      <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="classSection" className="text-right">
                          Section
                        </Label>
                        <Input
                          id="classSection"
                          value={newClassSection}
                          onChange={(e) => setNewClassSection(e.target.value)}
                          className="col-span-3"
                        />
                      </div>
                      <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="classSubject" className="text-right">
                          Subject
                        </Label>
                        <Input
                          id="classSubject"
                          value={newClassSubject}
                          onChange={(e) => setNewClassSubject(e.target.value)}
                          className="col-span-3"
                        />
                      </div>
                    </div>
                    <div className="flex justify-end">
                      <Button type="submit" onClick={handleCreateClass}>Create Class</Button>
                    </div>
                  </DialogContent>
                </Dialog>
              </CardHeader>
              <CardContent className="space-y-4">
                {myClasses.map((classroom) => (
                  <div key={classroom.id} className="flex items-center justify-between p-4 border rounded-lg hover:shadow-soft transition-shadow">
                    <div>
                      <h3 className="font-medium">{classroom.name}</h3>
                      <p className="text-sm text-muted-foreground">
                        {classroom.students} students • {classroom.activeAssignments} active assignments
                      </p>
                    </div>
                    <div className="flex space-x-2">
                      <Button variant="outline" size="sm">View</Button>
                      <Button 
                        variant="learning" 
                        size="sm"
                        onClick={() => console.log(`Assign button clicked for class: ${classroom.id}`)}
                      >
                        Assign
                      </Button>
                    </div>
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
                    Create Assignment
                  </Button>
                  <Button variant="hero" className="h-20 flex-col">
                    <BarChart3 className="w-6 h-6 mb-2" />
                    View Reports
                  </Button>
                  <Button variant="accent" className="h-20 flex-col">
                    <Users className="w-6 h-6 mb-2" />
                    Manage Students
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Recent Activity */}
            <Card>
              <CardHeader>
                <CardTitle>Recent Activity</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {recentActivity.map((activity) => (
                  <div key={activity.id} className="flex items-start space-x-3 p-3 bg-muted/50 rounded-lg">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                    <div className="flex-1">
                      <p className="font-medium text-sm">{activity.student}</p>
                      <p className="text-xs text-muted-foreground">{activity.action}</p>
                      <p className="text-xs text-muted-foreground">{activity.time}</p>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Pending Tasks */}
            <Card>
              <CardHeader>
                <CardTitle>Pending Tasks</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center space-x-3 p-3 bg-warning/10 rounded-lg border border-warning/20">
                  <Clock className="w-5 h-5 text-warning" />
                  <div>
                    <p className="font-medium text-sm">Grade Quiz Results</p>
                    <p className="text-xs text-muted-foreground">15 submissions pending</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3 p-3 bg-primary/10 rounded-lg border border-primary/20">
                  <BookOpen className="w-5 h-5 text-primary" />
                  <div>
                    <p className="font-medium text-sm">Prepare Tomorrow's Lesson</p>
                    <p className="text-xs text-muted-foreground">Chemistry - Reactions</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeacherDashboard;