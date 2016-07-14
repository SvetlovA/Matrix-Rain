var workWithSymbols = function () {
    function randomSymbol(length) {
        if (Math.random() < 0.7) {
            return Math.floor(Math.random() * length);
        }
        else {
            return " ";
        }
    }

    return {
        createSymbols: function (symbols) {
            var x = 0;
            var line = document.createElement("div");
            for (var i = 0; i < window.innerWidth / 16; i++) {
                var symbol = document.createElement("span");
                symbol.textContent = symbols[randomSymbol(symbols.length)];
                symbol.style.left = x + "em";
                line.appendChild(symbol);
                x += 1;
            }
            document.body.appendChild(line);
            line.style.top = "0em"
            return line;
        }
    };
}();


var MatrixRain = function () {
    var lines = [];
    var symbols = "1234567890qwertyuiop[]asdfghjkl;'\zxcvbnm,./+-*!@#$%^&*()";

    function bias() {
        for (var i = 0; i < lines.length; i++) {
            lines[i].style.top = Number(lines[i].style.top.match(/\d+/)) + 1 + "em";
        }
        if (lines.length > 0) {
            if (Number(lines[0].style.top.match(/\d+/)) > window.innerHeight / 16) {
                document.body.removeChild(document.body.firstChild);
            }
        }
    }

    return {
        rain: function () {
            bias();
            var line = workWithSymbols.createSymbols(symbols);
            lines.push(line);
            requestAnimationFrame(MatrixRain.rain);
        }
    };
}();

requestAnimationFrame(MatrixRain.rain);
