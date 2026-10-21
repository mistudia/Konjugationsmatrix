/* ===========================================================
   MISTUDIA GERMAN TENSE TRAINER
   data-german.js
=========================================================== */

const languageConfig = {

    code: "de",
    name: "Deutsch",

    pronouns: [
        "ich",
        "du",
        "er",
        "wir",
        "ihr",
        "sie"
    ],

    pronounLabels: [
        "ich",
        "du",
        "er/sie/es",
        "wir",
        "ihr",
        "sie (plural)"
    ],

    pronounAccepted: [
        ["ich"],
        ["du"],
        ["er", "sie", "es", "er/sie/es"],
        ["wir"],
        ["ihr"],
        ["sie"]
    ],


    mixedPronouns: {

        3: ["ich", "du", "er"],

        6: [
            "ich",
            "du",
            "er",
            "wir",
            "ihr",
            "sie"
        ],

        8: [
            "ich",
            "du",
            "er",
            "sie",
            "es",
            "wir",
            "ihr",
            "sie"
        ]

    }

};


/* ===========================================================
   SIGNAL WORDS
=========================================================== */

const signalWords = [

    "",

    "immer",
    "nie",
    "jetzt",
    "schon einmal",
    "noch nie",
    "heute bereits",
    "gestern",
    "damals",
    "letztes Jahr",
    "vorher",
    "nachdem",
    "damals bereits",
    "morgen",
    "nächste Woche",
    "wahrscheinlich",
    "bis dahin",
    "bis morgen",
    "bis Freitag"

];


/* ===========================================================
   HELPERS
=========================================================== */

const six = value =>
    Array(6).fill(value);


/* ===========================================================
   VERB POOL
=========================================================== */

