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

const sentenceTypeSelect =
    document.getElementById("sentenceTypeSelect");

const verbCountSelect =
    document.getElementById("verbCountSelect");

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

let singleTenseMode = false;
let singleTenseVerbs = [];
let singleTenseTense = null;


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
    es: "miStudia – Matriz de conjugación"
};

pageTitle.textContent =
    pageTitles[currentLanguage] || pageTitles.en;


/* ===========================================================
   UI TRANSLATIONS (Menü, Buttons, Tabellenkopf, Meldungen)
=========================================================== */

const uiStrings = {

    en: {
        languageLabel: "Language:",
        selectTensesTitle: "Select tenses",
        tenseDropdownDefault: "Select tenses ▼",
        tenseDropdownSelected: n => `${n} tenses selected ▼`,
        selectAll: "Select All",
        selectNone: "Select None",
        importantTenses: "Important Tenses",
        done: "✓ Done",
        exerciseTypeLabel: "Exercise type:",
        exerciseTypeMixed: "Mixed verbs",
        exerciseTypeComplete: "Complete verb forms",
        exerciseTypeExam: "Exam Mode",
        sentenceTypeLabel: "Sentence type:",
        sentenceStatements: "Statements (+)",
        sentenceNegatives: "Negatives (–)",
        sentenceQuestions: "Questions (?)",
        sentenceMixed: "Mixed (+ / – / ?)",
        numberOfVerbsLabel: "Number of verbs:",
        verbSelectionLabel: "Verb selection:",
        randomVerbs: "🎲 Random verbs",
        chooseVerbs: "✎ Choose verbs",
        chooseVerbsDropdown: "Choose verbs ▼",
        verbsSelected: n => `${n} verbs selected ▼`,
        searchVerbPlaceholder: "Search verb...",
        startExercise: "Start Exercise",
        tenseColumnHeader: "Tense",
        infinitiveLabel: "Infinitive",
        signalWordHeader: "Signal word(s)",
        usageHeader: "Usage",
        checkAnswers: "✔ Check Answers",
        hideMarks: "✖ Hide Marks",
        showAnswers: "💡 Show Answers",
        hideAnswers: "🙈 Hide Answers",
        resultTitle: "Result",
        correctLabel: "Correct:",
        percentageLabel: "Percentage:",
        alertNoTense: "Please select at least one tense.",
        alertNotEnoughVerbs: "Please select enough verbs for this exercise.",
        singleTenseHint: "Only one tense selected: practice up to 10 verbs side by side instead, compared by pronoun."
    },

    de: {
        languageLabel: "Sprache:",
        selectTensesTitle: "Zeitformen auswählen",
        tenseDropdownDefault: "Zeitformen wählen ▼",
        tenseDropdownSelected: n => `${n} Zeitformen ausgewählt ▼`,
        selectAll: "Alle auswählen",
        selectNone: "Keine auswählen",
        importantTenses: "Wichtige Zeitformen",
        done: "✓ Fertig",
        exerciseTypeLabel: "Übungstyp:",
        exerciseTypeMixed: "Gemischte Verben",
        exerciseTypeComplete: "Vollständige Verbformen",
        exerciseTypeExam: "Prüfungsmodus",
        sentenceTypeLabel: "Satzart:",
        sentenceStatements: "Aussagesätze (+)",
        sentenceNegatives: "Verneinte Sätze (–)",
        sentenceQuestions: "Fragesätze (?)",
        sentenceMixed: "Gemischt (+ / – / ?)",
        numberOfVerbsLabel: "Anzahl Verben:",
        verbSelectionLabel: "Verbenauswahl:",
        randomVerbs: "🎲 Zufällige Verben",
        chooseVerbs: "✎ Verben wählen",
        chooseVerbsDropdown: "Verben wählen ▼",
        verbsSelected: n => `${n} Verben ausgewählt ▼`,
        searchVerbPlaceholder: "Verb suchen...",
        startExercise: "Übung starten",
        tenseColumnHeader: "Zeitform",
        infinitiveLabel: "Infinitiv",
        signalWordHeader: "Signalwort/-wörter",
        usageHeader: "Verwendung",
        checkAnswers: "✔ Antworten prüfen",
        hideMarks: "✖ Markierungen ausblenden",
        showAnswers: "💡 Lösungen anzeigen",
        hideAnswers: "🙈 Lösungen ausblenden",
        resultTitle: "Ergebnis",
        correctLabel: "Richtig:",
        percentageLabel: "Prozent:",
        alertNoTense: "Bitte wähle mindestens eine Zeitform aus.",
        alertNotEnoughVerbs: "Bitte wähle genügend Verben für diese Übung aus.",
        singleTenseHint: "Nur eine Zeitform ausgewählt: stattdessen bis zu 10 Verben nebeneinander üben, verglichen nach Pronomen."
    },

    es: {
        languageLabel: "Idioma:",
        selectTensesTitle: "Selecciona los tiempos",
        tenseDropdownDefault: "Seleccionar tiempos ▼",
        tenseDropdownSelected: n => `${n} tiempos seleccionados ▼`,
        selectAll: "Seleccionar todo",
        selectNone: "Deseleccionar todo",
        importantTenses: "Tiempos importantes",
        done: "✓ Listo",
        exerciseTypeLabel: "Tipo de ejercicio:",
        exerciseTypeMixed: "Verbos mixtos",
        exerciseTypeComplete: "Formas verbales completas",
        exerciseTypeExam: "Modo examen",
        sentenceTypeLabel: "Tipo de oración:",
        sentenceStatements: "Afirmaciones (+)",
        sentenceNegatives: "Negaciones (–)",
        sentenceQuestions: "Preguntas (?)",
        sentenceMixed: "Mixto (+ / – / ?)",
        numberOfVerbsLabel: "Número de verbos:",
        verbSelectionLabel: "Selección de verbos:",
        randomVerbs: "🎲 Verbos aleatorios",
        chooseVerbs: "✎ Elegir verbos",
        chooseVerbsDropdown: "Elegir verbos ▼",
        verbsSelected: n => `${n} verbos seleccionados ▼`,
        searchVerbPlaceholder: "Buscar verbo...",
        startExercise: "Empezar ejercicio",
        tenseColumnHeader: "Tiempo",
        infinitiveLabel: "Infinitivo",
        signalWordHeader: "Palabra(s) señal",
        usageHeader: "Uso",
        checkAnswers: "✔ Comprobar respuestas",
        hideMarks: "✖ Ocultar marcas",
        showAnswers: "💡 Mostrar respuestas",
        hideAnswers: "🙈 Ocultar respuestas",
        resultTitle: "Resultado",
        correctLabel: "Correctas:",
        percentageLabel: "Porcentaje:",
        alertNoTense: "Selecciona al menos un tiempo verbal.",
        alertNotEnoughVerbs: "Selecciona suficientes verbos para este ejercicio.",
        singleTenseHint: "Solo un tiempo seleccionado: practica hasta 10 verbos en paralelo, comparados por pronombre."
    }

};

