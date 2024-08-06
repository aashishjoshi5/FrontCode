let output = document.querySelector("#output");
let allInput = document.querySelectorAll(".leftContainer textarea");

let htmlCode, cssCode, jsCode;

allInput.forEach((el, index) => {
    el.addEventListener("keyup", () => {
        if (index === 0) {
            htmlCode = el.value;
        } else if (index === 1) {
            cssCode = el.value;
        } else if (index === 2) {
            jsCode = el.value;
        }
        
        // Update output after each keyup event
        output.contentDocument.body.innerHTML = htmlCode;
        output.contentDocument.head.innerHTML = `<style>${cssCode}</style>`;
        output.contentWindow.eval(jsCode);
    });
});
