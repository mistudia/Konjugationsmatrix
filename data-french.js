/* ===========================================================
   MISTUDIA FRENCH TENSE TRAINER
   data-french.js

   Hinweise:
   - aux: "avoir" oder "etre" (Hilfsverb im passé composé /
     plus-que-parfait)
   - pp:  participe passé (maskulin Singular); bei "etre"-Verben
     wird die Angleichung (-e, -s, -es) von der Prüflogik in
     app.js akzeptiert.
   - Die Zeitform-Arrays folgen der Reihenfolge der Pronomen:
     je, tu, il, nous, vous, ils
=========================================================== */

const languageConfig = {

    code: "fr",
    name: "Français",

    pronouns: [
        "je",
        "tu",
        "il",
        "nous",
        "vous",
        "ils"
    ],

    mixedPronouns: {

        3: ["je", "tu", "il"],

        6: ["je", "tu", "il", "nous", "vous", "ils"]

    }

};


/* ===========================================================
   SIGNAL WORDS
=========================================================== */

const signalWords = [

    "",

    "aujourd'hui toujours",
    "tous les jours",
    "en ce moment",
    "hier",
    "hier soir",
    "déjà ce matin",
    "dans mon enfance toujours",
    "autrefois",
    "chaque été",
    "déjà la veille",
    "jamais auparavant",
    "ce jour-là",
    "demain",
    "la semaine prochaine",
    "bientôt",
    "si + imparfait",
    "à ta place",
    "si j'étais toi"

];


/* ===========================================================
   VERB POOL
=========================================================== */

