/* ===========================================================
   MISTUDIA ENGLISH TENSE TRAINER
   app.js
=========================================================== */

const tenseSelection = document.getElementById("tenseSelection");
const startBtn = document.getElementById("startBtn");
const selectAllBtn = document.getElementById("selectAllBtn");
const selectNoneBtn = document.getElementById("selectNoneBtn");

const exercise = document.getElementById("exercise");
const headerRow = document.getElementById("headerRow");
const tableBody = document.getElementById("tableBody");

const languageSelect =
    document.getElementById("languageSelect");

const importantBtn =
    document.getElementById("importantBtn");

const tenseDropdownBtn =
    document.getElementById("tenseDropdownBtn");

const tenseDropdownMenu =
    document.getElementById("tenseDropdownMenu");

let selectedTenses = [];
let selectedIndices = [];
let cells = [];

/* ===========================================================
   CREATE FILTER
=========================================================== */

function createFilter(){

    tenseSelection.innerHTML = "";

    tenses.forEach((tense,index)=>{

        const label = document.createElement("label");

        const cb = document.createElement("input");

        cb.type = "checkbox";
        cb.checked = true;
        cb.value = tense.id;
        cb.dataset.index = index;

        label.appendChild(cb);

        label.append(" " + tense.name);

        tenseSelection.appendChild(label);

    });

}

createFilter();


/* ===========================================================
   TENSE DROPDOWN
=========================================================== */

function updateTenseDropdownLabel(){

    const checked =
        document.querySelectorAll(
            "#tenseSelection input:checked"
        ).length;

    tenseDropdownBtn.textContent =
        `${checked} tenses selected ▼`;

}


tenseDropdownBtn.addEventListener("click", () => {

    tenseDropdownMenu.classList.toggle("open");

});


tenseSelection.addEventListener("change", () => {

    updateTenseDropdownLabel();

});


document.addEventListener("click", event => {

    if(!event.target.closest(".tenseDropdown")){

        tenseDropdownMenu.classList.remove("open");

    }

});


updateTenseDropdownLabel();


/* ===========================================================
   LANGUAGE SELECTION
=========================================================== */

const languageParams =
    new URLSearchParams(window.location.search);

const currentLanguage =
    languageParams.get("lang") || "en";

languageSelect.value = currentLanguage;

const pageTitle =
    document.getElementById("pageTitle");

pageTitle.textContent =
    currentLanguage === "de"
        ? "Deutsche Zeitformen – Trainer"
        : "English Tenses Trainer";



languageSelect.addEventListener("change", () => {

    const params =
        new URLSearchParams(window.location.search);

    params.set("lang", languageSelect.value);

    window.location.search = params.toString();

});


/* ===========================================================
   SELECT ALL
=========================================================== */

selectAllBtn.addEventListener("click",()=>{

    document
        .querySelectorAll("#tenseSelection input")
        .forEach(cb=>cb.checked=true);

    updateTenseDropdownLabel();

});


/* ===========================================================
   SELECT NONE
=========================================================== */

selectNoneBtn.addEventListener("click",()=>{

    document
        .querySelectorAll("#tenseSelection input")
        .forEach(cb=>cb.checked=false);

    updateTenseDropdownLabel();

});


/* ===========================================================
   START EXERCISE
=========================================================== */

startBtn.addEventListener("click",()=>{

    selectedTenses = [];
    selectedIndices = [];

    document
        .querySelectorAll("#tenseSelection input")
        .forEach(cb=>{

            if(cb.checked){

                const index = Number(cb.dataset.index);

                selectedTenses.push(tenses[index]);
                selectedIndices.push(index);

            }

        });

    if(selectedTenses.length===0){

        alert("Please select at least one tense.");

        return;

    }
saveSelection();

createTable();

exercise.style.display="block";

});

/* ===========================================================
   IMPORTANT TENSES
=========================================================== */

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
    ]

};


importantBtn.addEventListener("click", () => {

    const language =
        languageSelect.value;

    const important =
        importantTenses[language] || [];

    document
        .querySelectorAll("#tenseSelection input")
.forEach(cb => {

    cb.checked =
        important.includes(cb.value);

});

updateTenseDropdownLabel();

});


