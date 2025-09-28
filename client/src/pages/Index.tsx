import { Header } from "@/components/Header";
import { FeatureCard } from "@/components/FeatureCard";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import heroImage from "@/assets/hero-education.jpg";
import {
  BookOpen,
  Users,
  FlaskConical,
  BarChart3,
  Globe,
  Download,
  Play,
  ArrowRight,
  CheckCircle
} from "lucide-react";

const Index = () => {
  const navigate = useNavigate();

  const features = [
    {
      icon: BookOpen,
      title: "Interactive Lessons",
      description: "Audio-synchronized multilingual lessons with engaging content for effective learning.",
      gradient: "primary" as const,
    },
    {
      icon: FlaskConical,
      title: "Unreal Chemistry Lab",
      description: "Virtual laboratory experiments with drag-and-drop interactions and real-time assessments.",
      gradient: "accent" as const,
    },
    {
      icon: BarChart3,
      title: "Progress Tracking",
      description: "Comprehensive analytics for students, teachers, and parents to monitor learning progress.",
      gradient: "secondary" as const,
    },
    {
      icon: Users,
      title: "Teacher Dashboard",
      description: "Complete classroom management with assignment tracking and student progress monitoring.",
      gradient: "primary" as const,
    },
    {
      icon: Globe,
      title: "Multilingual Support",
      description: "Native support for Punjabi, Hindi, and English to reach diverse learning communities.",
      gradient: "accent" as const,
    },
    {
      icon: Download,
      title: "Offline Access",
      description: "Download lessons and sync progress when internet connectivity is available.",
      gradient: "secondary" as const,
    },
  ];

  const stats = [
    { number: "10,000+", label: "Students Enrolled" },
    { number: "500+", label: "Teachers Active" },
    { number: "50+", label: "Schools Connected" },
    { number: "95%", label: "Success Rate" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-background via-primary-light/20 to-secondary-light/20">
        {/* Background Image */}
        <div className="absolute inset-0 opacity-10">
          <img 
            src={heroImage} 
            alt="Students learning with modern technology"
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="container mx-auto px-4 py-20 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
              Bridging the Gap in
              <span className="bg-gradient-hero bg-clip-text text-transparent"> Digital Education</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
              Empowering students and teachers with interactive, multilingual learning experiences 
              designed for the digital age.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button 
                variant="hero" 
                size="lg" 
                onClick={() => navigate("/auth/signup")}
                className="text-lg"
              >
                Start Learning Today
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              
              <Button 
                variant="outline" 
                size="lg"
                onClick={() => navigate("/features")}
                className="text-lg"
              >
                <Play className="mr-2 w-5 h-5" />
                Explore Features
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-2xl mx-auto">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-2xl md:text-3xl font-bold text-primary mb-1">
                    {stat.number}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Powerful Features for Modern Education
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Everything you need to create engaging, accessible, and effective learning experiences.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <FeatureCard
                key={index}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
                gradient={feature.gradient}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-hero">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Education?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Join thousands of educators and students already using EduReach to create 
            better learning outcomes.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              variant="outline" 
              size="lg"
              onClick={() => navigate("/auth/signup")}
              className="bg-white text-darkblue hover:bg-white/90 border-white text-lg"
            >
              Explore Knowledge
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-card border-t border-border py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
                  <BookOpen className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold">EduReach</span>
              </div>
              <p className="text-muted-foreground mb-4">
                Bridging the digital divide in education through innovative, 
                accessible learning solutions.
              </p>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Platform</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li><a href="/features" className="hover:text-foreground">Features</a></li>
                <li><a href="/about" className="hover:text-foreground">About Us</a></li>
                <li><a href="/contact" className="hover:text-foreground">Contact</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Support</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li><a href="#" className="hover:text-foreground">Help Center</a></li>
                <li><a href="#" className="hover:text-foreground">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-foreground">Terms of Service</a></li>
              </ul>
            </div>
          </div>
          
          <p className="text-center text-muted-foreground mt-8">2025 EduReach</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
