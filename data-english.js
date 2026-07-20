/* ===========================================================
   MISTUDIA ENGLISH TENSE TRAINER
   data-english.js
=========================================================== */

const languageConfig = {

    code: "en",
    name: "English",

    pronouns: [
        "I",
        "you",
    "he/she/it",
        "we",
        "you",
        "they"
    ],

 mixedPronouns: {

    3: [
        "I",
        "you",
        "he/she/it"
    ],

    6: [
        "I",
        "you",
        "he/she/it",
        "we",
        "you",
        "they"
    ],

    8: [
        "I",
        "you",
        "he",
        "she",
        "it",
        "we",
        "you",
        "they"
    ]
}

};


/* ===========================================================
   VERB POOL
=========================================================== */

const verbPool = [

{
    infinitive: "go",
    type: "irregular",

    forms: {

        sp: [
            "go",
            "go",
            "goes",
            "go",
            "go",
            "go"
        ],

        pp: [
            "am going",
            "are going",
            "is going",
            "are going",
            "are going",
            "are going"
        ],

        spa: [
            "went",
            "went",
            "went",
            "went",
            "went",
            "went"
        ],

        pap: [
            "was going",
            "were going",
            "was going",
            "were going",
            "were going",
            "were going"
        ],

        prp: [
            "have gone",
            "have gone",
            "has gone",
            "have gone",
            "have gone",
            "have gone"
        ],

        prpp: [
            "have been going",
            "have been going",
            "has been going",
            "have been going",
            "have been going",
            "have been going"
        ],

        plp: [
            "had gone",
            "had gone",
            "had gone",
            "had gone",
            "had gone",
            "had gone"
        ],

        plpp: [
            "had been going",
            "had been going",
            "had been going",
            "had been going",
            "had been going",
            "had been going"
        ],

        gtf: [
            "am going to go",
            "are going to go",
            "is going to go",
            "are going to go",
            "are going to go",
            "are going to go"
        ],

        wf: [
            "will go",
            "will go",
            "will go",
            "will go",
            "will go",
            "will go"
        ],

        fp: [
            "will be going",
            "will be going",
            "will be going",
            "will be going",
            "will be going",
            "will be going"
        ],

        fpe: [
            "will have gone",
            "will have gone",
            "will have gone",
            "will have gone",
            "will have gone",
            "will have gone"
        ],

        fpp: [
            "will have been going",
            "will have been going",
            "will have been going",
            "will have been going",
            "will have been going",
            "will have been going"
        ]

    }

},

{
    infinitive: "write",
    type: "irregular",

    forms: {

        sp: ["write","write","writes","write","write","write"],

        pp: [
            "am writing",
            "are writing",
            "is writing",
            "are writing",
            "are writing",
            "are writing"
        ],

        spa: ["wrote","wrote","wrote","wrote","wrote","wrote"],

        pap: [
            "was writing",
            "were writing",
            "was writing",
            "were writing",
            "were writing",
            "were writing"
        ],

        prp: [
            "have written",
            "have written",
            "has written",
            "have written",
            "have written",
            "have written"
        ],

        prpp: [
            "have been writing",
            "have been writing",
            "has been writing",
            "have been writing",
            "have been writing",
            "have been writing"
        ],

        plp: Array(6).fill("had written"),

        plpp: Array(6).fill("had been writing"),

        gtf: [
            "am going to write",
            "are going to write",
            "is going to write",
            "are going to write",
            "are going to write",
            "are going to write"
        ],

        wf: Array(6).fill("will write"),

        fp: Array(6).fill("will be writing"),

        fpe: Array(6).fill("will have written"),

        fpp: Array(6).fill("will have been writing")

    }

},

{
    infinitive: "see",
    type: "irregular",

    forms: {

        sp: ["see","see","sees","see","see","see"],

        pp: [
            "am seeing",
            "are seeing",
            "is seeing",
            "are seeing",
            "are seeing",
            "are seeing"
        ],

        spa: Array(6).fill("saw"),

        pap: [
            "was seeing",
            "were seeing",
            "was seeing",
            "were seeing",
            "were seeing",
            "were seeing"
        ],

        prp: [
            "have seen",
            "have seen",
            "has seen",
            "have seen",
            "have seen",
            "have seen"
        ],

        prpp: [
            "have been seeing",
            "have been seeing",
            "has been seeing",
            "have been seeing",
            "have been seeing",
            "have been seeing"
        ],

        plp: Array(6).fill("had seen"),

        plpp: Array(6).fill("had been seeing"),

        gtf: [
            "am going to see",
            "are going to see",
            "is going to see",
            "are going to see",
            "are going to see",
            "are going to see"
        ],

        wf: Array(6).fill("will see"),

        fp: Array(6).fill("will be seeing"),

        fpe: Array(6).fill("will have seen"),

        fpp: Array(6).fill("will have been seeing")

    }

},

{
    infinitive: "play",
    type: "regular",

    forms: {

        sp: ["play","play","plays","play","play","play"],

        pp: [
            "am playing",
            "are playing",
            "is playing",
            "are playing",
            "are playing",
            "are playing"
        ],

        spa: Array(6).fill("played"),

        pap: [
            "was playing",
            "were playing",
            "was playing",
            "were playing",
            "were playing",
            "were playing"
        ],

        prp: [
            "have played",
            "have played",
            "has played",
            "have played",
            "have played",
            "have played"
        ],

        prpp: [
            "have been playing",
            "have been playing",
            "has been playing",
            "have been playing",
            "have been playing",
            "have been playing"
        ],

        plp: Array(6).fill("had played"),

        plpp: Array(6).fill("had been playing"),

        gtf: [
            "am going to play",
            "are going to play",
            "is going to play",
            "are going to play",
            "are going to play",
            "are going to play"
        ],

        wf: Array(6).fill("will play"),

        fp: Array(6).fill("will be playing"),

        fpe: Array(6).fill("will have played"),

        fpp: Array(6).fill("will have been playing")

    }

},

{
    infinitive: "read",
    type: "irregular",

    forms: {

        sp: ["read","read","reads","read","read","read"],

        pp: [
            "am reading",
            "are reading",
            "is reading",
            "are reading",
            "are reading",
            "are reading"
        ],

        spa: Array(6).fill("read"),

        pap: [
            "was reading",
            "were reading",
            "was reading",
            "were reading",
            "were reading",
            "were reading"
        ],

        prp: [
            "have read",
            "have read",
            "has read",
            "have read",
            "have read",
            "have read"
        ],

        prpp: [
            "have been reading",
            "have been reading",
            "has been reading",
            "have been reading",
            "have been reading",
            "have been reading"
        ],

        plp: Array(6).fill("had read"),

        plpp: Array(6).fill("had been reading"),

        gtf: [
            "am going to read",
            "are going to read",
            "is going to read",
            "are going to read",
            "are going to read",
            "are going to read"
        ],

        wf: Array(6).fill("will read"),

        fp: Array(6).fill("will be reading"),

        fpe: Array(6).fill("will have read"),

        fpp: Array(6).fill("will have been reading")

    }

},

{
    infinitive: "buy",
    type: "irregular",

    forms: {

        sp: ["buy","buy","buys","buy","buy","buy"],

        pp: [
            "am buying",
            "are buying",
            "is buying",
            "are buying",
            "are buying",
            "are buying"
        ],

        spa: Array(6).fill("bought"),

        pap: [
            "was buying",
            "were buying",
            "was buying",
            "were buying",
            "were buying",
            "were buying"
        ],

        prp: [
            "have bought",
            "have bought",
            "has bought",
            "have bought",
            "have bought",
            "have bought"
        ],

        prpp: [
            "have been buying",
            "have been buying",
            "has been buying",
            "have been buying",
            "have been buying",
            "have been buying"
        ],

        plp: Array(6).fill("had bought"),

        plpp: Array(6).fill("had been buying"),

        gtf: [
            "am going to buy",
            "are going to buy",
            "is going to buy",
            "are going to buy",
            "are going to buy",
            "are going to buy"
        ],

        wf: Array(6).fill("will buy"),

        fp: Array(6).fill("will be buying"),

        fpe: Array(6).fill("will have bought"),

        fpp: Array(6).fill("will have been buying")

    }

}


,

{
    infinitive: "listen",
    type: "regular",

    forms: {
        sp: ["listen","listen","listens","listen","listen","listen"],

        pp: [
            "am listening","are listening","is listening",
            "are listening","are listening","are listening"
        ],

        spa: Array(6).fill("listened"),

        pap: [
            "was listening","were listening","was listening",
            "were listening","were listening","were listening"
        ],

        prp: [
            "have listened","have listened","has listened",
            "have listened","have listened","have listened"
        ],

        prpp: [
            "have been listening","have been listening","has been listening",
            "have been listening","have been listening","have been listening"
        ],

        plp: Array(6).fill("had listened"),

        plpp: Array(6).fill("had been listening"),

        gtf: [
            "am going to listen","are going to listen","is going to listen",
            "are going to listen","are going to listen","are going to listen"
        ],

        wf: Array(6).fill("will listen"),
        fp: Array(6).fill("will be listening"),
        fpe: Array(6).fill("will have listened"),
        fpp: Array(6).fill("will have been listening")
    }
},

{
    infinitive: "take",
    type: "irregular",

    forms: {
        sp: ["take","take","takes","take","take","take"],

        pp: [
            "am taking","are taking","is taking",
            "are taking","are taking","are taking"
        ],

        spa: Array(6).fill("took"),

        pap: [
            "was taking","were taking","was taking",
            "were taking","were taking","were taking"
        ],

        prp: [
            "have taken","have taken","has taken",
            "have taken","have taken","have taken"
        ],

        prpp: [
            "have been taking","have been taking","has been taking",
            "have been taking","have been taking","have been taking"
        ],

        plp: Array(6).fill("had taken"),

        plpp: Array(6).fill("had been taking"),

        gtf: [
            "am going to take","are going to take","is going to take",
            "are going to take","are going to take","are going to take"
        ],

        wf: Array(6).fill("will take"),
        fp: Array(6).fill("will be taking"),
        fpe: Array(6).fill("will have taken"),
        fpp: Array(6).fill("will have been taking")
    }
}


];


