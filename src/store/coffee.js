import { v4 as uuidv4 } from 'uuid'
const coffee = {
    state: {
        coffee: [
            {
                id: uuidv4(),
                image: 'coffee-1.jpg',
                name: 'Solimo Coffee Beans 2kg',
                country: 'Brazil',
                price: 10.73,
            },
            {
                id: uuidv4(),
                image: 'coffee-2.jpg',
                name: 'Presto Coffee Beans 1kg',
                country: 'Ethiopia',
                price: 15.99,
            },
            {
                id: uuidv4(),
                image: 'coffee-3.jpg',
                name: 'AROMISTICO Coffee 1kg',
                country: 'Colombia',
                price: 6.99,
            },
            {
                id: uuidv4(),
                image: 'coffee-1.jpg',
                name: 'Solimo Coffee Beans 2kg',
                country: 'Guatemala',
                price: 10.73,
            },
            {
                id: uuidv4(),
                image: 'coffee-2.jpg',
                name: 'Presto Coffee Beans 1kg',
                country: 'India',
                price: 15.99,
            },
            {
                id: uuidv4(),
                image: 'coffee-3.jpg',
                name: 'AROMISTICO Coffee 1kg',
                country: 'Tanzania',
                price: 6.99,
            },
        ],
    },
    getters: {
        getCoffee(state) {
            return state.coffee
        },
    },
}
export default coffee
