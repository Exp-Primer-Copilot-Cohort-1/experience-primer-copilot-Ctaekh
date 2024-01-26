function skillsMember() {
    var skills = document.getElementById("skills");
    var skillsMember = document.getElementById("skillsMember");
    var skillsMemberValue = skillsMember.value;
    var skillsMemberText = skillsMember.options[skillsMember.selectedIndex].text;
    var skillsMemberTextValue = skillsMemberText + " : " + skillsMemberValue;
    var skillsMemberTextValueLength = skillsMemberTextValue.length;
    var skillsMemberTextValueLengthMax = 50;
    var skillsMemberTextValueLengthMaxResult = skillsMemberTextValueLengthMax - skillsMemberTextValueLength;
    if (skillsMemberTextValueLength <= skillsMemberTextValueLengthMax) {
        skills.innerHTML = skillsMemberTextValue;
    } else {
        alert("Skills Member Maximal 50 Character");
    }
}