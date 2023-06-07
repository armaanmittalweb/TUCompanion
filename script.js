let turnoff = document.getElementById("close")
let loginform = document.getElementById("w")
let btn = document.getElementById("btn")
let login = true;
let submit = document.getElementById("b")
let register = document.getElementById("register")
let heading = document.getElementById("heading")
let forgot = document.getElementById("forgot")
let email = document.getElementById("email")
let pass = document.getElementById("pass")


    register.addEventListener("click",function(){
        heading.innerText = "Register";
        register.style.display = "none";
        forgot.style.display = "none";
        submit.innerText = "Register";
        login = false;
    })

    submit.addEventListener("click",function(){
        if(login == false){          
        localStorage.setItem(JSON.stringify(email.value),pass.value)
        
        }else if(login == true){
            let pswrd =  localStorage.getItem(JSON.stringify(email.value))
            if(pswrd == null){
                alert("No email registered");
            }else if(pswrd != pass.value){
                alert("Wrong password");
            }else if(pswrd == pass.value){
                alert("Login succesfull");
            }
        }
    })



turnoff.addEventListener("click",function(){
loginform.style.display = "none";
})

btn.addEventListener("click",function(){
    loginform.style.display = "flex";
    heading.innerText = "Login";
    register.style.display = "block";
    forgot.style.display = "flex";
    submit.innerText = "Login";
    login = true;
})