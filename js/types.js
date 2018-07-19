let link = "HELLO WORLD";


let object_sold = {
    width: 400,
    height: 10
};


let object_jon = {
  header:true,
    nameShop: function (name, calback="") {
        document.write("Наш магазин называется - " + name + "!</br>");
        if (calback) {
            return calback();
        }
    },
    workTime: function (timeOn, timeOff, calback="") {
        document.write("Время работы с " + timeOn + " до " + timeOff+"</br>");
        if (calback) {
           return calback();
        }
    }
};



let i  = object_sold.__proto__ = object_jon;

i.workTime("10:00", "20:00", i.nameShop("Магазин электроники", function () {
    document.write("Добро пожаловать!</br>");
}));

console.log(i.header);
