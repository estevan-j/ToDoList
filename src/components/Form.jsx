import { useState } from 'react'
import Textlef from './icons/Textlef'

const Form = ({dateM, tasks, setTasks}) => {

  const [val, setVal] = useState('');

  const handleInput = (e) => {
    e.preventDefault();

    const newTask = {
      id: crypto.randomUUID(),
      date: dateM,
      tasks: val,
      done: false
    }
    
    setTasks([...tasks, newTask]);
    setVal('');
  }

  return (
    <section className='max-w-[650px] m-auto my-3 px-4'>
      <div className='border border-pink01 rounded bg-pink02 flex items-center p-2'>
        <span className='text-gray01 mr-2'><Textlef /></span>
        <form className='w-full text-black01' onSubmit={handleInput}>
          <input type="text"
            className="w-full bg-transparent outline-none "
            placeholder="Add a Task ..."
            value={val}
            onChange={(e) => setVal(e.target.value)}
          />
        </form>
      </div>
    </section>
  )
}

export default Form
