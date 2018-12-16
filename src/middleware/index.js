/*
 * @Author: zengjian 
 * @Date: 2018-12-04 20:18:59 
 * @Last Modified by: zengjian
 * @Last Modified time: 2018-12-04 20:21:54
 */
export default function applyMiddleware(store,middlewares){
    middlewares = middlewares.slice()
    middlewares.reverse()

    let dispatch = store.dispatch
    middlewares.forEach(middleware =>
        dispatch = middleware(store)(dispatch)
    )

    return Object.assign({},store,{dispatch})
}