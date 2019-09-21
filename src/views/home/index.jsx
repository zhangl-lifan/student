import React, { Component } from 'react';
import Header from '../../components/header';
import { classList } from '../../services/list';
import echarts from 'echarts';
import 'echarts/lib/chart/line';
import ReactEcharts from 'echarts-for-react';
import styles from './index.scss';

class Home extends Component {
  state = {
    lists: [
      {
        cid: 'b7e9e67a-8e51-4059-a3f8-5795e5f304b4',
        class_name: '1703A',
        class_info: '34301,张三',
        create_time: '2019-08-23T08:11:50.000Z',
        tid: '9b1e295c-6ad1-4611-a546-47b14a6b4f69'
      },
      {
        cid: 'bea1d3ce-acc1-4dd2-baec-3c8388e3029f',
        class_name: '1703C',
        class_info: '34302,张三',
        create_time: '2019-08-23T07:12:12.000Z',
        tid: '9b1e295c-6ad1-4611-a546-47b14a6b4f69'
      }
    ],
    vility:false
  };

  addClass() {
    console.log(123);
  }

  classList = async () => {
    let result = await classList();
    console.log(result);
  };

  // 添加成绩
  addAchieve(){
     console.log(12345)
     console.log(this.state.vility)
     this.setState({
        vility:true
     })
  }

  getOption = () => {
    let option = {
      title: {
        text: 'xx学生的日周考成绩统计图',
        subtext: '仅供参考',
        x: '70px',
        y: '10px',
        textStyle: {
          color: 'darkcyan', //标题颜色
          marginBottom:20,
          fontSize:'20',
        }
      },

      tooltip: {
        trigger: 'axis'
      },
      toolbox: {
        show: true,
        x: '1270px',
        feature: {
          dataZoom: {
            yAxisIndex: 'none'
          },
          dataView: { readOnly: false },
          magicType: { type: ['line', 'bar'] },
          restore: {},
          saveAsImage: {}
        }
      },
      legend: {
        data: ['技能', '理论'],
        top: '9%',
        textStyle: {
          fontWeight: 'normal',
          color: '#62B4BB' //legend颜色
        }
      },
      grid: {
        left: '5%',
        right: '5%',
        bottom: '3%',
        containLabel: true,
        top:80,
      },
      xAxis: {
        data: [
          '08-01',
          '08-02',
          '08-03',
          '08-04',
          '08-05',
          '08-06',
          '08-07',
          '08-08',
          '08-09',
          '08-10',
          '08-11',
          '08-12',
          '08-13'
        ]
      },
      yAxis: {
        type: 'value'
      },
      series: [
        {
          name: '技能',
          type: 'line',
          data: [0, 25, 17, 58, 75, 69, 96, 30, 45, 80, 85, 63, 90],
          itemStyle: {
            normal: {
              color:'red',   //  给折线添加颜色
              type:'dash'
            }
          }
        },
        {
          name: '理论',
          type: 'line',
          data: [70, 82, 91, 100, 90, 83, 27,45,88,79,63,96,47],
          itemStyle: {
            normal: {
              color: '#4e76b5' //  给折线添加颜色
            }
          }
        }
      ]
    };
    return option;
  };

  render() {
    let { lists,vility } = this.state;

    return (
      <div className={styles.homePage}>
        <Header text="重点关注学生考试成绩统计图" />
        <div className={styles.navbox}>
          <div className={styles.listClass}>
            <div className={styles.classLeft}>
              <div className={styles.leftText}>
                <span className={styles.spa}>切换班级:</span>
              </div>
              <div className={styles.leftList}>
                <div className={styles.leftContent}>
                  {lists &&
                    lists.map(item => {
                      return <span key={item.cid}>{item.class_name}</span>;
                    })}
                  <span onClick={this.addClass}>创建班级+</span>
                </div>
              </div>
            </div>
            <div className={styles.classRight}>
              <div className={styles.grops}>
                <div className={styles.gropLength}>
                  <label className={styles.AndroidSwitch}>
                    <input type="checkbox" />
                    <span className={styles.CheckState}></span>
                  </label>
                </div>
                <div className={styles.zhuxing}>
                  <span className={styles.rechText}>柱形图/线图</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.listNav}>
          <div className={styles.listText}>
            <p>
              <span>添加学生+:</span>
            </p>
            <p>
              <input type="text" placeholder="请输入姓名" />
              <input type="text" placeholder="末位次数" />
              <input type="text" placeholder="结对子，帮扶对象" />
            </p>
            <p>
              <button>添加</button>
            </p>
          </div>
        </div>
        <div className={styles.echartsBox}>
          <ReactEcharts option={this.getOption()} style={{ height: '400px',marginTop:"22px" }} />
        </div>
        <div className={styles.jurpBox}>
          <div className={styles.contentText}>
              <div className={styles.contentLeft}>
                  <span onClick={this.addAchieve.bind(this)}>添加成绩+</span>
                  <span>添加分析和解决方案+</span>
              </div>
              <div className={styles.contentRight}>
                  <span>查看和编辑该生所有的成绩</span>
              </div>
          </div>
        </div>
        {
           vility && <div className={styles.delog}>
               <div className={styles.delogContent}>
                 
               </div>
           </div>
        }
      </div>
    );
  }

  componentDidMount() {
    // let data = {
    //     classname:"1701E",
    //     classroom:4305,
    //     assistant:"袁"
    // }

    // classAdd('/emstu/class/create',data).then(res=>{
    //     console.log(res)
    // })
    echarts.registerTheme('Imooc', '学生');
    this.classList();
  }
}

export default Home;
