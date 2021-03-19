// ------------------------------------------------------------------------------------------//
//-- Creates the what makes up a Ben Thomas-Gill progress sliders ---//
// ------------------------------------------------------------------------------------------//

$(document).ready(function() {
    var progressSelector = $(".port-progress-wrap");
    progressSelector.each(function() {
        var getPercent = $(this).attr("data-progresspercent");
        var getSpeed = parseInt($(this).attr("data-speed"));
        var getColor = $(this).attr("data-color");
        var getHeight = $(this).attr("data-height");
        var getWidth = $(this).attr("data-width");
        $(this).css({ "height": getHeight, "width": getWidth });
        $(this).find(".port-progress-bar").css({ "background-color": "#" + getColor }).animate({ width: getPercent + '%' }, getSpeed)
    });
});

// ------------------------------------------------------------------------------------------//
//-------------------------- Random fact generator and modal-------------------//
// ------------------------------------------------------------------------------------------//

function loadFact() {
    loadingAnimaton();
    setTimeout(function() { facts(); }, 3000);
}

function loadingAnimaton() {
    document.getElementById('output').innerHTML = "<h3 class='loadingGlow'>Loading</h3>";
};

function facts() {
    const facts = ["Lacrosse is my favourite sport.", 
                            "I'm originally from Adelaide", 
                            "I'm 6 foot 2 inches which is super handy for reaching things up high" , 
                            "My favourite holiday was to Japan", 
                            "I collect retro video games", 
                            "I have greyhound named Lily", 
                            "My favourite sports team is the Geelong Cats",
                            "I used to play in a bunch of rock bands on the east coast",
                            "I live in Victoria Park, WA",
                            "I'm left handed",
                            "I love Mexican food",
                            "My favourite meal is breakfast",
                            "I can only click my fingers on one hand",
                            "My starting Pokemon is always Bulbasaur",
                            "I ride a motorcycle",
                            ];
    const random = Math.floor(Math.random() * facts.length);
    document.getElementById("output").innerHTML = facts[random];
};
