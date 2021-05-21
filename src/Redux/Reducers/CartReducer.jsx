let initialState = {
    data: null,
    searchText: null,
    searchResult: null
}

function cartReducer(state = initialState, action){
    switch(action.type){
        case 'GET_DATA_SUCCESS':
            return { data: action.payload }
        case 'SEARCH_DATA_SUCCESS':
            return { ...state, searchResult: action.payload }
        case 'SEARCH_ACTION_SUCCESS':
            return { ...state, searchText: action.payload }
        default:
            return state
    }
}

export default cartReducer