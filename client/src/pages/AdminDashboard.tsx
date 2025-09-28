import { Header } from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Users, 
  BookOpen, 
  BarChart3, 
  Settings,
  Shield,
  Database,
  UserCheck,
  AlertTriangle,
  TrendingUp,
  Activity,
  Globe,
  FileText,
  UserPlus,
  School
} from "lucide-react";

const AdminDashboard = () => {
  const systemStats = [
    { label: "Total Users", value: "1,247", icon: Users, color: "text-primary" },
    { label: "Active Teachers", value: "89", icon: UserCheck, color: "text-success" },
    { label: "Total Students", value: "1,158", icon: School, color: "text-accent" },
    { label: "System Health", value: "99.9%", icon: Activity, color: "text-secondary" }
  ];

  const recentUsers = [
    { id: 1, name: "Dr. Sarah Ahmed", role: "Teacher", status: "Active", joined: "2 hours ago" },
    { id: 2, name: "Ahmed Hassan", role: "Student", status: "Active", joined: "4 hours ago" },
    { id: 3, name: "Prof. Fatima Khan", role: "Teacher", status: "Pending", joined: "1 day ago" },
  ];

  const systemAlerts = [
    { id: 1, type: "warning", message: "Server load above 80%", time: "5 min ago" },
    { id: 2, type: "info", message: "Backup completed successfully", time: "1 hour ago" },
    { id: 3, type: "success", message: "Database optimization finished", time: "2 hours ago" },
  ];

  const quickActions = [
    { label: "User Management", icon: Users, variant: "default" as const },
    { label: "System Reports", icon: BarChart3, variant: "secondary" as const },
    { label: "Security Settings", icon: Shield, variant: "accent" as const },
    { label: "Database Admin", icon: Database, variant: "hero" as const },
    { label: "Content Management", icon: FileText, variant: "learning" as const },
    { label: "Global Settings", icon: Settings, variant: "outline" as const }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header isAuthenticated={true} userRole="admin" />
      
      <div className="container mx-auto px-4 py-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">
            Admin Dashboard 🔧
          </h1>
          <p className="text-muted-foreground">
            Manage users, monitor system performance, and configure platform settings.
          </p>
        </div>

        {/* System Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          {systemStats.map((stat, index) => (
            <Card key={index}>
              <CardContent className="p-6">
                <div className="flex items-center space-x-2">
                  <stat.icon className={`w-8 h-8 ${stat.color}`} />
                  <div>
                    <p className="text-2xl font-bold">{stat.value}</p>
                    <p className="text-sm text-muted-foreground">{stat.label}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* User Management */}
            <Card>
              <CardHeader className="flex flex-row items-center justify-between">
                <div>
                  <CardTitle>User Management</CardTitle>
                  <CardDescription>Manage teachers, students, and administrators</CardDescription>
                </div>
                <Button variant="hero" size="sm">
                  <UserPlus className="w-4 h-4 mr-2" />
                  Add User
                </Button>
              </CardHeader>
              <CardContent className="space-y-4">
                {recentUsers.map((user) => (
                  <div key={user.id} className="flex items-center justify-between p-4 border rounded-lg hover:shadow-soft transition-shadow">
                    <div>
                      <h3 className="font-medium">{user.name}</h3>
                      <p className="text-sm text-muted-foreground">
                        {user.role} • {user.status} • Joined {user.joined}
                      </p>
                    </div>
                    <div className="flex space-x-2">
                      <Button variant="outline" size="sm">View</Button>
                      <Button variant="learning" size="sm">Edit</Button>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card>
              <CardHeader>
                <CardTitle>Administrative Actions</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {quickActions.map((action, index) => (
                    <Button key={index} variant={action.variant} className="h-20 flex-col">
                      <action.icon className="w-6 h-6 mb-2" />
                      {action.label}
                    </Button>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* System Performance */}
            <Card>
              <CardHeader>
                <CardTitle>System Performance</CardTitle>
                <CardDescription>Monitor platform health and usage metrics</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="text-center p-4 bg-primary/10 rounded-lg">
                    <Globe className="w-8 h-8 text-primary mx-auto mb-2" />
                    <p className="text-2xl font-bold">99.9%</p>
                    <p className="text-sm text-muted-foreground">Uptime</p>
                  </div>
                  <div className="text-center p-4 bg-success/10 rounded-lg">
                    <TrendingUp className="w-8 h-8 text-success mx-auto mb-2" />
                    <p className="text-2xl font-bold">2.3s</p>
                    <p className="text-sm text-muted-foreground">Avg Response</p>
                  </div>
                  <div className="text-center p-4 bg-accent/10 rounded-lg">
                    <Database className="w-8 h-8 text-accent mx-auto mb-2" />
                    <p className="text-2xl font-bold">76%</p>
                    <p className="text-sm text-muted-foreground">Storage Used</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* System Alerts */}
            <Card>
              <CardHeader>
                <CardTitle>System Alerts</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {systemAlerts.map((alert) => (
                  <div key={alert.id} className={`flex items-start space-x-3 p-3 rounded-lg border ${
                    alert.type === 'warning' ? 'bg-warning/10 border-warning/20' :
                    alert.type === 'success' ? 'bg-success/10 border-success/20' :
                    'bg-primary/10 border-primary/20'
                  }`}>
                    <AlertTriangle className={`w-5 h-5 mt-0.5 ${
                      alert.type === 'warning' ? 'text-warning' :
                      alert.type === 'success' ? 'text-success' :
                      'text-primary'
                    }`} />
                    <div className="flex-1">
                      <p className="font-medium text-sm">{alert.message}</p>
                      <p className="text-xs text-muted-foreground">{alert.time}</p>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Platform Analytics */}
            <Card>
              <CardHeader>
                <CardTitle>Platform Analytics</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-sm">Daily Active Users</span>
                  <span className="font-bold">847</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm">Lessons Completed</span>
                  <span className="font-bold">1,234</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm">Assignments Submitted</span>
                  <span className="font-bold">567</span>
                </div>
                <Button variant="outline" className="w-full mt-4">
                  <BarChart3 className="w-4 h-4 mr-2" />
                  View Full Report
                </Button>
              </CardContent>
            </Card>

            {/* Quick Settings */}
            <Card>
              <CardHeader>
                <CardTitle>Quick Settings</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button variant="outline" className="w-full justify-start">
                  <Shield className="w-4 h-4 mr-2" />
                  Security Settings
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <Database className="w-4 h-4 mr-2" />
                  Backup Management
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <Settings className="w-4 h-4 mr-2" />
                  System Configuration
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;