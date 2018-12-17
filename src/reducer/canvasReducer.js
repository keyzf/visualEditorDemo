/*
 * @Author: zengjian 
 * @Date: 2018-12-10 19:22:03 
 * @Last Modified by: yuanxy
 * @Last Modified time: 2018-12-17 23:53:01
 */
let initialState = {
    zoom:50
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