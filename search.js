let searchButton=document.getElementById('search-button');
let search=document.getElementById('search-box');
    matching=()=>{
    switch(search.value){
            case'HOME':
            case'Home':
            case 'home':
                           window.open(`index.html`);
                           break;
            case'LIBRARY':
            case'Library':
            case 'library':
                            window.open(`library.html`);
                            break;
            case'ADDBOOK':
            case 'Addbook':
            case 'addbook':
                        window.open(`addBook.html`);
                        break;
            case 'STUDENT':
            case'Student':
            case 'student':
                        window.open(`student.html`);
                        break;
            case 'TEACHER':
            case 'Teacher':
            case 'teacher':
                        window.open(`teacher.html`);
                        break; 
            case 'ADMIN':
            case 'Admin':      
            case 'admin':
                         window.open(`admin.html`);
                         break;
            case 'JAVA':
            case 'Java':      
            case 'java':
                        window.open(`java.pdf`);
                        break;
            case 'PHP':
            case 'Php titorials':  
            case 'php titorial' :   
            case 'php':
                        window.open(`https://www.javatpoint.com/php-tutorial`);
                        break;
            case 'PYTHON':
            case 'Python':      
            case 'python':
                        window.open(`https://www.javatpoint.com/python-tutorial`); 
                        break;                                          break; 
            case 'C++':
            case 'c++':      
                        window.open(`https://www.javatpoint.com/cpp-tutorial`);
                        break;
            case 'C#':
            case 'C-SHARP':
            case 'c-sharp':
            case 'c#': 
                         window.open(`https://www.javatpoint.com/c-sharp-tutorial`);
                         break;
             case 'YOUTUBE':
             case 'YOU TUBE': 
             case 'youtube':
             case'you tube':
                        window.open(`https://www.youtube.com/`);
                        break;
            case 'INSTAGRAM':
            case 'instagram': 
            case'instagram ashish id':
            case 'library instagram id':
                        window.open(`https://www.instagram.com/_ashishpandey26`);
                        break;
            case 'PRIVACY':
            case 'Privacy':
            case 'privacy':
                        window.open(`privacy.html`);
                        break;
            case 'TERMS & CONDITIONS':
            case 'Terms & Conditions':
            case 'terms & condition':
            case 'terms':
            case 'conditions':
                       window.open(`terms.html`)
                       break;
            case 'COOKIES':
            case 'Cookies':
            case 'cookies':
                       window.open(`cookies.html`)
                       break; 
            case 'FEEDBACK':
            case 'Feedback':
            case 'feedback':
                        window.open(`feedback.html`)
                        break;
            case 'SUPPORT':
            case 'Support':
            case 'support':
                         window.open(`support.html`)
                         break; 
            case 'contact':           
                        window.open(`https://www.twitter.com/@Arvind827502`)
                                                    break;  
            case'HELP':
            case 'Help':
            case'help': 
                        window.open(`help.html`)  
                        break; 
                        default:
                        alert("please search here only library related")
                        search.value='';
    }
    addTask();
}
searchButton.addEventListener('click',function(){
    matching();
});
search.addEventListener('keyup',function(e){
    if(e.code==="Enter"){
        matching();
    }
});
let c=document.getElementById('searchHistory');
function addTask(){
    if(search.value===''){
       search.value='home';
    }
    else{
        let li=document.createElement("li");
        li.innerHTML=search.value;
     c.appendChild(li);
     let span=document.createElement("span");
     span.innerHTML=`X`;
     li.appendChild(span);
    }
    search.value='';
    saveDta();
}
c.addEventListener('click',function(e){
c.style.display='none';
if(e.target.tagName==="SPAN"){
    e.target.parentElement.remove();    
    saveDta();
}
},false);
function saveDta(){
    localStorage.setItem("data",search.value)
}
function showList(){
    c.innerHTML=localStorage.getItem("data");
}
showList();
search.addEventListener('input',function(){
c.style.display='block';
});
saveDta=()=>{
localStorage.setItem('data',search.value);
}