function buttonClick(){

    var x = document.getElementById("navID");
    if (x.style.display === "none") {
      x.style.display = "block";     
      x.style.position = "relative";
      x.style.textAlign = "center";
      x.style.width = "100%";
      x.style.display = "flex";
      x.style.flexDirection = "column";
      x.style.backgroundColor = "#EC550F";

    } else {
      x.style.display = "none";
    }
}