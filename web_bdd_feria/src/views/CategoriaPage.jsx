import { useEffect, useState } from "react";
import { gestionService } from "../services/gestionService";
import { TablaCategoria } from "../components/TablaCategoria";

export const CategoriaPage = () => {
  const [categorias, setCategorias] = useState([]);

  const listarCategorias = async () => {
    gestionService.getCategorias().then(data => {
      console.log(data);
      setCategorias(data);
    });
  };
  useEffect(() => {
    listarCategorias();
  }, []);
  return (
    <div className="mx-32 my-10">
      <TablaCategoria data={categorias} listarCategorias={listarCategorias} />
    </div>
  );
};
