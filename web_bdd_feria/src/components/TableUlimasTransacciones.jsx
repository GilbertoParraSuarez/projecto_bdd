
import {  Card, Table, TableBody, TableCell, TableHead, TableHeaderCell, TableRow, Text } from '@tremor/react'
import { useEffect, useState } from 'react';
import { DotLoader } from 'react-spinners'
import { gestionService } from '../services/gestionService';

export const TableUltimasTreansacciones = () => {
    const [transacciones, setTransacciones] = useState([]);
  const [isLoading, SetIsLoading] = useState(false);
  const listarTransacciones = async () => {
    gestionService.getUltimasTransacciones().then(data => {
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
    <Card className="rounded-lg bg-slate-700">
      <div className="relative">
        
        <div className="max-h-96 overflow-y-auto custom-scrollbar px-4">
          {/* Aquí se establece la altura máxima y el scroll vertical */}
          <Table className="mt-5">
            <TableHead>
              <TableRow className="text-center">
                <TableHeaderCell className="text-center">ID</TableHeaderCell>
                <TableHeaderCell className="text-center">
                  CATEGORIA
                </TableHeaderCell>
                <TableHeaderCell className="text-center">FECHA</TableHeaderCell>
                <TableHeaderCell className="text-center">MONTO</TableHeaderCell>
                <TableHeaderCell className="text-center">
                  DESCRIPCION
                </TableHeaderCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {isLoading ? (
                <div className="grid place-items-center absolute top-40 left-0 right-0 bottom-0">
                  <DotLoader color="#36d7b7" />
                </div>
              ) : (
                transacciones.map(item => (
                  <TableRow key={item.IdTransaccion}>
                    <TableCell className="text-center">
                      {item.IdTransaccion}
                    </TableCell>
                    <TableCell>
                      <Text className="text-center">{item.NombreCategoria}</Text>
                    </TableCell>
                    <TableCell>
                      <Text className="text-center">{item.Fecha}</Text>
                    </TableCell>
                    <TableCell>
                      <Text className="text-center">{item.Monto}</Text>
                    </TableCell>
                    <TableCell>
                      <Text className="text-center">{item.Descripcion}</Text>
                    </TableCell>
          
                  </TableRow>
                ))
              )}
            </TableBody>
          </Table>
        </div>
      </div>
    </Card>
  )
}
