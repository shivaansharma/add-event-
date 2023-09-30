import { BiArrowBack } from 'react-icons/bi';
import './App.css'

function App() {
  

  return (
    <>
       
       <div className=' shadow-xl rounded-lg bg-white p-4 max-w-[615px]' >
  <div className='flex items-center '>
    <div><BiArrowBack /></div>
    <div className='text-sm ml-2'>Back</div>
  </div>
  <div className='text-sm text-left mt-4  ml-7'>
    <form>
      <label className="block mb-1 text-left">Add event name</label>
      <input
        type="text"
        className=' rounded-md p-1 block mb-2 w-3/4 bg-gray-200'
        placeholder='Eg. Quizz Competition "Tech"'
      />
      <label className="block mb-1 text-left">Time</label>
      <input
        type="text"
        className=' rounded-md bg-gray-200 p-1 block mb-2 w-3/4'
        placeholder='Eg. 12:30 Pm'
      />
      <label className="block mb-1 text-left">Date</label>
      <div className='flex flex-row'>
        <input
          type="text"
          className=' rounded-md bg-gray-200 p-1 block mb-2 w-1/12'
          placeholder='DD'
        />
        <input
          type="text"
          className='ml-2  rounded-md bg-gray-200 p-1 block mb-2 w-1/12'
          placeholder='MM'
        />
        <input
          type="text"
          className='ml-2 rounded-md bg-gray-200 p-1 block mb-2  w-1/12'
          placeholder='YYYY'
        />
      </div>
     <div className='flex justify-center items-center pb-20'>
     <input type="submit" className='bg-slate-800 p-2 text-white rounded-sm w-5/12' value={"CREATE"}/>
     </div>
    </form>
  </div>
</div>

    </>
  )
}

export default App
