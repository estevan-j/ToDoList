import "./App.css";
import Header from "./components/Header";
import Day from "./components/Day";
import Form from "./components/Form";
import LiskTasks from "./components/ListTasks";
import { useEffect, useState } from "react";
import Week from "./components/Week";
import Month from "./components/Month";
import Year from "./components/Year";

function App() {
  const [dateM, setDateM] = useState(new Date());
  const data = JSON.parse(localStorage.getItem('tasks'));
  const [tasks, setTasks] = useState([data? data: []]);
  const [tab, setTab] = useState("day");


  useEffect(() => {
    localStorage.setItem('tasks',JSON.stringify(tasks))
  }, [tasks])

  return (
    <main>
      <div className="bg-white01 text-white rounded max-w-[750px] min-h-[90vh] m-auto">
        <Header tab={tab} setTab={setTab} />
        { tab === "day" && (
          <>
            <Day dateM={dateM}  setDateM={setDateM}/>
            <Form dateM={dateM} tasks={tasks} setTasks={setTasks} />
            <LiskTasks tasks={tasks} setTasks={setTasks} dateM={dateM} />
          </>
        )}
        {
          tab === 'week' && <Week  tasks={tasks}/>
        }
        {
          tab === 'month' && <Month tasks={tasks} />
        }
        {
          tab === 'year' && <Year tasks={tasks} />
        }
      </div>
    </main>
  );
}

export default App;
