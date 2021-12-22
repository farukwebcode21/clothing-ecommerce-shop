import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Cart from './components/Pages/Home/Cart/Cart';
import Contact from './components/Pages/Home/Contact/Contact';
import Home from './components/Pages/Home/Home/Home';
import MyOrder from './components/Pages/Home/MyOrder/MyOrder';
import Special from './components/Pages/Home/Special/Special';
import Testimonials from './components/Pages/Home/Testimonials/Testimonials';
import Login from './components/Pages/Login/Login/Login';
import PrivateRoute from './components/Pages/Login/PrivateRoute/PrivateRoute';
import Register from './components/Pages/Login/Register/Register';
// import Footer from './components/Pages/Shaired/Footer/Footer';
import Navigation from './components/Pages/Shaired/Navigation/Navigation';
import Products from './components/Products/Products';
import AuthProvider from './contexts/AuthProvider/AuthProvider';

function App() {

  return (
    <>
    <AuthProvider>
      <Router>
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/products" element={<PrivateRoute><Products/></PrivateRoute>}/>
          <Route path="/special" element={<Special />} />
          <Route path="/testimonial" element={<Testimonials />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/cart/:cardId" element={<PrivateRoute><Cart /></PrivateRoute>} />
          <Route path="/myorder" element={<PrivateRoute><MyOrder/></PrivateRoute>}/>
        </Routes>
        {/* <Footer/> */}
      </Router>
      </AuthProvider>
    </>
  );
}

export default App;
