/*
 * @Author: zengjian 
 * @Date: 2018-12-10 19:22:03 
 * @Last Modified by: zengjian
 * @Last Modified time: 2018-12-10 19:24:52
 */
let initialState = {
    zoom:70
}

const reducer = (state = initialState,action)=>{
    switch (action.type) {
        case 'updateZoom':
            return {...state,zoom:action.payload}
        default:
            return state
    }
}

export default reducer