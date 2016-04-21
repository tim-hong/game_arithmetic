/**
 * Created by Divine on 4/21/2016.
 */
id = 0;
dats = ["#posgame", "#neggame", "#posterm", "#negterm"]
inps = ["#pginp", "#nginp", "#ptinp", "#ntinp"]
posgames = [];
neggames = [];
posterms = [];
negterms = [];
entries = [posgames,neggames,posterms,negterms]
termdict = [games,games,terms, terms]
function ent(n) {
    txt = $(inps[n]).val();
    if($.inArray(txt, termdict[n]) == -1) {
        $("#message").text(txt + " is not a valid value.");
        return;
    }
    //want to save id of games instead
    if( n < 2) {
        if($.inArray(games.indexOf(txt), entries[n]) != -1) {
            $("#message").text(txt + " has already been added.");
            return;
        }
        entries[n][id.toString()] = games.indexOf(txt);
    }
    else {
        if($.inArray(txt, entries[n]) != -1) {
            $("#message").text(txt + " has already been added.");
            return;
        }
        entries[n][id.toString()] = txt;
    }
    m = txt
    if(m.length > 20) {
        m = txt.substring(0,17) + '...';
    }
    $(dats[n]).append('<div class="entry" id ="'+id.toString() +'"><p>'+m+'<button class="btn btn-default entb btn-danger" onclick="rmv('+ id + ',' + n + ')">x</button></p></div>').children(':last').hide().fadeIn(500);
    id++;
    $("#message").text(txt + " has been added.");
}

function rmv(id,n) {
    old = entries[n][id.toString()];
    if( n < 2) {
        old = games[entries[n][id.toString()]];
    }
    delete entries[n][id.toString()];
    $("#" + id.toString()).fadeOut("normal",     function() {
        $(this).remove();
    });
    $("#message").text(old + " has been removed");
}

function srch() {
	pgames = posgames.filter(x => x !== undefined)
	ngames = neggames.filter(x => x !== undefined)
	pterms = posterms.filter(x => x !== undefined)
	nterms = negterms.filter(x => x !== undefined)
	var url = '/similar?pg=' + JSON.stringify(pgames) + '&ng='+JSON.stringify(ngames) + '&pt='+JSON.stringify(pterms) + '&nt='+JSON.stringify(nterms);
    window.location.href = url;
}
