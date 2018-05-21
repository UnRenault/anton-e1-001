for (let i = 10; i >= 0; --i) {
	if (i % 2 === 0) {
		console.log(i);
	}
}

let i=10;
while(i>=0){
	if (i % 2 === 0){
		console.log(i);
	}
	--i;
}

const isAdmin = true;

if (isAdmin) {
	alert('Привет, Admin!');
} else {
	alert('Ты точно не Admin');
}

const isAdmin = true;
isAdmin ? alert('Привет, Admin!'):alert('Ты точно не Admin');

const login_admin = 'admin';
const pass_admin = 'MeGaHaTsKeR_666';  

const login_user = 'user';
const pass_user = 'qwerty1234';  


function checkLogin(){
  var login = prompt('Введите логин', '');
  if(login == login_admin || login == login_user){
    checkPass();
    } else {
    alert("Такого логина нет в системе")
    checkLogin();
  }
}
var pass_text = 'Введите пароль';
function checkPass(){
  var pass = prompt( pass_text, '');
  if (pass == null){
    pass = 0;
  }
  if(pass == pass_admin){
    alert('Добро пожаловать Admin');
  } else if(pass == pass_user){
    alert('Добро пожаловать User');
  } else if( (pass != pass_admin || pass != pass_user) && pass !=0 ) {
    pass_text = 'Введенный пароль не правельный';
    console.log(pass);
    checkPass();
  } else if(pass == 0) {
    pass_text = 'Введите пароль';
    checkPass();
  }
}
checkLogin();

const age = +prompt('Сколько тебе лет?', '12');
switch (age) {
  case 12:
    alert('Слишком мало :(');
  case 16:
    alert('Почти достаточно :[');
  case 18:
     alert('Вот сейчас в самый раз! :)');
  default:
     alert('Возраст не определен %)');
}