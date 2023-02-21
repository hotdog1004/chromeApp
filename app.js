const loginForm = document.querySelector('#login-form');
const loginInput = document.querySelector('#login-form input');
const greeting = document.querySelector('#greeting');

// 계속 반복해서 사용하는 값은 상수로 저장해서 사용
const HIDDEN_CLASSNAME = 'hidden';
const USERNAME_KEY = 'username';

function onLoginSubmit(event){
    // 유저가 name을 form을 통해 제출했을 때 기본동작을 막기 위해 추가
    event.preventDefault();
    loginForm.classList.add(HIDDEN_CLASSNAME);

    const username = loginInput.value;
    localStorage.setItem(USERNAME_KEY, username);
    paintGreetings(username);

}

function paintGreetings(username){
    greeting.innerText = `Hello ${username}`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
}

function test(){
    console.log('test')
}
const savedUsername = localStorage.getItem(USERNAME_KEY);
// LocalStorage에 username 값의 유무에 따라 form 노출 여부 변경
if(savedUsername === null) {
    // show the form
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener('submit', onLoginSubmit);
}else {
    paintGreetings(savedUsername)
    
}

//test
// tgest
