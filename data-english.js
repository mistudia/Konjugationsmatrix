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
