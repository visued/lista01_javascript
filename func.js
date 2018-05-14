function ex01() {
    var n1 = document.getElementById("ex01_n1").value;
    var n2 = document.getElementById("ex01_n2").value;
    document.getElementById("ex01_result").innerHTML = n1 - n2;
}

function ex01_clean() {
    document.getElementById("ex01_n1").value = "";
    document.getElementById("ex01_n2").value = "";
    document.getElementById("ex01_result").innerHTML = "";


}

function ex02() {
    var n1 = document.getElementById("ex02_n1").value;
    var n2 = document.getElementById("ex02_n2").value;
    var n3 = document.getElementById("ex02_n3").value;
    document.getElementById("ex02_result").innerHTML = n1 * n2 * n3;

}

function ex02_clean() {
    document.getElementById("ex02_n1").value = "";
    document.getElementById("ex02_n2").value = "";
    document.getElementById("ex02_n3").value = "";
    document.getElementById("ex02_result").innerHTML = "";


}

function ex03() {
    var n1 = document.getElementById("ex03_n1").value;
    var n2 = document.getElementById("ex03_n2").value;

    if (n2 == 0) {
        document.getElementById("ex03_result").innerHTML = n1 / n2;
    } else {
        alert("Não pode dividir por zero!")
    }

}

function ex03_clean() {
    document.getElementById("ex03_n1").value = "";
    document.getElementById("ex03_n2").value = "";
    document.getElementById("ex03_result").innerHTML = "";


}

function ex04() {
    var n1 = document.getElementById("ex04_n1").value;
    var n2 = document.getElementById("ex04_n2").value;

    document.getElementById("ex04_result").innerHTML = ((n1 * 2) + (n2 * 3)) / 5;

}

function ex04_clean() {
    document.getElementById("ex04_n1").value = "";
    document.getElementById("ex04_n2").value = "";
    document.getElementById("ex04_result").innerHTML = "";


}

function ex05() {
    var n1 = document.getElementById("ex05_n1").value;
    document.getElementById("ex05_result").innerHTML = n1 - (n1 * 0.1);

}

function ex05_clean() {
    document.getElementById("ex05_n1").value = "";
    document.getElementById("ex05_result").innerHTML = "";


}

function ex06() {
    var n1 = document.getElementById("ex06_n1").value;
    document.getElementById("ex06_result").innerHTML = Number(n1) + (Number(n1) * 0.04);

}

function ex06_clean() {
    document.getElementById("ex06_n1").value = "";
    document.getElementById("ex06_result").innerHTML = "";


}

function ex07() {
    var n1 = document.getElementById("ex07_n1").value;
    var n2 = document.getElementById("ex07_n2").value;
    document.getElementById("ex07_result").innerHTML += "Novo peso " + (Number(n1) + ((Number(n1) * 0.15))) + " kg." + "<br />" + "Novo peso " + (Number(n2) - ((Number(n2) * 0.2))) + " kg.";

}

function ex07_clean() {
    document.getElementById("ex07_n1").value = "";
    document.getElementById("ex07_n2").value = "";
    document.getElementById("ex07_result").innerHTML = "";


}

function ex08() {
    var n1 = document.getElementById("ex08_n1").value;
    document.getElementById("ex08_result").innerHTML = n1 * 1000 + " gramas.";

}

function ex08_clean() {
    document.getElementById("ex08_n1").value = "";
    document.getElementById("ex08_result").innerHTML = "";


}

function ex09() {
    var n1 = document.getElementById("ex09_n1").value
    var n2 = document.getElementById("ex09_n2").value
    var n3 = document.getElementById("ex09_n3").value
    document.getElementById("ex09_result").innerHTML = "A área do trapézio é, " + ((n1 + n2) * n3) / 2 + " cm.";

}

function ex09_clean() {
    document.getElementById("ex09_n1").value = "";
    document.getElementById("ex09_n2").value = "";
    document.getElementById("ex09_n3").value = "";
    document.getElementById("ex09_result").innerHTML = "";


}

function ex10() {
    var n1 = document.getElementById("ex10_n1").value
    var n2 = document.getElementById("ex10_n2").value
    document.getElementById("ex10_result").innerHTML = "A área do quadrado é, " + n1 * n2 + " cm.";

}

