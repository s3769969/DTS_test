var list = {
"REC": {
"PAT": [{
"PERSON_ID": 733924.000000,
"ENCNTR_ID": 0.000000,
"MRN": "Active",
"NAME_FULL_FORMATTED": "Git, Hub ",
"BIRTH_DT_TM": "\/Date(1990-01-01T00:00:00.000+00:00)\/",
"SEX_CD": 0.000000,
"RESULT": "1",
"RESULT_FLAG": "res-low",
"HAZARDOUS": "true",
"HOSPITAL_SITE": "Clayton",
"WARD/AREA": "ICU"
}, {
"PERSON_ID": 2607950.000000,
"ENCNTR_ID": 0.000000,
"MRN": "Active",
"NAME_FULL_FORMATTED": "John, Luke ",
"BIRTH_DT_TM": "\/Date(1991-01-01T00:00:00.000+00:00)\/",
"SEX_CD": 0.000000,
"RESULT": "10",
"RESULT_FLAG": "res-normal",
"HAZARDOUS": "false",
"HOSPITAL_SITE": "Dandenong",
"WARD/AREA": "ED"
}, {
"PERSON_ID": 2601764.000000,
"ENCNTR_ID": 0.000000,
"MRN": "Active",
"NAME_FULL_FORMATTED": "Pierce, Pierce ",
"BIRTH_DT_TM": "\/Date(1992-01-01T00:00:00.000+00:00)\/",
"SEX_CD": 0.000000,
"RESULT": "10",
"RESULT_FLAG": "res-normal",
"HAZARDOUS": "false",
"HOSPITAL_SITE": "Clayton",
"WARD/AREA": "ED"
}, {
"PERSON_ID": 2605750.000000,
"ENCNTR_ID": 0.000000,
"MRN": "Active",
"NAME_FULL_FORMATTED": "Hello, World ",
"BIRTH_DT_TM": "\/Date(1993-01-01T00:00:00.000+00:00)\/",
"SEX_CD": 0.000000,
"RESULT": "10",
"RESULT_FLAG": "res-normal",
"HAZARDOUS": "false",
"HOSPITAL_SITE": "Moorabbin",
"WARD/AREA": "ED"
}, {
"PERSON_ID": 2605755.000000,
"ENCNTR_ID": 0.000000,
"MRN": "Active",
"NAME_FULL_FORMATTED": "Saint, Vincent ",
"BIRTH_DT_TM": "\/Date(1994-01-01T00:00:00.000+00:00)\/",
"SEX_CD": 0.000000,
"RESULT": "10",
"RESULT_FLAG": "res-normal",
"HAZARDOUS": "false",
"HOSPITAL_SITE": "Clayton",
"WARD/AREA": "ED"
}, {
"PERSON_ID": 2677951.000000,
"ENCNTR_ID": 0.000000,
"MRN": "Active",
"NAME_FULL_FORMATTED": "Jeffrey, Jeff ",
"BIRTH_DT_TM": "\/Date(1995-01-01T00:00:00.000+00:00)\/",
"SEX_CD": 0.000000,
"RESULT": "10",
"RESULT_FLAG": "res-normal",
"HAZARDOUS": "false",
"HOSPITAL_SITE": "Clayton",
"WARD/AREA": "ED"
}, {
"PERSON_ID": 2631972.000000,
"ENCNTR_ID": 1.000000,
"MRN": "Active",
"NAME_FULL_FORMATTED": "Han, Solo ",
"BIRTH_DT_TM": "\/Date(1996-01-01T00:00:00.000+00:00)\/",
"SEX_CD": 0.000000,
"RESULT": "1000",
"RESULT_FLAG": "res-severe",
"HAZARDOUS": "true",
"HOSPITAL_SITE": "Clayton",
"WARD/AREA": "ICU"
}, {
"PERSON_ID": 2637956.000000,
"ENCNTR_ID": 2.000000,
"MRN": "Active",
"NAME_FULL_FORMATTED": "Armstrong, Niel ",
"BIRTH_DT_TM": "\/Date(1997-01-01T00:00:00.000+00:00)\/",
"SEX_CD": 0.000000,
"RESULT": "100",
"RESULT_FLAG": "res-high",
"HAZARDOUS": "false",
"HOSPITAL_SITE": "Clayton",
"WARD/AREA": "ICU"
}, {
"PERSON_ID": 873923.000000,
"ENCNTR_ID": 0.000000,
"MRN": "Active",
"NAME_FULL_FORMATTED": "Ice, Tea ",
"BIRTH_DT_TM": "\/Date(1998-01-01T00:00:00.000+00:00)\/",
"SEX_CD": 0.000000,
"RESULT": "100",
"RESULT_FLAG": "res-high",
"HAZARDOUS": "false",
"HOSPITAL_SITE": "Clayton",
"WARD/AREA": "ID"
}, {
"PERSON_ID": 893723.000000,
"ENCNTR_ID": 0.000000,
"MRN": "Active",
"NAME_FULL_FORMATTED": "Chapelle, Dave ",
"BIRTH_DT_TM": "\/Date(1999-01-01T00:00:00.000+00:00)\/",
"SEX_CD": 0.000000,
"RESULT": "1",
"RESULT_FLAG": "res-low",
"HAZARDOUS": "false",
"HOSPITAL_SITE": "Clayton",
"WARD/AREA": "AMU"
}]
}};

