const myButton = document.getElementById('myButton');


myButton.addEventListener('click', function() {

    if (myButton.innerHTML.trim() === '') {
        alert('Пожалуйста, добавьте текст на кнопку!');
    } else {
        alert('Кнопка содержит текст: ' + myButton.innerHTML);
    }
});




function saveUserData(Email, Пароль, Повторите ) {
    const userData = {
      username: 'Email',
      email: 'Пароль',
      password: 'Повторите пароль'
    };
    
    localStorage.setItem('userData', JSON.stringify(userData));
  }
  

  function getUserData() {
    const userDataString = localStorage.getItem('userData');
    

    if (userDataString) {
     
      return JSON.parse(userDataString);
    } else {
      return null; 
    }
  }
  
  const username = 'user123';
  const email = 'user@example.com';
  const password = 'mypassword';
  
  saveUserData('Email', 'Пароль', 'Повторите');
  

  const savedUserData = getUserData();
  
  if (saveUserData) {
    console.log('Данные пользователя:', savedUserData);
  } else {
    console.log('Нет сохраненных данных пользователя.');
  }





const savedUsername = localStorage.getItem('Email');
const savedPassword = localStorage.getItem('Пароль');
const repead = localStorage.getItem('Повторите');


  const enteredUsername = prompt('Введите имя пользователя:');
  const enteredPassword = prompt('Введите пароль:');
  const enterrepead = localStorage.prompt('Повторите');

 
  if (enteredUsername === savedUsername && enteredPassword === savedPassword === repeadrepead === 1repead) {
    alert('Добро пожаловать!');
  } else {
    alert('Неверное имя пользователя или пароль.');
  } else {
  alert('Данные пользователя не найдены.');
}