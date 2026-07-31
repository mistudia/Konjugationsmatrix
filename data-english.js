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
},


{
    infinitive: "do",
    type: "irregular",

    forms: {

        sp: ["do","do","does","do","do","do"],

        pp: [
            "am doing","are doing","is doing",
            "are doing","are doing","are doing"
        ],

        spa: Array(6).fill("did"),

        pap: [
            "was doing","were doing","was doing",
            "were doing","were doing","were doing"
        ],

        prp: [
            "have done","have done","has done",
            "have done","have done","have done"
        ],

        prpp: [
            "have been doing","have been doing","has been doing",
            "have been doing","have been doing","have been doing"
        ],

        plp: Array(6).fill("had done"),

        plpp: Array(6).fill("had been doing"),

        gtf: [
            "am going to do","are going to do","is going to do",
            "are going to do","are going to do","are going to do"
        ],

        wf: Array(6).fill("will do"),

        fp: Array(6).fill("will be doing"),

        fpe: Array(6).fill("will have done"),

        fpp: Array(6).fill("will have been doing")
    }
},



{
    infinitive: "be",
    type: "irregular",

    forms: {

        sp: [
            "am",
            "are",
            "is",
            "are",
            "are",
            "are"
        ],

        pp: [
            "am being",
            "are being",
            "is being",
            "are being",
            "are being",
            "are being"
        ],

        spa: [
            "was",
            "were",
            "was",
            "were",
            "were",
            "were"
        ],

        pap: [
            "was being",
            "were being",
            "was being",
            "were being",
            "were being",
            "were being"
        ],

        prp: [
            "have been",
            "have been",
            "has been",
            "have been",
            "have been",
            "have been"
        ],

        prpp: [
            "have been being",
            "have been being",
            "has been being",
            "have been being",
            "have been being",
            "have been being"
        ],

        plp: Array(6).fill("had been"),

        plpp: Array(6).fill("had been being"),

        gtf: [
            "am going to be",
            "are going to be",
            "is going to be",
            "are going to be",
            "are going to be",
            "are going to be"
        ],

        wf: Array(6).fill("will be"),

        fp: Array(6).fill("will be being"),

        fpe: Array(6).fill("will have been"),

        fpp: Array(6).fill("will have been being")
    }
},



{
    infinitive: "come",
    type: "irregular",
    forms: {
        sp: [
            "come",
            "come",
            "comes",
            "come",
            "come",
            "come"
        ],

        pp: [
            "am coming",
            "are coming",
            "is coming",
            "are coming",
            "are coming",
            "are coming"
        ],

        spa: Array(6).fill("came"),

        pap: [
            "was coming",
            "were coming",
            "was coming",
            "were coming",
            "were coming",
            "were coming"
        ],

        prp: [
            "have come",
            "have come",
            "has come",
            "have come",
            "have come",
            "have come"
        ],

        prpp: [
            "have been coming",
            "have been coming",
            "has been coming",
            "have been coming",
            "have been coming",
            "have been coming"
        ],

        plp: Array(6).fill("had come"),

        plpp: Array(6).fill("had been coming"),

        gtf: [
            "am going to come",
            "are going to come",
            "is going to come",
            "are going to come",
            "are going to come",
            "are going to come"
        ],

        wf: Array(6).fill("will come"),
        fp: Array(6).fill("will be coming"),
        fpe: Array(6).fill("will have come"),
        fpp: Array(6).fill("will have been coming")
    }
},

{
    infinitive: "ask",
    type: "regular",
    forms: {
        sp: [
            "ask",
            "ask",
            "asks",
            "ask",
            "ask",
            "ask"
        ],

        pp: [
            "am asking",
            "are asking",
            "is asking",
            "are asking",
            "are asking",
            "are asking"
        ],

        spa: Array(6).fill("asked"),

        pap: [
            "was asking",
            "were asking",
            "was asking",
            "were asking",
            "were asking",
            "were asking"
        ],

        prp: [
            "have asked",
            "have asked",
            "has asked",
            "have asked",
            "have asked",
            "have asked"
        ],

        prpp: [
            "have been asking",
            "have been asking",
            "has been asking",
            "have been asking",
            "have been asking",
            "have been asking"
        ],

        plp: Array(6).fill("had asked"),

        plpp: Array(6).fill("had been asking"),

        gtf: [
            "am going to ask",
            "are going to ask",
            "is going to ask",
            "are going to ask",
            "are going to ask",
            "are going to ask"
        ],

        wf: Array(6).fill("will ask"),
        fp: Array(6).fill("will be asking"),
        fpe: Array(6).fill("will have asked"),
        fpp: Array(6).fill("will have been asking")
    }
},

{
    infinitive: "answer",
    type: "regular",
    forms: {
        sp: [
            "answer",
            "answer",
            "answers",
            "answer",
            "answer",
            "answer"
        ],

        pp: [
            "am answering",
            "are answering",
            "is answering",
            "are answering",
            "are answering",
            "are answering"
        ],

        spa: Array(6).fill("answered"),

        pap: [
            "was answering",
            "were answering",
            "was answering",
            "were answering",
            "were answering",
            "were answering"
        ],

        prp: [
            "have answered",
            "have answered",
            "has answered",
            "have answered",
            "have answered",
            "have answered"
        ],

        prpp: [
            "have been answering",
            "have been answering",
            "has been answering",
            "have been answering",
            "have been answering",
            "have been answering"
        ],

        plp: Array(6).fill("had answered"),

        plpp: Array(6).fill("had been answering"),

        gtf: [
            "am going to answer",
            "are going to answer",
            "is going to answer",
            "are going to answer",
            "are going to answer",
            "are going to answer"
        ],

        wf: Array(6).fill("will answer"),
        fp: Array(6).fill("will be answering"),
        fpe: Array(6).fill("will have answered"),
        fpp: Array(6).fill("will have been answering")
    }
},

{
    infinitive: "begin",
    type: "irregular",
    forms: {
        sp: [
            "begin",
            "begin",
            "begins",
            "begin",
            "begin",
            "begin"
        ],

        pp: [
            "am beginning",
            "are beginning",
            "is beginning",
            "are beginning",
            "are beginning",
            "are beginning"
        ],

        spa: Array(6).fill("began"),

        pap: [
            "was beginning",
            "were beginning",
            "was beginning",
            "were beginning",
            "were beginning",
            "were beginning"
        ],

        prp: [
            "have begun",
            "have begun",
            "has begun",
            "have begun",
            "have begun",
            "have begun"
        ],

        prpp: [
            "have been beginning",
            "have been beginning",
            "has been beginning",
            "have been beginning",
            "have been beginning",
            "have been beginning"
        ],

        plp: Array(6).fill("had begun"),

        plpp: Array(6).fill("had been beginning"),

        gtf: [
            "am going to begin",
            "are going to begin",
            "is going to begin",
            "are going to begin",
            "are going to begin",
            "are going to begin"
        ],

        wf: Array(6).fill("will begin"),
        fp: Array(6).fill("will be beginning"),
        fpe: Array(6).fill("will have begun"),
        fpp: Array(6).fill("will have been beginning")
    }
},

