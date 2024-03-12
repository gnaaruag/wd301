// import React from "react";
import Task from "./Task";
import { TaskItem } from "./types";

interface Props {
  tasks: TaskItem[],
  deleteTask: (taskId: string) => void;
}

// interface State {}

const TaskList = (props: Props) => {

  const handleDelete = (taskId: string) => {
    props.deleteTask(taskId);
  }

  const list = props.tasks.map((task, idx) => (
    <Task
      key={idx}
      taskId={task.taskId}
      title={task.title}
      description={task.description}
      dueDate={task.dueDate}
      deleteTask={() => handleDelete(task.taskId)}
    />
  ));
  return <>{list}</>;
};

export default TaskList;
