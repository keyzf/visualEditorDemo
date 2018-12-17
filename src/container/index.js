/*
 * @Author: zengjian 
 * @Date: 2018-12-10 19:52:57 
 * @Last Modified by: yuanxy
 * @Last Modified time: 2018-12-17 23:57:49
 */
import React from 'react'
import {Layout,Menu} from 'antd'

import CanvasCmp from '../components/canvas/index'
import SliderCmp from '../components/slider/index'
import connect from '../redux/connect'
import './index.scss'

const { Header, Footer, Content}=Layout


class Index extends React.Component{


    addComponent=(type)=>{
        this.props.dispatch({
            type:'comp-add',
            payload:{
                type:'pie'
            }
        })
    }
    componentDidMount(){
        /***
         * 返回store内容 这里考虑第一次加载异步得到数据 如果有则替换store集合，如果为空则返回initialState
         *  */
        this.props.dispatch({type:null})
    }

    render(){
        return <div className='editor-warpper'>
                <Header>
                    <Menu
                        style={{ lineHeight: '64px' }}
                        theme="dark"
                        mode="horizontal"
                        defaultSelectedKeys={['2']}
                    >
                        <Menu.Item key="1" onClick={()=>this.addComponent('pie')}>饼图</Menu.Item>
                        <Menu.Item key="2">柱状图</Menu.Item>
                        <Menu.Item key="3">折线图</Menu.Item>
                    </Menu>
                </Header>
                <div className='editor-content'>
                    <div className='editor-left-side'></div>
                    <div className='editor-center'>
                        <Content className='editor-canvas'>
                            <CanvasCmp />
                        </Content>
                    </div>
                    <div className='editor-right-side'></div>
                </div>
                <Footer>
                    <SliderCmp/>
                </Footer>
            </div>
    }
}

export default connect()(Index)