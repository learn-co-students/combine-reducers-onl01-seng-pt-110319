export default booksReducer;

function booksReducer(state = [], action) {
    let idx;
    switch (action.type) {
        case "ADD_BOOK":
            return [...state, action.book];

        case "REMOVE_BOOK":
            return [...state.slice(0, idx), ...state.slice(idx + 1)];

        default: 
            return state;
    }
}