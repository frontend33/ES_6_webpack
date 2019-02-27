/* global localStorage */
import * as ArticlesModel from './articles';
import * as AuthModel from './users';
import 'babel-polyfill';

window.addEventListener('load', function(){

    let authForm = this.document.querySelector('.authForm');
    let authFormBtn = this.document.querySelector('.authForm__btn');
    let authFormErrors = this.document.querySelector('.authForm__errors');
    let authInpLogin = authForm.querySelector('[name=login]');
    let authInpPassword = authForm.querySelector('[name=password]');

    authFormBtn.addEventListener('click', async function(){
        let login = authInpLogin.value;
        let password = authInpPassword.value;
        
        let response = await AuthModel.login(login, password);
        
        if(response.res === true){
            localStorage.setItem('token', response.token);
            localStorage.setItem('name', response.name);
            showHello();
        }
        else{
            authFormErrors.innerHTML = '<p>' + response.errors.join('</p><p>') + '</p>';
        }
    });

    function showHello(){
        authForm.innerHTML = localStorage.getItem('name');
    }

    if(localStorage.getItem('token')){
        showHello();
    }

    let atrList = this.document.querySelector('.list');
    let btnAll = this.document.querySelector('.getAll');

    btnAll.addEventListener('click', async function(){
        let articles = await ArticlesModel.all();
        
        articles.forEach((item) => {
            let div = document.createElement('p');
            div.innerHTML = item.title;
            atrList.appendChild(div);

            div.addEventListener('dblclick', async function(){
                let id = item.id_article;
                let response = await ArticlesModel.remove(id); 

                if(response.res === true){
                    div.parentNode.removeChild(div);
                }
                else{
                    console.log(response.errors);
                }
            })
        });
        
    });

});