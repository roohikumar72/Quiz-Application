
const questions=[
    {
        question:"What mathematical concept is used to calculate the interest earned on savings in a bank?",
        options:["A) Probability","B) Geometry" ,"C) Compound Interest", "D) Ratio"],
        answer:2
    },
    {
        question:"Which mathematical concept is commonly used to describe the likelihood of an event happening?",
        options:["A) Geometry","B) Probability","C) Algebra","d) Arithmetic"],
        answer:1
    },
    {
        question:"What is the mathematical term for the ratio of the circumference of a circle to its diameter?",
        options:["A) Pi (π)","B) E (Euler's number)","C) Golden Ratio","D) Fibonacci Sequence"],
        answer:0
    },
    {
        question:"What is the term for the amount left after all expenses have been subtracted from income?",
        options:["A) Net Worth","B) Profit","C) Gross Income","D) Balance"],
        answer:1
    },
    {
        question:"Which mathematical principle is used to ensure fairness in dividing an estate among heirs?",
        options:["A) Game Theory","B) Probability","C) Division Algorithm","D) Fair Division"],
        answer:3
    },
    {
        question:"Which mathematical concept is used by GPS systems to calculate the shortest route between two points?",
        options:["A) Euclidean Geometry","B) Graph Theory","C) Calculus","D) Trigonometry"],
        answer:1
    },
    {
        question:"What mathematical concept do you use when arranging objects in a specific order, like books on a shelf?",
        options:["A) Multiplication","B) Combination","C) Division","D) Sequence"],
        answer:3
    },
    {
        question:"What concept is applied when you estimate the cost of items while shopping to stay within a budget?",
        options:["A) Estimation","B) Measurement","C) Addition","D) Probability"],
        answer:0
    },
    {
        question:"In decision theory, which concept is used to evaluate the impact of different choices when outcomes are uncertain?",
        options:["A) Linear Programming","B) Decision Trees","C) Expected Value","D) Game Theory"],
        answer:2
    },
    {
        question:"Which mathematical concept do you use when you determine the shortest path to walk between two points?",
        options:["A) distance","B) Statistics","C) Fraction","D) Displacement"],
        answer:3
    }
]
//selecting elements
const questionheading=document.querySelector("h1");
//check buttons
const checkboxes=document.querySelectorAll("input");
//labels
const optionsbox=document.querySelector(".opt");
const labels=document.querySelectorAll("label");
const label1 = document.querySelector('label[for="options1"]');
const label2 = document.querySelector('label[for="options2"]');
const label3 = document.querySelector('label[for="options3"]');
const label4 = document.querySelector('label[for="options4"]');
//buttons
const btn=document.querySelector("button");
const btn2=document.querySelector(".buttons");
const restart=document.querySelector("#restart");
const exit=document.querySelector("#exit");

btn2.style.display ='none';

//creating all the functions and logic for the dynamic load
let currentquestion=0;
let score=0;

const scorecal=(n)=>{
    if(n==questions[currentquestion-1].answer){
       score+=1;
    }
}
const gettingindex=()=>{
    for(i=0;i<checkboxes.length;i++){
        if(checkboxes[i].checked){
            return i;
        }
    }
}

const deselect=(n)=>{
    checkboxes[n].checked=false;
};

if(checkboxes.checked){
    deselect();
}

const load=(n)=>{
    const {question , options}=questions[n];
    console.log(question);
    questionheading.innerText= question;
    label1.innerText=options[0];
    label2.innerText=options[1];
    label3.innerText=options[2];
    label4.innerText=options[3];
}
load(currentquestion);
console.log(currentquestion);

labels.forEach(label => {
    label.addEventListener("click", () => {
        labels.forEach(lbl => lbl.style.backgroundColor = '');
        label.style.backgroundColor = '#f4ec80';
    }
);
}
);


  btn.addEventListener("click",()=>{
    labels.forEach(label=>label.style.backgroundColor= '')
  }
);

  //loading question and options
    btn.addEventListener("click",()=>{
        currentquestion=++currentquestion;
        const index=gettingindex();

        if(currentquestion<questions.length){
        console.log("clicked");
        load(currentquestion);
        console.log("currentquestion index after submit= ", currentquestion);
        console.log("ans of prev quest= ",questions[currentquestion-1].answer);
        console.log("index selected= ",index);
        deselect(index);
        scorecal(index);
        console.log("score= ",score);

       
    }
    else{
        scorecal(index);
        questionheading.innerText = `Quiz Complete! Your score is ${score} out of ${questions.length}.`;
        console.log("currentquestion index after submit= ", currentquestion);
        console.log("score= ", score);
        optionsbox.style.display = 'none';
        btn.style.display='none';
        btn2.style.display='initial';
    };
    }
   );

    restart.addEventListener("click",()=>{
      window.location.href='quiz.html'
    }
   );

    exit.addEventListener("click",()=>{
     window.location.href='index.html'
    }
   );