const ui = uiStrings[currentLanguage] || uiStrings.en;

function applyUITranslations() {

    const setText = (id, text) => {
        const el = document.getElementById(id);
        if (el) el.textContent = text;
    };

    setText("languageLabel", ui.languageLabel);
    setText("selectTensesTitle", ui.selectTensesTitle);
    setText("selectAllBtn", ui.selectAll);
    setText("selectNoneBtn", ui.selectNone);
    setText("importantBtn", ui.importantTenses);
    setText("tenseDoneBtn", ui.done);

    setText("exerciseTypeLabel", ui.exerciseTypeLabel);
    setText("sentenceTypeLabel", ui.sentenceTypeLabel);
    setText("numberOfVerbsLabel", ui.numberOfVerbsLabel);
    setText("verbSelectionLabel", ui.verbSelectionLabel);

    const exerciseTypeOptions = {
        mixed: ui.exerciseTypeMixed,
        complete: ui.exerciseTypeComplete,
        exam: ui.exerciseTypeExam
    };

    Object.entries(exerciseTypeOptions).forEach(([value, text]) => {
        const option = exerciseTypeSelect.querySelector(`option[value="${value}"]`);
        if (option) option.textContent = text;
    });

    const sentenceTypeOptions = {
        statement: ui.sentenceStatements,
        negative: ui.sentenceNegatives,
        question: ui.sentenceQuestions,
        mixed: ui.sentenceMixed
    };

    Object.entries(sentenceTypeOptions).forEach(([value, text]) => {
        const option = sentenceTypeSelect.querySelector(`option[value="${value}"]`);
        if (option) option.textContent = text;
    });

    const randomBtn =
        document.querySelector('#verbSelectionSegmented .segmentBtn[data-value="random"]');
    if (randomBtn) randomBtn.textContent = ui.randomVerbs;

    const chooseBtn =
        document.querySelector('#verbSelectionSegmented .segmentBtn[data-value="choose"]');
    if (chooseBtn) chooseBtn.textContent = ui.chooseVerbs;

    if (verbSearch) verbSearch.placeholder = ui.searchVerbPlaceholder;

    setText("selectAllVerbsBtn", ui.selectAll);
    setText("selectNoneVerbsBtn", ui.selectNone);
    setText("verbDoneBtn", ui.done);

    setText("startBtn", ui.startExercise);

    setText("resultTitle", ui.resultTitle);
    setText("correctLabel", ui.correctLabel);
    setText("percentageLabel", ui.percentageLabel);

    checkBtn.textContent = ui.checkAnswers;
    solutionBtn.textContent = ui.showAnswers;

}

