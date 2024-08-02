import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <header className="flex items-center justify-center p-4 bg-white">
        <h1 className=" font-kanit text-2xl text-cyan uppercase font-semibold text-center">
          Administrador de productos
        </h1>
      </header>
      <main className="flex flex-col justify-center items-center mt-7">
        <Outlet />
      </main>
    </>
  );
};

export default Layout;
