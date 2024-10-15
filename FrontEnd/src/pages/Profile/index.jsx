import { Typography, Box } from "@mui/material";
import Sidebar from "../../components/Sidebar";
import { useState } from "react";

const Perfil = () => {

  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };


  return (
    <Box sx={{ display: 'flex' }}>
      <Sidebar isOpen={sidebarOpen} toggleDrawer={toggleSidebar} />
      <Box sx={{ flexGrow: 1, p: 4 }}>
        <Typography variant="h4" gutterBottom>
        Perfil
        </Typography>
        <Typography variant="body1">
          Bienvenido Personal Cabanas.
        </Typography>
      </Box>
    </Box>
  );
};

export default Perfil;
