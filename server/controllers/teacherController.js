import Lesson from '../models/Lesson.js';

const getDashboard = async (req, res) => {
  return res.json({ role: 'teacher', data: [] });
};

const createLesson = async (req, res) => {
  try {
    const { title, subject, content, className, section } = req.body;
    const media = [];

    if (req.files.pdfFile) {
      media.push({ type: 'pdf', url: `/uploads/lessons/${req.files.pdfFile[0].filename}` });
    }
    if (req.files.pptFile) {
      media.push({ type: 'ppt', url: `/uploads/lessons/${req.files.pptFile[0].filename}` });
    }
    if (req.files.imageFile) {
      media.push({ type: 'image', url: `/uploads/lessons/${req.files.imageFile[0].filename}` });
    }
    if (req.files.audio) {
      media.push({ type: 'audio', url: `/uploads/lessons/${req.files.audio[0].filename}` });
    }

    const newLesson = new Lesson({
      title: { en: title }, 
      content: { en: content },
      tags: [subject],
      media,
      className,
      section,
    });

    await newLesson.save();
    res.status(201).json({ message: 'Lesson created successfully', lesson: newLesson });
  } catch (error) {
    console.error('Error creating lesson:', error);
    res.status(500).json({ message: 'Failed to create lesson' });
  }
};

export { getDashboard, createLesson };
