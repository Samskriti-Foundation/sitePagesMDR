function newDashboard(key, value) { 
    const icons = {Documents: "folder", Articles: "people", Books: "book", Manuscripts: "people",Users: "people"};
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
  function renderDashboard(prefix, jsonKey) {
      // const divMainTableContainer = document.getElementById("mainTableContainer");
      // const dashboard = document.getElementById("dashboard"); dashboard.innerHTML = "";
      // while (dashboard.firstChild) {dashboard.removeChild(dashboard.lastChild);}
      fetch(serverUrlPort() + prefix)
          .then(response => response.json())
          .then(json => {
        dataArray = json[jsonKey];
        if (dataArray != null) {
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
      else {
        const para = document.createElement("p");
        para.innerHTML = "<b>this dashboard is empty, it is likely that no such database exists</b>";
        const elements = document.getElementsByClassName("main main-raised");
        // while( elements.length > 0){ elements[0].parentNode.removeChild(elements[0]); }
        const div = document.createElement("div");
        div.appendChild(para);
        elements[0].appendChild(div);
      }
    });
  }