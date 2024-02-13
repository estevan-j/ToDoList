import { taskDone } from '../helpers/taskDone';
import Options from './Options';


const Task = ({task, tasks, setTasks}) => {

  const handleDone = (e) => {
    setTasks(taskDone(task.id, tasks));
  }

  return (
    <div className="flex justify-between gap-4 item-center my-4">
    <span className='cursor-pointer flex item-center'>
      <input 
        type="checkbox"  
        className='checkbox'
        onClick={(e) => handleDone(e)}
        defaultChecked={task.done}
      />
    </span>
    <p className='grow text-left text-gray01'>{task.tasks}</p>
    <span className='cursor-pointer black01'>
      <Options idTask={task.id} tasks={tasks} setTasks={setTasks} />
    </span>
  </div>
  )
}

export default Task
