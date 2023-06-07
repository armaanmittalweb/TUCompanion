let btn = document.getElementById('b')
let subject = document.getElementById('subject')
let file = document.getElementById('file')
btn.addEventListener('click',()=>{
    subject.value = "";
    file.value = "";
    alert("Material Upload Success!!");
})