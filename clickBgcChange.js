const hex=[0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"];

 const color=document.getElementById('change')

 function monkeyClose(){
    document.getElementById('closed').classList.remove('active');
    let  hexColor="#";
     for(let i=1;i<7;i++){
       hexColor+=hex[Math.floor(Math.random()*hex.length)]
      
    }
    color.textContent=hexColor;
     document.body.style.backgroundColor=hexColor;
    document.getElementById('opened').classList.add('active');
 }

 function monkeyOpen(){
    document.getElementById('opened').classList.remove('active');
    let  hexColor="#";
     for(let i=1;i<7;i++){
       hexColor+=hex[Math.floor(Math.random()*hex.length)]
    }

    color.textContent=hexColor;
     document.body.style.backgroundColor=hexColor;
    document.getElementById('closed').classList.add('active')
 }

let Fcount=0;
function myCount01(){
    
    return Fcount+=1;
    // console.log(`you clicked closed monkey ${++Fcount} times`)
}


let Scount=0
function myCount02(){
     return Scount+=1;
}
function clickedCount(){
    // console.log("yes its working")
    let new01=myCount01()
    let new02=myCount02()
    let total=new01+new02;
    
    alert(`you clicked on Closed monkey  ${new01} times \n you clicked on Opened monkey  ${new02} times \n The total count ${total}`)
}

const menubarhide=document.getElementById("hidemenubar")
 menubarhide.addEventListener('click',()=>{
setTimeout( function Menufont(){
     document.getElementById("Menuhide").classList.remove('activeMenu');
 },  0000  )} )

  let menuHider = document.getElementById("toHidemenu")
menuHider.addEventListener("click",()=>{
    document.getElementById("Menuhide").classList.add('activeMenu');

})


