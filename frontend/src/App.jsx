import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./page/Home";
import Layout from "./page/Layout";
import Blogdata from "./page/Blogdata";
import CreateBlog from "./page/CreateBlog";
import Nopage from "./page/Nopage";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/" element={<Home />}></Route>
            <Route path="/blogs/:id" element={<Blogdata />}></Route>
            <Route path="/createBlog" element={<CreateBlog />}></Route>
            <Route path="*" element={<Nopage />}></Route>
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
