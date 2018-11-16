const { remote } = require('electron');
const exitProgram = function () {
  const window = remote.getCurrentWindow();
  window.close();
}
const exitButton = document.getElementById("exit");
exitButton.addEventListener("click", exitProgram, false);
