import { Header } from "@/components/Header";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useState } from "react";

const chemistryElements = [
  { id: "H", name: "Hydrogen", description: "A colorless, odorless, highly flammable gaseous element." },
  { id: "O", name: "Oxygen", description: "A colorless, odorless reactive gaseous element." },
  { id: "C", name: "Carbon", description: "A nonmetallic element occurring in a wide variety of forms." },
  { id: "Fe", name: "Iron", description: "A common metallic element, ductile and malleable." },
  { id: "Au", name: "Gold", description: "A precious yellow metallic element, highly malleable and ductile." },
];

const jarOptions = [
  { id: "beaker_100ml", name: "100ml Beaker", description: "A 100ml glass beaker." },
  { id: "flask_250ml", name: "250ml Erlenmeyer Flask", description: "A 250ml conical flask." },
  { id: "test_tube", name: "Test Tube", description: "A small glass tube for chemical experiments." },
];

const chemistryTools = [
  { id: "bunsen_burner", name: "Bunsen Burner", description: "Used for heating substances." },
  { id: "stirring_rod", name: "Stirring Rod", description: "Used for mixing chemicals." },
  { id: "safety_goggles", name: "Safety Goggles", description: "Protective eyewear." },
];

const VirtualLabPage = () => {
  const [selectedElement, setSelectedElement] = useState<string | null>(null);
  const [selectedJar, setSelectedJar] = useState<string | null>(null);
  const [selectedTool, setSelectedTool] = useState<string | null>(null);
  return (
    <div className="min-h-screen bg-background">
      <Header isAuthenticated={true} userRole="student" />
      <div className="container mx-auto px-4 py-8 flex flex-col lg:flex-row gap-8">
        {/* Sidebar for Elements, Jars, and Tools */}
        <aside className="lg:w-1/4 w-full">
          <ScrollArea className="h-[calc(100vh-10rem)] pr-4">
            <Card className="mb-6">
              <CardHeader>
                <CardTitle>Chemistry Elements</CardTitle>
              </CardHeader>
              <CardContent>
                <Select onValueChange={setSelectedElement} value={selectedElement || ""}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select an element" />
                  </SelectTrigger>
                  <SelectContent>
                    {chemistryElements.map((element) => (
                      <SelectItem key={element.id} value={element.id}>
                        {element.name} ({element.id})
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                {selectedElement && (
                  <p className="text-sm text-muted-foreground mt-2">
                    {chemistryElements.find((el) => el.id === selectedElement)?.description}
                  </p>
                )}
              </CardContent>
            </Card>

            <Card className="mb-6">
              <CardHeader>
                <CardTitle>Jar Options</CardTitle>
              </CardHeader>
              <CardContent>
                <Select onValueChange={setSelectedJar} value={selectedJar || ""}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select a jar" />
                  </SelectTrigger>
                  <SelectContent>
                    {jarOptions.map((jar) => (
                      <SelectItem key={jar.id} value={jar.id}>
                        {jar.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                {selectedJar && (
                  <p className="text-sm text-muted-foreground mt-2">
                    {jarOptions.find((j) => j.id === selectedJar)?.description}
                  </p>
                )}
              </CardContent>
            </Card>

            <Card className="mb-6">
              <CardHeader>
                <CardTitle>Chemistry Tools</CardTitle>
              </CardHeader>
              <CardContent>
                <Select onValueChange={setSelectedTool} value={selectedTool || ""}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select a tool" />
                  </SelectTrigger>
                  <SelectContent>
                    {chemistryTools.map((tool) => (
                      <SelectItem key={tool.id} value={tool.id}>
                        {tool.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                {selectedTool && (
                  <p className="text-sm text-muted-foreground mt-2">
                    {chemistryTools.find((t) => t.id === selectedTool)?.description}
                  </p>
                )}
              </CardContent>
            </Card>
          </ScrollArea>
        </aside>

        {/* Main Lab Simulation Area */}
        <main className="flex-1">
          <Card className="h-full">
            <CardHeader>
              <CardTitle>Lab Simulation</CardTitle>
            </CardHeader>
            <CardContent className="h-[calc(100%-4rem)] flex items-center justify-center text-muted-foreground">
              <p>Selected Element: {selectedElement ? chemistryElements.find(el => el.id === selectedElement)?.name : "None"}</p>
              <p>Selected Jar: {selectedJar ? jarOptions.find(j => j.id === selectedJar)?.name : "None"}</p>
              <p>Selected Tool: {selectedTool ? chemistryTools.find(t => t.id === selectedTool)?.name : "None"}</p>
            </CardContent>
          </Card>
        </main>
      </div>
    </div>
  );
};

export default VirtualLabPage;
