import Progress from '../models/Progress.js';
import Lesson from '../models/Lesson.js';

function isSameDay(d1, d2) {
  return d1.getFullYear() === d2.getFullYear() && d1.getMonth() === d2.getMonth() && d1.getDate() === d2.getDate();
}

function daysBetween(d1, d2) {
  const ms = 1000 * 60 * 60 * 24;
  const a = new Date(d1.getFullYear(), d1.getMonth(), d1.getDate());
  const b = new Date(d2.getFullYear(), d2.getMonth(), d2.getDate());
  return Math.round((b - a) / ms);
}

async function maintainProgress(userId) {
  let progress = await Progress.findOne({ userId });
  if (!progress) return;

  const now = new Date();
  if (!progress.lastActivityDate) {
    progress.streakCount = Math.max(progress.streakCount || 0, 1);
  } else {
    if (!isSameDay(progress.lastActivityDate, now)) {
      const diff = daysBetween(progress.lastActivityDate, now);
      if (diff === 1) progress.streakCount = (progress.streakCount || 0) + 1;
      else if (diff > 1) progress.streakCount = 1;
    }
  }

  const totalLessons = await Lesson.countDocuments({});
  const completed = (progress.lessonsCompleted || []).length;
  const completionPercent = totalLessons ? Math.round((completed / totalLessons) * 100) : 0;
  progress.reportSnapshot = { ...(progress.reportSnapshot || {}), completionPercent };
  await progress.save();
}

export { maintainProgress };
