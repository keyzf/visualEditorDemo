import ReactEcharts from 'echarts-for-react';
import React from 'react'

const option={
    xAxis: {
        type: 'category',
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    },
    yAxis: {
        type: 'value'
    },
    series: [{
        data: [120, 200, 150, 80, 70, 110, 130],
        type: 'bar'
    }]
};



 const Bar=(props)=>{
        return <div style={{width:'100%',height:'100%'}}><ReactEcharts style={{height: '100%', width: '100%'}} option={option} /></div>
}
export default Bar