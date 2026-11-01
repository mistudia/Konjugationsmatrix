/* ===========================================================
   MISTUDIA CONJUGATION TRAINER
   app.js
=========================================================== */

const tenseSelection = document.getElementById("tenseSelection");
const startBtn = document.getElementById("startBtn");
const selectAllBtn = document.getElementById("selectAllBtn");
const selectNoneBtn = document.getElementById("selectNoneBtn");
const importantBtn = document.getElementById("importantBtn");

const exercise = document.getElementById("exercise");
const headerRow = document.getElementById("headerRow");
const tableBody = document.getElementById("tableBody");
const tenseTableEl = document.getElementById("tenseTable");
let verticalMode = false;

const languageSelect = document.getElementById("languageSelect");
const tenseDropdownBtn = document.getElementById("tenseDropdownBtn");
const tenseDropdownMenu = document.getElementById("tenseDropdownMenu");

const checkBtn = document.getElementById("checkBtn");
let marksVisible = false;
const solutionBtn = document.getElementById("solutionBtn");

const score = document.getElementById("score");
const percent = document.getElementById("percent");
const pageTitle = document.getElementById("pageTitle");

const exerciseTypeSelect =
    document.getElementById("exerciseTypeSelect");

const verbCountSelect =
    document.getElementById("verbCountSelect");
const verbTypeSelect =
    document.getElementById("verbTypeSelect");
const randomGroups =
    [...document.querySelectorAll(".randomOnly")];

/* Anzahl/Art der Zufallsverben nur bei "Random verbs" (Anzahl nur im
   Complete-Modus) */
function updateRandomOptions() {

    const random = verbSelectionSelect.value === "random";
    const complete = exerciseTypeSelect.value === "complete" ||
        exerciseTypeSelect.value === "drag";

    randomGroups.forEach(group => {

        const countOnly = group.dataset.needs === "complete";

        group.style.display =
            random && (!countOnly || complete) ? "" : "none";

    });

}

const sentenceTypeSelect =
    document.getElementById("sentenceTypeSelect");

const verbSelectionSelect =
    document.getElementById("verbSelectionSelect");

const verbChooser =
    document.getElementById("verbChooser");

const verbDropdownBtn =
    document.getElementById("verbDropdownBtn");

const verbDropdownMenu =
    document.getElementById("verbDropdownMenu");

const verbSearch =
    document.getElementById("verbSearch");

const verbSelection =
    document.getElementById("verbSelection");

const selectAllVerbsBtn =
    document.getElementById("selectAllVerbsBtn");

const selectNoneVerbsBtn =
    document.getElementById("selectNoneVerbsBtn");


let selectedTenses = [];
let selectedColumns = [];
let cells = [];


/* ===========================================================
   LANGUAGE
=========================================================== */

const languageParams =
    new URLSearchParams(window.location.search);

const currentLanguage =
    languageParams.get("lang") || "en";

languageSelect.value = currentLanguage;

const pageTitles = {
    en: "miStudia – Conjugation Matrix",
    de: "miStudia – Konjugationsmatrix",
    es: "miStudia – Matriz de conjugación",
    fr: "miStudia – Matrice de conjugaison"
};

pageTitle.textContent =
    pageTitles[currentLanguage] || pageTitles.en;

languageSelect.addEventListener("change", () => {

    const params =
        new URLSearchParams(window.location.search);

    params.set("lang", languageSelect.value);

    window.location.search = params.toString();

});


/* ===========================================================
   ANSWER LEGEND
=========================================================== */

const answerLegendTexts = {

    en:
        `<strong>Tip:</strong> Capitalization doesn't matter. ` +
        `What to type:` +
        `<ul class="legendList">` +
        `<li><span class="sentenceMode sentencePlus">(+)</span> ` +
        `just the conjugated verb, e.g. <code>takes</code> – no ` +
        `subject needed (but <code>he takes</code> is fine ` +
        `too).</li>` +
        `<li><span class="sentenceMode sentenceMinus">(-)</span> ` +
        `just the negative verb form, e.g. ` +
        `<code>doesn't take</code> – subject optional here as ` +
        `well.</li>` +
        `<li><span class="sentenceMode sentenceQuestion">(?)` +
        `</span> the full question including the subject, e.g. ` +
        `<code>does he/she/it take?</code> – word order changes ` +
        `here.</li>` +
        `</ul>` +
        `Several correct spellings are accepted automatically, ` +
        `e.g. <code>do not</code> = <code>don't</code>, ` +
        `<code>does not</code> = <code>doesn't</code>, ` +
        `<code>is not</code> = <code>isn't</code>, ` +
        `<code>will not</code> = <code>won't</code>.<br>` +
        `For the 3rd person singular you can simply write <code>he` +
        `</code> instead of <code>he/she/it</code>. Questions ` +
        `are also accepted without the final <code>?</code>.<br>` +
        `<strong>Usage:</strong> the whole entry from the list or ` +
        `just one part of it (e.g. <code>plans</code>) counts as correct.`,

    de:
        `<strong>Tipp:</strong> Groß- und Kleinschreibung ` +
        `spielt keine Rolle. Fragen werden auch ohne ` +
        `abschließendes <code>?</code> akzeptiert.<br>` +
        `<strong>Usage:</strong> Der ganze Listeneintrag oder nur ` +
        `ein Teil davon (z. B. <code>Vermutung</code>) wird als ` +
        `richtig gewertet.`,

    es:
        `<strong>Consejo:</strong> No importa si usas ` +
        `mayúsculas o minúsculas. Las preguntas también se ` +
        `aceptan sin el signo de interrogación final ` +
        `<code>?</code>.<br>` +
        `<strong>Usage:</strong> Vale la entrada completa de la ` +
        `lista o solo una parte (p. ej. <code>hábitos</code>).`,

    fr:
        `<strong>Astuce :</strong> Les majuscules ne comptent pas, ` +
        `mais les accents et les traits d'union, si. ` +
        `Que faut-il écrire :` +
        `<ul class="legendList">` +
        `<li><span class="sentenceMode sentencePlus">(+)</span> ` +
        `seulement le verbe conjugué, p. ex. <code>parle</code> ` +
        `ou <code>ai parlé</code> – le sujet n'est pas obligatoire ` +
        `(<code>je parle</code> est accepté aussi).</li>` +
        `<li><span class="sentenceMode sentenceMinus">(-)</span> ` +
        `la forme négative avec <code>ne … pas</code>, p. ex. ` +
        `<code>ne parle pas</code> ou <code>n'ai pas parlé</code> ` +
        `– sujet facultatif.</li>` +
        `<li><span class="sentenceMode sentenceQuestion">(?)` +
        `</span> la question complète avec le sujet, p. ex. ` +
        `<code>est-ce que tu parles ?</code> ou ` +
        `<code>parles-tu ?</code> – les deux formes sont ` +
        `acceptées.</li>` +
        `</ul>` +
        `Pour <code>il</code> on accepte aussi <code>elle</code> ` +
        `et <code>on</code>, pour <code>ils</code> aussi ` +
        `<code>elles</code>. Avec les verbes conjugués avec ` +
        `<code>être</code> (aller, venir…), tous les accords du ` +
        `participe sont acceptés : <code>allé</code>, ` +
        `<code>allée</code>, <code>allés</code>…<br>` +
        `Le <code>?</code> final est facultatif.<br>` +
        `<strong>Usage :</strong> l'entrée complète de la liste ou ` +
        `seulement une partie (p. ex. <code>habitudes</code>) est ` +
        `acceptée.`

};

const answerLegend = document.getElementById("answerLegend");

if (answerLegend) {
    answerLegend.innerHTML =
        answerLegendTexts[currentLanguage] || answerLegendTexts.en;
}


/* ===========================================================
   TENSE FILTER
=========================================================== */

const defaultTensesByLanguage = {
    en: ["sp", "spa"],
    de: ["praesens", "praeteritum"],
    es: ["presente", "preteritoIndefinido"],
    fr: ["present", "passeCompose"]
};

const defaultTenses =
    defaultTensesByLanguage[currentLanguage] ||
    tenses.slice(0, 2).map(t => t.id);

function createFilter() {

    tenseSelection.innerHTML = "";

    tenses.forEach((tense, index) => {

        const label = document.createElement("label");
        const checkbox = document.createElement("input");

        checkbox.type = "checkbox";
        checkbox.checked =
            defaultTenses.includes(tense.id);
        checkbox.value = tense.id;
        checkbox.dataset.index = index;

        label.appendChild(checkbox);
        const displayName =
            tense.id === "gtf"
                ? "(" + tense.name + ")"
                : tense.name;

        label.append(" " + displayName);

        tenseSelection.appendChild(label);

    });

}

function updateTenseDropdownLabel() {

    const checked =
        tenseSelection.querySelectorAll("input:checked").length;

    tenseDropdownBtn.textContent =
        `${checked} tenses selected ▼`;

}

createFilter();
updateTenseDropdownLabel();

tenseDropdownBtn.addEventListener("click", () => {

    tenseDropdownMenu.classList.toggle("open");

});

tenseSelection.addEventListener("change", () => {

    updateTenseDropdownLabel();

});

const tenseDoneBtn = document.getElementById("tenseDoneBtn");

