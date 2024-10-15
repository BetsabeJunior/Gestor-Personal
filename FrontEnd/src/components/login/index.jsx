import { useState, useEffect } from "react";
import { useAuth } from "../../contexts/AuthContext";
import { useNavigate } from 'react-router-dom';
import {
  Button,
  TextField,
  Box,
  Typography,
  Container,
  CssBaseline,
  Paper,
  IconButton,
  Alert,
} from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { carouselImages } from "../../utils/carouselImages";
import { fakeUsers } from "../../utils/fakeUsers";

const theme = createTheme({
  palette: {
    primary: {
      main: "#000000",
    },
    background: {
      default: "#ffffff",
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
          borderRadius: "8px",
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          "& .MuiOutlinedInput-root": {
            borderRadius: "8px",
          },
        },
      },
    },
  },
});

const LoginPage = () => {
  const [usuario, setUsuario] = useState("");
  const [password, setPassword] = useState("");
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [hidenAlert, setHidenAlert] = useState(false);
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!usuario || !password) {
      setHidenAlert(true);
      return;
    }

    const user = fakeUsers.find(u => u.Usuario === usuario && u.Password === password);

    if (user) {
      setHidenAlert(false);
      login({ token: user }); // Almacena el usuario en el formato correcto
      navigate("/dashboard");
    } else {
      console.log("Usuario o contraseña incorrectos");
      setHidenAlert(true);
    }
  };

  useEffect(() => {
    if (window.innerWidth >= 600) {
      const intervalId = setInterval(() => {
        setCurrentImageIndex((prevIndex) =>
          prevIndex === carouselImages.length - 1 ? 0 : prevIndex + 1
        );
      }, 5000);

      return () => clearInterval(intervalId);
    }
  }, []);

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === carouselImages.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? carouselImages.length - 1 : prevIndex - 1
    );
  };

  const { src, quote, author, position } = carouselImages[currentImageIndex];

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container
        maxWidth='lg'
        disableGutters
        sx={{ height: "100vh", display: "flex"}}
      >
        <Paper
          elevation={5}
          sx={{
            display: "flex",
            width: "100%",
            borderRadius: "24px",
            overflow: "hidden",
            m: 2,
          }}
        >
          <Box
            sx={{
              flex: 1,
              p: 4,
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center" 
            }}
          >
            <Typography
              variant="h5"
              component="h1"
              sx={{ mb: 1, fontWeight: "bold" }}
            >
             Corporación
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 4 }}>
              Accede a tu cuenta corporativa
            </Typography>
            <Box component="form" onSubmit={handleSubmit} noValidate  align="center">
              <TextField
                margin="normal"
                required
                fullWidth
                id="usuario"
                label="Usuario"
                name="usuario"
                autoComplete="text"
                autoFocus
                value={usuario}
                onChange={(e) => setUsuario(e.target.value)}
                sx={{ mb: 2 }}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Contraseña"
                type="password"
                id="password"
                autoComplete="current-password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                sx={{ mb: 3 }}
              />
              <Alert  
               sx={{ display: hidenAlert ? '' : 'none'}}
               variant="outlined" 
               severity="error">
                Usuario y/o Contraseña incorrecta
              </Alert>
              <Button
                type="submit"
                variant="contained"
                sx={{
                  mt: 2,
                  mb: 2,
                  bgcolor: "black",
                  "&:hover": { bgcolor: "#333" },
                }}
              >
                Iniciar sesión
              </Button>
            </Box>
          </Box>
          <Box
            sx={{
              flex: 1.5,
              height: "100%", 
              minHeight: "400px",
              display: { xs: "none", sm: "block" },
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              backgroundImage: `url(${src})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              backgroundPosition: "center",
              position: "relative",
              borderRadius: "0 24px 24px 0"
            }}
          >
            <Box
              sx={{
                position: "absolute",
                bottom: 40,
                left: 40,
                right: 40,
                color: "white",
                p: 2,
                borderRadius: "8px",
                backgroundColor: "rgba(0, 0, 0, 0.5)",
                backdropFilter: "blur(8px)",
              }}
            >
              <Typography variant="h6" sx={{ mb: 2, fontWeight: "bold" }}>
                {quote}
              </Typography>
              <Typography variant="body1">{author}</Typography>
              <Typography variant="body2">{position}</Typography>
            </Box>
            <Box sx={{ position: "absolute", bottom: 40, right: 40 }}>
              <IconButton onClick={prevImage} sx={{ color: "white", mr: 1 }}>
                <ArrowBackIosNewIcon />
              </IconButton>
              <IconButton onClick={nextImage} sx={{ color: "white" }}>
                <ArrowForwardIosIcon />
              </IconButton>
            </Box>
          </Box>
        </Paper>
      </Container>
    </ThemeProvider>
  );
};

export default LoginPage;