//import { hello } from './module.js';
//import list from './script.js';
//import list from 'http://127.0.0.1:5500/script.js';

//create each option for drop down list using list object, text to display and option value
function createOption(ddl, text, value) {
        var opt = document.createElement('option');
        opt.value = value;
        opt.text = text;
		ddl.options.add(opt);
		if (value.endsWith("FLAG")){
			opt.style.display = "none";
		}
    }

//create multiple options by passing drop down list object and array of options
function createOptions(optionsArray, ddl) {
	for (i = 0; i < optionsArray.length; i++) {
		createOption(ddl, optionsArray[i], optionsArray[i]);
	}
}

//construct specific drop down list object using string as selector
function constructDropDown(selector) {
	//console.log("creating drop downs");	
	var headings = [];
	var options;
	const hospitals = new Map();
	const areawards = new Map();
	switch(selector){
		case "cols":
			headings = Object.keys(list.REC.PAT[0]);
			options = document.getElementById("filterDropDown");
			options.innerHTML = "";
			//console.log("cols:" + headings);
			createOptions(headings, options);
			break;
		case "hospitals":
			headings.push("All");
			for (let i = 0; i < list.REC.PAT.length; i++) {
				if(!hospitals.has(list.REC.PAT[i]["HOSPITAL_SITE"])){
						hospitals.set(list.REC.PAT[i]["HOSPITAL_SITE"], true);
						headings.push(list.REC.PAT[i]["HOSPITAL_SITE"]);
				}
			}
			options = document.getElementById("locfilter1DropDown");
			options.innerHTML = "";
			options.onchange = function() { filterLoc(i); };
			//console.log("hospitals:" + headings);
			createOptions(headings, options);
			break;
		case "ward/areas":
			headings.push("All");
			for (let i = 0; i < list.REC.PAT.length; i++) {	
				if(!areawards.has(list.REC.PAT[i]["WARD/AREA"])){
						areawards.set(list.REC.PAT[i]["WARD/AREA"], true);
						headings.push(list.REC.PAT[i]["WARD/AREA"]);
				}
			}
			options = document.getElementById("locfilter2DropDown");
			options.innerHTML = "";
			options.onchange = function() { filterLoc(i); };
			//console.log("areawards:" + headings);
			createOptions(headings, options);
			break;
		default:
			break;
	}
}

//filter table after change in location drop down selection
function filterLoc(selector) {
	//console.log("filtering table by location");
	var hospital, wardarea, table, tr, td, i, txtValue, txtValue2, hospitalCol, wardareaCol;
	hospital = document.getElementById("locfilter1DropDown").value;
	wardarea = document.getElementById("locfilter2DropDown").value;
	table = document.getElementById("table");
	//need to dynamically find hospital and wardarea col using search
	hospitalCol = 9;
	wardareaCol = 10;
	tr = table.getElementsByTagName("tr");
	//iterate throug table rows
	for (i = 1; i < tr.length; i++) {
		td = tr[i].getElementsByTagName("td")[hospitalCol];
		td2 = tr[i].getElementsByTagName("td")[wardareaCol];
		//check if a hospital location has been selected
		if (!/All/.test(hospital)){
			if (td) {
				txtValue = td.textContent || td.innerText;
				if (txtValue.indexOf(hospital) > -1) {
					tr[i].style.display = "";
					//check if a wardarea location has been selected
					if(!/All/.test(wardarea)){
						if (td2) {
							txtValue2 = td2.textContent || td2.innerText;
							if (txtValue2.indexOf(wardarea) > -1) {
								tr[i].style.display = "";
							} else {
								tr[i].style.display = "none";
							}
						}
					}
				} else {
					tr[i].style.display = "none";
				}
			}
		//check if a hospital location has not been selected by wardarea is
		}else if(!/All/.test(wardarea)){
			if (td2) {
				txtValue2 = td2.textContent || td2.innerText;
				if (txtValue2.indexOf(wardarea) > -1) {
					tr[i].style.display = "";
				} else {
					tr[i].style.display = "none";
				}
			}
		//if neither is selected display all rows
		}else{
			tr[i].style.display = "";
		}
	}
}

