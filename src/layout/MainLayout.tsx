import Nav from "../components/Nav";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <div>
      <header>
        <Nav />
      </header>
      <main>
        <Outlet />
      </main>

      <footer></footer>
    </div>
  );
};

export default MainLayout;
