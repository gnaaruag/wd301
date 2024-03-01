import './TaskCard.css'

const TaskCard = (props) => {
  console.log(props)
  return (
    <div className='TaskItem min-w-64 min-h-40 flex flex-col justify-between'>
      {/* eslint-disable-next-line react/prop-types */}
      <h2 className="text-xl font-bold text-red-500">{props.title}</h2>
      {/* eslint-disable-next-line react/prop-types */}
      <p>{(props.due === 'true') ? `Due on: ${props.dueDate}` : `Completed on: ${props.completedAtDate}`}</p>
      {/* eslint-disable-next-line react/prop-types */}
      <p>Assignee: {props.assigneeName}</p>
    </div>
  )
}

export default TaskCard