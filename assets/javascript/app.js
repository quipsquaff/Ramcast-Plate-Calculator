$(document).ready(function() {
var userLength = "";
var userWidth = "";
var userThickness = "";
var plateWeightPerSqInch = .2836;
var platePricePerPlasma = 1.50;
var platePricePerShear = .95;
var platePricePerSheet = .75;
var displayPricePlasma = userLength*userWidth*userThickness*plateWeightPerSqInch*platePricePerPlasma;
var displayPriceShear = userLength*userWidth*userThickness*plateWeightPerSqInch*platePricePerShear;
var displayPriceSheet = userLength*userWidth*userThickness*plateWeightPerSqInch*platePricePerSheet;

$("#subBtn").click(function(event) {
    event.preventDefault();
});
});
