function getfile(file,callback)
{
  var xhr = new XMLHttpRequest();
  xhr.overrideMimeType("application/json");
xhr.open("GET",file,true);
xhr.onreadystatechange = function(){
  if(xhr.readyState === 4 && xhr.status =="200"){
    callback(xhr.responseText);
  }

};
xhr.send();
}
getfile("data.json", function(text){
  var data = JSON.parse(text);
  console.log(data);
  carrer(data.carrer);
  education(data.education);
  skills(data.skills);
}
)
var child2=document.querySelector(".childtwo");
function carrer(carrerInfo){
  var careerHeading=document.createElement("h3");
  child2.appendChild(careerHeading);
  careerHeading.textContent="career objective";
  var carrerHr=document.createElement("hr");
  child2.appendChild(carrerHr);
  var ch=document.createElement("p");
  ch.textContent=carrerInfo.info;
  child2.appendChild(ch);
}
  function education(edu){
    var eduHeading=document.createElement("h6");
    eduHeading.textContent="Educatinal Qualifications";    child2.appendChild(eduHeading);
    var careerHr=document.createElement("Hr");
    child2.appendChild(careerHr);
   var eduTable=document.createElement("table");
   eduTable.border="1";
    var tr1="<tr><td>Degree</td><td>institute</td><td>Data</td></tr>";
    var tr2="";
    eduTable.innerHTML=tr1;
    var tr2="";
    for(var i=0;i<edu.length;i++){
      tr2+="<tr><td>"+edu[i].degree+"</td><td>"+edu[i].institute+"</td><td>"+edu[i].data+"</td></tr>";

    }
    eduTable.innerHTML=tr1+tr2;
    child2.appendChild(eduTable);


  }
function skills(skil)
{
  var ul=document.createElement("ul");
  child2.appendChild(ul);
  for(var i=0;i<skil.length;i++)
  {
    var li=document.createElement("li");
    li.textContent=skil[i].title+":"+skil[i].content;
    ul.appendChild(li);
  }
}
