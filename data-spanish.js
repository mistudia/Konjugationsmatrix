/* ===========================================================
   MISTUDIA SPANISH TENSE TRAINER
   data-spanish.js
=========================================================== */

const columns = [
    { pronoun:"yo",       infinitive:"hablar" },
    { pronoun:"tú",       infinitive:"comer" },
    { pronoun:"él",       infinitive:"vivir" },
    { pronoun:"ella",     infinitive:"tener" },
    { pronoun:"usted",    infinitive:"hacer" },
    { pronoun:"nosotros", infinitive:"ir" },
    { pronoun:"vosotros", infinitive:"escribir" },
    { pronoun:"ellos",    infinitive:"ver" }
];

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
    "desde",
    "desde hace",
    "mañana",
    "la semana que viene",
    "para entonces"
];

const tenses = [

{
    id:"presente",
    name:"Presente",
    rule:"acciones actuales • hábitos",
    forms:[
        "hablo",
        "comes",
        "vive",
        "tiene",
        "hace",
        "vamos",
        "escribís",
        "ven"
    ],
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
    forms:[
        "estoy hablando",
        "estás comiendo",
        "está viviendo",
        "está teniendo",
        "está haciendo",
        "estamos yendo",
        "estáis escribiendo",
        "están viendo"
    ],
    signals:[
        "ahora",
        "en este momento"
    ]
},

{
    id:"preteritoPerfecto",
    name:"Pretérito perfecto",
    rule:"pasado relacionado con el presente",
    forms:[
        "he hablado",
        "has comido",
        "ha vivido",
        "ha tenido",
        "ha hecho",
        "hemos ido",
        "habéis escrito",
        "han visto"
    ],
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
    forms:[
        "hablé",
        "comiste",
        "vivió",
        "tuvo",
        "hizo",
        "fuimos",
        "escribisteis",
        "vieron"
    ],
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
    forms:[
        "hablaba",
        "comías",
        "vivía",
        "tenía",
        "hacía",
        "íbamos",
        "escribíais",
        "veían"
    ],
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
    forms:[
        "había hablado",
        "habías comido",
        "había vivido",
        "había tenido",
        "había hecho",
        "habíamos ido",
        "habíais escrito",
        "habían visto"
    ],
    signals:[
        "ya",
        "para entonces"
    ]
},

{
    id:"futuroSimple",
    name:"Futuro simple",
    rule:"acciones futuras",
    forms:[
        "hablaré",
        "comerás",
        "vivirá",
        "tendrá",
        "hará",
        "iremos",
        "escribiréis",
        "verán"
    ],
    signals:[
        "mañana",
        "la semana que viene"
    ]
},

{
    id:"futuroPerfecto",
    name:"Futuro perfecto",
    rule:"acción terminada en un momento futuro",
    forms:[
        "habré hablado",
        "habrás comido",
        "habrá vivido",
        "habrá tenido",
        "habrá hecho",
        "habremos ido",
        "habréis escrito",
        "habrán visto"
    ],
    signals:[
        "para entonces"
    ]
}

];