import {
  ActionFunctionArgs,
  Form,
  Link,
  LoaderFunctionArgs,
  redirect,
  useActionData,
  useLoaderData,
} from "react-router-dom";
import ErrorMsg from "../component/ErrorMsg";
import { editProduct, getProductById } from "../services/ProductService";
import { Product } from "../types";

export async function action({ request, params }: ActionFunctionArgs) {
  const data = Object.fromEntries(await request.formData());
  let error = "";

  if (Object.values(data).includes("")) {
    error = "Todos los campos son obligatorios";
  }
  if (error.length) {
    return error;
  }
  if (params.id !== undefined) {
    await editProduct(data, +params.id);
    return redirect("/");
  }
}

export async function loader({ params }: LoaderFunctionArgs) {
  if (params.id !== undefined) {
    const product = await getProductById(+params.id);
    if (!product) {
      return redirect("/");
    }
    return product;
  }
}

const availabilityOptions = [
  { name: "Disponible", value: true },
  { name: "No Disponible", value: false },
];

const EditProduct = () => {
  const error = useActionData() as string;
  const product = useLoaderData() as Product;

  return (
    <>
      <div className=" flex justify-between w-[500px] max-w-[80vw]">
        <h2 className="font-kanit text-lg text-gray ">Editar producto</h2>
        <Link
          to={"/"}
          className="font-kanit text-sm text-black bg-cyan rounded-lg p-2 cursor-pointer hover:scale-105 duration-300 text-center"
        >
          Volver al listado
        </Link>
      </div>

      <Form className="mt-10 w-[500px] max-w-[80vw]" method="PUT">
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
            defaultValue={product.name}
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
            defaultValue={product.price}
          />
        </div>

        <div className="mb-4 flex flex-col">
          <label className="text-gray font-kanit ml-2" htmlFor="available">
            Disponibilidad:
          </label>
          <select
            id="available"
            className="mt-2 block w-full p-3 rounded font-kanit font-light"
            name="available"
            defaultValue={product?.available.toString()}
          >
            {availabilityOptions.map((option) => (
              <option key={option.name} value={option.value.toString()}>
                {option.name}
              </option>
            ))}
          </select>
        </div>
        <input
          type="submit"
          className="mt-5 w-full bg-cyan p-2 text-black font-bold text-sm cursor-pointer rounded hover:scale-105 duration-300 uppercase"
          value="Editar Producto"
        />
      </Form>
      {error && <ErrorMsg>{error}</ErrorMsg>}
    </>
  );
};

export default EditProduct;
