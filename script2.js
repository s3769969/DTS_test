var list = {
"REC": {
"PAT": [{
"PERSON_ID": 733924.000000,
"ENCNTR_ID": 0.000000,
"MRN": "Active",
"NAME_FULL_FORMATTED": "Git, Hub ",
"BIRTH_DT_TM": "\/Date(0000-00-00T00:00:00.000+00:00)\/",
"SEX_CD": 0.000000,
"RESULT": "1",
"RESULT_FLAG": "res-low"
}, {
"PERSON_ID": 2607950.000000,
"ENCNTR_ID": 0.000000,
"MRN": "Active",
"NAME_FULL_FORMATTED": "John, Luke ",
"BIRTH_DT_TM": "\/Date(0000-00-00T00:00:00.000+00:00)\/",
"SEX_CD": 0.000000,
"RESULT": "10",
"RESULT_FLAG": "res-normal"
}, {
"PERSON_ID": 2601764.000000,
"ENCNTR_ID": 0.000000,
"MRN": "Active",
"NAME_FULL_FORMATTED": "Pierce, Pierce ",
"BIRTH_DT_TM": "\/Date(0000-00-00T00:00:00.000+00:00)\/",
"SEX_CD": 0.000000,
"RESULT": "10",
"RESULT_FLAG": "res-normal"
}, {
"PERSON_ID": 2605750.000000,
"ENCNTR_ID": 0.000000,
"MRN": "Active",
"NAME_FULL_FORMATTED": "Hello, World ",
"BIRTH_DT_TM": "\/Date(0000-00-00T00:00:00.000+00:00)\/",
"SEX_CD": 0.000000,
"RESULT": "10",
"RESULT_FLAG": "res-normal"
}, {
"PERSON_ID": 2605755.000000,
"ENCNTR_ID": 0.000000,
"MRN": "Active",
"NAME_FULL_FORMATTED": "Saint, Vincent ",
"BIRTH_DT_TM": "\/Date(0000-00-00T00:00:00.000+00:00)\/",
"SEX_CD": 0.000000,
"RESULT": "10",
"RESULT_FLAG": "res-normal"
}, {
"PERSON_ID": 2677951.000000,
"ENCNTR_ID": 0.000000,
"MRN": "Active",
"NAME_FULL_FORMATTED": "Jeffrey, Jeff ",
"BIRTH_DT_TM": "\/Date(0000-00-00T00:00:00.000+00:00)\/",
"SEX_CD": 0.000000,
"RESULT": "10",
"RESULT_FLAG": "res-normal"
}, {
"PERSON_ID": 2631972.000000,
"ENCNTR_ID": 1.000000,
"MRN": "Active",
"NAME_FULL_FORMATTED": "Han, Solo ",
"BIRTH_DT_TM": "\/Date(0000-00-00T00:00:00.000+00:00)\/",
"SEX_CD": 0.000000,
"RESULT": "1000",
"RESULT_FLAG": "res-severe"
}, {
"PERSON_ID": 2637956.000000,
"ENCNTR_ID": 2.000000,
"MRN": "Active",
"NAME_FULL_FORMATTED": "Armstrong, Niel ",
"BIRTH_DT_TM": "\/Date(0000-00-00T00:00:00.000+00:00)\/",
"SEX_CD": 0.000000,
"RESULT": "100",
"RESULT_FLAG": "res-high"
}, {
"PERSON_ID": 873923.000000,
"ENCNTR_ID": 0.000000,
"MRN": "Active",
"NAME_FULL_FORMATTED": "Ice, Tea ",
"BIRTH_DT_TM": "\/Date(0000-00-00T00:00:00.000+00:00)\/",
"SEX_CD": 0.000000,
"RESULT": "100",
"RESULT_FLAG": "res-high"
}, {
"PERSON_ID": 893723.000000,
"ENCNTR_ID": 0.000000,
"MRN": "Active",
"NAME_FULL_FORMATTED": "Chapelle, Dave ",
"BIRTH_DT_TM": "\/Date(0000-00-00T00:00:00.000+00:00)\/",
"SEX_CD": 0.000000,
"RESULT": "1",
"RESULT_FLAG": "res-low"
}]
}};

//import { hello } from './module.js';
//import list from './script.js';
//import list from 'http://127.0.0.1:5500/script.js';

function createOption(ddl, text, value) {
        var opt = document.createElement('option');
        opt.value = value;
        opt.text = text;
	if (!value.endsWith("FLAG")){
		ddl.options.add(opt);
	}
    }