if (tenseDoneBtn) {

    tenseDoneBtn.addEventListener("click", () => {

        tenseDropdownMenu.classList.remove("open");

    });

}

document.addEventListener("click", event => {

    if (!event.target.closest(".tenseDropdown")) {

        tenseDropdownMenu.classList.remove("open");

    }

});

document.addEventListener("keydown", event => {

    if (event.key === "Escape") {

        tenseDropdownMenu.classList.remove("open");

        const vm = document.getElementById("verbDropdownMenu");

        if (vm) vm.classList.remove("open");

    }

});



/* ===========================================================
   TENSE BUTTONS
=========================================================== */

selectAllBtn.addEventListener("click", () => {

    tenseSelection
        .querySelectorAll("input")
        .forEach(cb => cb.checked = true);

    updateTenseDropdownLabel();

});

selectNoneBtn.addEventListener("click", () => {

    tenseSelection
        .querySelectorAll("input")
        .forEach(cb => cb.checked = false);

    updateTenseDropdownLabel();

});

const importantTenses = {

    en: [
        "sp",
        "pp",
        "spa",
        "pap",
        "prp"
    ],

    de: [
        "praesens",
        "praeteritum",
        "perfekt",
        "plusquamperfekt",
        "futur1",
        "futur2"
    ],

    es: [
        "presente",
        "estarGerundio",
        "preteritoPerfecto",
        "preteritoIndefinido",
        "preteritoImperfecto",
        "futuroSimple"
    ],

    fr: [
        "present",
        "passeCompose",
        "imparfait",
        "plusQueParfait",
        "futurSimple",
        "conditionnel"
    ]

};

importantBtn.addEventListener("click", () => {

    const important =
        importantTenses[currentLanguage] || [];

    tenseSelection
        .querySelectorAll("input")
        .forEach(cb => {

            cb.checked =
                important.includes(cb.value);

        });

    updateTenseDropdownLabel();

});


/* ===========================================================
   RANDOM
=========================================================== */

function shuffle(array) {

    const result = [...array];

    for (let i = result.length - 1; i > 0; i--) {

        const j =
            Math.floor(Math.random() * (i + 1));

        [result[i], result[j]] =
            [result[j], result[i]];

    }

    return result;

}


/* ===========================================================
   CREATE RANDOM COLUMNS
=========================================================== */

let lastVerbOrder = "";

function shuffleDifferently(list) {

    if (list.length < 2) {
        return [...list];
    }

    let result = shuffle(list);

    let attempts = 0;

    while (
        result.map(v => v.infinitive).join("|") === lastVerbOrder &&
        attempts < 20
    ) {
        result = shuffle(list);
        attempts++;
    }

    lastVerbOrder =
        result.map(v => v.infinitive).join("|");

    return result;

}

function getRandomPool() {

    const type = verbTypeSelect ? verbTypeSelect.value : "all";

    const pool = type === "all"
        ? verbPool
        : verbPool.filter(verb => verb.type === type);

    return pool.length ? pool : verbPool;

}

function getAvailableVerbs() {

    if (verbSelectionSelect.value === "random") {

        return shuffleDifferently(getRandomPool());

    }

    const selected =
        [...verbSelection.querySelectorAll("input:checked")]
            .map(cb => cb.value);

    return shuffleDifferently(
        verbPool.filter(verb =>
            selected.includes(verb.infinitive)
        )
    );

}


/* Mixed- und Exam-Modus: immer eine Spalte pro Pronomen (6).
   Stehen weniger Verben zur Auswahl als Spalten da sind,
   werden die gewählten Verben der Reihe nach wiederholt. */

const MIXED_COLUMN_COUNT = 6;

function pickVerbsForColumns(count) {

    const available = getAvailableVerbs();

    if (available.length === 0) {
        return null;
    }

    return Array.from(
        { length: count },
        (_, i) => available[i % available.length]
    );

}

function createMixedColumns() {

    const pronouns =
        languageConfig.mixedPronouns[MIXED_COLUMN_COUNT];

    const verbs =
        pickVerbsForColumns(MIXED_COLUMN_COUNT);

    if (!verbs) {

        return null;

    }

    return pronouns.map((pronoun, index) => {

        const pronounIndex =
            languageConfig.pronouns.indexOf(pronoun);

  const sentenceType =
    sentenceTypeSelect.value === "mixed"
        ? ["statement","negative","question"][
            Math.floor(Math.random()*3)
        ]
        : sentenceTypeSelect.value;

return {
    pronoun,
    pronounIndex,
    verb: verbs[index],
    sentenceType
};

    });

}

function createExamColumns(){

    const pronouns =
        languageConfig.mixedPronouns[MIXED_COLUMN_COUNT];

    const verbs =
        pickVerbsForColumns(MIXED_COLUMN_COUNT);

    if(!verbs){
        return null;
    }

    return pronouns.map((pronoun,index)=>{

        const pronounIndex =
            languageConfig.pronouns.indexOf(pronoun);

        return{

            pronoun,
            pronounIndex,
            verb: verbs[index],

            exam:true
        };

    });

}


/* Complete-Modus: bei "Random verbs" ein zufälliges Verb,
   bei "Choose verbs" alle ausgewählten Verben. */

function createCompleteColumns() {

    const available = getAvailableVerbs();

    const verbs =
        verbSelectionSelect.value === "random"
            ? available.slice(0, Number(verbCountSelect.value) || 1)
            : available;

    if (verbs.length === 0) {

        return null;

    }

    const columns = [];

    verbs.forEach(verb => {

        languageConfig.pronouns.forEach(
            (pronoun, pronounIndex) => {

        const sentenceType =
    sentenceTypeSelect.value === "mixed"
        ? ["statement","negative","question"][
            Math.floor(Math.random()*3)
        ]
        : sentenceTypeSelect.value;

columns.push({
    pronoun,
    pronounIndex,
    verb,
    sentenceType
});

            }
        );

    });

    return columns;

}


/* ===========================================================
   VERB OPTIONS
=========================================================== */

function createVerbSelection() {

    verbSelection.innerHTML = "";

    const alphabeticalVerbs = [...verbPool].sort(
        (a, b) => a.infinitive.localeCompare(b.infinitive)
    );

    alphabeticalVerbs.forEach(verb => {

        const label = document.createElement("label");

        const checkbox = document.createElement("input");

        checkbox.type = "checkbox";
        checkbox.value = verb.infinitive;

        const name = document.createElement("span");

        name.className =
            verb.type === "irregular"
                ? "verbName irregularVerb"
                : "verbName";

        name.textContent = verb.infinitive;

        label.appendChild(checkbox);
        label.append(" ");
        label.appendChild(name);

        verbSelection.appendChild(label);

    });

}


function updateVerbDropdownLabel() {

    const count =
        verbSelection.querySelectorAll(
            "input:checked"
        ).length;

    verbDropdownBtn.textContent =
        count === 0
            ? "Choose verbs ▼"
            : `${count} verbs selected ▼`;

}


verbSelectionSelect.addEventListener("change", () => {

    verbChooser.style.display =
        verbSelectionSelect.value === "choose"
            ? "flex"
            : "none";

    updateRandomOptions();

    if (verbSelectionSelect.value !== "choose") {

        verbDropdownMenu.classList.remove("open");

    }

});


/* Segmented buttons statt Dropdown */

const verbSelectionSegmented =
    document.getElementById("verbSelectionSegmented");

if (verbSelectionSegmented) {

    verbSelectionSegmented.addEventListener("click", event => {

        const btn = event.target.closest(".segmentBtn");

        if (!btn) return;

        verbSelectionSegmented
            .querySelectorAll(".segmentBtn")
            .forEach(b => b.classList.toggle("active", b === btn));

        verbSelectionSelect.value = btn.dataset.value;

        verbSelectionSelect.dispatchEvent(new Event("change"));

        if (btn.dataset.value === "choose") {

            verbDropdownMenu.classList.add("open");

        }

    });

}


verbDropdownBtn.addEventListener("click", () => {

    verbDropdownMenu.classList.toggle("open");

});


const verbDoneBtn = document.getElementById("verbDoneBtn");

if (verbDoneBtn) {

    verbDoneBtn.addEventListener("click", () => {

        verbDropdownMenu.classList.remove("open");

    });

}


document.addEventListener("click", event => {

    if (!event.target.closest(".verbChooser") &&
        !event.target.closest("#verbSelectionSegmented")) {

        verbDropdownMenu.classList.remove("open");

    }

});



verbSelection.addEventListener("change", () => {

    updateVerbDropdownLabel();

});


verbSearch.addEventListener("input", () => {

    const search =
        normalize(verbSearch.value);

    verbSelection
        .querySelectorAll("label")
        .forEach(label => {

            label.style.display =
                normalize(label.textContent)
                    .includes(search)
                    ? "flex"
                    : "none";

        });

});


selectAllVerbsBtn.addEventListener("click", () => {

    verbSelection
        .querySelectorAll("input")
        .forEach(cb => cb.checked = true);

    updateVerbDropdownLabel();

});


selectNoneVerbsBtn.addEventListener("click", () => {

    verbSelection
        .querySelectorAll("input")
        .forEach(cb => cb.checked = false);

    updateVerbDropdownLabel();

});


