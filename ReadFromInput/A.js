function onButtonClik() {
    const inputEl = dacument.getElementById("discriminant");
    console.log(inputEl);
    console.log(input.value);
    function diskrimimnant(a, b, c) {
        const D = Math.pow(b, 2) - 4 * a * c;
        if (D < 0) {
            return "false";
        }
        if (D === 0) {
            const x = -b / (2 * a);
            return 'x=' + x;

        } else {
            console.log()
            const x1 = (-b - Math.sqrt(D)) / (2 * a);
            const x2 = (-b + Math.sqrt(D)) / (2 * a);
            return 'x1=' + x1 + '  x2=' + x2;

        }
    }
    console.log(diskrimimnant(1, 3, 2));


}f