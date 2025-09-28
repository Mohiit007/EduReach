import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { 
  Users, 
  BookOpen, 
  Trophy, 
  Clock, 
  TrendingUp, 
  Calendar,
  MessageSquare,
  Star,
  Target,
  Activity,
  GraduationCap,
  Bell
} from "lucide-react";
import { Header } from "@/components/Header";

const ParentDashboard = () => {
  const children = [
    {
      id: 1,
      name: "Emma Johnson",
      grade: "Grade 8",
      avatar: "/placeholder.svg",
      overallProgress: 85,
      lessonsCompleted: 24,
      totalLessons: 30,
      averageScore: 92,
      streak: 7,
      recentActivity: "Completed Math Quiz",
      lastActive: "2 hours ago"
    },
    {
      id: 2,
      name: "Alex Johnson",
      grade: "Grade 6",
      avatar: "/placeholder.svg",
      overallProgress: 78,
      lessonsCompleted: 18,
      totalLessons: 25,
      averageScore: 87,
      streak: 5,
      recentActivity: "Started Science Lab",
      lastActive: "4 hours ago"
    }
  ];

  const recentActivities = [
    { child: "Emma", activity: "Completed Advanced Algebra Quiz", score: 95, time: "2 hours ago" },
    { child: "Alex", activity: "Finished Chemistry Experiment", score: 88, time: "4 hours ago" },
    { child: "Emma", activity: "Submitted History Essay", score: 91, time: "1 day ago" },
    { child: "Alex", activity: "Completed Physics Problems", score: 85, time: "1 day ago" },
    { child: "Emma", activity: "Passed Biology Test", score: 94, time: "2 days ago" }
  ];

  const achievements = [
    { child: "Emma", achievement: "Math Genius", description: "Scored 95%+ on 5 consecutive math quizzes", icon: "🏆" },
    { child: "Alex", achievement: "Science Explorer", description: "Completed 10 virtual lab experiments", icon: "🔬" },
    { child: "Emma", achievement: "Consistent Learner", description: "7-day learning streak", icon: "🔥" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto p-6 space-y-8">
        {/* Welcome Section */}
        <div className="space-y-2">
          <h1 className="text-3xl font-bold tracking-tight">Parent Dashboard</h1>
          <p className="text-muted-foreground">
            Track your children's academic progress and achievements
          </p>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Children</CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{children.length}</div>
              <p className="text-xs text-muted-foreground">Active learners</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Lessons Completed</CardTitle>
              <BookOpen className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">
                {children.reduce((sum, child) => sum + child.lessonsCompleted, 0)}
              </div>
              <p className="text-xs text-muted-foreground">This month</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Average Score</CardTitle>
              <Trophy className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">
                {Math.round(children.reduce((sum, child) => sum + child.averageScore, 0) / children.length)}%
              </div>
              <p className="text-xs text-muted-foreground">Across all subjects</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Active Streaks</CardTitle>
              <Clock className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">
                {Math.max(...children.map(child => child.streak))}
              </div>
              <p className="text-xs text-muted-foreground">Days (highest)</p>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="overview" className="space-y-6">
          <TabsList>
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="progress">Progress Details</TabsTrigger>
            <TabsTrigger value="activities">Recent Activities</TabsTrigger>
            <TabsTrigger value="achievements">Achievements</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            {/* Children Overview */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {children.map((child) => (
                <Card key={child.id}>
                  <CardHeader>
                    <div className="flex items-center space-x-4">
                      <Avatar className="h-12 w-12">
                        <AvatarImage src={child.avatar} />
                        <AvatarFallback>{child.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                      </Avatar>
                      <div className="flex-1">
                        <CardTitle className="text-lg">{child.name}</CardTitle>
                        <CardDescription>{child.grade}</CardDescription>
                      </div>
                      <Badge variant="secondary">{child.averageScore}% avg</Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>Overall Progress</span>
                        <span>{child.overallProgress}%</span>
                      </div>
                      <Progress value={child.overallProgress} className="h-2" />
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div className="space-y-1">
                        <p className="text-muted-foreground">Lessons</p>
                        <p className="font-medium">{child.lessonsCompleted}/{child.totalLessons}</p>
                      </div>
                      <div className="space-y-1">
                        <p className="text-muted-foreground">Streak</p>
                        <p className="font-medium">{child.streak} days</p>
                      </div>
                    </div>
                    
                    <div className="pt-2 border-t">
                      <p className="text-sm text-muted-foreground">Recent Activity</p>
                      <p className="text-sm font-medium">{child.recentActivity}</p>
                      <p className="text-xs text-muted-foreground">{child.lastActive}</p>
                    </div>
                    
                    <div className="flex gap-2">
                      <Button size="sm" variant="outline" className="flex-1">
                        <MessageSquare className="h-4 w-4 mr-2" />
                        Message
                      </Button>
                      <Button size="sm" className="flex-1">
                        <TrendingUp className="h-4 w-4 mr-2" />
                        View Details
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="progress" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {children.map((child) => (
                <Card key={child.id}>
                  <CardHeader>
                    <CardTitle>{child.name} - Subject Progress</CardTitle>
                    <CardDescription>Current academic performance</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {[
                      { subject: "Mathematics", progress: 92, grade: "A" },
                      { subject: "Science", progress: 88, grade: "B+" },
                      { subject: "English", progress: 95, grade: "A" },
                      { subject: "History", progress: 85, grade: "B+" },
                    ].map((subject) => (
                      <div key={subject.subject} className="space-y-2">
                        <div className="flex justify-between items-center">
                          <span className="text-sm font-medium">{subject.subject}</span>
                          <Badge variant={subject.grade.startsWith('A') ? 'default' : 'secondary'}>
                            {subject.grade}
                          </Badge>
                        </div>
                        <Progress value={subject.progress} className="h-2" />
                        <div className="text-xs text-muted-foreground text-right">
                          {subject.progress}%
                        </div>
                      </div>
                    ))}
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="activities" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Recent Activities</CardTitle>
                <CardDescription>Latest academic activities across all children</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentActivities.map((activity, index) => (
                    <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                      <div className="flex items-center space-x-4">
                        <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary/10">
                          <Activity className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <p className="font-medium">{activity.child}</p>
                          <p className="text-sm text-muted-foreground">{activity.activity}</p>
                          <p className="text-xs text-muted-foreground">{activity.time}</p>
                        </div>
                      </div>
                      <Badge variant={activity.score >= 90 ? 'default' : 'secondary'}>
                        {activity.score}%
                      </Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="achievements" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Recent Achievements</CardTitle>
                <CardDescription>Celebrating your children's accomplishments</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {achievements.map((achievement, index) => (
                    <div key={index} className="flex items-center space-x-4 p-4 border rounded-lg">
                      <div className="text-2xl">{achievement.icon}</div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2">
                          <p className="font-medium">{achievement.child}</p>
                          <Badge variant="outline">{achievement.achievement}</Badge>
                        </div>
                        <p className="text-sm text-muted-foreground">{achievement.description}</p>
                      </div>
                      <Button size="sm" variant="ghost">
                        <Star className="h-4 w-4" />
                      </Button>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        {/* Quick Actions */}
        <Card>
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
            <CardDescription>Manage your children's learning experience</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <Button className="flex items-center gap-2">
                <MessageSquare className="h-4 w-4" />
                Contact Teachers
              </Button>
              <Button variant="outline" className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                Schedule Meeting
              </Button>
              <Button variant="outline" className="flex items-center gap-2">
                <TrendingUp className="h-4 w-4" />
                View Reports
              </Button>
              <Button variant="outline" className="flex items-center gap-2">
                <Bell className="h-4 w-4" />
                Set Notifications
              </Button>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default ParentDashboard;