/* ===========================================================
   CREATE TABLE
=========================================================== */

function createTable(){

    headerRow.innerHTML="";
    tableBody.innerHTML="";
    cells=[];

    /* ---------- HEADER ---------- */

    const first=document.createElement("th");
    first.textContent="Tense";
    headerRow.appendChild(first);

    columns.forEach(col=>{

        const th=document.createElement("th");

th.textContent = col.pronoun;

        headerRow.appendChild(th);

    });

    const signal=document.createElement("th");
    signal.textContent="Signal word(s)";
    headerRow.appendChild(signal);

    /* ---------- INFINITIVE ROW ---------- */

    const intro=document.createElement("tr");

    const td=document.createElement("td");
    td.innerHTML="<strong>Infinitive</strong>";
    intro.appendChild(td);

    columns.forEach(col=>{

        const cell=document.createElement("td");

        cell.innerHTML=col.infinitive;

        intro.appendChild(cell);

    });

    intro.appendChild(document.createElement("td"));

    tableBody.appendChild(intro);

    /* ---------- TENSE ROWS ---------- */

    selectedTenses.forEach((tense,row)=>{

        const tr=document.createElement("tr");

        const title=document.createElement("td");

        title.innerHTML=
            "<strong>"+tense.name+"</strong><br><small>"+tense.rule+"</small>";

        tr.appendChild(title);

        cells[row]=[];

        /* ---------- VERBS ---------- */

        for(let col=0;col<8;col++){

            const td=document.createElement("td");

            const input=document.createElement("input");

            input.type="text";

            input.dataset.row=row;
            input.dataset.col=col;

            td.appendChild(input);

            tr.appendChild(td);

            cells[row][col]=input;

        }

        /* ---------- SIGNAL WORD ---------- */

        const td=document.createElement("td");

        const input=document.createElement("input");

        input.type="text";

        input.setAttribute(
            "list",
            "signalList"
        );

        input.dataset.row=row;
        input.dataset.col=8;

        td.appendChild(input);

        tr.appendChild(td);

        cells[row][8]=input;

        tableBody.appendChild(tr);

    });

    createSignalList();

}


/* ===========================================================
   DATALIST
=========================================================== */

function createSignalList(){

    let list=document.getElementById("signalList");

    if(list) list.remove();

    list=document.createElement("datalist");

    list.id="signalList";

    signalWords.forEach(word=>{

        const option=document.createElement("option");

        option.value=word;

        list.appendChild(option);

    });

    document.body.appendChild(list);

}


/* ===========================================================
   CHECK ANSWERS
=========================================================== */

const checkBtn = document.getElementById("checkBtn");
const resetBtn = document.getElementById("resetBtn");
const solutionBtn = document.getElementById("solutionBtn");

const score = document.getElementById("score");
const percent = document.getElementById("percent");


function clearSolutions(){

    document.querySelectorAll(".solution").forEach(e=>e.remove());

}


function updateStatistics(correct,total){

    score.textContent = `${correct} / ${total}`;

    percent.textContent =
        `${Math.round(correct/total*100)} %`;

}


function normalize(str){

    return str
        .trim()
        .replace(/\s+/g," ")
        .toLowerCase();

}


function checkAnswers(){

    clearSolutions();

    let correct = 0;

    const total = selectedTenses.length * 9;


    selectedTenses.forEach((tense,row)=>{

        /* ---------------- VERBS ---------------- */

        for(let col=0;col<8;col++){

            const input = cells[row][col];

            input.classList.remove("correct","wrong");

            const user =
                input.value.trim().toLowerCase();

            const solution =
                tense.forms[col].toLowerCase();


if (normalize(user) === normalize(solution)) {

    input.classList.add("correct");
    correct++;

} else {

    input.classList.add("wrong");

    const div = document.createElement("div");
    div.className = "solution";
    div.textContent = "✔ " + tense.forms[col];

    input.parentElement.appendChild(div);

}
}

        /* ---------------- SIGNAL WORD ---------------- */

        const input = cells[row][8];

        input.classList.remove("correct","wrong");

        const user =
            input.value.trim().toLowerCase();

        const ok =
            tense.signals.some(
                signal =>
                    signal.toLowerCase()===user
            );

        if(ok){

            input.classList.add("correct");

            correct++;

        }else{

            input.classList.add("wrong");

            const div=document.createElement("div");

            div.className="solution";

            div.textContent =
                "✔ " + tense.signals.join(" / ");

            input.parentElement.appendChild(div);

        }

    });


    updateStatistics(correct,total);

}


