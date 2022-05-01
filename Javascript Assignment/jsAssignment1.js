(function () {
  var c = 0;
  const array = [
    ["Name", "Age", "DOB", "Email", "Company"],
    ["Anurodh", 21, "11/08/2001", "abfdsaccd@gmail.com", "ABC"],
    ["Divyansh", 42, "25/09/2001", "ttdsaffsacd@gmail.com", "DEF"],
    ["Amit", 26, "01/01/1999", "cdasffd@gmail.com", "GHI"],
    ["Ashutosh", 10, "20/10/2020", "xyzsf@gmail.com", "JKL"],
    ["Someone", 11, "17/09/2014", "iusfaasd@gmail.com", "MNO"],
  ];
  // created table
  var table = document.createElement("table");
  // added class attribute and appended bootstrap table class for styling
  table.setAttribute("class", "table");
  //created table head attribute
  var tHead = document.createElement("thead");
  // set table head color as dark
  tHead.setAttribute("class", "table-dark");
  // created table row and table head element
  var tr = document.createElement("tr");
  var th1 = document.createElement("th");
  var th2 = document.createElement("th");
  var th3 = document.createElement("th");
  var th4 = document.createElement("th");
  var th5 = document.createElement("th");
  var text1 = document.createTextNode(array[0][0]);
  var text2 = document.createTextNode(array[0][1]);
  var text3 = document.createTextNode(array[0][2]);
  var text4 = document.createTextNode(array[0][3]);
  var text5 = document.createTextNode(array[0][4]);
  // inserting values to table head
  th1.appendChild(text1);
  th2.appendChild(text2);
  th3.appendChild(text3);
  th4.appendChild(text4);
  th5.appendChild(text5);
  tr.appendChild(th1);
  tr.appendChild(th2);
  tr.appendChild(th3);
  tr.appendChild(th4);
  tr.appendChild(th5);
  tHead.appendChild(tr);
  table.appendChild(tHead);
  var tBody = document.createElement("tbody");
  // looping to fetch data from array and inserting in table
  for (var i = 1; i < 6; i++) {
    var tr = document.createElement("tr");
    var td1 = document.createElement("td");
    var td2 = document.createElement("td");
    var td3 = document.createElement("td");
    var td4 = document.createElement("td");
    var td5 = document.createElement("td");
    var text1 = document.createTextNode(array[i][0]);
    var text2 = document.createTextNode(array[i][1]);
    var text3 = document.createTextNode(array[i][2]);
    var text4 = document.createTextNode(array[i][3]);
    var text5 = document.createTextNode(array[i][4]);
    td1.appendChild(text1);
    td2.appendChild(text2);
    td3.appendChild(text3);
    td4.appendChild(text4);
    td5.appendChild(text5);
    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3);
    tr.appendChild(td4);
    tr.appendChild(td5);
    tBody.appendChild(tr);
    table.appendChild(tBody);
  }
  document.body.appendChild(table);
  tbl.setAttribute("border", "2");
})();
