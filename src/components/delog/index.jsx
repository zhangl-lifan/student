import React, { Component } from 'react';
import styles from './index.scss';

class Delog extends Component {
  render() {
    return (
      <div className={styles.delog}>
        <div className={styles.delogContent}>
          <div className={styles.delogTitle}>
            <p>
              <span>新添成绩----XX同学</span>
            </p>
            <p>
              <span onClick={this.cancelHandle.bind(this)}>X</span>
            </p>
          </div>
          <div className={styles.delogMain}>
            {this.props.isVility === '1' && (
              <div className={styles.mainContent}>
                <p>
                  <input type="date" placeholder="默认当前日期" />
                  <button>昨天</button>
                </p>
                <p>
                  <span>技能</span> <input type="text" placeholder="数字" />
                </p>
                <p>
                  <span>理论</span>
                  <input type="text" placeholder="0-100之间的数字" />
                </p>
              </div>
            )}
            {this.props.isVility === '2' && (
              <div className={styles.mainText}>
                <p>
                  <input type="date" placeholder="默认当前日期" />
                  <button>昨天</button>
                </p>
                <p>
                  <span>分析</span> <input type="text"/>
                </p>
                <p>
                  <span>解决方案</span>
                  <input type="text"/>
                </p>
              </div>
            )}
            <div className={styles.delogFoot}>
              <button onClick={this.cancelHandle.bind(this)}>取消</button>
              <button>确认</button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  cancelHandle() {
    this.props.vilityFn(false);
  }
}

export default Delog;
