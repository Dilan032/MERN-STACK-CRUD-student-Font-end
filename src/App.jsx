import './App.css'
import Navbar from './component/Navbar'
import AddUser from './component/pages/addUser/AddUser'
import AllUserDetails from './component/pages/allUserDetails/AllUserDetails'
import Home from './component/pages/home/Home'
import {Route, Routes} from 'react-router-dom'

function App() {

  return (
    <>
      <div class="md:mt-5 mt-2">
        <Navbar />
      </div>
      <div class="w-full mx-auto p-4 px-8 md:px-25">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/add-users" element={<AddUser />} />
          <Route path="/all-users-details" element={<AllUserDetails />} />
        </Routes>
      </div>

    </>
  )
}

export default App
