import React, { Component } from 'react';
import Header from '../../components/header';
import { classList } from '../../services/list';
import 'echarts/lib/chart/line';
import ReactEcharts from 'echarts-for-react';
import Delog from '../../components/delog';
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
      },
      {
        cid: 'b7e9e67a-8e51-4059-a3f8-5795e5f304b4',
        class_name: '1704A',
        class_info: '34301,张三',
        create_time: '2019-08-23T08:11:50.000Z',
        tid: '9b1e295c-6ad1-4611-a546-47b14a6b4f69'
      },
      {
        cid: 'bea1d3ce-acc1-4dd2-baec-3c8388e3029f',
        class_name: '1703D',
        class_info: '34302,张三',
        create_time: '2019-08-23T07:12:12.000Z',
        tid: '9b1e295c-6ad1-4611-a546-47b14a6b4f69'
      }
    ],
    vility: false,
    analysis: false
  };

  addClass() {
    console.log(123);
  }

  classList = async () => {
    let result = await classList();
    console.log(result);
  };

  // 添加成绩
  addAchieve() {
    this.setState({
      vility: true
    });
  }

  // 添加分析
  addAnalys() {
    this.setState({
      analysis: true
    });
  }

  getOption = () => {
    let option = {
      title: {
        text: 'xx学生的日周考成绩统计图',
        subtext: '仅供参考',
        x: '70px',
        // y: '10px',
        textStyle: {
          color: 'darkcyan', //标题颜色
          marginBottom: 20,
          fontSize: '20'
        }
      },
      tooltip: {
        trigger: 'axis',
        position: 'top',
        axisPointer: {
          type: 'cross',
          label: {
            background: '#6a7985'
          }
        }
      },
      toolbox: {
        show: true,
        x: '1270px',
        itemSize: 15,
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
          color: '#000' //legend颜色
        }
      },
      grid: {
        left: '5%',
        right: '5%',
        bottom: '3%',
        containLabel: true,
        top: 80
      },
      xAxis: {
        type: 'category',
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
        type: 'value',
        axisLabel: {
          formatter: '{value}'
        }
      },
      series: [
        {
          name: '技能',
          type: 'line',
          color: '#AAB45F',
          symbol: 'circle',
          data: [0, 25, 17, 58, 75, 69, 96, 30, 45, 80, 85, 63, 90],
          markPoine: {
            data: [
              { type: 'max', name: '最高分' },
              { type: 'min', name: '最低分' }
            ]
          },
          markLine: {
            data: [{ type: 'average', name: '平均值' }]
          }
        },
        {
          name: '理论',
          type: 'line',
          color: '#AAB45F',
          symbol: 'circle',
          data: [70, 82, 91, 100, 90, 83, 27, 45, 88, 79, 63, 96, 47],
          markPoint: {
            data: [
              { type: 'max', name: '最高分' },
              { type: 'min', name: '最低分' }
            ]
          },
          markLine: {
            data: [
              { type: 'average', name: '平均值' },
              [
                {
                  symbol: 'none',
                  x: '90%',
                  yAxis: 'max'
                },
                {
                  symbol: 'circle',
                  label: {
                    normal: {
                      position: 'start'
                    }
                  }
                }
              ]
            ]
          },
          itemStyle: {
            normal: {
              color: 'red', //  给折线添加颜色
              fontWeight: 'bolder'
            }
          }
        }
      ]
    };
    return option;
  };

  render() {
    let { lists, vility, analysis } = this.state;

    return (
      <div className={styles.homePage}>
        <Header text="重点关注学生考试成绩统计图" />
        <div className={styles.navbox}>
          <div className={styles.listClass}>
            <div className={styles.classLeft}>
              <div className={styles.leftText}>
                <span>选择班级:</span>
              </div>
              <div className={styles.leftList}>
                {lists &&
                  lists.map(item => {
                    return <span key={item.cid}>{item.class_name}</span>;
                  })}
              </div>
            </div>
            <div className={styles.classRight}>
              <div className={styles.rightOrder}>
                <p>名单:</p>
                <p>
                  <span>张三，张立，王强</span>
                  <span>3 / 人</span>
                </p>
              </div>
              <div className={styles.rightXing}>
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
        </div>
        <div className={styles.echartsBox}>
          <ReactEcharts
            option={this.getOption()}
            style={{ height: '300px', marginTop: '22px' }}
          />
        </div>
        <div className={styles.jurpBox}>
          <div className={styles.contentText}>
            <div className={styles.contentLeft}>
              <span>2019-08-30</span>
              <span>今日分析及解决方案:</span>
              <span>点击查看历史记录</span>
            </div>
            <div className={styles.contentRight}>
              <span>
                撒旦风格和上课睡觉觉空军开始撒旦风格和上课睡觉是申
                觉空军开始撒旦风格和上课睡觉觉空军开始撒旦风格和上
                课睡觉觉空军开始撒旦风格和上课睡觉觉空军开始撒旦风
                格和上课睡觉觉空军开始撒旦风格和上课睡觉觉空军开始
                课睡觉觉空军开始撒旦风格和上课睡觉觉空军开始撒旦风
                格和上课睡觉觉空军开始撒旦风格和上课睡觉觉空军开始
                课睡觉觉空军开始撒旦风格和上课睡觉觉空军开始撒旦风
              </span>
            </div>
          </div>
        </div>
        {vility && <Delog vilityFn={this.vilityFn.bind(this)} isVility="1" />}
        {analysis && <Delog vilityFn={this.vilityFn.bind(this)} isVility="2" />}
      </div>
    );
  }

  vilityFn(staus) {
    this.setState({
      vility: staus,
      analysis: staus
    });
  }

  componentDidMount() {
    this.classList();
  }
}

export default Home;
