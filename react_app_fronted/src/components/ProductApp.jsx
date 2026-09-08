import { useEffect, useState } from "react";
import { findAll, listProducts } from "../services/ProductService";
import { ProductGrid } from "./ProductGrid";
import PropTypes from "prop-types";
import { ProductForm } from "./ProductForm";

export const ProductApp = ({ title }) => {
  const [products, setProducts] = useState([]);

  const [productSelected, setProductSelected] = useState({
    id: 0,
    name: "",
    price: "",
    description: "",
  });

  const getProducts = async () => {
    const result = await findAll();
    console.log(result);
    setProducts(result.data._embedded.products);
  };

  useEffect(() => {
    // los productos que deben mostrarse.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    getProducts();
  }, []);

  const handlerAddProduct = (product) => {
    console.log(product);

    // EDITAR PRODUCTO
    if (product.id > 0) {
      setProducts((products) =>
        products.map((prod) => (prod.id === product.id ? product : prod)),
      );
    }
    // CREAR PRODUCTO
    else {
      const newProduct = {
        ...product,
        id: new Date().getTime(),
      };

      setProducts((products) => [...products, newProduct]);
    }

    // Volvemos a dejar el formulario preparado para un nuevo producto
    setProductSelected({
      id: 0,
      name: "",
      price: "",
      description: "",
    });
  };

  const handlerProductSelected = (product) => {
    setProductSelected({ ...product });
  };

  const handlerRemoveProduct = (id) => {
    console.log(id);

    setProducts((products) => products.filter((product) => product.id !== id));
  };

  return (
    <div className="container my-4">
      <h1>{title}</h1>

      <div className="row">
        <div className="col-12 col-md-4">
          <ProductForm
            key={productSelected?.id ?? 0}
            handlerAdd={handlerAddProduct}
            productSelected={productSelected}
          />
        </div>

        <div className="col-12 col-md-4">
          {products.length === 0 ? (
            <div className="alert alert-warning">No products available</div>
          ) : (
            <ProductGrid
              products={products}
              handlerProductSelected={handlerProductSelected}
              handlerRemove={handlerRemoveProduct}
            />
          )}
        </div>
      </div>
    </div>
  );
};

ProductApp.propTypes = {
  title: PropTypes.string.isRequired,
};
