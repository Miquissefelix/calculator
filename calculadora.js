const n7=document.getElementById('add')
const result=document.getElementById('result')

//anonimous function
n7.addEventListener('click', (event) => {
    const val = event.target.value;
    result.textContent = val;
    alert('primeira funcao ' + val)   
})


//n7.addEventListener('click', test)

// Named function
//Intellisense
// function test  (event)  {
// const val = event.target.value;

//     alert('primeira funcao ' + val)
    
// }