createVerbSelection();
updateVerbDropdownLabel();
exerciseTypeSelect.addEventListener("change", updateRandomOptions);
updateRandomOptions();


/* ===========================================================
   START EXERCISE
=========================================================== */

startBtn.addEventListener("click", () => {

    marksVisible = false;
    checkBtn.textContent = "\u2714 Check Answers";

    selectedTenses = [];

    tenseSelection
        .querySelectorAll("input")
        .forEach(cb => {

            if (cb.checked) {

                selectedTenses.push(
                    tenses[Number(cb.dataset.index)]
                );

            }

        });

    if (selectedTenses.length === 0) {

        alert("Please select at least one tense.");

        return;

    }

const exerciseType =
    exerciseTypeSelect.value;

currentExerciseType = exerciseType;


if(exerciseType==="complete" || exerciseType==="drag"){

    selectedColumns =
        createCompleteColumns();

}else if(exerciseType==="exam"){

    selectedColumns =
        createExamColumns();

}else{

    selectedColumns =
        createMixedColumns();

}


if (!selectedColumns) {

    alert(
        "Please select at least one verb."
    );

    return;

}

    createTable();
    setupDragMode();

    exercise.style.display = "block";

});


/* ===========================================================
   CREATE TABLE
=========================================================== */

let currentExerciseType = "complete";

function completeLike() {
    return currentExerciseType === "complete" ||
        currentExerciseType === "drag";
}

function isDragMode() {
    return currentExerciseType === "drag";
}

function extraTotal() {
    return isDragMode() ? selectedTenses.length : 0;
}

function pronounLabel(column) {

    const labels = languageConfig.pronounLabels;

    return (labels && labels[column.pronounIndex]) || column.pronoun;

}

function columnDivider(index) {

    if (index === 0) {
        return "";
    }

    const column = selectedColumns[index];

    if (completeLike()) {

        if (column.pronounIndex === 0) {
            return "verbStart";
        }

        if (column.pronounIndex === 3) {
            return "pluralStart";
        }

        return "";

    }

    if (selectedColumns[index - 1].verb !== column.verb) {
        return "verbStart";
    }

    return index === 3 ? "pluralStart" : "";

}


/* Eingabefeld fuer eine Konjugationsform inkl. (+)/(-)/(?)-Markern */
function buildConjCell(column, row, col) {

    const input = document.createElement("input");

    input.type = "text";
    input.dataset.row = row;
    input.dataset.col = col + 2;

    const wrap = document.createElement("div");
    wrap.className = "cellInline";

    const type = column.exam
        ? ["statement", "negative", "question"][
              Math.floor(Math.random() * 3)
          ]
        : column.sentenceType;

    input.dataset.sentenceType = type;

    const modeInfo = {
        statement : ["(+)", "sentencePlus"],
        negative  : ["(-)", "sentenceMinus"],
        question  : ["(?)", "sentenceQuestion"]
    }[type];

    const makeModeBadge = () => {

        const badge = document.createElement("span");

        if (modeInfo) {
            badge.textContent = modeInfo[0];
            badge.className = "sentenceMode " + modeInfo[1];
        }

        return badge;

    };

    wrap.appendChild(makeModeBadge());
    wrap.appendChild(input);
    wrap.appendChild(makeModeBadge());

    return { wrap, input };

}

/* Signalwort-/Usage-Eingabefeld */
function buildChoiceInput(row, colIndex, getter) {

    const input = document.createElement("input");

    input.type = "text";
    input.dataset.row = row;
    input.dataset.col = colIndex;

    attachChoicePopup(input, getter);

    return input;

}

/* Nur eine Zeitform gewaehlt: Formen untereinander,
   links die Subjekte als Vorgabe */
function createVerticalTable() {

    const tense = selectedTenses[0];

    verticalMode = true;
    tenseTableEl.classList.add("vertical");

    const th = (text, cls) => {
        const el = document.createElement("th");
        el.textContent = text;
        if (cls) el.className = cls;
        return el;
    };

    cells[0] = [];

    /* Complete-Modus: Verben nebeneinander, Subjekte links */
    if (completeLike()) {

        const groups = [];

        selectedColumns.forEach((column, col) => {

            let group = groups[groups.length - 1];

            if (!group || group.verb !== column.verb) {
                group = { verb: column.verb, items: [] };
                groups.push(group);
            }

            group.items.push({ column, col });

        });

        const rowCount = Math.max(...groups.map(g => g.items.length));

        headerRow.appendChild(th(tense.name));
        groups.forEach(g => headerRow.appendChild(th(g.verb.infinitive, "vVerbHead")));

        for (let r = 0; r < rowCount; r++) {

            const tr = document.createElement("tr");

            const subject = document.createElement("td");
            subject.className = "vSubject";
            subject.textContent = groups[0].items[r]
                ? pronounLabel(groups[0].items[r].column) : "";
            tr.appendChild(subject);

            groups.forEach((g, gi) => {

                const td = document.createElement("td");
                td.className = "vInput" + (gi > 0 ? " verbStart" : "");

                const item = g.items[r];

                if (item) {

                    const { wrap, input } =
                        buildConjCell(item.column, 0, item.col);

                    td.appendChild(wrap);
                    cells[0][item.col + 2] = input;

                }

                tr.appendChild(td);

            });

            tableBody.appendChild(tr);

        }

        appendVerticalExtras(groups.length + 1);

        return;

    }

    headerRow.appendChild(th("Subject"));
    headerRow.appendChild(th("Infinitive"));
    headerRow.appendChild(th(tense.name));

    selectedColumns.forEach((column, col) => {

        const tr = document.createElement("tr");

        const divider = columnDivider(col);
        if (divider) tr.classList.add(divider);

        const subject = document.createElement("td");
        subject.className = "vSubject";
        subject.textContent = pronounLabel(column);
        tr.appendChild(subject);

        const inf = document.createElement("td");
        inf.className = "vInfinitive";
        inf.textContent = column.verb.infinitive;
        tr.appendChild(inf);

        const td = document.createElement("td");
        td.className = "vInput";

        const { wrap, input } = buildConjCell(column, 0, col);

        td.appendChild(wrap);
        tr.appendChild(td);

        cells[0][col + 2] = input;

        tableBody.appendChild(tr);

    });

    appendVerticalExtras(3);

}

/* Signalwort- und Usage-Zeile unter der senkrechten Tabelle */
function appendVerticalExtras(totalCols) {

    const labelSpan =
        completeLike() ? 1 : 2;

    [
        ["Signal word(s)", 0, getSignalChoices, "vSignal"],
        ["Usage",          1, getUsageChoices,  "vUsage"]
    ].forEach(([label, colIndex, getter, cls]) => {

        const tr = document.createElement("tr");
        tr.className = "vExtra";

        const labelTd = document.createElement("td");
        labelTd.className = "vSubject";
        labelTd.colSpan = labelSpan;
        labelTd.textContent = label;
        tr.appendChild(labelTd);

        const td = document.createElement("td");
        td.className = cls;
        td.colSpan = totalCols - labelSpan;

        const input = buildChoiceInput(0, colIndex, getter);

        td.appendChild(input);
        tr.appendChild(td);

        cells[0][colIndex] = input;

        tableBody.appendChild(tr);

    });

}

