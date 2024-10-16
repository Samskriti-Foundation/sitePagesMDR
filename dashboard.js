function dashboardCounts(jsonKey, prefix) {
  return fetch(serverUrlPort() + prefix)
    .then(response => response.json())
    .then(json => {
      const dataArray = json[jsonKey];
      // console.log("dashboard:", prefix, jsonKey, dataArray);
      return dataArray;
    })
    .catch(error => {
      console.error("Error fetching data:", error);
      return null; // Return null in case of error
    });
}
function totalthem(dataArrays) {
  totals = {Manuscripts:0, Books:0, Articles:0, Users:0, Subjects:0};
  dataArrays.forEach(function (arrayItem) {
    Object.entries(arrayItem).forEach(([key, value]) => {
      totals[key] += value;
    });
  });
  return totals;
}

function render(dataArray) {
  // const divMainTableContainer = document.getElementById("mainTableContainer");
  const divTblContainer = document.createElement("div");
  divTblContainer.id = "tableContainer";
  divTblContainer.className = "metro-nav metro-fix-view";
  total = 0;
    Object.entries(dataArray).forEach(([key, value]) => {
      if (key != 'Subjects') {
      divInnerTableContainer =  document.createElement("div");
      divInnerTableContainer.className = "metro-nav-block nav-block-purple";
      element_i = document.createElement("i");
      element_i.className = "glyphicon glyphicon-file";
      if (key=="Users") element_i.className = "glyphicon glyphicon-user";
          else {element_i.className = "glyphicon glyphicon-file"; total += value;}
      divInfo =  document.createElement("div");
      divInfo.className = "info";
      divInfo.innerHTML = value;
      divStatus = document.createElement("div");
      divStatus.className = "status";
      divStatus.innerHTML = key;
      divInnerTableContainer.appendChild(divStatus);
      divInnerTableContainer.appendChild(element_i);
      divInnerTableContainer.appendChild(divInfo);
      divTblContainer.appendChild(divInnerTableContainer);
      const dashboard = document.getElementById("dashboard");
      dashboard.appendChild(newDashboard(key, value));
      }
});
divInnerTableContainer =  document.createElement("div");
divInnerTableContainer.className = "metro-nav-block nav-block-purple";
divInfo =  document.createElement("div");
divInfo.className = "info";
divInfo.innerHTML = total;
divStatus = document.createElement("div");
divStatus.className = "status";
divStatus.innerHTML = "Documents";
element_i = document.createElement("i");
element_i.className = "glyphicon glyphicon-file";
divInnerTableContainer.appendChild(divStatus);
divInnerTableContainer.appendChild(element_i);
divInnerTableContainer.appendChild(divInfo);
divTblContainer.appendChild(divInnerTableContainer);
const dashboard = document.getElementById("dashboard");
dashboard.appendChild(newDashboard("Documents", total));
// divMainTableContainer.appendChild(divTblContainer);
}

function newDashboard(key, value) { 
  const icons = {Documents: "folder", Articles: "people", Books: "book", Manuscripts: "people",Users: "people", Subjects: 'book'};
  const divColmd2 = document.createElement("div"); divColmd2.className = "col-md-2";
  const divCard  = document.createElement("div"); divCard.className = "card card-pricing";
  const divCardContent  = document.createElement("div"); divCardContent.className = "card-content content-primary";
  const divIcon = document.createElement("div"); divIcon.className = "icon icon-info";
  const element_i = document.createElement("i"); element_i.className = "material-icons"; 
  element_i.innerHTML = icons[key];
  divIcon.appendChild(element_i);
  divCardContent.appendChild(divIcon);
  const h4cardtitle = document.createElement("h4");
  h4cardtitle.className = "category text-gray";
  h4cardtitle.innerHTML = key;
  const h3cardcount =  document.createElement("h3");
  h3cardcount.className = "card-title";
  h3cardcount.innerHTML = value;
  divCardContent.appendChild(h3cardcount);
  divCardContent.appendChild(divIcon);
  divCardContent.appendChild(h4cardtitle);
  divCard.appendChild(divCardContent);
  divColmd2.appendChild(divCard);

  return divColmd2;
}