function ex10_clean() {
    document.getElementById("ex10_n1").value = "";
    document.getElementById("ex10_n2").value = "";
    document.getElementById("ex10_result").innerHTML = "";


}

function ex11() {
    var n1 = document.getElementById("ex11_n1").value
    var n2 = document.getElementById("ex11_n2").value
    document.getElementById("ex11_result").innerHTML = "A área do losango é, " + (n1 * n2) / 2 + " cm.";

}

function ex11_clean() {
    document.getElementById("ex11_n1").value = "";
    document.getElementById("ex11_n2").value = "";
    document.getElementById("ex11_result").innerHTML = "";


}

function ex12() {
    var n1 = document.getElementById("ex12_n1").value
    var n2 = document.getElementById("ex12_n2").value
    document.getElementById("ex12_result").innerHTML = "O funcionário ganha, " + parseInt((n2 / n1)) + " salários.";

}

function ex12_clean() {
    document.getElementById("ex12_n1").value = "";
    document.getElementById("ex12_n2").value = "";
    document.getElementById("ex12_result").innerHTML = "";


}

function ex13() {
    var n1 = document.getElementById("ex13_n1").value   
    for (i = 1; i < 11; i++) {
        document.getElementById("ex13_result").innerHTML += n1 + " x " + i + " = " + n1 * i + "<br />";
    }


}
function ex13_clean() {
    document.getElementById("ex13_n1").value = "";
    document.getElementById("ex13_result").innerHTML = "";


}

function ex14() {
    var n1 = document.getElementById("ex14_n1").value

    document.getElementById("ex14_result").innerHTML = "Essa pessoa tem, " + (2018 - n1) + " anos de idade. <br />";
    document.getElementById("ex14_result").innerHTML += "Essa pessoa tem, " + ((2018 - n1) * 12) + " meses de idade. <br />";
    document.getElementById("ex14_result").innerHTML += "Essa pessoa tem, " + ((2018 - n1) * 365) + " dias de idade. <br />";
    document.getElementById("ex14_result").innerHTML += "Essa pessoa tem, " + ((2018 - n1) * (12 * 4)) + " semanas de idade. <br />";

}

function ex14_clean() {
    document.getElementById("ex14_n1").value = "";
    document.getElementById("ex14_result").innerHTML = "";


}

function ex15() {
    var n1 = document.getElementById("ex15_n1").value;
    var n2 = document.getElementById("ex15_n2").value;
    var n3 = document.getElementById("ex15_n2").value;

    document.getElementById("ex15_result").innerHTML = "O Salário de João é, R$" + Number(n1).toFixed(2) + " reais.<br />" +
        "Conta 1 atrasada: R$" + Number(n2).toFixed(2) + " reais.<br />" +
        "Conta 2 atrasada: R$" + Number(n3).toFixed(2) + " reais.<br />" +
        "Restou para João: R$" + (n1 - (((Number(n2) * 0.02) + Number(n2)) + ((Number(n3) * 0.02) + Number(n3)))) + " reais.<br />";

}

function ex15_clean() {
    document.getElementById("ex15_n1").value = "";
    document.getElementById("ex15_n2").value = "";
    document.getElementById("ex15_n3").value = "";
    document.getElementById("ex15_result").innerHTML = "";


}

function ex16() {
    var n1 = document.getElementById("ex16_n1").value;
    var n2 = document.getElementById("ex16_n2").value;

    document.getElementById("ex16_result").innerHTML = Math.sqrt(Math.pow(Number(n1), 2) + Math.pow(Number(n2), 2));

}

function ex17_clean() {
    document.getElementById("ex16_n1").value = "";
    document.getElementById("ex16_result").innerHTML = "";


}

function ex17() {
    var n1 = document.getElementById("ex17_n1").value;

    document.getElementById("ex17_result").innerHTML = "O comprimento da esfera é, " + ((2 * 3.14) * n1) + "<br />" +
        "A área da esfera é, " + (3.14 * (n1 ^ 2)) + "<br />" +
        "O volume da esfera é, " + ((n1 ^ 3) * (4 * 3.14)) / 3;

}

function ex17_clean() {
    document.getElementById("ex17_n1").value = "";
    document.getElementById("ex17_result").innerHTML = "";


}