//construct table object using json object for data
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
	let dob = /BIRTH_DT_TM/;
	let year, month, day, dateString;
	for (let i = 0; i < list.REC.PAT.length; i++) {
		const tr = tbl.insertRow();
		for (let j = 0; j < headings.length; j++) {
			td = tr.insertCell();
			//change sort and display values for DOB field
			if(dob.test(headings[j])){
				year = list.REC.PAT[i][headings[j]].substring(6, 10);
				month = list.REC.PAT[i][headings[j]].substring(11, 13);
				day = list.REC.PAT[i][headings[j]].substring(14, 16);
				dateString = year + month + day;
				td.sortValue = dateString;
				td.appendChild(document.createTextNode(list.REC.PAT[i][headings[j]].substring(6, 16)));				
			}else{
				td.appendChild(document.createTextNode(list.REC.PAT[i][headings[j]]));
				td.sortValue = list.REC.PAT[i][headings[j]].toString();
			}
			//mark className for HAZARDOUS to allow css styling
			if(/HAZARDOUS/.test(headings[j])){
				if(/true/.test(list.REC.PAT[i][headings[j]])){					
					td.className = "hazardTrue";
					//td.innerHTML += '<img align="center" width="100%" height="100%" src="http://dummyimage.com/68x68/000/fff" />';
				}else{
					td.className = "hazardFalse";
				}
			}
			td.style.border = '1px solid black';
			//if next heading is a FLAG for conditional formatting use value as a className
			if(j+1 < headings.length){
				if(headings[j+1].endsWith("FLAG")){
					td.className = list.REC.PAT[i][headings[j+1]];
				}
			}
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
	constructDropDown("cols");
	constructDropDown("hospitals");
	constructDropDown("ward/areas");
}

//search table using selected field from filterDropDown object
//search is restricted by active hospital and wardarea filters
function searchTable(selector) {
	//console.log("searching table");
	var input, filter, table, tr, td, i, txtValue, col, hospitalCol, wardareaCol, hospital, wardarea, hospitalCheck1, wardAreaCheck1, hospitalCheck2, wardAreaCheck2;
	hospital = document.getElementById("locfilter1DropDown").value;
	wardarea = document.getElementById("locfilter2DropDown").value;
	hospitalCol = 9;
	wardareaCol = 10;
	input = document.getElementById("searchBar");
	filter = input.value.toUpperCase();
	col = document.getElementById("filterDropDown").selectedIndex;
	table = document.getElementById("table");
	tr = table.getElementsByTagName("tr");
	for (i = 1; i < tr.length; i++) {
		tr[i].style.display = "none";
		td = tr[i].getElementsByTagName("td")[col];
		hospitalCheck1 = tr[i].getElementsByTagName("td")[hospitalCol];
		wardAreaCheck1 = tr[i].getElementsByTagName("td")[wardareaCol];
		hospitalCheck2 = hospitalCheck1.textContent || hospitalCheck1.innerText;
		wardAreaCheck2 = wardAreaCheck1.textContent || wardAreaCheck1.innerText;
		if (td) {
			txtValue = td.textContent || td.innerText;
			if (txtValue.toUpperCase().indexOf(filter) > -1) {
				if(hospital.indexOf(hospitalCheck2) > -1 || /All/.test(hospital)){
					if(wardarea.indexOf(wardAreaCheck2) > -1 || /All/.test(wardarea)){
						tr[i].style.display = "";
					}
				}
			}
		}
	}
}

function sortTable(n) {
	//console.log("sorting column " + n);
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
			if (x.sortValue.toLowerCase() > y.sortValue.toLowerCase()) {
				// If so, mark as a switch and break the loop:
				shouldSwitch = true;
				break;
			}
		}else if (dir == "desc") {
			if (x.sortValue.toLowerCase() < y.sortValue.toLowerCase()) {
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


