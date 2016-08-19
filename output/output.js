(function() {
    var milkcocoa = new MilkCocoa('maxiqvq10o4.mlkcca.com');
    var ds = milkcocoa.dataStore("something");
    ds.on("send", function(e) {
        $("#arrow-img").attr("src", "img/arrow-" + e.arrow + ".jpeg");
    });
}());
