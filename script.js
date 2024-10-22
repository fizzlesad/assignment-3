const herons = document.getElementById("herons");

herons.addEventListener('click', () =>{
    document.getElementById("result").value = heronsFormula
})

const heronsFormula = (a,b,c) => {
    (Math.sqrt(4 * (Math.pow(a, 2)) * Math.pow(b, 2) - Math.pow((Math.pow(a, 2) + Math.pow(b, 2) - 
    Math.pow(c, 2)), 2))) / 4
}

function steinberg2() {
    
}