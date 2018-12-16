/*
 * @Author: yuanxy 
 * @Date: 2018-12-16 20:38:48 
 * @Last Modified by: yuanxy
 * @Last Modified time: 2018-12-16 21:55:35
 */
import React from 'react'
import {
    DropTarget,

} from 'react-dnd'
import { DragDropContext } from 'react-dnd'
import HTML5Backend from 'react-dnd-html5-backend'
import ItemBox from './itemBox'
import connect from '../../redux/connect'

const boxTarget = {
    drop(
        props,
        monitor,
        component
    ) {
        if (!component) {
            return
        }
        const delta = monitor.getDifferenceFromInitialOffset();
        const item = monitor.getItem()
        let left = Math.round(item.x + delta.x)
        let top = Math.round(item.y + delta.y)
        item.move(item.id, left, top)
    },
}

class Container extends React.Component {
   
    static defaultProps = {
        comps: []
    }
    state={
        current:-1
    }
    componentDidMount(){
        window.addEventListener('click',()=>{
            this.setState({
                current:-1
            })
        })
    }
    selectItem=(id)=>{
        this.setState({
            current:id
        })
    }
    move = (id, x, y) => {
        this.props.dispatch({
            type: 'move', payload: {
                x: x,
                y: y,
                id: id
            }
        })
    }
    renderBox = () => {
        return this.props.comps.map((child, index) => {
            return <ItemBox key={index} {...child} move={this.move} selectItem={this.selectItem} {...this.state} />
        })
    }
    render() {
        const { connectDropTarget } = this.props
        return connectDropTarget(<div style={{ width: '100%', height: '100%' }}>
            {
                this.renderBox()
            }
        </div>)
    }
}

const item = DropTarget('ITEM', boxTarget, connect => ({
    connectDropTarget: connect.dropTarget()
}))(Container)

const feature = DragDropContext(HTML5Backend)(item)
export default connect(state => state.compts)(feature)