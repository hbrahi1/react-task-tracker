import {useState} from 'react'

const AddTask = ({onadd}) => {

const [text, setText] = useState('')
const [day, setDay] = useState('')
const [reminder, setReminder] = useState(false)

const onSubmit = (e) => {
    e.preventDefault()

    if (!text) {
        alert('add text')
        return
    }
    if (!day) {
        alert('add day')
        return
    }  
    onadd({text,day,reminder}) 
    setText('')
    setDay('')
    setReminder(false)

}

  return (
    <form className="add-form" onSubmit={onSubmit}>
        <div className="form-control">
            <label>Task</label>
            <input type = 'text' placeholder="Add task" value={text} onChange={(e)=>setText(e.target.value)}/>
        </div>
        <div className="form-control">
            <label>Day and time</label>
            <input type = 'text' placeholder="Add day and time" value={day} onChange={(e)=>setDay(e.target.value)} />
        </div>
        <div className="form-control form-control-check">
            <label>Reminder</label>
            <input type = 'checkbox' value={reminder} checked={reminder}
                onChange={(e)=>setReminder(e.currentTarget.checked)}/>
        </div> 

        <input type='submit' value="Save task" className="btn btn-block"/>               
    </form>
  )
}

export default AddTask