function createTable() {

    headerRow.innerHTML = "";
    tableBody.innerHTML = "";
    cells = [];

    verticalMode = false;
    tenseTableEl.classList.remove("vertical");

    if (selectedTenses.length === 1) {

        createVerticalTable();

        closeChoicePopup();
        answersVisible = false;
        solutionBtn.textContent = "💡 Show Answers";

        return;

    }

    /* HEADER */

    const first = document.createElement("th");
    first.textContent = "Tense";
    headerRow.appendChild(first);

    selectedColumns.forEach((col, index) => {

        const th = document.createElement("th");
        th.textContent = pronounLabel(col);

        const divider = columnDivider(index);
        if (divider) th.classList.add(divider);

        headerRow.appendChild(th);

    });

    const signalHead = document.createElement("th");
    signalHead.textContent = "Signal word(s)";
    signalHead.className = "signalCell";
    headerRow.appendChild(signalHead);

    const usageHead = document.createElement("th");
    usageHead.textContent = "Usage";
    usageHead.className = "usageCell";
    headerRow.appendChild(usageHead);

    /* INFINITIVE */

    const intro = document.createElement("tr");

    const title = document.createElement("td");
    title.innerHTML = "<strong>Infinitive</strong>";
    intro.appendChild(title);

    selectedColumns.forEach((column, col) => {

        const td = document.createElement("td");

        const divider = columnDivider(col);
        if (divider) td.classList.add(divider);

        td.textContent = column.verb.infinitive;

        intro.appendChild(td);

    });

    const introSignal = document.createElement("td");
    introSignal.className = "signalCell";
    intro.appendChild(introSignal);

    const introUsage = document.createElement("td");
    introUsage.className = "usageCell";
    intro.appendChild(introUsage);

    tableBody.appendChild(intro);


    /* TENSE ROWS */

    selectedTenses.forEach((tense, row) => {

        const tr = document.createElement("tr");

        const tenseCell = document.createElement("td");
        tenseCell.innerHTML = `<strong>${tense.name}</strong>`;
        tr.appendChild(tenseCell);

        cells[row] = [];

        /* CONJUGATION */

        selectedColumns.forEach((column, col) => {

            const td = document.createElement("td");

            const divider = columnDivider(col);
            if (divider) td.classList.add(divider);

            const input = document.createElement("input");

            input.type = "text";
            input.dataset.row = row;
            input.dataset.col = col + 2;

            const wrap = document.createElement("div");
            wrap.className = "cellInline";

            const type = column.exam
                ? ["statement", "negative", "question"][
                      Math.floor(Math.random() * 3)
                  ]
                : column.sentenceType;

            input.dataset.sentenceType = type;

            const modeInfo = {
                statement : ["(+)", "sentencePlus"],
                negative  : ["(-)", "sentenceMinus"],
                question  : ["(?)", "sentenceQuestion"]
            }[type];

            const makeModeBadge = () => {

                const badge = document.createElement("span");

                if (modeInfo) {
                    badge.textContent = modeInfo[0];
                    badge.className =
                        "sentenceMode " + modeInfo[1];
                }

                return badge;

            };

            wrap.appendChild(makeModeBadge());
            wrap.appendChild(input);
            wrap.appendChild(makeModeBadge());
            td.appendChild(wrap);
            tr.appendChild(td);

            cells[row][col + 2] = input;

        });

        /* SIGNAL */

        const signalTd = document.createElement("td");
        signalTd.className = "signalCell";
        const signalInput = document.createElement("input");

        signalInput.type = "text";
        signalInput.dataset.row = row;
        signalInput.dataset.col = 0;

        attachChoicePopup(signalInput, getSignalChoices);
        signalTd.appendChild(signalInput);
        tr.appendChild(signalTd);
        cells[row][0] = signalInput;

        /* USAGE */

        const usageTd = document.createElement("td");
        usageTd.className = "usageCell";
        const usageInput = document.createElement("input");

        usageInput.type = "text";
        usageInput.dataset.row = row;
        usageInput.dataset.col = 1;

        attachChoicePopup(usageInput, getUsageChoices);
        usageTd.appendChild(usageInput);
        tr.appendChild(usageTd);
        cells[row][1] = usageInput;

        tableBody.appendChild(tr);


    });

    closeChoicePopup();
answersVisible = false;
solutionBtn.textContent = "💡 Show Answers";

}

/* ===========================================================
   CHOICE POPUP (Signal words / Usage)
   zeigt alle Optionen auf einmal, alphabetisch, filterbar
=========================================================== */

let choicePopup = null;
let choicePopupInput = null;

function choiceScopeTenses() {
    const sel = document.getElementById("choiceScopeSelect");
    const onlySelected = sel && sel.value === "selected" &&
        selectedTenses.length > 0;
    return onlySelected ? selectedTenses : tenses;
}

function getSignalChoices() {
    const list = choiceScopeTenses() === tenses
        ? signalWords
        : choiceScopeTenses().flatMap(t => t.signals);
    return [...new Set(list.filter(w => w && w.trim()))]
        .sort((x, y) => x.localeCompare(y, languageConfig.code || undefined));
}

function getUsageChoices() {
    return [...new Set(choiceScopeTenses().map(t => t.rule))]
        .sort((x, y) => x.localeCompare(y, languageConfig.code || undefined));
}

function closeChoicePopup() {
    if (choicePopup) choicePopup.remove();
    choicePopup = null;
    choicePopupInput = null;
}

function positionChoicePopup() {

    if (!choicePopup || !choicePopupInput) return;

    const r = choicePopupInput.getBoundingClientRect();
    const margin = 8;
    const vw = window.innerWidth;
    const vh = window.innerHeight;
    const items = [...choicePopup.querySelectorAll(".choiceItem, .choiceEmpty")];
    const n = Math.max(items.length, 1);

    /* 1) Messen: alle Einträge einzeilig in einer Spalte */
    const st = choicePopup.style;
    st.display = "block";
    st.gridTemplateColumns = "";
    st.gridTemplateRows = "";
    st.width = "max-content";
    st.maxHeight = "none";
    st.left = "-9999px";
    st.top = "0px";
    st.bottom = "auto";
    choicePopup.classList.remove("wrap");

    const border = 4; /* 2 x 2px Rand */
    let itemW = Math.max(...items.map(i => i.scrollWidth), 120);
    const maxItemW = vw - 2 * margin - border;
    let wrap = false;
    if (itemW > maxItemW) { itemW = maxItemW; wrap = true; }
    if (wrap) choicePopup.classList.add("wrap");
    const itemH = Math.max(...items.map(i => i.offsetHeight), 24);

    /* 2) Platz oberhalb / unterhalb / ganzer Bildschirm */
    const spaces = [
        { place: "below", H: vh - r.bottom - margin - 2 },
        { place: "above", H: r.top - margin - 2 },
        { place: "full",  H: vh - 2 * margin }
    ];
    const maxCols = Math.max(1, Math.floor((vw - 2 * margin - border) / itemW));

    let chosen = null;
    if (!wrap) {
        outer:
        for (const sp of spaces) {
            for (let cols = 1; cols <= maxCols; cols++) {
                const rows = Math.ceil(n / cols);
                if (rows * itemH + border <= sp.H) {
                    chosen = { ...sp, cols, rows };
                    break outer;
                }
            }
        }
    }
    if (!chosen) {
        /* passt nirgends komplett: größten Platz nehmen, scrollen */
        const sp = spaces.reduce((x, y) => (y.H > x.H ? y : x));
        const cols = wrap ? 1 : maxCols;
        chosen = { ...sp, cols, rows: Math.ceil(n / cols) };
    }

    const cols = Math.min(chosen.cols, n);
    st.display = "grid";
    st.gridAutoFlow = "column";
    st.gridTemplateRows = "repeat(" + Math.ceil(n / cols) + ", auto)";
    st.gridTemplateColumns = "repeat(" + cols + ", " + itemW + "px)";
    st.width = (cols * itemW + border) + "px";
    st.maxHeight = chosen.H + "px";

    /* 3) Position */
    const width = cols * itemW + border;
    let left = Math.min(r.left, vw - width - margin);
    st.left = Math.max(margin, left) + "px";
    if (chosen.place === "below") {
        st.top = (r.bottom + 2) + "px";
        st.bottom = "auto";
    } else if (chosen.place === "above") {
        st.bottom = (vh - r.top + 2) + "px";
        st.top = "auto";
    } else {
        st.top = margin + "px";
        st.bottom = "auto";
    }
}

function renderChoicePopup(getChoices, filterText) {
    const input = choicePopupInput;
    if (!choicePopup || !input) return;
    const f = normalize(filterText || "");
    const all = getChoices();
    const items = f ? all.filter(c => normalize(c).includes(f)) : all;
    choicePopup.innerHTML = "";
    if (!items.length) {
        const empty = document.createElement("div");
        empty.className = "choiceEmpty";
        empty.textContent = "–";
        choicePopup.appendChild(empty);
    }
    items.forEach(text => {
        const item = document.createElement("div");
        item.className = "choiceItem";
        item.textContent = text;
        item.addEventListener("mousedown", e => {
            e.preventDefault();
            input.value = text;
            input.dispatchEvent(new Event("input", { bubbles: true }));
            closeChoicePopup();
        });
        choicePopup.appendChild(item);
    });
    positionChoicePopup();
}

function openChoicePopup(input, getChoices) {
    if (choicePopupInput === input && choicePopup) return;
    closeChoicePopup();
    choicePopup = document.createElement("div");
    choicePopup.className = "choicePopup";
    choicePopupInput = input;
    document.body.appendChild(choicePopup);
    renderChoicePopup(getChoices, "");
}

function attachChoicePopup(input, getChoices) {

    input.setAttribute("autocomplete", "off");

    input.addEventListener("focus", () => openChoicePopup(input, getChoices));
    input.addEventListener("click", () => openChoicePopup(input, getChoices));

    input.addEventListener("input", () => {
        if (choicePopupInput !== input) openChoicePopup(input, getChoices);
        /* nur filtern, solange der Text nicht schon exakt ein Eintrag ist */
        const exact = getChoices().some(c => normalize(c) === normalize(input.value));
        renderChoicePopup(getChoices, exact ? "" : input.value);
    });

    input.addEventListener("keydown", e => {
        if (e.key === "Escape" || e.key === "Tab") closeChoicePopup();
    });

    input.addEventListener("blur", () => {
        if (choicePopupInput === input) closeChoicePopup();
    });

}

window.addEventListener("resize", positionChoicePopup);
window.addEventListener("scroll", positionChoicePopup, true);


/* ===========================================================
   MATCHING (Signal words / Usage)
=========================================================== */

function signalMatches(tense, value) {
    const user = normalize(value);
    /* Dropdown zeigt nur eindeutige Ausdrücke; Kurzformen (z. B. "siempre")
       dürfen selbst eingetippt werden: tense.signalAliases */
    return user.length > 0 &&
        tense.signals.concat(tense.signalAliases || [])
            .some(s => normalize(s) === user);
}