{
    infinitive: "believe",
    type: "regular",
    forms: {
        sp: [
            "believe",
            "believe",
            "believes",
            "believe",
            "believe",
            "believe"
        ],

        pp: [
            "am believing",
            "are believing",
            "is believing",
            "are believing",
            "are believing",
            "are believing"
        ],

        spa: Array(6).fill("believed"),

        pap: [
            "was believing",
            "were believing",
            "was believing",
            "were believing",
            "were believing",
            "were believing"
        ],

        prp: [
            "have believed",
            "have believed",
            "has believed",
            "have believed",
            "have believed",
            "have believed"
        ],

        prpp: [
            "have been believing",
            "have been believing",
            "has been believing",
            "have been believing",
            "have been believing",
            "have been believing"
        ],

        plp: Array(6).fill("had believed"),

        plpp: Array(6).fill("had been believing"),

        gtf: [
            "am going to believe",
            "are going to believe",
            "is going to believe",
            "are going to believe",
            "are going to believe",
            "are going to believe"
        ],

        wf: Array(6).fill("will believe"),
        fp: Array(6).fill("will be believing"),
        fpe: Array(6).fill("will have believed"),
        fpp: Array(6).fill("will have been believing")
    }
},

{
    infinitive: "close",
    type: "regular",
    forms: {
        sp: [
            "close",
            "close",
            "closes",
            "close",
            "close",
            "close"
        ],

        pp: [
            "am closing",
            "are closing",
            "is closing",
            "are closing",
            "are closing",
            "are closing"
        ],

        spa: Array(6).fill("closed"),

        pap: [
            "was closing",
            "were closing",
            "was closing",
            "were closing",
            "were closing",
            "were closing"
        ],

        prp: [
            "have closed",
            "have closed",
            "has closed",
            "have closed",
            "have closed",
            "have closed"
        ],

        prpp: [
            "have been closing",
            "have been closing",
            "has been closing",
            "have been closing",
            "have been closing",
            "have been closing"
        ],

        plp: Array(6).fill("had closed"),

        plpp: Array(6).fill("had been closing"),

        gtf: [
            "am going to close",
            "are going to close",
            "is going to close",
            "are going to close",
            "are going to close",
            "are going to close"
        ],

        wf: Array(6).fill("will close"),
        fp: Array(6).fill("will be closing"),
        fpe: Array(6).fill("will have closed"),
        fpp: Array(6).fill("will have been closing")
    }
},

{
    infinitive: "cook",
    type: "regular",
    forms: {
        sp: [
            "cook",
            "cook",
            "cooks",
            "cook",
            "cook",
            "cook"
        ],

        pp: [
            "am cooking",
            "are cooking",
            "is cooking",
            "are cooking",
            "are cooking",
            "are cooking"
        ],

        spa: Array(6).fill("cooked"),

        pap: [
            "was cooking",
            "were cooking",
            "was cooking",
            "were cooking",
            "were cooking",
            "were cooking"
        ],

        prp: [
            "have cooked",
            "have cooked",
            "has cooked",
            "have cooked",
            "have cooked",
            "have cooked"
        ],

        prpp: [
            "have been cooking",
            "have been cooking",
            "has been cooking",
            "have been cooking",
            "have been cooking",
            "have been cooking"
        ],

        plp: Array(6).fill("had cooked"),

        plpp: Array(6).fill("had been cooking"),

        gtf: [
            "am going to cook",
            "are going to cook",
            "is going to cook",
            "are going to cook",
            "are going to cook",
            "are going to cook"
        ],

        wf: Array(6).fill("will cook"),
        fp: Array(6).fill("will be cooking"),
        fpe: Array(6).fill("will have cooked"),
        fpp: Array(6).fill("will have been cooking")
    }
},

{
    infinitive: "call",
    type: "regular",
    forms: {
        sp: [
            "call",
            "call",
            "calls",
            "call",
            "call",
            "call"
        ],

        pp: [
            "am calling",
            "are calling",
            "is calling",
            "are calling",
            "are calling",
            "are calling"
        ],

        spa: Array(6).fill("called"),

        pap: [
            "was calling",
            "were calling",
            "was calling",
            "were calling",
            "were calling",
            "were calling"
        ],

        prp: [
            "have called",
            "have called",
            "has called",
            "have called",
            "have called",
            "have called"
        ],

        prpp: [
            "have been calling",
            "have been calling",
            "has been calling",
            "have been calling",
            "have been calling",
            "have been calling"
        ],

        plp: Array(6).fill("had called"),

        plpp: Array(6).fill("had been calling"),

        gtf: [
            "am going to call",
            "are going to call",
            "is going to call",
            "are going to call",
            "are going to call",
            "are going to call"
        ],

        wf: Array(6).fill("will call"),
        fp: Array(6).fill("will be calling"),
        fpe: Array(6).fill("will have called"),
        fpp: Array(6).fill("will have been calling")
    }
},

{
    infinitive: "find",
    type: "irregular",
    forms: {
        sp: [
            "find",
            "find",
            "finds",
            "find",
            "find",
            "find"
        ],

        pp: [
            "am finding",
            "are finding",
            "is finding",
            "are finding",
            "are finding",
            "are finding"
        ],

        spa: Array(6).fill("found"),

        pap: [
            "was finding",
            "were finding",
            "was finding",
            "were finding",
            "were finding",
            "were finding"
        ],

        prp: [
            "have found",
            "have found",
            "has found",
            "have found",
            "have found",
            "have found"
        ],

        prpp: [
            "have been finding",
            "have been finding",
            "has been finding",
            "have been finding",
            "have been finding",
            "have been finding"
        ],

        plp: Array(6).fill("had found"),

        plpp: Array(6).fill("had been finding"),

        gtf: [
            "am going to find",
            "are going to find",
            "is going to find",
            "are going to find",
            "are going to find",
            "are going to find"
        ],

        wf: Array(6).fill("will find"),
        fp: Array(6).fill("will be finding"),
        fpe: Array(6).fill("will have found"),
        fpp: Array(6).fill("will have been finding")
    }
},

