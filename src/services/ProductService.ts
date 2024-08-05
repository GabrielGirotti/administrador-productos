import axios from "axios";
import {
  DraftProductSchema,
  Product,
  ProductSchema,
  ProductsSchema,
} from "../types";
import { safeParse } from "valibot";
import { toBoolean } from "../utilities";

type addProductProps = {
  [k: string]: FormDataEntryValue;
};

export async function addProduct(data: addProductProps) {
  try {
    const result = safeParse(DraftProductSchema, {
      name: data.name,
      price: +data.price,
    });
    if (result.success) {
      const url = `${import.meta.env.VITE_API_URL}/api/products`;
      await axios.post(url, {
        name: result.output.name,
        price: result.output.price,
      });
    } else {
      throw new Error("Datos no validos");
    }
  } catch (error) {
    console.log(error);
  }
}

export async function getProducts() {
  try {
    const url = `${import.meta.env.VITE_API_URL}/api/products`;
    const { data } = await axios(url);
    const result = safeParse(ProductsSchema, data.data);
    if (result.success) {
      return result.output;
    } else {
      throw new Error("Hubo un error en la peticion");
    }
  } catch (error) {
    console.log(error);
  }
}

export async function getProductById(id: Product["id"]) {
  try {
    const url = `${import.meta.env.VITE_API_URL}/api/products/${id}`;
    const { data } = await axios(url);
    const result = safeParse(ProductSchema, data.data);

    if (result.success) {
      return result.output;
    } else {
      throw new Error("Hubo un error en la peticion");
    }
  } catch (error) {
    console.log(error);
  }
}

export async function editProduct(data: addProductProps, id: Product["id"]) {
  try {
    const result = safeParse(ProductSchema, {
      name: data.name,
      price: +data.price,
      available: toBoolean(data.available.toString()),
      id,
    });
    if (result.success) {
      const url = `${import.meta.env.VITE_API_URL}/api/products/${id}`;
      await axios.put(url, {
        name: result.output.name,
        price: result.output.price,
        available: result.output.available,
      });
    } else {
      throw new Error("Datos no validos");
    }
  } catch (error) {
    console.log(error);
  }
}


export async function deleteProduct(id: Product["id"]) {
  try {
    const url = `${import.meta.env.VITE_API_URL}/api/products/${id}`;
    if(id){
      await axios.delete(url);
    }else {
      throw new Error("Hubo un error al eliminar");
    }
  } catch (error) {
    console.log(error);
  }
}