/* akzeptiert den vollständigen Listeneintrag ODER einen Teil davon */
function usageMatches(tense, value) {
    const user = normalize(value);
    if (!user.length) return false;
    if (normalize(tense.rule) === user) return true;
    /* Teile zwischen "•"; Wörter in Klammern zählen auch einzeln,
       z. B. "future action (predictions, spontaneous decisions)" */
    return tense.rule
        .split("•")
        .some(part => {
            if (normalize(part) === user) return true;
            const m = part.match(/\(([^)]*)\)/);
            return !!m && m[1].split(",")
                .some(item => normalize(item) === user);
        });
}


/* ===========================================================
   HELPERS
=========================================================== */

function normalize(str) {

    return str
        .trim()
        .replace(/\s+/g, " ")
        .toLowerCase();

}


const contractions = [
    ["do not", "don't"],
    ["does not", "doesn't"],
    ["did not", "didn't"],
    ["is not", "isn't"],
    ["are not", "aren't"],
    ["was not", "wasn't"],
    ["were not", "weren't"],
    ["has not", "hasn't"],
    ["have not", "haven't"],
    ["had not", "hadn't"],
    ["will not", "won't"],
    ["cannot", "can't"],
    ["can not", "can't"]
];

/* Vergleichsform: Apostroph-Kurzformen werden
   immer zur Langform expandiert, damit
   "don't" und "do not" beide gelten. */

function canonical(text) {

    let result = normalize(text)
        .replace(/[\u2018\u2019\u02bc]/g, "'");

    contractions.forEach(([long, short]) => {

        result = result.split(short).join(long);

    });

    return result
        .replace(/\s+/g, " ")
        .replace(/\s+\?/g, "?")   // "parles-tu ?" = "parles-tu?"
        .trim();

}


/* ===========================================================
   FRENCH \u2013 Verneinung & Fragen

   (+)  Verb ohne Subjekt:   parle / ai parl\u00e9
   (-)  mit ne \u2026 pas:        ne parle pas / n'ai pas parl\u00e9
   (?)  Frage mit Subjekt:   est-ce que tu parles ? / parles-tu ?
=========================================================== */

function frStartsVowel(word) {
    return /^[aeiouy\u00e0\u00e2\u00e4\u00e9\u00e8\u00ea\u00eb\u00ee\u00ef\u00f4\u00f6\u00f9\u00fb\u00fc\u0153h]/i.test(word);
}

/* "ai parl\u00e9" -> ["ai", "parl\u00e9"]; "parle" -> ["parle", ""] */
function frSplit(form) {

    const i = form.indexOf(" ");

    return i < 0
        ? [form, ""]
        : [form.slice(0, i), form.slice(i + 1)];

}

/* je + ai -> j'ai, sonst Pronomen + Leerzeichen */
function frSubject(pronoun, text) {

    if (pronoun === "je" && frStartsVowel(text)) {
        return "j'" + text;
    }

    return pronoun + " " + text;

}

function frNegate(form) {

    const [finite, rest] = frSplit(form);

    return (frStartsVowel(finite) ? "n'" : "ne ") +
        finite + " pas" +
        (rest ? " " + rest : "");

}

function frEstCeQue(pronoun, form) {

    const que = frStartsVowel(pronoun)
        ? "est-ce qu'"
        : "est-ce que ";

    return que + frSubject(pronoun, form) + " ?";

}

function frInversion(pronoun, form, verb, tense) {

    const [finite, rest] = frSplit(form);

    let head;

    if (pronoun === "je") {

        if (verb.infinitive === "pouvoir" && tense.id === "present") {
            head = "puis-je";
        } else {
            head = (finite.endsWith("e")
                ? finite.slice(0, -1) + "\u00e9"
                : finite) + "-je";
        }

    } else if (pronoun === "il" ||
               pronoun === "elle" ||
               pronoun === "on") {

        head = finite +
            (/[ae]$/.test(finite) ? "-t-" : "-") +
            pronoun;

    } else {

        head = finite + "-" + pronoun;

    }

    return head + (rest ? " " + rest : "") + " ?";

}

/* erlaubte Endungen des Participe pass\u00e9 bei Verben mit \u00eatre */
const frAgreement = {
    je:    ["", "e"],
    tu:    ["", "e"],
    il:    [""],
    elle:  ["e"],
    on:    ["", "e", "s", "es"],
    nous:  ["s", "es"],
    vous:  ["", "e", "s", "es"],
    ils:   ["s"],
    elles: ["es"]
};

/* gleiche Verbform, weitere akzeptierte Pronomen */
const frGroups = {
    il:  ["il", "elle", "on"],
    ils: ["ils", "elles"]
};

function frFormVariants(column, tense, pronoun) {

    const base =
        column.verb.forms[tense.id][column.pronounIndex];

    if (!tense.compound || column.verb.aux !== "etre") {
        return [base];
    }

    const finite = frSplit(base)[0];

    return frAgreement[pronoun].map(
        suffix => finite + " " + column.verb.pp + suffix
    );

}

/* alle akzeptierten Schreibweisen (kanonisiert) */
function frAlternatives(column, tense, sentenceType) {

    sentenceType ??= column.sentenceType;

    const group = frGroups[column.pronoun] || [column.pronoun];
    const raw = new Set();

    group.forEach(pronoun => {

        frFormVariants(column, tense, pronoun).forEach(form => {

            if (sentenceType === "negative") {

                const negated = frNegate(form);

                raw.add(negated);
                raw.add(frSubject(pronoun, negated));

            } else if (sentenceType === "question") {

                raw.add(frEstCeQue(pronoun, form));
                raw.add(
                    frInversion(pronoun, form, column.verb, tense)
                );

            } else {

                raw.add(form);
                raw.add(frSubject(pronoun, form));

            }

        });

    });

    const result = new Set();

    raw.forEach(text => {

        result.add(canonical(text));
        result.add(canonical(text.replace(/\?\s*$/, "")));

    });

    return [...result];

}

function buildAnswer(solution,column,tense,sentenceType){

    if (currentLanguage === "fr") {

        sentenceType ??= column.sentenceType;

        if (sentenceType === "negative") {
            return frNegate(solution);
        }

        if (sentenceType === "question") {
            return frEstCeQue(column.pronoun, solution);
        }

        return solution;

    }

    if(currentLanguage !== "en"){
        return solution;
    }

sentenceType ??= column.sentenceType;


if (currentLanguage === "en" &&
    column.verb.infinitive === "be") {

    if (sentenceType === "statement") {
        return solution;
    }

    const pronoun = column.pronoun;
    const parts = solution.split(" ");

    const first = parts[0];
    const rest = parts.slice(1).join(" ");

    if (sentenceType === "negative") {
        return first + " not" + (rest ? " " + rest : "");
    }

    if (sentenceType === "question") {
        return first + " " + pronoun + (rest ? " " + rest : "") + "?";
    }
}


if(sentenceType==="statement"){
    return solution;
}



const pronoun = column.pronoun;
const infinitive = column.verb.infinitive;

switch(tense.id){

    case "sp":

        if(sentenceType==="negative"){
            return pronoun==="he/she/it"
                ? "doesn't " + infinitive
                : "don't " + infinitive;
        }

        if(sentenceType==="question"){
            return (pronoun==="he/she/it"
                ? "does "
                : "do ")
                + pronoun + " " + infinitive + "?";
        }

        break;


    case "pp":

        const be =
            solution.split(" ")[0];

        const ing =
            solution.substring(be.length+1);

        if(sentenceType==="negative"){
            return be + " not " + ing;
        }

        if(sentenceType==="question"){
            return be + " " + pronoun + " " + ing + "?";
        }

        break;

case "spa":

    if(sentenceType==="negative"){
        return "did not " + infinitive;
    }

    if(sentenceType==="question"){
        return "did " + pronoun + " " + infinitive + "?";
    }

    break;

case "prp":

    const have =
        solution.startsWith("has ")
            ? "has"
            : "have";

    const participle =
        solution.substring(have.length + 1);

    if(sentenceType==="negative"){
        return have + " not " + participle;
    }

    if(sentenceType==="question"){
        return have + " " + pronoun + " " + participle + "?";
    }

    break;

case "pap":

    const was =
        solution.split(" ")[0];

    const pastIng =
        solution.substring(was.length + 1);

    if(sentenceType==="negative"){
        return was + " not " + pastIng;
    }

    if(sentenceType==="question"){
        return was + " " + pronoun + " " + pastIng + "?";
    }

    break;

case "plp":

    const pp =
        solution.substring(4);

    if(sentenceType==="negative"){
        return "had not " + pp;
    }

    if(sentenceType==="question"){
        return "had " + pronoun + " " + pp + "?";
    }

    break;

case "wf":

    if(sentenceType==="negative"){
        return "will not " + infinitive;
    }

    if(sentenceType==="question"){
        return "will " + pronoun + " " + infinitive + "?";
    }

    break;



case "gtf":

    const going =
        solution.replace(/^\S+\s+going to\s+/, "");   // nur das Verb

    const beForm =
        solution.split(" ")[0];

    if(sentenceType==="negative"){
        return beForm + " not going to " + going;
    }

    if(sentenceType==="question"){
        return beForm + " " + pronoun + " going to " + going + "?";
    }

    break;

case "prpp":

    const haveBeen =
        solution.startsWith("has ")
            ? "has"
            : "have";

    const beenRest =
        solution.substring(haveBeen.length + 1);

    if(sentenceType==="negative"){
        return haveBeen + " not " + beenRest;
    }

    if(sentenceType==="question"){
        return haveBeen + " " + pronoun + " " + beenRest + "?";
    }

    break;

case "plpp":

    const hadBeen =
        solution.substring(4);   // nach "had "

    if(sentenceType==="negative"){
        return "had not " + hadBeen;
    }

    if(sentenceType==="question"){
        return "had " + pronoun + " " + hadBeen + "?";
    }

    break;

case "fp":

    const futureProg =
        solution.substring(8);   // nach "will be "

    if(sentenceType==="negative"){
        return "will not be " + futureProg;
    }

    if(sentenceType==="question"){
        return "will " + pronoun + " be " + futureProg + "?";
    }

    break;

case "fpe":

    const futurePerfect =
        solution.substring(10);   // nach "will have "

    if(sentenceType==="negative"){
        return "will not have " + futurePerfect;
    }

    if(sentenceType==="question"){
        return "will " + pronoun + " have " + futurePerfect + "?";
    }

    break;

case "fpp":

    const futurePerfectProg =
        solution.substring(10);   // nach "will have "

    if(sentenceType==="negative"){
        return "will not have " + futurePerfectProg;
    }

    if(sentenceType==="question"){
        return "will " + pronoun + " have " + futurePerfectProg + "?";
    }

    break;



}

return solution;

}



