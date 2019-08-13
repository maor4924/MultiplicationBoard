//lines 4-31
//Building the board

var tableNumbers=[];
var i=0;  //use only for tableNumbers array

for(var j=1 ; j<=10 ; j++){
    for(var h=1;h<=10;h++){
        tableNumbers[i]=j*h;
        i++;
    }
}

i=0;  //reset i to 0

var table=document.getElementById("board");

for(j=0 ; j<10 ; j++){
    table.innerHTML += "<tr></tr>";
}

var tableRows=document.getElementsByTagName("tr");

for(j=0 ; j<10 ; j++){
    for(h=0 ; h<10 ; h++){
        tableRows[j].innerHTML+="<td>"+tableNumbers[i]+"</td>";
        i++;
    }
}

i=0;  //reset i to 0


//coloring cell funcionality

function displayResult(){
    resetBackground();
    var num1=parseInt(document.getElementById("inputOne").value);
    var num2=parseInt(document.getElementById("inputTwo").value);
    var cell=document.getElementsByTagName("tr")[num1-1].getElementsByTagName("td")[num2-1];

    cell.style.backgroundColor="yellow";

}

function resetBackground(){
    var cells=document.getElementsByTagName("td");
    for(var j=0 ; j<cells.length ; j++){
        cells[j].style.backgroundColor="white";
    }
}