const verbPool = [

{
    infinitive: "sein",
    type: "irregular",

    forms: {

        praesens: [
            "bin",
            "bist",
            "ist",
            "sind",
            "seid",
            "sind"
        ],

        perfekt: [
            "bin gewesen",
            "bist gewesen",
            "ist gewesen",
            "sind gewesen",
            "seid gewesen",
            "sind gewesen"
        ],

        praeteritum: [
            "war",
            "warst",
            "war",
            "waren",
            "wart",
            "waren"
        ],

        plusquamperfekt: [
            "war gewesen",
            "warst gewesen",
            "war gewesen",
            "waren gewesen",
            "wart gewesen",
            "waren gewesen"
        ],

        futur1: [
            "werde sein",
            "wirst sein",
            "wird sein",
            "werden sein",
            "werdet sein",
            "werden sein"
        ],

        futur2: [
            "werde gewesen sein",
            "wirst gewesen sein",
            "wird gewesen sein",
            "werden gewesen sein",
            "werdet gewesen sein",
            "werden gewesen sein"
        ]

    }

},

{
    infinitive: "haben",
    type: "irregular",

    forms: {

        praesens: [
            "habe",
            "hast",
            "hat",
            "haben",
            "habt",
            "haben"
        ],

        perfekt: [
            "habe gehabt",
            "hast gehabt",
            "hat gehabt",
            "haben gehabt",
            "habt gehabt",
            "haben gehabt"
        ],

        praeteritum: [
            "hatte",
            "hattest",
            "hatte",
            "hatten",
            "hattet",
            "hatten"
        ],

        plusquamperfekt: [
            "hatte gehabt",
            "hattest gehabt",
            "hatte gehabt",
            "hatten gehabt",
            "hattet gehabt",
            "hatten gehabt"
        ],

        futur1: [
            "werde haben",
            "wirst haben",
            "wird haben",
            "werden haben",
            "werdet haben",
            "werden haben"
        ],

        futur2: [
            "werde gehabt haben",
            "wirst gehabt haben",
            "wird gehabt haben",
            "werden gehabt haben",
            "werdet gehabt haben",
            "werden gehabt haben"
        ]

    }

},

{
    infinitive: "werden",
    type: "irregular",

    forms: {

        praesens: [
            "werde",
            "wirst",
            "wird",
            "werden",
            "werdet",
            "werden"
        ],

        perfekt: [
            "bin geworden",
            "bist geworden",
            "ist geworden",
            "sind geworden",
            "seid geworden",
            "sind geworden"
        ],

        praeteritum: [
            "wurde",
            "wurdest",
            "wurde",
            "wurden",
            "wurdet",
            "wurden"
        ],

        plusquamperfekt: [
            "war geworden",
            "warst geworden",
            "war geworden",
            "waren geworden",
            "wart geworden",
            "waren geworden"
        ],

        futur1: [
            "werde werden",
            "wirst werden",
            "wird werden",
            "werden werden",
            "werdet werden",
            "werden werden"
        ],

        futur2: [
            "werde geworden sein",
            "wirst geworden sein",
            "wird geworden sein",
            "werden geworden sein",
            "werdet geworden sein",
            "werden geworden sein"
        ]

    }

},

{
    infinitive: "können",
    type: "irregular",

    forms: {

        praesens: [
            "kann",
            "kannst",
            "kann",
            "können",
            "könnt",
            "können"
        ],

        perfekt: [
            "habe gekonnt",
            "hast gekonnt",
            "hat gekonnt",
            "haben gekonnt",
            "habt gekonnt",
            "haben gekonnt"
        ],

        praeteritum: [
            "konnte",
            "konntest",
            "konnte",
            "konnten",
            "konntet",
            "konnten"
        ],

        plusquamperfekt: [
            "hatte gekonnt",
            "hattest gekonnt",
            "hatte gekonnt",
            "hatten gekonnt",
            "hattet gekonnt",
            "hatten gekonnt"
        ],

        futur1: [
            "werde können",
            "wirst können",
            "wird können",
            "werden können",
            "werdet können",
            "werden können"
        ],

        futur2: [
            "werde gekonnt haben",
            "wirst gekonnt haben",
            "wird gekonnt haben",
            "werden gekonnt haben",
            "werdet gekonnt haben",
            "werden gekonnt haben"
        ]

    }

},

{
    infinitive: "müssen",
    type: "irregular",

    forms: {

        praesens: [
            "muss",
            "musst",
            "muss",
            "müssen",
            "müsst",
            "müssen"
        ],

        perfekt: [
            "habe gemusst",
            "hast gemusst",
            "hat gemusst",
            "haben gemusst",
            "habt gemusst",
            "haben gemusst"
        ],

        praeteritum: [
            "musste",
            "musstest",
            "musste",
            "mussten",
            "musstet",
            "mussten"
        ],

        plusquamperfekt: [
            "hatte gemusst",
            "hattest gemusst",
            "hatte gemusst",
            "hatten gemusst",
            "hattet gemusst",
            "hatten gemusst"
        ],

        futur1: [
            "werde müssen",
            "wirst müssen",
            "wird müssen",
            "werden müssen",
            "werdet müssen",
            "werden müssen"
        ],

        futur2: [
            "werde gemusst haben",
            "wirst gemusst haben",
            "wird gemusst haben",
            "werden gemusst haben",
            "werdet gemusst haben",
            "werden gemusst haben"
        ]

    }

},

{
    infinitive: "sollen",
    type: "irregular",

    forms: {

        praesens: [
            "soll",
            "sollst",
            "soll",
            "sollen",
            "sollt",
            "sollen"
        ],

        perfekt: [
            "habe gesollt",
            "hast gesollt",
            "hat gesollt",
            "haben gesollt",
            "habt gesollt",
            "haben gesollt"
        ],

        praeteritum: [
            "sollte",
            "solltest",
            "sollte",
            "sollten",
            "solltet",
            "sollten"
        ],

        plusquamperfekt: [
            "hatte gesollt",
            "hattest gesollt",
            "hatte gesollt",
            "hatten gesollt",
            "hattet gesollt",
            "hatten gesollt"
        ],

        futur1: [
            "werde sollen",
            "wirst sollen",
            "wird sollen",
            "werden sollen",
            "werdet sollen",
            "werden sollen"
        ],

        futur2: [
            "werde gesollt haben",
            "wirst gesollt haben",
            "wird gesollt haben",
            "werden gesollt haben",
            "werdet gesollt haben",
            "werden gesollt haben"
        ]

    }

},

{
    infinitive: "wollen",
    type: "irregular",

    forms: {

        praesens: [
            "will",
            "willst",
            "will",
            "wollen",
            "wollt",
            "wollen"
        ],

        perfekt: [
            "habe gewollt",
            "hast gewollt",
            "hat gewollt",
            "haben gewollt",
            "habt gewollt",
            "haben gewollt"
        ],

        praeteritum: [
            "wollte",
            "wolltest",
            "wollte",
            "wollten",
            "wolltet",
            "wollten"
        ],

        plusquamperfekt: [
            "hatte gewollt",
            "hattest gewollt",
            "hatte gewollt",
            "hatten gewollt",
            "hattet gewollt",
            "hatten gewollt"
        ],

        futur1: [
            "werde wollen",
            "wirst wollen",
            "wird wollen",
            "werden wollen",
            "werdet wollen",
            "werden wollen"
        ],

        futur2: [
            "werde gewollt haben",
            "wirst gewollt haben",
            "wird gewollt haben",
            "werden gewollt haben",
            "werdet gewollt haben",
            "werden gewollt haben"
        ]

    }

},

{
    infinitive: "dürfen",
    type: "irregular",

    forms: {

        praesens: [
            "darf",
            "darfst",
            "darf",
            "dürfen",
            "dürft",
            "dürfen"
        ],

        perfekt: [
            "habe gedurft",
            "hast gedurft",
            "hat gedurft",
            "haben gedurft",
            "habt gedurft",
            "haben gedurft"
        ],

        praeteritum: [
            "durfte",
            "durftest",
            "durfte",
            "durften",
            "durftet",
            "durften"
        ],

        plusquamperfekt: [
            "hatte gedurft",
            "hattest gedurft",
            "hatte gedurft",
            "hatten gedurft",
            "hattet gedurft",
            "hatten gedurft"
        ],

        futur1: [
            "werde dürfen",
            "wirst dürfen",
            "wird dürfen",
            "werden dürfen",
            "werdet dürfen",
            "werden dürfen"
        ],

        futur2: [
            "werde gedurft haben",
            "wirst gedurft haben",
            "wird gedurft haben",
            "werden gedurft haben",
            "werdet gedurft haben",
            "werden gedurft haben"
        ]

    }

},

{
    infinitive: "mögen",
    type: "irregular",

    forms: {

        praesens: [
            "mag",
            "magst",
            "mag",
            "mögen",
            "mögt",
            "mögen"
        ],

        perfekt: [
            "habe gemocht",
            "hast gemocht",
            "hat gemocht",
            "haben gemocht",
            "habt gemocht",
            "haben gemocht"
        ],

        praeteritum: [
            "mochte",
            "mochtest",
            "mochte",
            "mochten",
            "mochtet",
            "mochten"
        ],

        plusquamperfekt: [
            "hatte gemocht",
            "hattest gemocht",
            "hatte gemocht",
            "hatten gemocht",
            "hattet gemocht",
            "hatten gemocht"
        ],

        futur1: [
            "werde mögen",
            "wirst mögen",
            "wird mögen",
            "werden mögen",
            "werdet mögen",
            "werden mögen"
        ],

        futur2: [
            "werde gemocht haben",
            "wirst gemocht haben",
            "wird gemocht haben",
            "werden gemocht haben",
            "werdet gemocht haben",
            "werden gemocht haben"
        ]

    }

},

{
    infinitive: "sagen",
    type: "regular",

    forms: {

        praesens: [
            "sage",
            "sagst",
            "sagt",
            "sagen",
            "sagt",
            "sagen"
        ],

        perfekt: [
            "habe gesagt",
            "hast gesagt",
            "hat gesagt",
            "haben gesagt",
            "habt gesagt",
            "haben gesagt"
        ],

        praeteritum: [
            "sagte",
            "sagtest",
            "sagte",
            "sagten",
            "sagtet",
            "sagten"
        ],

        plusquamperfekt: [
            "hatte gesagt",
            "hattest gesagt",
            "hatte gesagt",
            "hatten gesagt",
            "hattet gesagt",
            "hatten gesagt"
        ],

        futur1: [
            "werde sagen",
            "wirst sagen",
            "wird sagen",
            "werden sagen",
            "werdet sagen",
            "werden sagen"
        ],

        futur2: [
            "werde gesagt haben",
            "wirst gesagt haben",
            "wird gesagt haben",
            "werden gesagt haben",
            "werdet gesagt haben",
            "werden gesagt haben"
        ]

    }

},

{
    infinitive: "machen",
    type: "regular",

    forms: {

        praesens: [
            "mache",
            "machst",
            "macht",
            "machen",
            "macht",
            "machen"
        ],

        perfekt: [
            "habe gemacht",
            "hast gemacht",
            "hat gemacht",
            "haben gemacht",
            "habt gemacht",
            "haben gemacht"
        ],

        praeteritum: [
            "machte",
            "machtest",
            "machte",
            "machten",
            "machtet",
            "machten"
        ],

        plusquamperfekt: [
            "hatte gemacht",
            "hattest gemacht",
            "hatte gemacht",
            "hatten gemacht",
            "hattet gemacht",
            "hatten gemacht"
        ],

        futur1: [
            "werde machen",
            "wirst machen",
            "wird machen",
            "werden machen",
            "werdet machen",
            "werden machen"
        ],

        futur2: [
            "werde gemacht haben",
            "wirst gemacht haben",
            "wird gemacht haben",
            "werden gemacht haben",
            "werdet gemacht haben",
            "werden gemacht haben"
        ]

    }

},

{
    infinitive: "geben",
    type: "irregular",

    forms: {

        praesens: [
            "gebe",
            "gibst",
            "gibt",
            "geben",
            "gebt",
            "geben"
        ],

        perfekt: [
            "habe gegeben",
            "hast gegeben",
            "hat gegeben",
            "haben gegeben",
            "habt gegeben",
            "haben gegeben"
        ],

        praeteritum: [
            "gab",
            "gabst",
            "gab",
            "gaben",
            "gabt",
            "gaben"
        ],

        plusquamperfekt: [
            "hatte gegeben",
            "hattest gegeben",
            "hatte gegeben",
            "hatten gegeben",
            "hattet gegeben",
            "hatten gegeben"
        ],

        futur1: [
            "werde geben",
            "wirst geben",
            "wird geben",
            "werden geben",
            "werdet geben",
            "werden geben"
        ],

        futur2: [
            "werde gegeben haben",
            "wirst gegeben haben",
            "wird gegeben haben",
            "werden gegeben haben",
            "werdet gegeben haben",
            "werden gegeben haben"
        ]

    }

},

{
    infinitive: "kommen",
    type: "irregular",

    forms: {

        praesens: [
            "komme",
            "kommst",
            "kommt",
            "kommen",
            "kommt",
            "kommen"
        ],

        perfekt: [
            "bin gekommen",
            "bist gekommen",
            "ist gekommen",
            "sind gekommen",
            "seid gekommen",
            "sind gekommen"
        ],

        praeteritum: [
            "kam",
            "kamst",
            "kam",
            "kamen",
            "kamt",
            "kamen"
        ],

        plusquamperfekt: [
            "war gekommen",
            "warst gekommen",
            "war gekommen",
            "waren gekommen",
            "wart gekommen",
            "waren gekommen"
        ],

        futur1: [
            "werde kommen",
            "wirst kommen",
            "wird kommen",
            "werden kommen",
            "werdet kommen",
            "werden kommen"
        ],

        futur2: [
            "werde gekommen sein",
            "wirst gekommen sein",
            "wird gekommen sein",
            "werden gekommen sein",
            "werdet gekommen sein",
            "werden gekommen sein"
        ]

    }

},

{
    infinitive: "gehen",
    type: "irregular",

    forms: {

        praesens: [
            "gehe",
            "gehst",
            "geht",
            "gehen",
            "geht",
            "gehen"
        ],

        perfekt: [
            "bin gegangen",
            "bist gegangen",
            "ist gegangen",
            "sind gegangen",
            "seid gegangen",
            "sind gegangen"
        ],

        praeteritum: [
            "ging",
            "gingst",
            "ging",
            "gingen",
            "gingt",
            "gingen"
        ],

        plusquamperfekt: [
            "war gegangen",
            "warst gegangen",
            "war gegangen",
            "waren gegangen",
            "wart gegangen",
            "waren gegangen"
        ],

        futur1: [
            "werde gehen",
            "wirst gehen",
            "wird gehen",
            "werden gehen",
            "werdet gehen",
            "werden gehen"
        ],

        futur2: [
            "werde gegangen sein",
            "wirst gegangen sein",
            "wird gegangen sein",
            "werden gegangen sein",
            "werdet gegangen sein",
            "werden gegangen sein"
        ]

    }

},

{
    infinitive: "wissen",
    type: "irregular",

    forms: {

        praesens: [
            "weiß",
            "weißt",
            "weiß",
            "wissen",
            "wisst",
            "wissen"
        ],

        perfekt: [
            "habe gewusst",
            "hast gewusst",
            "hat gewusst",
            "haben gewusst",
            "habt gewusst",
            "haben gewusst"
        ],

        praeteritum: [
            "wusste",
            "wusstest",
            "wusste",
            "wussten",
            "wusstet",
            "wussten"
        ],

        plusquamperfekt: [
            "hatte gewusst",
            "hattest gewusst",
            "hatte gewusst",
            "hatten gewusst",
            "hattet gewusst",
            "hatten gewusst"
        ],

        futur1: [
            "werde wissen",
            "wirst wissen",
            "wird wissen",
            "werden wissen",
            "werdet wissen",
            "werden wissen"
        ],

        futur2: [
            "werde gewusst haben",
            "wirst gewusst haben",
            "wird gewusst haben",
            "werden gewusst haben",
            "werdet gewusst haben",
            "werden gewusst haben"
        ]

    }

},

{
    infinitive: "sehen",
    type: "irregular",

    forms: {

        praesens: [
            "sehe",
            "siehst",
            "sieht",
            "sehen",
            "seht",
            "sehen"
        ],

        perfekt: [
            "habe gesehen",
            "hast gesehen",
            "hat gesehen",
            "haben gesehen",
            "habt gesehen",
            "haben gesehen"
        ],

        praeteritum: [
            "sah",
            "sahst",
            "sah",
            "sahen",
            "saht",
            "sahen"
        ],

        plusquamperfekt: [
            "hatte gesehen",
            "hattest gesehen",
            "hatte gesehen",
            "hatten gesehen",
            "hattet gesehen",
            "hatten gesehen"
        ],

        futur1: [
            "werde sehen",
            "wirst sehen",
            "wird sehen",
            "werden sehen",
            "werdet sehen",
            "werden sehen"
        ],

        futur2: [
            "werde gesehen haben",
            "wirst gesehen haben",
            "wird gesehen haben",
            "werden gesehen haben",
            "werdet gesehen haben",
            "werden gesehen haben"
        ]

    }

},

{
    infinitive: "lassen",
    type: "irregular",

    altForms: {
        praeteritum: ["ließ", "ließt", "ließ", "ließen", "ließt", "ließen"]
    },

    forms: {

        praesens: [
            "lasse",
            "lässt",
            "lässt",
            "lassen",
            "lasst",
            "lassen"
        ],

        perfekt: [
            "habe gelassen",
            "hast gelassen",
            "hat gelassen",
            "haben gelassen",
            "habt gelassen",
            "haben gelassen"
        ],

        praeteritum: [
            "ließ",
            "ließest",
            "ließ",
            "ließen",
            "ließt",
            "ließen"
        ],

        plusquamperfekt: [
            "hatte gelassen",
            "hattest gelassen",
            "hatte gelassen",
            "hatten gelassen",
            "hattet gelassen",
            "hatten gelassen"
        ],

        futur1: [
            "werde lassen",
            "wirst lassen",
            "wird lassen",
            "werden lassen",
            "werdet lassen",
            "werden lassen"
        ],

        futur2: [
            "werde gelassen haben",
            "wirst gelassen haben",
            "wird gelassen haben",
            "werden gelassen haben",
            "werdet gelassen haben",
            "werden gelassen haben"
        ]

    }

},

{
    infinitive: "stehen",
    type: "irregular",

        altForms: {
        perfekt: [
            "bin gestanden",
            "bist gestanden",
            "ist gestanden",
            "sind gestanden",
            "seid gestanden",
            "sind gestanden"
        ],
        plusquamperfekt: [
            "war gestanden",
            "warst gestanden",
            "war gestanden",
            "waren gestanden",
            "wart gestanden",
            "waren gestanden"
        ],
        futur2: [
            "werde gestanden sein",
            "wirst gestanden sein",
            "wird gestanden sein",
            "werden gestanden sein",
            "werdet gestanden sein",
            "werden gestanden sein"
        ]
    },

    forms: {

        praesens: [
            "stehe",
            "stehst",
            "steht",
            "stehen",
            "steht",
            "stehen"
        ],

        perfekt: [
            "habe gestanden",
            "hast gestanden",
            "hat gestanden",
            "haben gestanden",
            "habt gestanden",
            "haben gestanden"
        ],

        praeteritum: [
            "stand",
            "standest",
            "stand",
            "standen",
            "standet",
            "standen"
        ],

        plusquamperfekt: [
            "hatte gestanden",
            "hattest gestanden",
            "hatte gestanden",
            "hatten gestanden",
            "hattet gestanden",
            "hatten gestanden"
        ],

        futur1: [
            "werde stehen",
            "wirst stehen",
            "wird stehen",
            "werden stehen",
            "werdet stehen",
            "werden stehen"
        ],

        futur2: [
            "werde gestanden haben",
            "wirst gestanden haben",
            "wird gestanden haben",
            "werden gestanden haben",
            "werdet gestanden haben",
            "werden gestanden haben"
        ]

    }

},

{
    infinitive: "finden",
    type: "irregular",

    forms: {

        praesens: [
            "finde",
            "findest",
            "findet",
            "finden",
            "findet",
            "finden"
        ],

        perfekt: [
            "habe gefunden",
            "hast gefunden",
            "hat gefunden",
            "haben gefunden",
            "habt gefunden",
            "haben gefunden"
        ],

        praeteritum: [
            "fand",
            "fandest",
            "fand",
            "fanden",
            "fandet",
            "fanden"
        ],

        plusquamperfekt: [
            "hatte gefunden",
            "hattest gefunden",
            "hatte gefunden",
            "hatten gefunden",
            "hattet gefunden",
            "hatten gefunden"
        ],

        futur1: [
            "werde finden",
            "wirst finden",
            "wird finden",
            "werden finden",
            "werdet finden",
            "werden finden"
        ],

        futur2: [
            "werde gefunden haben",
            "wirst gefunden haben",
            "wird gefunden haben",
            "werden gefunden haben",
            "werdet gefunden haben",
            "werden gefunden haben"
        ]

    }

},

{
    infinitive: "bleiben",
    type: "irregular",

    forms: {

        praesens: [
            "bleibe",
            "bleibst",
            "bleibt",
            "bleiben",
            "bleibt",
            "bleiben"
        ],

        perfekt: [
            "bin geblieben",
            "bist geblieben",
            "ist geblieben",
            "sind geblieben",
            "seid geblieben",
            "sind geblieben"
        ],

        praeteritum: [
            "blieb",
            "bliebst",
            "blieb",
            "blieben",
            "bliebt",
            "blieben"
        ],

        plusquamperfekt: [
            "war geblieben",
            "warst geblieben",
            "war geblieben",
            "waren geblieben",
            "wart geblieben",
            "waren geblieben"
        ],

        futur1: [
            "werde bleiben",
            "wirst bleiben",
            "wird bleiben",
            "werden bleiben",
            "werdet bleiben",
            "werden bleiben"
        ],

        futur2: [
            "werde geblieben sein",
            "wirst geblieben sein",
            "wird geblieben sein",
            "werden geblieben sein",
            "werdet geblieben sein",
            "werden geblieben sein"
        ]

    }

},

{
    infinitive: "liegen",
    type: "irregular",

        altForms: {
        perfekt: [
            "bin gelegen",
            "bist gelegen",
            "ist gelegen",
            "sind gelegen",
            "seid gelegen",
            "sind gelegen"
        ],
        plusquamperfekt: [
            "war gelegen",
            "warst gelegen",
            "war gelegen",
            "waren gelegen",
            "wart gelegen",
            "waren gelegen"
        ],
        futur2: [
            "werde gelegen sein",
            "wirst gelegen sein",
            "wird gelegen sein",
            "werden gelegen sein",
            "werdet gelegen sein",
            "werden gelegen sein"
        ]
    },

    forms: {

        praesens: [
            "liege",
            "liegst",
            "liegt",
            "liegen",
            "liegt",
            "liegen"
        ],

        perfekt: [
            "habe gelegen",
            "hast gelegen",
            "hat gelegen",
            "haben gelegen",
            "habt gelegen",
            "haben gelegen"
        ],

        praeteritum: [
            "lag",
            "lagst",
            "lag",
            "lagen",
            "lagt",
            "lagen"
        ],

        plusquamperfekt: [
            "hatte gelegen",
            "hattest gelegen",
            "hatte gelegen",
            "hatten gelegen",
            "hattet gelegen",
            "hatten gelegen"
        ],

        futur1: [
            "werde liegen",
            "wirst liegen",
            "wird liegen",
            "werden liegen",
            "werdet liegen",
            "werden liegen"
        ],

        futur2: [
            "werde gelegen haben",
            "wirst gelegen haben",
            "wird gelegen haben",
            "werden gelegen haben",
            "werdet gelegen haben",
            "werden gelegen haben"
        ]

    }

},

{
    infinitive: "heißen",
    type: "irregular",

    altForms: {
        praeteritum: ["hieß", "hießt", "hieß", "hießen", "hießt", "hießen"]
    },

    forms: {

        praesens: [
            "heiße",
            "heißt",
            "heißt",
            "heißen",
            "heißt",
            "heißen"
        ],

        perfekt: [
            "habe geheißen",
            "hast geheißen",
            "hat geheißen",
            "haben geheißen",
            "habt geheißen",
            "haben geheißen"
        ],

        praeteritum: [
            "hieß",
            "hießest",
            "hieß",
            "hießen",
            "hießt",
            "hießen"
        ],

        plusquamperfekt: [
            "hatte geheißen",
            "hattest geheißen",
            "hatte geheißen",
            "hatten geheißen",
            "hattet geheißen",
            "hatten geheißen"
        ],

        futur1: [
            "werde heißen",
            "wirst heißen",
            "wird heißen",
            "werden heißen",
            "werdet heißen",
            "werden heißen"
        ],

        futur2: [
            "werde geheißen haben",
            "wirst geheißen haben",
            "wird geheißen haben",
            "werden geheißen haben",
            "werdet geheißen haben",
            "werden geheißen haben"
        ]

    }

},

{
    infinitive: "denken",
    type: "irregular",

    forms: {

        praesens: [
            "denke",
            "denkst",
            "denkt",
            "denken",
            "denkt",
            "denken"
        ],

        perfekt: [
            "habe gedacht",
            "hast gedacht",
            "hat gedacht",
            "haben gedacht",
            "habt gedacht",
            "haben gedacht"
        ],

        praeteritum: [
            "dachte",
            "dachtest",
            "dachte",
            "dachten",
            "dachtet",
            "dachten"
        ],

        plusquamperfekt: [
            "hatte gedacht",
            "hattest gedacht",
            "hatte gedacht",
            "hatten gedacht",
            "hattet gedacht",
            "hatten gedacht"
        ],

        futur1: [
            "werde denken",
            "wirst denken",
            "wird denken",
            "werden denken",
            "werdet denken",
            "werden denken"
        ],

        futur2: [
            "werde gedacht haben",
            "wirst gedacht haben",
            "wird gedacht haben",
            "werden gedacht haben",
            "werdet gedacht haben",
            "werden gedacht haben"
        ]

    }

},

{
    infinitive: "nehmen",
    type: "irregular",

    forms: {

        praesens: [
            "nehme",
            "nimmst",
            "nimmt",
            "nehmen",
            "nehmt",
            "nehmen"
        ],

        perfekt: [
            "habe genommen",
            "hast genommen",
            "hat genommen",
            "haben genommen",
            "habt genommen",
            "haben genommen"
        ],

        praeteritum: [
            "nahm",
            "nahmst",
            "nahm",
            "nahmen",
            "nahmt",
            "nahmen"
        ],

        plusquamperfekt: [
            "hatte genommen",
            "hattest genommen",
            "hatte genommen",
            "hatten genommen",
            "hattet genommen",
            "hatten genommen"
        ],

        futur1: [
            "werde nehmen",
            "wirst nehmen",
            "wird nehmen",
            "werden nehmen",
            "werdet nehmen",
            "werden nehmen"
        ],

        futur2: [
            "werde genommen haben",
            "wirst genommen haben",
            "wird genommen haben",
            "werden genommen haben",
            "werdet genommen haben",
            "werden genommen haben"
        ]

    }

},

{
    infinitive: "tun",
    type: "irregular",

    forms: {

        praesens: [
            "tue",
            "tust",
            "tut",
            "tun",
            "tut",
            "tun"
        ],

        perfekt: [
            "habe getan",
            "hast getan",
            "hat getan",
            "haben getan",
            "habt getan",
            "haben getan"
        ],

        praeteritum: [
            "tat",
            "tatest",
            "tat",
            "taten",
            "tatet",
            "taten"
        ],

        plusquamperfekt: [
            "hatte getan",
            "hattest getan",
            "hatte getan",
            "hatten getan",
            "hattet getan",
            "hatten getan"
        ],

        futur1: [
            "werde tun",
            "wirst tun",
            "wird tun",
            "werden tun",
            "werdet tun",
            "werden tun"
        ],

        futur2: [
            "werde getan haben",
            "wirst getan haben",
            "wird getan haben",
            "werden getan haben",
            "werdet getan haben",
            "werden getan haben"
        ]

    }

},

{
    infinitive: "glauben",
    type: "regular",

    forms: {

        praesens: [
            "glaube",
            "glaubst",
            "glaubt",
            "glauben",
            "glaubt",
            "glauben"
        ],

        perfekt: [
            "habe geglaubt",
            "hast geglaubt",
            "hat geglaubt",
            "haben geglaubt",
            "habt geglaubt",
            "haben geglaubt"
        ],

        praeteritum: [
            "glaubte",
            "glaubtest",
            "glaubte",
            "glaubten",
            "glaubtet",
            "glaubten"
        ],

        plusquamperfekt: [
            "hatte geglaubt",
            "hattest geglaubt",
            "hatte geglaubt",
            "hatten geglaubt",
            "hattet geglaubt",
            "hatten geglaubt"
        ],

        futur1: [
            "werde glauben",
            "wirst glauben",
            "wird glauben",
            "werden glauben",
            "werdet glauben",
            "werden glauben"
        ],

        futur2: [
            "werde geglaubt haben",
            "wirst geglaubt haben",
            "wird geglaubt haben",
            "werden geglaubt haben",
            "werdet geglaubt haben",
            "werden geglaubt haben"
        ]

    }

},

{
    infinitive: "halten",
    type: "irregular",

    forms: {

        praesens: [
            "halte",
            "hältst",
            "hält",
            "halten",
            "haltet",
            "halten"
        ],

        perfekt: [
            "habe gehalten",
            "hast gehalten",
            "hat gehalten",
            "haben gehalten",
            "habt gehalten",
            "haben gehalten"
        ],

        praeteritum: [
            "hielt",
            "hieltest",
            "hielt",
            "hielten",
            "hieltet",
            "hielten"
        ],

        plusquamperfekt: [
            "hatte gehalten",
            "hattest gehalten",
            "hatte gehalten",
            "hatten gehalten",
            "hattet gehalten",
            "hatten gehalten"
        ],

        futur1: [
            "werde halten",
            "wirst halten",
            "wird halten",
            "werden halten",
            "werdet halten",
            "werden halten"
        ],

        futur2: [
            "werde gehalten haben",
            "wirst gehalten haben",
            "wird gehalten haben",
            "werden gehalten haben",
            "werdet gehalten haben",
            "werden gehalten haben"
        ]

    }

},

{
    infinitive: "nennen",
    type: "irregular",

    forms: {

        praesens: [
            "nenne",
            "nennst",
            "nennt",
            "nennen",
            "nennt",
            "nennen"
        ],

        perfekt: [
            "habe genannt",
            "hast genannt",
            "hat genannt",
            "haben genannt",
            "habt genannt",
            "haben genannt"
        ],

        praeteritum: [
            "nannte",
            "nanntest",
            "nannte",
            "nannten",
            "nanntet",
            "nannten"
        ],

        plusquamperfekt: [
            "hatte genannt",
            "hattest genannt",
            "hatte genannt",
            "hatten genannt",
            "hattet genannt",
            "hatten genannt"
        ],

        futur1: [
            "werde nennen",
            "wirst nennen",
            "wird nennen",
            "werden nennen",
            "werdet nennen",
            "werden nennen"
        ],

        futur2: [
            "werde genannt haben",
            "wirst genannt haben",
            "wird genannt haben",
            "werden genannt haben",
            "werdet genannt haben",
            "werden genannt haben"
        ]

    }

},

{
    infinitive: "zeigen",
    type: "regular",

    forms: {

        praesens: [
            "zeige",
            "zeigst",
            "zeigt",
            "zeigen",
            "zeigt",
            "zeigen"
        ],

        perfekt: [
            "habe gezeigt",
            "hast gezeigt",
            "hat gezeigt",
            "haben gezeigt",
            "habt gezeigt",
            "haben gezeigt"
        ],

        praeteritum: [
            "zeigte",
            "zeigtest",
            "zeigte",
            "zeigten",
            "zeigtet",
            "zeigten"
        ],

        plusquamperfekt: [
            "hatte gezeigt",
            "hattest gezeigt",
            "hatte gezeigt",
            "hatten gezeigt",
            "hattet gezeigt",
            "hatten gezeigt"
        ],

        futur1: [
            "werde zeigen",
            "wirst zeigen",
            "wird zeigen",
            "werden zeigen",
            "werdet zeigen",
            "werden zeigen"
        ],

        futur2: [
            "werde gezeigt haben",
            "wirst gezeigt haben",
            "wird gezeigt haben",
            "werden gezeigt haben",
            "werdet gezeigt haben",
            "werden gezeigt haben"
        ]

    }

},

{
    infinitive: "sprechen",
    type: "irregular",

    forms: {

        praesens: [
            "spreche",
            "sprichst",
            "spricht",
            "sprechen",
            "sprecht",
            "sprechen"
        ],

        perfekt: [
            "habe gesprochen",
            "hast gesprochen",
            "hat gesprochen",
            "haben gesprochen",
            "habt gesprochen",
            "haben gesprochen"
        ],

        praeteritum: [
            "sprach",
            "sprachst",
            "sprach",
            "sprachen",
            "spracht",
            "sprachen"
        ],

        plusquamperfekt: [
            "hatte gesprochen",
            "hattest gesprochen",
            "hatte gesprochen",
            "hatten gesprochen",
            "hattet gesprochen",
            "hatten gesprochen"
        ],

        futur1: [
            "werde sprechen",
            "wirst sprechen",
            "wird sprechen",
            "werden sprechen",
            "werdet sprechen",
            "werden sprechen"
        ],

        futur2: [
            "werde gesprochen haben",
            "wirst gesprochen haben",
            "wird gesprochen haben",
            "werden gesprochen haben",
            "werdet gesprochen haben",
            "werden gesprochen haben"
        ]

    }

},

{
    infinitive: "bringen",
    type: "irregular",

    forms: {

        praesens: [
            "bringe",
            "bringst",
            "bringt",
            "bringen",
            "bringt",
            "bringen"
        ],

        perfekt: [
            "habe gebracht",
            "hast gebracht",
            "hat gebracht",
            "haben gebracht",
            "habt gebracht",
            "haben gebracht"
        ],

        praeteritum: [
            "brachte",
            "brachtest",
            "brachte",
            "brachten",
            "brachtet",
            "brachten"
        ],

        plusquamperfekt: [
            "hatte gebracht",
            "hattest gebracht",
            "hatte gebracht",
            "hatten gebracht",
            "hattet gebracht",
            "hatten gebracht"
        ],

        futur1: [
            "werde bringen",
            "wirst bringen",
            "wird bringen",
            "werden bringen",
            "werdet bringen",
            "werden bringen"
        ],

        futur2: [
            "werde gebracht haben",
            "wirst gebracht haben",
            "wird gebracht haben",
            "werden gebracht haben",
            "werdet gebracht haben",
            "werden gebracht haben"
        ]

    }

},

{
    infinitive: "fahren",
    type: "irregular",

        altForms: {
        perfekt: [
            "habe gefahren",
            "hast gefahren",
            "hat gefahren",
            "haben gefahren",
            "habt gefahren",
            "haben gefahren"
        ],
        plusquamperfekt: [
            "hatte gefahren",
            "hattest gefahren",
            "hatte gefahren",
            "hatten gefahren",
            "hattet gefahren",
            "hatten gefahren"
        ],
        futur2: [
            "werde gefahren haben",
            "wirst gefahren haben",
            "wird gefahren haben",
            "werden gefahren haben",
            "werdet gefahren haben",
            "werden gefahren haben"
        ]
    },

    forms: {

        praesens: [
            "fahre",
            "fährst",
            "fährt",
            "fahren",
            "fahrt",
            "fahren"
        ],

        perfekt: [
            "bin gefahren",
            "bist gefahren",
            "ist gefahren",
            "sind gefahren",
            "seid gefahren",
            "sind gefahren"
        ],

        praeteritum: [
            "fuhr",
            "fuhrst",
            "fuhr",
            "fuhren",
            "fuhrt",
            "fuhren"
        ],

        plusquamperfekt: [
            "war gefahren",
            "warst gefahren",
            "war gefahren",
            "waren gefahren",
            "wart gefahren",
            "waren gefahren"
        ],

        futur1: [
            "werde fahren",
            "wirst fahren",
            "wird fahren",
            "werden fahren",
            "werdet fahren",
            "werden fahren"
        ],

        futur2: [
            "werde gefahren sein",
            "wirst gefahren sein",
            "wird gefahren sein",
            "werden gefahren sein",
            "werdet gefahren sein",
            "werden gefahren sein"
        ]

    }

},

{
    infinitive: "fragen",
    type: "regular",

    forms: {

        praesens: [
            "frage",
            "fragst",
            "fragt",
            "fragen",
            "fragt",
            "fragen"
        ],

        perfekt: [
            "habe gefragt",
            "hast gefragt",
            "hat gefragt",
            "haben gefragt",
            "habt gefragt",
            "haben gefragt"
        ],

        praeteritum: [
            "fragte",
            "fragtest",
            "fragte",
            "fragten",
            "fragtet",
            "fragten"
        ],

        plusquamperfekt: [
            "hatte gefragt",
            "hattest gefragt",
            "hatte gefragt",
            "hatten gefragt",
            "hattet gefragt",
            "hatten gefragt"
        ],

        futur1: [
            "werde fragen",
            "wirst fragen",
            "wird fragen",
            "werden fragen",
            "werdet fragen",
            "werden fragen"
        ],

        futur2: [
            "werde gefragt haben",
            "wirst gefragt haben",
            "wird gefragt haben",
            "werden gefragt haben",
            "werdet gefragt haben",
            "werden gefragt haben"
        ]

    }

},

{
    infinitive: "kennen",
    type: "irregular",

    forms: {

        praesens: [
            "kenne",
            "kennst",
            "kennt",
            "kennen",
            "kennt",
            "kennen"
        ],

        perfekt: [
            "habe gekannt",
            "hast gekannt",
            "hat gekannt",
            "haben gekannt",
            "habt gekannt",
            "haben gekannt"
        ],

        praeteritum: [
            "kannte",
            "kanntest",
            "kannte",
            "kannten",
            "kanntet",
            "kannten"
        ],

        plusquamperfekt: [
            "hatte gekannt",
            "hattest gekannt",
            "hatte gekannt",
            "hatten gekannt",
            "hattet gekannt",
            "hatten gekannt"
        ],

        futur1: [
            "werde kennen",
            "wirst kennen",
            "wird kennen",
            "werden kennen",
            "werdet kennen",
            "werden kennen"
        ],

        futur2: [
            "werde gekannt haben",
            "wirst gekannt haben",
            "wird gekannt haben",
            "werden gekannt haben",
            "werdet gekannt haben",
            "werden gekannt haben"
        ]

    }

},

{
    infinitive: "bekommen",
    type: "irregular",

    forms: {

        praesens: [
            "bekomme",
            "bekommst",
            "bekommt",
            "bekommen",
            "bekommt",
            "bekommen"
        ],

        perfekt: [
            "habe bekommen",
            "hast bekommen",
            "hat bekommen",
            "haben bekommen",
            "habt bekommen",
            "haben bekommen"
        ],

        praeteritum: [
            "bekam",
            "bekamst",
            "bekam",
            "bekamen",
            "bekamt",
            "bekamen"
        ],

        plusquamperfekt: [
            "hatte bekommen",
            "hattest bekommen",
            "hatte bekommen",
            "hatten bekommen",
            "hattet bekommen",
            "hatten bekommen"
        ],

        futur1: [
            "werde bekommen",
            "wirst bekommen",
            "wird bekommen",
            "werden bekommen",
            "werdet bekommen",
            "werden bekommen"
        ],

        futur2: [
            "werde bekommen haben",
            "wirst bekommen haben",
            "wird bekommen haben",
            "werden bekommen haben",
            "werdet bekommen haben",
            "werden bekommen haben"
        ]

    }

},

{
    infinitive: "gehören",
    type: "regular",

    forms: {

        praesens: [
            "gehöre",
            "gehörst",
            "gehört",
            "gehören",
            "gehört",
            "gehören"
        ],

        perfekt: [
            "habe gehört",
            "hast gehört",
            "hat gehört",
            "haben gehört",
            "habt gehört",
            "haben gehört"
        ],

        praeteritum: [
            "gehörte",
            "gehörtest",
            "gehörte",
            "gehörten",
            "gehörtet",
            "gehörten"
        ],

        plusquamperfekt: [
            "hatte gehört",
            "hattest gehört",
            "hatte gehört",
            "hatten gehört",
            "hattet gehört",
            "hatten gehört"
        ],

        futur1: [
            "werde gehören",
            "wirst gehören",
            "wird gehören",
            "werden gehören",
            "werdet gehören",
            "werden gehören"
        ],

        futur2: [
            "werde gehört haben",
            "wirst gehört haben",
            "wird gehört haben",
            "werden gehört haben",
            "werdet gehört haben",
            "werden gehört haben"
        ]

    }

},

{
    infinitive: "stellen",
    type: "regular",

    forms: {

        praesens: [
            "stelle",
            "stellst",
            "stellt",
            "stellen",
            "stellt",
            "stellen"
        ],

        perfekt: [
            "habe gestellt",
            "hast gestellt",
            "hat gestellt",
            "haben gestellt",
            "habt gestellt",
            "haben gestellt"
        ],

        praeteritum: [
            "stellte",
            "stelltest",
            "stellte",
            "stellten",
            "stelltet",
            "stellten"
        ],

        plusquamperfekt: [
            "hatte gestellt",
            "hattest gestellt",
            "hatte gestellt",
            "hatten gestellt",
            "hattet gestellt",
            "hatten gestellt"
        ],

        futur1: [
            "werde stellen",
            "wirst stellen",
            "wird stellen",
            "werden stellen",
            "werdet stellen",
            "werden stellen"
        ],

        futur2: [
            "werde gestellt haben",
            "wirst gestellt haben",
            "wird gestellt haben",
            "werden gestellt haben",
            "werdet gestellt haben",
            "werden gestellt haben"
        ]

    }

},

{
    infinitive: "spielen",
    type: "regular",

    forms: {

        praesens: [
            "spiele",
            "spielst",
            "spielt",
            "spielen",
            "spielt",
            "spielen"
        ],

        perfekt: [
            "habe gespielt",
            "hast gespielt",
            "hat gespielt",
            "haben gespielt",
            "habt gespielt",
            "haben gespielt"
        ],

        praeteritum: [
            "spielte",
            "spieltest",
            "spielte",
            "spielten",
            "spieltet",
            "spielten"
        ],

        plusquamperfekt: [
            "hatte gespielt",
            "hattest gespielt",
            "hatte gespielt",
            "hatten gespielt",
            "hattet gespielt",
            "hatten gespielt"
        ],

        futur1: [
            "werde spielen",
            "wirst spielen",
            "wird spielen",
            "werden spielen",
            "werdet spielen",
            "werden spielen"
        ],

        futur2: [
            "werde gespielt haben",
            "wirst gespielt haben",
            "wird gespielt haben",
            "werden gespielt haben",
            "werdet gespielt haben",
            "werden gespielt haben"
        ]

    }

},

{
    infinitive: "arbeiten",
    type: "regular",

    forms: {

        praesens: [
            "arbeite",
            "arbeitest",
            "arbeitet",
            "arbeiten",
            "arbeitet",
            "arbeiten"
        ],

        perfekt: [
            "habe gearbeitet",
            "hast gearbeitet",
            "hat gearbeitet",
            "haben gearbeitet",
            "habt gearbeitet",
            "haben gearbeitet"
        ],

        praeteritum: [
            "arbeitete",
            "arbeitetest",
            "arbeitete",
            "arbeiteten",
            "arbeitetet",
            "arbeiteten"
        ],

        plusquamperfekt: [
            "hatte gearbeitet",
            "hattest gearbeitet",
            "hatte gearbeitet",
            "hatten gearbeitet",
            "hattet gearbeitet",
            "hatten gearbeitet"
        ],

        futur1: [
            "werde arbeiten",
            "wirst arbeiten",
            "wird arbeiten",
            "werden arbeiten",
            "werdet arbeiten",
            "werden arbeiten"
        ],

        futur2: [
            "werde gearbeitet haben",
            "wirst gearbeitet haben",
            "wird gearbeitet haben",
            "werden gearbeitet haben",
            "werdet gearbeitet haben",
            "werden gearbeitet haben"
        ]

    }

},

{
    infinitive: "brauchen",
    type: "regular",

    forms: {

        praesens: [
            "brauche",
            "brauchst",
            "braucht",
            "brauchen",
            "braucht",
            "brauchen"
        ],

        perfekt: [
            "habe gebraucht",
            "hast gebraucht",
            "hat gebraucht",
            "haben gebraucht",
            "habt gebraucht",
            "haben gebraucht"
        ],

        praeteritum: [
            "brauchte",
            "brauchtest",
            "brauchte",
            "brauchten",
            "brauchtet",
            "brauchten"
        ],

        plusquamperfekt: [
            "hatte gebraucht",
            "hattest gebraucht",
            "hatte gebraucht",
            "hatten gebraucht",
            "hattet gebraucht",
            "hatten gebraucht"
        ],

        futur1: [
            "werde brauchen",
            "wirst brauchen",
            "wird brauchen",
            "werden brauchen",
            "werdet brauchen",
            "werden brauchen"
        ],

        futur2: [
            "werde gebraucht haben",
            "wirst gebraucht haben",
            "wird gebraucht haben",
            "werden gebraucht haben",
            "werdet gebraucht haben",
            "werden gebraucht haben"
        ]

    }

},

{
    infinitive: "lernen",
    type: "regular",

    forms: {

        praesens: [
            "lerne",
            "lernst",
            "lernt",
            "lernen",
            "lernt",
            "lernen"
        ],

        perfekt: [
            "habe gelernt",
            "hast gelernt",
            "hat gelernt",
            "haben gelernt",
            "habt gelernt",
            "haben gelernt"
        ],

        praeteritum: [
            "lernte",
            "lerntest",
            "lernte",
            "lernten",
            "lerntet",
            "lernten"
        ],

        plusquamperfekt: [
            "hatte gelernt",
            "hattest gelernt",
            "hatte gelernt",
            "hatten gelernt",
            "hattet gelernt",
            "hatten gelernt"
        ],

        futur1: [
            "werde lernen",
            "wirst lernen",
            "wird lernen",
            "werden lernen",
            "werdet lernen",
            "werden lernen"
        ],

        futur2: [
            "werde gelernt haben",
            "wirst gelernt haben",
            "wird gelernt haben",
            "werden gelernt haben",
            "werdet gelernt haben",
            "werden gelernt haben"
        ]

    }

},

{
    infinitive: "schreiben",
    type: "irregular",

    forms: {

        praesens: [
            "schreibe",
            "schreibst",
            "schreibt",
            "schreiben",
            "schreibt",
            "schreiben"
        ],

        perfekt: [
            "habe geschrieben",
            "hast geschrieben",
            "hat geschrieben",
            "haben geschrieben",
            "habt geschrieben",
            "haben geschrieben"
        ],

        praeteritum: [
            "schrieb",
            "schriebst",
            "schrieb",
            "schrieben",
            "schriebt",
            "schrieben"
        ],

        plusquamperfekt: [
            "hatte geschrieben",
            "hattest geschrieben",
            "hatte geschrieben",
            "hatten geschrieben",
            "hattet geschrieben",
            "hatten geschrieben"
        ],

        futur1: [
            "werde schreiben",
            "wirst schreiben",
            "wird schreiben",
            "werden schreiben",
            "werdet schreiben",
            "werden schreiben"
        ],

        futur2: [
            "werde geschrieben haben",
            "wirst geschrieben haben",
            "wird geschrieben haben",
            "werden geschrieben haben",
            "werdet geschrieben haben",
            "werden geschrieben haben"
        ]

    }

},

{
    infinitive: "lesen",
    type: "irregular",

    altForms: {
        praeteritum: ["las", "last", "las", "lasen", "last", "lasen"]
    },

    forms: {

        praesens: [
            "lese",
            "liest",
            "liest",
            "lesen",
            "lest",
            "lesen"
        ],

        perfekt: [
            "habe gelesen",
            "hast gelesen",
            "hat gelesen",
            "haben gelesen",
            "habt gelesen",
            "haben gelesen"
        ],

        praeteritum: [
            "las",
            "lasest",
            "las",
            "lasen",
            "last",
            "lasen"
        ],

        plusquamperfekt: [
            "hatte gelesen",
            "hattest gelesen",
            "hatte gelesen",
            "hatten gelesen",
            "hattet gelesen",
            "hatten gelesen"
        ],

        futur1: [
            "werde lesen",
            "wirst lesen",
            "wird lesen",
            "werden lesen",
            "werdet lesen",
            "werden lesen"
        ],

        futur2: [
            "werde gelesen haben",
            "wirst gelesen haben",
            "wird gelesen haben",
            "werden gelesen haben",
            "werdet gelesen haben",
            "werden gelesen haben"
        ]

    }

},

{
    infinitive: "hören",
    type: "regular",

    forms: {

        praesens: [
            "höre",
            "hörst",
            "hört",
            "hören",
            "hört",
            "hören"
        ],

        perfekt: [
            "habe gehört",
            "hast gehört",
            "hat gehört",
            "haben gehört",
            "habt gehört",
            "haben gehört"
        ],

        praeteritum: [
            "hörte",
            "hörtest",
            "hörte",
            "hörten",
            "hörtet",
            "hörten"
        ],

        plusquamperfekt: [
            "hatte gehört",
            "hattest gehört",
            "hatte gehört",
            "hatten gehört",
            "hattet gehört",
            "hatten gehört"
        ],

        futur1: [
            "werde hören",
            "wirst hören",
            "wird hören",
            "werden hören",
            "werdet hören",
            "werden hören"
        ],

        futur2: [
            "werde gehört haben",
            "wirst gehört haben",
            "wird gehört haben",
            "werden gehört haben",
            "werdet gehört haben",
            "werden gehört haben"
        ]

    }

},

{
    infinitive: "essen",
    type: "irregular",

    altForms: {
        praeteritum: ["aß", "aßt", "aß", "aßen", "aßt", "aßen"]
    },

    forms: {

        praesens: [
            "esse",
            "isst",
            "isst",
            "essen",
            "esst",
            "essen"
        ],

        perfekt: [
            "habe gegessen",
            "hast gegessen",
            "hat gegessen",
            "haben gegessen",
            "habt gegessen",
            "haben gegessen"
        ],

        praeteritum: [
            "aß",
            "aßest",
            "aß",
            "aßen",
            "aßt",
            "aßen"
        ],

        plusquamperfekt: [
            "hatte gegessen",
            "hattest gegessen",
            "hatte gegessen",
            "hatten gegessen",
            "hattet gegessen",
            "hatten gegessen"
        ],

        futur1: [
            "werde essen",
            "wirst essen",
            "wird essen",
            "werden essen",
            "werdet essen",
            "werden essen"
        ],

        futur2: [
            "werde gegessen haben",
            "wirst gegessen haben",
            "wird gegessen haben",
            "werden gegessen haben",
            "werdet gegessen haben",
            "werden gegessen haben"
        ]

    }

},

{
    infinitive: "trinken",
    type: "irregular",

    forms: {

        praesens: [
            "trinke",
            "trinkst",
            "trinkt",
            "trinken",
            "trinkt",
            "trinken"
        ],

        perfekt: [
            "habe getrunken",
            "hast getrunken",
            "hat getrunken",
            "haben getrunken",
            "habt getrunken",
            "haben getrunken"
        ],

        praeteritum: [
            "trank",
            "trankst",
            "trank",
            "tranken",
            "trankt",
            "tranken"
        ],

        plusquamperfekt: [
            "hatte getrunken",
            "hattest getrunken",
            "hatte getrunken",
            "hatten getrunken",
            "hattet getrunken",
            "hatten getrunken"
        ],

        futur1: [
            "werde trinken",
            "wirst trinken",
            "wird trinken",
            "werden trinken",
            "werdet trinken",
            "werden trinken"
        ],

        futur2: [
            "werde getrunken haben",
            "wirst getrunken haben",
            "wird getrunken haben",
            "werden getrunken haben",
            "werdet getrunken haben",
            "werden getrunken haben"
        ]

    }

},

{
    infinitive: "helfen",
    type: "irregular",

    forms: {

        praesens: [
            "helfe",
            "hilfst",
            "hilft",
            "helfen",
            "helft",
            "helfen"
        ],

        perfekt: [
            "habe geholfen",
            "hast geholfen",
            "hat geholfen",
            "haben geholfen",
            "habt geholfen",
            "haben geholfen"
        ],

        praeteritum: [
            "half",
            "halfst",
            "half",
            "halfen",
            "halft",
            "halfen"
        ],

        plusquamperfekt: [
            "hatte geholfen",
            "hattest geholfen",
            "hatte geholfen",
            "hatten geholfen",
            "hattet geholfen",
            "hatten geholfen"
        ],

        futur1: [
            "werde helfen",
            "wirst helfen",
            "wird helfen",
            "werden helfen",
            "werdet helfen",
            "werden helfen"
        ],

        futur2: [
            "werde geholfen haben",
            "wirst geholfen haben",
            "wird geholfen haben",
            "werden geholfen haben",
            "werdet geholfen haben",
            "werden geholfen haben"
        ]

    }

},

{
    infinitive: "wohnen",
    type: "regular",

    forms: {

        praesens: [
            "wohne",
            "wohnst",
            "wohnt",
            "wohnen",
            "wohnt",
            "wohnen"
        ],

        perfekt: [
            "habe gewohnt",
            "hast gewohnt",
            "hat gewohnt",
            "haben gewohnt",
            "habt gewohnt",
            "haben gewohnt"
        ],

        praeteritum: [
            "wohnte",
            "wohntest",
            "wohnte",
            "wohnten",
            "wohntet",
            "wohnten"
        ],

        plusquamperfekt: [
            "hatte gewohnt",
            "hattest gewohnt",
            "hatte gewohnt",
            "hatten gewohnt",
            "hattet gewohnt",
            "hatten gewohnt"
        ],

        futur1: [
            "werde wohnen",
            "wirst wohnen",
            "wird wohnen",
            "werden wohnen",
            "werdet wohnen",
            "werden wohnen"
        ],

        futur2: [
            "werde gewohnt haben",
            "wirst gewohnt haben",
            "wird gewohnt haben",
            "werden gewohnt haben",
            "werdet gewohnt haben",
            "werden gewohnt haben"
        ]

    }

},

{
    infinitive: "anfangen",
    type: "irregular",

    forms: {

        praesens: [
            "fange an",
            "fängst an",
            "fängt an",
            "fangen an",
            "fangt an",
            "fangen an"
        ],

        perfekt: [
            "habe angefangen",
            "hast angefangen",
            "hat angefangen",
            "haben angefangen",
            "habt angefangen",
            "haben angefangen"
        ],

        praeteritum: [
            "fing an",
            "fingst an",
            "fing an",
            "fingen an",
            "fingt an",
            "fingen an"
        ],

        plusquamperfekt: [
            "hatte angefangen",
            "hattest angefangen",
            "hatte angefangen",
            "hatten angefangen",
            "hattet angefangen",
            "hatten angefangen"
        ],

        futur1: [
            "werde anfangen",
            "wirst anfangen",
            "wird anfangen",
            "werden anfangen",
            "werdet anfangen",
            "werden anfangen"
        ],

        futur2: [
            "werde angefangen haben",
            "wirst angefangen haben",
            "wird angefangen haben",
            "werden angefangen haben",
            "werdet angefangen haben",
            "werden angefangen haben"
        ]

    }

},

{
    infinitive: "zurückkommen",
    type: "irregular",

    forms: {

        praesens: [
            "komme zurück",
            "kommst zurück",
            "kommt zurück",
            "kommen zurück",
            "kommt zurück",
            "kommen zurück"
        ],

        perfekt: [
            "bin zurückgekommen",
            "bist zurückgekommen",
            "ist zurückgekommen",
            "sind zurückgekommen",
            "seid zurückgekommen",
            "sind zurückgekommen"
        ],

        praeteritum: [
            "kam zurück",
            "kamst zurück",
            "kam zurück",
            "kamen zurück",
            "kamt zurück",
            "kamen zurück"
        ],

        plusquamperfekt: [
            "war zurückgekommen",
            "warst zurückgekommen",
            "war zurückgekommen",
            "waren zurückgekommen",
            "wart zurückgekommen",
            "waren zurückgekommen"
        ],

        futur1: [
            "werde zurückkommen",
            "wirst zurückkommen",
            "wird zurückkommen",
            "werden zurückkommen",
            "werdet zurückkommen",
            "werden zurückkommen"
        ],

        futur2: [
            "werde zurückgekommen sein",
            "wirst zurückgekommen sein",
            "wird zurückgekommen sein",
            "werden zurückgekommen sein",
            "werdet zurückgekommen sein",
            "werden zurückgekommen sein"
        ]

    }

}

];


