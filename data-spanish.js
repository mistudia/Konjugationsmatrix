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

    pronounLabels: [
        "yo",
        "tú",
        "él/ella/usted",
        "nosotros/nosotras",
        "vosotros/vosotras",
        "ellos/ellas/ustedes"
    ],

    pronounAccepted: [
        ["yo"],
        ["tú", "tu"],
        ["él", "el", "ella", "usted", "él/ella/usted"],
        ["nosotros", "nosotras"],
        ["vosotros", "vosotras"],
        ["ellos", "ellas", "ustedes"]
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

    "en mi vida cotidiana siempre",
    "hoy en día normalmente",
    "todos los días",
    "ahora",
    "en este momento",
    "ahora mismo",
    "hoy ya",
    "todavía no",
    "alguna vez",
    "ayer",
    "anoche",
    "el año pasado",
    "en mi niñez siempre",
    "de pequeño normalmente",
    "cuando era niño",
    "antes de eso ya",
    "nunca antes",
    "hasta entonces",
    "mañana",
    "la semana que viene",
    "el año que viene",
    "para entonces",
    "para mañana",
    "para el viernes"

];


/* ===========================================================
   VERB POOL
=========================================================== */

const verbPool = [

{
    infinitive: "ser",
    type: "irregular",

    forms: {
        presente:
            ["soy", "eres", "es",
            "somos", "sois", "son"],

        estarGerundio:
            ["estoy siendo", "estás siendo", "está siendo",
            "estamos siendo", "estáis siendo", "están siendo"],

        preteritoPerfecto:
            ["he sido", "has sido", "ha sido",
            "hemos sido", "habéis sido", "han sido"],

        preteritoIndefinido:
            ["fui", "fuiste", "fue",
            "fuimos", "fuisteis", "fueron"],

        preteritoImperfecto:
            ["era", "eras", "era",
            "éramos", "erais", "eran"],

        pluscuamperfecto:
            ["había sido", "habías sido", "había sido",
            "habíamos sido", "habíais sido", "habían sido"],

        futuroSimple:
            ["seré", "serás", "será",
            "seremos", "seréis", "serán"],

        futuroPerfecto:
            ["habré sido", "habrás sido", "habrá sido",
            "habremos sido", "habréis sido", "habrán sido"]
    }
},

{
    infinitive: "estar",
    type: "irregular",

    forms: {
        presente:
            ["estoy", "estás", "está",
            "estamos", "estáis", "están"],

        estarGerundio:
            ["estoy estando", "estás estando", "está estando",
            "estamos estando", "estáis estando", "están estando"],

        preteritoPerfecto:
            ["he estado", "has estado", "ha estado",
            "hemos estado", "habéis estado", "han estado"],

        preteritoIndefinido:
            ["estuve", "estuviste", "estuvo",
            "estuvimos", "estuvisteis", "estuvieron"],

        preteritoImperfecto:
            ["estaba", "estabas", "estaba",
            "estábamos", "estabais", "estaban"],

        pluscuamperfecto:
            ["había estado", "habías estado", "había estado",
            "habíamos estado", "habíais estado", "habían estado"],

        futuroSimple:
            ["estaré", "estarás", "estará",
            "estaremos", "estaréis", "estarán"],

        futuroPerfecto:
            ["habré estado", "habrás estado", "habrá estado",
            "habremos estado", "habréis estado", "habrán estado"]
    }
},

{
    infinitive: "tener",
    type: "irregular",

    forms: {
        presente:
            ["tengo", "tienes", "tiene",
            "tenemos", "tenéis", "tienen"],

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
            ["hago", "haces", "hace",
            "hacemos", "hacéis", "hacen"],

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
    infinitive: "poder",
    type: "irregular",

    forms: {
        presente:
            ["puedo", "puedes", "puede",
            "podemos", "podéis", "pueden"],

        estarGerundio:
            ["estoy pudiendo", "estás pudiendo", "está pudiendo",
            "estamos pudiendo", "estáis pudiendo", "están pudiendo"],

        preteritoPerfecto:
            ["he podido", "has podido", "ha podido",
            "hemos podido", "habéis podido", "han podido"],

        preteritoIndefinido:
            ["pude", "pudiste", "pudo",
            "pudimos", "pudisteis", "pudieron"],

        preteritoImperfecto:
            ["podía", "podías", "podía",
            "podíamos", "podíais", "podían"],

        pluscuamperfecto:
            ["había podido", "habías podido", "había podido",
            "habíamos podido", "habíais podido", "habían podido"],

        futuroSimple:
            ["podré", "podrás", "podrá",
            "podremos", "podréis", "podrán"],

        futuroPerfecto:
            ["habré podido", "habrás podido", "habrá podido",
            "habremos podido", "habréis podido", "habrán podido"]
    }
},

{
    infinitive: "decir",
    type: "irregular",

    forms: {
        presente:
            ["digo", "dices", "dice",
            "decimos", "decís", "dicen"],

        estarGerundio:
            ["estoy diciendo", "estás diciendo", "está diciendo",
            "estamos diciendo", "estáis diciendo", "están diciendo"],

        preteritoPerfecto:
            ["he dicho", "has dicho", "ha dicho",
            "hemos dicho", "habéis dicho", "han dicho"],

        preteritoIndefinido:
            ["dije", "dijiste", "dijo",
            "dijimos", "dijisteis", "dijeron"],

        preteritoImperfecto:
            ["decía", "decías", "decía",
            "decíamos", "decíais", "decían"],

        pluscuamperfecto:
            ["había dicho", "habías dicho", "había dicho",
            "habíamos dicho", "habíais dicho", "habían dicho"],

        futuroSimple:
            ["diré", "dirás", "dirá",
            "diremos", "diréis", "dirán"],

        futuroPerfecto:
            ["habré dicho", "habrás dicho", "habrá dicho",
            "habremos dicho", "habréis dicho", "habrán dicho"]
    }
},

{
    infinitive: "dar",
    type: "irregular",

    forms: {
        presente:
            ["doy", "das", "da",
            "damos", "dais", "dan"],

        estarGerundio:
            ["estoy dando", "estás dando", "está dando",
            "estamos dando", "estáis dando", "están dando"],

        preteritoPerfecto:
            ["he dado", "has dado", "ha dado",
            "hemos dado", "habéis dado", "han dado"],

        preteritoIndefinido:
            ["di", "diste", "dio",
            "dimos", "disteis", "dieron"],

        preteritoImperfecto:
            ["daba", "dabas", "daba",
            "dábamos", "dabais", "daban"],

        pluscuamperfecto:
            ["había dado", "habías dado", "había dado",
            "habíamos dado", "habíais dado", "habían dado"],

        futuroSimple:
            ["daré", "darás", "dará",
            "daremos", "daréis", "darán"],

        futuroPerfecto:
            ["habré dado", "habrás dado", "habrá dado",
            "habremos dado", "habréis dado", "habrán dado"]
    }
},

{
    infinitive: "ir",
    type: "irregular",

    forms: {
        presente:
            ["voy", "vas", "va",
            "vamos", "vais", "van"],

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
    infinitive: "deber",
    type: "regular",

    forms: {
        presente:
            ["debo", "debes", "debe",
            "debemos", "debéis", "deben"],

        estarGerundio:
            ["estoy debiendo", "estás debiendo", "está debiendo",
            "estamos debiendo", "estáis debiendo", "están debiendo"],

        preteritoPerfecto:
            ["he debido", "has debido", "ha debido",
            "hemos debido", "habéis debido", "han debido"],

        preteritoIndefinido:
            ["debí", "debiste", "debió",
            "debimos", "debisteis", "debieron"],

        preteritoImperfecto:
            ["debía", "debías", "debía",
            "debíamos", "debíais", "debían"],

        pluscuamperfecto:
            ["había debido", "habías debido", "había debido",
            "habíamos debido", "habíais debido", "habían debido"],

        futuroSimple:
            ["deberé", "deberás", "deberá",
            "deberemos", "deberéis", "deberán"],

        futuroPerfecto:
            ["habré debido", "habrás debido", "habrá debido",
            "habremos debido", "habréis debido", "habrán debido"]
    }
},

{
    infinitive: "encontrar",
    type: "irregular",

    forms: {
        presente:
            ["encuentro", "encuentras", "encuentra",
            "encontramos", "encontráis", "encuentran"],

        estarGerundio:
            ["estoy encontrando", "estás encontrando", "está encontrando",
            "estamos encontrando", "estáis encontrando", "están encontrando"],

        preteritoPerfecto:
            ["he encontrado", "has encontrado", "ha encontrado",
            "hemos encontrado", "habéis encontrado", "han encontrado"],

        preteritoIndefinido:
            ["encontré", "encontraste", "encontró",
            "encontramos", "encontrasteis", "encontraron"],

        preteritoImperfecto:
            ["encontraba", "encontrabas", "encontraba",
            "encontrábamos", "encontrabais", "encontraban"],

        pluscuamperfecto:
            ["había encontrado", "habías encontrado", "había encontrado",
            "habíamos encontrado", "habíais encontrado", "habían encontrado"],

        futuroSimple:
            ["encontraré", "encontrarás", "encontrará",
            "encontraremos", "encontraréis", "encontrarán"],

        futuroPerfecto:
            ["habré encontrado", "habrás encontrado", "habrá encontrado",
            "habremos encontrado", "habréis encontrado", "habrán encontrado"]
    }
},

{
    infinitive: "llegar",
    type: "regular",

    forms: {
        presente:
            ["llego", "llegas", "llega",
            "llegamos", "llegáis", "llegan"],

        estarGerundio:
            ["estoy llegando", "estás llegando", "está llegando",
            "estamos llegando", "estáis llegando", "están llegando"],

        preteritoPerfecto:
            ["he llegado", "has llegado", "ha llegado",
            "hemos llegado", "habéis llegado", "han llegado"],

        preteritoIndefinido:
            ["llegué", "llegaste", "llegó",
            "llegamos", "llegasteis", "llegaron"],

        preteritoImperfecto:
            ["llegaba", "llegabas", "llegaba",
            "llegábamos", "llegabais", "llegaban"],

        pluscuamperfecto:
            ["había llegado", "habías llegado", "había llegado",
            "habíamos llegado", "habíais llegado", "habían llegado"],

        futuroSimple:
            ["llegaré", "llegarás", "llegará",
            "llegaremos", "llegaréis", "llegarán"],

        futuroPerfecto:
            ["habré llegado", "habrás llegado", "habrá llegado",
            "habremos llegado", "habréis llegado", "habrán llegado"]
    }
},

{
    infinitive: "ver",
    type: "irregular",

    forms: {
        presente:
            ["veo", "ves", "ve",
            "vemos", "veis", "ven"],

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
},

{
    infinitive: "llevar",
    type: "regular",

    forms: {
        presente:
            ["llevo", "llevas", "lleva",
            "llevamos", "lleváis", "llevan"],

        estarGerundio:
            ["estoy llevando", "estás llevando", "está llevando",
            "estamos llevando", "estáis llevando", "están llevando"],

        preteritoPerfecto:
            ["he llevado", "has llevado", "ha llevado",
            "hemos llevado", "habéis llevado", "han llevado"],

        preteritoIndefinido:
            ["llevé", "llevaste", "llevó",
            "llevamos", "llevasteis", "llevaron"],

        preteritoImperfecto:
            ["llevaba", "llevabas", "llevaba",
            "llevábamos", "llevabais", "llevaban"],

        pluscuamperfecto:
            ["había llevado", "habías llevado", "había llevado",
            "habíamos llevado", "habíais llevado", "habían llevado"],

        futuroSimple:
            ["llevaré", "llevarás", "llevará",
            "llevaremos", "llevaréis", "llevarán"],

        futuroPerfecto:
            ["habré llevado", "habrás llevado", "habrá llevado",
            "habremos llevado", "habréis llevado", "habrán llevado"]
    }
},

{
    infinitive: "querer",
    type: "irregular",

    forms: {
        presente:
            ["quiero", "quieres", "quiere",
            "queremos", "queréis", "quieren"],

        estarGerundio:
            ["estoy queriendo", "estás queriendo", "está queriendo",
            "estamos queriendo", "estáis queriendo", "están queriendo"],

        preteritoPerfecto:
            ["he querido", "has querido", "ha querido",
            "hemos querido", "habéis querido", "han querido"],

        preteritoIndefinido:
            ["quise", "quisiste", "quiso",
            "quisimos", "quisisteis", "quisieron"],

        preteritoImperfecto:
            ["quería", "querías", "quería",
            "queríamos", "queríais", "querían"],

        pluscuamperfecto:
            ["había querido", "habías querido", "había querido",
            "habíamos querido", "habíais querido", "habían querido"],

        futuroSimple:
            ["querré", "querrás", "querrá",
            "querremos", "querréis", "querrán"],

        futuroPerfecto:
            ["habré querido", "habrás querido", "habrá querido",
            "habremos querido", "habréis querido", "habrán querido"]
    }
},

{
    infinitive: "seguir",
    type: "irregular",

    forms: {
        presente:
            ["sigo", "sigues", "sigue",
            "seguimos", "seguís", "siguen"],

        estarGerundio:
            ["estoy siguiendo", "estás siguiendo", "está siguiendo",
            "estamos siguiendo", "estáis siguiendo", "están siguiendo"],

        preteritoPerfecto:
            ["he seguido", "has seguido", "ha seguido",
            "hemos seguido", "habéis seguido", "han seguido"],

        preteritoIndefinido:
            ["seguí", "seguiste", "siguió",
            "seguimos", "seguisteis", "siguieron"],

        preteritoImperfecto:
            ["seguía", "seguías", "seguía",
            "seguíamos", "seguíais", "seguían"],

        pluscuamperfecto:
            ["había seguido", "habías seguido", "había seguido",
            "habíamos seguido", "habíais seguido", "habían seguido"],

        futuroSimple:
            ["seguiré", "seguirás", "seguirá",
            "seguiremos", "seguiréis", "seguirán"],

        futuroPerfecto:
            ["habré seguido", "habrás seguido", "habrá seguido",
            "habremos seguido", "habréis seguido", "habrán seguido"]
    }
},

{
    infinitive: "poner",
    type: "irregular",

    forms: {
        presente:
            ["pongo", "pones", "pone",
            "ponemos", "ponéis", "ponen"],

        estarGerundio:
            ["estoy poniendo", "estás poniendo", "está poniendo",
            "estamos poniendo", "estáis poniendo", "están poniendo"],

        preteritoPerfecto:
            ["he puesto", "has puesto", "ha puesto",
            "hemos puesto", "habéis puesto", "han puesto"],

        preteritoIndefinido:
            ["puse", "pusiste", "puso",
            "pusimos", "pusisteis", "pusieron"],

        preteritoImperfecto:
            ["ponía", "ponías", "ponía",
            "poníamos", "poníais", "ponían"],

        pluscuamperfecto:
            ["había puesto", "habías puesto", "había puesto",
            "habíamos puesto", "habíais puesto", "habían puesto"],

        futuroSimple:
            ["pondré", "pondrás", "pondrá",
            "pondremos", "pondréis", "pondrán"],

        futuroPerfecto:
            ["habré puesto", "habrás puesto", "habrá puesto",
            "habremos puesto", "habréis puesto", "habrán puesto"]
    }
},

{
    infinitive: "pasar",
    type: "regular",

    forms: {
        presente:
            ["paso", "pasas", "pasa",
            "pasamos", "pasáis", "pasan"],

        estarGerundio:
            ["estoy pasando", "estás pasando", "está pasando",
            "estamos pasando", "estáis pasando", "están pasando"],

        preteritoPerfecto:
            ["he pasado", "has pasado", "ha pasado",
            "hemos pasado", "habéis pasado", "han pasado"],

        preteritoIndefinido:
            ["pasé", "pasaste", "pasó",
            "pasamos", "pasasteis", "pasaron"],

        preteritoImperfecto:
            ["pasaba", "pasabas", "pasaba",
            "pasábamos", "pasabais", "pasaban"],

        pluscuamperfecto:
            ["había pasado", "habías pasado", "había pasado",
            "habíamos pasado", "habíais pasado", "habían pasado"],

        futuroSimple:
            ["pasaré", "pasarás", "pasará",
            "pasaremos", "pasaréis", "pasarán"],

        futuroPerfecto:
            ["habré pasado", "habrás pasado", "habrá pasado",
            "habremos pasado", "habréis pasado", "habrán pasado"]
    }
},

{
    infinitive: "dejar",
    type: "regular",

    forms: {
        presente:
            ["dejo", "dejas", "deja",
            "dejamos", "dejáis", "dejan"],

        estarGerundio:
            ["estoy dejando", "estás dejando", "está dejando",
            "estamos dejando", "estáis dejando", "están dejando"],

        preteritoPerfecto:
            ["he dejado", "has dejado", "ha dejado",
            "hemos dejado", "habéis dejado", "han dejado"],

        preteritoIndefinido:
            ["dejé", "dejaste", "dejó",
            "dejamos", "dejasteis", "dejaron"],

        preteritoImperfecto:
            ["dejaba", "dejabas", "dejaba",
            "dejábamos", "dejabais", "dejaban"],

        pluscuamperfecto:
            ["había dejado", "habías dejado", "había dejado",
            "habíamos dejado", "habíais dejado", "habían dejado"],

        futuroSimple:
            ["dejaré", "dejarás", "dejará",
            "dejaremos", "dejaréis", "dejarán"],

        futuroPerfecto:
            ["habré dejado", "habrás dejado", "habrá dejado",
            "habremos dejado", "habréis dejado", "habrán dejado"]
    }
},

{
    infinitive: "quedar",
    type: "regular",

    forms: {
        presente:
            ["quedo", "quedas", "queda",
            "quedamos", "quedáis", "quedan"],

        estarGerundio:
            ["estoy quedando", "estás quedando", "está quedando",
            "estamos quedando", "estáis quedando", "están quedando"],

        preteritoPerfecto:
            ["he quedado", "has quedado", "ha quedado",
            "hemos quedado", "habéis quedado", "han quedado"],

        preteritoIndefinido:
            ["quedé", "quedaste", "quedó",
            "quedamos", "quedasteis", "quedaron"],

        preteritoImperfecto:
            ["quedaba", "quedabas", "quedaba",
            "quedábamos", "quedabais", "quedaban"],

        pluscuamperfecto:
            ["había quedado", "habías quedado", "había quedado",
            "habíamos quedado", "habíais quedado", "habían quedado"],

        futuroSimple:
            ["quedaré", "quedarás", "quedará",
            "quedaremos", "quedaréis", "quedarán"],

        futuroPerfecto:
            ["habré quedado", "habrás quedado", "habrá quedado",
            "habremos quedado", "habréis quedado", "habrán quedado"]
    }
},

{
    infinitive: "conocer",
    type: "irregular",

    forms: {
        presente:
            ["conozco", "conoces", "conoce",
            "conocemos", "conocéis", "conocen"],

        estarGerundio:
            ["estoy conociendo", "estás conociendo", "está conociendo",
            "estamos conociendo", "estáis conociendo", "están conociendo"],

        preteritoPerfecto:
            ["he conocido", "has conocido", "ha conocido",
            "hemos conocido", "habéis conocido", "han conocido"],

        preteritoIndefinido:
            ["conocí", "conociste", "conoció",
            "conocimos", "conocisteis", "conocieron"],

        preteritoImperfecto:
            ["conocía", "conocías", "conocía",
            "conocíamos", "conocíais", "conocían"],

        pluscuamperfecto:
            ["había conocido", "habías conocido", "había conocido",
            "habíamos conocido", "habíais conocido", "habían conocido"],

        futuroSimple:
            ["conoceré", "conocerás", "conocerá",
            "conoceremos", "conoceréis", "conocerán"],

        futuroPerfecto:
            ["habré conocido", "habrás conocido", "habrá conocido",
            "habremos conocido", "habréis conocido", "habrán conocido"]
    }
},

{
    infinitive: "saber",
    type: "irregular",

    forms: {
        presente:
            ["sé", "sabes", "sabe",
            "sabemos", "sabéis", "saben"],

        estarGerundio:
            ["estoy sabiendo", "estás sabiendo", "está sabiendo",
            "estamos sabiendo", "estáis sabiendo", "están sabiendo"],

        preteritoPerfecto:
            ["he sabido", "has sabido", "ha sabido",
            "hemos sabido", "habéis sabido", "han sabido"],

        preteritoIndefinido:
            ["supe", "supiste", "supo",
            "supimos", "supisteis", "supieron"],

        preteritoImperfecto:
            ["sabía", "sabías", "sabía",
            "sabíamos", "sabíais", "sabían"],

        pluscuamperfecto:
            ["había sabido", "habías sabido", "había sabido",
            "habíamos sabido", "habíais sabido", "habían sabido"],

        futuroSimple:
            ["sabré", "sabrás", "sabrá",
            "sabremos", "sabréis", "sabrán"],

        futuroPerfecto:
            ["habré sabido", "habrás sabido", "habrá sabido",
            "habremos sabido", "habréis sabido", "habrán sabido"]
    }
},

{
    infinitive: "volver",
    type: "irregular",

    forms: {
        presente:
            ["vuelvo", "vuelves", "vuelve",
            "volvemos", "volvéis", "vuelven"],

        estarGerundio:
            ["estoy volviendo", "estás volviendo", "está volviendo",
            "estamos volviendo", "estáis volviendo", "están volviendo"],

        preteritoPerfecto:
            ["he vuelto", "has vuelto", "ha vuelto",
            "hemos vuelto", "habéis vuelto", "han vuelto"],

        preteritoIndefinido:
            ["volví", "volviste", "volvió",
            "volvimos", "volvisteis", "volvieron"],

        preteritoImperfecto:
            ["volvía", "volvías", "volvía",
            "volvíamos", "volvíais", "volvían"],

        pluscuamperfecto:
            ["había vuelto", "habías vuelto", "había vuelto",
            "habíamos vuelto", "habíais vuelto", "habían vuelto"],

        futuroSimple:
            ["volveré", "volverás", "volverá",
            "volveremos", "volveréis", "volverán"],

        futuroPerfecto:
            ["habré vuelto", "habrás vuelto", "habrá vuelto",
            "habremos vuelto", "habréis vuelto", "habrán vuelto"]
    }
},

{
    infinitive: "jugar",
    type: "irregular",

    forms: {
        presente:
            ["juego", "juegas", "juega",
            "jugamos", "jugáis", "juegan"],

        estarGerundio:
            ["estoy jugando", "estás jugando", "está jugando",
            "estamos jugando", "estáis jugando", "están jugando"],

        preteritoPerfecto:
            ["he jugado", "has jugado", "ha jugado",
            "hemos jugado", "habéis jugado", "han jugado"],

        preteritoIndefinido:
            ["jugué", "jugaste", "jugó",
            "jugamos", "jugasteis", "jugaron"],

        preteritoImperfecto:
            ["jugaba", "jugabas", "jugaba",
            "jugábamos", "jugabais", "jugaban"],

        pluscuamperfecto:
            ["había jugado", "habías jugado", "había jugado",
            "habíamos jugado", "habíais jugado", "habían jugado"],

        futuroSimple:
            ["jugaré", "jugarás", "jugará",
            "jugaremos", "jugaréis", "jugarán"],

        futuroPerfecto:
            ["habré jugado", "habrás jugado", "habrá jugado",
            "habremos jugado", "habréis jugado", "habrán jugado"]
    }
},

{
    infinitive: "pedir",
    type: "irregular",

    forms: {
        presente:
            ["pido", "pides", "pide",
            "pedimos", "pedís", "piden"],

        estarGerundio:
            ["estoy pidiendo", "estás pidiendo", "está pidiendo",
            "estamos pidiendo", "estáis pidiendo", "están pidiendo"],

        preteritoPerfecto:
            ["he pedido", "has pedido", "ha pedido",
            "hemos pedido", "habéis pedido", "han pedido"],

        preteritoIndefinido:
            ["pedí", "pediste", "pidió",
            "pedimos", "pedisteis", "pidieron"],

        preteritoImperfecto:
            ["pedía", "pedías", "pedía",
            "pedíamos", "pedíais", "pedían"],

        pluscuamperfecto:
            ["había pedido", "habías pedido", "había pedido",
            "habíamos pedido", "habíais pedido", "habían pedido"],

        futuroSimple:
            ["pediré", "pedirás", "pedirá",
            "pediremos", "pediréis", "pedirán"],

        futuroPerfecto:
            ["habré pedido", "habrás pedido", "habrá pedido",
            "habremos pedido", "habréis pedido", "habrán pedido"]
    }
},

{
    infinitive: "creer",
    type: "regular",

    forms: {
        presente:
            ["creo", "crees", "cree",
            "creemos", "creéis", "creen"],

        estarGerundio:
            ["estoy creyendo", "estás creyendo", "está creyendo",
            "estamos creyendo", "estáis creyendo", "están creyendo"],

        preteritoPerfecto:
            ["he creído", "has creído", "ha creído",
            "hemos creído", "habéis creído", "han creído"],

        preteritoIndefinido:
            ["creí", "creíste", "creyó",
            "creímos", "creísteis", "creyeron"],

        preteritoImperfecto:
            ["creía", "creías", "creía",
            "creíamos", "creíais", "creían"],

        pluscuamperfecto:
            ["había creído", "habías creído", "había creído",
            "habíamos creído", "habíais creído", "habían creído"],

        futuroSimple:
            ["creeré", "creerás", "creerá",
            "creeremos", "creeréis", "creerán"],

        futuroPerfecto:
            ["habré creído", "habrás creído", "habrá creído",
            "habremos creído", "habréis creído", "habrán creído"]
    }
},

{
    infinitive: "llamar",
    type: "regular",

    forms: {
        presente:
            ["llamo", "llamas", "llama",
            "llamamos", "llamáis", "llaman"],

        estarGerundio:
            ["estoy llamando", "estás llamando", "está llamando",
            "estamos llamando", "estáis llamando", "están llamando"],

        preteritoPerfecto:
            ["he llamado", "has llamado", "ha llamado",
            "hemos llamado", "habéis llamado", "han llamado"],

        preteritoIndefinido:
            ["llamé", "llamaste", "llamó",
            "llamamos", "llamasteis", "llamaron"],

        preteritoImperfecto:
            ["llamaba", "llamabas", "llamaba",
            "llamábamos", "llamabais", "llamaban"],

        pluscuamperfecto:
            ["había llamado", "habías llamado", "había llamado",
            "habíamos llamado", "habíais llamado", "habían llamado"],

        futuroSimple:
            ["llamaré", "llamarás", "llamará",
            "llamaremos", "llamaréis", "llamarán"],

        futuroPerfecto:
            ["habré llamado", "habrás llamado", "habrá llamado",
            "habremos llamado", "habréis llamado", "habrán llamado"]
    }
},

{
    infinitive: "salir",
    type: "irregular",

    forms: {
        presente:
            ["salgo", "sales", "sale",
            "salimos", "salís", "salen"],

        estarGerundio:
            ["estoy saliendo", "estás saliendo", "está saliendo",
            "estamos saliendo", "estáis saliendo", "están saliendo"],

        preteritoPerfecto:
            ["he salido", "has salido", "ha salido",
            "hemos salido", "habéis salido", "han salido"],

        preteritoIndefinido:
            ["salí", "saliste", "salió",
            "salimos", "salisteis", "salieron"],

        preteritoImperfecto:
            ["salía", "salías", "salía",
            "salíamos", "salíais", "salían"],

        pluscuamperfecto:
            ["había salido", "habías salido", "había salido",
            "habíamos salido", "habíais salido", "habían salido"],

        futuroSimple:
            ["saldré", "saldrás", "saldrá",
            "saldremos", "saldréis", "saldrán"],

        futuroPerfecto:
            ["habré salido", "habrás salido", "habrá salido",
            "habremos salido", "habréis salido", "habrán salido"]
    }
},

{
    infinitive: "vivir",
    type: "regular",

    forms: {
        presente:
            ["vivo", "vives", "vive",
            "vivimos", "vivís", "viven"],

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
    infinitive: "parecer",
    type: "irregular",

    forms: {
        presente:
            ["parezco", "pareces", "parece",
            "parecemos", "parecéis", "parecen"],

        estarGerundio:
            ["estoy pareciendo", "estás pareciendo", "está pareciendo",
            "estamos pareciendo", "estáis pareciendo", "están pareciendo"],

        preteritoPerfecto:
            ["he parecido", "has parecido", "ha parecido",
            "hemos parecido", "habéis parecido", "han parecido"],

        preteritoIndefinido:
            ["parecí", "pareciste", "pareció",
            "parecimos", "parecisteis", "parecieron"],

        preteritoImperfecto:
            ["parecía", "parecías", "parecía",
            "parecíamos", "parecíais", "parecían"],

        pluscuamperfecto:
            ["había parecido", "habías parecido", "había parecido",
            "habíamos parecido", "habíais parecido", "habían parecido"],

        futuroSimple:
            ["pareceré", "parecerás", "parecerá",
            "pareceremos", "pareceréis", "parecerán"],

        futuroPerfecto:
            ["habré parecido", "habrás parecido", "habrá parecido",
            "habremos parecido", "habréis parecido", "habrán parecido"]
    }
},

{
    infinitive: "trabajar",
    type: "regular",

    forms: {
        presente:
            ["trabajo", "trabajas", "trabaja",
            "trabajamos", "trabajáis", "trabajan"],

        estarGerundio:
            ["estoy trabajando", "estás trabajando", "está trabajando",
            "estamos trabajando", "estáis trabajando", "están trabajando"],

        preteritoPerfecto:
            ["he trabajado", "has trabajado", "ha trabajado",
            "hemos trabajado", "habéis trabajado", "han trabajado"],

        preteritoIndefinido:
            ["trabajé", "trabajaste", "trabajó",
            "trabajamos", "trabajasteis", "trabajaron"],

        preteritoImperfecto:
            ["trabajaba", "trabajabas", "trabajaba",
            "trabajábamos", "trabajabais", "trabajaban"],

        pluscuamperfecto:
            ["había trabajado", "habías trabajado", "había trabajado",
            "habíamos trabajado", "habíais trabajado", "habían trabajado"],

        futuroSimple:
            ["trabajaré", "trabajarás", "trabajará",
            "trabajaremos", "trabajaréis", "trabajarán"],

        futuroPerfecto:
            ["habré trabajado", "habrás trabajado", "habrá trabajado",
            "habremos trabajado", "habréis trabajado", "habrán trabajado"]
    }
},

{
    infinitive: "hablar",
    type: "regular",

    forms: {
        presente:
            ["hablo", "hablas", "habla",
            "hablamos", "habláis", "hablan"],

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
    infinitive: "tomar",
    type: "regular",

    forms: {
        presente:
            ["tomo", "tomas", "toma",
            "tomamos", "tomáis", "toman"],

        estarGerundio:
            ["estoy tomando", "estás tomando", "está tomando",
            "estamos tomando", "estáis tomando", "están tomando"],

        preteritoPerfecto:
            ["he tomado", "has tomado", "ha tomado",
            "hemos tomado", "habéis tomado", "han tomado"],

        preteritoIndefinido:
            ["tomé", "tomaste", "tomó",
            "tomamos", "tomasteis", "tomaron"],

        preteritoImperfecto:
            ["tomaba", "tomabas", "tomaba",
            "tomábamos", "tomabais", "tomaban"],

        pluscuamperfecto:
            ["había tomado", "habías tomado", "había tomado",
            "habíamos tomado", "habíais tomado", "habían tomado"],

        futuroSimple:
            ["tomaré", "tomarás", "tomará",
            "tomaremos", "tomaréis", "tomarán"],

        futuroPerfecto:
            ["habré tomado", "habrás tomado", "habrá tomado",
            "habremos tomado", "habréis tomado", "habrán tomado"]
    }
},

{
    infinitive: "esperar",
    type: "regular",

    forms: {
        presente:
            ["espero", "esperas", "espera",
            "esperamos", "esperáis", "esperan"],

        estarGerundio:
            ["estoy esperando", "estás esperando", "está esperando",
            "estamos esperando", "estáis esperando", "están esperando"],

        preteritoPerfecto:
            ["he esperado", "has esperado", "ha esperado",
            "hemos esperado", "habéis esperado", "han esperado"],

        preteritoIndefinido:
            ["esperé", "esperaste", "esperó",
            "esperamos", "esperasteis", "esperaron"],

        preteritoImperfecto:
            ["esperaba", "esperabas", "esperaba",
            "esperábamos", "esperabais", "esperaban"],

        pluscuamperfecto:
            ["había esperado", "habías esperado", "había esperado",
            "habíamos esperado", "habíais esperado", "habían esperado"],

        futuroSimple:
            ["esperaré", "esperarás", "esperará",
            "esperaremos", "esperaréis", "esperarán"],

        futuroPerfecto:
            ["habré esperado", "habrás esperado", "habrá esperado",
            "habremos esperado", "habréis esperado", "habrán esperado"]
    }
},

{
    infinitive: "buscar",
    type: "regular",

    forms: {
        presente:
            ["busco", "buscas", "busca",
            "buscamos", "buscáis", "buscan"],

        estarGerundio:
            ["estoy buscando", "estás buscando", "está buscando",
            "estamos buscando", "estáis buscando", "están buscando"],

        preteritoPerfecto:
            ["he buscado", "has buscado", "ha buscado",
            "hemos buscado", "habéis buscado", "han buscado"],

        preteritoIndefinido:
            ["busqué", "buscaste", "buscó",
            "buscamos", "buscasteis", "buscaron"],

        preteritoImperfecto:
            ["buscaba", "buscabas", "buscaba",
            "buscábamos", "buscabais", "buscaban"],

        pluscuamperfecto:
            ["había buscado", "habías buscado", "había buscado",
            "habíamos buscado", "habíais buscado", "habían buscado"],

        futuroSimple:
            ["buscaré", "buscarás", "buscará",
            "buscaremos", "buscaréis", "buscarán"],

        futuroPerfecto:
            ["habré buscado", "habrás buscado", "habrá buscado",
            "habremos buscado", "habréis buscado", "habrán buscado"]
    }
},

{
    infinitive: "pensar",
    type: "irregular",

    forms: {
        presente:
            ["pienso", "piensas", "piensa",
            "pensamos", "pensáis", "piensan"],

        estarGerundio:
            ["estoy pensando", "estás pensando", "está pensando",
            "estamos pensando", "estáis pensando", "están pensando"],

        preteritoPerfecto:
            ["he pensado", "has pensado", "ha pensado",
            "hemos pensado", "habéis pensado", "han pensado"],

        preteritoIndefinido:
            ["pensé", "pensaste", "pensó",
            "pensamos", "pensasteis", "pensaron"],

        preteritoImperfecto:
            ["pensaba", "pensabas", "pensaba",
            "pensábamos", "pensabais", "pensaban"],

        pluscuamperfecto:
            ["había pensado", "habías pensado", "había pensado",
            "habíamos pensado", "habíais pensado", "habían pensado"],

        futuroSimple:
            ["pensaré", "pensarás", "pensará",
            "pensaremos", "pensaréis", "pensarán"],

        futuroPerfecto:
            ["habré pensado", "habrás pensado", "habrá pensado",
            "habremos pensado", "habréis pensado", "habrán pensado"]
    }
},

{
    infinitive: "venir",
    type: "irregular",

    forms: {
        presente:
            ["vengo", "vienes", "viene",
            "venimos", "venís", "vienen"],

        estarGerundio:
            ["estoy viniendo", "estás viniendo", "está viniendo",
            "estamos viniendo", "estáis viniendo", "están viniendo"],

        preteritoPerfecto:
            ["he venido", "has venido", "ha venido",
            "hemos venido", "habéis venido", "han venido"],

        preteritoIndefinido:
            ["vine", "viniste", "vino",
            "vinimos", "vinisteis", "vinieron"],

        preteritoImperfecto:
            ["venía", "venías", "venía",
            "veníamos", "veníais", "venían"],

        pluscuamperfecto:
            ["había venido", "habías venido", "había venido",
            "habíamos venido", "habíais venido", "habían venido"],

        futuroSimple:
            ["vendré", "vendrás", "vendrá",
            "vendremos", "vendréis", "vendrán"],

        futuroPerfecto:
            ["habré venido", "habrás venido", "habrá venido",
            "habremos venido", "habréis venido", "habrán venido"]
    }
},

{
    infinitive: "empezar",
    type: "irregular",

    forms: {
        presente:
            ["empiezo", "empiezas", "empieza",
            "empezamos", "empezáis", "empiezan"],

        estarGerundio:
            ["estoy empezando", "estás empezando", "está empezando",
            "estamos empezando", "estáis empezando", "están empezando"],

        preteritoPerfecto:
            ["he empezado", "has empezado", "ha empezado",
            "hemos empezado", "habéis empezado", "han empezado"],

        preteritoIndefinido:
            ["empecé", "empezaste", "empezó",
            "empezamos", "empezasteis", "empezaron"],

        preteritoImperfecto:
            ["empezaba", "empezabas", "empezaba",
            "empezábamos", "empezabais", "empezaban"],

        pluscuamperfecto:
            ["había empezado", "habías empezado", "había empezado",
            "habíamos empezado", "habíais empezado", "habían empezado"],

        futuroSimple:
            ["empezaré", "empezarás", "empezará",
            "empezaremos", "empezaréis", "empezarán"],

        futuroPerfecto:
            ["habré empezado", "habrás empezado", "habrá empezado",
            "habremos empezado", "habréis empezado", "habrán empezado"]
    }
},

{
    infinitive: "abrir",
    type: "irregular",

    forms: {
        presente:
            ["abro", "abres", "abre",
            "abrimos", "abrís", "abren"],

        estarGerundio:
            ["estoy abriendo", "estás abriendo", "está abriendo",
            "estamos abriendo", "estáis abriendo", "están abriendo"],

        preteritoPerfecto:
            ["he abierto", "has abierto", "ha abierto",
            "hemos abierto", "habéis abierto", "han abierto"],

        preteritoIndefinido:
            ["abrí", "abriste", "abrió",
            "abrimos", "abristeis", "abrieron"],

        preteritoImperfecto:
            ["abría", "abrías", "abría",
            "abríamos", "abríais", "abrían"],

        pluscuamperfecto:
            ["había abierto", "habías abierto", "había abierto",
            "habíamos abierto", "habíais abierto", "habían abierto"],

        futuroSimple:
            ["abriré", "abrirás", "abrirá",
            "abriremos", "abriréis", "abrirán"],

        futuroPerfecto:
            ["habré abierto", "habrás abierto", "habrá abierto",
            "habremos abierto", "habréis abierto", "habrán abierto"]
    }
},

{
    infinitive: "comer",
    type: "regular",

    forms: {
        presente:
            ["como", "comes", "come",
            "comemos", "coméis", "comen"],

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
    infinitive: "ayudar",
    type: "regular",

    forms: {
        presente:
            ["ayudo", "ayudas", "ayuda",
            "ayudamos", "ayudáis", "ayudan"],

        estarGerundio:
            ["estoy ayudando", "estás ayudando", "está ayudando",
            "estamos ayudando", "estáis ayudando", "están ayudando"],

        preteritoPerfecto:
            ["he ayudado", "has ayudado", "ha ayudado",
            "hemos ayudado", "habéis ayudado", "han ayudado"],

        preteritoIndefinido:
            ["ayudé", "ayudaste", "ayudó",
            "ayudamos", "ayudasteis", "ayudaron"],

        preteritoImperfecto:
            ["ayudaba", "ayudabas", "ayudaba",
            "ayudábamos", "ayudabais", "ayudaban"],

        pluscuamperfecto:
            ["había ayudado", "habías ayudado", "había ayudado",
            "habíamos ayudado", "habíais ayudado", "habían ayudado"],

        futuroSimple:
            ["ayudaré", "ayudarás", "ayudará",
            "ayudaremos", "ayudaréis", "ayudarán"],

        futuroPerfecto:
            ["habré ayudado", "habrás ayudado", "habrá ayudado",
            "habremos ayudado", "habréis ayudado", "habrán ayudado"]
    }
},

{
    infinitive: "entender",
    type: "irregular",

    forms: {
        presente:
            ["entiendo", "entiendes", "entiende",
            "entendemos", "entendéis", "entienden"],

        estarGerundio:
            ["estoy entendiendo", "estás entendiendo", "está entendiendo",
            "estamos entendiendo", "estáis entendiendo", "están entendiendo"],

        preteritoPerfecto:
            ["he entendido", "has entendido", "ha entendido",
            "hemos entendido", "habéis entendido", "han entendido"],

        preteritoIndefinido:
            ["entendí", "entendiste", "entendió",
            "entendimos", "entendisteis", "entendieron"],

        preteritoImperfecto:
            ["entendía", "entendías", "entendía",
            "entendíamos", "entendíais", "entendían"],

        pluscuamperfecto:
            ["había entendido", "habías entendido", "había entendido",
            "habíamos entendido", "habíais entendido", "habían entendido"],

        futuroSimple:
            ["entenderé", "entenderás", "entenderá",
            "entenderemos", "entenderéis", "entenderán"],

        futuroPerfecto:
            ["habré entendido", "habrás entendido", "habrá entendido",
            "habremos entendido", "habréis entendido", "habrán entendido"]
    }
},

{
    infinitive: "necesitar",
    type: "regular",

    forms: {
        presente:
            ["necesito", "necesitas", "necesita",
            "necesitamos", "necesitáis", "necesitan"],

        estarGerundio:
            ["estoy necesitando", "estás necesitando", "está necesitando",
            "estamos necesitando", "estáis necesitando", "están necesitando"],

        preteritoPerfecto:
            ["he necesitado", "has necesitado", "ha necesitado",
            "hemos necesitado", "habéis necesitado", "han necesitado"],

        preteritoIndefinido:
            ["necesité", "necesitaste", "necesitó",
            "necesitamos", "necesitasteis", "necesitaron"],

        preteritoImperfecto:
            ["necesitaba", "necesitabas", "necesitaba",
            "necesitábamos", "necesitabais", "necesitaban"],

        pluscuamperfecto:
            ["había necesitado", "habías necesitado", "había necesitado",
            "habíamos necesitado", "habíais necesitado", "habían necesitado"],

        futuroSimple:
            ["necesitaré", "necesitarás", "necesitará",
            "necesitaremos", "necesitaréis", "necesitarán"],

        futuroPerfecto:
            ["habré necesitado", "habrás necesitado", "habrá necesitado",
            "habremos necesitado", "habréis necesitado", "habrán necesitado"]
    }
},

{
    infinitive: "sentir",
    type: "irregular",

    forms: {
        presente:
            ["siento", "sientes", "siente",
            "sentimos", "sentís", "sienten"],

        estarGerundio:
            ["estoy sintiendo", "estás sintiendo", "está sintiendo",
            "estamos sintiendo", "estáis sintiendo", "están sintiendo"],

        preteritoPerfecto:
            ["he sentido", "has sentido", "ha sentido",
            "hemos sentido", "habéis sentido", "han sentido"],

        preteritoIndefinido:
            ["sentí", "sentiste", "sintió",
            "sentimos", "sentisteis", "sintieron"],

        preteritoImperfecto:
            ["sentía", "sentías", "sentía",
            "sentíamos", "sentíais", "sentían"],

        pluscuamperfecto:
            ["había sentido", "habías sentido", "había sentido",
            "habíamos sentido", "habíais sentido", "habían sentido"],

        futuroSimple:
            ["sentiré", "sentirás", "sentirá",
            "sentiremos", "sentiréis", "sentirán"],

        futuroPerfecto:
            ["habré sentido", "habrás sentido", "habrá sentido",
            "habremos sentido", "habréis sentido", "habrán sentido"]
    }
},

{
    infinitive: "leer",
    type: "regular",

    forms: {
        presente:
            ["leo", "lees", "lee",
            "leemos", "leéis", "leen"],

        estarGerundio:
            ["estoy leyendo", "estás leyendo", "está leyendo",
            "estamos leyendo", "estáis leyendo", "están leyendo"],

        preteritoPerfecto:
            ["he leído", "has leído", "ha leído",
            "hemos leído", "habéis leído", "han leído"],

        preteritoIndefinido:
            ["leí", "leíste", "leyó",
            "leímos", "leísteis", "leyeron"],

        preteritoImperfecto:
            ["leía", "leías", "leía",
            "leíamos", "leíais", "leían"],

        pluscuamperfecto:
            ["había leído", "habías leído", "había leído",
            "habíamos leído", "habíais leído", "habían leído"],

        futuroSimple:
            ["leeré", "leerás", "leerá",
            "leeremos", "leeréis", "leerán"],

        futuroPerfecto:
            ["habré leído", "habrás leído", "habrá leído",
            "habremos leído", "habréis leído", "habrán leído"]
    }
},

{
    infinitive: "escuchar",
    type: "regular",

    forms: {
        presente:
            ["escucho", "escuchas", "escucha",
            "escuchamos", "escucháis", "escuchan"],

        estarGerundio:
            ["estoy escuchando", "estás escuchando", "está escuchando",
            "estamos escuchando", "estáis escuchando", "están escuchando"],

        preteritoPerfecto:
            ["he escuchado", "has escuchado", "ha escuchado",
            "hemos escuchado", "habéis escuchado", "han escuchado"],

        preteritoIndefinido:
            ["escuché", "escuchaste", "escuchó",
            "escuchamos", "escuchasteis", "escucharon"],

        preteritoImperfecto:
            ["escuchaba", "escuchabas", "escuchaba",
            "escuchábamos", "escuchabais", "escuchaban"],

        pluscuamperfecto:
            ["había escuchado", "habías escuchado", "había escuchado",
            "habíamos escuchado", "habíais escuchado", "habían escuchado"],

        futuroSimple:
            ["escucharé", "escucharás", "escuchará",
            "escucharemos", "escucharéis", "escucharán"],

        futuroPerfecto:
            ["habré escuchado", "habrás escuchado", "habrá escuchado",
            "habremos escuchado", "habréis escuchado", "habrán escuchado"]
    }
},

{
    infinitive: "preguntar",
    type: "regular",

    forms: {
        presente:
            ["pregunto", "preguntas", "pregunta",
            "preguntamos", "preguntáis", "preguntan"],

        estarGerundio:
            ["estoy preguntando", "estás preguntando", "está preguntando",
            "estamos preguntando", "estáis preguntando", "están preguntando"],

        preteritoPerfecto:
            ["he preguntado", "has preguntado", "ha preguntado",
            "hemos preguntado", "habéis preguntado", "han preguntado"],

        preteritoIndefinido:
            ["pregunté", "preguntaste", "preguntó",
            "preguntamos", "preguntasteis", "preguntaron"],

        preteritoImperfecto:
            ["preguntaba", "preguntabas", "preguntaba",
            "preguntábamos", "preguntabais", "preguntaban"],

        pluscuamperfecto:
            ["había preguntado", "habías preguntado", "había preguntado",
            "habíamos preguntado", "habíais preguntado", "habían preguntado"],

        futuroSimple:
            ["preguntaré", "preguntarás", "preguntará",
            "preguntaremos", "preguntaréis", "preguntarán"],

        futuroPerfecto:
            ["habré preguntado", "habrás preguntado", "habrá preguntado",
            "habremos preguntado", "habréis preguntado", "habrán preguntado"]
    }
},

{
    infinitive: "pagar",
    type: "regular",

    forms: {
        presente:
            ["pago", "pagas", "paga",
            "pagamos", "pagáis", "pagan"],

        estarGerundio:
            ["estoy pagando", "estás pagando", "está pagando",
            "estamos pagando", "estáis pagando", "están pagando"],

        preteritoPerfecto:
            ["he pagado", "has pagado", "ha pagado",
            "hemos pagado", "habéis pagado", "han pagado"],

        preteritoIndefinido:
            ["pagué", "pagaste", "pagó",
            "pagamos", "pagasteis", "pagaron"],

        preteritoImperfecto:
            ["pagaba", "pagabas", "pagaba",
            "pagábamos", "pagabais", "pagaban"],

        pluscuamperfecto:
            ["había pagado", "habías pagado", "había pagado",
            "habíamos pagado", "habíais pagado", "habían pagado"],

        futuroSimple:
            ["pagaré", "pagarás", "pagará",
            "pagaremos", "pagaréis", "pagarán"],

        futuroPerfecto:
            ["habré pagado", "habrás pagado", "habrá pagado",
            "habremos pagado", "habréis pagado", "habrán pagado"]
    }
},

{
    infinitive: "beber",
    type: "regular",

    forms: {
        presente:
            ["bebo", "bebes", "bebe",
            "bebemos", "bebéis", "beben"],

        estarGerundio:
            ["estoy bebiendo", "estás bebiendo", "está bebiendo",
            "estamos bebiendo", "estáis bebiendo", "están bebiendo"],

        preteritoPerfecto:
            ["he bebido", "has bebido", "ha bebido",
            "hemos bebido", "habéis bebido", "han bebido"],

        preteritoIndefinido:
            ["bebí", "bebiste", "bebió",
            "bebimos", "bebisteis", "bebieron"],

        preteritoImperfecto:
            ["bebía", "bebías", "bebía",
            "bebíamos", "bebíais", "bebían"],

        pluscuamperfecto:
            ["había bebido", "habías bebido", "había bebido",
            "habíamos bebido", "habíais bebido", "habían bebido"],

        futuroSimple:
            ["beberé", "beberás", "beberá",
            "beberemos", "beberéis", "beberán"],

        futuroPerfecto:
            ["habré bebido", "habrás bebido", "habrá bebido",
            "habremos bebido", "habréis bebido", "habrán bebido"]
    }
},

{
    infinitive: "aprender",
    type: "regular",

    forms: {
        presente:
            ["aprendo", "aprendes", "aprende",
            "aprendemos", "aprendéis", "aprenden"],

        estarGerundio:
            ["estoy aprendiendo", "estás aprendiendo", "está aprendiendo",
            "estamos aprendiendo", "estáis aprendiendo", "están aprendiendo"],

        preteritoPerfecto:
            ["he aprendido", "has aprendido", "ha aprendido",
            "hemos aprendido", "habéis aprendido", "han aprendido"],

        preteritoIndefinido:
            ["aprendí", "aprendiste", "aprendió",
            "aprendimos", "aprendisteis", "aprendieron"],

        preteritoImperfecto:
            ["aprendía", "aprendías", "aprendía",
            "aprendíamos", "aprendíais", "aprendían"],

        pluscuamperfecto:
            ["había aprendido", "habías aprendido", "había aprendido",
            "habíamos aprendido", "habíais aprendido", "habían aprendido"],

        futuroSimple:
            ["aprenderé", "aprenderás", "aprenderá",
            "aprenderemos", "aprenderéis", "aprenderán"],

        futuroPerfecto:
            ["habré aprendido", "habrás aprendido", "habrá aprendido",
            "habremos aprendido", "habréis aprendido", "habrán aprendido"]
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
    rule:"acciones actuales • hábitos • foco en la rutina",
    signalAliases: ["hoy en día a menudo","cada mañana","siempre","normalmente","a menudo"],
    signals: [
        "en mi vida cotidiana siempre",
        "hoy en día normalmente",
        "todos los días"
    ]
},

{
    id:"estarGerundio",
    name:"Estar + gerundio",
    rule:"acción en progreso • foco en el momento y/o la duración",
    signalAliases: ["actualmente"],
    signals: [
        "ahora",
        "en este momento",
        "ahora mismo"
    ]
},

{
    id:"preteritoPerfecto",
    name:"Pretérito perfecto",
    rule:"pasado relacionado con el presente • foco en el resultado ahora",
    signalAliases: ["esta semana","nunca hasta ahora","hoy","ya"],
    signals: [
        "hoy ya",
        "todavía no",
        "alguna vez"
    ]
},

{
    id:"preteritoIndefinido",
    name:"Pretérito indefinido",
    rule:"acción terminada en el pasado • foco en el hecho de que ocurrió",
    signalAliases: ["la semana pasada"],
    signals: [
        "ayer",
        "anoche",
        "el año pasado"
    ]
},

{
    id:"preteritoImperfecto",
    name:"Pretérito imperfecto",
    rule:"hábitos • descripciones en el pasado • foco en la costumbre o la duración",
    signalAliases: ["de pequeño a menudo","de joven","cada verano","siempre","normalmente","a menudo"],
    signals: [
        "en mi niñez siempre",
        "de pequeño normalmente",
        "cuando era niño"
    ]
},

{
    id:"pluscuamperfecto",
    name:"Pretérito pluscuamperfecto",
    rule:"acción anterior a otra acción pasada • foco en lo ocurrido antes",
    signalAliases: ["en aquel momento ya","antes","ya"],
    signals: [
        "antes de eso ya",
        "nunca antes",
        "hasta entonces"
    ]
},

{
    id:"futuroSimple",
    name:"Futuro simple",
    rule:"acciones futuras • foco en lo que pasará",
    signalAliases: ["pronto","algún día"],
    signals: [
        "mañana",
        "la semana que viene",
        "el año que viene"
    ]
},

{
    id:"futuroPerfecto",
    name:"Futuro perfecto",
    rule:"acción terminada antes de un momento futuro • foco en el resultado para entonces",
    signalAliases: ["para finales de año"],
    signals: [
        "para entonces",
        "para mañana",
        "para el viernes"
    ]
}

];
