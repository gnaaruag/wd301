import React from "react";
import { useLocalStorage } from "../../hooks/useLocalStorage";

interface UserData {
  id: number;
  name: string;
  email: string;
}

const Dashboard: React.FC = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [userData, setUserData] = useLocalStorage<UserData>("userData", {
    id: 0,
    name: "",
    email: "",
  });
  console.log(setUserData)

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">
        Dashboard
      </h1>
      <p>Welcome, {userData.name}!</p>
      <p>Email: {userData.email}</p>
      <a href="/signin" id="logout-link">Logout</a>
    </div>
  );
};

export default Dashboard;
