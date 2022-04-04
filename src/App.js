import { Route, Routes } from "react-router-dom";
import "./App.css";
import Dashboard from "./components/Dashboard/Dashboard";
import Home from "./components/Home/Home";
import Reviews from "./components/Reviews/Reviews";
import NotFound from "./components/NotFound/NotFound";
import Header from "./components/Header/Header";
import Blogs from "./components/Blogs/Blogs";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/reviews" element={<Reviews />}></Route>
        <Route path="/dashboard" element={<Dashboard />}></Route>
        <Route path="/blogs" element={<Blogs />}></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </div>
  );
}

export default App;
