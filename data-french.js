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

    pronounLabels: [
        "je",
        "tu",
        "il/elle/on",
        "nous",
        "vous",
        "ils/elles"
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
},

{
    infinitive: "trouver",
    type: "regular",
    aux: "avoir",
    pp: "trouvé",

    forms: {
        present:
            ["trouve", "trouves", "trouve",
             "trouvons", "trouvez", "trouvent"],

        passeCompose:
            ["ai trouvé", "as trouvé", "a trouvé",
             "avons trouvé", "avez trouvé", "ont trouvé"],

        imparfait:
            ["trouvais", "trouvais", "trouvait",
             "trouvions", "trouviez", "trouvaient"],

        plusQueParfait:
            ["avais trouvé", "avais trouvé", "avait trouvé",
             "avions trouvé", "aviez trouvé", "avaient trouvé"],

        futurSimple:
            ["trouverai", "trouveras", "trouvera",
             "trouverons", "trouverez", "trouveront"],

        conditionnel:
            ["trouverais", "trouverais", "trouverait",
             "trouverions", "trouveriez", "trouveraient"]
    }
},

{
    infinitive: "devenir",
    type: "irregular",
    aux: "etre",
    pp: "devenu",

    forms: {
        present:
            ["deviens", "deviens", "devient",
             "devenons", "devenez", "deviennent"],

        passeCompose:
            ["suis devenu", "es devenu", "est devenu",
             "sommes devenus", "êtes devenus", "sont devenus"],

        imparfait:
            ["devenais", "devenais", "devenait",
             "devenions", "deveniez", "devenaient"],

        plusQueParfait:
            ["étais devenu", "étais devenu", "était devenu",
             "étions devenus", "étiez devenus", "étaient devenus"],

        futurSimple:
            ["deviendrai", "deviendras", "deviendra",
             "deviendrons", "deviendrez", "deviendront"],

        conditionnel:
            ["deviendrais", "deviendrais", "deviendrait",
             "deviendrions", "deviendriez", "deviendraient"]
    }
},

{
    infinitive: "donner",
    type: "regular",
    aux: "avoir",
    pp: "donné",

    forms: {
        present:
            ["donne", "donnes", "donne",
             "donnons", "donnez", "donnent"],

        passeCompose:
            ["ai donné", "as donné", "a donné",
             "avons donné", "avez donné", "ont donné"],

        imparfait:
            ["donnais", "donnais", "donnait",
             "donnions", "donniez", "donnaient"],

        plusQueParfait:
            ["avais donné", "avais donné", "avait donné",
             "avions donné", "aviez donné", "avaient donné"],

        futurSimple:
            ["donnerai", "donneras", "donnera",
             "donnerons", "donnerez", "donneront"],

        conditionnel:
            ["donnerais", "donnerais", "donnerait",
             "donnerions", "donneriez", "donneraient"]
    }
},

{
    infinitive: "connaître",
    type: "irregular",
    aux: "avoir",
    pp: "connu",

    forms: {
        present:
            ["connais", "connais", "connaît",
             "connaissons", "connaissez", "connaissent"],

        passeCompose:
            ["ai connu", "as connu", "a connu",
             "avons connu", "avez connu", "ont connu"],

        imparfait:
            ["connaissais", "connaissais", "connaissait",
             "connaissions", "connaissiez", "connaissaient"],

        plusQueParfait:
            ["avais connu", "avais connu", "avait connu",
             "avions connu", "aviez connu", "avaient connu"],

        futurSimple:
            ["connaîtrai", "connaîtras", "connaîtra",
             "connaîtrons", "connaîtrez", "connaîtront"],

        conditionnel:
            ["connaîtrais", "connaîtrais", "connaîtrait",
             "connaîtrions", "connaîtriez", "connaîtraient"]
    }
},

{
    infinitive: "rester",
    type: "regular",
    aux: "etre",
    pp: "resté",

    forms: {
        present:
            ["reste", "restes", "reste",
             "restons", "restez", "restent"],

        passeCompose:
            ["suis resté", "es resté", "est resté",
             "sommes restés", "êtes restés", "sont restés"],

        imparfait:
            ["restais", "restais", "restait",
             "restions", "restiez", "restaient"],

        plusQueParfait:
            ["étais resté", "étais resté", "était resté",
             "étions restés", "étiez restés", "étaient restés"],

        futurSimple:
            ["resterai", "resteras", "restera",
             "resterons", "resterez", "resteront"],

        conditionnel:
            ["resterais", "resterais", "resterait",
             "resterions", "resteriez", "resteraient"]
    }
},

