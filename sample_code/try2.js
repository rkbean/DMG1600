/*jslint devel: true */
/*global $ */
"use strict";

$(".datetimeinput").bootstrapMaterialDatePicker({
    format: "DD-MM-YYYY  HH:mm"
});

function makePhrase() {
    var words1 = ["24/7", "multi-tier", "30,000 foot", "B-to-B", "win-win"],
        words2 = ["empowered", "value-added", "oriented", "focused", "aligned"],
        words3 = ["process", "solution", "tipping-point", "strategy", "vision"],
        rnd1 = Math.floor(Math.random() * words1.length),
        rnd2 = Math.floor(Math.random() * words2.length),
        rnd3 = Math.floor(Math.random() * words3.length),
    
        phrase = words1[rnd1] + " " + words2[rnd2] + " " + words3[rnd3];
    return phrase;
}

// var cbNames = ["empowered", "value-added", "oriented", "focused", "aligned"];

function newClickMe() {
    alert(this.name + "has been clicked");
}

$('#clickme').on('click', function () {
    var testme = makePhrase();
    $('.phrasepar').text(testme);
});
$('#box1').on('click', function () {
    alert('we have selected the checkbox');
});
$('#button2').on('click', function () {
    var boxName = "box2",
        newcb = '<input type="checkbox" id=' + boxName +  ' class="new1" value=' + boxName + '><label> new check box</label>';
    $('.cb_div').append(newcb);
    $('#' + boxName).bind('click', newClickMe);
    
});
