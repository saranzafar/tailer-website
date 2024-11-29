import "preline/preline";
import { Toaster } from 'react-hot-toast';
import { Outlet } from "react-router-dom";
import { Navbar } from "./components/index";

function App() {

  return (
    <div>
      <Navbar />
      <Toaster />
      <Outlet />
    </div>
  );
}

export default App;