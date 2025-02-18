let questions = [
    {
        question: "What is HTML?",
        options: {
            a: "Hyper Text Markup Language",
            b: "Hyperlinks and Text Markup Language",
            c: "Home Tool Markup Language",
            d: "Hyper Transfer Markup Language",
        },
        correct_answer: "a",
    },
    {
        question: "What does CSS stand for?",
        options: {
            a: "Computer Style Sheets",
            b: "Cascading Style Sheets",
            c: "Creative Style Sheets",
            d: "Colorful Style Sheets",
        },
        correct_answer: "b",
    },
    {
        question:
            "Which programming language is used to add interactivity to a webpage?",
        options: {
            a: "Java",
            b: "Python",
            c: "JavaScript",
            d: "C++",
        },
        correct_answer: "c",
    },
];
const queBox = document.getElementById("queBox");
const InputOption = document.querySelectorAll(".InputOption");

let index = 0;
let total = questions.length;
let right = 0,
    wrong = 0;
const loadData = () => {
    if (index == total) {
        end();
        return;
    }
    reset();
    const data = questions[index];
    queBox.innerHTML = `${index + 1}) ${data.question}`;
    InputOption[0].nextElementSibling.innerHTML = `1) ${data.options.a}`;
    InputOption[1].nextElementSibling.innerHTML = `2) ${data.options.b}`;
    InputOption[2].nextElementSibling.innerHTML = `3) ${data.options.c}`;
    InputOption[3].nextElementSibling.innerHTML = `4) ${data.options.d}`;
};

const SubmitQuiz = () => {
    const data = questions[index];
    const ans = getAnswer();
    console.log(data.correct_answer);
    if (ans == null) {
        alert(" Please select an option");
    }
    console.log(ans, data.correct_answer);
    if (ans === data.correct_answer) {
        right++;
    } else {
        wrong++;
    }
    index++;
    loadData();

    return;
};

const getAnswer = () => {
    for (const input of InputOption) {
        if (input.checked) {
            return input.value;
        }
    }
    return null;
};

const reset = () => {
    for (const input of InputOption) {
        
        input.checked = false;
        
    }
    return
};
const end = () => {
    document.querySelector(".box").innerHTML = `
    <h2>Quiz is Completed 🎉</h2>
    <h3>${right} / ${total} correct</h3>
`;
};
loadData();
