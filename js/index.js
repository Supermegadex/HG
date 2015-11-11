var people = new Array( 0 );

function nextChar() {
  temp.name = document.querySelector( "#name" ).value;
  temp.str = document.querySelector( "#strSlider" ).value;
  temp.cha = document.querySelector( "#chaSlider" ).value;
  temp.int = document.querySelector( "#intSlider" ).value;
  temp.agi = document.querySelector( "#agiSlider" ).value;

  people.push( temp );
  document.querySelector("#create").innerHTML = "<char-card></char-card>";
  location.hash = "bdy";
      document.querySelector("#addToast").text = 'Person "' + temp.name + '" added to roster.';
      document.querySelector("#addToast").show();
}

function switchTab(i){
  document.querySelector('#app').selected = Number(i);
}
function done() {
  nextChar();
  document.querySelector("#cont3").innerHTML = "<paper-button onclick='start()'>Begin</paper-button>";
  switchTab(2);
  document.querySelector("#create").innerHTML = "";
}
function start() {
  document.querySelector("#cont1").innerHTML = "<play-card id='playCard' day='1' time='bloodbath'></play-card>";
  switchTab(0);
}