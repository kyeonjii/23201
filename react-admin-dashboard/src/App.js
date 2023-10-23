import Topbar from "./components/topbar/Topbar";
import Sidebar from "./components/sidebar/Sidebar";
import "./app.css";
import Home from "./pages/home/Home";
import UserList from "./pages/userlist/userList";
import User from "./pages/user/User";
import Login from "./pages/login/Login";
import QnA from "./pages/QnA/QnA";
import Manual from "./pages/manual/Manual";
import Product from "./pages/product/Product";
import Mypage from "./pages/mypage/Mypage";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Topbar />
      <div className="container">
        <Sidebar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/users" element={<UserList />} />
          <Route path="/user/:userId" element={<User />} />
          <Route path="/QnA" element={<QnA />} />
          <Route path="/manual" element={<Manual />} />
          <Route path="/product/:productId" element={<Product />} />
          <Route path="/login" element={<Login />} />
          <Route path="/mypage" element={<Mypage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
