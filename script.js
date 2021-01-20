function delColor(){
    document.getElementById('save').style.borderColor = '#aaa';
    document.getElementById('inputEdit').style.borderColor = '#6dbdff';
};

function delColorSelect(){
    document.getElementById('save').style.borderColor = '#aaa';
    document.getElementById('inputEdit').style.borderColor = '#aaa';
 
};

function save() {
   let editValue = document.getElementById('inputEdit').value;
    if(editValue === '') {
        document.getElementById('save').style.borderColor = 'red';
        document.getElementById('inputEdit').style.borderColor = 'red';
        setTimeout(delColorSelect, 2000);
        

    }
    else {
        document.getElementById('save').style.borderColor = '#6dbdff';
        document.getElementById('inputEdit').style.borderColor = '#6dbdff';
        let sel = document.getElementById('selector').selectedIndex;
        document.getElementById('selector').options[sel].text = editValue;
        let optionsNew = document.getElementById('selector').options;
        document.getElementById('inputEdit').value = optionsNew[sel].text;
        console.log(document.getElementById('selector').options);
        setTimeout(delColorSelect, 2000);
    }


};

function changeName() {
    let sel = document.getElementById('selector').selectedIndex;
    console.log(sel);
    let options = document.getElementById('selector').options;
    console.log(options[sel].text);
    document.getElementById('inputEdit').value = options[sel].text;
};
