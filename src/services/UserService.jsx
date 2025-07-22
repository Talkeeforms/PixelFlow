import usersData from "../userTest.json";

export async function fetchUserProfile(token) {
  const [email] = atob(token).split(":");
  const user = usersData.users.find((u) => u.email === email);
  if (!user) throw new Error("User not found");
  return {
    email: user.email,
    name: user.name,
    role: user.role || "user",
  };
}
