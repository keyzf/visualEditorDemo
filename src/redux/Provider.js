/*
 * @Author: zengjian 
 * @Date: 2018-12-04 09:43:18 
 * @Last Modified by:   zengjian 
 * @Last Modified time: 2018-12-04 09:43:18 
 */
import React from 'react'
import Customer from './context'

export default class Provider extends React.Component{
    constructor(props){
        super(props)

        this.state={
            ...props.store.getState(),
            dispatch:props.store.dispatch
        }
    }
    
    componentDidMount(){
        this.props.store.subscribe(()=>{
            this.setState({
                ...this.props.store.getState(),
                dispatch:this.props.store.dispatch
            })
        })
    }

    render(){
        return <Customer.Provider value ={{
            ...this.state
        }}>
            {
                this.props.children
            }
        </Customer.Provider>
    }
}