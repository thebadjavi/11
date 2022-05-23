let button = document.getElementById('btn');
let outputDiv = document.getElementById('output');
outputDiv.innerHTML = `<h1>${"0"}</h1>`

/*
button.addEventListener('click', function(){
    let word = document.getElementById('str').value;
    let count = word.length;
    let outputDiv = document.getElementById('output');

    outputDiv.innerHTML = `<h1>${count}</h1>`
});
*/

button.addEventListener('click', function(){
    localStorage.clear();
    let textArea = document.getElementById("str").value.length;
        let outputDiv = document.getElementById('output');

    if(textArea>=50){
        outputDiv.innerHTML = `<h1>${"texto demasiado grande para mi"}</h1>`


    }
    else{
            outputDiv.innerHTML = `<h1>${textArea}</h1>`

    }
    console.log(textArea)

 });

 