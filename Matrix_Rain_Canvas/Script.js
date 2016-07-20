﻿var matrixRain = function () {
    var matrix = document.querySelector(".matrix");
    var cx = matrix.getContext("2d");
    var symbols = "1234567890qwertyuiop[]asdfghjkl;'\zxcvbnm,./+-*!@#$%^&*()贝制复写模六天友水出外北母半右目周招承性担宙直定底的毒届波版非並放法宝枚";
    var settings = document.querySelector(".settings");
    var backgroundColor = document.querySelector("#background-color");
    var symbolsColor = document.querySelector("#symbols-color");
    var fontSize = document.querySelector("#font-size");
    var textShadow = document.querySelector("#brightness");
    var shadowColor = document.querySelector("#brightness-color");
    var speed = document.querySelector("#fps");


    settings.style.width = "300px";
    settings.style.height = window.innerHeight - 25 + "px";
    matrix.style.width = window.innerWidth - settings.style.width.match(/\d+/) - 67 + "px";
    matrix.style.height = window.innerHeight + "px";
    cx.fillStyle = symbolsColor.value;
    matrix.style.backgroundColor = backgroundColor.value;
    document.body.style.backgroundColor = backgroundColor.value;
    cx.shadowColor = shadowColor.value;
    cx.shadowBlur = textShadow.value;
    cx.font = fontSize.value + "px sans-serif";

    var fps = speed.value;

    symbolsColor.addEventListener("change", function () {
        cx.fillStyle = symbolsColor.value;
    });

    backgroundColor.addEventListener("change", function () {
        document.body.style.backgroundColor = backgroundColor.value;
        matrix.style.backgroundColor = backgroundColor.value;
    });

    fontSize.addEventListener("change", function () {
        if (!isNaN(Number(fontSize.value))) {
            if (fontSize.value > 0 && fontSize.value <= 400) {
                cx.font = fontSize.value + "px sans-serif";
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
        cx.shadowBlur = textShadow.value;
    });

    shadowColor.addEventListener("change", function () {
        cx.shadowColor = shadowColor.value;
    });

    speed.addEventListener("change", function () {
        if (!isNaN(Number(speed.value))) {
            if (speed.value > 0 && speed.value <= 100) {
                fps = speed.value;
            }
            else {
                alert("Частота не может быть равной нулю или быть отрицательной или больше 100!!!");
            }
        }
        else {
            alert("Частота должна быть числом или цифрой!!!");
        }
    });

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
            setTimeout(function () {
                requestAnimationFrame(matrixRain.rain);
                cx.clearRect(0, 0, matrix.width, matrix.height);
                for (var y = 0; y < matrix.height; y += Number(cx.font.match(/\d+/))) {
                    for (var x = 0; x < matrix.width; x += Number(cx.font.match(/\d+/))) {
                        cx.fillText(randomSymbol(symbols), x, y);
                    }
                }
            }, 1000 / fps);
        }
    };

}();

requestAnimationFrame(matrixRain.rain);