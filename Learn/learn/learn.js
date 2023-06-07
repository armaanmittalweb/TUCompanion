


let subs = document.getElementById('subs')

if(localStorage.getItem('sub') == null){
    subs.innerText = 'Chapters'
}else{
    subs.innerText = localStorage.getItem('sub')
}