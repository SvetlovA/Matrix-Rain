var matrixRain = function () {
    var matrix = document.querySelector(".matrix");
    var cx = matrix.getContext("2d");
    var symbols = "1234567890qwertyuiop[]asdfghjkl;'\zxcvbnm,./+-*!@#$%^&*()贝制复写模六天友水出外北母半右目周招承性担宙直定底的毒届波版非並放法宝枚";

    function randomSymbol(symbols) {
        if (Math.random() < 0.7) {
            return symbols[Math.floor(Math.random() * symbols.length)];
        }
        else {
            return " ";
        }
    }

    return {
        rain: function () {
            cx.clearRect(0, 0, matrix.width, matrix.height);
            cx.fillStyle = "darkgreen";
            cx.shadowColor = "greenyellow";
            cx.shadowBlur = 1;
            cx.font = "16px sans-serif";
            for (var y = 0; y < matrix.height; y += Number(cx.font.match(/\d+/))) {
                for (var x = 0; x < matrix.width; x += Number(cx.font.match(/\d+/))) {
                    cx.fillText(randomSymbol(symbols), x, y);
                }
            }
            setTimeout(matrixRain.rain, 90);
        }
    };

}();

matrixRain.rain();