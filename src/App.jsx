import "preline/preline";
import { Toaster } from 'react-hot-toast';
import { Outlet } from "react-router-dom";
import { Footer, Navbar } from "./components/index";
import Nav from "./components/Nav"

function App() {

  return (
    <div>
      {/* <Navbar /> */}
      <Nav/>
      <Toaster />
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;