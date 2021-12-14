var counter = localStorage.getItem("samnt");
var gcounter = localStorage.getItem("gpuamnt");
document.getElementById("ngpu").innerHTML = gcounter;
var ucounter = document.getElementById("hi").innerHTML = counter;
localStorage.setItem("shopamnt", Number(document.getElementById("hi").innerHTML));
var price = 100;
var price2 = 500;
var price3 = 1000;
var GPU = document.getElementById("gp");
GPU.addEventListener("click", addGPU);
function addGPU() {
    var purchase = document.getElementById("hi").innerHTML;
    var num = Number(purchase);
    let hello = document.getElementById("hide")
    if (num < price) {
        hello.style.display = "block";
    } 
    else {
        num = num - price;
        document.getElementById("hi").innerHTML = num;
        gum = Number(document.getElementById("ngpu").innerHTML) + 1;
        document.getElementById("ngpu").innerHTML = gum;
        localStorage.setItem("shopamnt", Number(document.getElementById("hi").innerHTML));
        localStorage.setItem("gpuamnt", Number(document.getElementById("ngpu").innerHTML));
}
var homie = document.getElementById("homebtn");
homie.addEventListener("click", saveNum);
    function saveNum(){
        localStorage.setItem("shopamnt", Number(document.getElementById("hi").innerHTML));
        localStorage.setItem("gpuamnt", document.getElementById("ngpu").value);
    }
}
var AM = document.getElementById("auto");
AM.addEventListener("click", unhideMiner);
function unhideMiner() {
    var purchase = document.getElementById("hi").innerHTML;
    var num = Number(purchase);
    let hello = document.getElementById("hide")
    if (num < price2) {
        hello.style.display = "block";
        localStorage.setItem("shopamnt", Number(document.getElementById("hi").innerHTML));
        localStorage.setItem("gpuamnt", Number(document.getElementById("ngpu").innerHTML));
    } 
    else {
        num = num - price2;
        document.getElementById("hi").innerHTML = num;
        aminer = 1;
        localStorage.setItem("aminer", aminer);
        localStorage.setItem("shopamnt", Number(document.getElementById("hi").innerHTML));
        localStorage.setItem("gpuamnt", Number(document.getElementById("ngpu").innerHTML));
    }}
    var AU = document.getElementById("aup");
AU.addEventListener("click", upgradeMiner);
function upgradeMiner() {
    var purchase = document.getElementById("hi").innerHTML;
    var num = Number(purchase);
    let hello = document.getElementById("hide")
    if (num < price3) {
        hello.style.display = "block";
        localStorage.setItem("shopamnt", Number(document.getElementById("hi").innerHTML));
        localStorage.setItem("gpuamnt", Number(document.getElementById("ngpu").innerHTML));
    } 
    else {
        num = num - price3;
        document.getElementById("hi").innerHTML = num;
        uminerscaler = 500;
        uminer = uminerscaler - 10;
        localStorage.setItem("uminer", uminer);
        localStorage.setItem("shopamnt", Number(document.getElementById("hi").innerHTML));
        localStorage.setItem("gpuamnt", Number(document.getElementById("ngpu").innerHTML));
    }}
    window.addEventListener("beforeunload", save());
    function save() {
        localStorage.setItem("uminer", uminer);
        localStorage.setItem("shopamnt", Number(document.getElementById("hi").innerHTML));
        localStorage.setItem("gpuamnt", Number(document.getElementById("ngpu").innerHTML));
    }
