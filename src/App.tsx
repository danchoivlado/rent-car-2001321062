import { Route, Routes } from "react-router-dom";
import "./app.scss";
import { Home, JobPage, PageNotFound, Wrapper } from "./pages";
import Login from "./pages/Login";
import Register from "./pages/Register";

function App() {
  return (
    <Routes>
      <Route element={<Wrapper />}>
        <Route path="/" element={<Home />}></Route>
        <Route path="/:id" element={<JobPage />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="*" element={<PageNotFound />}></Route>
      </Route>
    </Routes>
  );
}

export default App;
