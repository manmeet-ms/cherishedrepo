let show=()=>{
    alert("Hello World");
}
let close=()=>{
    alert("Bye World");
}
let a = document.querySelector('#ham')
a.addEventListener('click', show)
let b = document.querySelector('#close')
b.addEventListener('click', close)
