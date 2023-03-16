var jss = document.createElement("script");
jss.src = "https://unpkg.com/mathjax@3.2.2/es5/tex-svg.js";
document.getElementsByTagName("head")[0].appendChild(jss);

var mee = document.createElement("meta");
mee.name = "viewport";
mee.content = "width=device-width, initial-scale=1";
document.getElementsByTagName("head")[0].appendChild(mee);

function addsearch() {
    var hddiv = document.querySelector("#header > div");
    var sch = document.createElement("a");
    sch.href = "search.html";
    sch.target = "_blank";
    sch.innerHTML = "Search";
    sch.style = "float:right; color:aliceblue; background-color:rgb(13,35,69); font-weight:700; font-size:1.5em; line-height:80px; padding: 0 1em;"
    hddiv.appendChild(sch);
}
document.addEventListener('DOMContentLoaded',addsearch)
