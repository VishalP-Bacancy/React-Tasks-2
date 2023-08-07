import { useEffect, useState } from 'react';
import './App.css';

function App() {

  const [num, setNum] = useState(0)
  const [name, setName] = useState('')

  const handleClick = () => {
    setNum(num + 1)
  }

  
  //useEffect-01
  useEffect(() => {
    console.log(`Running useEffect without any dependency:- Count ${num}`)
  })


  //useEffect-02
  useEffect(() => {
    console.log('Using useEffect!!')
  }, [])
  

  //useEffect-03
  useEffect(() => {
    console.log(`Component did updated: ${num}`)
  }, [num])
  

  //useEffect-04
  useEffect(() => {
    console.log(`Name: ${name} or Num: ${num} has changed`)
  },[name, num])
  

  //useEffect-05
  useEffect(() => {
    console.log('Component did mount')
    
    return () => {
      console.log("component will unmount")
    }
  }, [])


  return (
    <div className='App'>
      <div className='App-header'>
        <div>
          <h3>{num}</h3>
          <input value={name} onChange={e => setName(e.target.value)}/>
          <button className='btn' onClick={handleClick}>Add</button>
        </div>
      </div>
    </div>
  );
}

export default App;