{
    infinitive: "appeler",
    type: "irregular",
    aux: "avoir",
    pp: "appelé",

    forms: {
        present:
            ["appelle", "appelles", "appelle",
             "appelons", "appelez", "appellent"],

        passeCompose:
            ["ai appelé", "as appelé", "a appelé",
             "avons appelé", "avez appelé", "ont appelé"],

        imparfait:
            ["appelais", "appelais", "appelait",
             "appelions", "appeliez", "appelaient"],

        plusQueParfait:
            ["avais appelé", "avais appelé", "avait appelé",
             "avions appelé", "aviez appelé", "avaient appelé"],

        futurSimple:
            ["appellerai", "appelleras", "appellera",
             "appellerons", "appellerez", "appelleront"],

        conditionnel:
            ["appellerais", "appellerais", "appellerait",
             "appellerions", "appelleriez", "appelleraient"]
    }
},

{
    infinitive: "jouer",
    type: "regular",
    aux: "avoir",
    pp: "joué",

    forms: {
        present:
            ["joue", "joues", "joue",
             "jouons", "jouez", "jouent"],

        passeCompose:
            ["ai joué", "as joué", "a joué",
             "avons joué", "avez joué", "ont joué"],

        imparfait:
            ["jouais", "jouais", "jouait",
             "jouions", "jouiez", "jouaient"],

        plusQueParfait:
            ["avais joué", "avais joué", "avait joué",
             "avions joué", "aviez joué", "avaient joué"],

        futurSimple:
            ["jouerai", "joueras", "jouera",
             "jouerons", "jouerez", "joueront"],

        conditionnel:
            ["jouerais", "jouerais", "jouerait",
             "jouerions", "joueriez", "joueraient"]
    }
},

{
    infinitive: "sortir",
    type: "irregular",
    aux: "etre",
    pp: "sorti",

    altAux: "avoir",
    altForms: {
        passeCompose:
            ["ai sorti", "as sorti", "a sorti",
             "avons sorti", "avez sorti", "ont sorti"],
        plusQueParfait:
            ["avais sorti", "avais sorti", "avait sorti",
             "avions sorti", "aviez sorti", "avaient sorti"]
    },

    forms: {
        present:
            ["sors", "sors", "sort",
             "sortons", "sortez", "sortent"],

        passeCompose:
            ["suis sorti", "es sorti", "est sorti",
             "sommes sortis", "êtes sortis", "sont sortis"],

        imparfait:
            ["sortais", "sortais", "sortait",
             "sortions", "sortiez", "sortaient"],

        plusQueParfait:
            ["étais sorti", "étais sorti", "était sorti",
             "étions sortis", "étiez sortis", "étaient sortis"],

        futurSimple:
            ["sortirai", "sortiras", "sortira",
             "sortirons", "sortirez", "sortiront"],

        conditionnel:
            ["sortirais", "sortirais", "sortirait",
             "sortirions", "sortiriez", "sortiraient"]
    }
},

{
    infinitive: "comprendre",
    type: "irregular",
    aux: "avoir",
    pp: "compris",

    forms: {
        present:
            ["comprends", "comprends", "comprend",
             "comprenons", "comprenez", "comprennent"],

        passeCompose:
            ["ai compris", "as compris", "a compris",
             "avons compris", "avez compris", "ont compris"],

        imparfait:
            ["comprenais", "comprenais", "comprenait",
             "comprenions", "compreniez", "comprenaient"],

        plusQueParfait:
            ["avais compris", "avais compris", "avait compris",
             "avions compris", "aviez compris", "avaient compris"],

        futurSimple:
            ["comprendrai", "comprendras", "comprendra",
             "comprendrons", "comprendrez", "comprendront"],

        conditionnel:
            ["comprendrais", "comprendrais", "comprendrait",
             "comprendrions", "comprendriez", "comprendraient"]
    }
},

{
    infinitive: "commencer",
    type: "regular",
    aux: "avoir",
    pp: "commencé",

    forms: {
        present:
            ["commence", "commences", "commence",
             "commençons", "commencez", "commencent"],

        passeCompose:
            ["ai commencé", "as commencé", "a commencé",
             "avons commencé", "avez commencé", "ont commencé"],

        imparfait:
            ["commençais", "commençais", "commençait",
             "commencions", "commenciez", "commençaient"],

        plusQueParfait:
            ["avais commencé", "avais commencé", "avait commencé",
             "avions commencé", "aviez commencé", "avaient commencé"],

        futurSimple:
            ["commencerai", "commenceras", "commencera",
             "commencerons", "commencerez", "commenceront"],

        conditionnel:
            ["commencerais", "commencerais", "commencerait",
             "commencerions", "commenceriez", "commenceraient"]
    }
},

