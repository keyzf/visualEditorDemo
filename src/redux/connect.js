/*
 * @Author: zengjian 
 * @Date: 2018-12-03 19:29:13 
 * @Last Modified by: zengjian
 * @Last Modified time: 2018-12-10 19:19:32
 */
import React from 'react'
import Customer from './context'

const connect =(fn) => (Wrapper) => {
    return class HOC extends React.Component {
        render() {
            return <Customer.Consumer>
                {(props)=>{
                    let newProps={}
                    //为什么这里会有不是一个function的情况？
					if(typeof fn === 'function'){
						newProps={...fn(props),dispatch:props.dispatch}
					}else{
                        
						newProps={dispatch:props.dispatch}
					}
                   
                    return <Wrapper   {...this.props} {...newProps}/>
                }}
            </Customer.Consumer>
        }
    }
}

export default connect