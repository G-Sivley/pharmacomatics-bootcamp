import "./App.css";
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./routes/Home";
import Courses from "./routes/Courses";
import Articles from "./routes/Articles";
import Login from "./routes/Login";
import SignUp from "./routes/SignUp";
import ErrorPage from "./pages/ErrorPage";

function App() {
  return (
    <div className="App">
      <head></head>

      <body>
        <div className="bg-background-blue">
          <Navbar />
        </div>
        <Routes>
          <Route element={<Home />} path="/" />
          <Route element={<Courses />} path="courses/" />
          <Route element={<Articles />} path="articles/" />
          <Route element={<Login />} path="login/" />
          <Route element={<SignUp />} path="signup/" />
          <Route element={<ErrorPage />} path="*" />
        </Routes>
      </body>
    </div>
  );
}

export default App;