function createOptions(optionsArray, ddl) {
	for (i = 0; i < optionsArray.length; i++) {
		createOption(ddl, optionsArray[i], optionsArray[i]);
	}
}
	
function constructDropDown() {
	//console.log("creating drop down");
	const headings = Object.keys(list.REC.PAT[0]);
	var options = document.getElementById("filterDropDown");
	options.innerHTML = "";
	createOptions(headings, options);
}

function constructTable(selector) {
	//console.log("creating table");
	//console.log(list.REC.PAT[0]);
	document.getElementById("table").innerHTML = "";
	//style table element
    var tbl = document.getElementById("table");
	tbl.style.width = '150px';
	tbl.style.border = '1px solid black';
	const headings = Object.keys(list.REC.PAT[0]);
	
	//fill table cells
	for (let i = 0; i < list.REC.PAT.length; i++) {
		const tr = tbl.insertRow();
		for (let j = 0; j < headings.length; j++) {
			td = tr.insertCell();
			td.appendChild(document.createTextNode(list.REC.PAT[i][headings[j]]));
			td.style.border = '1px solid black';
			if(j+1 < headings.length){
				if(headings[j+1].endsWith("FLAG")){
					td.className = list.REC.PAT[i][headings[j+1]];
				}
			}
			//if(headings[j].endsWith("FLAG")){
			//	td.className = "hidden";
			//}
		}
	}
	
	//create table headers
	var header = tbl.createTHead();
	var row = header.insertRow(0);
	var cell;
	for (let i = 0; i < headings.length; i++) {
		cell = row.insertCell();
		cell.onclick =  function() { sortTable(i); };
		cell.innerHTML = headings[i];
		cell.style.fontWeight = 'bold';
	}
	
	//hide flag columns
	var tableRows = document.getElementById("table").getElementsByTagName("tr");
	for (i = 0; i < tableRows.length; i++) {
		for (var j = 0; j < tableRows[i].cells.length; j++) {
			tableRows[i].cells[j].style.display = "";
			if (headings[j].endsWith("FLAG"))
				tbl.rows[i].cells[j].style.display = "none";
			}
	}
	document.body.appendChild(tbl);
	constructDropDown();
}


function searchTable(selector) {
	//console.log("searching table");
	var input, filter, table, tr, td, i, txtValue, col;
	input = document.getElementById("searchBar");
	filter = input.value.toUpperCase();
	col = document.getElementById("filterDropDown").selectedIndex;
	table = document.getElementById("table");
	tr = table.getElementsByTagName("tr");
	for (i = 1; i < tr.length; i++) {
		td = tr[i].getElementsByTagName("td")[col];
		if (td) {
			txtValue = td.textContent || td.innerText;
		if (txtValue.toUpperCase().indexOf(filter) > -1) {
			tr[i].style.display = "";
		} else {
			tr[i].style.display = "none";
		}
		}       
	  }
}

function sortTable(n) {
  var table, rows, switching, i, x, y, shouldSwitch, dir, switchcount = 0;
  table = document.getElementById("table");
  switching = true;
  // Set the sorting direction to ascending:
  dir = "asc";
  /* Make a loop that will continue until
  no switching has been done: */
  while (switching) {
    // Start by saying: no switching is done:
    switching = false;
    rows = table.rows;
    /* Loop through all table rows (except the
    first, which contains table headers): */
    for (i = 1; i < (rows.length - 1); i++) {
      // Start by saying there should be no switching:
      shouldSwitch = false;
      /* Get the two elements you want to compare,
      one from current row and one from the next: */
      x = rows[i].getElementsByTagName("TD")[n];
      y = rows[i + 1].getElementsByTagName("TD")[n];
      /* Check if the two rows should switch place,
      based on the direction, asc or desc: */
      if (dir == "asc") {
        if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
          // If so, mark as a switch and break the loop:
          shouldSwitch = true;
          break;
        }
      } else if (dir == "desc") {
        if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {
          // If so, mark as a switch and break the loop:
          shouldSwitch = true;
          break;
        }
      }
    }
    if (shouldSwitch) {
      /* If a switch has been marked, make the switch
      and mark that a switch has been done: */
      rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
      switching = true;
      // Each time a switch is done, increase this count by 1:
      switchcount ++;
    } else {
      /* If no switching has been done AND the direction is "asc",
      set the direction to "desc" and run the while loop again. */
      if (switchcount == 0 && dir == "asc") {
        dir = "desc";
        switching = true;
      }
    }
  }
}


