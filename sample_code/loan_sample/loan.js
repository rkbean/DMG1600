/*jslint devel: true */
/*global $ */


var loanAmount = 0;
var interest = 0;
var numPayments = 0;

function paymentCalc() {
    var effectiveInterest = interest / 100 / 12,
        den = Math.pow(1 + effectiveInterest, -numPayments),
        payment = loanAmount * (effectiveInterest / (1 - den));
    return payment;
}

$('#calculate').on('click', function () {
    if ($.isNumeric($('#loanAmount').val()) === false) {
        alert('The Loan Amount is not a valid numeric');
    } else {
        loanAmount = $('#loanAmount').val();
    }
    if ($.isNumeric($('#numMonths').val()) === false) {
        alert('The Number of months must be a number');
    } else {
        numPayments = $('#numMonths').val();
    }
    if ($.isNumeric($('#interest').val()) === false) {
        alert('The interest must be a number');
    } else {
        interest = $('#interest').val();
    }
    
    if (loanAmount !== 0 && numPayments !== 0 && interest !== 0) {
        var payment = paymentCalc().toFixed(2);
        $('#payment').val(payment);

//        alert('payment = ' + payment);
    }
    
    
    
});