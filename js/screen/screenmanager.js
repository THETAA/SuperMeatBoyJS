var currentScreen = 0
// 0 = Main Menu
// 1 = Game
// 2 = Best Times

function Update() {
	UpdateMainMenu();
	setTimeout(Update, 10);
}