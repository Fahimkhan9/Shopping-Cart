const fplusbutton = document.getElementById("firstplusbutton");

const fminusbutton = document.getElementById("firstminusbutton");

const finput = document.getElementById("firstitemvalue");

const ftotal = document.getElementById("ftotal");

const lplusbutton = document.getElementById("lastplusbutton");

const lminusbutton = document.getElementById("lastminusbutton");

const linput = document.getElementById("lastitemvalue");

const ltotal = document.getElementById("ltotal");

const subtotal = document.getElementById("subtotal");

const sum = document.getElementById("sum");

const tax = document.getElementById("tax");

fplusbutton.addEventListener("click", () => {
    finput.value = parseFloat(finput.value) + 1;

    ftotal.innerHTML = finput.value * 1259;

    subtotal.innerHTML =
        parseFloat(ftotal.innerHTML) + parseFloat(ltotal.innerHTML);

    sum.innerHTML = parseFloat(subtotal.innerHTML) + parseFloat(tax.innerHTML);
});
fminusbutton.addEventListener("click", () => {
    console.log("m");

    finput.value = parseFloat(finput.value) - 1;

    ftotal.innerHTML = parseFloat(ftotal.innerHTML - 1259);
    subtotal.innerHTML =
        parseFloat(ftotal.innerHTML) + parseFloat(ltotal.innerHTML);
    sum.innerHTML = parseFloat(subtotal.innerHTML) + parseFloat(tax.innerHTML);
});

lplusbutton.addEventListener("click", () => {
    linput.value = parseFloat(linput.value) + 1;

    ltotal.innerHTML = linput.value * 59;

    subtotal.innerHTML =
        parseFloat(ftotal.innerHTML) + parseFloat(ltotal.innerHTML);
    sum.innerHTML = parseFloat(subtotal.innerHTML) + parseFloat(tax.innerHTML);
    console.log("lp");
});
lminusbutton.addEventListener("click", () => {
    linput.value = parseFloat(linput.value) - 1;

    ltotal.innerHTML = ltotal.innerHTML - 59;
    subtotal.innerHTML =
        parseFloat(ftotal.innerHTML) + parseFloat(ltotal.innerHTML);
    sum.innerHTML = parseFloat(subtotal.innerHTML) + parseFloat(tax.innerHTML);
    console.log("lm");
});