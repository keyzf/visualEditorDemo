/*
 * @Author: zengjian 
 * @Date: 2018-12-10 19:22:03 
 * @Last Modified by: yuanxy
 * @Last Modified time: 2018-12-17 23:46:39
 */
import update from 'immutability-helper';


let initialState = {
    comps: [{
        x: 0,
        y: 0,
        width: 100,
        height: 100,
        id: 1,
        background:'red',
        type:'bar'
    }, {
        x: 0,
        y: 0,
        width: 50,
        height: 100,
        id: 2,
        background:'green'
    },{
        x: 200,
        y: 200,
        width: 110,
        height: 100,
        id: 3,
        background:'yellow'
    }],

}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'comp-add':
            const id= state.comps.reduce((a,b)=>a.id>b.id?a.id:b.id)+1
            const comp={
                x:0,
                y:0,
                width:80,
                height:80,
                background:'#ff6600',
                id:id
            }
            return update(state,{
                comps:{
                    $push:[comp]
                }
            }) 
           
        case 'comp-move':
            return update(state,{
                comps:{
                    $set:state.comps.map(child => {
                        if (child.id === action.payload.id) {
                            return {
                                ...child,
                                ...action.payload
                            }
                        }
                        return child
                    })
                }
            })
        default:
            return state
    }
}

export default reducer