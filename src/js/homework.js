let number = prompt('Число?');

if (number>0) {
    alert(1);
    
} else if(number<0){
    alert(-1);
    
} else{
    alert(0);
}

let result = (a+b<4) ? 'Мало' : 'Много';

let message = (login == 'Сотрудник') ? 'Привет' : (login == 'Директор') ? 'Здравствуйте' : (login == '') ? 'Нет логина' : '';