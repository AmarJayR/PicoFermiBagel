// JavaScript Document
// Amar RamaLamaChandran :D

/*	
	The PicoFermiBagel object implements the logic for the game
*/
String.prototype.setCharAt = function (index, character) {
    return this.substr(0, index) + character + this.substr(index + character.length);
}

Array.prototype.contains = function (needle) {
    for (i in this) {
        if (this[i] == needle) return true;
    }
    return false;
}

function PicoFermiBagel(numOfDigits) {
    //Private variables
    var number = new String();
    var numOfDigits = numOfDigits;
    var bagel = 0
    var pico = 1;
    var fermi = 2;

    //Private methods
    init();

    //Public methods
    this.checkValue = checkValue;
    this.numOfDigits = numOfDigits;
    this.giveUp = giveUp();
    this.bagel = bagel;
    this.pico = pico;
    this.fermi = fermi;
    this.turns = 0;

    function giveUp() {
        return number;
    }

    function init() {
        newNum();
    }


    function checkValue(value) {
        this.turns++;

        var returnValue = new Array();
        var secret = number;
        var input = value.toString();

        var INVALID_CHAR = " ";

        // Fermi checks
        for (var i = 0; i < input.length; i++) {
            if (input.charAt(i) == secret.charAt(i)) {
                secret = secret.setCharAt(i, INVALID_CHAR);
                input = input.setCharAt(i, INVALID_CHAR);

                returnValue[returnValue.length] = game.fermi;
            }
        }


        for (var i = 0; i < input.length; i++) {
            if (input.charAt(i) == INVALID_CHAR)
                continue;

            // scan the secret to see if the input char exists at any location
            for (var j = 0; j < secret.length; j++) {
                if (input.charAt(i) == secret.charAt(j)) {
                    returnValue[returnValue.length] = game.pico;
                    secret = secret.setCharAt(j, INVALID_CHAR);
                    break;
                }
            }
        }

        if (returnValue.length == 0) {
            returnValue[0] = bagel;
        }
        returnValue = shuffle(returnValue);
        return returnValue;
    }


    function getElementOccurence(array, numChecking) {
        var numOfTrue = 0;
        for (var i = 0; i < array.length; i++) {
            if (array[i] == numChecking)
                numOfTrue++;
        }
        return numOfTrue;
    }

    function shuffle(o) {
        for (var j, x, i = o.length; i; j = Math.floor(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
        return o;
    }

    //Generate random n-dig num
    function newNum() {
        for (var i = 0; i < numOfDigits; i++) {
            number += Math.floor(Math.random() * (9 - 0)) + 0;
        }
    }


}