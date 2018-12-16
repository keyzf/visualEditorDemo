/*
 * @Author: zengjian 
 * @Date: 2018-12-10 19:52:57 
 * @Last Modified by:   zengjian 
 * @Last Modified time: 2018-12-10 19:52:57 
 */
import React from 'react'
import {Layout,Menu} from 'antd'

import CanvasCmp from '../components/canvas/index'
import SliderCmp from '../components/slider/index'
import './index.scss'

const { Header, Footer, Sider, Content}=Layout

export default class Index extends React.Component{
    render(){
        return <div className='editor-warpper'>
                <Header>
                    <Menu
                        theme="dark"
                        mode="horizontal"
                        defaultSelectedKeys={['2']}
                    >
                        <Menu.Item key="1">饼图</Menu.Item>
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