const verbPool = [

{
    infinitive: "être",
    type: "irregular",
    aux: "avoir",
    pp: "été",

    forms: {
        present:
            ["suis", "es", "est",
             "sommes", "êtes", "sont"],

        passeCompose:
            ["ai été", "as été", "a été",
             "avons été", "avez été", "ont été"],

        imparfait:
            ["étais", "étais", "était",
             "étions", "étiez", "étaient"],

        plusQueParfait:
            ["avais été", "avais été", "avait été",
             "avions été", "aviez été", "avaient été"],

        futurSimple:
            ["serai", "seras", "sera",
             "serons", "serez", "seront"],

        conditionnel:
            ["serais", "serais", "serait",
             "serions", "seriez", "seraient"]
    }
},

{
    infinitive: "avoir",
    type: "irregular",
    aux: "avoir",
    pp: "eu",

    forms: {
        present:
            ["ai", "as", "a",
             "avons", "avez", "ont"],

        passeCompose:
            ["ai eu", "as eu", "a eu",
             "avons eu", "avez eu", "ont eu"],

        imparfait:
            ["avais", "avais", "avait",
             "avions", "aviez", "avaient"],

        plusQueParfait:
            ["avais eu", "avais eu", "avait eu",
             "avions eu", "aviez eu", "avaient eu"],

        futurSimple:
            ["aurai", "auras", "aura",
             "aurons", "aurez", "auront"],

        conditionnel:
            ["aurais", "aurais", "aurait",
             "aurions", "auriez", "auraient"]
    }
},

{
    infinitive: "aller",
    type: "irregular",
    aux: "etre",
    pp: "allé",

    forms: {
        present:
            ["vais", "vas", "va",
             "allons", "allez", "vont"],

        passeCompose:
            ["suis allé", "es allé", "est allé",
             "sommes allés", "êtes allés", "sont allés"],

        imparfait:
            ["allais", "allais", "allait",
             "allions", "alliez", "allaient"],

        plusQueParfait:
            ["étais allé", "étais allé", "était allé",
             "étions allés", "étiez allés", "étaient allés"],

        futurSimple:
            ["irai", "iras", "ira",
             "irons", "irez", "iront"],

        conditionnel:
            ["irais", "irais", "irait",
             "irions", "iriez", "iraient"]
    }
},

{
    infinitive: "faire",
    type: "irregular",
    aux: "avoir",
    pp: "fait",

    forms: {
        present:
            ["fais", "fais", "fait",
             "faisons", "faites", "font"],

        passeCompose:
            ["ai fait", "as fait", "a fait",
             "avons fait", "avez fait", "ont fait"],

        imparfait:
            ["faisais", "faisais", "faisait",
             "faisions", "faisiez", "faisaient"],

        plusQueParfait:
            ["avais fait", "avais fait", "avait fait",
             "avions fait", "aviez fait", "avaient fait"],

        futurSimple:
            ["ferai", "feras", "fera",
             "ferons", "ferez", "feront"],

        conditionnel:
            ["ferais", "ferais", "ferait",
             "ferions", "feriez", "feraient"]
    }
},

{
    infinitive: "parler",
    type: "regular",
    aux: "avoir",
    pp: "parlé",

    forms: {
        present:
            ["parle", "parles", "parle",
             "parlons", "parlez", "parlent"],

        passeCompose:
            ["ai parlé", "as parlé", "a parlé",
             "avons parlé", "avez parlé", "ont parlé"],

        imparfait:
            ["parlais", "parlais", "parlait",
             "parlions", "parliez", "parlaient"],

        plusQueParfait:
            ["avais parlé", "avais parlé", "avait parlé",
             "avions parlé", "aviez parlé", "avaient parlé"],

        futurSimple:
            ["parlerai", "parleras", "parlera",
             "parlerons", "parlerez", "parleront"],

        conditionnel:
            ["parlerais", "parlerais", "parlerait",
             "parlerions", "parleriez", "parleraient"]
    }
},

{
    infinitive: "aimer",
    type: "regular",
    aux: "avoir",
    pp: "aimé",

    forms: {
        present:
            ["aime", "aimes", "aime",
             "aimons", "aimez", "aiment"],

        passeCompose:
            ["ai aimé", "as aimé", "a aimé",
             "avons aimé", "avez aimé", "ont aimé"],

        imparfait:
            ["aimais", "aimais", "aimait",
             "aimions", "aimiez", "aimaient"],

        plusQueParfait:
            ["avais aimé", "avais aimé", "avait aimé",
             "avions aimé", "aviez aimé", "avaient aimé"],

        futurSimple:
            ["aimerai", "aimeras", "aimera",
             "aimerons", "aimerez", "aimeront"],

        conditionnel:
            ["aimerais", "aimerais", "aimerait",
             "aimerions", "aimeriez", "aimeraient"]
    }
},

{
    infinitive: "manger",
    type: "regular",
    aux: "avoir",
    pp: "mangé",

    forms: {
        present:
            ["mange", "manges", "mange",
             "mangeons", "mangez", "mangent"],

        passeCompose:
            ["ai mangé", "as mangé", "a mangé",
             "avons mangé", "avez mangé", "ont mangé"],

        imparfait:
            ["mangeais", "mangeais", "mangeait",
             "mangions", "mangiez", "mangeaient"],

        plusQueParfait:
            ["avais mangé", "avais mangé", "avait mangé",
             "avions mangé", "aviez mangé", "avaient mangé"],

        futurSimple:
            ["mangerai", "mangeras", "mangera",
             "mangerons", "mangerez", "mangeront"],

        conditionnel:
            ["mangerais", "mangerais", "mangerait",
             "mangerions", "mangeriez", "mangeraient"]
    }
},

{
    infinitive: "habiter",
    type: "regular",
    aux: "avoir",
    pp: "habité",

    forms: {
        present:
            ["habite", "habites", "habite",
             "habitons", "habitez", "habitent"],

        passeCompose:
            ["ai habité", "as habité", "a habité",
             "avons habité", "avez habité", "ont habité"],

        imparfait:
            ["habitais", "habitais", "habitait",
             "habitions", "habitiez", "habitaient"],

        plusQueParfait:
            ["avais habité", "avais habité", "avait habité",
             "avions habité", "aviez habité", "avaient habité"],

        futurSimple:
            ["habiterai", "habiteras", "habitera",
             "habiterons", "habiterez", "habiteront"],

        conditionnel:
            ["habiterais", "habiterais", "habiterait",
             "habiterions", "habiteriez", "habiteraient"]
    }
},

{
    infinitive: "arriver",
    type: "regular",
    aux: "etre",
    pp: "arrivé",

    forms: {
        present:
            ["arrive", "arrives", "arrive",
             "arrivons", "arrivez", "arrivent"],

        passeCompose:
            ["suis arrivé", "es arrivé", "est arrivé",
             "sommes arrivés", "êtes arrivés", "sont arrivés"],

        imparfait:
            ["arrivais", "arrivais", "arrivait",
             "arrivions", "arriviez", "arrivaient"],

        plusQueParfait:
            ["étais arrivé", "étais arrivé", "était arrivé",
             "étions arrivés", "étiez arrivés", "étaient arrivés"],

        futurSimple:
            ["arriverai", "arriveras", "arrivera",
             "arriverons", "arriverez", "arriveront"],

        conditionnel:
            ["arriverais", "arriverais", "arriverait",
             "arriverions", "arriveriez", "arriveraient"]
    }
},

{
    infinitive: "finir",
    type: "regular",
    aux: "avoir",
    pp: "fini",

    forms: {
        present:
            ["finis", "finis", "finit",
             "finissons", "finissez", "finissent"],

        passeCompose:
            ["ai fini", "as fini", "a fini",
             "avons fini", "avez fini", "ont fini"],

        imparfait:
            ["finissais", "finissais", "finissait",
             "finissions", "finissiez", "finissaient"],

        plusQueParfait:
            ["avais fini", "avais fini", "avait fini",
             "avions fini", "aviez fini", "avaient fini"],

        futurSimple:
            ["finirai", "finiras", "finira",
             "finirons", "finirez", "finiront"],

        conditionnel:
            ["finirais", "finirais", "finirait",
             "finirions", "finiriez", "finiraient"]
    }
},

{
    infinitive: "choisir",
    type: "regular",
    aux: "avoir",
    pp: "choisi",

    forms: {
        present:
            ["choisis", "choisis", "choisit",
             "choisissons", "choisissez", "choisissent"],

        passeCompose:
            ["ai choisi", "as choisi", "a choisi",
             "avons choisi", "avez choisi", "ont choisi"],

        imparfait:
            ["choisissais", "choisissais", "choisissait",
             "choisissions", "choisissiez", "choisissaient"],

        plusQueParfait:
            ["avais choisi", "avais choisi", "avait choisi",
             "avions choisi", "aviez choisi", "avaient choisi"],

        futurSimple:
            ["choisirai", "choisiras", "choisira",
             "choisirons", "choisirez", "choisiront"],

        conditionnel:
            ["choisirais", "choisirais", "choisirait",
             "choisirions", "choisiriez", "choisiraient"]
    }
},

{
    infinitive: "vendre",
    type: "regular",
    aux: "avoir",
    pp: "vendu",

    forms: {
        present:
            ["vends", "vends", "vend",
             "vendons", "vendez", "vendent"],

        passeCompose:
            ["ai vendu", "as vendu", "a vendu",
             "avons vendu", "avez vendu", "ont vendu"],

        imparfait:
            ["vendais", "vendais", "vendait",
             "vendions", "vendiez", "vendaient"],

        plusQueParfait:
            ["avais vendu", "avais vendu", "avait vendu",
             "avions vendu", "aviez vendu", "avaient vendu"],

        futurSimple:
            ["vendrai", "vendras", "vendra",
             "vendrons", "vendrez", "vendront"],

        conditionnel:
            ["vendrais", "vendrais", "vendrait",
             "vendrions", "vendriez", "vendraient"]
    }
},

{
    infinitive: "prendre",
    type: "irregular",
    aux: "avoir",
    pp: "pris",

    forms: {
        present:
            ["prends", "prends", "prend",
             "prenons", "prenez", "prennent"],

        passeCompose:
            ["ai pris", "as pris", "a pris",
             "avons pris", "avez pris", "ont pris"],

        imparfait:
            ["prenais", "prenais", "prenait",
             "prenions", "preniez", "prenaient"],

        plusQueParfait:
            ["avais pris", "avais pris", "avait pris",
             "avions pris", "aviez pris", "avaient pris"],

        futurSimple:
            ["prendrai", "prendras", "prendra",
             "prendrons", "prendrez", "prendront"],

        conditionnel:
            ["prendrais", "prendrais", "prendrait",
             "prendrions", "prendriez", "prendraient"]
    }
},

{
    infinitive: "mettre",
    type: "irregular",
    aux: "avoir",
    pp: "mis",

    forms: {
        present:
            ["mets", "mets", "met",
             "mettons", "mettez", "mettent"],

        passeCompose:
            ["ai mis", "as mis", "a mis",
             "avons mis", "avez mis", "ont mis"],

        imparfait:
            ["mettais", "mettais", "mettait",
             "mettions", "mettiez", "mettaient"],

        plusQueParfait:
            ["avais mis", "avais mis", "avait mis",
             "avions mis", "aviez mis", "avaient mis"],

        futurSimple:
            ["mettrai", "mettras", "mettra",
             "mettrons", "mettrez", "mettront"],

        conditionnel:
            ["mettrais", "mettrais", "mettrait",
             "mettrions", "mettriez", "mettraient"]
    }
},

{
    infinitive: "venir",
    type: "irregular",
    aux: "etre",
    pp: "venu",

    forms: {
        present:
            ["viens", "viens", "vient",
             "venons", "venez", "viennent"],

        passeCompose:
            ["suis venu", "es venu", "est venu",
             "sommes venus", "êtes venus", "sont venus"],

        imparfait:
            ["venais", "venais", "venait",
             "venions", "veniez", "venaient"],

        plusQueParfait:
            ["étais venu", "étais venu", "était venu",
             "étions venus", "étiez venus", "étaient venus"],

        futurSimple:
            ["viendrai", "viendras", "viendra",
             "viendrons", "viendrez", "viendront"],

        conditionnel:
            ["viendrais", "viendrais", "viendrait",
             "viendrions", "viendriez", "viendraient"]
    }
},

{
    infinitive: "partir",
    type: "irregular",
    aux: "etre",
    pp: "parti",

    forms: {
        present:
            ["pars", "pars", "part",
             "partons", "partez", "partent"],

        passeCompose:
            ["suis parti", "es parti", "est parti",
             "sommes partis", "êtes partis", "sont partis"],

        imparfait:
            ["partais", "partais", "partait",
             "partions", "partiez", "partaient"],

        plusQueParfait:
            ["étais parti", "étais parti", "était parti",
             "étions partis", "étiez partis", "étaient partis"],

        futurSimple:
            ["partirai", "partiras", "partira",
             "partirons", "partirez", "partiront"],

        conditionnel:
            ["partirais", "partirais", "partirait",
             "partirions", "partiriez", "partiraient"]
    }
},

{
    infinitive: "voir",
    type: "irregular",
    aux: "avoir",
    pp: "vu",

    forms: {
        present:
            ["vois", "vois", "voit",
             "voyons", "voyez", "voient"],

        passeCompose:
            ["ai vu", "as vu", "a vu",
             "avons vu", "avez vu", "ont vu"],

        imparfait:
            ["voyais", "voyais", "voyait",
             "voyions", "voyiez", "voyaient"],

        plusQueParfait:
            ["avais vu", "avais vu", "avait vu",
             "avions vu", "aviez vu", "avaient vu"],

        futurSimple:
            ["verrai", "verras", "verra",
             "verrons", "verrez", "verront"],

        conditionnel:
            ["verrais", "verrais", "verrait",
             "verrions", "verriez", "verraient"]
    }
},

{
    infinitive: "vouloir",
    type: "irregular",
    aux: "avoir",
    pp: "voulu",

    forms: {
        present:
            ["veux", "veux", "veut",
             "voulons", "voulez", "veulent"],

        passeCompose:
            ["ai voulu", "as voulu", "a voulu",
             "avons voulu", "avez voulu", "ont voulu"],

        imparfait:
            ["voulais", "voulais", "voulait",
             "voulions", "vouliez", "voulaient"],

        plusQueParfait:
            ["avais voulu", "avais voulu", "avait voulu",
             "avions voulu", "aviez voulu", "avaient voulu"],

        futurSimple:
            ["voudrai", "voudras", "voudra",
             "voudrons", "voudrez", "voudront"],

        conditionnel:
            ["voudrais", "voudrais", "voudrait",
             "voudrions", "voudriez", "voudraient"]
    }
},

{
    infinitive: "pouvoir",
    type: "irregular",
    aux: "avoir",
    pp: "pu",

    forms: {
        present:
            ["peux", "peux", "peut",
             "pouvons", "pouvez", "peuvent"],

        passeCompose:
            ["ai pu", "as pu", "a pu",
             "avons pu", "avez pu", "ont pu"],

        imparfait:
            ["pouvais", "pouvais", "pouvait",
             "pouvions", "pouviez", "pouvaient"],

        plusQueParfait:
            ["avais pu", "avais pu", "avait pu",
             "avions pu", "aviez pu", "avaient pu"],

        futurSimple:
            ["pourrai", "pourras", "pourra",
             "pourrons", "pourrez", "pourront"],

        conditionnel:
            ["pourrais", "pourrais", "pourrait",
             "pourrions", "pourriez", "pourraient"]
    }
},

{
    infinitive: "savoir",
    type: "irregular",
    aux: "avoir",
    pp: "su",

    forms: {
        present:
            ["sais", "sais", "sait",
             "savons", "savez", "savent"],

        passeCompose:
            ["ai su", "as su", "a su",
             "avons su", "avez su", "ont su"],

        imparfait:
            ["savais", "savais", "savait",
             "savions", "saviez", "savaient"],

        plusQueParfait:
            ["avais su", "avais su", "avait su",
             "avions su", "aviez su", "avaient su"],

        futurSimple:
            ["saurai", "sauras", "saura",
             "saurons", "saurez", "sauront"],

        conditionnel:
            ["saurais", "saurais", "saurait",
             "saurions", "sauriez", "sauraient"]
    }
},

{
    infinitive: "devoir",
    type: "irregular",
    aux: "avoir",
    pp: "dû",

    forms: {
        present:
            ["dois", "dois", "doit",
             "devons", "devez", "doivent"],

        passeCompose:
            ["ai dû", "as dû", "a dû",
             "avons dû", "avez dû", "ont dû"],

        imparfait:
            ["devais", "devais", "devait",
             "devions", "deviez", "devaient"],

        plusQueParfait:
            ["avais dû", "avais dû", "avait dû",
             "avions dû", "aviez dû", "avaient dû"],

        futurSimple:
            ["devrai", "devras", "devra",
             "devrons", "devrez", "devront"],

        conditionnel:
            ["devrais", "devrais", "devrait",
             "devrions", "devriez", "devraient"]
    }
},

{
    infinitive: "dire",
    type: "irregular",
    aux: "avoir",
    pp: "dit",

    forms: {
        present:
            ["dis", "dis", "dit",
             "disons", "dites", "disent"],

        passeCompose:
            ["ai dit", "as dit", "a dit",
             "avons dit", "avez dit", "ont dit"],

        imparfait:
            ["disais", "disais", "disait",
             "disions", "disiez", "disaient"],

        plusQueParfait:
            ["avais dit", "avais dit", "avait dit",
             "avions dit", "aviez dit", "avaient dit"],

        futurSimple:
            ["dirai", "diras", "dira",
             "dirons", "direz", "diront"],

        conditionnel:
            ["dirais", "dirais", "dirait",
             "dirions", "diriez", "diraient"]
    }
},

{
    infinitive: "écrire",
    type: "irregular",
    aux: "avoir",
    pp: "écrit",

    forms: {
        present:
            ["écris", "écris", "écrit",
             "écrivons", "écrivez", "écrivent"],

        passeCompose:
            ["ai écrit", "as écrit", "a écrit",
             "avons écrit", "avez écrit", "ont écrit"],

        imparfait:
            ["écrivais", "écrivais", "écrivait",
             "écrivions", "écriviez", "écrivaient"],

        plusQueParfait:
            ["avais écrit", "avais écrit", "avait écrit",
             "avions écrit", "aviez écrit", "avaient écrit"],

        futurSimple:
            ["écrirai", "écriras", "écrira",
             "écrirons", "écrirez", "écriront"],

        conditionnel:
            ["écrirais", "écrirais", "écrirait",
             "écririons", "écririez", "écriraient"]
    }
},

{
    infinitive: "lire",
    type: "irregular",
    aux: "avoir",
    pp: "lu",

    forms: {
        present:
            ["lis", "lis", "lit",
             "lisons", "lisez", "lisent"],

        passeCompose:
            ["ai lu", "as lu", "a lu",
             "avons lu", "avez lu", "ont lu"],

        imparfait:
            ["lisais", "lisais", "lisait",
             "lisions", "lisiez", "lisaient"],

        plusQueParfait:
            ["avais lu", "avais lu", "avait lu",
             "avions lu", "aviez lu", "avaient lu"],

        futurSimple:
            ["lirai", "liras", "lira",
             "lirons", "lirez", "liront"],

        conditionnel:
            ["lirais", "lirais", "lirait",
             "lirions", "liriez", "liraient"]
    }
},

{
    infinitive: "boire",
    type: "irregular",
    aux: "avoir",
    pp: "bu",

    forms: {
        present:
            ["bois", "bois", "boit",
             "buvons", "buvez", "boivent"],

        passeCompose:
            ["ai bu", "as bu", "a bu",
             "avons bu", "avez bu", "ont bu"],

        imparfait:
            ["buvais", "buvais", "buvait",
             "buvions", "buviez", "buvaient"],

        plusQueParfait:
            ["avais bu", "avais bu", "avait bu",
             "avions bu", "aviez bu", "avaient bu"],

        futurSimple:
            ["boirai", "boiras", "boira",
             "boirons", "boirez", "boiront"],

        conditionnel:
            ["boirais", "boirais", "boirait",
             "boirions", "boiriez", "boiraient"]
    }
}

];


