import { Routes, Route } from 'react-router-dom'
import Header from "./components/Header"
import Footer from './components/Footer'
import AdminHeader from './components/AdminHeader'
import UserHeader from './components/UserHeader'

import Home from './components/Home'
import AdminLogin from './pages/admin/AdminLogin'
import AddEmp from './pages/user/AddEmp'
import ViewEmp from './pages/admin/ViewEmp'
import UpdateEmp from './pages/admin/UpdateEmp'
import DetailEmp from './pages/admin/DetailEmp'
import UserLogin from './pages/user/UserLogin'
import UserLeave from './pages/user/AddLeave'
import ViewLeave from './pages/user/ViewLeave'
import LeaveEmp from './pages/admin/LeaveEmp'
import AppliedLeave from './pages/admin/AppliedLeave'
import Empviewleave from './pages/admin/Empviewleave'
import UserRegister from './pages/user/UserRegister';


function App() {


const AdminLayout = ({ children }) => (
  <>
    <AdminHeader />
    {children}
  </>
);

const UserLayout = ({ children }) => (
  <>
    <UserHeader />
    {children}
  </>
);

const PublicLayout = ({ children }) => (
  <>
    <Header />
    {children}
  </>
);


  return (
    <>
      <Routes>
  <Route path="/" element={<PublicLayout><Home /></PublicLayout>} />
  <Route path="/adminlogin" element={<PublicLayout><AdminLogin /></PublicLayout>} />
  <Route path="/userlogin" element={<PublicLayout><UserLogin /></PublicLayout>} />
  <Route path="/userregister" element={<PublicLayout><UserRegister /></PublicLayout>} />

  <Route path="/viewemp" element={<AdminLayout><ViewEmp /></AdminLayout>} />
  <Route path="/update/:id" element={<AdminLayout><UpdateEmp /></AdminLayout>} />
  <Route path="/detail/:id" element={<AdminLayout><DetailEmp /></AdminLayout>} />
  <Route path="/leave" element={<AdminLayout><LeaveEmp /></AdminLayout>} />
  <Route path="/applied" element={<AdminLayout><AppliedLeave /></AdminLayout>} />
  <Route path="/empleaveview" element={<AdminLayout><Empviewleave /></AdminLayout>} />

  <Route path="/add" element={<UserLayout><AddEmp /></UserLayout>} />
  <Route path="/userleave" element={<UserLayout><UserLeave /></UserLayout>} />
  <Route path="/userview" element={<UserLayout><ViewLeave /></UserLayout>} />
</Routes>


      <Footer />
    </>
  )
}

export default App;
