import { LucideIcon } from "lucide-react";

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  gradient?: "primary" | "secondary" | "accent";
}

export const FeatureCard = ({ 
  icon: Icon, 
  title, 
  description, 
  gradient = "primary" 
}: FeatureCardProps) => {
  const gradientClasses = {
    primary: "bg-gradient-primary",
    secondary: "bg-gradient-secondary", 
    accent: "bg-gradient-accent"
  };

  return (
    <div className="group relative bg-card rounded-xl p-6 shadow-soft hover:shadow-medium transition-all duration-300 hover:-translate-y-1">
      <div className={`inline-flex items-center justify-center w-12 h-12 rounded-lg ${gradientClasses[gradient]} mb-4`}>
        <Icon className="w-6 h-6 text-white" />
      </div>
      
      <h3 className="text-xl font-semibold text-card-foreground mb-3">
        {title}
      </h3>
      
      <p className="text-muted-foreground leading-relaxed">
        {description}
      </p>
      
      {/* Decorative gradient overlay on hover */}
      <div className={`absolute inset-0 ${gradientClasses[gradient]} opacity-0 group-hover:opacity-5 rounded-xl transition-opacity duration-300`} />
    </div>
  );
};