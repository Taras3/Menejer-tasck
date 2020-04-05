$('.sign').click(function(){
    $('.form').css({
        display: 'block',
    })
})
$('.log').click(function(){
    $('.form2').css({
        display: 'block',
    })
})

let Arr = [];
let NeuArr = []
let ArrDiv = []
let NewArrDiv = []
let Cont
let NewarrLi 
let NewarrLiC

if(localStorage.length != 0){
    NeuArr = JSON.parse(localStorage.getItem('Arr'))
    NewArrDiv = JSON.parse(localStorage.getItem('ArrDiv'))

}
if(localStorage.length = 0){
    NeuArr = []
    NewArrDiv = []
    
}

//creation function list
function createDiv(){    
    Cont = document.getElementById('container')
    console.log(Cont)
    let ToDoDiv = document.createElement('div')
    ToDoDiv.classList.add('ToDoTask')
    let formC = document.createElement('form')
    formC.name = 'someForm'
    let inputC = document.createElement('input')
    inputC.name = 'inp'
    inputC.placeholder = 'enter task'
    formC.appendChild(inputC)
    
    
    console.log(ToDoDiv)
    Cont.appendChild(ToDoDiv)
  
    
    let addInp = document.createElement('div')
    console.log(addInp)
    addInp.classList.add('add')
    console.log(addInp)
    let p = document.createElement('p');
    addInp.id = 'id'
    p.innerText = '+'
    addInp.appendChild(p)
    let delInp = document.createElement('div')
    delInp.id = 'idDel'
    let pD = document.createElement('p');
    pD.innerText = '-'
    delInp.appendChild(pD)

    let ul = document.createElement('ul')
    ul.id = 'ulId'

    ToDoDiv.append(formC, addInp, delInp, ul)
    
    let addInpC = document.getElementsByClassName('add')[0]
    let delInpC = document.getElementById('idDel')
    let liC = document.getElementsByTagName('li')
    
    
     let arrLi = []
     console.log(arrLi)
     let start7 = JSON.stringify(arrLi);
     localStorage.setItem('arrLi', start7);
     NewarrLi = JSON.parse(localStorage.getItem('arrLi'))
    
     if(JSON.parse(localStorage.getItem('NewarrLiC'))){
          NewarrLiC = JSON.parse(localStorage.getItem('NewarrLiC'))
     }
     if(!JSON.parse(localStorage.getItem('NewarrLiC'))){
        NewarrLiC = []
     }
    
     NewarrLiC.push(NewarrLi)
    
     let start8 = JSON.stringify(NewarrLiC);
     localStorage.setItem('NewarrLiC', start8);
     let warrLiC = JSON.parse(localStorage.getItem('NewarrLiC'))
     
//creation function click input "+"    
     addInpC.onclick = function(){
        let task = document.forms['someForm']['inp'].value

        let li = document.createElement('li')
        li.innerHTML = '<p class="someP">'+task+'</p>' + '<input type="checkbox" class="check">'
        ul.appendChild(li)

        
// creation function add to localStorage       
        function addLokSt(){
           arrLi = []
           let liV
         
           for(let k = 0;k<liC.length;k++){
            
               console.log(liC.length)
               let liCp = document.getElementsByClassName('someP') 
               console.log(liCp)  
               liV = liCp[k].textContent
               console.log(liV)
           
               arrLi.push(liV)
               console.log(arrLi)
           }        
        
          
           let start4 = JSON.stringify(arrLi);
           localStorage.setItem('arrLi', start4);
           NewarrLi = JSON.parse(localStorage.getItem('arrLi'))
           NewarrLiC = [] 
           NewarrLiC.push(NewarrLi)
           let start5 = JSON.stringify(NewarrLiC);
           localStorage.setItem('NewarrLiC', start5);
           warrLiC = JSON.parse(localStorage.getItem('NewarrLiC'))     
         
        }
        addLokSt()
    }
//    end "+"

//creation function delete li "-"     
    delInpC.onclick = function (){
        for (let i = 0; i < liC.length; i++) {
            console.log(12)
        if(document.getElementsByClassName('check')[i].checked) {       
            liC[i].parentNode.removeChild(liC[i])
        }
    }
    }
    
    let arrDiv = [ToDoDiv]
    if(ArrDiv == null){
       ArrDiv = [] 
    }
    ArrDiv.push(arrDiv)
    let start3 = JSON.stringify(ArrDiv);
    localStorage.setItem('ArrDiv', start3);
    NewArrDiv = JSON.parse(localStorage.getItem('ArrDiv'))
}
//end createDiv

               
 let arrLiC = JSON.parse(localStorage.getItem('NewarrLiC'))
 let LiC = JSON.parse(localStorage.getItem('LiC'))
 if(!JSON.parse(localStorage.getItem('LiC'))){
    LiC = [] 
 }
 if(JSON.parse(localStorage.getItem('NewarrLiC'))){
       LiC.push(arrLiC[arrLiC.length - 1])
    }

 let start6 = JSON.stringify(LiC);
 localStorage.setItem('LiC', start6);
 let EndwarrLiC = JSON.parse(localStorage.getItem('LiC'))
 
