(function() {
    var milkcocoa = new MilkCocoa('maxiqvq10o4.mlkcca.com');
    var ds = milkcocoa.dataStore("something");
    $(document).onkeydown(function(e) {
        if (e.keyCode == 38) {
            ds.send({arrow: "up"});

        } else if (e.keyCode == 40) {
            ds.send({arrow: "down"});

        } else if (e.keyCode == 37) {
            ds.send({arrow: "left"});

        } else if (e.keyCode == 39) {
            ds.send({arrow:"right"});

        } else {
            console.log("I'm not arrow!");
        }
    });
}());
