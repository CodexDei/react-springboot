import axios from "axios";

const initialProducts = [

    {
        id:1,
        name: 'Product 1',
        price: 10.99,
        description: 'This is product 1',
    },
    {
        id:2,
        name: 'Product 2',
        price: 19.99,
        description: 'This is product 2',
    },
    {
        id:3,
        name: 'Product 3',
        price: 30.00,
        description: 'This is product 3',
    }
];

const baseUrl = 'http://localhost:8080/products';

export const listProducts = () => {
    return initialProducts;
}

export const findAll = async () => {

    try {
        const response = await axios.get(baseUrl);
        return response;
        
    } catch (error) {
        console.log(error);
    }

    return null;

}