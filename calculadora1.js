const calculatorDispay = document.querySelector("h1");
const inputBtns = document.querySelectorAll("button");
const clearBtn = document.getElementById("clear");
const igualbtn=document.getElementById("operator")





function sendNumberValue(number) {
    //console.log(number);
    const displayValue = calculatorDispay.textContent;
    const lastChar = displayValue.charAt(displayValue.length - 1);//: Criamos uma constante lastChar que armazena o último caractere da expressão no display. Para isso, usamos o método charAt() para acessar o caractere na posição displayValue.length - 1.

    // Verifica se o número já está no display
    if ((number === '+' || number === '-' || number === '*' || number === '/') && (lastChar === '+' || lastChar === '-' || lastChar === '*' || lastChar === '/')) {
        calculatorDispay.textContent = displayValue.slice(0, displayValue.length - 1) + number;   // Se a condição do if for verdadeira, isso significa que o number é um operador e o lastChar  a linha substitui o operador anterior pelo novo operador, removendo o último caractere (displayValue.slice(0, displayValue.length - 1)) 
    } else {
    // Ternary operator
    //const someVariable = condition ? value if true : value if false

     // Adiciona o número ou operador normalmente
    calculatorDispay.textContent = displayValue === "0" ? number : displayValue + number;


    // if(calculatorDispay.textContent === "0"){
    //     calculatorDispay.textContent = number;
    // } else{
    //     calculatorDispay.textContent =  calculatorDispay.textContent + number;
    // }
    }
    
   
}

function resetAll() {
    calculatorDispay.textContent = "0";
   
}   

function addDecimal() {
    if (!calculatorDispay.textContent.includes(".")) {
        calculatorDispay.textContent = `${calculatorDispay.textContent}.`
    }

   
}

function result(){
    var resultado=document.querySelectorAll('h1')[0].textContent;

    if(resultado){
        calculatorDispay.textContent=eval(resultado)
    }
    
  
    
}


function limpar(){

    
   

   if (calculatorDispay.textContent==='0') {
    console.log('mundo');
    calculatorDispay.textContent="0"
    return;
   }else if (calculatorDispay.textContent!=='0') {
    console.log('ola');
    //calculatorDispay.textContent='0'
    let numero = document.querySelectorAll('h1')[0].textContent;
    calculatorDispay.textContent = numero.substring(0,numero.length-1);
   }
   
   
  
 }










//console.log(inputBtns)

inputBtns.forEach((btn) => {
    //console.log(btn.value);
    if (btn.classList.length === 0) {
        btn.addEventListener("click", () => sendNumberValue(btn.value));
    } else if (btn.classList.contains("operator")  && !btn.classList.contains("equal-sign")) {
        btn.addEventListener("click", () => sendNumberValue(btn.value));
       
    }
    else if (btn.classList.contains("decimal")) {
        btn.addEventListener("click", () => addDecimal());
    }
    else if (btn.classList.contains("equal-sign")) {
        btn.addEventListener("click", () => result());
    }
  
    
   
})

// for(let i = 0; i < inputBtns.length; i++){
// console.log(inputBtns[i].value);
// }

clearBtn.addEventListener("click", resetAll);