{
    infinitive: "get",
    type: "irregular",
    forms: {
        sp: [
            "get",
            "get",
            "gets",
            "get",
            "get",
            "get"
        ],

        pp: [
            "am getting",
            "are getting",
            "is getting",
            "are getting",
            "are getting",
            "are getting"
        ],

        spa: Array(6).fill("got"),

        pap: [
            "was getting",
            "were getting",
            "was getting",
            "were getting",
            "were getting",
            "were getting"
        ],

        prp: [
            "have got",
            "have got",
            "has got",
            "have got",
            "have got",
            "have got"
        ],

        prpp: [
            "have been getting",
            "have been getting",
            "has been getting",
            "have been getting",
            "have been getting",
            "have been getting"
        ],

        plp: Array(6).fill("had got"),

        plpp: Array(6).fill("had been getting"),

        gtf: [
            "am going to get",
            "are going to get",
            "is going to get",
            "are going to get",
            "are going to get",
            "are going to get"
        ],

        wf: Array(6).fill("will get"),
        fp: Array(6).fill("will be getting"),
        fpe: Array(6).fill("will have got"),
        fpp: Array(6).fill("will have been getting")
    }
},

{
    infinitive: "drink",
    type: "irregular",
    forms: {
        sp: [
            "drink",
            "drink",
            "drinks",
            "drink",
            "drink",
            "drink"
        ],

        pp: [
            "am drinking",
            "are drinking",
            "is drinking",
            "are drinking",
            "are drinking",
            "are drinking"
        ],

        spa: Array(6).fill("drank"),

        pap: [
            "was drinking",
            "were drinking",
            "was drinking",
            "were drinking",
            "were drinking",
            "were drinking"
        ],

        prp: [
            "have drunk",
            "have drunk",
            "has drunk",
            "have drunk",
            "have drunk",
            "have drunk"
        ],

        prpp: [
            "have been drinking",
            "have been drinking",
            "has been drinking",
            "have been drinking",
            "have been drinking",
            "have been drinking"
        ],

        plp: Array(6).fill("had drunk"),

        plpp: Array(6).fill("had been drinking"),

        gtf: [
            "am going to drink",
            "are going to drink",
            "is going to drink",
            "are going to drink",
            "are going to drink",
            "are going to drink"
        ],

        wf: Array(6).fill("will drink"),
        fp: Array(6).fill("will be drinking"),
        fpe: Array(6).fill("will have drunk"),
        fpp: Array(6).fill("will have been drinking")
    }
},

{
    infinitive: "eat",
    type: "irregular",
    forms: {
        sp: [
            "eat",
            "eat",
            "eats",
            "eat",
            "eat",
            "eat"
        ],

        pp: [
            "am eating",
            "are eating",
            "is eating",
            "are eating",
            "are eating",
            "are eating"
        ],

        spa: Array(6).fill("ate"),

        pap: [
            "was eating",
            "were eating",
            "was eating",
            "were eating",
            "were eating",
            "were eating"
        ],

        prp: [
            "have eaten",
            "have eaten",
            "has eaten",
            "have eaten",
            "have eaten",
            "have eaten"
        ],

        prpp: [
            "have been eating",
            "have been eating",
            "has been eating",
            "have been eating",
            "have been eating",
            "have been eating"
        ],

        plp: Array(6).fill("had eaten"),

        plpp: Array(6).fill("had been eating"),

        gtf: [
            "am going to eat",
            "are going to eat",
            "is going to eat",
            "are going to eat",
            "are going to eat",
            "are going to eat"
        ],

        wf: Array(6).fill("will eat"),
        fp: Array(6).fill("will be eating"),
        fpe: Array(6).fill("will have eaten"),
        fpp: Array(6).fill("will have been eating")
    }
},

{
    infinitive: "feel",
    type: "irregular",
    forms: {
        sp: [
            "feel",
            "feel",
            "feels",
            "feel",
            "feel",
            "feel"
        ],

        pp: [
            "am feeling",
            "are feeling",
            "is feeling",
            "are feeling",
            "are feeling",
            "are feeling"
        ],

        spa: Array(6).fill("felt"),

        pap: [
            "was feeling",
            "were feeling",
            "was feeling",
            "were feeling",
            "were feeling",
            "were feeling"
        ],

        prp: [
            "have felt",
            "have felt",
            "has felt",
            "have felt",
            "have felt",
            "have felt"
        ],

        prpp: [
            "have been feeling",
            "have been feeling",
            "has been feeling",
            "have been feeling",
            "have been feeling",
            "have been feeling"
        ],

        plp: Array(6).fill("had felt"),

        plpp: Array(6).fill("had been feeling"),

        gtf: [
            "am going to feel",
            "are going to feel",
            "is going to feel",
            "are going to feel",
            "are going to feel",
            "are going to feel"
        ],

        wf: Array(6).fill("will feel"),
        fp: Array(6).fill("will be feeling"),
        fpe: Array(6).fill("will have felt"),
        fpp: Array(6).fill("will have been feeling")
    }
},

{
    infinitive: "give",
    type: "irregular",
    forms: {
        sp: [
            "give",
            "give",
            "gives",
            "give",
            "give",
            "give"
        ],

        pp: [
            "am giving",
            "are giving",
            "is giving",
            "are giving",
            "are giving",
            "are giving"
        ],

        spa: Array(6).fill("gave"),

        pap: [
            "was giving",
            "were giving",
            "was giving",
            "were giving",
            "were giving",
            "were giving"
        ],

        prp: [
            "have given",
            "have given",
            "has given",
            "have given",
            "have given",
            "have given"
        ],

        prpp: [
            "have been giving",
            "have been giving",
            "has been giving",
            "have been giving",
            "have been giving",
            "have been giving"
        ],

        plp: Array(6).fill("had given"),

        plpp: Array(6).fill("had been giving"),

        gtf: [
            "am going to give",
            "are going to give",
            "is going to give",
            "are going to give",
            "are going to give",
            "are going to give"
        ],

        wf: Array(6).fill("will give"),
        fp: Array(6).fill("will be giving"),
        fpe: Array(6).fill("will have given"),
        fpp: Array(6).fill("will have been giving")
    }
},

