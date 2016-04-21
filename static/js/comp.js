//make autocompletes
var nt = document.getElementById("ntinp");
new Awesomplete(nt, {list: terms, maxItems: 20});

var pt = document.getElementById("ptinp");
new Awesomplete(pt, {list: terms, maxItems: 20});

var ng = document.getElementById("nginp");
new Awesomplete(ng, {list: games, maxItems: 20});

var pg = document.getElementById("pginp");
new Awesomplete(pg, {list: games, maxItems: 20});