
import {FaTimes} from 'react-icons/fa'

const Task = ({task,ondeletefct,ontoggle}) => {
  return (
    <div className={`task ${task.reminder ? 'reminder' : '' }`} onDoubleClick={()=>ontoggle(task.id)}>
        <h3>{task.text} <FaTimes style={{color: 'red', cursor:'pointer'}} onClick={()=>ondeletefct(task.id)}/></h3>
        <p>{task.day}</p>
    </div>
  )
}

export default Task