export const initialState = [
    {
        item: 'Learn about reducers',
        completed: false,
        id: Date.now(),
        itemArray: []
    }
];

export const listReducer = (state, action) => {
    switch (action.type) {
        case "ADD-TODO":
            const newTodo = {
                item: action.payload,
                completed: false,
                id: Date.now()
            }
            return [...state, newTodo]
        case "COMPLETED":
            return state.map(event => event.id === action.id ? 
                { ...event, completed: !event.completed } : event);
        case "REMOVE":
            return state.filter(event => !event.completed);



        default:
            throw state;
    }
};