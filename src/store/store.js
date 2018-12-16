/*
 * @Author: zengjian 
 * @Date: 2018-12-03 18:34:22 
 * @Last Modified by: zengjian
 * @Last Modified time: 2018-12-03 20:06:55
 */
export default class createStore{
    constructor(reducer,initiaState){
        this.reducer=reducer
        this.initiaState=initiaState
        this.linstener()
    }

    getState=()=>{
        return this.initiaState
    }

    dispatch=(action)=>{
        this.initiaState=this.reducer(this.initiaState,action)
        this.linstener()
        return action
    }

    subscribe=(linstener)=>{
        this.linstener=linstener
    }

    linstener=()=>{
        
    }
}