/*
 * @Author: zengjian 
 * @Date: 2018-12-10 19:22:03 
 * @Last Modified by: yuanxy
 * @Last Modified time: 2018-12-16 20:28:02
 */
let initialState = {
    comps: [{
        x: 0,
        y: 0,
        width: 100,
        height: 100,
        id: 1,
        background:'red'
    }, {
        x: 0,
        y: 0,
        width: 100,
        height: 100,
        id: 2,
        background:'green'
    }],

}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'move':
            const newComps = state.comps.map(c => {
                if (c.id === action.payload.id) {
                    return {
                        ...c,
                        ...action.payload
                    }
                }
                return c
            })
            return { ...state, comps: newComps }
        default:
            return state
    }
}

export default reducer