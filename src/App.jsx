import './App.css'
import Blogs from './components/Blogs/Blogs'
import Header from './components/Header/Header'


function App() {
  return (
    <div className='whole'>
      <Header></Header>
      <hr />
      <div className='main-section'>
        <Blogs></Blogs>
      </div>
    </div>
  )
}

export default App
