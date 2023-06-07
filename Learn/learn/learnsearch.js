const input = document.getElementById('search-input')
const btn = document.getElementById('search-button')
const list = document.getElementById('list')

let i = 0;
let subject = input.value
function loadevent(){
    i = localStorage.getItem('Index')
    
    if(i>0){
    for(let j = 0; j<=i;j++){
        list.innerHTML += `<li> ${localStorage.getItem(JSON.stringify(i))} </li>` 
    }
   
} else if(i==null){
        localStorage.setItem('Index',0)
    }
}

btn.addEventListener('click',()=>{
    subject = input.value
    list.innerHTML += `<li> ${subject} </li>` 
    if(localStorage.getItem('sub') != null){
        localStorage.removeItem('sub')
        localStorage.setItem('sub')
    }else{
    localStorage.setItem('sub',subject)}
    i++
    localStorage.setItem(i,JSON.stringify(subject))
   
    localStorage.setItem('Index',JSON.stringify(i))
})

module.exports = subject
