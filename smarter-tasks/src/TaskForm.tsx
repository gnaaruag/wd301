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
class TaskForm extends React.Component<TaskFormProps, TaskFormState> {
  constructor(props: TaskFormProps) {
    super(props);
    this.state = {
      title: "",
      description: "",
      dueDate: "",
    };
  }
  // inputRef = React.createRef<HTMLInputElement>();

  titleChanged: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    console.log(`${event.target.value}`);
    this.setState({ title: event.target.value });
  };

  descChanged: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    console.log(`${event.target.value}`);
    this.setState({ description: event.target.value });
  };

  dueChanged: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    console.log(`${event.target.value}`);
    this.setState({ dueDate: event.target.value });
  };

  addTask: React.FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    const newTask = {
      title: this.state.title,
      description: this.state.description,
      dueDate: this.state.dueDate,
    };
    this.props.addTask(newTask);
    this.setState({ title: "", description: "", dueDate: "" });
  };
  render() {
    return (
      <form onSubmit={this.addTask} className="flex flex-col">
        <input
          required
          placeholder="Task Name"
          id="todoTitle"
          className="border-2 m-2"
          type="text"
          value={this.state.title}
          onChange={this.titleChanged}
        />
        <input
          type="text"
          placeholder="Todo Description"
          id="todoDescription"
          className="border-2 m-2"
          value={this.state.description}
          onChange={this.descChanged}
        />
        <input
          type="text"
          required
          placeholder="Due Date"
          id="todoDueDate"
          className="border-2 m-2"
          value={this.state.dueDate}
          onChange={this.dueChanged}
        />
        <button className="bg-green-400 p-2 rounded-md" type="submit" id="addTaskButton">
          Add item
        </button>
      </form>
    );
  }
}
export default TaskForm;
