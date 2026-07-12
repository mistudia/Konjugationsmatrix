/* ===========================================================
   MISTUDIA SPANISH TENSE TRAINER
   data-spanish.js
=========================================================== */

const languageConfig = {
    code: "es",
    name: "Español",

    pronouns: [
        "yo",
        "tú",
        "él",
        "nosotros",
        "vosotros",
        "ellos"
    ],

    mixedPronouns: {
        3: ["yo", "tú", "él"],
        6: ["yo", "tú", "él", "nosotros", "vosotros", "ellos"],
        8: [
            "yo",
            "tú",
            "él",
            "ella",
            "usted",
            "nosotros",
            "vosotros",
            "ellos"
        ]
    }
};


/* ===========================================================
   SIGNAL WORDS
=========================================================== */

const signalWords = [
    "",
    "siempre",
    "normalmente",
    "a menudo",
    "todos los días",
    "ahora",
    "en este momento",
    "hoy",
    "ayer",
    "anoche",
    "la semana pasada",
    "el año pasado",
    "ya",
    "todavía no",
    "nunca",
    "alguna vez",
    "mañana",
    "la semana que viene",
    "para entonces"
];


/* ===========================================================
   VERB POOL
=========================================================== */

const verbPool = [

{
    infinitive: "hablar",
    type: "regular",

    forms: {
        presente:
            ["hablo", "hablas", "habla", "hablamos", "habláis", "hablan"],

        estarGerundio:
            ["estoy hablando", "estás hablando", "está hablando",
             "estamos hablando", "estáis hablando", "están hablando"],

        preteritoPerfecto:
            ["he hablado", "has hablado", "ha hablado",
             "hemos hablado", "habéis hablado", "han hablado"],

        preteritoIndefinido:
            ["hablé", "hablaste", "habló",
             "hablamos", "hablasteis", "hablaron"],

        preteritoImperfecto:
            ["hablaba", "hablabas", "hablaba",
             "hablábamos", "hablabais", "hablaban"],

        pluscuamperfecto:
            ["había hablado", "habías hablado", "había hablado",
             "habíamos hablado", "habíais hablado", "habían hablado"],

        futuroSimple:
            ["hablaré", "hablarás", "hablará",
             "hablaremos", "hablaréis", "hablarán"],

        futuroPerfecto:
            ["habré hablado", "habrás hablado", "habrá hablado",
             "habremos hablado", "habréis hablado", "habrán hablado"]
    }
},

{
    infinitive: "comer",
    type: "regular",

    forms: {
        presente:
            ["como", "comes", "come", "comemos", "coméis", "comen"],

        estarGerundio:
            ["estoy comiendo", "estás comiendo", "está comiendo",
             "estamos comiendo", "estáis comiendo", "están comiendo"],

        preteritoPerfecto:
            ["he comido", "has comido", "ha comido",
             "hemos comido", "habéis comido", "han comido"],

        preteritoIndefinido:
            ["comí", "comiste", "comió",
             "comimos", "comisteis", "comieron"],

        preteritoImperfecto:
            ["comía", "comías", "comía",
             "comíamos", "comíais", "comían"],

        pluscuamperfecto:
            ["había comido", "habías comido", "había comido",
             "habíamos comido", "habíais comido", "habían comido"],

        futuroSimple:
            ["comeré", "comerás", "comerá",
             "comeremos", "comeréis", "comerán"],

        futuroPerfecto:
            ["habré comido", "habrás comido", "habrá comido",
             "habremos comido", "habréis comido", "habrán comido"]
    }
},

{
    infinitive: "vivir",
    type: "regular",

    forms: {
        presente:
            ["vivo", "vives", "vive", "vivimos", "vivís", "viven"],

        estarGerundio:
            ["estoy viviendo", "estás viviendo", "está viviendo",
             "estamos viviendo", "estáis viviendo", "están viviendo"],

        preteritoPerfecto:
            ["he vivido", "has vivido", "ha vivido",
             "hemos vivido", "habéis vivido", "han vivido"],

        preteritoIndefinido:
            ["viví", "viviste", "vivió",
             "vivimos", "vivisteis", "vivieron"],

        preteritoImperfecto:
            ["vivía", "vivías", "vivía",
             "vivíamos", "vivíais", "vivían"],

        pluscuamperfecto:
            ["había vivido", "habías vivido", "había vivido",
             "habíamos vivido", "habíais vivido", "habían vivido"],

        futuroSimple:
            ["viviré", "vivirás", "vivirá",
             "viviremos", "viviréis", "vivirán"],

        futuroPerfecto:
            ["habré vivido", "habrás vivido", "habrá vivido",
             "habremos vivido", "habréis vivido", "habrán vivido"]
    }
},

{
    infinitive: "tener",
    type: "irregular",

    forms: {
        presente:
            ["tengo", "tienes", "tiene", "tenemos", "tenéis", "tienen"],

        estarGerundio:
            ["estoy teniendo", "estás teniendo", "está teniendo",
             "estamos teniendo", "estáis teniendo", "están teniendo"],

        preteritoPerfecto:
            ["he tenido", "has tenido", "ha tenido",
             "hemos tenido", "habéis tenido", "han tenido"],

        preteritoIndefinido:
            ["tuve", "tuviste", "tuvo",
             "tuvimos", "tuvisteis", "tuvieron"],

        preteritoImperfecto:
            ["tenía", "tenías", "tenía",
             "teníamos", "teníais", "tenían"],

        pluscuamperfecto:
            ["había tenido", "habías tenido", "había tenido",
             "habíamos tenido", "habíais tenido", "habían tenido"],

        futuroSimple:
            ["tendré", "tendrás", "tendrá",
             "tendremos", "tendréis", "tendrán"],

        futuroPerfecto:
            ["habré tenido", "habrás tenido", "habrá tenido",
             "habremos tenido", "habréis tenido", "habrán tenido"]
    }
},

{
    infinitive: "hacer",
    type: "irregular",

    forms: {
        presente:
            ["hago", "haces", "hace", "hacemos", "hacéis", "hacen"],

        estarGerundio:
            ["estoy haciendo", "estás haciendo", "está haciendo",
             "estamos haciendo", "estáis haciendo", "están haciendo"],

        preteritoPerfecto:
            ["he hecho", "has hecho", "ha hecho",
             "hemos hecho", "habéis hecho", "han hecho"],

        preteritoIndefinido:
            ["hice", "hiciste", "hizo",
             "hicimos", "hicisteis", "hicieron"],

        preteritoImperfecto:
            ["hacía", "hacías", "hacía",
             "hacíamos", "hacíais", "hacían"],

        pluscuamperfecto:
            ["había hecho", "habías hecho", "había hecho",
             "habíamos hecho", "habíais hecho", "habían hecho"],

        futuroSimple:
            ["haré", "harás", "hará",
             "haremos", "haréis", "harán"],

        futuroPerfecto:
            ["habré hecho", "habrás hecho", "habrá hecho",
             "habremos hecho", "habréis hecho", "habrán hecho"]
    }
},

{
    infinitive: "ir",
    type: "irregular",

    forms: {
        presente:
            ["voy", "vas", "va", "vamos", "vais", "van"],

        estarGerundio:
            ["estoy yendo", "estás yendo", "está yendo",
             "estamos yendo", "estáis yendo", "están yendo"],

        preteritoPerfecto:
            ["he ido", "has ido", "ha ido",
             "hemos ido", "habéis ido", "han ido"],

        preteritoIndefinido:
            ["fui", "fuiste", "fue",
             "fuimos", "fuisteis", "fueron"],

        preteritoImperfecto:
            ["iba", "ibas", "iba",
             "íbamos", "ibais", "iban"],

        pluscuamperfecto:
            ["había ido", "habías ido", "había ido",
             "habíamos ido", "habíais ido", "habían ido"],

        futuroSimple:
            ["iré", "irás", "irá",
             "iremos", "iréis", "irán"],

        futuroPerfecto:
            ["habré ido", "habrás ido", "habrá ido",
             "habremos ido", "habréis ido", "habrán ido"]
    }
},

{
    infinitive: "escribir",
    type: "irregular",

    forms: {
        presente:
            ["escribo", "escribes", "escribe",
             "escribimos", "escribís", "escriben"],

        estarGerundio:
            ["estoy escribiendo", "estás escribiendo", "está escribiendo",
             "estamos escribiendo", "estáis escribiendo", "están escribiendo"],

        preteritoPerfecto:
            ["he escrito", "has escrito", "ha escrito",
             "hemos escrito", "habéis escrito", "han escrito"],

        preteritoIndefinido:
            ["escribí", "escribiste", "escribió",
             "escribimos", "escribisteis", "escribieron"],

        preteritoImperfecto:
            ["escribía", "escribías", "escribía",
             "escribíamos", "escribíais", "escribían"],

        pluscuamperfecto:
            ["había escrito", "habías escrito", "había escrito",
             "habíamos escrito", "habíais escrito", "habían escrito"],

        futuroSimple:
            ["escribiré", "escribirás", "escribirá",
             "escribiremos", "escribiréis", "escribirán"],

        futuroPerfecto:
            ["habré escrito", "habrás escrito", "habrá escrito",
             "habremos escrito", "habréis escrito", "habrán escrito"]
    }
},

{
    infinitive: "ver",
    type: "irregular",

    forms: {
        presente:
            ["veo", "ves", "ve", "vemos", "veis", "ven"],

        estarGerundio:
            ["estoy viendo", "estás viendo", "está viendo",
             "estamos viendo", "estáis viendo", "están viendo"],

        preteritoPerfecto:
            ["he visto", "has visto", "ha visto",
             "hemos visto", "habéis visto", "han visto"],

        preteritoIndefinido:
            ["vi", "viste", "vio",
             "vimos", "visteis", "vieron"],

        preteritoImperfecto:
            ["veía", "veías", "veía",
             "veíamos", "veíais", "veían"],

        pluscuamperfecto:
            ["había visto", "habías visto", "había visto",
             "habíamos visto", "habíais visto", "habían visto"],

        futuroSimple:
            ["veré", "verás", "verá",
             "veremos", "veréis", "verán"],

        futuroPerfecto:
            ["habré visto", "habrás visto", "habrá visto",
             "habremos visto", "habréis visto", "habrán visto"]
    }
}

];


