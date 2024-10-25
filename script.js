const herons = document.getElementById("herons");

herons.addEventListener("submit", () =>{
    document.getElementById("result").value = heronsFormula(
        herons.elements['side-a'].value,
        herons.elements['side-b'].value,
        herons.elements['side-c'].value
    )
});

const heronsFormula = (a,b,c) => {
    
    return (Math.sqrt(4 * (Math.pow(a, 2)) * Math.pow(b, 2) - Math.pow((Math.pow(a, 2) + Math.pow(b, 2) - 
    Math.pow(c, 2)), 2))) / 4
}

const ambi = document.getElementById("ambi");

ambi.addEventListener("submit", () =>{
    document.getElementById("result").value = ambiFormula(
        ambi.elements['Angle-A'].value,
        ambi.elements['side-a'].value,
        ambi.elements['side-b'].value
    )
});

const ambiFormula = (ang,a,b) => {
    if 
}