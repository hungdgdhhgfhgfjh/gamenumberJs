var color = null;
var numbers = [];
var wrapper = document.querySelector(".wrapper");
var point_user = document.querySelector("#point_user");
var item_number = document.querySelector(".item-number");
var timer_user = document.querySelector('#timer_user')
var point = 1;
// var colors  = ["red","blue","yellow","black"];

for (let i = 1; i < 100; i++) {
    numbers[numbers.length] = i;
}
var numbers = numbers.map((value) => ({ value, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ value }) => value);


timer = 30;

timer_user.innerHTML = `Thời gian ${timer} giây`


for (let key in numbers) {
    item_number.innerHTML +=
        `<button class='btn btn-success' id='button${numbers[key]}' onclick='check(${numbers[key]})'  >`
        + numbers[key] + "</button>";
}

point_user.innerHTML = `Điểm ${point}`
function check(index) {

    numbers = numbers.map((value) => ({ value, sort: Math.random() }))
        .sort((a, b) => a.sort - b.sort)
        .map(({ value }) => value);
    if (point == index) {


    } else {
        alert("bạn đã thua cuộc");
        point = 1;
    }
    render(index);
}
function render(index) {
timer =timer +5;
    number_index = document.querySelector("#button" + index);
    point++;
    if(index==1){
        setInterval(() => {
            timer--;
            if (timer == 0) {
                point = 1;
    
                alert("bạn đã thua cuộc");
                timer = 30;
    
            }
            timer_user.innerHTML = `Thời gian ${timer} giây`
        }, 1000)
    }
    

  
    point_user.innerHTML = `Điểm ${point}`
    item_number.innerHTML = "";

    numbers = numbers.map((value) => ({ value, sort: Math.random() }))
        .sort((a, b) => a.sort - b.sort)
        .map(({ value }) => value);

    wrapper = document.querySelector(".wrapper");

    item_number = document.querySelector(".item-number");

    console.log(point);


    for (let key in numbers) {

        if (numbers[key] < point) {
            color = 'blue';
        } else {
            color = null;
        }
        //console.log(color);
        item_number.innerHTML += 
            `<button style='background-color:${color}' width='43px' height="37px"  class='btn btn-success' id='button${numbers[key]}' onclick='check(${numbers[key]})'  >`
            + numbers[key] + "</button>";

    }



}

