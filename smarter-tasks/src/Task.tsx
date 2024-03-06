import React from "react";

interface TaskProp {
	title: string,
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
class Task extends React.Component<TaskProp> {
	render() {
		return (
			<div className="text-3xl bg-blue-500 mx-auto w-64">{this.props.title}</div>
		);
	}
}

export default Task;
