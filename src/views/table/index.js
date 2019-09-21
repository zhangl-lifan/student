/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-09-20 17:17:35
 * @LastEditTime: 2019-09-20 20:39:48
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
                flag:0
            }, {
                id:2,
                date:'2019.9.20',
                theory:85,
                skill:89,
                title:'当时就开始大家都是教科书的积分活动时间发生的办法',
                flag:1
            },{
                id:3,
                date:'2019.9.20',
                theory:95,
                skill:89,
                title:'当时就开始大家都是教科书的积分活动时间发生的办法',
                flag:1
            }
            
        ],
        opcity:1
    }
    render() {
        const {data,opcity}=this.state;
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
                 <div className={opcity?style.show:style.mark}>
                    <p></p>
                 </div>
                  <table>
                  <tbody>
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
                   data.map(item=>(
                    <tr key={item.id}>
                    <td>{item.id}</td>
                    <td>{item.date}</td>
                    <td>{item.theory}</td>
                    <td>{item.skill}</td>
                    <td>{item.title}</td>
                    <td>{item.title}</td>
                    <td><span>编辑</span><span>删除</span></td>
                </tr>
                   ))
                  }
                  {/* <tr>
                      <td>1</td>
                      <td>2019.9.20</td>
                      <td>90</td>
                      <td>85</td>
                      <td>大煞风景上岛咖啡就开始打飞机i 阿萨德空间</td>
                      <td>否</td>
                      <td><span>编辑</span><span>删除</span></td>
                  </tr> */}
                  
                  </tbody>
                  </table>
            </div>      
                  
              
          </div>   
        );
    }
}

export default Table;