{
    infinitive: "leave",
    type: "irregular",
    forms: {
        sp: [
            "leave",
            "leave",
            "leaves",
            "leave",
            "leave",
            "leave"
        ],

        pp: [
            "am leaving",
            "are leaving",
            "is leaving",
            "are leaving",
            "are leaving",
            "are leaving"
        ],

        spa: Array(6).fill("left"),

        pap: [
            "was leaving",
            "were leaving",
            "was leaving",
            "were leaving",
            "were leaving",
            "were leaving"
        ],

        prp: [
            "have left",
            "have left",
            "has left",
            "have left",
            "have left",
            "have left"
        ],

        prpp: [
            "have been leaving",
            "have been leaving",
            "has been leaving",
            "have been leaving",
            "have been leaving",
            "have been leaving"
        ],

        plp: Array(6).fill("had left"),

        plpp: Array(6).fill("had been leaving"),

        gtf: [
            "am going to leave",
            "are going to leave",
            "is going to leave",
            "are going to leave",
            "are going to leave",
            "are going to leave"
        ],

        wf: Array(6).fill("will leave"),
        fp: Array(6).fill("will be leaving"),
        fpe: Array(6).fill("will have left"),
        fpp: Array(6).fill("will have been leaving")
    }
},

{
    infinitive: "have",
    type: "irregular",
    forms: {
        sp: [
            "have",
            "have",
            "has",
            "have",
            "have",
            "have"
        ],

        pp: [
            "am having",
            "are having",
            "is having",
            "are having",
            "are having",
            "are having"
        ],

        spa: Array(6).fill("had"),

        pap: [
            "was having",
            "were having",
            "was having",
            "were having",
            "were having",
            "were having"
        ],

        prp: [
            "have had",
            "have had",
            "has had",
            "have had",
            "have had",
            "have had"
        ],

        prpp: [
            "have been having",
            "have been having",
            "has been having",
            "have been having",
            "have been having",
            "have been having"
        ],

        plp: Array(6).fill("had had"),

        plpp: Array(6).fill("had been having"),

        gtf: [
            "am going to have",
            "are going to have",
            "is going to have",
            "are going to have",
            "are going to have",
            "are going to have"
        ],

        wf: Array(6).fill("will have"),
        fp: Array(6).fill("will be having"),
        fpe: Array(6).fill("will have had"),
        fpp: Array(6).fill("will have been having")
    }
},

{
    infinitive: "help",
    type: "regular",
    forms: {
        sp: [
            "help",
            "help",
            "helps",
            "help",
            "help",
            "help"
        ],

        pp: [
            "am helping",
            "are helping",
            "is helping",
            "are helping",
            "are helping",
            "are helping"
        ],

        spa: Array(6).fill("helped"),

        pap: [
            "was helping",
            "were helping",
            "was helping",
            "were helping",
            "were helping",
            "were helping"
        ],

        prp: [
            "have helped",
            "have helped",
            "has helped",
            "have helped",
            "have helped",
            "have helped"
        ],

        prpp: [
            "have been helping",
            "have been helping",
            "has been helping",
            "have been helping",
            "have been helping",
            "have been helping"
        ],

        plp: Array(6).fill("had helped"),

        plpp: Array(6).fill("had been helping"),

        gtf: [
            "am going to help",
            "are going to help",
            "is going to help",
            "are going to help",
            "are going to help",
            "are going to help"
        ],

        wf: Array(6).fill("will help"),
        fp: Array(6).fill("will be helping"),
        fpe: Array(6).fill("will have helped"),
        fpp: Array(6).fill("will have been helping")
    }
},

{
    infinitive: "know",
    type: "irregular",
    forms: {
        sp: [
            "know",
            "know",
            "knows",
            "know",
            "know",
            "know"
        ],

        pp: [
            "am knowing",
            "are knowing",
            "is knowing",
            "are knowing",
            "are knowing",
            "are knowing"
        ],

        spa: Array(6).fill("knew"),

        pap: [
            "was knowing",
            "were knowing",
            "was knowing",
            "were knowing",
            "were knowing",
            "were knowing"
        ],

        prp: [
            "have known",
            "have known",
            "has known",
            "have known",
            "have known",
            "have known"
        ],

        prpp: [
            "have been knowing",
            "have been knowing",
            "has been knowing",
            "have been knowing",
            "have been knowing",
            "have been knowing"
        ],

        plp: Array(6).fill("had known"),

        plpp: Array(6).fill("had been knowing"),

        gtf: [
            "am going to know",
            "are going to know",
            "is going to know",
            "are going to know",
            "are going to know",
            "are going to know"
        ],

        wf: Array(6).fill("will know"),
        fp: Array(6).fill("will be knowing"),
        fpe: Array(6).fill("will have known"),
        fpp: Array(6).fill("will have been knowing")
    }
},

{
    infinitive: "learn",
    type: "regular",
    forms: {
        sp: [
            "learn",
            "learn",
            "learns",
            "learn",
            "learn",
            "learn"
        ],

        pp: [
            "am learning",
            "are learning",
            "is learning",
            "are learning",
            "are learning",
            "are learning"
        ],

        spa: Array(6).fill("learned"),

        pap: [
            "was learning",
            "were learning",
            "was learning",
            "were learning",
            "were learning",
            "were learning"
        ],

        prp: [
            "have learned",
            "have learned",
            "has learned",
            "have learned",
            "have learned",
            "have learned"
        ],

        prpp: [
            "have been learning",
            "have been learning",
            "has been learning",
            "have been learning",
            "have been learning",
            "have been learning"
        ],

        plp: Array(6).fill("had learned"),

        plpp: Array(6).fill("had been learning"),

        gtf: [
            "am going to learn",
            "are going to learn",
            "is going to learn",
            "are going to learn",
            "are going to learn",
            "are going to learn"
        ],

        wf: Array(6).fill("will learn"),
        fp: Array(6).fill("will be learning"),
        fpe: Array(6).fill("will have learned"),
        fpp: Array(6).fill("will have been learning")
    }
},

{
    infinitive: "live",
    type: "regular",
    forms: {
        sp: [
            "live",
            "live",
            "lives",
            "live",
            "live",
            "live"
        ],

        pp: [
            "am living",
            "are living",
            "is living",
            "are living",
            "are living",
            "are living"
        ],

        spa: Array(6).fill("lived"),

        pap: [
            "was living",
            "were living",
            "was living",
            "were living",
            "were living",
            "were living"
        ],

        prp: [
            "have lived",
            "have lived",
            "has lived",
            "have lived",
            "have lived",
            "have lived"
        ],

        prpp: [
            "have been living",
            "have been living",
            "has been living",
            "have been living",
            "have been living",
            "have been living"
        ],

        plp: Array(6).fill("had lived"),

        plpp: Array(6).fill("had been living"),

        gtf: [
            "am going to live",
            "are going to live",
            "is going to live",
            "are going to live",
            "are going to live",
            "are going to live"
        ],

        wf: Array(6).fill("will live"),
        fp: Array(6).fill("will be living"),
        fpe: Array(6).fill("will have lived"),
        fpp: Array(6).fill("will have been living")
    }
},

