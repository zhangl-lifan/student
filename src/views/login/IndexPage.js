/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-09-19 14:49:19
 * @LastEditTime: 2019-09-20 14:46:41
 * @LastEditors: Please set LastEditors
 */
import React from 'react';
import {getlogin,login} from '../../services/example'
import Header from '../../components/header/header'
import style from './IndexPage.css';

class IndexPage extends React.Component {
  state = { 
    ind:1,
    useralt:'',
    pwdalt:'',
    userval:'',
    pwdval:'',
    check:true
  }
  render() {

    const {ind,useralt,pwdalt,check}=this.state;
    let userval=this.state.userval,pwdval=this.state.pwdval;
   userval=localStorage.getItem('username') || userval;
    pwdval=localStorage.getItem('pwssword') || pwdval;
    // this.setState({userval,pwdval});
    return (
      <div className={style.loginbigbox}>
       {/* <h3>重点学生日周考成绩录入管理系统</h3> */}
       <Header title={'重点学生日周考成绩录入管理系统'} background='skyblue'></Header>
       <div className={style.loginbox} style={{width:'300px',margin:'100px auto'}}>
          <h2 className={style.title}>网站工程</h2>
          <p className={style.cheackin}><span className={ind===1?style.active:''} onClick={()=>{
            this.setState({ind:1})
          }}>登入</span><span className={ind===2?style.active:''} onClick={()=>{
            this.setState({ind:2})
          }}>注册</span></p>
          <p className={style.user}><input type='text' className='username' placeholder='请输入您的用户名' value={userval} onChange={(e)=>{this.userchange(e)}} onBlur={()=>{this.checkuser()}}></input></p>
          <p className={useralt.length?style.pwdalt:''} style={{opacity:useralt.length?1:0}}>{useralt}</p>
         
          <p className={style.pwd}><input type='text' className='password' placeholder='请输入您的密码' onChange={(e)=>{this.pwdchange(e)}} value={pwdval} onBlur={()=>{this.checkpwd()}}></input></p>
          <p className={pwdalt.length?style.pwdalt:''} style={{opacity:pwdalt.length?1:0}}>{pwdalt}</p>
          <p className={style.check}><input type='checkbox' checked={check} onChange={()=>{
            this.changebox()
          }}></input>两周内免登陆</p>
           <p className={style.login} onClick={()=>{this.login()}}>{ind===1?'登陆':'注册'}</p>
       </div>
    </div>
    );
  }
  changebox(){
    this.setState({check:!this.state.check});
  }
  checkpwd(){
    
   
    let {pwdval} =this.state;
    pwdval=localStorage.getItem('pwssword') || pwdval;
    if(!/[a-zA-Z0-9_]{6,10}/.test(pwdval)){
      this.setState({pwdalt:'密码由6-10位字母或者数字组成'})
    }
    if(/[a-zA-Z0-9_]{6,10}/.test(pwdval)){
      this.setState({pwdalt:''})
    }
  }
  checkuser(){
    let {userval} =this.state;
    userval=localStorage.getItem('username') || userval;
    if(!/[a-zA-Z0-9_]{6,10}/.test(userval)){
      this.setState({useralt:'用户名由6-10位字母或者数字组成'})
    }
    if(/[a-zA-Z0-9_]{6,10}/.test(userval)){
      this.setState({useralt:''})
    }
  }
 
  
  login(){
    let {userval,pwdval,ind,check} =this.state;
    userval=localStorage.getItem('username') || userval;
    pwdval=localStorage.getItem('pwssword') || pwdval;
    this.checkuser()
    this.checkpwd()
    if(/[a-zA-Z0-9_]{6,10}/.test(userval) && /[a-zA-Z0-9_]{5,10}/.test(pwdval) && ind===1){
      
       login({'username':userval,'password':pwdval}).then(res=>{
         if(res.code===1){
           console.log('登陆成功',check,res);
          if(check){
           localStorage.setItem('username',userval);
            localStorage.setItem('pwssword',pwdval);
            this.props.history.push('/home');
          }else{
            localStorage.removeItem('username');
            localStorage.removeItem('pwssword');
          }
          
          }else{
          console.log('登录失败');
         }
       })
     }

    if(/[a-zA-Z0-9_]{5,10}/.test(userval) && /[a-zA-Z0-9_]{5,10}/.test(pwdval) && ind===2){
     
       getlogin({'username':userval,'password':pwdval}).then(res=>{
         console.log(res)
         if(res.code===1){
          console.log('添加成功');
         }else{
         console.log('添加失败');
        }
       })
    }
  }

  pwdchange(e){
    this.setState({pwdval:e.target.value})
     
  }
  userchange(e){
    this.setState({userval:e.target.value})
    
  }

}

export default IndexPage;


