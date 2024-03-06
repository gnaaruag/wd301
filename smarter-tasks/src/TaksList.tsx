import React from "react";
import Task from "./Task";

interface Props {
}

interface TaskItem {
	title: string
}
interface State {
	tasks: TaskItem[];
}

class TaskList extends React.Component<Props, State> {

	constructor(props: Props) {
		super(props);
		this.state = {
			tasks: [],
		}
	}

	componentDidMount(): void {
		const tasks = [{ title: "Pay rent" }, { title: "Submit assignment" }];
		// eslint-disable-next-line @typescript-eslint/no-unused-vars
		this.setState((state, props) => ({
			tasks,
		}));
	}

	render() {
		return this.state.tasks.map((task, idx) => <Task key={idx} title={task.title} />);
	}

}

export default TaskList;