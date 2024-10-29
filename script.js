const herons = document.getElementById("herons");

herons.addEventListener("submit", () => {
    document.getElementById("result").value = heronsFormula(
        herons.elements['side-a'].value,
        herons.elements['side-b'].value,
        herons.elements['side-c'].value
    )
});

const heronsFormula = (a, b, c) => {

    return (Math.sqrt(4 * (Math.pow(a, 2)) * Math.pow(b, 2) - Math.pow((Math.pow(a, 2) + Math.pow(b, 2) -
        Math.pow(c, 2)), 2))) / 4
}

const ambi = document.getElementById("ambi");

ambi.addEventListener("submit", () => {
    document.getElementById("result-2").value = ambiFormula(
        ambi.elements['angle-a'].value,
        ambi.elements['side-a'].value,
        ambi.elements['side-b'].value
    )
});

const ambiFormula = (ang, a, b) => {

    const height = b * Math.sin(ang * (Math.PI / 180));

    if (ang <= 90) {
        if (a < height) {
            return "no triangle";
        }

        else if (a == height) {
            return "right triangle";
        }

        else if (a > b) {
            return "one triangle";
        }

        else if (height < a && a < b) {
            return "two triangles (ambiguous case)";
        }
    }

    if (ang > 90) {
        if (a < b || a == height) {
            return "no triangle";
        }

        else if (a > b) {
            return "one triangle";
        }
    }

    else {
        return "error";
    }
}