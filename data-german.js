/* ===========================================================
   MISTUDIA GERMAN TENSE TRAINER
   data-german.js
=========================================================== */

const columns = [

    { pronoun:"ich", infinitive:"gehen" },
    { pronoun:"du", infinitive:"hören" },
    { pronoun:"er", infinitive:"spielen" },
    { pronoun:"sie", infinitive:"kaufen" },
    { pronoun:"es", infinitive:"regnen" },
    { pronoun:"wir", infinitive:"schreiben" },
    { pronoun:"ihr", infinitive:"lesen" },
    { pronoun:"sie", infinitive:"sehen" }

];

const signalWords = [

    "",

    "jetzt",
    "gerade",
    "im Moment",
    "heute",

    "gestern",
    "letzte Woche",
    "letztes Jahr",

    "schon",
    "noch nicht",
    "bereits",

    "morgen",
    "nächste Woche",

    "bevor",
    "nachdem",

    "seit",
    "seitdem"
];

const tenses = [

{
    id:"praesens",

    name:"Präsens",

    rule:"Gegenwart",

    forms:[

        "gehe",
        "hörst",
        "spielt",
        "kauft",
        "regnet",
        "schreiben",
        "lest",
        "sehen"

    ],

    signals:[
        "jetzt",
        "heute",
        "gerade",
        "im Moment"
    ]
},

{
    id:"perfekt",

    name:"Perfekt",

    rule:"abgeschlossene Vergangenheit",

    forms:[

        "bin gegangen",
        "hast gehört",
        "hat gespielt",
        "hat gekauft",
        "hat geregnet",
        "haben geschrieben",
        "habt gelesen",
        "haben gesehen"

    ],

    signals:[

        "schon",
        "bereits",
        "noch nicht"

    ]
},

{
    id:"praeteritum",

    name:"Präteritum",

    rule:"Vergangenheit",

    forms:[

        "ging",
        "hörtest",
        "spielte",
        "kaufte",
        "regnete",
        "schrieben",
        "last",
        "sahen"

    ],

    signals:[

        "gestern",
        "letzte Woche",
        "letztes Jahr"

    ]
},

{
    id:"plusquamperfekt",

    name:"Plusquamperfekt",

    rule:"Vorvergangenheit",

    forms:[

        "war gegangen",
        "hattest gehört",
        "hatte gespielt",
        "hatte gekauft",
        "hatte geregnet",
        "hatten geschrieben",
        "hattet gelesen",
        "hatten gesehen"

    ],

    signals:[

        "bevor",
        "nachdem"

    ]
},

{
    id:"futur1",

    name:"Futur I",

    rule:"Zukunft",

    forms:[

        "werde gehen",
        "wirst hören",
        "wird spielen",
        "wird kaufen",
        "wird regnen",
        "werden schreiben",
        "werdet lesen",
        "werden sehen"

    ],

    signals:[

        "morgen",
        "nächste Woche"

    ]
},

{
    id:"futur2",

    name:"Futur II",

    rule:"vollendete Zukunft",

    forms:[

        "werde gegangen sein",
        "wirst gehört haben",
        "wird gespielt haben",
        "wird gekauft haben",
        "wird geregnet haben",
        "werden geschrieben haben",
        "werdet gelesen haben",
        "werden gesehen haben"

    ],

    signals:[

        "bis morgen",
        "bis nächste Woche"

    ]
}

];