const para = document.querySelector('.para')
const allParas = document.querySelectorAll('.para')
const another = document.querySelector("#another")
const bigger = document.getElementById('bigger')

console.log(para)
console.log(allParas)
console.log(another)
console.log(bigger)

const button = document.querySelector('button').addEventListener('click',()=>{
    console.log('Hey! I was clicked')
})