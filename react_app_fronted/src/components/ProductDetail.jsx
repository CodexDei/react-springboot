import PropTypes from "prop-types";

export const ProductDetail = ({
  product = {},
  handlerProductSelected,
  handlerRemove,
}) => {
  return (
    <tr>
      {/* <td>{product.id}</td> */}
      <td>{product.name}</td>
      <td>${product.price.toFixed(2)}</td>
      <td>{product.description}</td>
      <td>
        <button
          className="btn btn-secondary btn-sm"
          onClick={() => {
            handlerProductSelected(product);
          }}
        >
          update
        </button>
      </td>
      <td>
        <button
          className="btn btn-danger btn-sm"
          onClick={() => {
            handlerRemove(product.id);
          }}
        >
          remove
        </button>
      </td>
    </tr>
  );
};

ProductDetail.propTypes = {
  products: PropTypes.object.isRequired,
  handlerProductSelected: PropTypes.func.isRequired,
  handlerRemove: PropTypes.func.isRequired,
};
