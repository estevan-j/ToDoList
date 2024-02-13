import { getTaskDay } from "../helpers/getTaskDay"
import Task from "./Task"

const ListTasks = ({tasks, setTasks, dateM}) => {

  const currentTasks = getTaskDay(dateM, tasks);

  return (
    <section className="max-w-[650px] m-auto pb-7 pt-1 px-4 bg-pink01 border border-pink01">
      {
        currentTasks.map((item) => (
          <Task 
            key={item.id}
            task={item}
            tasks={tasks}
            setTasks={setTasks}

          />
        ))
      }
    </section>
  )
}

export default ListTasks
