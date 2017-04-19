/*jslint devel: true */
/*global $ */


var loanAmount = 0,
    interest = 0,
    numPayments = 0;

function paymentCalc() {
    var effectiveInterest = interest / 100 / 12,
        den = Math.pow(1 + effectiveInterest, -numPayments),
        payment = loanAmount * (effectiveInterest / (1 - den));
    return payment;
}

$('#calculate').on('click', function () {
    $('.myphrase').hide();
    var msg = "";
    if ($.isNumeric($('#loanAmount').val()) === false) {
        msg += 'The Loan Amount is not a valid numeric';
    } else {
        loanAmount = $('#loanAmount').val();
    }
    if ($.isNumeric($('#numMonths').val()) === false) {
        if (msg.length > 0)
            msg += '<br>';
        msg += 'The Number of months must be a number'
    } else {
        numPayments = $('#numMonths').val();
    }
    if ($.isNumeric($('#interest').val()) === false) {
        if (msg.length > 0)
            msg += '<br>';
        msg += 'The interest must be a number';
    } else {
        interest = $('#interest').val();
    }
    
    if (msg.length > 0) {
        $('.errorMsg').html(msg);
        $('.myphrase').show();
        
    } else {
//    if (loanAmount !== 0 && numPayments !== 0 && interest !== 0) {
        var payment = paymentCalc().toFixed(2);
        $('#payment').val(payment);

//        alert('payment = ' + payment);
    }
    
    
    
});