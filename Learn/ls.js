
    let textbox = document.getElementById("searchin")
    let btn = document.getElementById("clickable")

    let recent = document.getElementById("list")





function clicky(){
    
    recent.innerHTML += "<li>"+ textbox.value+ "</li>";
    textbox.value = ""
}