import TaskCard from "./TaskCard";

function App() {
  return (
    <div className="flex flex-col items-center justify-between">
      <div>
        <div className="mb-4"> 
          <h1 className="text-3xl font-bold">Smarter Tasks</h1>
          <p><span className="font-bold">Project: </span>Graduation Final Year Project (Revamp College Website)</p>
        </div>
      </div>
      <div className="flex justify-center">
        <div className="mr-8 border-2 border-slate-400 rounded-lg px-4 py-4">
          <h1 className="text-2xl text-center font-bold">Pending</h1>
          <TaskCard
            title="Build the website with static content"
            dueDate="10th April"
            completedAtDate="11th April"
            assigneeName="Rohit S"
            due="true" />
          <TaskCard
            title="Add blog"
            dueDate="22nd March"
            completedAtDate="11th April"
            assigneeName="Rohit M"
            due="true" />
            <p className="bg-gray-400 font-bold">+ New Task</p>
        </div>
        <div className="mr-8 border-2 border-slate-400 rounded-lg px-4 py-4">
          <h1 className="text-2xl text-center font-bold">Completed</h1>
          <TaskCard
            title="Design the mockup"
            dueDate="10th April"
            completedAtDate="10th April"
            assigneeName="Rohit M"
            due="false" />
          <TaskCard
            title="Get approval from principal"
            dueDate="10th April"
            completedAtDate="20th April"
            assigneeName="Ajay S"
            due="false" />
        </div>
      </div>
    </div>
  );
}

export default App;
