import "./App.css";
import Post from "./post";
import { Routes, Route } from "react-router-dom";
import Header from "./Header";
import Login from "./login";
import Layout from "./Layout";
import Register from "./Register";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Post />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Route>
    </Routes>
  );
}

export default App;
