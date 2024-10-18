import { Typography, Box } from "@mui/material";
import Sidebar from "../../components/Sidebar";
import { useState } from "react";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { styled } from "@mui/material/styles";
import CabinCard  from "./../../components/Card";



const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
  ...theme.applyStyles("dark", {
    backgroundColor: "#1A2027",
  }),
}));

const Dashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <>
      <Box sx={{ display: "flex" }}>
        <Sidebar isOpen={sidebarOpen} toggleDrawer={toggleSidebar} />
        <Box sx={{ flexGrow: 1, p: 4 }}>
          <Typography variant="h4" gutterBottom>
            Dashboard
          </Typography>
          <Typography variant="body1">
            <Grid container spacing={2}>
              <Grid item xs={3}>
              <CabinCard 
                image="src/assets/login3.jpg"
                name="Cabaña del Bosque"
                description="Hermosa cabaña rodeada de naturaleza, perfecta para una escapada relajante."
                availableCount={3}
                price={120}
              />
              </Grid>
              <Grid item xs={3}>
                <Item>xs=4</Item>
              </Grid>
              <Grid item xs={3}>
                <Item>xs=4</Item>
              </Grid>
              <Grid item xs={3}>
                <Item>xs=8</Item>
              </Grid>
            </Grid>
          </Typography>
        </Box>
      </Box>
    </>
  );
};

export default Dashboard;
