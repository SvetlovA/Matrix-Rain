var MatrixRain = function () {
    var lines = [];
    var symbols = "1234567890qwertyuiop[]asdfghjkl;'\zxcvbnm,./+-*!@#$%^&*()贝制复写模六天友水出外北母半右目周招承性担宙直定底的毒届波版非並放法宝枚";
    var matrix = document.querySelector(".matrix");
    var settings = document.querySelector(".settings");
    var backgroundColor = document.querySelector("#background-color");
    var symbolsColor = document.querySelector("#symbols-color");
    var fontSize = document.querySelector("#font-size");
    var textShadow = document.querySelector("#brightness");
    var shadowColor = document.querySelector("#brightness-color");

    settings.style.width = "300px";
    settings.style.height = window.innerHeight + "px";
    matrix.style.font = fontSize.value + "px sans-serif";
    matrix.style.width = window.innerWidth - Number(settings.style.width.match(/\d+/)) - 100 + "px";
    matrix.style.height = window.innerHeight + "px";
    matrix.style.textShadow = "0 0 " + textShadow.value + "px " + shadowColor.value;
    document.body.style.backgroundColor = backgroundColor.value;

    var matrixWidth = Number(matrix.style.width.match(/\d+/));
    var matrixHeight = Number(matrix.style.height.match(/\d+/));
    var matrixFontSize = Number(matrix.style.font.match(/\d+/));

    backgroundColor.addEventListener("change", function () {
        document.body.style.backgroundColor = backgroundColor.value;
    });

    fontSize.addEventListener("change", function () {
        clearAll(matrix);
        if (!isNaN(Number(fontSize.value))) {
            if (fontSize.value > 0 && fontSize.value <= 400) {
                matrix.style.font = fontSize.value + "px sans-serif";
                matrixFontSize = Number(matrix.style.font.match(/\d+/));
            }
            else {
                alert("Значение не может быть 0, отрицательным!!!");
            }
        }
        else {
            alert("Значение должно быть числом или цифрой!!!");
        }
    });

    textShadow.addEventListener("change", function () {
        matrix.style.textShadow = "0 0 " + textShadow.value + "px " + shadowColor.value;
    });

    shadowColor.addEventListener("change", function () {
        matrix.style.textShadow = "0 0 " + textShadow.value + "px " + shadowColor.value;
    });

    function clearAll(node) {
        while (node.firstChild) {
            node.removeChild(node.firstChild);
        }
        lines = [];
    }

    function randomSymbol(symbols) {
        if (Math.random() < 0.7) {
            return symbols[Math.floor(Math.random() * symbols.length)];
        }
        else {
            return " ";
        }
    }

    function createSymbols() {
        var x = 0;
        var line = document.createElement("div");
        line.setAttribute("class", "line");
        for (var i = 0; i < matrixWidth / matrixFontSize; i++) {
            var symbol = document.createElement("span");
            symbol.textContent = randomSymbol(symbols);
            symbol.style.left = x + "em";
            symbol.style.color = symbolsColor.value;
            line.appendChild(symbol);
            x += 1;
        }
        matrix.appendChild(line);
        line.style.top = "0em"
        return line;
    }

    function bias() {
        for (var i = 0; i < lines.length; i++) {
            lines[i].style.top = Number(lines[i].style.top.match(/\d+/)) + 1 + "em";
        }
        if (lines.length > 0) {
            if (Number(lines[0].style.top.match(/\d+/)) > matrixHeight / matrixFontSize) {
                matrix.removeChild(matrix.firstChild);
            }
        }
    }

    return {
        rain: function () {
            bias();
            var line = createSymbols(symbols);
            lines.push(line);
            requestAnimationFrame(MatrixRain.rain);
        }
    };
}();

requestAnimationFrame(MatrixRain.rain);
