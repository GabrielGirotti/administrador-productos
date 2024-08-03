type ProductDetailsProps = {
  product: {
    name: string;
    price: number;
    id: number;
    available: boolean;
  };
};

const ProductDetails = ({ product }: ProductDetailsProps) => {
  return (
    <tr className="border-b bg-white font-kanit">
      <td className="p-3 text-lg text-blck text-center">{product.name}</td>
      <td className="p-3 text-lg text-blck text-center">${product.price}</td>
      <td className="p-3 text-lg text-blck text-center">
        {product.available === true ? <p>Disponible</p> : <p>No disponible</p>}
      </td>
      <td className="p-3 text-lg text-gray "></td>
    </tr>
  );
};

export default ProductDetails;
