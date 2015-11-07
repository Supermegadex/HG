var people = new Array(0);

function nextChar() {
  temp.name = document.querySelector("#name").value;
  temp.str = document.querySelector("#strSlider").value;
  temp.cha = document.querySelector("#chaSlider").value;
  
  people.push(temp);
  window.location.hash = "tab1";
  document.querySelector("#create").innerHTML = "<char-card></char-card>";
}