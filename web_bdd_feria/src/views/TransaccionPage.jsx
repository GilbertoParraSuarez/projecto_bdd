import { useEffect, useState } from "react";
import { gestionService } from "../services/gestionService";
import { TablaTransacciones } from "../components/TablaTransacciones";

export const TransaccionPage = () => {
  const [transacciones, setTransacciones] = useState([]);
  const [isLoading, SetIsLoading] = useState(false);
  const listarTransacciones = async () => {
    gestionService.getTransacciones().then(data => {
      SetIsLoading(true);
      console.log(data);
      setTransacciones(data);
      
    }).finally(()=>{
      SetIsLoading(false);
    });
  };
  useEffect(() => {
    listarTransacciones();
  }, []);
  return (
    <div className="mx-32 my-10">
      <TablaTransacciones
        data={transacciones}
        isLoading={isLoading}
        listarTransacciones={listarTransacciones}
      />
    </div>
  );
};
