

function authReducer(state ={},action) {
    switch(action.type){
        case 'AUTH_SUCCESS':{
            const {id} =action.payload
            const authDetails = {
                tokenID:id,
                expirationDate:new Date(new Date().getTime()*(3000*1000))
            }
            return authDetails
        }
        default:
            return state
    }
}

export default authReducer
