/*
 * @Author: yuanxy 
 * @Date: 2018-12-16 20:38:52 
 * @Last Modified by: yuanxy
 * @Last Modified time: 2018-12-16 21:54:58
 */
import React from 'react'
import {
    DragSource,

} from 'react-dnd'
import './itemBox.scss'

const source = {
    beginDrag(props) {
        return props
    },
    canDrag(props){
        if(props.id!==props.current){
            return false
        }
        return true
    }
}

class BoxCmp extends React.Component {

    onClickHandler=(e,id)=>{
        e.stopPropagation()
        this.props.selectItem(id)
    }

    render() {
        const { connectDragSource, x, y, background,id,current } = this.props;
        return connectDragSource(
            <div onClick={(e)=>this.onClickHandler(e,id)} className={`box-feature ${id===current?'z-cur':''}`} style={{ left: x, top: y, background }} ></div>
        )
    }
}
export default DragSource('ITEM', source, (connect, monitor) => ({
    connectDragSource: connect.dragSource(),
    isDragging: monitor.isDragging()
}))(BoxCmp)