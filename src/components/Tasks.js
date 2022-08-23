import Task from "./Task"

const Tasks = ({tasks,ondeletefct,ontoggle}) => {
  return (
    <>
        { tasks.length > 0 ?
            tasks.map((task)=>(<Task key={task.id} task={task} ondeletefct={ondeletefct} ontoggle={ontoggle}/>))
            :
            'No tasks found'
        }
    </>
  )
}

export default Tasks
