/*
 * @Author: zengjian 
 * @Date: 2018-12-03 18:53:19 
 * @Last Modified by: yuanxy
 * @Last Modified time: 2018-12-16 19:25:06
 */
import {combinReducer} from './combinReducer'
import canvasReducer from './canvasReducer'
import componentReducer from './componentReducer'

export default combinReducer({
    canvas:canvasReducer,
    compts:componentReducer
})