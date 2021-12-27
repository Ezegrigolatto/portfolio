const initialState = {
    color:"black",
    backgroundColor:"white",
    backgroundImage: "url(https://freevector-images.s3.amazonaws.com/uploads/vector/preview/40529/White_Background_generated.jpg)",
    }


export default function rootReducer(state = initialState, action) {
    switch (action.type) {
        case 'CHANGE_THEME':
            return {
                ...state,
                color:action.payload.color, 
                backgroundColor:action.payload.backgroundColor,
                backgroundImage:action.payload.backgroundImage,
            }
        default:
            return state
    }
}