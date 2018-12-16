/*
 * @Author: yuanxy 
 * @Date: 2018-12-16 20:38:52 
 * @Last Modified by: yuanxy
 * @Last Modified time: 2018-12-17 01:04:12
 */
import React from 'react'
import { findDOMNode } from 'react-dom'
import {
    DragSource,

} from 'react-dnd'
import './itemBox.scss'

const source = {
    beginDrag(props) {
        return props
    },
    canDrag(props) {
        if (props.id !== props.current) {
            return false
        }
        return true
    }
}

class BoxCmp extends React.Component {
    constructor(props) {
        super(props)

    }
    state = {
        type: ''
    }
    componentDidMount() {
        this.mouseUp()
    }
    /***
     * 鼠标抬起注销move
     */
    mouseUp = () => {
        document.addEventListener('mouseup', () => {
            document.removeEventListener('mousemove', this.computeSize);
        });
    };
    /***
     * 选择当前组件
     */
    onClickHandler = (e, id) => {
        e.stopPropagation()
        this.props.selectItem(id)
    }
    /***
     * 添加move事件及存储方位type
     */
    updateSize = (e, type) => {
        e.preventDefault();
        e.stopPropagation();
        this.setState({
            type: type
        })
        document.addEventListener('mousemove', this.computeSize);
    }
    /***
     * 计算方位坐标
     */
    computeSize = (e) => {
        const { type } = this.state
        const { updateSize, id, width, height, x, y } = this.props
        const { clientX, clientY, offsetY } = e
        const { x: xx, y: yy } = findDOMNode(this.ref).getBoundingClientRect()
        switch (type) {
            case 'RT':
                updateSize(id, clientX - xx, height, x, y)
                break;
            case 'D':
                updateSize(id, width, clientY - yy, x, y)
                break;
            case 'U':
                updateSize(id, width, height + (yy - clientY), x, clientY - (yy - y))
                break;
            case 'L':
                updateSize(id, width + (xx - clientX), height, clientX - (xx - x), y)
                break;
            default:
                return
        }
    }
    render() {
        const { connectDragSource, x, y, background, id, current, width, height } = this.props;
        return connectDragSource(
            <div ref={e => this.ref = e} onClick={(e) => this.onClickHandler(e, id)}
                className={`box-feature ${id === current ? 'z-cur' : ''}`}
                style={{ left: x, top: y, background, width, height }}
            >
                <div className='u-leftTop'></div>
                <div className='u-top' onMouseDown={(e) => this.updateSize(e, 'U')}></div>
                <div className='u-rightTop'></div>
                <div className='u-right' onMouseDown={(e) => this.updateSize(e, 'RT')}></div>
                <div className='u-rightBottom'></div>
                <div className='u-bottom' onMouseDown={(e) => this.updateSize(e, 'D')}></div>
                <div className='u-leftBottom'></div>
                <div className='u-left' onMouseDown={(e) => this.updateSize(e, 'L')}></div>
            </div>
        )
    }
}
export default DragSource('ITEM', source, (connect, monitor) => ({
    connectDragSource: connect.dragSource(),
    isDragging: monitor.isDragging()
}))(BoxCmp)