let button = document.getElementsByTagName('button');
let cont_ul = document.getElementById('cont_ul');
let sum = document.getElementById('sum');



button[0].addEventListener('click',function (event) {
   let func = function () {
       event.target.style = "color:red";
       button[0].innerHTML = "Я возбудилась))";
   };

    setTimeout(func, 3000);
});

button[1].addEventListener('click',function (event) {
    let func = function () {
        event.target.style = "color:orange";
        button[1].innerHTML = "Я ха ха))";
    };

    setTimeout(func, 3000);
});


let counter = function () {
    i = parseInt(cont_ul.innerHTML);
    cont_ul.innerHTML = i+1;
};
setInterval(counter, 1000);


let times = function () {
    let date = new Date();

    let dateChar = function (date) {
        switch (date+1) {
            case 1: return "января";break;
            case 2: return "февраля";break;
            case 3: return "марта";break;
            case 4: return "апреля";break;
            case 5: return "мая";break;
            case 6: return "июня";break;
            case 7: return "июля";break;
            case 8: return "августа";break;
            case 9: return "сентября";break;
            case 10: return "октября";break;
            case 11: return "ноября";break;
            case 12: return "декабря";break;
        }
    };

    let day = function (day) {
        switch (day) {
            case 1: return "Понедельник";break;
            case 2: return "Вторник";break;
            case 3: return "Среда";break;
            case 4: return "Четверг";break;
            case 5: return "Пятница";break;
            case 6: return "Суббота";break;
            case 7: return "Воскресенье";break;
        }
    };

    sum.innerHTML ="Сегодня "+day(date.getDay())+" "+date.getDate()+" "+dateChar(date.getMonth())+" "+date.getFullYear()+"   "+date.getHours()+":"+date.getMinutes()+":"+date.getSeconds();
};

setInterval(times, 1000);


