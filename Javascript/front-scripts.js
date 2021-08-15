
// /* Color switcher */

// let darkState = true;
// let switcher = document.getElementById("switcher");

// switcher.addEventListener('click',function(){

//     let rootElement = document.querySelector(':root');
//     if(darkState){
//         rootElement.style.setProperty('--background', '#fff');
//         rootElement.style.setProperty('--background-of-l-menu', '#ebcd44');
//         darkState = false;
//     }
//     else{
//         rootElement.style.setProperty('--background' , '#525252');
//         rootElement.style.setProperty('--background-of-l-menu', '#456123');
//         darkState = true;
//     }
// });

// /* end Color switcher */

// document.addEventListener('readystatechange',function(){
//     filterBTNS();
// });

// function filterBTNS(){
//     let filterBtn = document.querySelector('.filterbtns');
//     filterBtn.textContent ="فیلتر";
//     filterBtn.classList.add('btns');
//     filterBtn.classList.add('no-margin');
//     filterBtn.classList.add('btns-medium-min');
//     filterBtn.classList.add('flex-row');
//     let img = document.createElement('img');
//     img.src="./img/filter.png";
//     img.alt="filter";
//     img.classList.add('f-img-size');
//     filterBtn.appendChild(img)
// }

// /* */

// {
// let filterItems = document.getElementsByClassName('fillter-items');
// for(let i=0 ; i<filterItems.length ; i++){
//     let tabsid = "filterstabs"+i;
//     filterItems[i].addEventListener('click',function(){tabs_display(tabsid)});
//     filterItems[i].addEventListener('click',function(){change_bg(this)});
// }
// function tabs_display(id){
//     let filterTabs = document.getElementsByClassName('filter-tabs');
//     for(let i=0 ; i<filterTabs.length ; i++){
//         filterTabs[i].classList.remove('block');
//         filterTabs[i].classList.add('none');
//     }   
//     document.getElementById(id).classList.remove('none');
//     document.getElementById(id).classList.add('block');
// }
// function  change_bg(e){
//     for(let i=0 ; i<filterItems.length ; i++){
//         filterItems[i].classList.remove('filters-selected')
//     }
//     e.classList.add('filters-selected');
// }
// }
// /* selects options */

// {
// let allChecks = document.getElementById('all-pg');
// allChecks.addEventListener('click',function(){
//     let checkBoxes = document.querySelectorAll('#filterstabs0 input[type=checkbox]');
//     if(allChecks.checked){
//         for(let i=0 ; i<checkBoxes.length ; i++){
//             checkBoxes[i].checked=true;
//         }
//     }
//     else{
//         for(let i=0 ; i<checkBoxes.length ; i++){
//             checkBoxes[i].checked=false;
//         }
//     }
// });

// let checkBoxes2 = document.querySelectorAll('#filterstabs0  input[type=checkbox]');
// for(let i=1 ; i<checkBoxes2.length ; i++){
//     checkBoxes2[i].addEventListener('click',function(){
//         uncheckall();
//     });
// }
// function uncheckall(){
//     let checks =1;
//     for(let i=1 ; i<checkBoxes2.length ; i++){
//         if(checkBoxes2[i].checked==false){
//             allChecks.checked=false;
//         }
//         else if(checkBoxes2[i].checked==true){
//             checks++;
//         }
//         if(checks==checkBoxes2.length){
//             allChecks.checked=true  ;
//         }
//     }
// }
// }

// {
// let allChecks2 = document.getElementById('all-pg2');
// allChecks2.addEventListener('click',function(){
//     let checkBoxe_s = document.querySelectorAll('#filterstabs1 input[type=checkbox]');
//     if(allChecks2.checked){
//         for(let i=0 ; i<checkBoxe_s.length ; i++){
//             checkBoxe_s[i].checked=true;
//         }
//     }
//     else{
//         for(let i=0 ; i<checkBoxe_s.length ; i++){
//             checkBoxe_s[i].checked=false;
//         }
//     }
// });

// let checkBoxes_2 = document.querySelectorAll('#filterstabs1  input[type=checkbox]');
// for(let i=1 ; i<checkBoxes_2.length ; i++){
//     checkBoxes_2[i].addEventListener('click',function(){
//         uncheckall();
//     });
// }
// function uncheckall(){
//     let checks =1;
//     for(let i=1 ; i<checkBoxes_2.length ; i++){
//         if(checkBoxes_2[i].checked==false){
//             allChecks2.checked=false;
//         }
//         else if(checkBoxes_2[i].checked==true){
//             checks++;
//         }
//         if(checks==checkBoxes_2.length){
//             allChecks2.checked=true  ;
//         }
//     }
// }
// }

cin>>a ;
var j;
for (var i= 2 ; i < a/2 ; i++){
    if(a%i==0){
        j++
    }
}

if (j==0){
    cout<<"is prime";
}
else{
    "not prime1;"
}