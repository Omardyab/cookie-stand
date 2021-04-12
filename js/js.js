'use strict';

function randomValue(min,max){
  return Math.floor(Math.random() *(max-min+1)+min);
}
let parent=document.getElementById('cont');
let workinghours = ['06:00 am','07:00 am', '08:00 am', '09:00 am', '10:00 am','11:00 am', '12:00 pm', '01:00 pm', '02:00 pm', '03:00 pm', '04:00 pm', '05:00 pm', '06:00 pm' ,'07:00 pm'];
const Seattle={
   minc:23,
   maxc :65,
   avg:6.3,
   city: 'Seattle',
   total:0,
   randomcust:[],
   cookiesperhour: [],    
   calrandcust : function(){
     for(let i=0;i<workinghours.length;i++)
     {
       this.randomcust.push(randomValue(this.minc, this.maxc));
     }
   },
   calcookiesperhour : function(){
     for(let i=0;i<14;i++){
      this.cookiesperhour[i]=Math.ceil(this.randomcust[i]*this.avg);
      this.total=this.total+this.cookiesperhour[i];
      console.log(this.total);
      }
   },
   display : function(){
     let h2=document.createElement('h2');
     parent.appendChild(h2); 
      h2.textContent=this.city;
      let ul =document.createElement('ul');
      parent.appendChild(ul);
      let li=null;
      for(let i=0;i<this.cookiesperhour.length;i++)
      {
          li=document.createElement('li');
          ul.appendChild(li);
          li.textContent=workinghours[i] +':'+ this.cookiesperhour[i]+' Cookies ';
      }
   let totalli=document.createElement('li')
   ul.appendChild(totalli);
   totalli.textContent='Total of '+ this.total+ ' cookies were sold';
  }
}
Seattle.calrandcust();
Seattle.calcookiesperhour();
console.log(Seattle);
Seattle.display();

const Tokyo={
  minc:3,
  maxc :24,
  avg:1.2,
  city: 'Tokyo',
  total:0,
  randomcust:[],
  cookiesperhour: [],    
  calrandcust : function(){
    for(let i=0;i<workinghours.length;i++)
    {
      this.randomcust.push(randomValue(this.minc, this.maxc));
    }
  },
  calcookiesperhour : function(){
    for(let i=0;i<14;i++){
     this.cookiesperhour[i]=Math.ceil(this.randomcust[i]*this.avg);
     this.total=this.total+this.cookiesperhour[i];
     console.log(this.total);
     }
  },
  display : function(){
    let h2=document.createElement('h2');
    parent.appendChild(h2); 
     h2.textContent=this.city;
     let ul =document.createElement('ul');
     parent.appendChild(ul);
     let li=null;
     for(let i=0;i<this.cookiesperhour.length;i++)
     {
         li=document.createElement('li');
         ul.appendChild(li);
         li.textContent=workinghours[i] +':'+ this.cookiesperhour[i]+' Cookies ';
     }
  let totalli=document.createElement('li')
  ul.appendChild(totalli);
  totalli.textContent='Total of '+ this.total+ ' cookies were sold';
 }
}
Tokyo.calrandcust();
Tokyo.calcookiesperhour();
console.log(Tokyo);
Tokyo.display();

const Dubai={
  minc:11,
  maxc :38,
  avg:3.7,
  city: 'Duabi',
  total:0,
  randomcust:[],
  cookiesperhour: [],    
  calrandcust : function(){
    for(let i=0;i<workinghours.length;i++)
    {
      this.randomcust.push(randomValue(this.minc, this.maxc));
    }
  },
  calcookiesperhour : function(){
    for(let i=0;i<14;i++){
     this.cookiesperhour[i]=Math.ceil(this.randomcust[i]*this.avg);
     this.total=this.total+this.cookiesperhour[i];
     console.log(this.total);
     }
  },
  display : function(){
    let h2=document.createElement('h2');
    parent.appendChild(h2); 
     h2.textContent=this.city;
     let ul =document.createElement('ul');
     parent.appendChild(ul);
     let li=null;
     for(let i=0;i<this.cookiesperhour.length;i++)
     {
         li=document.createElement('li');
         ul.appendChild(li);
         li.textContent=workinghours[i] +':'+ this.cookiesperhour[i]+' Cookies ';
     }
  let totalli=document.createElement('li')
  ul.appendChild(totalli);
  totalli.textContent='Total of '+ this.total+ ' cookies were sold';
 }
}
Dubai.calrandcust();
Dubai.calcookiesperhour();
console.log(Dubai);
Dubai.display();

const Paris={
  minc:20,
  maxc :38,
  avg:2.3,
  city: 'Paris',
  total:0,
  randomcust:[],
  cookiesperhour: [],    
  calrandcust : function(){
    for(let i=0;i<workinghours.length;i++)
    {
      this.randomcust.push(randomValue(this.minc, this.maxc));
    }
  },
  calcookiesperhour : function(){
    for(let i=0;i<14;i++){
     this.cookiesperhour[i]=Math.ceil(this.randomcust[i]*this.avg);
     this.total=this.total+this.cookiesperhour[i];
     console.log(this.total);
     }
  },
  display : function(){
    let h2=document.createElement('h2');
    parent.appendChild(h2); 
     h2.textContent=this.city;
     let ul =document.createElement('ul');
     parent.appendChild(ul);
     let li=null;
     for(let i=0;i<this.cookiesperhour.length;i++)
     {
         li=document.createElement('li');
         ul.appendChild(li);
         li.textContent=workinghours[i] +':'+ this.cookiesperhour[i]+' Cookies ';
     }
  let totalli=document.createElement('li')
  ul.appendChild(totalli);
  totalli.textContent='Total of '+ this.total+ ' cookies were sold';
 }
}
Paris.calrandcust();
Paris.calcookiesperhour();
console.log(Paris);
Paris.display();


const Lima={
  minc:2,
  maxc :16,
  avg:4.6,
  city: 'Lima',
  total:0,
  randomcust:[],
  cookiesperhour: [],    
  calrandcust : function(){
    for(let i=0;i<workinghours.length;i++)
    {
      this.randomcust.push(randomValue(this.minc, this.maxc));
    }
  },
  calcookiesperhour : function(){
    for(let i=0;i<14;i++){
     this.cookiesperhour[i]=Math.ceil(this.randomcust[i]*this.avg);
     this.total=this.total+this.cookiesperhour[i];
     console.log(this.total);
     }
  },
  display : function(){
    let h2=document.createElement('h2');
    parent.appendChild(h2); 
     h2.textContent=this.city;
     let ul =document.createElement('ul');
     parent.appendChild(ul);
     let li=null;
     for(let i=0;i<this.cookiesperhour.length;i++)
     {
         li=document.createElement('li');
         ul.appendChild(li);
         li.textContent=workinghours[i] +':'+ this.cookiesperhour[i]+' Cookies ';
     }
  let totalli=document.createElement('li')
  ul.appendChild(totalli);
  totalli.textContent='Total of '+ this.total+ ' cookies were sold';
 }
}
Lima.calrandcust();
Lima.calcookiesperhour();
console.log(Lima);
Lima.display();