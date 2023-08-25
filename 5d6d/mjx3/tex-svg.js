var jss = document.createElement("script");
//jss.src = "https://unpkg.com/mathjax@3.2.2/es5/tex-svg.js";
jss.src = "https://cdn.bootcdn.net/ajax/libs/mathjax/3.2.2/es5/tex-svg.min.js";
document.getElementsByTagName("head")[0].appendChild(jss);

var mee = document.createElement("meta");
mee.name = "viewport";
mee.content = "width=device-width, initial-scale=1";
document.getElementsByTagName("head")[0].appendChild(mee);

function addsearch() {
    var hddiv = document.querySelector("#header > div");
    var sch = document.createElement("div");
    sch.style = "float:right; color:aliceblue; background-color:rgb(13,35,69); font-size: 1.5em; font-weight:700;"
    sch.innerHTML = `
        <p style="text-align: center; margin-top: 5px;">Search:</p>
        <a href="search.html" target="_blank" style="float: right; color: inherit; line-height: 30px; margin: 5px 0; padding: 0px 0.5em;">\u5168\u6587</a>
        <a href="titles.html" target="_blank" style="float: right; color: inherit; line-height: 30px; margin: 5px 0; padding: 0px 0.5em; border-right: 2px solid;">\u6807\u9898</a>
        `;
    hddiv.appendChild(sch);
}
document.addEventListener('DOMContentLoaded',addsearch)
