let count = 0;
const counter = document.getElementById('counter');
const increment = document.getElementById('increment')
const decrement = document.getElementById('decrement')


increment.addEventListener("click", () =>{
    count++;
    counter.innerHTML = count;
});

decrement.addEventListener("click", () =>{
    count--;
    counter.innerHTML = count;
});

