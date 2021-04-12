
var textToEdit = `das as
fsadkj
fasd;jasdfkj
sdfkjasdf
asdfkf       df       jasd
sdfkjasdf
asdfkjasd
sdfkjasdf
asdfkjasd
sdfkjasdf
asdfkjasd
sdfkjasdf
asdfkjasd
sdfkjasdf
asdfkjasd
sdfkjasdf
asdfkjasd
sdfkjasdf
asdfkjasd
sdfkjasdf
asdfkjasd
fasd false;lasdkfl;k
asdfl;kasdfl`
var rownumber = 0;
var colnumber = 0;

function insertText()
{
    var arr = textToEdit.split('\n')
    screen1.innerText = '';
    for(var i = 0 ; i < arr.length ; i++)
    {
        var el = document.createElement('div')
        el.innerText = arr[i]
        screen1.appendChild(el);
    }
}

window.onload = function(){
    insertText()

    screen1.onclick = function(e,l){
        
        rownumber = Array.from(e.currentTarget.children).indexOf(e.toElement)
        colnumber = window.getSelection().anchorOffset;
        
        anchor.style.top = rownumber*15 + 30 ;//+  e.toElement.offsetTop
        anchor.style.left = colnumber * 7;
    }
}

window.onclick = function(){
    console.log(window.getSelection())
}

window.onkeydown = function(e){
    if(e.key.length == 1){
        var arr = textToEdit.split('\n')
        
        var newrow = arr[rownumber].substr(0, colnumber) + e.key + arr[rownumber].substr(colnumber);
        arr[rownumber] = newrow
        textToEdit = arr.join('\n');
        colnumber++;
        
        insertText()
    }
    else if(e.key == 'ArrowUp')
        rownumber--;
    else if(e.key == 'ArrowDown')
        rownumber++;
    else if(e.key == 'ArrowLeft')
        colnumber--;
    else if(e.key == 'ArrowRight')
        colnumber++;

        
    anchor.style.top = rownumber*15 + 30 ;//+  e.toElement.offsetTop
    anchor.style.left = colnumber * 7;

}