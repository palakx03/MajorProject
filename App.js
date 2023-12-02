import {BrowserRouter as Router, Route, Routes} from 
"react-router-dom";
import Home from "./components/home/Home";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import Contact from "./components/contact/Contact";
import Login from "./components/login/Login";
import Profile from "./components/profile/Profile";
import Labs from "./components/home/Labs";
import Dashboard  from "./components/admin/Dashboard";


import "./styles/app.scss";
import "./styles/header.scss";
import "./styles/home.scss";
import "./styles/color.scss";
import "./styles/Labs.scss";
import "./styles/footer.scss";
import "./styles/contact.scss";
import   "./styles/login.scss";
import "./styles/profile.scss";
import "./styles/dashboard.scss";





function App() {
  return (
    <Router>
      <Header   />
      
       <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/labs" element={<Labs />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/me" element={<Profile />} />
        <Route path="/admin/dashboard" element={<Dashboard />} />
        
        
      </Routes>
      <Contact />
      <Footer />
     
    </Router>);
  
  
}

export default App;