checkBtn.addEventListener(

    "click",

    checkAnswers

);



/* ===========================================================
   RESET
=========================================================== */

function resetExercise(){

    clearSolutions();

    cells.forEach(row=>{

        row.forEach(cell=>{

            cell.value="";

            cell.classList.remove(

                "correct",
                "wrong"

            );

        });

    });

const total = selectedTenses.length * 9;

score.textContent = `0 / ${total}`;

    percent.textContent="0 %";

}


resetBtn.addEventListener(

    "click",

    resetExercise

);




/* ===========================================================
   REVEAL ANSWERS
=========================================================== */

function revealAnswers(){

    resetExercise();

    selectedTenses.forEach((tense,row)=>{

        for(let col=0;col<8;col++){

            cells[row][col].value =
                tense.forms[col];

        }

        cells[row][8].value =
            tense.signals[0];

    });

}


solutionBtn.addEventListener(

    "click",

    revealAnswers

);

/* ===========================================================
   LOCAL STORAGE
=========================================================== */

const STORAGE_KEY =
    `mistudia_selected_tenses_${currentLanguage}`;

function saveSelection(){

    localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify(selectedIndices)
    );

}

function loadSelection(){

    const saved = localStorage.getItem(STORAGE_KEY);

    if(!saved) return;

    const indices = JSON.parse(saved);

    document
        .querySelectorAll("#tenseSelection input")
        .forEach(cb=>{

            cb.checked =
                indices.includes(
                    Number(cb.dataset.index)
                );

        });

}

loadSelection();


/* ===========================================================
   URL PARAMETERS
   example:
   trainer.html?tenses=0,2,4
=========================================================== */

function applyURLParameters(){

    const params =
        new URLSearchParams(window.location.search);

    if(!params.has("tenses")) return;

    const selected =
        params.get("tenses")
              .split(",")
              .map(Number);

    document
        .querySelectorAll("#tenseSelection input")
        .forEach(cb=>{

            cb.checked =
                selected.includes(
                    Number(cb.dataset.index)
                );

        });

}

applyURLParameters();



/* ===========================================================
   KEYBOARD NAVIGATION
=========================================================== */

document.addEventListener("keydown",e=>{

    if(document.activeElement.tagName!=="INPUT")
        return;

    const input=document.activeElement;

    const row=Number(input.dataset.row);
    const col=Number(input.dataset.col);

    switch(e.key){

        case "ArrowDown":

            e.preventDefault();

            if(row<cells.length-1)
                cells[row+1][col].focus();

        break;


        case "ArrowUp":

            e.preventDefault();

            if(row>0)
                cells[row-1][col].focus();

        break;


        case "ArrowLeft":

            e.preventDefault();

            if(col>0)
                cells[row][col-1].focus();

        break;


        case "ArrowRight":

            e.preventDefault();

            if(col<8)
                cells[row][col+1].focus();

        break;


        case "Enter":

            e.preventDefault();

            if(e.shiftKey){

                if(row>0)
                    cells[row-1][col].focus();

            }else{

                if(row<cells.length-1)
                    cells[row+1][col].focus();

            }

        break;

    }

});



/* ===========================================================
   REMOVE RED COLOR WHILE TYPING
=========================================================== */

document.addEventListener("input",e=>{

    if(e.target.tagName!=="INPUT")
        return;

    e.target.classList.remove("wrong");
    e.target.classList.remove("correct");

});

