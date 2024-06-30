import React from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import ErrorPage from "./components/ErrorPage";
import { AuthProvider } from "./context/AuthContext";
import ProviderList from "./components/ProviderList";
import ProviderProfile from "./components/ProviderProfile";
import SubscriptionList from "./components/SubscriptionList";
import Profile from "./components/Profile";
import ContactForm from "./components/ContactForm";


const App = () => {
  return (
    <AuthProvider>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/signup" element={<Signup />} />
        <Route exact path="/profile" element={<Profile />} />

        <Route exact path="/providers" element={<ProviderList />} />
        <Route path="/providers/:providerId" element={<ProviderProfile />} />
        <Route path="/Subscriptions" element={<SubscriptionList />} />
        <Route path="/contact" element={ <ContactForm />} />
     

        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </AuthProvider>
  );
};

export default App;
