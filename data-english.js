/* ===========================================================
   MISTUDIA ENGLISH TENSE TRAINER
   data.js
=========================================================== */

const columns = [

    { pronoun:"I",    infinitive:"go"      },
    { pronoun:"you",  infinitive:"listen"  },
    { pronoun:"he",   infinitive:"play"    },
    { pronoun:"she",  infinitive:"buy"     },
    { pronoun:"it",   infinitive:"rain"    },
    { pronoun:"we",   infinitive:"write"   },
    { pronoun:"you",  infinitive:"read"    },
    { pronoun:"they", infinitive:"see"     }

];

const signalWords = [

    "",
    "always",
    "usually",
    "often",
    "sometimes",
    "every day",
    "never",

    "now",
    "right now",
    "at the moment",
    "currently",

    "yesterday",
    "last week",
    "last month",
    "last year",
    "ago",

    "while",
    "when",

    "already",
    "just",
    "yet",
    "ever",
    "since",
    "for",

    "tomorrow",
    "next week",
    "soon",

    "probably",
    "perhaps",
    "maybe",
    "I think",

    "this time tomorrow",

    "by tomorrow",
    "by next week",
    "by 2030",

    "for two hours",
    "for three years"

];

const tenses = [

{
    id:"sp",
    name:"Simple Present",
    rule:"facts • routines • timetables",

    forms:[
        "go",
        "listen",
        "plays",
        "buys",
        "rains",
        "write",
        "read",
        "see"
    ],

    signals:[
        "always",
        "usually",
        "often",
        "sometimes",
        "every day",
        "never"
    ]
},

{
    id:"pp",
    name:"Present Progressive",
    rule:"action happening now",

    forms:[
        "am going",
        "are listening",
        "is playing",
        "is buying",
        "is raining",
        "are writing",
        "are reading",
        "are seeing"
    ],

    signals:[
        "now",
        "right now",
        "at the moment",
        "currently"
    ]
},

{
    id:"spa",
    name:"Simple Past",
    rule:"finished action in the past",

    forms:[
        "went",
        "listened",
        "played",
        "bought",
        "rained",
        "wrote",
        "read",
        "saw"
    ],

    signals:[
        "yesterday",
        "last week",
        "last month",
        "last year",
        "ago"
    ]
},

{
    id:"pap",
    name:"Past Progressive",
    rule:"action in progress in the past",

    forms:[
        "was going",
        "were listening",
        "was playing",
        "was buying",
        "was raining",
        "were writing",
        "were reading",
        "were seeing"
    ],

    signals:[
        "while",
        "when"
    ]
},

{
    id:"prp",
    name:"Present Perfect",

    rule:"past with present result",

    forms:[
        "have gone",
        "have listened",
        "has played",
        "has bought",
        "has rained",
        "have written",
        "have read",
        "have seen"
    ],

    signals:[
        "already",
        "just",
        "yet",
        "ever",
        "never",
        "since",
        "for"
    ]
},

{
    id:"prpp",
    name:"Present Perfect Progressive",

    rule:"action continuing until now",

    forms:[
        "have been going",
        "have been listening",
        "has been playing",
        "has been buying",
        "has been raining",
        "have been writing",
        "have been reading",
        "have been seeing"
    ],

    signals:[
        "since",
        "for"
    ]
},

{
    id:"papf",
    name:"Past Perfect",

    rule:"before another past action",

    forms:[
        "had gone",
        "had listened",
        "had played",
        "had bought",
        "had rained",
        "had written",
        "had read",
        "had seen"
    ],

    signals:[
        "before",
        "after",
        "by the time"
    ]
},

{
    id:"papfp",
    name:"Past Perfect Progressive",

    rule:"continuous action before another past action",

    forms:[
        "had been going",
        "had been listening",
        "had been playing",
        "had been buying",
        "had been raining",
        "had been writing",
        "had been reading",
        "had been seeing"
    ],

    signals:[
        "since",
        "for",
        "before"
    ]
},

{
    id:"gtf",
    name:"Going to Future",

    rule:"planned future",

    forms:[
        "am going to go",
        "are going to listen",
        "is going to play",
        "is going to buy",
        "is going to rain",
        "are going to write",
        "are going to read",
        "are going to see"
    ],

    signals:[
        "tomorrow",
        "next week",
        "soon"
    ]
},

{
    id:"wf",
    name:"Will Future",

    rule:"spontaneous future",

    forms:[
        "will go",
        "will listen",
        "will play",
        "will buy",
        "will rain",
        "will write",
        "will read",
        "will see"
    ],

    signals:[
        "probably",
        "perhaps",
        "maybe",
        "I think"
    ]
},

{
    id:"fp",

    name:"Future Progressive",

    rule:"action in progress in the future",

    forms:[
        "will be going",
        "will be listening",
        "will be playing",
        "will be buying",
        "will be raining",
        "will be writing",
        "will be reading",
        "will be seeing"
    ],

    signals:[
        "this time tomorrow"
    ]
},

{
    id:"fperf",

    name:"Future Perfect",

    rule:"finished before a future point",

    forms:[
        "will have gone",
        "will have listened",
        "will have played",
        "will have bought",
        "will have rained",
        "will have written",
        "will have read",
        "will have seen"
    ],

    signals:[
        "by tomorrow",
        "by next week",
        "by 2030"
    ]
},

{
    id:"fperfp",

    name:"Future Perfect Progressive",

    rule:"duration until a future point",

    forms:[
        "will have been going",
        "will have been listening",
        "will have been playing",
        "will have been buying",
        "will have been raining",
        "will have been writing",
        "will have been reading",
        "will have been seeing"
    ],

    signals:[
        "for two hours",
        "for three years",
        "by next week"
    ]
}

];