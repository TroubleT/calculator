const display = document.querySelector('.display');
let buttons = document.querySelectorAll('button.num , button.op');
buttons.forEach (function(btn) {
    btn.addEventListener('click', addToDisplay)
});

function addToDisplay(e) {
   display.value += e.target.innerText;
}
document.querySelector('button.eq')
    .addEventListener('click', function(){
        display.value = eval(display.value);
    });

// ФУHКЦІЯ ЗМІНИ ФОНУ

let color = document.querySelector('button.changeColor');
color.addEventListener( 'click' , function() {
  let letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
    document.getElementById("form").style.backgroundColor = color;
});

// ФУHКЦІЯ ВИДАЛЕННЯ ЕЛЕМЕНТА

let edit = document.querySelector('button.edit');
    edit.addEventListener('click', function() {
    display.value = display.value.slice(0 , -1);
    })
    
// ФУHКЦІЯ ВИДАЛЕННЯ УСІХ ЕЛЕМЕНТІВ

let del = document.querySelector('button.del');
    del.addEventListener('click', function() {
    display.value = '';
    })
   
// ФУКЦІЯ МАКСИМАЛЬНОЇ КІЛЬКОСТІ ЕЛЕМЕНТІВ
document.onclick = function(){
    let maxlength = 10;
    let len = display.value.length;
    let error = document.getElementById('error');
    if (len > maxlength) {
        let buttons  = document.querySelectorAll("button.num, button.op, button.eq");
        buttons.forEach (function(x) { x.disabled = true});
        error.innerHTML = 'max length 10 characters only!';
        error.removeAttribute('hidden');
            }
    else {
    error.setAttribute('hidden', '');
    let buttons  = document.querySelectorAll("button.num, button.op, button.eq");
        buttons.forEach (function(x) { x.disabled = false});
    }
}

// ФУHКЦІЯ ПАМ'ЯТЬ
let arr = '';
let memo = document.querySelectorAll('button.mplus , button.mminus, button.mr')
    memo.forEach(function(btn) {
        btn.addEventListener('click', function(){
        const target = event.target;
        if (target.className == 'mplus' ) {
            arr = display.value;
            }
        if (target.className == 'mminus' ) {
            arr = '';
            }
        if (target.className == 'mr' ) {
            display.value = arr;
            }            
        });
    });

