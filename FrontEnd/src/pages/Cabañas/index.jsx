import { Typography, Box } from "@mui/material";
import Sidebar from "../../components/Sidebar";
import { useState } from "react";

const Cabañas = () => {

  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };


  return (
    <Box sx={{ display: 'flex' }}>
      <Sidebar isOpen={sidebarOpen} toggleDrawer={toggleSidebar} />
      <Box sx={{ flexGrow: 1, p: 4 }}>
        <Typography variant="h4" gutterBottom>
        Cabañas
        </Typography>
        <Typography variant="body1">
          Bienvenido Cabañas.
        </Typography>
      </Box>
    </Box>
  );
};

export default Cabañas;
