import usersData from "../userTest.json";

export async function loginApi({ email, password }) {
  const user = usersData.users.find(
    (u) => u.email === email && u.password === password
  );

  if (!user) throw new Error("Credenciais inválidas");
  const token = btoa(`${user.email}:${Date.now()}`);
  return { token, user };
}

export function setToken(token) {
  localStorage.setItem("authToken", token);
}

export function getToken() {
  return localStorage.getItem("authToken");
}

export function removeToken() {
  localStorage.removeItem("authToken");
}
23;
