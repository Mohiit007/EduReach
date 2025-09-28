import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Header } from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { BookOpen, User, GraduationCap, Shield, Users } from "lucide-react";

const Auth = () => {
  const navigate = useNavigate();
  const [selectedRole, setSelectedRole] = useState<string>("");

  const handleRoleSelection = (role: string) => {
    setSelectedRole(role);
    // Navigate to role-specific dashboard (would require Supabase authentication)
    navigate(`/${role}`);
  };

  const roles = [
    {
      id: "student",
      title: "Student",
      description: "Access interactive lessons, quizzes, and track your learning progress",
      icon: GraduationCap,
      color: "primary",
    },
    {
      id: "teacher",
      title: "Teacher",
      description: "Manage classes, assign lessons, and monitor student progress",
      icon: User,
      color: "secondary",
    },
    {
      id: "admin",
      title: "Admin",
      description: "Oversee the platform, manage users, and access analytics",
      icon: Shield,
      color: "accent",
    },
    {
      id: "parent",
      title: "Parent",
      description: "Monitor your child's progress and access learning resources",
      icon: Users,
      color: "success",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-8">
            <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-4">
              <BookOpen className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-3xl font-bold text-foreground mb-2">
              Welcome to EduReach
            </h1>
            <p className="text-muted-foreground">
              Sign in to your account or create a new one to get started
            </p>
          </div>

          <Card className="shadow-medium">
            <CardHeader>
              <CardTitle>Authentication</CardTitle>
              <CardDescription>
                Please note: Full authentication requires Supabase integration
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="signin" className="w-full">
                <TabsList className="grid w-full grid-cols-2">
                  <TabsTrigger value="signin">Sign In</TabsTrigger>
                  <TabsTrigger value="signup">Sign Up</TabsTrigger>
                </TabsList>
                
                <TabsContent value="signin" className="space-y-4">
                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="email">Email</Label>
                      <Input id="email" type="email" placeholder="Enter your email" />
                    </div>
                    <div>
                      <Label htmlFor="password">Password</Label>
                      <Input id="password" type="password" placeholder="Enter your password" />
                    </div>
                    <Button className="w-full" variant="hero">
                      Sign In
                    </Button>
                    <Button variant="ghost" className="w-full">
                      Forgot Password?
                    </Button>
                  </div>
                </TabsContent>
                
                <TabsContent value="signup" className="space-y-4">
                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="name">Full Name</Label>
                      <Input id="name" placeholder="Enter your full name" />
                    </div>
                    <div>
                      <Label htmlFor="signup-email">Email</Label>
                      <Input id="signup-email" type="email" placeholder="Enter your email" />
                    </div>
                    <div>
                      <Label htmlFor="role">Role</Label>
                      <Select value={selectedRole} onValueChange={setSelectedRole}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select your role" />
                        </SelectTrigger>
                        <SelectContent>
                          {roles.map((role) => (
                            <SelectItem key={role.id} value={role.id}>
                              {role.title}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label htmlFor="signup-password">Password</Label>
                      <Input id="signup-password" type="password" placeholder="Create a password" />
                    </div>
                    <Button className="w-full" variant="hero">
                      Create Account
                    </Button>
                  </div>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>

          <div className="mt-8">
            <h2 className="text-xl font-semibold text-center mb-6">Choose Your Role</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {roles.map((role) => {
                const Icon = role.icon;
                return (
                  <Card 
                    key={role.id}
                    className="cursor-pointer hover:shadow-medium transition-all duration-300 hover:-translate-y-1"
                    onClick={() => handleRoleSelection(role.id)}
                  >
                    <CardContent className="p-6 text-center">
                      <div className={`w-12 h-12 bg-gradient-${role.color} rounded-lg flex items-center justify-center mx-auto mb-3`}>
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="font-semibold text-lg mb-2">{role.title}</h3>
                      <p className="text-sm text-muted-foreground">{role.description}</p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>

          <div className="mt-8 p-4 bg-primary-light/20 rounded-lg border border-primary/20">
            <h3 className="font-semibold text-primary mb-2">🔒 Authentication Setup Required</h3>
            <p className="text-sm text-muted-foreground mb-3">
              To enable full authentication functionality, connect your project to Supabase using our native integration.
            </p>
            <Button variant="outline" size="sm" onClick={() => window.open("https://docs.lovable.dev/integrations/supabase/", "_blank")}>
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Auth;