document.addEventListener("DOMContentLoaded", function () {
    var divElement = document.getElementById("viz1741309168311");
    var vizElement = divElement.getElementsByTagName("object")[0];

    function resizeViz() {
        if (window.innerWidth > 1200) {
            vizElement.style.minWidth = '1016px';
            vizElement.style.maxWidth = '100%';
            vizElement.style.minHeight = '1014px';
            vizElement.style.maxHeight = (window.innerWidth * 0.75) + 'px';
        } else if (window.innerWidth > 800) {
            vizElement.style.minWidth = '1016px';
            vizElement.style.maxWidth = '100%';
            vizElement.style.minHeight = '1014px';
            vizElement.style.maxHeight = (window.innerWidth * 0.75) + 'px';
        } else {
            vizElement.style.minWidth = '1016px';
            vizElement.style.maxWidth = '100%';
            vizElement.style.minHeight = '1250px';
            vizElement.style.maxHeight = (window.innerWidth * 1.77) + 'px';
        }
    }

    resizeViz();
    window.addEventListener('resize', resizeViz);

    var scriptElement = document.createElement('script');
    scriptElement.src = 'https://public.tableau.com/javascripts/api/viz_v1.js';
    vizElement.parentNode.insertBefore(scriptElement, vizElement);
});