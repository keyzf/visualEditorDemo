/*
 * @Author: zengjian 
 * @Date: 2018-12-03 18:53:21 
 * @Last Modified by: zengjian
 * @Last Modified time: 2018-12-03 19:27:52
 */
export const combinReducer=(reducers)=>{
    const finalState = {}
    return (state,action)=>{
        for(const k of Object.keys(reducers)){
            finalState[k]=reducers[k](state[k],action)
        }
        return finalState
    }
}