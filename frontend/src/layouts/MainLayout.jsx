import Footer from '../components/Footer';
import NavbarComponent from '../components/Navbar';

export const MainLayout = ({ children }) => {
  return (
    <div
      className="flex flex-col min-h-screen"
      style={{
        overflow: "hidden", // Evita desbordamiento global
      }}
    >
      {/* Navbar */}
      <NavbarComponent />
      
      {/* Contenido principal */}
      <main
        className="flex-grow mt-4"
        style={{
          overflowY: "auto", // Permite el scroll en el contenido principal
          maxHeight: "calc(100vh - 80px)", // Ajusta dinámicamente, considerando altura del Navbar y Footer
        }}
      >
        {children}
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default MainLayout;
