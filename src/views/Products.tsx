import { Link } from "react-router-dom";

const Products = () => {
  return (
    <div className=" flex justify-between w-[500px] max-w-[80vw]">
      <h2 className="font-kanit text-lg text-gray ">Productos</h2>
      <Link
        to={"/prodct/new"}
        className="font-kanit text-sm text-black bg-cyan rounded-lg p-2 cursor-pointer hover:scale-105 duration-300 text-center"
      >
        Agregar producto
      </Link>
    </div>
  );
};

export default Products;