{
    infinitive: "travailler",
    type: "regular",
    aux: "avoir",
    pp: "travaillé",

    forms: {
        present:
            ["travaille", "travailles", "travaille",
             "travaillons", "travaillez", "travaillent"],

        passeCompose:
            ["ai travaillé", "as travaillé", "a travaillé",
             "avons travaillé", "avez travaillé", "ont travaillé"],

        imparfait:
            ["travaillais", "travaillais", "travaillait",
             "travaillions", "travailliez", "travaillaient"],

        plusQueParfait:
            ["avais travaillé", "avais travaillé", "avait travaillé",
             "avions travaillé", "aviez travaillé", "avaient travaillé"],

        futurSimple:
            ["travaillerai", "travailleras", "travaillera",
             "travaillerons", "travaillerez", "travailleront"],

        conditionnel:
            ["travaillerais", "travaillerais", "travaillerait",
             "travaillerions", "travailleriez", "travailleraient"]
    }
},

{
    infinitive: "demander",
    type: "regular",
    aux: "avoir",
    pp: "demandé",

    forms: {
        present:
            ["demande", "demandes", "demande",
             "demandons", "demandez", "demandent"],

        passeCompose:
            ["ai demandé", "as demandé", "a demandé",
             "avons demandé", "avez demandé", "ont demandé"],

        imparfait:
            ["demandais", "demandais", "demandait",
             "demandions", "demandiez", "demandaient"],

        plusQueParfait:
            ["avais demandé", "avais demandé", "avait demandé",
             "avions demandé", "aviez demandé", "avaient demandé"],

        futurSimple:
            ["demanderai", "demanderas", "demandera",
             "demanderons", "demanderez", "demanderont"],

        conditionnel:
            ["demanderais", "demanderais", "demanderait",
             "demanderions", "demanderiez", "demanderaient"]
    }
},

{
    infinitive: "rendre",
    type: "regular",
    aux: "avoir",
    pp: "rendu",

    forms: {
        present:
            ["rends", "rends", "rend",
             "rendons", "rendez", "rendent"],

        passeCompose:
            ["ai rendu", "as rendu", "a rendu",
             "avons rendu", "avez rendu", "ont rendu"],

        imparfait:
            ["rendais", "rendais", "rendait",
             "rendions", "rendiez", "rendaient"],

        plusQueParfait:
            ["avais rendu", "avais rendu", "avait rendu",
             "avions rendu", "aviez rendu", "avaient rendu"],

        futurSimple:
            ["rendrai", "rendras", "rendra",
             "rendrons", "rendrez", "rendront"],

        conditionnel:
            ["rendrais", "rendrais", "rendrait",
             "rendrions", "rendriez", "rendraient"]
    }
},

{
    infinitive: "porter",
    type: "regular",
    aux: "avoir",
    pp: "porté",

    forms: {
        present:
            ["porte", "portes", "porte",
             "portons", "portez", "portent"],

        passeCompose:
            ["ai porté", "as porté", "a porté",
             "avons porté", "avez porté", "ont porté"],

        imparfait:
            ["portais", "portais", "portait",
             "portions", "portiez", "portaient"],

        plusQueParfait:
            ["avais porté", "avais porté", "avait porté",
             "avions porté", "aviez porté", "avaient porté"],

        futurSimple:
            ["porterai", "porteras", "portera",
             "porterons", "porterez", "porteront"],

        conditionnel:
            ["porterais", "porterais", "porterait",
             "porterions", "porteriez", "porteraient"]
    }
},

{
    infinitive: "tenir",
    type: "irregular",
    aux: "avoir",
    pp: "tenu",

    forms: {
        present:
            ["tiens", "tiens", "tient",
             "tenons", "tenez", "tiennent"],

        passeCompose:
            ["ai tenu", "as tenu", "a tenu",
             "avons tenu", "avez tenu", "ont tenu"],

        imparfait:
            ["tenais", "tenais", "tenait",
             "tenions", "teniez", "tenaient"],

        plusQueParfait:
            ["avais tenu", "avais tenu", "avait tenu",
             "avions tenu", "aviez tenu", "avaient tenu"],

        futurSimple:
            ["tiendrai", "tiendras", "tiendra",
             "tiendrons", "tiendrez", "tiendront"],

        conditionnel:
            ["tiendrais", "tiendrais", "tiendrait",
             "tiendrions", "tiendriez", "tiendraient"]
    }
},

