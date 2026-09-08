import { useState } from "react";

const initialDataForm = {
  id: 0,
  name: "",
  price: "",
  description: "",
};

export const ProductForm = ({ productSelected, handlerAdd }) => {
  const [form, setForm] = useState(productSelected || initialDataForm);

  const { id, name, price, description } = form;

  const handleChange = (event) => {
    const { name, value } = event.target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!name || !price || !description) {
      alert("Please fill in all fields");
      return;
    }

    handlerAdd({
      ...form,
      price: Number.parseFloat(price),
    });

    setForm(initialDataForm);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <input
          placeholder="Name"
          className="form-control my-3 w-75"
          name="name"
          value={name}
          onChange={handleChange}
        />
      </div>

      <div>
        <input
          placeholder="Price"
          className="form-control my-3 w-75"
          name="price"
          type="number"
          step="any"
          value={price}
          onChange={handleChange}
        />
      </div>

      <div>
        <input
          placeholder="Description"
          className="form-control my-3 w-75"
          name="description"
          value={description}
          onChange={handleChange}
        />
      </div>

      <button type="submit" className="btn btn-primary">
        {id > 0 ? "Update" : "Create"}
      </button>
    </form>
  );
};
