import {
  ActionFunctionArgs,
  Form,
  Link,
  useActionData,
} from "react-router-dom";
import ErrorMsg from "../component/ErrorMsg";
import { addProduct } from "../services/ProductService";

export async function action({ request }: ActionFunctionArgs) {
  const data = Object.fromEntries(await request.formData());
  let error = "";

  if (Object.values(data).includes("")) {
    error = "Todos los campos son obligatorios";
  }
  if (error.length) {
    return error;
  }

  addProduct(data);

  return {};
}

const NewProduct = () => {
  const error = useActionData() as string;

  return (
    <>
      <div className=" flex justify-between w-[500px] max-w-[80vw]">
        <h2 className="font-kanit text-lg text-gray ">Crear nuevo producto</h2>
        <Link
          to={"/"}
          className="font-kanit text-sm text-black bg-cyan rounded-lg p-2 cursor-pointer hover:scale-105 duration-300 text-center"
        >
          Volver al listado
        </Link>
      </div>

      <Form className="mt-10 w-[500px] max-w-[80vw]" method="POST">
        <div className="mb-4 flex flex-col">
          <label className="text-gray font-kanit ml-2" htmlFor="name">
            Nombre del producto:
          </label>
          <input
            id="name"
            type="text"
            className="mt-2 block w-full p-3 rounded font-kanit font-light"
            placeholder="Ej. Monitor"
            name="name"
          />
        </div>
        <div className="mb-4 flex flex-col">
          <label className="text-gray font-kanit ml-2" htmlFor="price">
            Precio:
          </label>
          <input
            id="price"
            type="number"
            className="mt-2 block w-full p-3 rounded font-kanit font-light"
            placeholder="Ej. 200, 300"
            name="price"
          />
        </div>
        <input
          type="submit"
          className="mt-5 w-full bg-cyan p-2 text-black font-bold text-sm cursor-pointer rounded hover:scale-105 duration-300 uppercase"
          value="Registrar Producto"
        />
      </Form>
      {error && <ErrorMsg>{error}</ErrorMsg>}
    </>
  );
};

export default NewProduct;
