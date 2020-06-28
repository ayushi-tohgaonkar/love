var result=document.getElementById('result');
var note=document.getElementById('note');

function calculatelove()
{
var name=document.getElementById('name').value;
var pname=document.getElementById('pname').value ;

var r = Math.floor(Math.random() * 101)

if(name===''|| pname==='')
{
    alert("enter both the names plz");
}
else{
    if(r<=50)
    {
        note.innerHTML="sorry you must search another person";
        result.innerHTML=r+"%";
    }
    else if(r>50 && r<=80){
      note.innerHTML="Romantic Couple";
        result.innerHTML=r+"%";   
    }
    else if (r>80)
    {
 note.innerHTML="Wonderful Couple Made for Each other";
        result.innerHTML=r+"%";
    }
}


} 