import { ActionFunctionArgs, Link, useLoaderData } from "react-router-dom";
import { editAvailbility, getProducts } from "../services/ProductService";
import ProductDetails from "../component/ProductDetails";
import { Product } from "../types";
import { Spinner } from "../component/Spinner";

export async function loader() {
  const products = await getProducts();

  return products;
}

export async function action({ request }: ActionFunctionArgs) {
  const data = Object.fromEntries(await request.formData());

  await editAvailbility(+data.id);
  return {};
}

const Products = () => {
  const products = useLoaderData() as Product[];

  return (
    <>
      {" "}
      <div className=" flex justify-between w-[500px] max-w-[80vw]">
        <h2 className="font-kanit text-lg text-gray ">Productos</h2>
        {}
        <Link
          to={"/prodct/new"}
          className="font-kanit text-sm text-black bg-cyan rounded-lg p-2 cursor-pointer hover:scale-105 duration-300 text-center"
        >
          Agregar producto
        </Link>
      </div>
      <div className="p-2">
        <table className="w-[500px] max-w-[80vw] mt-5 table-auto ">
          <thead className=" border-b text-gray font-kanit ">
            <tr>
              <th className="p-2 font-light">Producto</th>
              <th className="p-2 font-light">Precio</th>
              <th className="p-2 font-light">Disponibilidad</th>
              <th className="p-2 font-light">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {!products && <Spinner />}

            {products.map((product) => (
              <ProductDetails key={product.id} product={product} />
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Products;