function clearSolutions() {

    document
        .querySelectorAll(".solution")
        .forEach(element => element.remove());

}

function showSolution(input, text) {

    const div =
        document.createElement("div");

    div.className = "solution";

    div.textContent = "✔ " + text;

    const parent = input.parentElement;

    const container =
        parent.classList.contains("cellInline")
            ? parent.parentElement
            : parent;

    container.appendChild(div);

}

function updateStatistics(correct, total) {

    score.textContent =
        `${correct} / ${total}`;

    percent.textContent =
        total === 0
            ? "0 %"
            : `${Math.round(correct / total * 100)} %`;

}

let answersVisible = false;

/* ===========================================================
   CHECK ANSWERS
=========================================================== */

/* Erzeugt alle akzeptierten Schreibweisen einer Lösung:
   - mit und ohne abschließendes "?"
   - bei "he/she/it" zusätzlich mit "he" statt "he/she/it"
   - bei Statement (+) und Negativ (-): zusätzlich mit
     vorangestelltem Subjektpronomen (optional, nicht Pflicht) */
function buildAlternativesCore(solution, pronoun, sentenceType, column, tense) {

    if (currentLanguage === "fr" && column && tense) {
        return frAlternatives(column, tense, sentenceType);
    }

    const variants = new Set();

    const addWithOptionalMark = text => {

        variants.add(canonical(text));

        if (text.trim().endsWith("?")) {
            variants.add(
                canonical(text.replace(/\?\s*$/, ""))
            );
        }

    };

    addWithOptionalMark(solution);

    if (solution.includes("he/she/it")) {
        addWithOptionalMark(
            solution.replace(/he\/she\/it/g, "he")
        );
    }

    if (pronoun &&
        (sentenceType === "statement" ||
         sentenceType === "negative")) {

        addWithOptionalMark(pronoun + " " + solution);

        if (pronoun === "he/she/it") {
            addWithOptionalMark("he " + solution);
        }

        const accepted = column && languageConfig.pronounAccepted &&
            languageConfig.pronounAccepted[column.pronounIndex];

        if (accepted) {
            accepted.forEach(p =>
                addWithOptionalMark(p + " " + solution)
            );
        }

    }

    return [...variants];

}



/* zweites zulaessiges Hilfsverb: verb.altForms[tenseId] = 6 Formen,
   verb.altAux (nur Franzoesisch: "avoir"/"etre") */
function buildAlternatives(solution, pronoun, sentenceType, column, tense) {

    const result = new Set(
        buildAlternativesCore(solution, pronoun, sentenceType, column, tense)
    );

    const alt = column && tense && column.verb.altForms &&
        column.verb.altForms[tense.id];

    if (alt && alt[column.pronounIndex]) {

        const altColumn = {
            ...column,
            verb: {
                ...column.verb,
                aux: column.verb.altAux || column.verb.aux,
                forms: {
                    ...column.verb.forms,
                    [tense.id]: alt
                }
            }
        };

        const altSolution = buildAnswer(
            alt[column.pronounIndex],
            altColumn,
            tense,
            sentenceType
        );

        buildAlternativesCore(
            altSolution, pronoun, sentenceType, altColumn, tense
        ).forEach(item => result.add(item));

    }

    return [...result];

}


function checkAnswers() {

    clearSolutions();
answersVisible = false;
solutionBtn.textContent = "💡 Show Answers";

    let correct = 0;

    const total =
        selectedTenses.length *
        (selectedColumns.length + 2) + extraTotal();

    selectedTenses.forEach((tense, row) => {

        selectedColumns.forEach((column, col) => {

            const input =
                cells[row][col + 2];

            input.classList.remove(
                "correct",
                "wrong"
            );

const solution = buildAnswer(
    column.verb.forms[tense.id][column.pronounIndex],
    column,
    tense,
    input.dataset.sentenceType
);

       const user = normalize(input.value);

const alternatives = buildAlternatives(
    solution,
    column.pronoun,
    input.dataset.sentenceType,
    column,
    tense
);

if(alternatives.includes(canonical(user))){

                input.classList.add("correct");

                correct++;

            } else {

                input.classList.add("wrong");

            }

        });


        /* SIGNAL WORD */

        const signalInput = cells[row][0];

        signalInput.classList.remove(
            "correct",
            "wrong"
        );

        const user =
            normalize(signalInput.value);

        const valid = signalMatches(tense, signalInput.value);

        if (valid) {

            signalInput.classList.add("correct");

            correct++;

        } else {

            signalInput.classList.add("wrong");

        }


        /* USAGE */

        const usageInput = cells[row][1];

        usageInput.classList.remove("correct", "wrong");

        const usageUser = normalize(usageInput.value);

        const usageValid = usageMatches(tense, usageInput.value);

        if (usageValid) {

            usageInput.classList.add("correct");

            correct++;

        } else {

            usageInput.classList.add("wrong");

        }

    });

    if (isDragMode()) {
        correct += checkSentenceSlots();
    }

    updateStatistics(correct, total);

if(correct===total && total>0){
    jubelChoreo();
}

}

function clearMarks() {

    document
        .querySelectorAll("#tenseTable input")
        .forEach(input =>
            input.classList.remove("correct", "wrong")
        );

    document
        .querySelectorAll(".sentenceDrop")
        .forEach(el => el.classList.remove("correct", "wrong"));

    updateStatistics(0, 0);

}

checkBtn.addEventListener("click", () => {

    if (marksVisible) {

        clearMarks();

        marksVisible = false;

        checkBtn.textContent = "\u2714 Check Answers";

        return;

    }

    checkAnswers();

    marksVisible = true;

    checkBtn.textContent = "\u2716 Hide Marks";

});


/* ===========================================================
   RESET
=========================================================== */

function resetExercise() {

    clearSolutions();

    marksVisible = false;
    checkBtn.textContent = "\u2714 Check Answers";

    if (isDragMode()) {
        dragReset();
    }

    cells.forEach(row => {

        row.forEach(input => {

            input.value = "";

            input.classList.remove(
                "correct",
                "wrong"
            );

        });

    });

    const total =
        selectedTenses.length *
        (selectedColumns.length + 2) + extraTotal();

    updateStatistics(0, total);

}



/* ===========================================================
   REVEAL
=========================================================== */

function revealAnswers(){

    if(!answersVisible){

        clearSolutions();

        selectedTenses.forEach((tense,row)=>{

            selectedColumns.forEach((column,col)=>{

showSolution(
    cells[row][col + 2],
buildAnswer(
    column.verb.forms[tense.id][column.pronounIndex],
    column,
    tense,
    cells[row][col + 2].dataset.sentenceType
)
);

            });

            showSolution(
                cells[row][0],
                tense.signals.join(" / ")
            );

            showSolution(
                cells[row][1],
                tense.rule
            );

        });

        if (isDragMode()) {
            showSentenceSolutions();
        }

        solutionBtn.textContent = "🙈 Hide Answers";
        answersVisible = true;

    }else{

        clearSolutions();

        solutionBtn.textContent = "💡 Show Answers";
        answersVisible = false;

    }

}


solutionBtn.addEventListener(
    "click",
    revealAnswers
);


/* ===========================================================
   KEYBOARD NAVIGATION
=========================================================== */

