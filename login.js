let input=document.querySelectorAll('input');
let email=input[0].value;
let password=input[1].value;

let logINButton=document.querySelector('.login');
let forGetPass=document.querySelector('a');
let createAccount=document.querySelector('.create-account');
let popup=document.getElementById('box');
function openpopupbox(){
document.getElementById('box').classList.add("open-popup")
}
function closepopup(){
popup.classList.remove("open-popup");
window.open(`index.html`)
}
const saveData=()=>{
    let arr=[input[0].value,input[1].value];
let adata=localStorage.getItem("adminData");
if(adata===null){
    let json=[];
    json.push(arr);
    localStorage.setItem("adminData",JSON.stringify(json));
    openpopupbox();
}
else{
let json=JSON.parse(localStorage.getItem("adminData"));
json.push(arr);
localStorage.setItem("adminData",JSON.stringify(json));
    openpopupbox();
}
}
const match=()=>{
let input=document.querySelectorAll('input');
    let isLogin=false;
    // let arr=[input[0].value,input[1].value];
    let data=JSON.parse(localStorage.getItem("adminData"));
    Array.from(data).forEach((e)=>{
        for (const i of e) {
            if(i===input[0].value||i===input[1].value){
                isLogin=true;
                    }  
        }
                });
        if(isLogin){
let go=confirm(`you are login what you want to go home page`); 
(go)?window.open(`index.html`):"thanks";           
        }
        else{
            alert('something invalid')
        }
    }
createAccount.addEventListener('click',(e)=>{
e.preventDefault();
    saveData();
});
createAccount.addEventListener('keyup',(e)=>{
    e.preventDefault();
    if(e.code==='Enter'){
        saveData();
    }
    });
    logINButton.addEventListener('click',(e)=>{
        e.preventDefault();
            match();
        });
        logINButton.addEventListener('keyup',(e)=>{
            e.preventDefault();
            if(e.code==='Enter'){
                match();
            }
            });