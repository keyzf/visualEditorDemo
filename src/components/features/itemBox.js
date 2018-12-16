/*
 * @Author: yuanxy 
 * @Date: 2018-12-16 20:38:52 
 * @Last Modified by:   yuanxy 
 * @Last Modified time: 2018-12-16 20:38:52 
 */
import React from 'react'
import {
    DragSource,
   
} from 'react-dnd'
import './itemBox.scss'

const source = {
    beginDrag(props) {
       return props
    }
  
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