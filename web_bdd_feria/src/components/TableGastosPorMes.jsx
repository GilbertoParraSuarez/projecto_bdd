import {  Card, Table, TableBody, TableCell, TableHead, TableHeaderCell, TableRow, Text } from '@tremor/react'
import { useEffect, useState } from 'react';
import { DotLoader } from 'react-spinners'
import { gestionService } from '../services/gestionService';


const MesByNums = [
  { id: "1", mes: "Enero" },
  { id: "2", mes: "Febrero" },
  { id: "3", mes: "Marzo" },
  { id: "4", mes: "Abril" },
  { id: "5", mes: "Mayo" },
  { id: "6", mes: "Junio" },
  { id: "7", mes: "Julio" },
  { id: "8", mes: "Agosto" },
  { id: "9", mes: "Septiembre" },
  { id: "10", mes: "Octubre" },
  { id: "11", mes: "Noviembre" },
  { id: "12", mes: "Diciembre" },
];

export const TableGastosPorMes = () => {
    const [gastos, setGastos] = useState([]);
  const [isLoading, SetIsLoading] = useState(false);
  const listarGastos = async () => {
    gestionService.getGatosPorMes().then(data => {
      SetIsLoading(true);
      console.log(data);
      setGastos(data);
      
    }).finally(()=>{
      SetIsLoading(false);
    });
  };
  useEffect(() => {
    listarGastos();
  }, []);
  return (
    <Card className="rounded-lg bg-slate-700">
      <div className="relative">
        
        <div className="max-h-96 overflow-y-auto custom-scrollbar px-4">
          {/* Aquí se establece la altura máxima y el scroll vertical */}
          <Table className="mt-5">
            <TableHead>
              <TableRow className="text-center">
                <TableHeaderCell className="text-center">AÑO DE REGISTRADO</TableHeaderCell>
                <TableHeaderCell className="text-center">
                  MES DE REGISTRADO
                </TableHeaderCell>
                <TableHeaderCell className="text-center">NOMBRE CATEGORIA</TableHeaderCell>
                <TableHeaderCell className="text-center">MONTO TOTAL</TableHeaderCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {isLoading ? (
                <div className="grid place-items-center absolute top-40 left-0 right-0 bottom-0">
                  <DotLoader color="#36d7b7" />
                </div>
              ) : (
                gastos.map((item, index) => (
                  <TableRow key={index}>
                    <TableCell className="text-center">
                      {item.Anio}
                    </TableCell>

                    <TableCell>
                      <Text className="text-center">{(MesByNums.find((valor)=> valor.id == item.Mes)).mes}</Text>
                    </TableCell>
                    <TableCell>
                      <Text className="text-center">{item.NombreCategoria}</Text>
                    </TableCell>
                    <TableCell>
                      <Text className="text-center">{item.MontoTotal}</Text>
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
