import questions from "./questions";

function qCont(question, option, correctOptions){
    const qDiv = document.createElement("div");
    const qHead = document.createElement("h1");
    const qOption = document.createElement("div");
    qDiv.appendChild(qHead);
    qHead.appendChild(document.createTextNode(question));
    qDiv.appendChild(qOption);
    const res = options[correctOptions];
    for (const j of option){
        const oDiv = document.createElement("div");
        oDiv.textContent = j
        qOption.appendChild(oDiv);
        oDiv.addEventListener("click",function(){
            if (res == j){
                alert("Valid");
            }else{
                alert("Invalid");
            }
        });
    }
    return qDiv;
}

const mainCont = document.getElementById("app");
mainCont.appendChild(document.createTextNode("ghdqh"));
for (const i of questions){
    const qCard = qCont(i.question, i.options, i.correctOption);
    mainCont.appendChild(qCard);
}