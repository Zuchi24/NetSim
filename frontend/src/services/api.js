const API_URL = "http://127.0.0.1:8000/api";

export const getUsers = async () => {
  const res = await fetch(`${API_URL}/users`);
  return res.json();
};