/*
 * @Author: zengjian 
 * @Date: 2018-12-04 20:24:36 
 * @Last Modified by:   zengjian 
 * @Last Modified time: 2018-12-04 20:24:36 
 */
const logger = store => next => action => {
    console.log('dispatching',action)
    let result = next(action)
    console.log('next state',store.getState())
    return result
}

export default logger