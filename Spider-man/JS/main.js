  
var bodyStyles = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: '',
  height: '100vh',
  margin: '0',
  backgroundImage: 'url("/IMAG/Spiderman.png")'
};

var buttonStyles = {
  padding: '10px 20px',
  backgroundColor: '#ccc',
  border: 'none',
  cursor: 'pointer',
  marginBottom: '10px'
};

var superheroNameStyles = {
  fontSize: '24px',
  fontWeight: 'bold',
  marginBottom: '20px'
};

var buttonContainerStyles = {
  display: 'flex',
  justifyContent: 'center',
  
};

var infoButtonStyles = {
  margin: '0 10px',
  padding: '10px'
};

var infoStyles = {
  display: 'none',
  backgroundColor: '#ffffff',
  padding: '10px',
  marginTop: '10px'
};


var body = document.body;
Object.assign(body.style, bodyStyles);

var buttons = document.getElementsByClassName('infoButton');
for (var i = 0; i < buttons.length; i++) {
  Object.assign(buttons[i].style, buttonStyles);
}

var superheroName = document.getElementById('superheroName');
Object.assign(superheroName.style, superheroNameStyles);

var buttonContainer = document.getElementById('buttonContainer');
Object.assign(buttonContainer.style, buttonContainerStyles);

var infoButtons = document.getElementsByClassName('info');
for (var i = 0; i < infoButtons.length; i++) {
  Object.assign(infoButtons[i].style, infoStyles);
}

function showDate() {
  var dateButton = document.getElementById("dateButton");
  dateButton.style.backgroundColor = 'blue';
  dateButton.style.color = 'white';
  dateButton.style.display = 'flex';
  dateButton.style.justifyContent = 'center';

  var dateText = document.getElementById("dateText");
  dateText.innerHTML = new Date();
}

var button1 = document.getElementById("button1");
var button2 = document.getElementById("button2");
var button3 = document.getElementById("button3");
var button4 = document.getElementById("button4");
var button5 = document.getElementById("button5");

var info1 = document.getElementById("info1");
var info2 = document.getElementById("info2");
var info3 = document.getElementById("info3");
var info4 = document.getElementById("info4");
var info5 = document.getElementById("info5");

function showInfo(infoElement) {
  var infoElements = document.getElementsByClassName("info");
  for (var i = 0; i < infoElements.length; i++) {
      infoElements[i].style.display = "none";
  }

  infoElement.style.display = "block";
}

button1.onclick = function() {
  showInfo(info1);
};

button2.onclick = function() {
  showInfo(info2);
};

button3.onclick = function() {
  showInfo(info3);
};

button4.onclick = function() {
  showInfo(info4);
};

button5.onclick = function() {
  showInfo(info5);
};
