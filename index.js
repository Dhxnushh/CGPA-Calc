function no(){
    console.log('lol')
    let subj = Number(document.getElementById('nosubj').value)
    let lab = Number(document.getElementById('nolab').value)
    let total = subj+lab;
    let content1= document.getElementById('content1');
    document.getElementById('content1').textContent="";
    let n=0;
    for(let i=1;i<=subj;i++){
        content = `
        <h3>Subject ${i}:</h3>
        <input type="number" id="${n}" placeholder="Marks">
        <input type="number" id='${n+1}' placeholder="Credits">
        `
        n+=2
        content1.innerHTML+=content;
    }
    n=0;
    for(let i=1;i<=lab;i++){
        content = `
        <h3>Lab ${i}:</h3>
        <input type="number" id="${n}" placeholder="Marks">
        <input type="number" id='${n+1}' placeholder="Credits">
        `
        n+=2
        content1.innerHTML+=content;
    }
    content1.innerHTML+=`<br>
                         <br>
                         <button id='lol' onclick='calc(${subj},${lab})'>Calculate<button>`;
    
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

function calc(subj,lab){
    var grade = [];
    var creds = [];
    let x=0;
    for(let i=0;i<=subj;i++){
        let mark = document.getElementById('${x}');
        grade.push(mark);
        let credits = document.getElementById('${x+1}')
    }
}