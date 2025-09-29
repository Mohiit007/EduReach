import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { useToast } from '@/components/ui/use-toast';
import { User } from 'lucide-react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

const mockClasses = [
  { id: '1', name: '10th Grade', section: 'A', subject: 'Mathematics', students: [
    { studentId: 's1', studentName: 'Alice', studentEmail: 'alice@example.com' },
    { studentId: 's8', studentName: 'David', studentEmail: 'david@example.com' },
  ] },
  { id: '3', name: '9th Grade', section: 'C', subject: 'English', students: [
    { studentId: 's9', studentName: 'Fiona', studentEmail: 'fiona@example.com' },
  ] },
  { id: '4', name: '11th Grade', section: 'A', subject: 'Physics', students: [
    { studentId: 's7', studentName: 'Grace', studentEmail: 'grace@example.com' },
  ] },
  { id: '7', name: '11th Grade', section: 'B', subject: 'Chemistry', students: [
    { studentId: 's10', studentName: 'Harry', studentEmail: 'harry@example.com' },
  ] },
  { id: '8', name: '10th Grade', section: 'B', subject: 'Science', students: [
    { studentId: 's11', studentName: 'Ivy', studentEmail: 'ivy@example.com' },
  ] },
  { id: '9', name: '9th Grade', section: 'D', subject: 'Social Science', students: [
    { studentId: 's12', studentName: 'Jack', studentEmail: 'jack@example.com' },
  ] },
  { id: '5', name: '8th Grade', section: 'A', subject: 'History', students: [] },
];

const mockPendingRequests = [
  { classId: '1', className: '10th Grade', section: 'A', subject: 'Mathematics', requests: [
    { studentId: 's1', studentName: 'Alice', studentEmail: 'alice@example.com' },
    { studentId: 's3', studentName: 'Charlie', studentEmail: 'charlie@example.com' },
  ] },
  { classId: '3', className: '9th Grade', section: 'C', subject: 'English', requests: [
    { studentId: 's2', studentName: 'Bob', studentEmail: 'bob@example.com' },
  ] },
  {
    classId: '2',
    className: '10th Grade',
    section: 'B',
    subject: 'Science',
    requests: [
      { studentId: 's4', studentName: 'Diana', studentEmail: 'diana@example.com' },
      { studentId: 's5', studentName: 'Eve', studentEmail: 'eve@example.com' },
      { studentId: 's6', studentName: 'Frank', studentEmail: 'frank@example.com' },
    ],
  },
  {
    classId: '4',
    className: '11th Grade',
    section: 'A',
    subject: 'Physics',
    requests: [
      { studentId: 's7', studentName: 'Grace', studentEmail: 'grace@example.com' },
    ],
  },
];

