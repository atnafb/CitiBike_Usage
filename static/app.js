function adjustTableauSize() {
    var vizElement = document.querySelector('.tableauViz');
    if (!vizElement) return; 

    var screenWidth = window.innerWidth;

    if (screenWidth > 1400) {
        vizElement.style.width = '100%';
        vizElement.style.height = '85vh';
    } else if (screenWidth > 800) {
        vizElement.style.width = '100%';
        vizElement.style.height = '75vh';
    } else {
        vizElement.style.width = '100%';
        vizElement.style.height = '90vh';
    }
}

window.onload = adjustTableauSize;
window.onresize = adjustTableauSize;