{
    infinitive: "look for",
    type: "regular",
    forms: {
        sp: [
            "look for",
            "look for",
            "looks for",
            "look for",
            "look for",
            "look for"
        ],

        pp: [
            "am looking for",
            "are looking for",
            "is looking for",
            "are looking for",
            "are looking for",
            "are looking for"
        ],

        spa: Array(6).fill("looked for"),

        pap: [
            "was looking for",
            "were looking for",
            "was looking for",
            "were looking for",
            "were looking for",
            "were looking for"
        ],

        prp: [
            "have looked for",
            "have looked for",
            "has looked for",
            "have looked for",
            "have looked for",
            "have looked for"
        ],

        prpp: [
            "have been looking for",
            "have been looking for",
            "has been looking for",
            "have been looking for",
            "have been looking for",
            "have been looking for"
        ],

        plp: Array(6).fill("had looked for"),

        plpp: Array(6).fill("had been looking for"),

        gtf: [
            "am going to look for",
            "are going to look for",
            "is going to look for",
            "are going to look for",
            "are going to look for",
            "are going to look for"
        ],

        wf: Array(6).fill("will look for"),
        fp: Array(6).fill("will be looking for"),
        fpe: Array(6).fill("will have looked for"),
        fpp: Array(6).fill("will have been looking for")
    }
},

{
    infinitive: "love",
    type: "regular",
    forms: {
        sp: [
            "love",
            "love",
            "loves",
            "love",
            "love",
            "love"
        ],

        pp: [
            "am loving",
            "are loving",
            "is loving",
            "are loving",
            "are loving",
            "are loving"
        ],

        spa: Array(6).fill("loved"),

        pap: [
            "was loving",
            "were loving",
            "was loving",
            "were loving",
            "were loving",
            "were loving"
        ],

        prp: [
            "have loved",
            "have loved",
            "has loved",
            "have loved",
            "have loved",
            "have loved"
        ],

        prpp: [
            "have been loving",
            "have been loving",
            "has been loving",
            "have been loving",
            "have been loving",
            "have been loving"
        ],

        plp: Array(6).fill("had loved"),

        plpp: Array(6).fill("had been loving"),

        gtf: [
            "am going to love",
            "are going to love",
            "is going to love",
            "are going to love",
            "are going to love",
            "are going to love"
        ],

        wf: Array(6).fill("will love"),
        fp: Array(6).fill("will be loving"),
        fpe: Array(6).fill("will have loved"),
        fpp: Array(6).fill("will have been loving")
    }
},

{
    infinitive: "need",
    type: "regular",
    forms: {
        sp: [
            "need",
            "need",
            "needs",
            "need",
            "need",
            "need"
        ],

        pp: [
            "am needing",
            "are needing",
            "is needing",
            "are needing",
            "are needing",
            "are needing"
        ],

        spa: Array(6).fill("needed"),

        pap: [
            "was needing",
            "were needing",
            "was needing",
            "were needing",
            "were needing",
            "were needing"
        ],

        prp: [
            "have needed",
            "have needed",
            "has needed",
            "have needed",
            "have needed",
            "have needed"
        ],

        prpp: [
            "have been needing",
            "have been needing",
            "has been needing",
            "have been needing",
            "have been needing",
            "have been needing"
        ],

        plp: Array(6).fill("had needed"),

        plpp: Array(6).fill("had been needing"),

        gtf: [
            "am going to need",
            "are going to need",
            "is going to need",
            "are going to need",
            "are going to need",
            "are going to need"
        ],

        wf: Array(6).fill("will need"),
        fp: Array(6).fill("will be needing"),
        fpe: Array(6).fill("will have needed"),
        fpp: Array(6).fill("will have been needing")
    }
},

{
    infinitive: "open",
    type: "regular",
    forms: {
        sp: [
            "open",
            "open",
            "opens",
            "open",
            "open",
            "open"
        ],

        pp: [
            "am opening",
            "are opening",
            "is opening",
            "are opening",
            "are opening",
            "are opening"
        ],

        spa: Array(6).fill("opened"),

        pap: [
            "was opening",
            "were opening",
            "was opening",
            "were opening",
            "were opening",
            "were opening"
        ],

        prp: [
            "have opened",
            "have opened",
            "has opened",
            "have opened",
            "have opened",
            "have opened"
        ],

        prpp: [
            "have been opening",
            "have been opening",
            "has been opening",
            "have been opening",
            "have been opening",
            "have been opening"
        ],

        plp: Array(6).fill("had opened"),

        plpp: Array(6).fill("had been opening"),

        gtf: [
            "am going to open",
            "are going to open",
            "is going to open",
            "are going to open",
            "are going to open",
            "are going to open"
        ],

        wf: Array(6).fill("will open"),
        fp: Array(6).fill("will be opening"),
        fpe: Array(6).fill("will have opened"),
        fpp: Array(6).fill("will have been opening")
    }
},

{
    infinitive: "order",
    type: "regular",
    forms: {
        sp: [
            "order",
            "order",
            "orders",
            "order",
            "order",
            "order"
        ],

        pp: [
            "am ordering",
            "are ordering",
            "is ordering",
            "are ordering",
            "are ordering",
            "are ordering"
        ],

        spa: Array(6).fill("ordered"),

        pap: [
            "was ordering",
            "were ordering",
            "was ordering",
            "were ordering",
            "were ordering",
            "were ordering"
        ],

        prp: [
            "have ordered",
            "have ordered",
            "has ordered",
            "have ordered",
            "have ordered",
            "have ordered"
        ],

        prpp: [
            "have been ordering",
            "have been ordering",
            "has been ordering",
            "have been ordering",
            "have been ordering",
            "have been ordering"
        ],

        plp: Array(6).fill("had ordered"),

        plpp: Array(6).fill("had been ordering"),

        gtf: [
            "am going to order",
            "are going to order",
            "is going to order",
            "are going to order",
            "are going to order",
            "are going to order"
        ],

        wf: Array(6).fill("will order"),
        fp: Array(6).fill("will be ordering"),
        fpe: Array(6).fill("will have ordered"),
        fpp: Array(6).fill("will have been ordering")
    }
},