/* ===========================================================
   TENSES
=========================================================== */

const tenses = [

{
    id: "sp",
    name: "Simple Present",
    rule: "habits • facts • regular actions",
    signals: [
        "always",
        "usually",
        "often",
        "sometimes",
        "never",
        "every day"
    ]
},

{
    id: "pp",
    name: "Present Progressive",
    rule: "action happening now",
    signals: [
        "now",
        "at the moment"
    ]
},

{
    id: "spa",
    name: "Simple Past",
    rule: "finished action in the past",
    signals: [
        "yesterday",
        "last week",
        "last year"
    ]
},

{
    id: "pap",
    name: "Past Progressive",
    rule: "action in progress in the past",
    signals: [
        "while",
        "at that moment"
    ]
},

{
    id: "prp",
    name: "Present Perfect",
    rule: "past action with present result",
    signals: [
        "already",
        "just",
        "yet",
        "ever",
        "never"
    ]
},

{
    id: "prpp",
    name: "Present Perfect Progressive",
    rule: "action continuing until now",
    signals: [
        "since",
        "for"
    ]
},

{
    id: "plp",
    name: "Past Perfect",
    rule: "action before another past action",
    signals: [
        "already",
        "before"
    ]
},

{
    id: "plpp",
    name: "Past Perfect Progressive",
    rule: "duration before a past moment",
    signals: [
        "for",
        "since"
    ]
},

{
    id: "gtf",
    name: "Going to Future",
    rule: "plans • intentions",
    signals: [
        "tomorrow",
        "next week"
    ]
},

{
    id: "wf",
    name: "Will Future",
    rule: "predictions • spontaneous decisions",
    signals: [
        "tomorrow",
        "probably"
    ]
},

{
    id: "fp",
    name: "Future Progressive",
    rule: "action in progress in the future",
    signals: [
        "this time tomorrow"
    ]
},

{
    id: "fpe",
    name: "Future Perfect",
    rule: "completed before a future moment",
    signals: [
        "by then"
    ]
},

{
    id: "fpp",
    name: "Future Perfect Progressive",
    rule: "duration until a future moment",
    signals: [
        "for",
        "by then"
    ]
}

];

const signalWords = [
    "",
    ...new Set(
        tenses.flatMap(t => t.signals)
    )
];
