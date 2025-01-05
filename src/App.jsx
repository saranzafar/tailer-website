import { Toaster } from 'react-hot-toast';
import { Outlet } from "react-router-dom";
import { VerificationProvider } from "./utils/VerificationContext";
import { Nav, Footer } from "./components/index";

function App() {

  return (
    <VerificationProvider >
      <div className='min-h-[80vh]'>
        <Nav />
        <Toaster />
        <Outlet />
        <Footer />
      </div>
    </VerificationProvider>
  );
}

export default App;