{
    infinitive: "pay",
    type: "irregular",
    forms: {
        sp: [
            "pay",
            "pay",
            "pays",
            "pay",
            "pay",
            "pay"
        ],

        pp: [
            "am paying",
            "are paying",
            "is paying",
            "are paying",
            "are paying",
            "are paying"
        ],

        spa: Array(6).fill("paid"),

        pap: [
            "was paying",
            "were paying",
            "was paying",
            "were paying",
            "were paying",
            "were paying"
        ],

        prp: [
            "have paid",
            "have paid",
            "has paid",
            "have paid",
            "have paid",
            "have paid"
        ],

        prpp: [
            "have been paying",
            "have been paying",
            "has been paying",
            "have been paying",
            "have been paying",
            "have been paying"
        ],

        plp: Array(6).fill("had paid"),

        plpp: Array(6).fill("had been paying"),

        gtf: [
            "am going to pay",
            "are going to pay",
            "is going to pay",
            "are going to pay",
            "are going to pay",
            "are going to pay"
        ],

        wf: Array(6).fill("will pay"),
        fp: Array(6).fill("will be paying"),
        fpe: Array(6).fill("will have paid"),
        fpp: Array(6).fill("will have been paying")
    }
},

{
    infinitive: "prefer",
    type: "regular",
    forms: {
        sp: [
            "prefer",
            "prefer",
            "prefers",
            "prefer",
            "prefer",
            "prefer"
        ],

        pp: [
            "am preferring",
            "are preferring",
            "is preferring",
            "are preferring",
            "are preferring",
            "are preferring"
        ],

        spa: Array(6).fill("preferred"),

        pap: [
            "was preferring",
            "were preferring",
            "was preferring",
            "were preferring",
            "were preferring",
            "were preferring"
        ],

        prp: [
            "have preferred",
            "have preferred",
            "has preferred",
            "have preferred",
            "have preferred",
            "have preferred"
        ],

        prpp: [
            "have been preferring",
            "have been preferring",
            "has been preferring",
            "have been preferring",
            "have been preferring",
            "have been preferring"
        ],

        plp: Array(6).fill("had preferred"),

        plpp: Array(6).fill("had been preferring"),

        gtf: [
            "am going to prefer",
            "are going to prefer",
            "is going to prefer",
            "are going to prefer",
            "are going to prefer",
            "are going to prefer"
        ],

        wf: Array(6).fill("will prefer"),
        fp: Array(6).fill("will be preferring"),
        fpe: Array(6).fill("will have preferred"),
        fpp: Array(6).fill("will have been preferring")
    }
},

{
    infinitive: "put",
    type: "irregular",
    forms: {
        sp: [
            "put",
            "put",
            "puts",
            "put",
            "put",
            "put"
        ],

        pp: [
            "am putting",
            "are putting",
            "is putting",
            "are putting",
            "are putting",
            "are putting"
        ],

        spa: Array(6).fill("put"),

        pap: [
            "was putting",
            "were putting",
            "was putting",
            "were putting",
            "were putting",
            "were putting"
        ],

        prp: [
            "have put",
            "have put",
            "has put",
            "have put",
            "have put",
            "have put"
        ],

        prpp: [
            "have been putting",
            "have been putting",
            "has been putting",
            "have been putting",
            "have been putting",
            "have been putting"
        ],

        plp: Array(6).fill("had put"),

        plpp: Array(6).fill("had been putting"),

        gtf: [
            "am going to put",
            "are going to put",
            "is going to put",
            "are going to put",
            "are going to put",
            "are going to put"
        ],

        wf: Array(6).fill("will put"),
        fp: Array(6).fill("will be putting"),
        fpe: Array(6).fill("will have put"),
        fpp: Array(6).fill("will have been putting")
    }
},

{
    infinitive: "return",
    type: "regular",
    forms: {
        sp: [
            "return",
            "return",
            "returns",
            "return",
            "return",
            "return"
        ],

        pp: [
            "am returning",
            "are returning",
            "is returning",
            "are returning",
            "are returning",
            "are returning"
        ],

        spa: Array(6).fill("returned"),

        pap: [
            "was returning",
            "were returning",
            "was returning",
            "were returning",
            "were returning",
            "were returning"
        ],

        prp: [
            "have returned",
            "have returned",
            "has returned",
            "have returned",
            "have returned",
            "have returned"
        ],

        prpp: [
            "have been returning",
            "have been returning",
            "has been returning",
            "have been returning",
            "have been returning",
            "have been returning"
        ],

        plp: Array(6).fill("had returned"),

        plpp: Array(6).fill("had been returning"),

        gtf: [
            "am going to return",
            "are going to return",
            "is going to return",
            "are going to return",
            "are going to return",
            "are going to return"
        ],

        wf: Array(6).fill("will return"),
        fp: Array(6).fill("will be returning"),
        fpe: Array(6).fill("will have returned"),
        fpp: Array(6).fill("will have been returning")
    }
},

{
    infinitive: "run",
    type: "irregular",
    forms: {
        sp: [
            "run",
            "run",
            "runs",
            "run",
            "run",
            "run"
        ],

        pp: [
            "am running",
            "are running",
            "is running",
            "are running",
            "are running",
            "are running"
        ],

        spa: Array(6).fill("ran"),

        pap: [
            "was running",
            "were running",
            "was running",
            "were running",
            "were running",
            "were running"
        ],

        prp: [
            "have run",
            "have run",
            "has run",
            "have run",
            "have run",
            "have run"
        ],

        prpp: [
            "have been running",
            "have been running",
            "has been running",
            "have been running",
            "have been running",
            "have been running"
        ],

        plp: Array(6).fill("had run"),

        plpp: Array(6).fill("had been running"),

        gtf: [
            "am going to run",
            "are going to run",
            "is going to run",
            "are going to run",
            "are going to run",
            "are going to run"
        ],

        wf: Array(6).fill("will run"),
        fp: Array(6).fill("will be running"),
        fpe: Array(6).fill("will have run"),
        fpp: Array(6).fill("will have been running")
    }
},

{
    infinitive: "say",
    type: "irregular",
    forms: {
        sp: [
            "say",
            "say",
            "says",
            "say",
            "say",
            "say"
        ],

        pp: [
            "am saying",
            "are saying",
            "is saying",
            "are saying",
            "are saying",
            "are saying"
        ],

        spa: Array(6).fill("said"),

        pap: [
            "was saying",
            "were saying",
            "was saying",
            "were saying",
            "were saying",
            "were saying"
        ],

        prp: [
            "have said",
            "have said",
            "has said",
            "have said",
            "have said",
            "have said"
        ],

        prpp: [
            "have been saying",
            "have been saying",
            "has been saying",
            "have been saying",
            "have been saying",
            "have been saying"
        ],

        plp: Array(6).fill("had said"),

        plpp: Array(6).fill("had been saying"),

        gtf: [
            "am going to say",
            "are going to say",
            "is going to say",
            "are going to say",
            "are going to say",
            "are going to say"
        ],

        wf: Array(6).fill("will say"),
        fp: Array(6).fill("will be saying"),
        fpe: Array(6).fill("will have said"),
        fpp: Array(6).fill("will have been saying")
    }
},

