import PropTypes from "prop-types";
import { ProductDetail } from "./ProductDetail";

export const ProductGrid = ({
  products = [],
  handlerProductSelected,
  handlerRemove,
}) => {
  return (
    <table className="table table-hover table-striped">
      <thead>
        <tr>
          <th>name</th>
          <th>price</th>
          <th>description</th>
          <th>update</th>
          <th>remove</th>
        </tr>
      </thead>

      <tbody>
        {products
          .filter((product) => product != null)
          .map((product) => (
            <ProductDetail
              product={product}
              key={product.id}
              handlerProductSelected={handlerProductSelected}
              handlerRemove={handlerRemove}
            />
          ))}
      </tbody>
    </table>
  );
};

ProductGrid.propTypes = {
  products: PropTypes.array.isRequired,
  handlerProductSelected: PropTypes.func.isRequired,
  handlerRemove: PropTypes.func.isRequired,
};