{
    infinitive: "suivre",
    type: "irregular",
    aux: "avoir",
    pp: "suivi",

    forms: {
        present:
            ["suis", "suis", "suit",
             "suivons", "suivez", "suivent"],

        passeCompose:
            ["ai suivi", "as suivi", "a suivi",
             "avons suivi", "avez suivi", "ont suivi"],

        imparfait:
            ["suivais", "suivais", "suivait",
             "suivions", "suiviez", "suivaient"],

        plusQueParfait:
            ["avais suivi", "avais suivi", "avait suivi",
             "avions suivi", "aviez suivi", "avaient suivi"],

        futurSimple:
            ["suivrai", "suivras", "suivra",
             "suivrons", "suivrez", "suivront"],

        conditionnel:
            ["suivrais", "suivrais", "suivrait",
             "suivrions", "suivriez", "suivraient"]
    }
},

{
    infinitive: "recevoir",
    type: "irregular",
    aux: "avoir",
    pp: "reçu",

    forms: {
        present:
            ["reçois", "reçois", "reçoit",
             "recevons", "recevez", "reçoivent"],

        passeCompose:
            ["ai reçu", "as reçu", "a reçu",
             "avons reçu", "avez reçu", "ont reçu"],

        imparfait:
            ["recevais", "recevais", "recevait",
             "recevions", "receviez", "recevaient"],

        plusQueParfait:
            ["avais reçu", "avais reçu", "avait reçu",
             "avions reçu", "aviez reçu", "avaient reçu"],

        futurSimple:
            ["recevrai", "recevras", "recevra",
             "recevrons", "recevrez", "recevront"],

        conditionnel:
            ["recevrais", "recevrais", "recevrait",
             "recevrions", "recevriez", "recevraient"]
    }
},

{
    infinitive: "penser",
    type: "regular",
    aux: "avoir",
    pp: "pensé",

    forms: {
        present:
            ["pense", "penses", "pense",
             "pensons", "pensez", "pensent"],

        passeCompose:
            ["ai pensé", "as pensé", "a pensé",
             "avons pensé", "avez pensé", "ont pensé"],

        imparfait:
            ["pensais", "pensais", "pensait",
             "pensions", "pensiez", "pensaient"],

        plusQueParfait:
            ["avais pensé", "avais pensé", "avait pensé",
             "avions pensé", "aviez pensé", "avaient pensé"],

        futurSimple:
            ["penserai", "penseras", "pensera",
             "penserons", "penserez", "penseront"],

        conditionnel:
            ["penserais", "penserais", "penserait",
             "penserions", "penseriez", "penseraient"]
    }
},

{
    infinitive: "naître",
    type: "irregular",
    aux: "etre",
    pp: "né",

    forms: {
        present:
            ["nais", "nais", "naît",
             "naissons", "naissez", "naissent"],

        passeCompose:
            ["suis né", "es né", "est né",
             "sommes nés", "êtes nés", "sont nés"],

        imparfait:
            ["naissais", "naissais", "naissait",
             "naissions", "naissiez", "naissaient"],

        plusQueParfait:
            ["étais né", "étais né", "était né",
             "étions nés", "étiez nés", "étaient nés"],

        futurSimple:
            ["naîtrai", "naîtras", "naîtra",
             "naîtrons", "naîtrez", "naîtront"],

        conditionnel:
            ["naîtrais", "naîtrais", "naîtrait",
             "naîtrions", "naîtriez", "naîtraient"]
    }
},

{
    infinitive: "mourir",
    type: "irregular",
    aux: "etre",
    pp: "mort",

    forms: {
        present:
            ["meurs", "meurs", "meurt",
             "mourons", "mourez", "meurent"],

        passeCompose:
            ["suis mort", "es mort", "est mort",
             "sommes morts", "êtes morts", "sont morts"],

        imparfait:
            ["mourais", "mourais", "mourait",
             "mourions", "mouriez", "mouraient"],

        plusQueParfait:
            ["étais mort", "étais mort", "était mort",
             "étions morts", "étiez morts", "étaient morts"],

        futurSimple:
            ["mourrai", "mourras", "mourra",
             "mourrons", "mourrez", "mourront"],

        conditionnel:
            ["mourrais", "mourrais", "mourrait",
             "mourrions", "mourriez", "mourraient"]
    }
},

