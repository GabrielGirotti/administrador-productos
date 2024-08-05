import { useNavigate } from "react-router-dom";
import { deleteProduct } from "../services/ProductService";

type ProductDetailsProps = {
  product: {
    name: string;
    price: number;
    id: number;
    available: boolean;
  };
};

const ProductDetails = ({ product }: ProductDetailsProps) => {
  const navigate = useNavigate();

  const handleDelete = async function (id: number) {
    if (id !== undefined) {
      await deleteProduct(id);
    }
    navigate("/");
  };

  return (
    <tr className="border-b bg-white font-kanit">
      <td className="p-3 text-lg text-blck text-center">{product.name}</td>
      <td className="p-3 text-lg text-blck text-center">${product.price}</td>
      <td className="p-3 text-lg text-blck text-center">
        {product.available === true ? <p>Disponible</p> : <p>No disponible</p>}
      </td>
      <td className="p-3 text-lg text-gray ">
        <div className="flex gap-2 items-center justify-center flex-wrap">
          <button
            onClick={() => navigate(`/prodct/${product.id}/edit`)}
            className=" font-kanit text-black px-2  bg-gray rounded-lg hover:bg-cyan duration-300 font-light"
          >
            Editar
          </button>
          <button
            onClick={() => handleDelete(product.id)}
            className=" font-kanit text-black px-2  bg-red rounded-lg hover:bg-red duration-300 sm:bg-gray"
          >
            X
          </button>
        </div>
      </td>
    </tr>
  );
};

export default ProductDetails;
