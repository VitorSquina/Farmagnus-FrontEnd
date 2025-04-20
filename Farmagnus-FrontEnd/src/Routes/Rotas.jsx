import { Route, Routes, BrowserRouter } from "react-router-dom";
import { TesteComponentes } from "../pages/TesteComponentes/TesteComponentes";
export const Rotas = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/teste" element={<TesteComponentes />} />
      </Routes>
    </BrowserRouter>
  );
};
