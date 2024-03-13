// import TaskApp from "./TaskApp";
import HomePage from './pages/HomePage';
import TaskListPage from './pages/TaskListPage';

import { createBrowserRouter, RouterProvider  } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/tasks",
    element: <TaskListPage />,
  }
]);

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;