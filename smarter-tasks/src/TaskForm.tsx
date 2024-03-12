import React from "react";
import { TaskItem } from "./types";

interface TaskFormProps {
  addTask: (task: TaskItem) => void;
}

interface TaskFormState {
  title: string;
  description: string;
  dueDate: string;
}

const TaskForm = (props: TaskFormProps) => {
  const [formState, setFormState] = React.useState<TaskFormState>({
    title: "",
    description: "",
    dueDate: "",
  });

  const titleChanged: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    setFormState({ ...formState, title: event.target.value });
  };

  const descChanged: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    setFormState({ ...formState, description: event.target.value });
  };

  const dueDateChanged: React.ChangeEventHandler<HTMLInputElement> = (
    event
  ) => {
    setFormState({ ...formState, dueDate: event.target.value });
  };

  const addTask: React.FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    if (formState.title.length === 0 || formState.dueDate.length === 0) {
      return;
    }
    props.addTask(formState);
    setFormState({ title: "", description: "", dueDate: "" });
  };

  return (
    <>
      <form onSubmit={addTask} className="flex flex-col w-full">
        <input
          required
          placeholder="Task Name"
          id="todoTitle"
          className="border-2 m-2"
          type="text"
          value={formState.title}
          onChange={titleChanged}
        />
        <input
          type="text"
          placeholder="Todo Description"
          id="todoDescription"
          className="border-2 m-2"
          value={formState.description}
          onChange={descChanged}
        />
        <input
          type="date"
          required
          placeholder="Due Date"
          id="todoDueDate"
          className="border-2 m-2"
          value={formState.dueDate}
          onChange={dueDateChanged}
        />
        <button
          className="bg-green-400 p-2 rounded-md"
          type="submit"
          id="addTaskButton"
        >
          Add item
        </button>
      </form>
    </>
  );
};

export default TaskForm;
