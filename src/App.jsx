import { useState } from 'react'
import './App.css'
import Blogs from './components/Blogs/Blogs'
import Header from './components/Header/Header'
import ReadCounter from './components/ReadCounter/ReadCounter'

function App() {

const [counter,setCounter]=useState(0);
const handleCount=()=>{
  const result=counter;
  return result;
}
  return (
    <div className='whole'>
      <Header></Header>
      <hr />
      <div className='main-section'>
        <Blogs></Blogs>
        <ReadCounter handleCount={handleCount}></ReadCounter>
      </div>
    </div>
  )
}

export default App
