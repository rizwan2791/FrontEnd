function removeChar() {
    var a = document.getElementById("button").value;
    a = a.replace(/[^a-zA-Z ]/g, "");
    b=document.querySelector("input").value;
    console.log(b);
    b.innerText=a;
    document.getElementById("result").innerHTML = a;
  }