const API_BASE = (import.meta.env && import.meta.env.VITE_API_BASE) || 'http://localhost:5000/api';

export async function apiFetch(path, options = {}) {
  const res = await fetch(`${API_BASE}${path}`,{
    headers: { 'Content-Type': 'application/json', ...(options.headers || {}) },
    ...options,
  });
  if (!res.ok) throw new Error(`API error: ${res.status}`);
  return res.json();
}
