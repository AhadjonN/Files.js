const aEl = document.getElementById("a");
const bEl = document.getElementById("b");
const cEl = document.getElementById("c");

function onButtonClick() {
    const a = (aEl.value);
    if (!a) {
        alert('polya xoli 1')
    } if (isNaN(a)) {
        alert('raqam ne 1');
    } else {
        console.log(a);
    }

    const b = (bEl.value);
    if (!a) {
        alert('polya xoli 2');
    } if (isNaN(b)) {
        alert('raqam ne 2');
    } else {
        console.log(b);
    }

    const c = (cEl.value);
    if (!a) {
        alert('polya xoli 3');
    } if (isNaN(c)) {
        alert('raqam ne 3');
    } else {
        console.log(c);
    }
    const result = diskraminant(a, b, c);
    console.log(result)
}


function diskraminant(a, b, c) {
    const D = Math.pow(b, 2) - 4 * a * c;
    if (D < 0) {
        return "false"
    }
    if (D === 0) {
        const x = (-b) / (2 * a);
        return "x" + x;

    }
    else {
        console.log()
        const x1 = (-b - Math.sqrt(D)) / (2 * a);
        const x2 = (-b + Math.sqrt(D)) / (2 * a);
        return "x1=" + x1 + " ; " + 'x2=' + x2;



    }
}