{
    infinitive: "speak",
    type: "irregular",
    forms: {
        sp: [
            "speak",
            "speak",
            "speaks",
            "speak",
            "speak",
            "speak"
        ],

        pp: [
            "am speaking",
            "are speaking",
            "is speaking",
            "are speaking",
            "are speaking",
            "are speaking"
        ],

        spa: Array(6).fill("spoke"),

        pap: [
            "was speaking",
            "were speaking",
            "was speaking",
            "were speaking",
            "were speaking",
            "were speaking"
        ],

        prp: [
            "have spoken",
            "have spoken",
            "has spoken",
            "have spoken",
            "have spoken",
            "have spoken"
        ],

        prpp: [
            "have been speaking",
            "have been speaking",
            "has been speaking",
            "have been speaking",
            "have been speaking",
            "have been speaking"
        ],

        plp: Array(6).fill("had spoken"),

        plpp: Array(6).fill("had been speaking"),

        gtf: [
            "am going to speak",
            "are going to speak",
            "is going to speak",
            "are going to speak",
            "are going to speak",
            "are going to speak"
        ],

        wf: Array(6).fill("will speak"),
        fp: Array(6).fill("will be speaking"),
        fpe: Array(6).fill("will have spoken"),
        fpp: Array(6).fill("will have been speaking")
    }
},

{
    infinitive: "stay",
    type: "regular",
    forms: {
        sp: [
            "stay",
            "stay",
            "stays",
            "stay",
            "stay",
            "stay"
        ],

        pp: [
            "am staying",
            "are staying",
            "is staying",
            "are staying",
            "are staying",
            "are staying"
        ],

        spa: Array(6).fill("stayed"),

        pap: [
            "was staying",
            "were staying",
            "was staying",
            "were staying",
            "were staying",
            "were staying"
        ],

        prp: [
            "have stayed",
            "have stayed",
            "has stayed",
            "have stayed",
            "have stayed",
            "have stayed"
        ],

        prpp: [
            "have been staying",
            "have been staying",
            "has been staying",
            "have been staying",
            "have been staying",
            "have been staying"
        ],

        plp: Array(6).fill("had stayed"),

        plpp: Array(6).fill("had been staying"),

        gtf: [
            "am going to stay",
            "are going to stay",
            "is going to stay",
            "are going to stay",
            "are going to stay",
            "are going to stay"
        ],

        wf: Array(6).fill("will stay"),
        fp: Array(6).fill("will be staying"),
        fpe: Array(6).fill("will have stayed"),
        fpp: Array(6).fill("will have been staying")
    }
},

{
    infinitive: "think",
    type: "irregular",
    forms: {
        sp: [
            "think",
            "think",
            "thinks",
            "think",
            "think",
            "think"
        ],

        pp: [
            "am thinking",
            "are thinking",
            "is thinking",
            "are thinking",
            "are thinking",
            "are thinking"
        ],

        spa: Array(6).fill("thought"),

        pap: [
            "was thinking",
            "were thinking",
            "was thinking",
            "were thinking",
            "were thinking",
            "were thinking"
        ],

        prp: [
            "have thought",
            "have thought",
            "has thought",
            "have thought",
            "have thought",
            "have thought"
        ],

        prpp: [
            "have been thinking",
            "have been thinking",
            "has been thinking",
            "have been thinking",
            "have been thinking",
            "have been thinking"
        ],

        plp: Array(6).fill("had thought"),

        plpp: Array(6).fill("had been thinking"),

        gtf: [
            "am going to think",
            "are going to think",
            "is going to think",
            "are going to think",
            "are going to think",
            "are going to think"
        ],

        wf: Array(6).fill("will think"),
        fp: Array(6).fill("will be thinking"),
        fpe: Array(6).fill("will have thought"),
        fpp: Array(6).fill("will have been thinking")
    }
},

{
    infinitive: "travel",
    type: "regular",
    forms: {
        sp: [
            "travel",
            "travel",
            "travels",
            "travel",
            "travel",
            "travel"
        ],

        pp: [
            "am travelling",
            "are travelling",
            "is travelling",
            "are travelling",
            "are travelling",
            "are travelling"
        ],

        spa: Array(6).fill("travelled"),

        pap: [
            "was travelling",
            "were travelling",
            "was travelling",
            "were travelling",
            "were travelling",
            "were travelling"
        ],

        prp: [
            "have travelled",
            "have travelled",
            "has travelled",
            "have travelled",
            "have travelled",
            "have travelled"
        ],

        prpp: [
            "have been travelling",
            "have been travelling",
            "has been travelling",
            "have been travelling",
            "have been travelling",
            "have been travelling"
        ],

        plp: Array(6).fill("had travelled"),

        plpp: Array(6).fill("had been travelling"),

        gtf: [
            "am going to travel",
            "are going to travel",
            "is going to travel",
            "are going to travel",
            "are going to travel",
            "are going to travel"
        ],

        wf: Array(6).fill("will travel"),
        fp: Array(6).fill("will be travelling"),
        fpe: Array(6).fill("will have travelled"),
        fpp: Array(6).fill("will have been travelling")
    }
},

{
    infinitive: "understand",
    type: "irregular",
    forms: {
        sp: [
            "understand",
            "understand",
            "understands",
            "understand",
            "understand",
            "understand"
        ],

        pp: [
            "am understanding",
            "are understanding",
            "is understanding",
            "are understanding",
            "are understanding",
            "are understanding"
        ],

        spa: Array(6).fill("understood"),

        pap: [
            "was understanding",
            "were understanding",
            "was understanding",
            "were understanding",
            "were understanding",
            "were understanding"
        ],

        prp: [
            "have understood",
            "have understood",
            "has understood",
            "have understood",
            "have understood",
            "have understood"
        ],

        prpp: [
            "have been understanding",
            "have been understanding",
            "has been understanding",
            "have been understanding",
            "have been understanding",
            "have been understanding"
        ],

        plp: Array(6).fill("had understood"),

        plpp: Array(6).fill("had been understanding"),

        gtf: [
            "am going to understand",
            "are going to understand",
            "is going to understand",
            "are going to understand",
            "are going to understand",
            "are going to understand"
        ],

        wf: Array(6).fill("will understand"),
        fp: Array(6).fill("will be understanding"),
        fpe: Array(6).fill("will have understood"),
        fpp: Array(6).fill("will have been understanding")
    }
},

