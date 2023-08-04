import { useEffect, useState } from 'react';
import './App.css';

function App() {

  const [num, setNum] = useState(0)

  const handleClick = () => {
    setNum(num + 1)
  }

  //useEffect-01
  useEffect(() => {
    console.log('Using useEffect!!')
  }, [])
  

  //useEffect-02
  useEffect(() => {
    console.log(`Component did updated: ${num}`)
  }, [num])
  

  //useEffect-03
  useEffect(() => {
    console.log('Component did mount')
    
    return () => {
      console.log("component will unmount")
    }
  },[])

  return (
    <div className='App'>
      <div className='App-header'>
        <div>
          <h3>{num}</h3>
          <button className='btn' onClick={handleClick}>Add</button>
        </div>
      </div>
    </div>
  );
}

export default App;
