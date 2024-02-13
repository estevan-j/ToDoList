import { getWeekTask } from "../helpers/getWeekTask";

const Week = ({ tasks }) => {
  const weekTasks = getWeekTask(tasks);
  return (
    <section className="p-4">
      {weekTasks.map((task) => (
        <div
          key={task.id}
          className="border border-black rounded bg-gray01 p-2 text-left mb-2 flex justify-between gap-2"
        >
          <div className="bg-blue01 p-1 rounded min-w-[160px] text-center h-fi">
            <span className='text-4xl'>{task.day}</span>
            <div className="flex justify-center items-center">
              <span className="text-4xl">{task.numDay}</span>
              <span
                style={{ writingMode: "vertical-lr" }}
                className="text-xs font-medium"
              >
                {task.month}
              </span>
            </div>
          </div>
          <div className="flex flex-wrap gap-1 justify-end">
            {task.tasks.map((task) => (
              <span
                key={task.id}
                className="border border-black px-2 rounded bg-green01 inline-block h-fit"
              >
                {task.tasks}
              </span>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
};

export default Week;
