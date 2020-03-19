// let number = prompt('Число?');

// if (number>0) {
//     alert(1);
    
// } else if(number<0){
//     alert(-1);
    
// } else{
//     alert(0);
// }

// let result = (a+b<4) ? 'Мало' : 'Много';
// let login = prompt('Должность');
// let message = (login == 'Сотрудник') ? alert('Привет') : (login == 'Директор') ? alert('Здравствуйте') : (login == '') ? alert('Нет логина') : '';
let browser =prompt('Браузер?')
if (browser == 'Edge') {
    alert( "You've got the Edge!" );
} else if(browser == 'Chrome',
    browser == 'Firefox',
    browser == 'Safari',
    browser == 'Opera') {
     alert( 'Okay we support these browsers too' );  
} else{
    alert( 'We hope that this page looks ok!' );
}