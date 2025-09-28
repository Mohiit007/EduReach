import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, BookOpen, User } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";
import { LanguageSwitcher } from "./LanguageSwitcher";

interface HeaderProps {
  isAuthenticated?: boolean;
  userRole?: "student" | "teacher" | "admin" | "parent";
}

export const Header = ({ isAuthenticated = false, userRole }: HeaderProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const publicNavItems = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Features", href: "/features" },
    { label: "Contact", href: "/contact" },
  ];

  const roleNavItems = {
    student: [
      { label: "Dashboard", href: "/student" },
      { label: "Lessons", href: "/student/lessons" },
      { label: "Quizzes", href: "/student/quizzes" },
      { label: "Progress", href: "/student/progress" },
      { label: "Virtual Lab", href: "/student/lab" },
    ],
    teacher: [
      { label: "Dashboard", href: "/teacher" },
      { label: "Classes", href: "/teacher/classes" },
      { label: "Assign", href: "/teacher/assign" },
      { label: "Reports", href: "/teacher/reports" },
      { label: "Create Lesson", href: "/teacher/create-lesson" },
    ],
    admin: [
      { label: "Dashboard", href: "/admin" },
      { label: "Users", href: "/admin/users" },
      { label: "Analytics", href: "/admin/analytics" },
      { label: "Settings", href: "/admin/settings" },
    ],
    parent: [
      { label: "Dashboard", href: "/parent" },
      { label: "Tutorials", href: "/parent/tutorials" },
    ],
  };

  const navItems = isAuthenticated && userRole ? roleNavItems[userRole] : publicNavItems;

  return (
    <header className="bg-background/95 backdrop-blur-sm border-b border-border sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
              <BookOpen className="w-5 h-5 text-primary-foreground" />
            </div>
            <span className="text-xl font-bold text-foreground">EduReach</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                className="text-foreground hover:text-primary transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Auth Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <ThemeToggle />
            {(userRole === "student" || userRole === "teacher") && <LanguageSwitcher />}
            {isAuthenticated ? (
              <div className="flex items-center space-x-3">
                <Button variant="ghost" size="sm">
                  <User className="w-4 h-4 mr-2" />
                  Profile
                </Button>
                <Button variant="outline" size="sm" onClick={() => navigate("/")}>
                  Sign Out
                </Button>
              </div>
            ) : (
              <div className="flex items-center space-x-3">
                <Button variant="ghost" size="sm" onClick={() => navigate("/auth/signin")}>
                  Sign In
                </Button>
                <Button variant="hero" size="sm" onClick={() => navigate("/auth/signup")}>
                  Sign Up
                </Button>
              </div>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <nav className="flex flex-col space-y-3">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  to={item.href}
                  className="text-foreground hover:text-primary transition-colors py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              
              <div className="flex items-center justify-between pt-3 border-t border-border">
                <ThemeToggle />
                {(userRole === "student" || userRole === "teacher") && <LanguageSwitcher />}
                {!isAuthenticated && (
                  <div className="flex space-x-2">
                    <Button variant="ghost" size="sm" onClick={() => navigate("/auth/signin")}>
                      Sign In
                    </Button>
                    <Button variant="hero" size="sm" onClick={() => navigate("/auth/signup")}>
                      Sign Up
                    </Button>
                  </div>
                )}
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};