{
    infinitive: "use",
    type: "regular",
    forms: {
        sp: [
            "use",
            "use",
            "uses",
            "use",
            "use",
            "use"
        ],

        pp: [
            "am using",
            "are using",
            "is using",
            "are using",
            "are using",
            "are using"
        ],

        spa: Array(6).fill("used"),

        pap: [
            "was using",
            "were using",
            "was using",
            "were using",
            "were using",
            "were using"
        ],

        prp: [
            "have used",
            "have used",
            "has used",
            "have used",
            "have used",
            "have used"
        ],

        prpp: [
            "have been using",
            "have been using",
            "has been using",
            "have been using",
            "have been using",
            "have been using"
        ],

        plp: Array(6).fill("had used"),

        plpp: Array(6).fill("had been using"),

        gtf: [
            "am going to use",
            "are going to use",
            "is going to use",
            "are going to use",
            "are going to use",
            "are going to use"
        ],

        wf: Array(6).fill("will use"),
        fp: Array(6).fill("will be using"),
        fpe: Array(6).fill("will have used"),
        fpp: Array(6).fill("will have been using")
    }
},

{
    infinitive: "wait",
    type: "regular",
    forms: {
        sp: [
            "wait",
            "wait",
            "waits",
            "wait",
            "wait",
            "wait"
        ],

        pp: [
            "am waiting",
            "are waiting",
            "is waiting",
            "are waiting",
            "are waiting",
            "are waiting"
        ],

        spa: Array(6).fill("waited"),

        pap: [
            "was waiting",
            "were waiting",
            "was waiting",
            "were waiting",
            "were waiting",
            "were waiting"
        ],

        prp: [
            "have waited",
            "have waited",
            "has waited",
            "have waited",
            "have waited",
            "have waited"
        ],

        prpp: [
            "have been waiting",
            "have been waiting",
            "has been waiting",
            "have been waiting",
            "have been waiting",
            "have been waiting"
        ],

        plp: Array(6).fill("had waited"),

        plpp: Array(6).fill("had been waiting"),

        gtf: [
            "am going to wait",
            "are going to wait",
            "is going to wait",
            "are going to wait",
            "are going to wait",
            "are going to wait"
        ],

        wf: Array(6).fill("will wait"),
        fp: Array(6).fill("will be waiting"),
        fpe: Array(6).fill("will have waited"),
        fpp: Array(6).fill("will have been waiting")
    }
},

{
    infinitive: "want",
    type: "regular",
    forms: {
        sp: [
            "want",
            "want",
            "wants",
            "want",
            "want",
            "want"
        ],

        pp: [
            "am wanting",
            "are wanting",
            "is wanting",
            "are wanting",
            "are wanting",
            "are wanting"
        ],

        spa: Array(6).fill("wanted"),

        pap: [
            "was wanting",
            "were wanting",
            "was wanting",
            "were wanting",
            "were wanting",
            "were wanting"
        ],

        prp: [
            "have wanted",
            "have wanted",
            "has wanted",
            "have wanted",
            "have wanted",
            "have wanted"
        ],

        prpp: [
            "have been wanting",
            "have been wanting",
            "has been wanting",
            "have been wanting",
            "have been wanting",
            "have been wanting"
        ],

        plp: Array(6).fill("had wanted"),

        plpp: Array(6).fill("had been wanting"),

        gtf: [
            "am going to want",
            "are going to want",
            "is going to want",
            "are going to want",
            "are going to want",
            "are going to want"
        ],

        wf: Array(6).fill("will want"),
        fp: Array(6).fill("will be wanting"),
        fpe: Array(6).fill("will have wanted"),
        fpp: Array(6).fill("will have been wanting")
    }
},

{
    infinitive: "work",
    type: "regular",
    forms: {
        sp: [
            "work",
            "work",
            "works",
            "work",
            "work",
            "work"
        ],

        pp: [
            "am working",
            "are working",
            "is working",
            "are working",
            "are working",
            "are working"
        ],

        spa: Array(6).fill("worked"),

        pap: [
            "was working",
            "were working",
            "was working",
            "were working",
            "were working",
            "were working"
        ],

        prp: [
            "have worked",
            "have worked",
            "has worked",
            "have worked",
            "have worked",
            "have worked"
        ],

        prpp: [
            "have been working",
            "have been working",
            "has been working",
            "have been working",
            "have been working",
            "have been working"
        ],

        plp: Array(6).fill("had worked"),

        plpp: Array(6).fill("had been working"),

        gtf: [
            "am going to work",
            "are going to work",
            "is going to work",
            "are going to work",
            "are going to work",
            "are going to work"
        ],

        wf: Array(6).fill("will work"),
        fp: Array(6).fill("will be working"),
        fpe: Array(6).fill("will have worked"),
        fpp: Array(6).fill("will have been working")
    }
},
];


/* ===========================================================
   TENSES
=========================================================== */

const tenses = [

{
    id: "sp",
    name: "Simple Present",
    rule: "routines",
    signals: [
        "always",
        "sometimes",
        "never",
        "every day"
    ]
},

{
    id: "pp",
    name: "Present Progressive/Continuous",
    rule: "action happening now",
    signals: [
        "now",
        "at the moment"
    ]
},

{
    id: "spa",
    name: "Simple Past",
    rule: "standard past tense",
    signals: [
        "yesterday",
        "last week",
        "ago"
    ]
},

{
    id: "pap",
    name: "Past Progressive/Continuous",
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
           ]
},

{
    id: "prpp",
    name: "Present Perfect Progressive/Continuous",
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
        "before"
    ]
},

{
    id: "plpp",
    name: "Past Perfect Progressive/Continuous",
    rule: "duration before a past moment",
    signals: [
"all day before",
"for hours before"
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
        "next week",

"probably",
"I think",
"perhaps"
    ]
},

{
    id: "fp",
    name: "Future Progressive/Continuous",
    rule: "action in progress in the future",
    signals: [
"at this time tomorrow",
"tomorrow at 8",
"tomorrow afternoon"
    ]
},

{
    id: "fpe",
    name: "Future Perfect",
    rule: "completed before a future moment",
    signals: [
        "by then",
"by Friday",
"by tomorrow"
    ]
},

{
    id: "fpp",
    name: "Future Perfect Progressive/Continuous",
    rule: "duration until a future moment",
    signals: [
"for two hours by then",
"for ten years by then",
"for a week by then"
    ]
}

];

const signalWords = [
    "",
    ...new Set(
        tenses.flatMap(t => t.signals)
    )
];
