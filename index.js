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
        <input type="number" id="m${n}" placeholder="Marks">
        <input type="number" id='c${n+1}' placeholder="Credits">
        `
        n+=2
        content1.innerHTML+=content;
    }
    n=subj+2;
    for(let i=1;i<=lab;i++){
        content = `
        <h3>Lab ${i}:</h3>
        <input type="number" id="m${n}" placeholder="Marks">
        <input type="number" id='c${n+1}' placeholder="Credits">
        `
        n+=2
        content1.innerHTML+=content;
    }
    content1.innerHTML+=`<br>
                         <br>
                         <button id='lol' onclick='calc(${subj},${lab})'>Calculate<button>`;
}


function calc(subj,lab){
    var marks = [];
    var creds = [];
    let x=0;
    for(let j=0;j<=subj;j++){
        console.log(`${x}`)
        let mark = Number(document.getElementById(`m${x}`).value);
        marks[j]=mark;
        let credits = Number(document.getElementById(`c${x+1}`).value);
        creds[j]=credits;
        x+=2
    }
    x=subj+2;
    for(let i=0;i<=lab;i++){
        let mark = document.getElementById(`m${x}`).value;
        marks[x]=mark;
        let credits = document.getElementById(`c${x+1}`).value;
        creds[x]=mark;
        x+=2;
    }
    console.log(marks);
    console.log(creds);
    var grade=[];
    for (let i=0;i<6;i++){
        if (marks[i]>=90){
            grade[i]=10;
        }
        else if(marks[i]>=80){
            grade[i] = 9;
        }
        else if(marks[i]>=70){
            grade[i] = 8;
        }
        else if(marks[i]>=60){
            grade[i] = 7;
        }
        else if(marks[i]>=50){
            grade[i] = 6;
        }
        else if(marks[i]<50){
            grade[i] = 0;
        }
    }
}