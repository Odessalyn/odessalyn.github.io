//Google sheet 
const sheetId = "1uRJSpoNwgT_Gpx6Nq3MNpkBvp4cobZFQlmlW8F0bs6o";
const sheetName = encodeURIComponent("Sheet2");
const sheetURL = `https://docs.google.com/spreadsheets/d/${sheetId}/gviz/tq?tqx=out:csv&sheet=${sheetName}`;

//HTML
let selected = null;
const photo = document.getElementById("char-image");
const list = document.getElementById("list");
const nameDisplay = document.getElementById("name");
const charDesc = document.getElementById("desc");
const age = document.getElementById("age");
const race = document.getElementById("race");
const clas = document.getElementById("class");
const relations = document.getElementById("relation");




//google sheet 
$.ajax({
  type: "GET",
  url: sheetURL,
  dataType: "text",
  success: function (response) {
    //var data = $.csv.toArrays(response);
    var data = $.csv.toObjects(response);
    console.log(data);
    // 'data' is an Array of Objects

    //add their name to sidebar list
    for (const person of data) {
      const node = document.createElement("li");
      const textnode = document.createTextNode(person.Name);
      node.appendChild(textnode);
      node.onclick = function UpdateInfo() {
        nameDisplay.innerHTML = person.Name;
        photo.src = person.Image;
        age.innerHTML = "Age: " + person.Age;
        race.innerHTML = "Race: " + person.Race;
        clas.innerHTML = "Class: " + person.Class;
        relations.innerHTML = "Relations: " + person.Relations;
        charDesc.innerHTML = person.Description;
      };
      list.appendChild(node);
    }




    console.log(data[0].Name)

  }
});


