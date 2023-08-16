import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { TableGastosPorCategorias } from './TableGastosPorCategorias';
import { TableUltimasTreansacciones } from './TableUlimasTransacciones';
import { TableGastosPorMes } from './TableGastosPorMes';

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography color={"white"}>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function TabsConsultas() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%', color:"white", margin: "auto"}}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs centered value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab sx={{ color: 'white' }} className='text-white' label="Resumen Gastos Por Categorias" {...a11yProps(0)} />

          <Tab sx={{ color: 'white' }} label="Ultimas Transacciones" {...a11yProps(1)} />
          <Tab sx={{ color: 'white' }} label="Gastos Por Mes" {...a11yProps(2)} />
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
        <TableGastosPorCategorias/>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        <TableUltimasTreansacciones/>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
        <TableGastosPorMes/>
      </CustomTabPanel>
    </Box>
  );
}