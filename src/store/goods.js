const goods = {
    state: {
        goods: null,
        // goods: [
        //     {
        //         id: 0,
        //         image: 'coffee-1.jpg',
        //         name: 'Solimo Coffee Beans 2kg',
        //         country: 'Brazil',
        //         price: 10.73,
        //     },
        //     {
        //         id: 1,
        //         image: 'coffee-2.jpg',
        //         name: 'Presto Coffee Beans 1kg',
        //         country: 'Ethiopia',
        //         price: 15.99,
        //     },
        //     {
        //         id: 2,
        //         image: 'coffee-3.jpg',
        //         name: 'AROMISTICO Coffee 1kg',
        //         country: 'Colombia',
        //         price: 6.99,
        //     },
        //     {
        //         id: 3,
        //         image: 'coffee-1.jpg',
        //         name: 'Solimo Coffee Beans 2kg',
        //         country: 'Guatemala',
        //         price: 10.73,
        //     },
        //     {
        //         id: 4,
        //         image: 'coffee-2.jpg',
        //         name: 'Presto Coffee Beans 1kg',
        //         country: 'India',
        //         price: 15.99,
        //     },
        //     {
        //         id: 5,
        //         image: 'coffee-3.jpg',
        //         name: 'AROMISTICO Coffee 1kg',
        //         country: 'Tanzania',
        //         price: 6.99,
        //     },
        // ],
    },
    getters: {
        getGoods(state) {
            return state.goods
        },
        getGoodsById(state) {
            return (id) => {
                return state.goods.find((card) => card.id === +id)
            }
        },
    },
    actions: {
        setGoodsData({ commit }, data) {
            commit('setGoodsData', data)
        },
    },
    mutations: {
        setGoodsData(state, data) {
            state.goods = data
        },
    },
}
export default goods
