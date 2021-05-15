const name = document.getElementById('username');
const email = document.getElementById('email');
const services = document.getElementById('Service');
const budget = document.getElementById('Budget');

const toggleBtn = document.querySelector('.sidebar-toggle');
const closebtn = document.querySelector('.close-btn');
const sidebar = document.querySelector('.menu');
const btn = document.querySelector('.btn-submit');

const span1 = document.getElementById('1');
const span2 = document.getElementById('2');
const span3 = document.getElementById('3');
const span4 = document.getElementById('4');
const span5 = document.getElementById('5');

var pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

toggleBtn.addEventListener('click',function(){
    sidebar.classList.toggle('show-menu')
})

closebtn.addEventListener('click',function(){
    sidebar.classList.remove('show-menu')
})

btn.addEventListener('click',function(){
    if (name.value === ''){
        span1.classList.add('span-show');
    }
    else{
        span1.classList.remove('span-show');
    }

    if (email.value === ''){
        span2.classList.add('span-show');
    }
    else{
        span2.classList.remove('span-show');
        if (email.value.match(pattern)){
            span5.classList.remove('span-show')
        }
        else{
            span5.classList.add('span-show')
        }
    }

    
    if (services.value == 0){
        span3.classList.add('span-show');
    }
    else{
        span3.classList.remove('span-show');
    }
    
    if (budget.value == 0){
        span4.classList.add('span-show');
    }
    else{
        span4.classList.remove('span-show');
    }
    


    
})