/* ===========================================================
   TENSES
=========================================================== */

const tenses = [

{
    id: "praesens",
    name: "Präsens",
    rule: "Gegenwart • regelmäßige Handlungen • Fokus auf Gewohnheiten",
    signalAliases: ["oft","meistens","manchmal","jeden Tag"],
    signals: [
        "immer",
        "nie",
        "jetzt"
    ]
},

{
    id: "praeteritum",
    name: "Präteritum",
    rule: "Vergangenheit • häufig schriftlich • Fokus auf dem Erzählen",
    signalAliases: ["letzte Woche"],
    signals: [
        "gestern",
        "damals",
        "letztes Jahr"
    ]
},

{
    id: "perfekt",
    name: "Perfekt",
    rule: "abgeschlossene Handlung • häufig mündlich • Fokus auf dem Ergebnis",
    signalAliases: ["schon","noch nicht","bis jetzt","bereits"],
    signals: [
        "schon einmal",
        "noch nie",
        "heute bereits"
    ]
},

{
    id: "plusquamperfekt",
    name: "Plusquamperfekt",
    rule: "Handlung vor einer anderen vergangenen Handlung • Fokus auf dem früheren Geschehen",
    signalAliases: ["zuvor","davor","bereits"],
    signals: [
        "vorher",
        "nachdem",
        "damals bereits"
    ]
},

{
    id: "futur1",
    name: "Futur I",
    rule: "zukünftige Handlung • Vermutung • Fokus auf Plan oder Annahme",
    signalAliases: ["bald","nächstes Jahr"],
    signals: [
        "morgen",
        "nächste Woche",
        "wahrscheinlich"
    ]
},

{
    id: "futur2",
    name: "Futur II",
    rule: "in der Zukunft abgeschlossene Handlung • Fokus auf dem Ergebnis bis dahin",
    signalAliases: ["bis zum Abend"],
    signals: [
        "bis dahin",
        "bis morgen",
        "bis Freitag"
    ]
}

];
