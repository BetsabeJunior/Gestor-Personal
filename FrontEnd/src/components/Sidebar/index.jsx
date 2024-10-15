import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
  Box,
  Divider,
  Avatar,
  IconButton,
  Collapse,
  Menu,
  MenuItem,
  styled,
} from '@mui/material';
import { Link, useLocation } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import { fakeUsers } from "../../utils/fakeUsers";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faAngleLeft,
  faAngleRight,
  faChevronDown,
  faChevronUp,
  faEllipsisV,
  faChartLine, // Icono para Finanzas
  faTools,     // Icono para Herramientas
  faHouseChimney, // Icono para Cabañas
  faUser,     // Icono para Usuarios
  faUserGroup, // Icono para Proveedores
  faBuilding,  // Icono para Personal
  faSignOutAlt, // Icono para Cerrar sesión
  faUserEdit,   // Icono para Editar perfil
  faPalette,    // Icono para Cambiar tema
} from '@fortawesome/free-solid-svg-icons';
import { useMenu } from '../../contexts/MenuProvider';
import { useState, Fragment } from 'react';

const StyledSidebar = styled(Box, { shouldForwardProp: (prop) => prop !== 'isOpen' })(({ theme, isOpen }) => ({
  width: isOpen ? '250px' : '60px',
  height: '90vh',
  backgroundColor: theme.palette.background.paper,
  padding: theme.spacing(2),
  display: 'flex',
  flexDirection: 'column',
  overflowY: 'auto',
  borderRadius: '15px',
  boxShadow: theme.shadows[2],
  transition: 'width 0.3s',
  [theme.breakpoints.down('sm')]: {
    width: '100%', // Full width on mobile
    height: 'auto', // Auto height to fit content
  },
}));

const Logo = styled(Typography)(({ theme }) => ({
  fontWeight: 'bold',
  marginBottom: theme.spacing(2),
  textAlign: 'center',
}));

const StyledListItem = styled(ListItem)(({ theme, active }) => ({
  borderRadius: theme.shape.borderRadius,
  marginBottom: theme.spacing(0.5),
  backgroundColor: active === 'true' ? theme.palette.action.selected : 'transparent',
  '&:hover': {
    backgroundColor: theme.palette.action.hover,
    cursor: 'pointer',
  },
  paddingLeft: theme.spacing(1),
  paddingRight: theme.spacing(1),
  color: active === 'true' ? theme.palette.primary.main : theme.palette.text.primary,
}));

const SectionTitle = styled(Typography)(({ theme }) => ({
  fontWeight: 'bold',
  marginTop: theme.spacing(2),
  marginBottom: theme.spacing(1),
  display: 'flex',
  justifyContent: 'space-between',
  cursor: 'pointer',
}));

const Sidebar = () => {
  const { user, logout } = useAuth();
  const location = useLocation();
  const { openMenus, setOpenMenus } = useMenu();
  const [isOpen, setIsOpen] = useState(true);
  const [anchorEl, setAnchorEl] = useState(null);

  const toggleSidebar = () => setIsOpen(!isOpen);

  const toggleMenu = (menu) => {
    setOpenMenus((prev) => ({
      ...prev,
      [menu]: !prev[menu],
    }));
  };

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const currentUser = fakeUsers.find(u => u.Usuario === user.token.Usuario);

  if (!currentUser) {
    return <Typography>Usuario no encontrado</Typography>;
  }

  const sections = [
    { key: 'financialItems', title: 'FINANZAS', icon: faChartLine },
    { key: 'toolItems', title: 'HERRAMIENTAS', icon: faTools },
    { key: 'cabañasItem', title: 'CABAÑAS', icon: faHouseChimney },
    { key: 'userItem', title: 'USUARIOS', icon: faUser },
    { key: 'provedorItem', title: 'PROVEEDORES', icon: faUserGroup },
    { key: 'personalItem', title: 'PERSONAL', icon: faBuilding },
  ];

  return (
    <StyledSidebar isOpen={isOpen}>
      <Logo variant="h6" sx={{ fontSize: isOpen ? '1.5rem' : '1rem' }}>
        {isOpen ? 'LOGO' : 'L'}
      </Logo>
      <Box sx={{ flexGrow: 1 }}>
        <List component="nav">
          {currentUser.menuItems.map((item, index) => {
            const isActive = location.pathname === item.path;

            return (
              <StyledListItem
                component={Link}
                to={item.path}
                key={index}
                active={isActive ? 'true' : 'false'}
              >
                <ListItemIcon>
                  <FontAwesomeIcon icon={item.icon} />
                </ListItemIcon>
                {isOpen && <ListItemText primary={item.text} />}
              </StyledListItem>
            );
          })}
          <Divider />
          {sections.map(section => (
            currentUser[section.key].length > 0 && (
              <Fragment key={section.key}>
                <SectionTitle onClick={() => toggleMenu(section.key)}>
                  <FontAwesomeIcon icon={section.icon} />
                  {section.title}
                  <FontAwesomeIcon icon={openMenus[section.key] ? faChevronUp : faChevronDown} />
                </SectionTitle>
                <Collapse in={openMenus[section.key]}>
                  <List component="nav" disablePadding>
                    {currentUser[section.key].map((item, index) => {
                      const isActive = location.pathname === item.path;
                      return (
                        <StyledListItem
                          component={Link}
                          to={item.path}
                          key={index}
                          active={isActive ? 'true' : 'false'}
                        >
                          <ListItemIcon>
                            <FontAwesomeIcon icon={item.icon} />
                          </ListItemIcon>
                          {isOpen && <ListItemText primary={item.text} />}
                        </StyledListItem>
                      );
                    })}
                  </List>
                </Collapse>
                <Divider />
              </Fragment>
            )
          ))}
        </List>
      </Box>
      <Box display="flex" alignItems="center" mt={2} justifyContent={isOpen ? 'space-between' : 'center'}>
        <Avatar alt={currentUser.Nombre} src={currentUser.photoURL} />
        {isOpen && (
          <Box ml={2}>
            <Typography variant="body2"><b>{currentUser.Nombre}</b></Typography>
          </Box>
        )}
        <IconButton onClick={handleClick}>
          <FontAwesomeIcon icon={faEllipsisV} />
        </IconButton>
        <Menu
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
        >
          <MenuItem onClick={logout}>
            <ListItemIcon>
              <FontAwesomeIcon icon={faSignOutAlt} />
            </ListItemIcon>
            Cerrar sesión
          </MenuItem>
          <MenuItem component={Link} to="/editar-perfil">
            <ListItemIcon>
              <FontAwesomeIcon icon={faUserEdit} />
            </ListItemIcon>
            Editar perfil
          </MenuItem>
          <MenuItem>
            <ListItemIcon>
              <FontAwesomeIcon icon={faPalette} />
            </ListItemIcon>
            Cambiar tema
          </MenuItem>
        </Menu>
      </Box>
    </StyledSidebar>
  );
};

export default Sidebar;
