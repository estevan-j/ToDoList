import ArrowR from './icons/ArrowR'
import ArrowL from './icons/ArrowL'
import { getNameDay } from '../helpers/getNameDay';
import { getDate } from '../helpers/geDate';

const Day = ({dateM, setDateM}) => {

  const addDays = (date) => {
    let addDate = new Date(dateM);
    addDate.setDate(date.getDate() + 1);
    return addDate;
  }
  const restDays = (date) => {
    let restDate = new Date(dateM);
    restDate.setDate(date.getDate() - 1);
    return restDate;
  }

  const handleLeft = () => {
    setDateM(restDays(dateM));
  }
  const handleRight = () => {
    setDateM(addDays(dateM));
  }

  return (
    <section className="flex justify-center items-center gap-8 my-20 [& > p]: text-gray01">
      <p
        onClick={() => handleLeft()} 
        className='cursor-pointer'
        >
        <ArrowL />
      </p>
      <div className='w-[155px]'>
        <h4 className='text-4xl font-medium'>{getNameDay(dateM)}</h4>
        <p className='text-gray01'>{ getDate(dateM) }</p>
      </div>
      <p
        onClick={() => handleRight()}
        >
        <ArrowR />
      </p>      
    </section>
  )
}

export default Day
