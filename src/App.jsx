import { Toaster } from 'react-hot-toast';
import { Outlet } from "react-router-dom";
import { VerificationProvider } from "./utils/VerificationContext";
import { Nav, Footer } from "./components/index";

function App() {

  return (
    <VerificationProvider >
      <div className='min-h-[70vh]'>
        <Nav />
        <Toaster />
        <Outlet />
      </div>
      <Footer />
    </VerificationProvider>
  );
}

export default App;