
function createKeyboard(allow_letters) {

	var userInputTag = "myUserInput";

	var table = document.getElementById("cross_puzzle_table");
	if (table != null) {
	    for (var i = 0; i < table.rows.length; i++) {
	        for (var j = 0; j < table.rows[i].cells.length; j++)
	        table.rows[i].cells[j].onclick = function () {
	            tableText(this);
	        };
	    }
	}

	function tableText(tableCell) {
	    tableCell.setAttribute("id", userInputTag);
		tableCell.style.background = "#e28743";
	    console.log(tableCell);
	}

	var keyboard = document.getElementById("myKeyboard");

	for (var i = 0; i < allow_letters.length; i++) {
		const button = document.createElement("button");
		button.innerHTML = allow_letters[i];
		// button.className = "button";
		

		button.onclick = function(obj){
			var temp = document.getElementById(userInputTag);
			
			console.log(temp);
			temp.innerHTML = this.innerHTML;
			temp.removeAttribute("id");
			console.log(temp);
		};

		keyboard.appendChild(button);
	}
}

function createRow(tableRow, tableCol){

	var count = 1;

	var obj = document.getElementById("cross_puzzle_table");
	var len = obj.rows.length;

	for (var i = 0; i < tableRow; i++) {

		var rowObj = obj.insertRow( i + len );

		for (var j= 0; j < tableCol; j++) {
			var temp = rowObj.insertCell(j);
			// temp.innerHTML = "-";
			temp.innerHTML = count;
			count++;
		}
	}
}

function createInputTable(tRow, tCol) {

	var count = 1;

	var obj = document.getElementById("cross_puzzle_table");
	var len = obj.rows.length;

	for (var i = 0; i < tRow; i++) {

		var rowObj = obj.insertRow( i + len );

		for (var j= 0; j < tCol; j++) {
			var temp = rowObj.insertCell(j);
			// temp.innerHTML = "-";
			var x = document.createElement("INPUT");
			x.setAttribute("type", "text");
			x.setAttribute("maxlength", "1");
			x.placeholder = count;
			temp.appendChild(x);
			// temp.innerHTML = count;
			count++;
		}
	}

}

function setColor(row, pos, value){

	// var temp = document.getElementsByTagName("td")[4];
	var temp = document.getElementById("cross_puzzle_table")
		    .getElementsByTagName("tbody")[0]
		    .getElementsByTagName("tr")[row]
		    .getElementsByTagName("td")[pos];

	temp.style.background = "#231f20";
	temp.innerHTML = value;
	// console.log(temp);
}

function setNumAndColor(key, data){

	var len = data[0];
	var row = data[1];
	var startPos = data[2];
	var vector = data[3];

	

	// console.log(len);

	// side by side
	if(vector == 0){

		// len = startPos + data[0];
		len += startPos;
		count = 0;
		for (var i = startPos; i < len; i++) {
			if(count>0){
				key = "";
			}
			setColor(row,i,key);
			count++;
		}
	}
	// up-down
	else if (vector == 1){
		
		len += row;
		count = 0;

		for (var i = row; i < len; i++) {
			if(count>0){
				key = "";
			}
			setColor(i, startPos, key);
			count++;
		}
	}
	else{
		console.log("error");
	}	
}

function runner(data){

	// var keys = Object.keys(data);
	// console.log(keys);
	
	var keys = data;


	for (var i = 0; i < keys.length; i++) {
		// var key = keys[i];
		// var temp = data[key];
		var temp = data[i];
		var key = temp[4];
		console.log(temp);

		setNumAndColor(key, temp);
	}

}

row = 3
col = 3

// key : word length, row, starting position, , vector
// vector - 0 -> side by side
// vector - 1 -> up-down

mapTable = {

	"1" : [3, 0, 0, 0],
	"2" : [2, 0, 2, 1],
	"3" : [3, 1, 2, 0],
	"4" : [4, 1, 4, 1],

	"5" : [3, 2, 4, 0],
	// "5" : [3, 2, 4, 1],

	"6" : [3, 2, 6, 1],

	"7" : [4, 3, 6, 0],
	// "7" : [2, 3, 6, 1],

	"8" : [3, 3, 9, 1],
	"9" : [3,4,2,0],
	"9" : [3,4,2,1]
}


badTable = [
	[3, 0, 0, 0, "১"],
	[2, 0, 2, 1, "২"],
	[3, 1, 2, 0, "৩"],
	[4, 1, 4, 1, "৪"],

	[3, 2, 4, 0, "৫"],
	[3, 2, 4, 1, "৫"],

	[3, 2, 6, 1, "৬"],

	[4, 3, 6, 0, "৭"],
	[2, 3, 6, 1, "৭"],

	[3, 3, 9, 1, "৮"],
	[3,4,2,0, "৯"],
	[3,4,2,1, "৯"]
]


keyboardLetters = [
	"ক", "ল", "ম"
];

// createInputTable(row, col);
createRow(row, col);
createKeyboard(keyboardLetters);
// runner(badTable);
