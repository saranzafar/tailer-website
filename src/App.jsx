import "preline/preline";
import { Toaster } from 'react-hot-toast';
import { Outlet } from "react-router-dom";
import { Footer, Navbar } from "./components/index";
import Nav from "./components/Nav"
import { VerificationProvider } from "./utils/VerificationContext";

function App() {

  return (
    <VerificationProvider >
      <div>
        {/* <Navbar /> */}
        <Nav />
        <Toaster />
        <Outlet />
        <Footer />
      </div>
    </VerificationProvider>
  );
}

export default App;