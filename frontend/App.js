import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import UserSignUp from './pages/UserSignUp';
import UserSignIn from './pages/UserSignIn';
import DriverSignUp from './pages/DriverSignUp';
import DriverProfile from './pages/DriverProfile';
import BookingPage from './pages/BookingPage';
import Home from './components/Home';
import SearchPage from './pages/SearchPage';
import BookingSuccessPage from './pages/BookingSuccessPage';
import DriverSignupSuccessPage from './pages/DriverSignUpSuccess';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/user-sign-up" element={<UserSignUp />} />
          <Route path="/user-sign-in" element={<UserSignIn />} />
          <Route path="/driver-sign-up" element={<DriverSignUp />} />
          <Route path="/driver-profile" element={<DriverProfile />} />
          <Route path="/user-booking" element={<BookingPage />} />
          <Route path="/search" element={<SearchPage/>} />
          <Route path="/booked" element={<BookingSuccessPage />} /> 
          <Route path="/success" element={<DriverSignupSuccessPage/>} />
          <Route path="/" element={<Home/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;




