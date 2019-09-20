/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-09-19 14:49:19
 * @LastEditTime: 2019-09-19 15:38:43
 * @LastEditors: Please set LastEditors
 */
import React from 'react';
import { connect } from 'dva';


function Header(props){
  
  const {title,background}=props;
  return (
    <div style={{'background':background,width:'100%',height:'50px',textAlign:'center',lineHeight:'50px'}}>
       {title}
    </div>
  );
}

Header.propTypes = {
   
};

export default connect()(Header);
