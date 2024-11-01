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

const newton = document.getElementById("newton");

newton.addEventListener("submit", () => {
    document.getElementById("result-3").value = newtonMethod(
        newton.elements['g-value'].value
    )
});

const newtonMethod = (g) => {
    root = (g - (6 * Math.pow(g, 4) - 13 * Math.pow(g, 3) - 18 * Math.pow(g, 2) + 7 * g + 6) / (24 * Math.pow(g, 3) - 39 *
        Math.pow(g, 2) - 36 * g + 7));
    while (root - g > 0.1) {
        g = root;
        root = (g - (6 * Math.pow(g, 4) - 13 * Math.pow(g, 3) - 18 * Math.pow(g, 2) + 7 * g + 6) / (24 * Math.pow(g, 3) - 39 *
            Math.pow(g, 2) - 36 * g + 7));
        console.log(root);
    }
    return(root);
}

const poly = document.getElementById("poly");

poly.addEventListener("submit", () => {
    document.getElementById("result-4-1").value = polynomialFunction(
        poly.elements['coefficients'].value,
        poly.elements['exponents'].value
    )
    document.getElementById("result-4-2").value = polynomialEvaluation(
        poly.elements['coefficients'].value,
        poly.elements['exponents'].value,
        poly.elements['x-value'].value
    )
});

const polynomialFunction = (coefficients, exponents) => {
    const coefficientValues = coefficients.split(" ");
    const exponentValues = exponents.split(" ");
    coefficientCount = coefficientValues.length;
    let i = 0;
    let responseOne = "f(x)=";
    while (i <= coefficientCount) {
        if (coefficientValues[i] > 0 || coefficientValues[i] < 0) {
            responseOne += coefficientValues[i] + "x^" + exponentValues[i];
        }
        else {
            responseOne == responseOne;
        }
        if (i >= 0 && i < coefficientCount - 1 && coefficientValues[i + 1] > 0) {
            responseOne += "+";
        }
        i++;
    }
    return (responseOne);
}

const polynomialEvaluation = (coefficients, exponents, x) => {
    const coefficientValues = coefficients.split(" ");
    const exponentValues = exponents.split(" ");
    coefficientCount = coefficientValues.length;
    let i = 0;
    let ans = 0;
    while (i < coefficientCount) {
        ans += coefficientValues[i] * Math.pow(x, exponentValues[i])
        i++;
    }
    let responseOne = "f(" + x + ")=" + ans;
    return (responseOne);
}