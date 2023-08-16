import { Route, Routes } from "react-router-dom";
import { CategoriaPage } from "./views/CategoriaPage";
import { TransaccionPage } from "./views/TransaccionPage";
import Navbar from "./components/Navbar";
import { HomePage } from "./views/HomePage";
import {ConsultaPage} from "./views/ConsultaPage";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path={"/"} element={<HomePage />} />
        <Route path={"/categorias"} element={<CategoriaPage />} />
        <Route path={"/transacciones"} element={<TransaccionPage />} />
        <Route path={"/consultas"} element={<ConsultaPage />} />
      </Routes>
    </>
  );
}

export default App;
