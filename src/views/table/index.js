/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-09-20 17:17:35
 * @LastEditTime: 2019-09-22 20:42:16
 * @LastEditors: Please set LastEditors
 */
import React,{Component} from 'react';
import Header from '../../components/header/header'
import style from './table.css'
class Table extends Component {
    state = {
        data:[
            {
                id:1,
                date:'2019.9.20',
                theory:75,
                skill:89,
                title:'当时就开始大家都是教科书的积分活动时间发生的办法',
                flag:0,
                m:'',
                dmark:0
            }, {
                id:2,
                date:'2019.9.20',
                theory:85,
                skill:89,
                title:'当时就开始大家都是教科书的积分活动时间发生的办法',
                m:'',
                flag:1,
                dmark:0
            },{
                id:3,
                date:'2019.9.20',
                theory:95,
                skill:89,
                title:'当时就开始大家都是教科书的积分活动时间发生的办法',
                m:'',
                flag:1,
                dmark:0
            }
            
        ],
        opacity:0,
        the:'',
        ski:'',
        day:0,
        week:0,
        ind:0,
        message:''
    }
    render() {
        const {data,opacity,day,week,ind}=this.state;
        let {the,ski,message} =this.state;
       
        if(data.length>0){
            the=the?the:data[ind].theory;
            ski=ski?ski:data[ind].skill;
            message=data[ind].m?data[ind].m:data[ind].title;
        }
        
        return (
          <div className='table'>
              <Header title='xx同学日周考成绩统计表' background='pink'></Header>
              <div className={style.headmessage}>
                  <div className='left'>
                      <span>讲师:xx</span>
                      <span>学生:xx</span>
                  </div>
                  <select>
          <option value ="快捷选择其他学生">快捷选择其他学生</option>
            <option value ="saab">Saab</option>
            <option value="opel">Opel</option>
            <option value="audi">Audi</option>
                  </select>
              </div>
              
           <div className={style.tablebox}>
                 <table>
                  <tbody>
                  <div className={opacity?style.show:style.mark}>
                   <span className={style.close} onClick={()=>{
                       this.setState({opacity:0})
                   }}>x</span>
                   <p>理论:<div><input type='text' value={the} placeholder='理论' onChange={(e)=>{
                       this.setState({the:e.target.value})
                   }}/></div></p>
                   <p>技能:<div><input type='text' value={ski} placeholder='技能' onChange={(e)=>{
                       this.setState({ski:e.target.value})
                   }}/></div></p>
                   <p><span className={day?style.active:''} onClick={()=>{
                        if(day===0 && week===1){
                            data[ind].flag=data[ind].flag===0?1:0;
                            this.setState({day:this.state.day===0?1:0,data})
                        }else{
                            this.setState({day:this.state.day===0?1:0})
                        }
                      
                   }}>日考</span><span className={week?style.active:''} onClick={()=>{
                    if(day===1 && week===0){
                        data[ind].flag=data[ind].flag===0?1:0;
                        this.setState({week:this.state.week===0?1:0,data})
                    }else{
                        this.setState({week:this.state.week===0?1:0})
                    }
                }}>周考</span></p>
                   <div>
                       <span>分析解决方案</span>
                       <textarea cols="40" rows="3" value={message} onChange={(e)=>{
                           data[ind].m=e.target.value;
                           this.setState({data});
                       }}></textarea>
                   </div>
                   <p><strong onClick={()=>{
                       this.setState({opacity:0})
                   }}>取消</strong><strong onClick={
                       
                       ()=>{
                        const time=new Date().getDate()+'号'+new Date().getHours()+'点'+new Date().getMinutes();
                        console.log(time);
                           data[ind]={
                            id:ind*1+1,
                           
                            date:time,
                            theory:the,
                            skill:ski,
                            title:message,
                            flag:day && week ? 1 : 0,
                            dmark:0
                           }
                          
                          this.setState({data:data,opacity:0});
                       }
                   }>确定</strong></p>
                 </div>
             
                
                  <tr>
                      <th>序号</th>
                      <th>日期</th>
                      <th>理论</th>
                      <th>技能</th>
                      <th>分析与解决</th>
                      <th>是否周考</th>
                      <th>操作</th>
                  </tr>
                  {
                   data.map((item,index)=>(
                    <tr key={item.id}>
                    <td>{item.id}</td>
                    <td>{item.date}</td>
                    <td>{item.theory}</td>
                    <td>{item.skill}</td>
                    <td>{item.title}</td>
                    <td>{item.flag?'是':'否'}</td>
                    <td className={style.delmark}><span onClick={()=>{
                       this.setState({opacity:1,ind:index})
                   }}>编辑</span><span onClick={()=>{
                         data[index].dmark=data[index].dmark===0?1:0;
                         this.setState({ind:index,data})
                   }}>删除</span><div className={item.dmark===0?style.none:style.dmark}><span onClick={()=>{
                    
                    data[index].dmark=data[index].dmark===0?1:0;
                    this.setState({data})
              }} >取消</span><span onClick={()=>{
                  data.splice(index,1);
                  data.map((item,index)=>{
                      item.id=index*1+1;
                  })
                 this.setState({data,ind:0})
            }}>确认</span></div></td>
                </tr>
                   ))
                  }
                
                  
                  </tbody>
                  </table>
            </div>      
                  
              
          </div>   
        );
    }
}

export default Table;