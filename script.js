let box1 = document.getElementById("box1")
let box2 = document.getElementById("box2")
let reset1 = document.getElementById("resetbtn")

let count = 0
let tableLimit = 2;  
let tableRowCount = 0; 
let generateButton = document.getElementById('generateButton');
let sum = 0
let iteration = 0

function generate(){
    let num1 = Math.floor(Math.random()*10)
    let num2 = Math.floor(Math.random()*10)
    let scoreTableBody = document.getElementById('scoreTable').getElementsByTagName('tbody')[0];
    let result = document.getElementById("result")
    let finalsum = document.getElementById("final-result")
    
    box1.innerText = num1
    box2.innerText = num2

    count = count + num1
    sum =sum+num1
    iteration ++

    if(num1==num2){
        result.innerText = `${count}`
        if (tableRowCount < tableLimit) {
            let newRow = scoreTableBody.insertRow();
            newRow.insertCell().textContent = `Batsman Score : ${count}`;  
            newRow.insertCell().textContent = `Balls faced : ${iteration}`;  
            tableRowCount++;
            iteration = 0
        }
        else{
            alert("your team all wickets loose ")
            finalsum.innerText = `Your Team Score Is ${sum}`  
            reset1.style.display = 'inline-block';   
            generateButton.style.display = 'none'
            sum = 0
            iteration = 0
        }
        alert("you loose")
        count = 0
    }
    else{
        result.innerText = ""
    }
}

function reset(){
    let scoreTableBody = document.getElementById('scoreTable').getElementsByTagName('tbody')[0];
    scoreTableBody.innerHTML=""
    reset1.style.display = 'none';  
    generateButton.style.display = 'inline-block' 
    let finalsum = document.getElementById("final-result")
    finalsum.innerText = ""
    let result = document.getElementById("result")
    result.innerText = ""
    tableRowCount = 0;
}


// https://onecompiler.com/html/42pgwq8gm
