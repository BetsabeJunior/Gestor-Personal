import { Typography, Box } from "@mui/material";
import Sidebar from "../../components/Sidebar";
import { useState } from "react";

const Empleados = () => {

  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };


  return (
    <Box sx={{ display: 'flex' }}>
      <Sidebar isOpen={sidebarOpen} toggleDrawer={toggleSidebar} />
      <Box sx={{ flexGrow: 1, p: 4 }}>
        <Typography variant="h4" gutterBottom>
          Empleados
        </Typography>
        <Typography variant="body1">
        
        </Typography>
      </Box>
    </Box>
  );
};

export default Empleados;
