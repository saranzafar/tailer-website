import "preline/preline";
import { Toaster } from 'react-hot-toast';
import { Outlet } from "react-router-dom";
import { Footer, Navbar } from "./components/index";

function App() {

  return (
    <div>
      <Navbar />
      <Toaster />
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;