//creation function click on form sign "send"
$('.form input[type="button"]').click(function(){
    let form = document.forms['form-sign'];
    let mailAdr = form.elements.em_l.value;
    let pass = form.elements.pass_us.value;
    let arr = [mailAdr, pass]
    console.log(mailAdr)
    console.log(Arr)
    
    function MP(){
         let start = JSON.stringify(arr);
         localStorage.setItem('arr', start);
         console.log(arr)
         let Neuarr  = JSON.parse(localStorage.getItem('arr'))
         console.log(Neuarr)
         Arr.push(Neuarr)
         let start2 = JSON.stringify(Arr);
         localStorage.setItem('Arr', start2);
         console.log(Arr)
         NeuArr  = JSON.parse(localStorage.getItem('Arr'))
         console.log(NeuArr)
     }
     console.log(MP)
    
    function Send(){
        if(mailAdr == '' || pass == ''){
           alert('incorrect email or password')

       } else {
        createDiv()
        $('header p').text(mailAdr)
        $('.form, .form2, .sign, .log').css({
        display: 'none',
     })
          }
    }
     
    function passC(){
     Send()
    }
    
     console.log(Arr)
      if(Arr == null){
          Arr = []
        NeuArr = ''  
      }
     console.log(NeuArr)
    
    let h
    function emailC(){
           for(i = 0;i<NeuArr.length;i++){
          
        if(NeuArr[i][0] == mailAdr){
            alert('email already exists')
            !MP
            passC = function(){}
            h = 1
        } 
    }
    }
    emailC()
    
    
    if(mailAdr == '' || pass == ''){
        console.log(!MP)
        !MP
       console.log(!MP) 
    } else if(h == 1){
        console.log(h)
        !MP
    }else {
       
        MP()
    }
    console.log(MP)
    
    
    
    console.log(passC)
    passC()
    
  
}) 
//end sign

Arr = NeuArr
ArrDiv = NewArrDiv

//creation function click form log "send"
$('.form2 input[type="button"]').click(function(){
     let form = document.forms['form-log'];
     let mailAdrLog = form.elements.em_l.value;
     let passLog = form.elements.pass_us.value;
     let Id
     let i
     let Index

     for(i = 0;i<NeuArr.length;i++){
        Id = NeuArr[i]
        if(mailAdrLog === Id[0] && passLog === Id[1]){
            Index = i
            console.log(i)
            console.log(Index)
        
            createDiv()
            
            $('.form, .form2, .sign, .log').css({
               display: 'none',
            })
            $('header p').text(mailAdrLog)
            let CrUl
            
            for(let j = 0;j<EndwarrLiC[i].length;j++){
                let CrLi = document.createElement('li')
                CrLi.innerHTML = '<p class="someP">'+EndwarrLiC[i][j]+'</p>' + '<input type="checkbox" class="check">'
                CrUl = document.getElementById('ulId')
                CrUl.appendChild(CrLi)
            }
        }
    }
       

})
//end log