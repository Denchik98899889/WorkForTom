const input = document.getElementById('inputtt')

const btn = document.getElementById('btn')

const result = document.getElementById('result')

const result2 = document.getElementById('result2')

const comp = document.getElementById('comp')

const delt = document.getElementById('delt')

// обработчік собитій комфортно для багатьох кнопок

// DOM tree

btn.addEventListener('click' , (denis) => {

    result.innerHTML +=  `<p>

    ${input.value}
    
        </p>`
}) 
comp.addEventListener('click' , (den) => {
    
    result2.innerHTML +=  `<p>
    
    ${input.value}

        </p>`
}) 


delt.addEventListener('click' , (den2) => {

    Element.remove(result)
    
  }) 
