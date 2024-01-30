function no(){
    let m1 = Number(document.getElementById("m1").value);
    let c1 = Number(document.getElementById("c1").value);
    let m2 = Number(document.getElementById('m2').value);
    let c2 = Number(document.getElementById("c2").value);
    let m3 = Number(document.getElementById('m3').value);
    let c3 = Number(document.getElementById("c3").value);
    let m4 = Number(document.getElementById('m4').value);
    let c4 = Number(document.getElementById("c4").value);
    let m5 = Number(document.getElementById('m5').value);
    let c5 = Number(document.getElementById("c5").value);
    let m6x = (document.getElementById('labm').value);
    let m6 = (m6x/50)*100
    let c6 = Number(document.getElementById("labc").value);
    const l = [m1,m2,m3,m4,m5,m6];
    const grade = [] ;
    for (let i=0;i<6;i++){
        if (l[i]>=90){
            grade[i]=10;
        }
        else if(l[i]>=80){
            grade[i] = 9;
        }
        else if(l[i]>=70){
            grade[i] = 8;
        }
        else if(l[i]>=60){
            grade[i] = 7;
        }
        else if(l[i]>=50){
            grade[i] = 6;
        }
        else if(l[i]<50){
            grade[i] = 0;
        }
    }
    console.log(grade);
    const credits = [c1,c2,c3,c4,c5,c6];
    const credit = c1+c2+c3+c4+c5+c6;
    let total_points = 0;
    for(let j=0;j<6;j++){
        total_points+=grade[j]*credits[j];
    }

    gpa = (total_points/credit);
    document.getElementById("gpa").textContent = `Your GPA IS: ${gpa}`  
}

function add(){
    var input = document.createElement("input");
    input.setAttribute("type","text")
    input.setAttribute("placeholder","Marks")
    document.getElementById('new').innerHTML+=input;``
    return input.id;
}

function reset(){
    newfield = document.getElementById("new");
    newfield.innerHTML="";
}