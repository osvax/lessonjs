let input = document.getElementsByTagName('input');
let x=0;

while (x < input.length) {
    input[x].onclick = function () {
        let sum = 0;
        let text ="";
        let class_sum = document.getElementById('sum');
        let cont_ul = document.getElementById('cont_ul');
        let input = document.getElementsByTagName('input');
        for(let i=0; i < input.length; i++) {
            if (input[i].checked) {
                sum = parseFloat(sum) + parseFloat(input[i].value);
                text += "<li>"+input[i].name+" = "+input[i].value+"</li>";
            }
        }
        cont_ul.innerHTML = text;
        class_sum.innerHTML = sum;

    };
    x++;
}

