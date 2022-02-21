

function setupTable(tableRow, tableCol){

	var count = 1;

	var obj = document.getElementById("cross_puzzle_table");
	var len = obj.rows.length;

	for (var i = 0; i < tableRow; i++) {

		var rowObj = obj.insertRow( i + len );

		for (var j= 0; j < tableCol; j++) {
			var temp = rowObj.insertCell(j);
			temp.innerHTML = count;
			count++;
		}
	}
}


function setColor(mapTable){

	// var temp = document.getElementsByTagName("td")[4];
	var temp = document.getElementById("cross_puzzle_table")
		    .getElementsByTagName("tbody")[0]
		    .getElementsByTagName("tr")[1]
		    .getElementsByTagName("td")[3];

	temp.style.background = "#231f20";
	console.log(temp);
}

row = 2
col = 4


mapTable = {
	"1" : [0,2],
}


setupTable(row, col);
setColor(mapTable);