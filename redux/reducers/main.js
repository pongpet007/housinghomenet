import * as t from "../types"
const userinfo = {
    name: "guest",
    loading: false,
    error: null,
    todos: []
}

const main = (state = userinfo, action) => {
    switch (action.type) {
        case t.SET_NAME:
            return {
                ...state,
                name: action.payload
            };
        default:
            return { ...state };
    }
}

export default main