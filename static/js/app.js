document.addEventListener("DOMContentLoaded", function () {
    var divElement = document.getElementById("vizContainer");
    var vizElement = divElement.getElementsByTagName("object")[0];

    if (divElement.offsetWidth > 1200) {
        vizElement.style.width = "1200px";
        vizElement.style.height = "800px";
    } else if (divElement.offsetWidth > 800) {
        vizElement.style.width = "1000px";
        vizElement.style.height = "700px";
    } else {
        vizElement.style.width = "100%";
        vizElement.style.height = "600px";
    }

    var scriptElement = document.createElement("script");
    scriptElement.src = "https://public.tableau.com/javascripts/api/viz_v1.js";
    vizElement.parentNode.insertBefore(scriptElement, vizElement);
});