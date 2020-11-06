function XaxisChanged(){
    let val = parseInt(document.getElementById("x-axis").value);
    if (!isNaN(val) && val != null && val > 0 && val < 10 ){ // gut
        document.getElementById("XerrMessage").style.display = "none";
        document.getElementById("x-axis").style.borderBottom = "2px solid #575656";
    } else { // schlecht
        document.getElementById("XerrMessage").style.display = "block";
        document.getElementById("x-axis").style.borderBottom = "2px solid red";
    }
}

function YaxisChanged(){
    let val = parseInt(document.getElementById("y-axis").value);
    if (!isNaN(val) && val != null && val > 0 && val < 10 ){ // gut
        document.getElementById("YerrMessage").style.display = "none";
        document.getElementById("y-axis").style.borderBottom = "2px solid #575656";
    } else { // schlecht
        document.getElementById("YerrMessage").style.display = "block";
        document.getElementById("y-axis").style.borderBottom = "2px solid red";
    }
}

function generateTable(x,y){
    let modal = document.getElementById("modal");
    if (document.getElementById("myTable") != null){ // remove if was previously created
        document.getElementById("myTable").remove();
        document.getElementById("return-b").remove();
    }

    let table = document.createElement("table");
    table.setAttribute("id", "myTable");

    for (i = 0; i <= x; i++){
        let row = table.insertRow();
        for (j = 0; j <= y ; j++){
            let cell = row.insertCell();

            if (i == 0 && j == 0){ // empty cell when x = y = 1
                cell.appendChild(document.createTextNode(" "));
            } else if (i == 0){ // add x-axis
                cell.appendChild(document.createTextNode("X = " + j));
            } else if (j == 0 && i != 0){ // add y-axis
                cell.appendChild(document.createTextNode("Y = " + i));
            } else { // add cells 
                cell.appendChild(document.createTextNode(i*j));
            }
        }
    }
    
    modal.appendChild(table);

    let bt = document.createElement("button");
    bt.setAttribute("id", "return-b");
    bt.innerHTML = "Naspät";
    bt.setAttribute("onclick", "returnTo()");
    modal.appendChild(bt);
    
}

function showModal(){
    let valX = parseInt(document.getElementById("x-axis").value);
    let valY = parseInt(document.getElementById("y-axis").value);

    if ((!isNaN(valX) && valX != null && valX > 0 && valX < 10) && !isNaN(valY) && valY != null && valY > 0 && valY < 10){
        generateTable(valX,valY);
        document.getElementById("modal").style.display = "block";
    }
}

function returnTo(){
    document.getElementById("modal").style.display = "none";
}