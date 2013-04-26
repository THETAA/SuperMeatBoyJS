var canvas = document.getElementById('canvas');

canvas.width = 1366;
canvas.height = 700;

var context = canvas.getContext('2d');

var Level = 1;
var MaxLevel = 6;

var CurLevelName;
var CurLevelWidth;
var CurLevelHeight;

var CurLevelGras = [];
var CurLevelStone = [];

function init() {
	initMainMenu();
	Update();
	LoadLevel();
	context.drawImage(MeatBoy_Image, 10, 10);
}

function LoadLevel() {
	var ReadLevel;
	var ReadLevelGras = [];
	var ReadLevelStone = [];

	if (Level == 1) {
		ReadLevel = Level1;
		ReadLevelGras = Level1Gras;
		ReadLevelStone = Level1Stone;	
	} else if (Level == 2) {
		ReadLevel = Level2;
		ReadLevelGras = Level2Gras;
		ReadLevelStone = Level2Stone;	
	} else if (Level == 3) {
		ReadLevel = Level3;
		ReadLevelGras = Level3Gras;
		ReadLevelStone = Level3Stone;	
	} else if (Level == 4) {
		ReadLevel = Level4;
		ReadLevelGras = Level4Gras;
		ReadLevelStone = Level4Stone;	
	}
	

	CurLevelName = ReadLevel.name;
	CurLevelWidth = ReadLevel.width;
	CurLevelHeight = ReadLevel.height;

	CurLevelGras = ReadLevelGras;
	CurLevelStone = ReadLevelStone;

	console.log(CurLevelGras);
}

init();