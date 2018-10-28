$(document).ready(function() {

    var plateWeightPerSqInch = .2836;
    var platePricePerPlasma = 1.50;
    var platePricePerShear = .95;
    var platePricePerSheet = .75;
    
    function userDimensionsInputs() {
        var inputLength = document.getElementById("userInputLength").value;
        var inputWidth = document.getElementById("userInputWidth").value;
        var inputThickness = document.getElementById("selectThickness").value;
        var pricePlasma = inputLength*inputWidth*inputThickness*plateWeightPerSqInch*platePricePerPlasma;
        pricePlasma = pricePlasma.toFixed(2);
        var priceShear = inputLength*inputWidth*inputThickness*plateWeightPerSqInch*platePricePerShear;
        priceShear = priceShear.toFixed(2);
        var priceSheet = inputLength*inputWidth*inputThickness*plateWeightPerSqInch*platePricePerSheet;
        priceSheet = priceSheet.toFixed(2);
        $("#estimatePlasma").text("Hi-Definition Plasma cutting estimate " + "$" + pricePlasma);
        $("#estimateShear").text("Manual Shearing estimate " + "$" + priceShear);
        $("#estimateSheet").text("Material Value " + "$" + priceSheet);

        if (inputLength>240 || inputLength<0){
            alert ('Please enter a Length between 1" inch and 240" inches')
            location.reload();
        }

        else if (inputWidth>120 || inputWidth<0){
            alert ('Please enter a Width between 1" inch and 120" inches')
            location.reload();
        }
    
        else if (inputThickness>.501) {
            $("#estimateShear").empty();
            $("#estimateShear").text("This material is too thick to shear");
        

        }
    }
    
    
    $("#subBtn").click(function(event) {
        event.preventDefault();
        $("#estimatePlasmaImage").empty();
        $("#estimatePlasmaImage").prepend('<img id="plasmaImage" src="assets/imgs/16062186393_7b69dd6257_o.jpg"/>')
        userDimensionsInputs();
    });
    });