/* ===========================================================
   TENSES
=========================================================== */

const tenses = [

{
    id: "present",
    name: "Présent",
    rule: "actions actuelles • habitudes • accent sur le moment présent",
    signalAliases: ["aujourd'hui souvent","aujourd'hui d'habitude","maintenant","toujours","souvent","d'habitude"],
    signals: [
        "aujourd'hui toujours",
        "tous les jours",
        "en ce moment"
    ]
},

{
    id: "passeCompose",
    name: "Passé composé",
    compound: true,
    rule: "action terminée dans le passé • accent sur le résultat",
    signalAliases: ["la semaine dernière","l'année dernière","pas encore","jamais jusqu'ici","déjà","jamais"],
    signals: [
        "hier",
        "hier soir",
        "déjà ce matin"
    ]
},

{
    id: "imparfait",
    name: "Imparfait",
    rule: "habitudes • descriptions dans le passé • accent sur la durée",
    signalAliases: ["dans mon enfance souvent","dans mon enfance d'habitude","à l'époque","toujours","souvent","d'habitude"],
    signals: [
        "dans mon enfance toujours",
        "autrefois",
        "chaque été"
    ]
},

{
    id: "plusQueParfait",
    name: "Plus-que-parfait",
    compound: true,
    rule: "action antérieure à une autre action passée • accent sur l'événement antérieur",
    signalAliases: ["auparavant","avant","déjà","jamais"],
    signals: [
        "déjà la veille",
        "jamais auparavant",
        "ce jour-là"
    ]
},

{
    id: "futurSimple",
    name: "Futur simple",
    rule: "actions futures • accent sur ce qui va arriver",
    signalAliases: ["l'année prochaine"],
    signals: [
        "demain",
        "la semaine prochaine",
        "bientôt"
    ]
},

{
    id: "conditionnel",
    name: "Conditionnel présent",
    rule: "souhaits • politesse • hypothèses • accent sur le souhait ou l'irréel",
    signalAliases: ["je voudrais"],
    signals: [
        "si + imparfait",
        "à ta place",
        "si j'étais toi"
    ]
}

];