applyUITranslations();


languageSelect.addEventListener("change", () => {

    const params =
        new URLSearchParams(window.location.search);

    params.set("lang", languageSelect.value);

    window.location.search = params.toString();

});


/* ===========================================================
   TENSE FILTER
=========================================================== */

const defaultTensesByLanguage = {
    en: ["sp", "spa"],
    de: ["praesens"],
    es: ["presente"]
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
        label.append(" " + tense.name);

        tenseSelection.appendChild(label);

    });

}

function updateTenseDropdownLabel() {

    const checked =
        tenseSelection.querySelectorAll("input:checked").length;

    tenseDropdownBtn.textContent =
        ui.tenseDropdownSelected(checked);

}

createFilter();
updateTenseDropdownLabel();

tenseDropdownBtn.addEventListener("click", () => {

    tenseDropdownMenu.classList.toggle("open");

});

tenseSelection.addEventListener("change", () => {

    updateTenseDropdownLabel();
    updateVerbCountOptions();

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
    updateVerbCountOptions();

});

selectNoneBtn.addEventListener("click", () => {

    tenseSelection
        .querySelectorAll("input")
        .forEach(cb => cb.checked = false);

    updateTenseDropdownLabel();
    updateVerbCountOptions();

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
        "perfekt",
        "praeteritum",
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
    updateVerbCountOptions();

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

function getAvailableVerbs() {

    if (verbSelectionSelect.value === "random") {

        return shuffleDifferently(verbPool);

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


function createMixedColumns(count) {

    const pronouns =
        languageConfig.mixedPronouns[count];

    const verbs =
        getAvailableVerbs().slice(0, count);

    if (verbs.length < count) {

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

function createExamColumns(count){

    const pronouns =
        languageConfig.mixedPronouns[count];

    const verbs =
        getAvailableVerbs().slice(0, count);

    if(verbs.length < count){
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


function createCompleteColumns(count) {

    const verbs =
        getAvailableVerbs().slice(0, count);

    if (verbs.length < count) {

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

function updateVerbCountOptions() {

    const type = exerciseTypeSelect.value;

    const checkedTenses =
        tenseSelection.querySelectorAll("input:checked").length;

    const previousValue = verbCountSelect.value;

    const values =
        checkedTenses === 1
            ? [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
            : type === "complete"
                ? [1, 2, 3]
                : [3, 6];

    verbCountSelect.innerHTML = "";

    values.forEach(value => {

        const option = document.createElement("option");

        option.value = value;
        option.textContent = value;

        verbCountSelect.appendChild(option);

    });

    if (values.includes(Number(previousValue))) {
        verbCountSelect.value = previousValue;
    }

    updateSingleTenseHint(checkedTenses);

}

function updateSingleTenseHint(checkedTenses) {

    const hintEl = document.getElementById("singleTenseHint");

    if (!hintEl) return;

    if (checkedTenses === 1) {
        hintEl.textContent = ui.singleTenseHint;
        hintEl.style.display = "block";
    } else {
        hintEl.style.display = "none";
    }

}


function createVerbSelection() {

    verbSelection.innerHTML = "";

    verbPool.forEach(verb => {

        const label = document.createElement("label");

        const checkbox = document.createElement("input");

        checkbox.type = "checkbox";
        checkbox.value = verb.infinitive;

        label.appendChild(checkbox);
        label.append(" " + verb.infinitive);

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
            ? ui.chooseVerbsDropdown
            : ui.verbsSelected(count);

}


exerciseTypeSelect.addEventListener("change", () => {

    updateVerbCountOptions();

});


verbSelectionSelect.addEventListener("change", () => {

    verbChooser.style.display =
        verbSelectionSelect.value === "choose"
            ? "block"
            : "none";

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


updateVerbCountOptions();
createVerbSelection();
updateVerbDropdownLabel();


/* ===========================================================
   VOREINSTELLUNGEN FÜR DEUTSCH / SPANISCH
   Nur eine Zeitform (Präsens/Presente), Aussagesätze,
   vollständige Verbformen, 10 Verben.
=========================================================== */

if (currentLanguage === "de" || currentLanguage === "es") {

    sentenceTypeSelect.value = "statement";

    if ([...verbCountSelect.options].some(o => o.value === "10")) {
        verbCountSelect.value = "10";
    }

}


/* ===========================================================
   START EXERCISE
=========================================================== */

startBtn.addEventListener("click", () => {

    marksVisible = false;
    checkBtn.textContent = ui.checkAnswers;

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

        alert(ui.alertNoTense);

        return;

    }

    singleTenseMode = selectedTenses.length === 1;

    if (singleTenseMode) {

        singleTenseTense = selectedTenses[0];

        const ok = buildSingleTenseTable(singleTenseTense);

        if (!ok) return;

        exercise.style.display = "block";

        return;

    }

    /*
       Temporary default:
       6 random mixed verbs.

       The dropdowns for 3 / 6 / 8 and
       Complete Verb Forms are added next.
    */

const exerciseType =
    exerciseTypeSelect.value;

currentExerciseType = exerciseType;

const verbCount =
    Number(verbCountSelect.value);


if(exerciseType==="complete"){

    selectedColumns =
        createCompleteColumns(verbCount);

}else if(exerciseType==="exam"){

    selectedColumns =
        createExamColumns(verbCount);

}else{

    selectedColumns =
        createMixedColumns(verbCount);

}


if (!selectedColumns) {

    alert(ui.alertNotEnoughVerbs);

    return;

}

    createTable();

    exercise.style.display = "block";

});


/* ===========================================================
   EINZELNE ZEITFORM: VERB × PRONOMEN
   Wenn genau eine Zeitform gewählt ist, lohnt sich statt der
   normalen Tabelle (1 Zeile, viele verstreute Spalten) eine
   kompakte Vergleichstabelle: Zeilen = Verben, Spalten =
   Pronomen. Tiempo-Spalte, Infinitiv-Zeile sowie Signalwort-/
   Verwendungs-Spalten entfallen dabei.
=========================================================== */

function buildSingleTenseTable(tense) {

    const count = Number(verbCountSelect.value);
    const verbs = getAvailableVerbs().slice(0, count);

    if (verbs.length < count) {

        alert(ui.alertNotEnoughVerbs);

        return false;

    }

    singleTenseVerbs = verbs;

    headerRow.innerHTML = "";
    tableBody.innerHTML = "";
    cells = [];

    // Die normale Tabelle nutzt width:max-content, damit sie bei
    // vielen Verb-Spalten horizontal scrollen kann. Hier gibt es
    // aber nur "Infinitiv" + Pronomen-Spalten, also darf/soll die
    // Tabelle die volle Breite des Wrappers ausfüllen, statt
    // Leerraum rechts stehen zu lassen.
    const table = document.getElementById("tenseTable");
    table.style.width = "100%";

    const pronounWidthPercent = 78 / languageConfig.pronouns.length;

    const first = document.createElement("th");
    first.textContent = ui.infinitiveLabel;
    first.style.width = "22%";
    headerRow.appendChild(first);

    languageConfig.pronouns.forEach(pronoun => {

        const th = document.createElement("th");
        th.textContent = pronoun;

        // Die generischen :first-child/:last-child-Regeln im CSS
        // sind für die frühere Zeitform-/Verwendungs-Spalte
        // gedacht. In dieser Tabelle sind alle Pronomen-Spalten
        // gleichwertig, daher hier einheitlich zurücksetzen.
        th.style.width = pronounWidthPercent + "%";
        th.style.minWidth = "110px";
        th.style.background = "#4FADEA";

        headerRow.appendChild(th);

    });

    verbs.forEach((verb, row) => {

        const tr = document.createElement("tr");

        const infTd = document.createElement("td");
        infTd.innerHTML = `<strong>${verb.infinitive}</strong>`;
        infTd.style.background = "#FFFF00";
        tr.appendChild(infTd);

        cells[row] = [];

        languageConfig.pronouns.forEach((pronoun, col) => {

            const td = document.createElement("td");
            td.style.background = "white";

            const input = document.createElement("input");

            input.type = "text";
            input.dataset.row = row;
            input.dataset.col = col;

            const sentenceType =
                sentenceTypeSelect.value === "mixed"
                    ? ["statement", "negative", "question"][
                          Math.floor(Math.random() * 3)
                      ]
                    : sentenceTypeSelect.value;

            input.dataset.sentenceType = sentenceType;

            const wrap = document.createElement("div");
            wrap.className = "cellInline";

            const mode = document.createElement("span");

            if (sentenceType === "statement") {
                mode.textContent = "(+)";
                mode.className = "sentenceMode sentencePlus";
            }

            if (sentenceType === "negative") {
                mode.textContent = "(-)";
                mode.className = "sentenceMode sentenceMinus";
            }

            if (sentenceType === "question") {
                mode.textContent = "(?)";
                mode.className = "sentenceMode sentenceQuestion";
            }

            wrap.appendChild(mode);
            wrap.appendChild(input);
            td.appendChild(wrap);
            tr.appendChild(td);

            cells[row][col] = input;

        });

        tableBody.appendChild(tr);

    });

    const caption = document.getElementById("singleTenseCaption");

    if (caption) {
        caption.textContent = tense.name;
        caption.style.display = "block";
    }

    answersVisible = false;
    solutionBtn.textContent = ui.showAnswers;

    return true;

}


/* ===========================================================
   CREATE TABLE
=========================================================== */

let currentExerciseType = "complete";

function columnDivider(index) {

    if (index === 0) {
        return "";
    }

    const column = selectedColumns[index];

    if (currentExerciseType === "complete") {

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

function createTable() {

    headerRow.innerHTML = "";
    tableBody.innerHTML = "";
    cells = [];

    const caption = document.getElementById("singleTenseCaption");
    if (caption) caption.style.display = "none";

    const table = document.getElementById("tenseTable");
    table.style.width = "";

    /* HEADER */

    const first = document.createElement("th");
    first.textContent = ui.tenseColumnHeader;
    headerRow.appendChild(first);

    selectedColumns.forEach((col, index) => {

        const th = document.createElement("th");
        th.textContent = col.pronoun;

        const divider = columnDivider(index);
        if (divider) th.classList.add(divider);

        headerRow.appendChild(th);

    });

    const signalHead = document.createElement("th");
    signalHead.textContent = ui.signalWordHeader;
    signalHead.className = "signalCell";
    headerRow.appendChild(signalHead);

    const usageHead = document.createElement("th");
    usageHead.textContent = ui.usageHeader;
    usageHead.className = "usageCell";
    headerRow.appendChild(usageHead);

    /* INFINITIVE */

    const intro = document.createElement("tr");

    const title = document.createElement("td");
    title.innerHTML = `<strong>${ui.infinitiveLabel}</strong>`;
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

            const mode = document.createElement("span");

            const type = column.exam
                ? ["statement", "negative", "question"][
                      Math.floor(Math.random() * 3)
                  ]
                : column.sentenceType;

            input.dataset.sentenceType = type;

            if (type === "statement") {
                mode.textContent = "(+)";
                mode.className = "sentenceMode sentencePlus";
            }

            if (type === "negative") {
                mode.textContent = "(-)";
                mode.className = "sentenceMode sentenceMinus";
            }

            if (type === "question") {
                mode.textContent = "(?)";
                mode.className = "sentenceMode sentenceQuestion";
            }

            wrap.appendChild(mode);
            wrap.appendChild(input);
            td.appendChild(wrap);
            tr.appendChild(td);

            cells[row][col + 2] = input;

        });

        /* SIGNAL */

        const signalTd = document.createElement("td");
        signalTd.className = "signalCell";
        const signalInput = document.createElement("input");

        signalInput.type = "text";
        signalInput.setAttribute("list", "signalList");
        signalInput.dataset.row = row;
        signalInput.dataset.col = 0;

        attachListPicker(signalInput);
        signalTd.appendChild(signalInput);
        tr.appendChild(signalTd);
        cells[row][0] = signalInput;

        /* USAGE */

        const usageTd = document.createElement("td");
        usageTd.className = "usageCell";
        const usageInput = document.createElement("input");

        usageInput.type = "text";
        usageInput.setAttribute("list", "usageList");
        usageInput.dataset.row = row;
        usageInput.dataset.col = 1;

        attachListPicker(usageInput);
        usageTd.appendChild(usageInput);
        tr.appendChild(usageTd);
        cells[row][1] = usageInput;

        tableBody.appendChild(tr);


    });

    createSignalList();
    createUsageList();
answersVisible = false;
solutionBtn.textContent = ui.showAnswers;

}

function attachListPicker(input){

    const open = () => {
        if (input.value) {
            input.dataset.savedValue = input.value;
            input.value = "";
        }
        try { input.showPicker && input.showPicker(); } catch (e) {}
    };

    const restore = () => {
        if (!input.value && input.dataset.savedValue) {
            input.value = input.dataset.savedValue;
        }
        delete input.dataset.savedValue;
    };

    input.addEventListener("focus", open);
    input.addEventListener("click", open);
    input.addEventListener("input", () => { delete input.dataset.savedValue; });
    input.addEventListener("blur", restore);

}



function createUsageList() {

    let list = document.getElementById("usageList");

    if (list) list.remove();

    list = document.createElement("datalist");
    list.id = "usageList";

    tenses.forEach(tense => {

        const option = document.createElement("option");
        option.value = tense.rule;
        list.appendChild(option);

    });

    document.body.appendChild(list);

}



/* ===========================================================
   SIGNAL LIST
=========================================================== */

function createSignalList() {

    let list =
        document.getElementById("signalList");

    if (list) list.remove();

    list = document.createElement("datalist");

    list.id = "signalList";

    signalWords.forEach(word => {

        const option =
            document.createElement("option");

        option.value = word;

        list.appendChild(option);

    });

    document.body.appendChild(list);

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
        .replace(/[‘’ʼ]/g, "'");

    contractions.forEach(([long, short]) => {

        result = result.split(short).join(long);

    });

    return result
        .replace(/\s+/g, " ")
        .trim();

}


/* ===========================================================
   DEUTSCH: Verneinung / Frage
   Die gespeicherte "solution" ist nur die Verbphrase
   (z. B. "gehe", "bin gegangen", "werde gehen").
   "nicht" steht direkt vor dem nicht-finiten Teil
   (Partizip/Infinitiv); bei einteiligen Formen ans Ende.
   Bei Fragen wird das Verb vorangestellt, danach das
   Pronomen ("gehe ich?", "bin ich gegangen?").
=========================================================== */

function buildGermanAnswer(solution, column, sentenceType) {

    const pronoun = column.pronoun;
    const parts = solution.split(" ");

    if (sentenceType === "negative") {

        if (parts.length === 1) {
            return solution + " nicht";
        }

        const finite = parts[0];
        const rest = parts.slice(1).join(" ");

        return finite + " nicht " + rest;

    }

    if (sentenceType === "question") {

        const finite = parts[0];
        const rest = parts.slice(1).join(" ");

        return finite + " " + pronoun +
            (rest ? " " + rest : "") + "?";

    }

    return solution;

}


/* ===========================================================
   SPANISCH: Verneinung / Frage
   "no" kommt direkt vor die (immer finite) Verbphrase.
   Bei Fragen wird das Pronomen angehängt und mit "?"
   abgeschlossen (führendes "¿" wird beim Prüfen nicht
   verlangt).
=========================================================== */

function buildSpanishAnswer(solution, column, sentenceType) {

    const pronoun = column.pronoun;

    if (sentenceType === "negative") {
        return "no " + solution;
    }

    if (sentenceType === "question") {
        return solution + " " + pronoun + "?";
    }

    return solution;

}


function buildAnswer(solution,column,tense,sentenceType){

sentenceType ??= column.sentenceType;

if (sentenceType === "statement") {
    return solution;
}

if (currentLanguage === "de") {
    return buildGermanAnswer(solution, column, sentenceType);
}

if (currentLanguage === "es") {
    return buildSpanishAnswer(solution, column, sentenceType);
}

if(currentLanguage !== "en"){
    return solution;
}


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
        solution.substring(9);    // "going to "

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


/* ===========================================================
   AKZEPTIERTE ANTWORT-VARIANTEN
   Neben der reinen Verbform wird bei Aussagesätzen und
   verneinten Sätzen auch die Version mit vorangestelltem
   Pronomen akzeptiert (z. B. "du hörst nicht" zusätzlich
   zu "hörst nicht"). Bei Fragen bleibt zusätzlich die
   Version ohne abschließendes "?" gültig.
=========================================================== */

function buildAlternatives(column, tense, sentenceType) {

    const solution = buildAnswer(
        column.verb.forms[tense.id][column.pronounIndex],
        column,
        tense,
        sentenceType
    );

    const alternatives = [canonical(solution)];

    if (solution.trim().endsWith("?")) {

        alternatives.push(
            canonical(solution.replace(/\?\s*$/, ""))
        );

    } else {

        alternatives.push(
            canonical(column.pronoun + " " + solution)
        );

    }

    return alternatives;

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

    input.parentElement.appendChild(div);

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

function checkAnswers() {

    if (singleTenseMode) {
        checkSingleTenseAnswers();
        return;
    }

    clearSolutions();
answersVisible = false;
solutionBtn.textContent = ui.showAnswers;

    let correct = 0;

    const total =
        selectedTenses.length *
        (selectedColumns.length + 2);

    selectedTenses.forEach((tense, row) => {

        selectedColumns.forEach((column, col) => {

            const input =
                cells[row][col + 2];

            input.classList.remove(
                "correct",
                "wrong"
            );

       const user = normalize(input.value);

const alternatives = buildAlternatives(
    column,
    tense,
    input.dataset.sentenceType
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

        const valid =
            tense.signals.some(signal =>
                normalize(signal) === user
            );

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

        const usageValid =
            usageUser.length > 0 &&
            tense.rule
                .split(/[•\/,]/)
                .some(part => normalize(part) === usageUser);

        if (usageValid) {

            usageInput.classList.add("correct");

            correct++;

        } else {

            usageInput.classList.add("wrong");

        }

    });

    updateStatistics(correct, total);

if(correct===total && total>0){
    jubelChoreo();
}

}

function checkSingleTenseAnswers() {

    clearSolutions();
    answersVisible = false;
    solutionBtn.textContent = ui.showAnswers;

    let correct = 0;
    let total = 0;

    cells.forEach((row, rowIndex) => {

        row.forEach((input, colIndex) => {

            input.classList.remove("correct", "wrong");

            total++;

            const column = {
                pronoun: languageConfig.pronouns[colIndex],
                pronounIndex: colIndex,
                verb: singleTenseVerbs[rowIndex],
                sentenceType: input.dataset.sentenceType
            };

            const alternatives = buildAlternatives(
                column,
                singleTenseTense,
                input.dataset.sentenceType
            );

            const user = normalize(input.value);

            if (alternatives.includes(canonical(user))) {
                input.classList.add("correct");
                correct++;
            } else {
                input.classList.add("wrong");
            }

        });

    });

    updateStatistics(correct, total);

    if (correct === total && total > 0) {
        jubelChoreo();
    }

}

function clearMarks() {

    document
        .querySelectorAll("#tenseTable input")
        .forEach(input =>
            input.classList.remove("correct", "wrong")
        );

    updateStatistics(0, 0);

}

checkBtn.addEventListener("click", () => {

    if (marksVisible) {

        clearMarks();

        marksVisible = false;

        checkBtn.textContent = ui.checkAnswers;

        return;

    }

    checkAnswers();

    marksVisible = true;

    checkBtn.textContent = ui.hideMarks;

});


/* ===========================================================
   RESET
=========================================================== */

function resetExercise() {

    clearSolutions();

    marksVisible = false;
    checkBtn.textContent = ui.checkAnswers;

    cells.forEach(row => {

        row.forEach(input => {

            input.value = "";

            input.classList.remove(
                "correct",
                "wrong"
            );

        });

    });

    if (singleTenseMode) {

        const total = singleTenseVerbs.length * languageConfig.pronouns.length;
        updateStatistics(0, total);
        return;

    }

    const total =
        selectedTenses.length *
        (selectedColumns.length + 2);

    updateStatistics(0, total);

}



/* ===========================================================
   REVEAL
=========================================================== */

function revealSingleTenseAnswers() {

    if (!answersVisible) {

        clearSolutions();

        cells.forEach((row, rowIndex) => {

            row.forEach((input, colIndex) => {

                const column = {
                    pronoun: languageConfig.pronouns[colIndex],
                    pronounIndex: colIndex,
                    verb: singleTenseVerbs[rowIndex],
                    sentenceType: input.dataset.sentenceType
                };

                showSolution(
                    input,
                    buildAnswer(
                        column.verb.forms[singleTenseTense.id][column.pronounIndex],
                        column,
                        singleTenseTense,
                        input.dataset.sentenceType
                    )
                );

            });

        });

        solutionBtn.textContent = ui.hideAnswers;
        answersVisible = true;

    } else {

        clearSolutions();

        solutionBtn.textContent = ui.showAnswers;
        answersVisible = false;

    }

}

function revealAnswers(){

    if (singleTenseMode) {
        revealSingleTenseAnswers();
        return;
    }

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

        solutionBtn.textContent = ui.hideAnswers;
        answersVisible = true;

    }else{

        clearSolutions();

        solutionBtn.textContent = ui.showAnswers;
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

    const value = input.value;

    if (!value.trim()) return null;

    if (singleTenseMode) {

        const column = {
            pronoun: languageConfig.pronouns[col],
            pronounIndex: col,
            verb: singleTenseVerbs[row],
            sentenceType: input.dataset.sentenceType
        };

        const alternatives = buildAlternatives(
            column,
            singleTenseTense,
            input.dataset.sentenceType
        );

        return alternatives.includes(canonical(normalize(value)));

    }

    const tense = selectedTenses[row];

    if (!tense) return null;

    if (col === 0) {

        const user = normalize(value);

        return tense.signals.some(signal =>
            normalize(signal) === user
        );

    }

    if (col === 1) {

        const user = normalize(value);

        return tense.rule
            .split(/[•\/,]/)
            .some(part => normalize(part) === user);

    }

    const column = selectedColumns[col - 2];

    if (!column) return null;

    const alternatives = buildAlternatives(
        column,
        tense,
        input.dataset.sentenceType
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
