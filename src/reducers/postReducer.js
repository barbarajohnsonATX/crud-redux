//reducer is a function that takes the current state and an action
//that was dispatched as its parameters and returns a new state
const postReducer = (state = [], action) => {

    //check type of action that was dispatched then return new state
    switch(action.type) {
        case 'ADD_POST':
            return state.concat([action.data]);
        case 'DELETE_POST':
            return state.filter((post) => post.id !== action.id)
        case 'EDIT_POST':
            return state.map((post) => post.id === action.id ? { ...post, editing: ! post.editing} : post)
        case 'UPDATE':
            return state.map((post)=>{
                if(post.id === action.id) {
                    return {
                           ...post,
                           title:action.data.newTitle,
                           message:action.data.newMessage,
                           editing: !post.editing
                    }
                } else return post;
            })

        //always have a default clause in case none of the action type matches a case
        default:
            return state;
    }
}

export default postReducer;