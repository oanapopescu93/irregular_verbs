var verbs = [
	{id: "1", first_form: "befehlen", second_form: "befahl", third_form: "befohlen", translate: "to command", aux: "haben"},
	{id: "1", first_form: "beginnen", second_form: "begann", third_form: "begonnen", translate: "to begin", aux: "haben"},
	{id: "1", first_form: "beissen", second_form: "biss", third_form: "gebissen", translate: "to bite", aux: "haben"},
	{id: "1", first_form: "bergen", second_form: "barg", third_form: "geborgen", translate: "to rescue", aux: "haben"},
	{id: "1", first_form: "biegen", second_form: "bog", third_form: "gebogen", translate: "to bend", aux: "haben"},
	{id: "2", first_form: "bieten", second_form: "bot", third_form: "geboten", translate: "to offer", aux: "haben"},
	{id: "2", first_form: "binden", second_form: "band", third_form: "gebunden", translate: "to bind", aux: "haben"},
	{id: "2", first_form: "bitten", second_form: "bat", third_form: "gebeten", translate: "to request", aux: "haben"},
	{id: "2", first_form: "blasen", second_form: "blies", third_form: "geblasen", translate: "to blow", aux: "haben"},
	{id: "2", first_form: "bleiben", second_form: "blieb", third_form: "geblieben", translate: "to remain", aux: "haben"},
	{id: "3", first_form: "braten", second_form: "briet", third_form: "gebraten", translate: "to fry", aux: "haben"},
	{id: "3", first_form: "brechen", second_form: "brach", third_form: "gebrochen", translate: "to break", aux: "haben"},
	{id: "3", first_form: "brennen", second_form: "brannte", third_form: "gebrannt", translate: "to burn", aux: "haben"},
	{id: "3", first_form: "bringen", second_form: "brachte", third_form: "gebracht", translate: "to bring", aux: "haben"},
	{id: "3", first_form: "denken", second_form: "dachte", third_form: "gedacht", translate: "to think", aux: "haben"},
	{id: "4", first_form: "dreschen", second_form: "drosch", third_form: "gedroschen", translate: "to thrash", aux: "haben"},
	{id: "4", first_form: "dringen", second_form: "drang", third_form: "gedrungen", translate: "to get through", aux: "haben"},
	{id: "4", first_form: "durfen", second_form: "durfte", third_form: "gedurft", translate: "to be allowed (may)", aux: "haben"},
	{id: "4", first_form: "empfehlen", second_form: "empfahl", third_form: "empfohlen", translate: "to recommend", aux: "haben"},
	{id: "4", first_form: "erschrecken", second_form: "erschrak", third_form: "erschrocken", translate: "to frighten", aux: "haben"},
	{id: "5", first_form: "essen", second_form: "ass", third_form: "gegessen", translate: "to eat", aux: "haben"},
	{id: "5", first_form: "erwagen", second_form: "erwog", third_form: "erwogen", translate: "to consider", aux: "haben"},
	{id: "5", first_form: "fahren", second_form: "fuhr", third_form: "gefahren", translate: "to drive", aux: "haben"},
	{id: "5", first_form: "fallen", second_form: "fiel", third_form: "gefallen", translate: "to fall", aux: "haben"},
	{id: "5", first_form: "fangen", second_form: "fing", third_form: "gefangen", translate: "to catch", aux: "haben"},
	{id: "6", first_form: "finden", second_form: "fand", third_form: "gefunden", translate: "to find", aux: "haben"},
	{id: "6", first_form: "fliegen", second_form: "flog", third_form: "geflogen", translate: "to fly", aux: "haben"},
	{id: "6", first_form: "fliehen", second_form: "floh", third_form: "geflohen", translate: "to flee", aux: "haben"},
	{id: "6", first_form: "fliessen", second_form: "floss", third_form: "geflossen", translate: "to flow", aux: "haben"},
	{id: "6", first_form: "fressen", second_form: "frass", third_form: "gefressen", translate: "to devour", aux: "haben"},
	{id: "7", first_form: "frieren", second_form: "fror", third_form: "gefroren", translate: "to freeze", aux: "haben"},
	{id: "7", first_form: "garen", second_form: "gor", third_form: "gegoren", translate: "to ferment", aux: "haben"},
	{id: "7", first_form: "gebaren", second_form: "gebar", third_form: "geboren", translate: "to bear", aux: "haben"},
	{id: "7", first_form: "geben", second_form: "gab", third_form: "gegeben", translate: "to give", aux: "haben"},
	{id: "7", first_form: "gedeihen", second_form: "gedieh", third_form: "gediehen", translate: "to thrive", aux: "haben"},
	{id: "8", first_form: "gehen", second_form: "ging", third_form: "gegangen", translate: "to go", aux: "haben"},
	{id: "8", first_form: "gelingen", second_form: "gelang", third_form: "gelungen", translate: "to be successful", aux: "haben"},
	{id: "8", first_form: "gelten", second_form: "galt", third_form: "gegolten", translate: "to pertain", aux: "haben"},
	{id: "8", first_form: "genesen", second_form: "genas", third_form: "genesen", translate: "to recover", aux: "haben"},
	{id: "8", first_form: "geniessen", second_form: "genoss", third_form: "genossen", translate: "to enjoy", aux: "haben"},
	{id: "9", first_form: "geschehen", second_form: "geschah", third_form: "geschehen", translate: "to happen", aux: "haben"},
	{id: "9", first_form: "gewinnen", second_form: "gewann", third_form: "gewonnen", translate: "to win", aux: "haben"},
	{id: "9", first_form: "giessen", second_form: "goss", third_form: "gegossen", translate: "to pour", aux: "haben"},
	{id: "9", first_form: "gleichen", second_form: "glich", third_form: "geglichen", translate: "to resemble", aux: "haben"},
	{id: "9", first_form: "gleiten", second_form: "glitt", third_form: "geglitten", translate: "to glide", aux: "haben"},
	{id: "10", first_form: "graben", second_form: "grub", third_form: "gegraben", translate: "to dig", aux: "haben"},
	{id: "10", first_form: "greifen", second_form: "griff", third_form: "gegriffen", translate: "to grasp", aux: "haben"},
	{id: "10", first_form: "haben", second_form: "hatte", third_form: "gehabt", translate: "to have", aux: "haben"},
	{id: "10", first_form: "halten", second_form: "hielt", third_form: "gehalten", translate: "to hold, to stop", aux: "haben"},
	{id: "10", first_form: "hangen", second_form: "hing", third_form: "gehangen", translate: "to hang", aux: "haben"},
	{id: "11", first_form: "hauen", second_form: "haute", third_form: "gehauen", translate: "to hit", aux: "haben"},
	{id: "11", first_form: "heben", second_form: "hob", third_form: "gehoben", translate: "to lift", aux: "haben"},
	{id: "11", first_form: "heissen", second_form: "hiess", third_form: "geheissen", translate: "to be called", aux: "haben"},
	{id: "11", first_form: "helfen", second_form: "half", third_form: "geholfen", translate: "to help", aux: "haben"},
	{id: "11", first_form: "kennen", second_form: "kannte", third_form: "gekannt", translate: "to know", aux: "haben"},
	{id: "12", first_form: "klingen", second_form: "klang", third_form: "geklungen", translate: "to sound, to ring", aux: "haben"},
	{id: "12", first_form: "kneifen", second_form: "kniff", third_form: "gekniffen", translate: "to pinch", aux: "haben"},
	{id: "12", first_form: "kommen", second_form: "kam", third_form: "gekommen", translate: "to come", aux: "haben"},
	{id: "12", first_form: "konnen", second_form: "konnte", third_form: "gekonnt", translate: "to can", aux: "haben"},
	{id: "12", first_form: "kriechen", second_form: "kroch", third_form: "gekrochen", translate: "to crawl", aux: "haben"},
	{id: "13", first_form: "laden", second_form: "lud", third_form: "geladen", translate: "to load", aux: "haben"},
	{id: "13", first_form: "lassen", second_form: "liess", third_form: "gelassen", translate: "to let", aux: "haben"},
	{id: "13", first_form: "laufen", second_form: "lief", third_form: "gelaufen", translate: "to run, walk", aux: "haben"},
	{id: "13", first_form: "leiden", second_form: "litt", third_form: "gelitten", translate: "to suffer", aux: "haben"},
	{id: "13", first_form: "leihen", second_form: "lieh", third_form: "geliehen", translate: "to lend, to borrow", aux: "haben"},
	{id: "14", first_form: "lesen", second_form: "las", third_form: "gelesen", translate: "to read", aux: "haben"},
	{id: "14", first_form: "liegen", second_form: "lag", third_form: "gelegen", translate: "to lie down", aux: "haben"},
	{id: "14", first_form: "lugen", second_form: "log", third_form: "gelogen", translate: "to lie", aux: "haben"},
	{id: "14", first_form: "meiden", second_form: "mied", third_form: "gemieden", translate: "to avoid", aux: "haben"},
	{id: "14", first_form: "messen", second_form: "mass", third_form: "gemessen", translate: "to measure", aux: "haben"},
	{id: "15", first_form: "misslingen", second_form: "misslang", third_form: "misslungen", translate: "to fail", aux: "haben"},
	{id: "15", first_form: "mogen", second_form: "mochte", third_form: "gemocht", translate: "to like", aux: "haben"},
	{id: "15", first_form: "mussen", second_form: "musste", third_form: "gemusst", translate: "to have to (must)", aux: "haben"},
	{id: "15", first_form: "nehmen", second_form: "nahm", third_form: "genommen", translate: "to take", aux: "haben"},
	{id: "15", first_form: "nennen", second_form: "nannte", third_form: "genannt", translate: "to call, name", aux: "haben"},
	{id: "16", first_form: "pfeifen", second_form: "pfiff", third_form: "gepfiffen", translate: "to whistle", aux: "haben"},
	{id: "16", first_form: "preisen", second_form: "pries", third_form: "gepriesen", translate: "to praise", aux: "haben"},
	{id: "16", first_form: "quellen", second_form: "quoll", third_form: "gequollen", translate: "to gush", aux: "haben"},
	{id: "16", first_form: "raten", second_form: "riet", third_form: "geraten", translate: "to guess, to advise", aux: "haben"},
	{id: "16", first_form: "reiben", second_form: "rieb", third_form: "gerieben", translate: "to rub", aux: "haben"},
	{id: "17", first_form: "reissen", second_form: "riss", third_form: "gerissen", translate: "to rip", aux: "haben"},
	{id: "17", first_form: "reiten", second_form: "ritt", third_form: "geritten", translate: "to ride", aux: "haben"},
	{id: "17", first_form: "rennen", second_form: "rannte", third_form: "gerannt", translate: "to run, race", aux: "haben"},
	{id: "17", first_form: "riechen", second_form: "roch", third_form: "gerochen", translate: "to smell", aux: "haben"},
	{id: "17", first_form: "ringen", second_form: "rang", third_form: "gerungen", translate: "to struggle", aux: "haben"},
	{id: "17", first_form: "rinnen", second_form: "rann", third_form: "geronnen", translate: "to trickle", aux: "haben"},
	{id: "18", first_form: "rufen", second_form: "rief", third_form: "gerufen", translate: "to call", aux: "haben"},
	{id: "18", first_form: "saufen", second_form: "soff", third_form: "gesoffen", translate: "to guzzle, to tipple", aux: "haben"},
	{id: "18", first_form: "schaffen", second_form: "schuf", third_form: "geschaffen", translate: "to create, to accomplish", aux: "haben"},
	{id: "18", first_form: "scheiden", second_form: "schied", third_form: "geschieden", translate: "to separate", aux: "haben"},
	{id: "18", first_form: "scheinen", second_form: "schien", third_form: "geschienen", translate: "to shine, to seem", aux: "haben"},
	{id: "19", first_form: "schelten", second_form: "schalt", third_form: "gescholten", translate: "to scold", aux: "haben"},
	{id: "19", first_form: "scheren", second_form: "schor", third_form: "geschoren", translate: "to shear", aux: "haben"},
	{id: "19", first_form: "schieben", second_form: "schob", third_form: "geschoben", translate: "to push", aux: "haben"},
	{id: "19", first_form: "schiessen", second_form: "schoss", third_form: "geschossen", translate: "to shoot", aux: "haben"},
	{id: "19", first_form: "schinden", second_form: "schindete", third_form: "geschunden", translate: "to overwork [someone]", aux: "haben"},
	{id: "20", first_form: "schlafen", second_form: "schlief", third_form: "geschlafen", translate: "to sleep", aux: "haben"},
	{id: "20", first_form: "schlagen", second_form: "schlug", third_form: "geschlagen", translate: "to hit, strike", aux: "haben"},
	{id: "20", first_form: "schleichen", second_form: "schlich", third_form: "geschlichen", translate: "to sneak", aux: "haben"},
	{id: "20", first_form: "schliessen", second_form: "schloss", third_form: "geschlossen", translate: "to close", aux: "haben"},
	{id: "20", first_form: "schlingen", second_form: "schlang", third_form: "geschlungen", translate: "to loop, to gulp", aux: "haben"},
	{id: "21", first_form: "schmeissen", second_form: "schmiss", third_form: "geschmissen", translate: "to throw, fling", aux: "haben"},
	{id: "21", first_form: "schmelzen", second_form: "schmolz", third_form: "geschmolzen", translate: "to melt", aux: "haben"},
	{id: "21", first_form: "schneiden", second_form: "schnitt", third_form: "geschnitten", translate: "to cut", aux: "haben"},
	{id: "21", first_form: "schreiben", second_form: "schrieb", third_form: "geschrieben", translate: "to write", aux: "haben"},
	{id: "21", first_form: "schreien", second_form: "schrie", third_form: "geschrien", translate: "to scream, cry", aux: "haben"},
	{id: "22", first_form: "schreiten", second_form: "schritt", third_form: "geschritten", translate: "to stride, step", aux: "haben"},
	{id: "22", first_form: "schweigen", second_form: "schwieg", third_form: "geschwiegen", translate: "to be silent", aux: "haben"},
	{id: "22", first_form: "schwellen", second_form: "schwoll", third_form: "geschwollen", translate: "to swell", aux: "haben"},
	{id: "22", first_form: "schwimmen", second_form: "schwamm", third_form: "geschwommen", translate: "to swim", aux: "haben"},
	{id: "22", first_form: "schwinden", second_form: "schwand", third_form: "geschwunden", translate: "to fade, disappear", aux: "haben"},
	{id: "23", first_form: "schwingen", second_form: "schwang", third_form: "geschwungen", translate: "to sway, to wield", aux: "haben"},
	{id: "23", first_form: "schworen", second_form: "schwor", third_form: "geschworen", translate: "to swear", aux: "haben"},
	{id: "23", first_form: "sehen", second_form: "sah", third_form: "gesehen", translate: "to see", aux: "haben"},
	{id: "23", first_form: "sein", second_form: "war", third_form: "gewesen", translate: "to be", aux: "haben"},
	{id: "23", first_form: "singen", second_form: "sang", third_form: "gesungen", translate: "to sing", aux: "haben"},
	{id: "24", first_form: "sinken", second_form: "sank", third_form: "gesunken", translate: "to sink", aux: "haben"},
	{id: "24", first_form: "sinnen", second_form: "sann", third_form: "gesonnen", translate: "to ponder", aux: "haben"},
	{id: "24", first_form: "sitzen", second_form: "sass", third_form: "gesessen", translate: "to sit", aux: "haben"},
	{id: "24", first_form: "sollen", second_form: "sollte", third_form: "gesollt", translate: "should", aux: "haben"},
	{id: "24", first_form: "speien", second_form: "spie", third_form: "gespien", translate: "to spit", aux: "haben"},
	{id: "25", first_form: "spinnen", second_form: "spann", third_form: "gesponnen", translate: "to spin, to be crazy", aux: "haben"},
	{id: "25", first_form: "sprechen", second_form: "sprach", third_form: "gesprochen", translate: "to speak", aux: "haben"},
	{id: "25", first_form: "spriessen", second_form: "spross", third_form: "gesprossen", translate: "to sprout", aux: "haben"},
	{id: "25", first_form: "springen", second_form: "sprang", third_form: "gesprungen", translate: "to jump", aux: "haben"},
	{id: "25", first_form: "stechen", second_form: "stach", third_form: "gestochen", translate: "to stab, prick", aux: "haben"},
	{id: "26", first_form: "stehen", second_form: "stand", third_form: "gestanden", translate: "to stand", aux: "haben"},
	{id: "26", first_form: "stehlen", second_form: "stahl", third_form: "gestohlen", translate: "to steal", aux: "haben"},
	{id: "26", first_form: "steigen", second_form: "stieg", third_form: "gestiegen", translate: "to climb, mount", aux: "haben"},
	{id: "26", first_form: "sterben", second_form: "starb", third_form: "gestorben", translate: "to die", aux: "haben"},
	{id: "26", first_form: "streichen", second_form: "strich", third_form: "gestrichen", translate: "to cancel, delete", aux: "haben"},
	{id: "27", first_form: "streiten", second_form: "stritt", third_form: "gestritten", translate: "to quarrel", aux: "haben"},
	{id: "27", first_form: "tragen", second_form: "trug", third_form: "getragen", translate: "to carry, to wear", aux: "haben"},
	{id: "27", first_form: "treffen", second_form: "traf", third_form: "getroffen", translate: "to meet", aux: "haben"},
	{id: "27", first_form: "treiben", second_form: "trieb", third_form: "getrieben", translate: "to compel, drive", aux: "haben"},
	{id: "27", first_form: "treten", second_form: "trat", third_form: "getreten", translate: "to step", aux: "haben"},
	{id: "28", first_form: "trinken", second_form: "trank", third_form: "getrunken", translate: "to drink", aux: "haben"},
	{id: "28", first_form: "trugen", second_form: "trog", third_form: "getrogen", translate: "to deceive", aux: "haben"},
	{id: "28", first_form: "tun", second_form: "tat", third_form: "getan", translate: "to do", aux: "haben"},
	{id: "28", first_form: "verderben", second_form: "verdarb", third_form: "verdorben", translate: "to spoil", aux: "haben"},
	{id: "28", first_form: "vergessen", second_form: "vergass", third_form: "vergessen", translate: "to forget", aux: "haben"},
	{id: "29", first_form: "verlieren", second_form: "verlor", third_form: "verloren", translate: "to lose", aux: "haben"},
	{id: "29", first_form: "wachsen", second_form: "wuchs", third_form: "gewachsen", translate: "to grow", aux: "haben"},
	{id: "29", first_form: "waschen", second_form: "wusch", third_form: "gewaschen", translate: "to wash", aux: "haben"},
	{id: "29", first_form: "weichen", second_form: "wich", third_form: "gewichen", translate: "to yield, give way", aux: "haben"},
	{id: "29", first_form: "weisen", second_form: "wies", third_form: "gewiesen", translate: "to indicate", aux: "haben"},
	{id: "30", first_form: "werben", second_form: "warb", third_form: "geworben", translate: "to advertise", aux: "haben"},
	{id: "30", first_form: "werden", second_form: "wurde", third_form: "geworden", translate: "to become", aux: "haben"},
	{id: "30", first_form: "werfen", second_form: "warf", third_form: "geworfen", translate: "to throw", aux: "haben"},
	{id: "30", first_form: "wiegen", second_form: "wog", third_form: "gewogen", translate: "to weigh, to cradle", aux: "haben"},
	{id: "30", first_form: "wissen", second_form: "wusste", third_form: "gewusst", translate: "to know (a fact)", aux: "haben"},
	{id: "31", first_form: "wollen", second_form: "wollte", third_form: "gewollt", translate: "to want", aux: "haben"},
	{id: "31", first_form: "wringen", second_form: "wrang", third_form: "gewrungen", translate: "to wring", aux: "haben"},
	{id: "31", first_form: "ziehen", second_form: "zog", third_form: "gezogen", translate: "to pull, to move", aux: "haben"},
	{id: "31", first_form: "zwingen", second_form: "zwang", third_form: "gezwungen", translate: "to force", aux: "haben"},
];
