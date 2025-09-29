import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BarChart, PieChart, LineChart } from "lucide-react"; // Placeholder icons for charts

// Mock Data for demonstration
const mockClassReports = [
  {
    id: "class1",
    name: "10th Grade A - Mathematics",
    performanceData: [85, 90, 80, 92, 88], // Mock scores over time/assignments
    passingPercentage: 85,
    unitTestProgress: [
      { unit: "Algebra", score: 80, total: 100 },
      { unit: "Geometry", score: 75, total: 100 },
      { unit: "Calculus Prep", score: 90, total: 100 },
    ],
  },
  {
    id: "class3",
    name: "9th Grade C - English",
    performanceData: [70, 75, 80, 78, 85], // Mock scores over time/assignments
    passingPercentage: 70,
    unitTestProgress: [
      { unit: "Grammar", score: 85, total: 100 },
      { unit: "Literature", score: 65, total: 100 },
    ],
  },
  {
    id: "class4",
    name: "11th Grade A - Physics",
    performanceData: [90, 88, 95, 90, 93],
    passingPercentage: 95,
    unitTestProgress: [
      { unit: "Mechanics", score: 92, total: 100 },
      { unit: "Thermodynamics", score: 88, total: 100 },
    ],
  },
  {
    id: "class7",
    name: "11th Grade B - Chemistry",
    performanceData: [78, 82, 80, 85, 83],
    passingPercentage: 75,
    unitTestProgress: [
      { unit: "Organic Chem", score: 70, total: 100 },
      { unit: "Inorganic Chem", score: 80, total: 100 },
      { unit: "Physical Chem", score: 78, total: 100 },
    ],
  },
];

// Placeholder components for charts (these would typically be actual charting libraries)
const PerformanceGraph = ({ data }: { data: number[] }) => {
  if (data.length === 0) return <p className="text-muted-foreground text-center">No performance data available.</p>;

  const width = 300;
  const height = 150;
  const padding = 20;
  const maxDataValue = Math.max(...data);
  const minDataValue = Math.min(...data);

  const scaleX = (index: number) => padding + (index / (data.length - 1)) * (width - 2 * padding);
  const scaleY = (value: number) => {
    if (maxDataValue === minDataValue) return height - padding; // Handle flat line
    return height - padding - ((value - minDataValue) / (maxDataValue - minDataValue)) * (height - 2 * padding);
  };

  const points = data
    .map((value, index) => `${scaleX(index)},${scaleY(value)}`)
    .join(" ");

  return (
    <div className="w-full flex justify-center">
      <svg viewBox={`0 0 ${width} ${height}`} className="w-full h-auto max-w-sm">
        {/* X-Axis Line */}
        <line x1={padding} y1={height - padding} x2={width - padding} y2={height - padding} stroke="#ccc" />
        {/* Y-Axis Line */}
        <line x1={padding} y1={padding} x2={padding} y2={height - padding} stroke="#ccc" />

        {/* Data points and line */}
        <polyline
          fill="none"
          stroke="hsl(var(--primary))"
          strokeWidth="2"
          points={points}
        />
        {data.map((value, index) => (
          <circle
            key={index}
            cx={scaleX(index)}
            cy={scaleY(value)}
            r="3"
            fill="hsl(var(--primary))"
          />
        ))}

        {/* Labels (simplified) */}
        {data.map((value, index) => (
          <text
            key={`text-${index}`}
            x={scaleX(index)}
            y={scaleY(value) - 7}
            textAnchor="middle"
            className="text-xs fill-foreground"
          >
            {value}
          </text>
        ))}
      </svg>
    </div>
  );
};

const PassingPercentagePieChart = ({ percentage }: { percentage: number }) => {
  const radius = 40;
  const circumference = 2 * Math.PI * radius;
  const passingStrokeDasharray = `${(percentage / 100) * circumference} ${circumference}`;
  const failingPercentage = 100 - percentage;
  const failingStrokeDasharray = `${(failingPercentage / 100) * circumference} ${circumference}`;

  return (
    <div className="flex items-center justify-center relative w-48 h-48 mx-auto">
      <svg viewBox="0 0 100 100" className="w-full h-full transform -rotate-90">
        {/* Failing portion */}
        <circle
          className="text-destructive/30"
          strokeWidth="15"
          stroke="currentColor"
          fill="transparent"
          r={radius}
          cx="50"
          cy="50"
        />
        {/* Passing portion */}
        <circle
          className="text-primary"
          strokeWidth="15"
          stroke="currentColor"
          fill="transparent"
          r={radius}
          cx="50"
          cy="50"
          strokeDasharray={passingStrokeDasharray}
          strokeLinecap="round"
        />
      </svg>
      <div className="absolute flex flex-col items-center justify-center">
        <span className="text-2xl font-bold text-foreground">{percentage}%</span>
        <span className="text-sm text-muted-foreground">Passing</span>
      </div>
    </div>
  );
};

export default function ReportsPage() {
  const [selectedClassId, setSelectedClassId] = useState<string | null>(mockClassReports[0]?.id || null);

  const selectedClassReport = selectedClassId
    ? mockClassReports.find((report) => report.id === selectedClassId)
    : null;

  return (
    <div className="container mx-auto py-8">
      <h2 className="text-4xl font-bold mb-6 text-center">Teacher Reports</h2>

      <Card className="w-full max-w-6xl mx-auto">
        <CardHeader>
          <CardTitle className="text-3xl">Class Performance Overview</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Navbar for selecting classes */}
          <div className="flex flex-wrap gap-2 mb-4 border-b pb-4">
            {mockClassReports.map((classReport) => (
              <Button
                key={classReport.id}
                variant={selectedClassId === classReport.id ? "default" : "outline"}
                onClick={() => setSelectedClassId(classReport.id)}
              >
                {classReport.name.split(" - ")[0]}
              </Button>
            ))}
          </div>

          {selectedClassReport ? (
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold">Report for {selectedClassReport.name}</h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Performance Graph */}
                <Card>
                  <CardHeader>
                    <CardTitle>Performance Trend</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <PerformanceGraph data={selectedClassReport.performanceData} />
                  </CardContent>
                </Card>

                {/* Passing Percentage Pie Chart */}
                <Card>
                  <CardHeader>
                    <CardTitle>Passing Percentage</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <PassingPercentagePieChart percentage={selectedClassReport.passingPercentage} />
                  </CardContent>
                </Card>
              </div>

              {/* Unit Test Progress */}
              <Card>
                <CardHeader>
                  <CardTitle>Unit Test Progress</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {selectedClassReport.unitTestProgress.length === 0 ? (
                      <p className="text-muted-foreground">No unit test progress available.</p>
                    ) : (
                      selectedClassReport.unitTestProgress.map((unit, index) => (
                        <div key={index} className="flex items-center justify-between p-3 bg-muted/50 rounded-md">
                          <span className="font-medium">{unit.unit}</span>
                          <span className="text-muted-foreground">{unit.score}/{unit.total}</span>
                        </div>
                      ))
                    )}
                  </div>
                </CardContent>
              </Card>
            </div>
          ) : (
            <p className="text-muted-foreground text-center">Please select a class to view its reports.</p>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