const ClassesPage = () => {
  const [newClassName, setNewClassName] = useState('');
  const [newSection, setNewSection] = useState('');
  const [newSubject, setNewSubject] = useState('');
  const [classes, setClasses] = useState<any[]>(mockClasses); // Initialize with mock data
  const [pendingRequests, setPendingRequests] = useState<any[]>(mockPendingRequests); // State for pending requests
  const [activeTab, setActiveTab] = useState('manageClasses'); // New state for active tab
  const [selectedClassIdForStudents, setSelectedClassIdForStudents] = useState<string | null>(null); // State for selected class in View Students
  const [selectedSectionForStudents, setSelectedSectionForStudents] = useState<string | null>(null); // State for selected section in View Students
  const { toast } = useToast();

  useEffect(() => {
    fetchClasses();
    fetchPendingRequests();
  }, []);

  const fetchClasses = async () => {
    try {
      const response = await fetch('/api/teacher/classes');
      if (response.ok) {
        const data = await response.json();
        // Assuming data.classes now includes a 'students' array for each class
        setClasses(data.classes);
      } else {
        throw new Error('Failed to fetch classes');
      }
    } catch (error) {
      console.error('Error fetching classes:', error);
      toast({
        title: "Error",
        description: "Failed to load classes.",
        variant: "destructive",
      });
    }
  };

  const fetchPendingRequests = async () => {
    try {
      const response = await fetch('/api/teacher/classes/requests');
      if (response.ok) {
        const data = await response.json();
        setPendingRequests(data.pendingRequests);
      } else {
        throw new Error('Failed to fetch pending requests');
      }
    } catch (error) {
      console.error('Error fetching pending requests:', error);
      toast({
        title: "Error",
        description: "Failed to load pending student requests.",
        variant: "destructive",
      });
    }
  };

  const handleCreateClass = async () => {
    if (!newClassName || !newSection || !newSubject) {
      toast({
        title: "Missing Information",
        description: "Please fill in class name, section, and subject.",
        variant: "destructive",
      });
      return;
    }

    // For now, just add to mock data
    // const newClass = { id: String(Date.now()), name: newClassName, section: newSection, subject: newSubject };
    // setClasses((prevClasses) => [...prevClasses, newClass]);
    // setNewClassName('');
    // setNewSection('');
    // setNewSubject('');
    // toast({
    //   title: "Class Created",
    //   description: `Class "${newClassName} - ${newSection} (${newSubject})" has been created.`,
    // });
    
    // In a real scenario, you would still send this to the backend after database is connected
    try {
      const response = await fetch('/api/teacher/classes', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name: newClassName, section: newSection, subject: newSubject }),
      });

      if (response.ok) {
        const data = await response.json();
        setClasses((prevClasses) => [...prevClasses, { ...data.class, students: [] }]); // Initialize new class with empty students array
        setNewClassName('');
        setNewSection('');
        setNewSubject('');
        toast({
          title: "Class Created",
          description: `Class "${data.class.name} - ${data.class.section} (${data.class.subject})" has been created.`,
        });
      } else {
        throw new Error('Failed to create class');
      }
    } catch (error) {
      console.error('Error creating class:', error);
      toast({
        title: "Error",
        description: "Failed to create class.",
        variant: "destructive",
      });
    }
  };

  const handleApproveRequest = async (classId: string, studentId: string) => {
    try {
      const response = await fetch('/api/teacher/classes/requests/approve', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ classId, studentId }),
      });

      if (response.ok) {
        // After approval, remove from pending and potentially add to students in classes state if needed
        setPendingRequests(prevRequests => prevRequests.map(
          (classReq) => classReq.classId === classId
            ? { ...classReq, requests: classReq.requests.filter((req: any) => req.studentId !== studentId) }
            : classReq
        ).filter(classReq => classReq.requests.length > 0));
        
        // Optionally, refetch classes or update local state to reflect the new student in the class
        fetchClasses(); 

        toast({
          title: "Request Approved",
          description: `Student request for class ${classId} has been approved.`,
        });
      } else {
        throw new Error('Failed to approve request');
      }
    } catch (error) {
      console.error('Error approving request:', error);
      toast({
        title: "Error",
        description: "Failed to approve student joining request.",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="container mx-auto py-8">
      <h2 className="text-4xl font-bold mb-6 text-center">Class Management</h2>
      <div className="flex justify-center space-x-4 mb-8">
        <Button variant={activeTab === 'manageClasses' ? 'default' : 'outline'} onClick={() => setActiveTab('manageClasses')}>Manage Classes</Button>
        <Button variant={activeTab === 'approveRequests' ? 'default' : 'outline'} onClick={() => setActiveTab('approveRequests')}>Approve Student Requests</Button>
        <Button variant={activeTab === 'viewStudents' ? 'default' : 'outline'} onClick={() => setActiveTab('viewStudents')}>View Students</Button>
        <Button variant={activeTab === 'topicProgress' ? 'default' : 'outline'} onClick={() => setActiveTab('topicProgress')}>Topic Progress</Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Left Column: Always show Manage Classes and Class/Section selection for View Students */}
        <Card className="w-full">
          <CardHeader>
            <CardTitle className="text-3xl">Manage Classes</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-4">
              <h3 className="text-xl font-semibold">Create New Class</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="grid gap-1.5">
                  <Label htmlFor="className">Class Name</Label>
                  <Input
                    id="className"
                    placeholder="e.g., 10th Grade"
                    value={newClassName}
                    onChange={(e) => setNewClassName(e.target.value)}
                  />
                </div>
                <div className="grid gap-1.5">
                  <Label htmlFor="section">Section</Label>
                  <Input
                    id="section"
                    placeholder="e.g., A, B, C"
                    value={newSection}
                    onChange={(e) => setNewSection(e.target.value)}
                  />
                </div>
                <div className="grid gap-1.5">
                  <Label htmlFor="subject">Subject</Label>
                  <Input
                    id="subject"
                    placeholder="e.g., Mathematics"
                    value={newSubject}
                    onChange={(e) => setNewSubject(e.target.value)}
                  />
                </div>
              </div>
              <Button onClick={handleCreateClass}>Create Class</Button>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-semibold">Existing Classes</h3>
              {classes.length === 0 ? (
                <p className="text-muted-foreground">No classes created yet.</p>
              ) : (
                <div className="rounded-md border">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Class Name</TableHead>
                        <TableHead>Section</TableHead>
                        <TableHead>Subject</TableHead>
                        <TableHead>Actions</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {classes.map((cls) => (
                        <TableRow key={cls.id}>
                          <TableCell className="font-medium">{cls.name}</TableCell>
                          <TableCell>{cls.section}</TableCell>
                          <TableCell>{cls.subject}</TableCell>
                          <TableCell>
                            <Button variant="outline" size="sm">View Students</Button>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
              )}
            </div>
          </CardContent>
        </Card>

        {/* Right Column: Dynamic Content based on activeTab */}
        <div>
          {activeTab === 'approveRequests' && (
            <Card className="w-full">
              <CardHeader>
                <CardTitle className="text-3xl">Student Joining Requests</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {pendingRequests.length === 0 ? (
                  <p className="text-muted-foreground">No pending student joining requests.</p>
                ) : (
                  <div className="rounded-md border">
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>Class</TableHead>
                          <TableHead>Student</TableHead>
                          <TableHead>Actions</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {pendingRequests.map((classRequest) => (
                          classRequest.requests.map((studentRequest: any) => (
                            <TableRow key={`${classRequest.classId}-${studentRequest.studentId}`}>
                              <TableCell className="font-medium">{classRequest.className} - {classRequest.section} ({classRequest.subject})</TableCell>
                              <TableCell>
                                <div className="flex items-center gap-2">
                                  <User className="h-4 w-4" />
                                  <span>{studentRequest.studentName}</span>
                                </div>
                                <span className="text-sm text-muted-foreground">{studentRequest.studentEmail}</span>
                              </TableCell>
                              <TableCell>
                                <Button
                                  variant="outline"
                                  size="sm"
                                  onClick={() => handleApproveRequest(classRequest.classId, studentRequest.studentId)}
                                >
                                  Approve
                                </Button>
                              </TableCell>
                            </TableRow>
                          ))
                        ))}
                      </TableBody>
                    </Table>
                  </div>
                )}
              </CardContent>
            </Card>
          )}

          {activeTab === 'viewStudents' && (
            // The content for View Students is moved here to the right column
            <Card className="w-full">
              <CardHeader>
                <CardTitle className="text-3xl">View Students</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4"> {/* Add mb-4 for spacing */}
                  {/* Class Selection */}
                  <div>
                    <Label htmlFor="selectClassForStudents">Select Class</Label>
                    <Select onValueChange={setSelectedClassIdForStudents} value={selectedClassIdForStudents || ""}>
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Choose a class" />
                      </SelectTrigger>
                      <SelectContent>
                        {classes.map((cls) => (
                          <SelectItem key={cls.id} value={cls.id}>
                            {cls.name}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Section Selection (filtered by selected class) */}
                  <div>
                    <Label htmlFor="selectSectionForStudents">Select Section</Label>
                    <Select
                      onValueChange={setSelectedSectionForStudents}
                      value={selectedSectionForStudents || ""}
                      disabled={!selectedClassIdForStudents}
                    >
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Choose a section" />
                      </SelectTrigger>
                      <SelectContent>
                        {selectedClassIdForStudents &&
                          [...new Set(classes
                            .filter((cls) => cls.name === classes.find(c => c.id === selectedClassIdForStudents)?.name)
                            .map((cls) => cls.section))]
                            .map((section) => (
                              <SelectItem key={section} value={section}>
                                {section}
                              </SelectItem>
                            ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                {/* Display filtered student list */}
                {selectedClassIdForStudents && selectedSectionForStudents ? (
                  <div className="space-y-4">
                    <h3 className="text-xl font-semibold">Students in {classes.find(c => c.id === selectedClassIdForStudents)?.name} ({selectedSectionForStudents})</h3>
                    <div className="rounded-md border">
                      <Table>
                        <TableHeader>
                          <TableRow>
                            <TableHead>Student Name</TableHead>
                            <TableHead>Email</TableHead>
                          </TableRow>
                        </TableHeader>
                        <TableBody>
                          {classes
                            .filter(cls => cls.id === selectedClassIdForStudents && cls.section === selectedSectionForStudents)
                            .flatMap(cls => cls.students)
                            .map((student: any) => (
                              <TableRow key={student.studentId}>
                                <TableCell className="font-medium">
                                  <div className="flex items-center gap-2">
                                    <User className="h-4 w-4" />
                                    <span>{student.studentName}</span>
                                  </div>
                                </TableCell>
                                <TableCell>{student.studentEmail}</TableCell>
                              </TableRow>
                            ))}
                          {classes
                            .filter(cls => cls.id === selectedClassIdForStudents && cls.section === selectedSectionForStudents)
                            .flatMap(cls => cls.students).length === 0 && (
                                <TableRow>
                                    <TableCell colSpan={2} className="text-center text-muted-foreground">No students in this class and section.</TableCell>
                                </TableRow>
                            )}
                        </TableBody>
                      </Table>
                    </div>
                  </div>
                ) : (
                  <p className="text-muted-foreground">Please select a class and section to view students.</p>
                )}
              </CardContent>
            </Card>
          )}

          {activeTab === 'topicProgress' && (
            <Card className="w-full">
              <CardHeader>
                <CardTitle className="text-3xl">Topic Progress</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Content for topic progress will go here.</p>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </div>
  );
};

export default ClassesPage;
