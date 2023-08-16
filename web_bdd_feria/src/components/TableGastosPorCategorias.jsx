import { Title } from '@mui/icons-material'
import { Button, Card, Table, TableBody, TableCell, TableHead, TableHeaderCell, TableRow, Text } from '@tremor/react'
import { useEffect, useState } from 'react';
import { DotLoader } from 'react-spinners'
import { gestionService } from '../services/gestionService';

export const TableGastosPorCategorias = () => {
    const [gastos, setGastos] = useState([]);
  const [isLoading, SetIsLoading] = useState(false);
  const listarGastos = async () => {
    gestionService.getResumenGastosPorCategoria().then(data => {
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
                <TableHeaderCell className="text-center">ID</TableHeaderCell>
                <TableHeaderCell className="text-center">
                  NOMBRE CATEGORIA
                </TableHeaderCell>
                <TableHeaderCell className="text-center">MONTO TOTAL</TableHeaderCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {isLoading ? (
                <div className="grid place-items-center absolute top-40 left-0 right-0 bottom-0">
                  <DotLoader color="#36d7b7" />
                </div>
              ) : (
                gastos.map(item => (
                  <TableRow key={item.IdCategoria}>
                    <TableCell className="text-center">
                      {item.IdCategoria}
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
