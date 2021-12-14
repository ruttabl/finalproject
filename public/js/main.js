var BTN = document.getElementById("gbutton");
var ABTN = document.getElementById("abutton");
var gcounter = localStorage.getItem("gpuamnt");
var scaler = localStorage.getItem("uminer");
var auto = localStorage.getItem("aminer");
BTN.addEventListener("click", addNum);
var shopamount = localStorage.getItem("shopamnt");
var ucounter = document.getElementById("amnt").innerHTML = shopamount;
function addNum() { 
    var counter = parseInt(document.getElementById("amnt").innerHTML)
    if (gcounter > 0){
        document.getElementById("gpuamnt").innerHTML = gcounter;
        var gum = parseInt(counter) + 1 * gcounter;
    }
    else {
        var gum = parseInt(counter) + 1;
    }
    document.getElementById("amnt").innerHTML = gum;
    localStorage.setItem("samnt", Number(document.getElementById("amnt").innerHTML));
}
var homie = document.getElementById("shopbtn");
homie.addEventListener("click", saveNum);
    function saveNum(){
        localStorage.setItem("samnt", Number(document.getElementById("amnt").innerHTML));
    }
    
// var button = document.getElementById("abutton");
// button.innerHTML = "Start Auto Clicker"
// button.addEventListener ("click", function() {
//      if(stop===0) {
//     stop = 1
//     button.innerHTML = "Start Auto Clicker"
//     } else if(stop===1) {
//     stop = 0
//     button.innerHTML = "Stop Auto Clicker"
//     }
//     });
// var bttn = document.getElementById("gbutton");
// var stop = 1;
// function click() {
//     if(stop===0) {
//     bttn.click();
// }
// };
// setInterval("click()", Number(scaler));
// BTN.addEventListener("click", autoCheck);
// function autoCheck(){
//     if(auto = 0){
//         BTN.style.display = "block";
//         ABTN.style.display = "none";
//     }
//     else{
//         ABTN.style.display = "block";
//         BTN.style.display = "none";
//     }
// }
// window.addEventListener("onbeforeunload", save());
// function save() {
//     localStorage.setItem("samnt", Number(document.getElementById("amnt").innerHTML));
// }


