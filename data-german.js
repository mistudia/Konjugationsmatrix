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
    "oft",
    "meistens",
    "manchmal",
    "jeden Tag",

    "gestern",
    "letzte Woche",
    "letztes Jahr",
    "damals",

    "schon",
    "bereits",
    "noch nie",

    "vorher",
    "zuvor",

    "morgen",
    "nächste Woche",

    "bis dahin"

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
    infinitive: "lesen",
    type: "irregular",

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
    infinitive: "kaufen",
    type: "regular",

    forms: {

        praesens: [
            "kaufe",
            "kaufst",
            "kauft",
            "kaufen",
            "kauft",
            "kaufen"
        ],

        perfekt: [
            "habe gekauft",
            "hast gekauft",
            "hat gekauft",
            "haben gekauft",
            "habt gekauft",
            "haben gekauft"
        ],

        praeteritum: [
            "kaufte",
            "kauftest",
            "kaufte",
            "kauften",
            "kauftet",
            "kauften"
        ],

        plusquamperfekt: [
            "hatte gekauft",
            "hattest gekauft",
            "hatte gekauft",
            "hatten gekauft",
            "hattet gekauft",
            "hatten gekauft"
        ],

        futur1: [
            "werde kaufen",
            "wirst kaufen",
            "wird kaufen",
            "werden kaufen",
            "werdet kaufen",
            "werden kaufen"
        ],

        futur2: [
            "werde gekauft haben",
            "wirst gekauft haben",
            "wird gekauft haben",
            "werden gekauft haben",
            "werdet gekauft haben",
            "werden gekauft haben"
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

}

];


/* ===========================================================
   TENSES
=========================================================== */

const tenses = [

{
    id: "praesens",
    name: "Präsens",
    rule: "Gegenwart • regelmäßige Handlungen",
    signals: [
        "immer",
        "oft",
        "meistens",
        "manchmal",
        "jeden Tag"
    ]
},

{
    id: "perfekt",
    name: "Perfekt",
    rule: "abgeschlossene Handlung • häufig mündlich",
    signals: [
        "schon",
        "bereits",
        "noch nie"
    ]
},

{
    id: "praeteritum",
    name: "Präteritum",
    rule: "Vergangenheit • häufig schriftlich",
    signals: [
        "gestern",
        "damals",
        "letzte Woche",
        "letztes Jahr"
    ]
},

{
    id: "plusquamperfekt",
    name: "Plusquamperfekt",
    rule: "Handlung vor einer anderen vergangenen Handlung",
    signals: [
        "vorher",
        "zuvor",
        "bereits"
    ]
},

{
    id: "futur1",
    name: "Futur I",
    rule: "zukünftige Handlung • Vermutung",
    signals: [
        "morgen",
        "nächste Woche"
    ]
},

{
    id: "futur2",
    name: "Futur II",
    rule: "in der Zukunft abgeschlossene Handlung",
    signals: [
        "bis dahin"
    ]
}

];
