function showSecret(){welcomeText.style.display = 'block';}
const welcomeText = document.createElement("p")
const familyName1 = "Jānis"
const familyName2 = "Janīna"
const familyName3 = "Līga"
const familyName4 = "Marija"
const familyName5 = "Oskars" 
const familyName6 = "Kaspars"
const familyName7 = "Sofija"
welcomeText.textContent = `Daudz Laimes Dzimsanas Diena ${familyName4} no visas ģimenes`;
welcomeText.style.color = "black"; 
welcomeText.style.fontSize = "24px";      
welcomeText.style.fontWeight = "bold"; 
welcomeText.style.fontFamily = "sans-serif";
welcomeText.style.display = "none";
document.body.appendChild(welcomeText);
if (welcomeText.textContent === `Daudz Laimes Dzimsanas Diena ${familyName1} no visas ģimenes`) {
    document.body.style.backgroundColor = "blue";
}
else if (welcomeText.textContent === `Daudz Laimes Dzimsanas Diena ${familyName2} no visas ģimenes`){
  document.body.style.backgroundColor = "pink"
}
else if (welcomeText.textContent === `Daudz Laimes Dzimsanas Diena ${familyName3} no visas ģimenes`){
  document.body.style.backgroundColor = "pink"
}
else if (welcomeText.textContent === `Daudz Laimes Dzimsanas Diena ${familyName4} no visas ģimenes`){
  document.body.style.backgroundColor = "pink"
}
else if (welcomeText.textContent === `Daudz Laimes Dzimsanas Diena ${familyName5} no visas ģimenes`){
  document.body.style.backgroundColor = "blue"
}
else if (welcomeText.textContent === `Daudz Laimes Dzimsanas Diena ${familyName6} no visas ģimenes`){
  document.body.style.backgroundColor = "blue"
}
else if (welcomeText.textContent === `Daudz Laimes Dzimsanas Diena ${familyName7} no visas ģimenes`){
  document.body.style.backgroundColor = "pink"
}
else if (welcomeText.textContent === `Daudz Laimes Dzimsanas Diena ${familyName7+1} no visas ģimenes`){
  document.body.style.backgroundColor = "black"
  document.body.style.display = "none";
}
else {
  document.body.style.backgroundColor = "white";
}
