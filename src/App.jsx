import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Home from "./pages/Home";
import Explore from "./pages/Explore";
import MyOrder from "./pages/MyOrder";
import Footer from "./components/Footer";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/Signup";
import Onboarding  from "./pages/Onboarding";
import OrderSummary from "./pages/OrderSummary";
import DeliveryDetails from "./pages/DeliveryDetails";
import Payment from "./pages/Payment";

function App() {
  const [cart, setCart] = useState([]);
  // const firstTimeUser = !localStorage.getItem("visited"); 
  const firstTimeUser = true;
  return (
    <Router basename="/Chuks-kitchen-app">
      <main>
        <Routes>
          {/* <Route
            path="/"
            element={
              firstTimeUser ? (
                <Onboarding />
              ) : (
                <>
                  <Header />
                  <Home setCart={setCart} />
                  <Footer />
                </>
              )
            }
          /> */}
          <Route path="/" element={<Onboarding />} />
          <Route
            path="/home"
            element={
              <>
                <Header />
                <Home setCart={setCart} />
                <Footer />
              </>
            }
          />
          <Route
            path="/explore"
            element={
              <>
                <Header />
                <Explore setCart={setCart} />
                <Footer />
              </>
            }
          />
          <Route
            path="/orders"
            element={
              <>
                <Header />
                <MyOrder cart={cart} setCart={setCart} />
                <Footer />
              </>
            }
          />
          <Route
            path="/signin"
            element={
              <>
                <SignIn />
                <Footer />
              </>
            }
          />
          <Route
            path="/signup"
            element={
              <>
                <SignUp />
                <Footer />
              </>
            }
          />{" "}
          <Route
            path="/order-summary"
            element={
              <>
                <Header />
                <OrderSummary />
                <Footer />
              </>
            }
          />
          <Route
            path="/delivery-details"
            element={
              <>
                <Header />
                <DeliveryDetails />
                <Footer />
              </>
            }
          />
          <Route
            path="/pickup"
            element={
              <>
                <Header />
                <Payment />
                <Footer />
              </>
            }
          />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
