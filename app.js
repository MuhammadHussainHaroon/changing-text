


//question no 1 
const paragraph = document.getElementById('myparagraph')
console.log(paragraph);
paragraph.innerHTML = "hello dom";

//question no 2
function change_colors() {
    const mydiv = document.getElementById('mydiv')
     if (mydiv.style.backgroundColor == "aqua") {
        mydiv.style.backgroundColor = "blue";
    }

   else {
         mydiv.style.backgroundColor = "aqua";
     }
}


//question no 3
function show_hidden() {
    const show_hidden = document.getElementById('hidden_text');
    show_hidden.style.display = "block";
}