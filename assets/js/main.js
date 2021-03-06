/*
    Lev1_1_js-einführung_function-intro:

    Deklariere die Funktion intro() und im Funktionskörper {}:
    * Deklariere die Variable a mit dem Wert 1 + 3.
    * Gebe zusätzlich Hello World in der Konsole aus.
    * Gebe den String “1+3 = ” + a in der Konsole aus.
    * Denk daran, die Geschweifte Klammer } zu schließen!
*/
function intro() {
    let a = 1 + 3;
    console.log("Hello World");
    console.log("1 + 3 = " + a);
}
intro();
console.log("");



/*
    Lev1_2_js-einführung_function-intro:

    Deklariere die Funktion intro2() mit dem Parameter (paramName) und einem Funktionskörper {}:
    * Deklariere die Variable varName mit dem Wert “SuperCoder”.
    * Gebe dazu “Hi, “ + varName + “. Mein Name ist ” + paramName + “ .” in der Konsole aus.
    * Denke daran die Geschweifte Klammer zu schließen.
    * Rufe die Funktion mit einem Argument auf. Gib als Argument deinen eigenen Namen ein.
*/
function intro2(paramName) {
    var varName = "SuperCoder";
    console.log("Hi, " + varName + ". Mein Name ist " + paramName + ".");
}
intro2("Klaus");
console.log("");



/*
    Lev1_3_js-einführung_function-intro:

    Deklariere die Funktion intro3() mit den drei Parametern name, stadt, alter.
    *   Gebe unter Verwendung der entsprechenden Argumente folgende Sätze in der Konsole aus:
        Hallo, mein Name ist SuperCoder. Ich bin 27 Jahre alt. Ich komme aus Düsseldorf.
    *   Verwende deine persönlichen Daten.
*/
function intro3(name, stadt, alter) {
    console.log("Hallo, mein Name ist " + name + ". Ich bin " + alter + " Jahre alt. Ich komme aus " + stadt + ".");
}
intro3("Klaus", "Bochum", 57);
console.log("");



/*
    Lev1_5_js-einführung_function-multi-division:

    Deklariere die Funktion math mit zwei Parametern und einem Funktionskörper:
    * Gib in der Konsole die Multiplikation von den beiden Parametern aus.
    * Gib in der Konsole die Division von den beiden Parametern aus.
    * Ruf die Funktion mit den Argumenten 10, 2 auf.
    * Teste auch andere Werte:
        o 30, 20
        o 100, 100
        o 5, 0
        o 45, 173
        o 1, 1000
*/
function math(x, y) {
    console.log("x * y = " + x * y);
    console.log("x / y = " + x / y);
}
math(30, 20);
math(100, 100);
math(5, 0);
math(45, 173);
math(1, 1000);
