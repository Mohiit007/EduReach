// Placeholder for push notification logic
export async function askNotificationPermission() {
  if (!('Notification' in window)) return 'denied';
  const result = await Notification.requestPermission();
  return result;
}
