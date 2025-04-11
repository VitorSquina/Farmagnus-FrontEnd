import { Route, Routes, BrowserRouter } from "react-router-dom";
import { Home } from "../pages/Home/Home";

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" />
        <Route path="/register" />
        <Route path="/forgot-password" />
        <Route path="/reset-password" />
      </Routes>
    </BrowserRouter>
  );
};