document.addEventListener("keydown", event => {

    const input = document.activeElement;

    if (
        input.tagName !== "INPUT" ||
        input.dataset.row === undefined
    ) {
        return;
    }

    const row = Number(input.dataset.row);
    const col = Number(input.dataset.col);

    if (verticalMode) {

        const order = [...cells[0].slice(2), cells[0][0], cells[0][1]];
        const at = order.indexOf(input);
        const down = event.key === "ArrowDown" ||
            (event.key === "Enter" && !event.shiftKey);
        const up = event.key === "ArrowUp" ||
            (event.key === "Enter" && event.shiftKey);

        if (at >= 0 && (down || up)) {

            event.preventDefault();

            const target = order[at + (down ? 1 : -1)];
            if (target) target.focus();

        }

        return;

    }

    if (event.key === "ArrowDown") {

        event.preventDefault();

        if (row < cells.length - 1) {
            cells[row + 1][col].focus();
        }

    }

    if (event.key === "ArrowUp") {

        event.preventDefault();

        if (row > 0) {
            cells[row - 1][col].focus();
        }

    }

    if (event.key === "ArrowRight") {

        event.preventDefault();

        if (col < cells[row].length - 1) {
            cells[row][col + 1].focus();
        }

    }

    if (event.key === "ArrowLeft") {

        event.preventDefault();

        if (col > 0) {
            cells[row][col - 1].focus();
        }

    }

    if (event.key === "Enter") {

        event.preventDefault();

        if (
            !event.shiftKey &&
            row < cells.length - 1
        ) {
            cells[row + 1][col].focus();
        }

        if (
            event.shiftKey &&
            row > 0
        ) {
            cells[row - 1][col].focus();
        }

    }

});


/* ===========================================================
   REMOVE CORRECTION WHILE TYPING
=========================================================== */

document.addEventListener("input", event => {

    if (event.target.tagName !== "INPUT") {
        return;
    }

    event.target.classList.remove(
        "correct",
        "wrong"
    );

});

function konfettiAusRüssel(){

    const elefant = document.getElementById("jubelElefant");
    const rect = elefant.getBoundingClientRect();

    const startX = rect.left + 20;
    const startY = rect.top + 70;

    for(let i=0;i<40;i++){

        const k=document.createElement("div");

        k.style.position="fixed";
        k.style.left=startX+"px";
        k.style.top=startY+"px";

        k.style.width="8px";
        k.style.height="8px";
        k.style.borderRadius="50%";
        k.style.background=`hsl(${Math.random()*360},100%,50%)`;
        k.style.zIndex="10001";

        document.body.appendChild(k);

        const x=-(120+Math.random()*260);
        const y=Math.random()*180-90;

        k.animate([
            {
                transform:"translate(0,0)",
                opacity:1
            },
            {
                transform:`translate(${x}px,${y}px)`,
                opacity:0
            }
        ],{
            duration:1200+Math.random()*500,
            easing:"ease-out"
        });

        setTimeout(()=>k.remove(),1700);

    }

}

function jubelChoreo(){

    const elefant=document.getElementById("jubelElefant");

    elefant.style.display="block";

    const interval=setInterval(konfettiAusRüssel,300);

    setTimeout(()=>{

        clearInterval(interval);

        elefant.style.display="none";

    },4000);

}



/* =====================================================
   HORIZONTALE SCROLLLEISTE OBEN (synchron mit unten)
===================================================== */

(function initTopScrollbar(){

    const topScroll   = document.getElementById("topScroll");
    const topInner    = document.getElementById("topScrollInner");
    const wrapper     = document.getElementById("tableWrapper");
    const table       = document.getElementById("tenseTable");

    if(!topScroll || !topInner || !wrapper || !table){
        return;
    }

    let syncing = false;

    function refresh(){

        const width = table.scrollWidth;

        topInner.style.width = width + "px";

        const needed = width > wrapper.clientWidth + 1;

        topScroll.style.display = needed ? "block" : "none";

    }

    topScroll.addEventListener("scroll", () => {

        if(syncing){ syncing = false; return; }

        syncing = true;
        wrapper.scrollLeft = topScroll.scrollLeft;

    });

    wrapper.addEventListener("scroll", () => {

        if(syncing){ syncing = false; return; }

        syncing = true;
        topScroll.scrollLeft = wrapper.scrollLeft;

    });

    window.addEventListener("resize", refresh);

    if(window.ResizeObserver){
        new ResizeObserver(refresh).observe(table);
    }

    new MutationObserver(refresh).observe(table, {
        childList : true,
        subtree   : true
    });

    refresh();

})();

/* ===========================================================
   LIVE-FEEDBACK BEIM FELDWECHSEL
=========================================================== */

function isAnswerCorrect(input) {

    const row = Number(input.dataset.row);
    const col = Number(input.dataset.col);

    const tense = selectedTenses[row];

    if (!tense) return null;

    const value = input.value;

    if (!value.trim()) return null;

    if (col === 0) {

        return signalMatches(tense, value);

    }

    if (col === 1) {

        return usageMatches(tense, value);

    }

    const column = selectedColumns[col - 2];

    if (!column) return null;

    const solution = buildAnswer(
        column.verb.forms[tense.id][column.pronounIndex],
        column,
        tense,
        input.dataset.sentenceType
    );

    const alternatives = buildAlternatives(
        solution,
        column.pronoun,
        input.dataset.sentenceType,
        column,
        tense
    );

    return alternatives.includes(canonical(normalize(value)));

}

document.addEventListener("focusout", event => {

    const input = event.target;

    if (!(input instanceof HTMLInputElement)) return;
    if (!input.closest("#tenseTable")) return;

    const result = isAnswerCorrect(input);

    if (result === null) return;

    input.classList.remove("flashOk", "flashBad");

    void input.offsetWidth;

    input.classList.add(result ? "flashOk" : "flashBad");

    setTimeout(() => {
        input.classList.remove("flashOk", "flashBad");
    }, 900);

});


/* ===========================================================
   DRAG & DROP MODE
   - Konjugationsformen als Karten in die Tabelle ziehen
   - Beispielsatz (Subjekt / Praedikat / Signalwort markiert)
     der passenden Zeitform zuordnen
   Maus und Touch (Pointer Events); alternativ antippen:
   erst Karte, dann Feld.
=========================================================== */

const dragBank = document.getElementById("dragBank");

const dragTexts = {
    en: {
        conj: "Conjugations",
        sent: "Example sentences",
        hint: "Drag the cards into the table – or tap a card, then tap a field.",
        slot: "drop an example sentence here",
        row:  "Example sentence",
        legend: "subject · predicate · signal word"
    },
    de: {
        conj: "Konjugationen",
        sent: "Beispielsätze",
        hint: "Karten in die Tabelle ziehen – oder erst die Karte, dann das Feld antippen.",
        slot: "Beispielsatz hierher ziehen",
        row:  "Beispielsatz",
        legend: "Subjekt · Prädikat · Signalwort"
    },
    es: {
        conj: "Conjugaciones",
        sent: "Frases de ejemplo",
        hint: "Arrastra las tarjetas a la tabla – o toca una tarjeta y luego un campo.",
        slot: "suelta aquí una frase de ejemplo",
        row:  "Frase de ejemplo",
        legend: "sujeto · predicado · palabra señal"
    },
    fr: {
        conj: "Conjugaisons",
        sent: "Phrases d'exemple",
        hint: "Faites glisser les cartes dans le tableau – ou touchez une carte, puis un champ.",
        slot: "déposez une phrase d'exemple ici",
        row:  "Phrase d'exemple",
        legend: "sujet · prédicat · mot-signal"
    }
};

function dragT() {
    return dragTexts[currentLanguage] || dragTexts.en;
}

let dragCards = [];
let dragSlots = [];
let dragSelected = null;

function escapeHtml(text) {
    return text
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;");
}

/* "{S:She} {G:always} {P:drinks} tea." -> farbig markiertes HTML */
function renderExample(text) {
    return escapeHtml(text).replace(
        /\{([SPG]):([^}]*)\}/g,
        (m, kind, word) =>
            `<span class="ex${kind}">${word}</span>`
    );
}

function plainExample(text) {
    return text.replace(/\{[SPG]:([^}]*)\}/g, "$1");
}

function makeDragCard(kind, text, tenseId) {

    const el = document.createElement("div");

    el.className = "dragCard " + kind;

    if (kind === "sentence") {
        el.innerHTML = renderExample(text);
    } else {
        el.textContent = text;
    }

    const card = { kind, text, tenseId, el, holder: null };

    el._card = card;
    dragCards.push(card);

    return card;

}

