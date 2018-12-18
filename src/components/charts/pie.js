import ReactEcharts from 'echarts-for-react';
import React from 'react'

const option={
    series : [
        {
            name: '访问来源',
            type: 'pie',
            radius : '55%',
            center: ['50%', '60%'],
            data:[
                {value:335, name:'直接访问'},
                {value:310, name:'邮件营销'},
                {value:234, name:'联盟广告'},
                {value:135, name:'视频广告'},
                {value:1548, name:'搜索引擎'}
            ],
            itemStyle: {
                emphasis: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
            }
        }
    ]
}


 const Pie=(props)=>{
        return <div style={{width:'100%',height:'100%'}}><ReactEcharts style={{height: '100%', width: '100%'}} option={option} /></div>
}
export default Pie