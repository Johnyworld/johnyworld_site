import React, { Component } from 'react';
import './form.css';

class Form extends Component {
    componentDidMount() {
        const jsTypeId = document.getElementById('jsTypeId');
        const jsUserForm = document.getElementById('jsUserForm');
    
        jsTypeId.addEventListener('focus', function(){
            jsUserForm.classList.add('has-focus');
        });
    
        jsTypeId.addEventListener('blur', function(){
            if ( !this.value ) {
                jsUserForm.classList.remove('has-focus');
            } 
        });
    }
    render() {
        return(
            <div className="user-form" id="jsUserForm">
                <form>
                    <p className="focused-text">이메일주소로 로그인</p>
                    <input name="typeId" id="jsTypeId" type="text" autoComplete='off'></input>
                    <a href="http://naver.com" className="register">가입하기</a>
                    <p className="f-normal c-wine-dark">홈페이지에 가입하면<br />코멘트를 남길 수 있어요.</p>
                </form>
            </div>
        )
    }
}

export default Form;