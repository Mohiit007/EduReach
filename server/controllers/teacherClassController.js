import Class from '../models/Class.js';

export const createClass = async (req, res, next) => {
  try {
    const { name, section, subject } = req.body;
    const teacher = req.user.id; // Assuming req.user.id contains the teacher's ID
    const newClass = await Class.create({ name, section, subject, teacher });
    res.status(201).json({ message: 'Class created successfully', class: newClass });
  } catch (err) {
    console.error('Error creating class:', err);
    next(err);
  }
};

export const getClasses = async (req, res, next) => {
  try {
    const teacherId = req.user.id;
    const classes = await Class.find({ teacher: teacherId }).populate('students', 'name email').populate('pendingStudents', 'name email');
    res.status(200).json({ classes });
  } catch (err) {
    console.error('Error fetching classes:', err);
    next(err);
  }
};

export const getPendingStudentRequests = async (req, res, next) => {
  try {
    const teacherId = req.user.id;
    const classesWithRequests = await Class.find({ teacher: teacherId, 'pendingStudents.0': { '$exists': true } })
      .select('name section subject pendingStudents')
      .populate('pendingStudents', 'name email');

    const pendingRequests = classesWithRequests.map(cls => ({
      classId: cls._id,
      className: cls.name,
      section: cls.section,
      subject: cls.subject,
      requests: cls.pendingStudents.map((student: any) => ({
        studentId: student._id,
        studentName: student.name,
        studentEmail: student.email,
      }))
    }));

    res.status(200).json({ pendingRequests });
  } catch (err) {
    console.error('Error fetching pending student requests:', err);
    next(err);
  }
};

export const approveStudentRequest = async (req, res, next) => {
  try {
    const { classId, studentId } = req.body;

    const updatedClass = await Class.findOneAndUpdate(
      { _id: classId, teacher: req.user.id },
      { $pull: { pendingStudents: studentId }, $addToSet: { students: studentId } },
      { new: true }
    );

    if (!updatedClass) {
      return res.status(404).json({ message: 'Class not found or teacher not authorized' });
    }

    res.status(200).json({ message: 'Student request approved', class: updatedClass });
  } catch (err) {
    console.error('Error approving student request:', err);
    next(err);
  }
};