function setupDragMode() {

    dragBank.innerHTML = "";
    dragCards = [];
    dragSlots = [];
    dragSelected = null;

    if (!isDragMode()) {
        dragBank.style.display = "none";
        return;
    }

    const T = dragT();
    const conjCards = [];
    const sentenceCards = [];

    /* Konjugationsfelder -> Ablagefelder */

    selectedTenses.forEach((tense, row) => {

        selectedColumns.forEach((column, col) => {

            const input = cells[row][col + 2];

            input.readOnly = true;
            input.setAttribute("inputmode", "none");
            input.classList.add("dropTarget");
            input._card = null;

            const text = buildAnswer(
                column.verb.forms[tense.id][column.pronounIndex],
                column,
                tense,
                input.dataset.sentenceType
            );

            conjCards.push(makeDragCard("conj", text));

        });

    });

    /* Satz-Ablagefelder */

    const makeSlot = row => {

        const el = document.createElement("div");

        el.className = "sentenceDrop";
        el.innerHTML = `<span class="dropHint">${T.slot}</span>`;

        const slot = { row, el, card: null };

        el._slot = slot;
        dragSlots.push(slot);

        return el;

    };

    if (verticalMode) {

        const tr = document.createElement("tr");
        tr.className = "vExtra";

        const labelTd = document.createElement("td");
        labelTd.className = "vSubject";
        labelTd.textContent = T.row;
        tr.appendChild(labelTd);

        const td = document.createElement("td");
        td.className = "vSentence";
        td.colSpan = Math.max(
            1,
            tableBody.querySelector("tr").children.length - 1
        );
        td.appendChild(makeSlot(0));
        tr.appendChild(td);

        tableBody.insertBefore(tr, tableBody.querySelector("tr.vExtra"));

    } else {

        selectedTenses.forEach((tense, row) => {

            const tenseCell =
                tableBody.children[row + 1].firstElementChild;

            tenseCell.appendChild(makeSlot(row));

        });

    }

    /* Satzkarten: je gewaehlter Zeitform ein Satz + bis zu 2 Ablenker */

    const pick = list => list[Math.floor(Math.random() * list.length)];
    const withExamples = list =>
        list.filter(t => t.examples && t.examples.length);

    withExamples(selectedTenses).forEach(tense => {
        sentenceCards.push(
            makeDragCard("sentence", pick(tense.examples), tense.id)
        );
    });

    shuffle(
        withExamples(tenses.filter(t => !selectedTenses.includes(t)))
    ).slice(0, 2).forEach(tense => {
        sentenceCards.push(
            makeDragCard("sentence", pick(tense.examples), tense.id)
        );
    });

    /* Bank aufbauen */

    const hint = document.createElement("div");
    hint.className = "dragHint";
    hint.textContent = T.hint;
    dragBank.appendChild(hint);

    const addList = (title, cards, extra) => {

        const head = document.createElement("div");
        head.className = "dragBankTitle";
        head.textContent = title;

        if (extra) {
            const small = document.createElement("span");
            small.className = "dragLegend";
            small.innerHTML =
                '<span class="exS">S</span> ' +
                '<span class="exP">P</span> ' +
                '<span class="exG">G</span> = ' + extra;
            head.appendChild(small);
        }

        const list = document.createElement("div");
        list.className = "dragBankList";

        shuffle(cards).forEach(card => list.appendChild(card.el));

        dragBank.appendChild(head);
        dragBank.appendChild(list);

    };

    addList(T.conj, conjCards);
    addList(T.sent, sentenceCards, T.legend);

    dragBank.style.display = "block";

}

/* ---------- Platzieren ---------- */

function unplaceCard(card) {

    const holder = card.holder;

    if (!holder) return;

    if (holder instanceof HTMLInputElement) {
        holder.value = "";
        holder._card = null;
        holder.classList.remove("filled", "correct", "wrong");
    } else {
        const slot = holder._slot;
        slot.card = null;
        holder.innerHTML =
            `<span class="dropHint">${dragT().slot}</span>`;
        holder.classList.remove("filled", "correct", "wrong");
    }

    card.holder = null;
    card.el.classList.remove("used");

}

function placeCard(card, target) {

    const isInput = target instanceof HTMLInputElement;

    if ((card.kind === "conj") !== isInput) return false;

    if (card.holder === target) return true;

    const previous = isInput ? target._card : target._slot.card;

    if (previous) unplaceCard(previous);

    unplaceCard(card);

    if (isInput) {
        target.value = card.text;
        target._card = card;
    } else {
        target.innerHTML = renderExample(card.text);
        target._slot.card = card;
    }

    target.classList.add("filled");
    target.classList.remove("correct", "wrong");

    card.holder = target;
    card.el.classList.add("used");

    return true;

}

function cardOfTarget(el) {

    if (el instanceof HTMLInputElement) return el._card || null;

    return el._slot ? el._slot.card : null;

}

function dropTargetAt(x, y) {

    const hit = document.elementFromPoint(x, y);

    return hit ? hit.closest(".dropTarget, .sentenceDrop") : null;

}

function clearDragSelection() {

    if (dragSelected) dragSelected.el.classList.remove("selected");

    dragSelected = null;

}

/* ---------- Zeigerereignisse (Maus + Touch) ---------- */

let dragSession = null;

document.addEventListener("pointerdown", event => {

    if (!isDragMode() || event.button > 0) return;

    const source = event.target.closest(
        ".dragCard, .dropTarget, .sentenceDrop"
    );

    if (!source) return;

    const card = source.classList.contains("dragCard")
        ? source._card
        : cardOfTarget(source);

    dragSession = {
        card,
        source,
        startX: event.clientX,
        startY: event.clientY,
        moved: false,
        ghost: null,
        hover: null
    };

});

document.addEventListener("pointermove", event => {

    const s = dragSession;

    if (!s || !s.card) return;

    if (!s.moved) {

        if (Math.hypot(event.clientX - s.startX,
                       event.clientY - s.startY) < 6) return;

        s.moved = true;

        s.ghost = s.card.el.cloneNode(true);
        s.ghost.classList.add("dragGhost");
        s.ghost.classList.remove("used", "selected");
        document.body.appendChild(s.ghost);

        s.card.el.classList.add("dragging");

        clearDragSelection();

    }

    event.preventDefault();

    s.ghost.style.left = event.clientX + "px";
    s.ghost.style.top  = event.clientY + "px";

    s.lastX = event.clientX;
    s.lastY = event.clientY;

    startDragAutoScroll(s);

    const target = dropTargetAt(event.clientX, event.clientY);

    if (s.hover && s.hover !== target) {
        s.hover.classList.remove("hover");
    }

    s.hover = target;

    if (target) target.classList.add("hover");

}, { passive: false });

/* Seite automatisch scrollen, wenn die Karte an den oberen/unteren
   Rand gezogen wird (Felder hinter der Karten-Leiste erreichbar) */
function startDragAutoScroll(session) {

    if (session.scrolling) return;

    session.scrolling = true;

    const step = () => {

        if (dragSession !== session) return;

        let dy = 0;

        /* oben am Rand: nach oben; ganz unten am Rand (hinter der
           Karten-Leiste): nach unten */
        if (session.lastY < 50) {
            dy = -Math.ceil((50 - session.lastY) / 3) - 2;
        } else if (session.lastY > window.innerHeight - 36 &&
                   Math.hypot(session.lastX - session.startX,
                              session.lastY - session.startY) > 60) {
            dy = 12;
        }

        if (dy) {

            window.scrollBy(0, dy);

            const target = dropTargetAt(session.lastX, session.lastY);

            if (session.hover && session.hover !== target) {
                session.hover.classList.remove("hover");
            }

            session.hover = target;

            if (target) target.classList.add("hover");

        }

        requestAnimationFrame(step);

    };

    requestAnimationFrame(step);

}

function endDrag(event, cancelled) {

    const s = dragSession;

    dragSession = null;

    if (!s) return;

    if (s.hover) s.hover.classList.remove("hover");

    if (s.ghost) s.ghost.remove();

    if (s.card) s.card.el.classList.remove("dragging");

    if (s.moved) {

        const target = cancelled
            ? null
            : dropTargetAt(event.clientX, event.clientY);

        if (target && s.card) {
            if (!placeCard(s.card, target) && s.card.holder) {
                /* falscher Feldtyp: Karte bleibt wo sie war */
            }
        } else if (s.card && !cancelled) {
            /* ins Leere gezogen: zurueck in die Bank */
            unplaceCard(s.card);
        }

        return;

    }

    /* Antippen / Klick */

    const clickedTarget =
        s.source.closest(".dropTarget, .sentenceDrop");

    if (clickedTarget) {

        if (dragSelected) {

            if (placeCard(dragSelected, clickedTarget)) {
                clearDragSelection();
            }

        } else if (s.card) {

            unplaceCard(s.card);

        }

        return;

    }

    if (s.card && !s.card.holder) {

        const same = dragSelected === s.card;

        clearDragSelection();

        if (!same) {
            dragSelected = s.card;
            s.card.el.classList.add("selected");
        }

    }

}

document.addEventListener("pointerup", event => endDrag(event, false));
document.addEventListener("pointercancel", event => endDrag(event, true));

/* ---------- Pruefen / Loesungen / Zuruecksetzen ---------- */

function checkSentenceSlots() {

    let correct = 0;

    dragSlots.forEach(slot => {

        slot.el.classList.remove("correct", "wrong");

        const ok = !!slot.card &&
            slot.card.tenseId === selectedTenses[slot.row].id;

        slot.el.classList.add(ok ? "correct" : "wrong");

        if (ok) correct++;

    });

    return correct;

}

function showSentenceSolutions() {

    dragSlots.forEach(slot => {

        const tense = selectedTenses[slot.row];

        if (!tense.examples || !tense.examples.length) return;

        const solution = document.createElement("div");

        solution.className = "solution";
        solution.textContent =
            "✔ " + tense.examples.map(plainExample).join("  /  ");

        slot.el.parentElement.appendChild(solution);

    });

}

function dragReset() {

    clearDragSelection();

    dragCards.forEach(card => unplaceCard(card));

    dragSlots.forEach(slot =>
        slot.el.classList.remove("correct", "wrong")
    );

}
