let btn = document.getElementsByTagName('button');
let a = document.getElementsByTagName('a');


btn[0].addEventListener('click', function (event) {
    event.target.style = "color:red";
});


a[0].addEventListener('click', function (event) {
    event.preventDefault();
});
