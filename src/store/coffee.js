const coffee = {
    state: {
        coffee: [],
        searchValue: '',
        sortValue: '',
    },
    actions: {
        setCoffeeData({ commit }, data) {
            commit('setCoffeeData', data)
        },
        setSearchValue({ commit }, value) {
            commit('setSearchValue', value)
        },
        setSortValue({ commit }, value) {
            commit('setSortValue', value)
        },
    },
    mutations: {
        setCoffeeData(state, data) {
            state.coffee = data
        },
        setSearchValue(state, value) {
            state.searchValue = value
        },
        setSortValue(state, value) {
            state.sortValue = value
        },
    },
    getters: {
        getCoffee(state) {
            //Вариант фильтрации массива
            //
            // return state.coffee
            //     .filter((item) =>
            //         item.name
            //             .toLowerCase()
            //             .includes(state.searchValue.toLowerCase())
            //     )
            //     .filter((item) =>
            //         item.country
            //             .toLowerCase()
            //             .includes(state.sortValue.toLowerCase())
            //     )
            //Вариант фильтрации через сервер
            return state.coffee
        },
        getCoffeeById(state) {
            return (id) => {
                return state.coffee.find((card) => card.id === +id)
            }
        },
        getSearchValue(state) {
            return state.searchValue
        },
    },
}
export default coffee