{
    infinitive: "croire",
    type: "irregular",
    aux: "avoir",
    pp: "cru",

    forms: {
        present:
            ["crois", "crois", "croit",
             "croyons", "croyez", "croient"],

        passeCompose:
            ["ai cru", "as cru", "a cru",
             "avons cru", "avez cru", "ont cru"],

        imparfait:
            ["croyais", "croyais", "croyait",
             "croyions", "croyiez", "croyaient"],

        plusQueParfait:
            ["avais cru", "avais cru", "avait cru",
             "avions cru", "aviez cru", "avaient cru"],

        futurSimple:
            ["croirai", "croiras", "croira",
             "croirons", "croirez", "croiront"],

        conditionnel:
            ["croirais", "croirais", "croirait",
             "croirions", "croiriez", "croiraient"]
    }
},

{
    infinitive: "attendre",
    type: "regular",
    aux: "avoir",
    pp: "attendu",

    forms: {
        present:
            ["attends", "attends", "attend",
             "attendons", "attendez", "attendent"],

        passeCompose:
            ["ai attendu", "as attendu", "a attendu",
             "avons attendu", "avez attendu", "ont attendu"],

        imparfait:
            ["attendais", "attendais", "attendait",
             "attendions", "attendiez", "attendaient"],

        plusQueParfait:
            ["avais attendu", "avais attendu", "avait attendu",
             "avions attendu", "aviez attendu", "avaient attendu"],

        futurSimple:
            ["attendrai", "attendras", "attendra",
             "attendrons", "attendrez", "attendront"],

        conditionnel:
            ["attendrais", "attendrais", "attendrait",
             "attendrions", "attendriez", "attendraient"]
    }
},

{
    infinitive: "ouvrir",
    type: "irregular",
    aux: "avoir",
    pp: "ouvert",

    forms: {
        present:
            ["ouvre", "ouvres", "ouvre",
             "ouvrons", "ouvrez", "ouvrent"],

        passeCompose:
            ["ai ouvert", "as ouvert", "a ouvert",
             "avons ouvert", "avez ouvert", "ont ouvert"],

        imparfait:
            ["ouvrais", "ouvrais", "ouvrait",
             "ouvrions", "ouvriez", "ouvraient"],

        plusQueParfait:
            ["avais ouvert", "avais ouvert", "avait ouvert",
             "avions ouvert", "aviez ouvert", "avaient ouvert"],

        futurSimple:
            ["ouvrirai", "ouvriras", "ouvrira",
             "ouvrirons", "ouvrirez", "ouvriront"],

        conditionnel:
            ["ouvrirais", "ouvrirais", "ouvrirait",
             "ouvririons", "ouvririez", "ouvriraient"]
    }
},

{
    infinitive: "regarder",
    type: "regular",
    aux: "avoir",
    pp: "regardé",

    forms: {
        present:
            ["regarde", "regardes", "regarde",
             "regardons", "regardez", "regardent"],

        passeCompose:
            ["ai regardé", "as regardé", "a regardé",
             "avons regardé", "avez regardé", "ont regardé"],

        imparfait:
            ["regardais", "regardais", "regardait",
             "regardions", "regardiez", "regardaient"],

        plusQueParfait:
            ["avais regardé", "avais regardé", "avait regardé",
             "avions regardé", "aviez regardé", "avaient regardé"],

        futurSimple:
            ["regarderai", "regarderas", "regardera",
             "regarderons", "regarderez", "regarderont"],

        conditionnel:
            ["regarderais", "regarderais", "regarderait",
             "regarderions", "regarderiez", "regarderaient"]
    }
},

{
    infinitive: "entendre",
    type: "regular",
    aux: "avoir",
    pp: "entendu",

    forms: {
        present:
            ["entends", "entends", "entend",
             "entendons", "entendez", "entendent"],

        passeCompose:
            ["ai entendu", "as entendu", "a entendu",
             "avons entendu", "avez entendu", "ont entendu"],

        imparfait:
            ["entendais", "entendais", "entendait",
             "entendions", "entendiez", "entendaient"],

        plusQueParfait:
            ["avais entendu", "avais entendu", "avait entendu",
             "avions entendu", "aviez entendu", "avaient entendu"],

        futurSimple:
            ["entendrai", "entendras", "entendra",
             "entendrons", "entendrez", "entendront"],

        conditionnel:
            ["entendrais", "entendrais", "entendrait",
             "entendrions", "entendriez", "entendraient"]
    }
}

]


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