function ex18() {
    var n1 = document.getElementById("ex18_n1").value;

    document.getElementById("ex18_result").innerHTML = "O valor convertido em Celsius para Farenheit é, " + ((180 * (n1 + 32)) / 100) + "F";

}

function ex18_clean() {
    document.getElementById("ex18_n1").value = "";
    document.getElementById("ex18_result").innerHTML = "";


}

function ex19() {
    var n1 = document.getElementById("ex19_n1").value;
    var n2 = document.getElementById("ex19_n2").value;

    document.getElementById("ex19_result").innerHTML = "A área a ser iluminada é, " + (n1 * n2) + "m² <br />" +
        "A potência necessária para iluminar é, " + ((n1 * n2) * 18) + " W";

}

function ex19_clean() {
    document.getElementById("ex19_n1").value = "";
    document.getElementById("ex19_n2").value = "";
    document.getElementById("ex19_result").innerHTML = "";


}

function ex20() {
    var n1 = document.getElementById("ex20_n1").value;
    var n2 = document.getElementById("ex20_n2").value;

    document.getElementById("ex20_result").innerHTML = "A medida da escada é, " + n2 + "<br />" +
        "A distância para alcançar a ponta da escada é, " + (Math.cos(Number(n1)) * Number(n2)).toFixed(2) + " metros ";

}

function ex20_clean() {
    document.getElementById("ex20_n1").value = "";
    document.getElementById("ex20_n2").value = "";
    document.getElementById("ex20_result").innerHTML = "";


}

function ex21() {
    var n1 = document.getElementById("ex21_n1").value;//hora trabalhada
    var n2 = document.getElementById("ex21_n2").value;//salario minimo

    document.getElementById("ex21_result").innerHTML = "O salário bruto é, R$" + ((Number(n2) / 8) * n1).toFixed(2) +
        "O salário a receber é, R$" + ((Number(n2) / 4) + ((Number(n2) / 8) * n1)).toFixed(2);

}

function ex21_clean() {
    document.getElementById("ex21_n1").value = "";
    document.getElementById("ex21_n2").value = "";
    document.getElementById("ex21_result").innerHTML = "";


}

function ex22() {
    var n1 = document.getElementById("ex22_n1").value;

    document.getElementById("ex22_result").innerHTML = "O número de diagonais é, " + (n1 * (n1 - 3)) / 2;

}

function ex22_clean() {
    document.getElementById("ex22_n1").value = "";
    document.getElementById("ex22_result").innerHTML = "";


}

function ex23() {
    var n1 = document.getElementById("ex23_n1").value;
    var n2 = document.getElementById("ex23_n2").value;

    document.getElementById("ex23_result").innerHTML = "A medida do terceiro ângulo é, " + (180 - (Number(n1) + Number(n2))) + " graus";

}

function ex23_clean() {
    document.getElementById("ex23_n1").value = "";
    document.getElementById("ex23_n2").value = "";
    document.getElementById("ex23_result").innerHTML = "";


}

function ex24() {
    var n1 = document.getElementById("ex24_n1").value;

    document.getElementById("ex24_result").innerHTML = "A pessoa possui, R$" + Number(n1).toFixed(2) + " reais, convertidos para : <br />" +
        "Dolár: $ " + (Number(n1) / 1.80).toFixed(2) + "<br />" +
        "Marco alemão: DM " + (Number(n1) / 2).toFixed(2) + "<br />" +
        "Libra esterlina: £ " + (Number(n1) / 1.57).toFixed(2);

}

function ex24_clean() {
    document.getElementById("ex24_n1").value = "";
    document.getElementById("ex24_result").innerHTML = "";


}

function ex25() {
    var n1 = document.getElementById("ex25_n1").value;
    var n2 = document.getElementById("ex25_n2").value;

    document.getElementById("ex25_result").innerHTML = "A hora convertida em minutos: " + (n1 * 60) + "<br />" +
        "Os minutos convertidos em hora : " + (n2 / 60) + "<br />" +
        "Os minutos convertidos em segundos : " + (n2 * 60) + "<br />";


}

function ex25_clean() {
    document.getElementById("ex25_n1").value = "";
    document.getElementById("ex25_n2").value = "";
    document.getElementById("ex25_result").innerHTML = "";


}