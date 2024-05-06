import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Admin from './pages/admin'
import CreateUser from './pages/CreateUser'
import UpdateUser from './pages/UpdateUser'
import DeleteUser from './pages/DeleteUser'
import RetriveUser from './pages/RetriveUser'
import './App.css'

function App() {


  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Admin />} />
          <Route path="/CreateUser" element={<CreateUser />} />
          <Route path="/UpdateUser" element={<UpdateUser />} />
          <Route path="/DeleteUser" element={<DeleteUser />} />
          <Route path="/RetriveUser" element={<RetriveUser />} />

        </Routes>
      </Router>



    </>
  )
}

export default App
