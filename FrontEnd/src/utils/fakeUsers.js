import {
    faHome, 
    faUser, 
    faTachometerAlt, 
    faHouseChimney,
    faChartLine, 
    faFileInvoice, 
    faBuilding, 
    faTools, 
    faCog,
    faUserGroup,
    faPenToSquare
} from '@fortawesome/free-solid-svg-icons';

export const fakeUsers = [
    { 
        Usuario: "Betsabe", 
        Password: "123456", 
        Rol: "Admin", 
        Nombre: "Betsabe Hoyos Barrios", 
        photoURL: "src/assets/Avatar.jpg",
        menuItems: [
            { text: "Dashboard", path: "/dashboard", icon: faTachometerAlt },
            { text: "Inicio", path: "/inicio", icon: faHome },
        ],
        financialItems: [
            { text: "Reportes de Gastos", path: "/reportes", icon: faChartLine },
            { text: "Facturas", path: "/facturas", icon: faFileInvoice },
            { text: "Estado de Cuentas", path: "/estado-cuentas", icon: faBuilding }
        ],
        toolItems: [
            { text: "Mantenimiento", path: "/mantenimiento", icon: faTools },
            { text: "Configuraciones", path: "/configuraciones", icon: faCog }
        ],
        cabañasItem: [
            { text: "Ver Cabañas", path: "/cabanas", icon: faHouseChimney },
            { text: "Disponibilidad", path: "/disponibilidad", icon: faHouseChimney }
        ],
        userItem: [
            { text: "Gestión de Empleados", path: "/empleados", icon: faUser },
            { text: "Registrar Empleado", path: "/registrar-empleado", icon: faPenToSquare },
            { text: "Ingreso de Empleados", path: "/ingreso-empleados", icon: faUserGroup },
        ],
        provedorItem:[
            { text: "Proveedores", path: "/proveedores", icon: faUser },
            { text: "Registrar Proveedor", path: "/registrar-proveedor", icon: faPenToSquare },
        ],
        personalItem:[
            { text: "Personal de Cabañas", path: "/personal-cabanas", icon: faUser },
            { text: "Registrar Personal", path: "/registrar-personal", icon: faPenToSquare },
        ],
    },
    // Otros usuarios...
];
