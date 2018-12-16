import React from 'react'
import {
    DragSource,
   
} from 'react-dnd'
import './itemBox.scss'

const source = {
    beginDrag(props) {
       return props
    },
    // isDragging(props, monitor) {
    //     return props.id === monitor.getItem().id
    // }
}

class BoxCmp extends React.Component{
    render() {
        const {  connectDragSource,x,y,background } = this.props;
        return connectDragSource(
                    <div className='box-feature' style={{left:x,top:y,background}} ></div>
                )
            
    }
}
export default DragSource('ITEM', source, (connect, monitor) => ({
    connectDragSource: connect.dragSource(),
    isDragging: monitor.isDragging()
}))(BoxCmp)