/* ===========================================================
   TENSES
=========================================================== */

const tenses = [

{
    id:"presente",
    name:"Presente",
    rule:"acciones actuales • hábitos",
    signals:[
        "siempre",
        "normalmente",
        "a menudo",
        "todos los días",
        "hoy"
    ]
},

{
    id:"estarGerundio",
    name:"Estar + gerundio",
    rule:"acción en progreso",
    signals:[
        "ahora",
        "en este momento"
    ]
},

{
    id:"preteritoPerfecto",
    name:"Pretérito perfecto",
    rule:"pasado relacionado con el presente",
    signals:[
        "hoy",
        "ya",
        "todavía no",
        "nunca",
        "alguna vez"
    ]
},

{
    id:"preteritoIndefinido",
    name:"Pretérito indefinido",
    rule:"acción terminada en el pasado",
    signals:[
        "ayer",
        "anoche",
        "la semana pasada",
        "el año pasado"
    ]
},

{
    id:"preteritoImperfecto",
    name:"Pretérito imperfecto",
    rule:"hábitos • descripciones en el pasado",
    signals:[
        "siempre",
        "normalmente",
        "a menudo"
    ]
},

{
    id:"pluscuamperfecto",
    name:"Pretérito pluscuamperfecto",
    rule:"acción anterior a otra acción pasada",
    signals:[
        "ya",
        "para entonces"
    ]
},

{
    id:"futuroSimple",
    name:"Futuro simple",
    rule:"acciones futuras",
    signals:[
        "mañana",
        "la semana que viene"
    ]
},

{
    id:"futuroPerfecto",
    name:"Futuro perfecto",
    rule:"acción terminada antes de un momento futuro",
    signals:[
        "para entonces"
    ]
}

];
