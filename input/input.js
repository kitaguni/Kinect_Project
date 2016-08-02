(function() {
    var milkcocoa = new MilkCocoa("https://<<maxiqvq10o4>>.mlkcca.com");
    var ds = milkcocoa.dataStore("somthing");
    $(document).keydown(function(e) {
        if (e.keyCode == 38) {
            ds.send({
                arrow: "up"
            });
        } else if (e.keyCode == 40) {
            ds.send({
                arrow: "down"
            });
        } else if (e.keyCode == 37) {
            ds.send({
                arrow: "left"
            });
        } else if (keyCode == 38) {
            ds.send({
                arrow: "right"
            });
        } else {
            console.log("I'm not arrow!");
        }
    });
}());
