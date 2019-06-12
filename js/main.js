window.onload = function() {

    // Open and close sidebar
    document.getElementById("logo").addEventListener("click", function(){
        if (document.getElementById("sidebar").style.left === "-100%") {
            document.getElementById("sidebar").style.left = "0";
            document.getElementById("close").style.transform = "translateX(0)";
            document.getElementById("open").style.transform = "translateX(100%)";
        } else {
            document.getElementById("sidebar").style.left = "-100%";
            document.getElementById("close").style.transform = "translateX(-100%)";
            document.getElementById("open").style.transform = "translateX(0)";
        }
    });

}