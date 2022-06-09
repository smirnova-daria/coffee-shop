const goods = {
    state: {
        goods: [],
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
