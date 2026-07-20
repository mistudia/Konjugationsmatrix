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
const solutionBtn = document.getElementById("solutionBtn");

const score = document.getElementById("score");
const percent = document.getElementById("percent");
const pageTitle = document.getElementById("pageTitle");

const exerciseTypeSelect =
    document.getElementById("exerciseTypeSelect");

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

languageSelect.addEventListener("change", () => {

    const params =
        new URLSearchParams(window.location.search);

    params.set("lang", languageSelect.value);

    window.location.search = params.toString();

});


/* ===========================================================
   TENSE FILTER
=========================================================== */

function createFilter() {

    tenseSelection.innerHTML = "";

    tenses.forEach((tense, index) => {

        const label = document.createElement("label");
        const checkbox = document.createElement("input");

        checkbox.type = "checkbox";
        checkbox.checked = true;
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

document.addEventListener("click", event => {

    if (!event.target.closest(".tenseDropdown")) {

        tenseDropdownMenu.classList.remove("open");

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
        "prp",
        "gtf",
        "wf"
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

function getAvailableVerbs() {

    if (verbSelectionSelect.value === "random") {

        return shuffle(verbPool);

    }

    const selected =
        [...verbSelection.querySelectorAll("input:checked")]
            .map(cb => cb.value);

    return verbPool.filter(verb =>
        selected.includes(verb.infinitive)
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

        return {
            pronoun,
            pronounIndex,
            verb: verbs[index]
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

                columns.push({
                    pronoun,
                    pronounIndex,
                    verb
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

    const values =
        type === "complete"
            ? [1, 2, 3]
            : [3, 6];

    verbCountSelect.innerHTML = "";

    values.forEach(value => {

        const option = document.createElement("option");

        option.value = value;
        option.textContent = value;

        verbCountSelect.appendChild(option);

    });

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
            ? "Choose verbs ▼"
            : `${count} verbs selected ▼`;

}


exerciseTypeSelect.addEventListener("change", () => {

    updateVerbCountOptions();

});


verbSelectionSelect.addEventListener("change", () => {

    verbChooser.style.display =
        verbSelectionSelect.value === "choose"
            ? "block"
            : "none";

});


verbDropdownBtn.addEventListener("click", () => {

    verbDropdownMenu.classList.toggle("open");

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
   START EXERCISE
=========================================================== */

startBtn.addEventListener("click", () => {

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

    /*
       Temporary default:
       6 random mixed verbs.

       The dropdowns for 3 / 6 / 8 and
       Complete Verb Forms are added next.
    */

const exerciseType =
    exerciseTypeSelect.value;

const verbCount =
    Number(verbCountSelect.value);


if (exerciseType === "complete") {

    selectedColumns =
        createCompleteColumns(verbCount);

} else {

    selectedColumns =
        createMixedColumns(verbCount);

}


if (!selectedColumns) {

    alert(
        "Please select enough verbs for this exercise."
    );

    return;

}

    createTable();

    exercise.style.display = "block";

});


/* ===========================================================
   CREATE TABLE
=========================================================== */

function createTable() {

    headerRow.innerHTML = "";
    tableBody.innerHTML = "";
    cells = [];

    /* HEADER */

    const first = document.createElement("th");

    first.textContent = "Tense";

    headerRow.appendChild(first);

selectedColumns.forEach((col,index)=>{

    const th=document.createElement("th");

    th.textContent=col.pronoun;

    if(index===3){
        th.classList.add("pluralStart");
    }

    headerRow.appendChild(th);

});


    const signal = document.createElement("th");

    signal.textContent = "Signal word(s)";

    headerRow.appendChild(signal);


    /* INFINITIVE */

    const intro = document.createElement("tr");

    const title = document.createElement("td");

    title.innerHTML = "<strong>Infinitive</strong>";

    intro.appendChild(title);

selectedColumns.forEach((column, col) => {

    const td = document.createElement("td");

    if(col===3){
        td.classList.add("pluralStart");
    }

    td.textContent = column.verb.infinitive;

    intro.appendChild(td);

});


    intro.appendChild(
        document.createElement("td")
    );

    tableBody.appendChild(intro);


    /* TENSE ROWS */

    selectedTenses.forEach((tense, row) => {

        const tr = document.createElement("tr");

        const tenseCell =
            document.createElement("td");

        tenseCell.innerHTML =
            `<strong>${tense.name}</strong>
             <br>
             <small>${tense.rule}</small>`;

        tr.appendChild(tenseCell);

        cells[row] = [];

        selectedColumns.forEach((column, col) => {

            const td =
                document.createElement("td");
if(col===3){
    td.classList.add("pluralStart");
}

            const input =
                document.createElement("input");

            input.type = "text";
            input.dataset.row = row;
            input.dataset.col = col;

            td.appendChild(input);
            tr.appendChild(td);

            cells[row][col] = input;

        });

        /* SIGNAL */

const td = document.createElement("td");

const input = document.createElement("input");


        input.type = "text";
        input.setAttribute("list", "signalList");

        input.dataset.row = row;
        input.dataset.col =
            selectedColumns.length;

        td.appendChild(input);
        tr.appendChild(td);

        cells[row].push(input);

        tableBody.appendChild(tr);

    });

    createSignalList();
answersVisible = false;
solutionBtn.textContent = "💡 Show Answers";

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

    clearSolutions();
answersVisible = false;
solutionBtn.textContent = "💡 Show Answers";

    let correct = 0;

    const total =
        selectedTenses.length *
        (selectedColumns.length + 1);

    selectedTenses.forEach((tense, row) => {

        selectedColumns.forEach((column, col) => {

            const input =
                cells[row][col];

            input.classList.remove(
                "correct",
                "wrong"
            );

            const solution =
                column.verb.forms[tense.id][
                    column.pronounIndex
                ];

            if (
                normalize(input.value) ===
                normalize(solution)
            ) {

                input.classList.add("correct");

                correct++;

            } else {

                input.classList.add("wrong");

                showSolution(input, solution);

            }

        });


        /* SIGNAL WORD */

        const signalInput =
            cells[row][selectedColumns.length];

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

            showSolution(
                signalInput,
                tense.signals.join(" / ")
            );

        }

    });

    updateStatistics(correct, total);

if(correct===total && total>0){
    jubelChoreo();
}

}

checkBtn.addEventListener(
    "click",
    checkAnswers
);


/* ===========================================================
   RESET
=========================================================== */

function resetExercise() {

    clearSolutions();

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
        (selectedColumns.length + 1);

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
                    cells[row][col],
                    column.verb.forms[tense.id][column.pronounIndex]
                );

            });

            showSolution(
                cells[row][selectedColumns.length],
                tense.signals.join(" / ")
            );

        });

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

