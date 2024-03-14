// import React from "react";
import Task from "./Task";
import { TaskItem } from "./types";

interface Props {
  tasks: TaskItem[],
  deleteTask: (id: string) => void;
}

// interface State {}

const TaskList = (props: Props) => {

  const handleDelete = (id: string) => {
    props.deleteTask(id);
  }

  const list = props.tasks.map((task, idx) => (
    <Task
      key={idx}
      id={task.id}
      title={task.title}
      description={task.description}
      dueDate={task.dueDate}
      removeTask={() => handleDelete(task.id)}
    />
  ));
  return <>{list}</>;
};

export default TaskList;
