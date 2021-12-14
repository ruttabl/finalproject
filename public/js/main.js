var BTN = document.getElementById("gbutton");
var ABTN = document.getElementById("abutton");
var gcounter = localStorage.getItem("gpuamnt");
var scaler = localStorage.getItem("uminer");
var auto = localStorage.getItem("aminer");
document.getElementById("gpuamnt").innerHTML = gcounter;
BTN.addEventListener("click", addNum);
var shopamount = localStorage.getItem("shopamnt");
var ucounter = document.getElementById("amnt").innerHTML = shopamount;
function addNum() { 
    var counter = document.getElementById("amnt").innerHTML
    var gum = Number(counter) + 1 * gcounter;
    document.getElementById("amnt").innerHTML = gum;
    localStorage.setItem("samnt", Number(document.getElementById("amnt").innerHTML));
}
var homie = document.getElementById("shopbtn");
homie.addEventListener("click", saveNum);
    function saveNum(){
        localStorage.setItem("samnt", Number(document.getElementById("amnt").innerHTML));
    }
    
var button = document.getElementById("abutton");
button.innerHTML = "Start Auto Clicker"
button.addEventListener ("click", function() {
     if(stop===0) {
    stop = 1
    button.innerHTML = "Start Auto Clicker"
    } else if(stop===1) {
    stop = 0
    button.innerHTML = "Stop Auto Clicker"
    }
    });
var bttn = document.getElementById("gbutton");
var stop = 1;
function click() {
    if(stop===0) {
    bttn.click();
}
};
setInterval("click()", Number(scaler));
BTN.addEventListener("click", autoCheck);
function autoCheck(){
    if(auto = 0){
        BTN.style.display = "block";
        ABTN.style.display = "none";
    }
    else{
        ABTN.style.display = "block";
        BTN.style.display = "none";
    }
}
window.addEventListener("onbeforeunload", save());
function save() {
    localStorage.setItem("samnt", Number(document.getElementById("amnt").innerHTML));
}


