const input = document.getElementById('inputtt')

const btn = document.getElementById('btn')

const result = document.getElementById('result')


btn.addEventListener('click' , (denis) => {


    result.innerHTML +=  `<p>

    ${input.value}
    
        </p>`
    
    
}) 