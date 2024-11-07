
import NavbarComponent from '../components/Navbar';
import Footer from '../components/Footer';

export const MainLayout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <NavbarComponent />
      <main className="flex-grow mt-4">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;