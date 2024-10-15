import Header from "../../components/Header";
import { Sidebar } from "../../components/Sidebar";
import "./LayoutMain.css";

export const LayoutMain = ({ children }) => {
  return (
    <main className="layoutMain">
      <Sidebar />
      <div className="content">
      <Header />
      <div className="main-content"> 
        {children}
        </div>
      </div>
    </main>
  );
};
