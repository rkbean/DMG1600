/*jslint devel: true */
/*global $ */


function makePhrase() {
    var words1 = ["24/7", "multi-tier", "30,000 foot", "B-to-B", "win-win"];
    var words2 = ["empowered", "value-added", "oriented", "focused", "aligned"];
    var words3 = ["process", "solution", "tipping-point", "strategy", "vision"];
    var rnd1 = Math.floor(Math.random() * words1.length);
    var rnd2 = Math.floor(Math.random() * words2.length);
    var rnd3 = Math.floor(Math.random() * words3.length);
    
    var phrase = words1[rnd1] + " " + words2[rnd2] + " " + words3[rnd3];
    return phrase;
    

}

$('#clickme').on('click', function() {
    var testme = makePhrase();

    $('.phrasepar').text(testme);
});