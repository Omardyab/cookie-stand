'use strict';
const Seattle={
   minc:23,
   maxc :65,
   avg:6.3,
   city: 'Seattle',
   cookiesperhour: [],
   workinghours : ['06:00 am','07:00 am', '08:00 am', '09:00 am', '10:00 am','11:00 am', '12:00 pm', '01:00 pm', '02:00 pm', '03:00 pm', '04:00 pm', '05:00 pm', '06:00 pm' ,'07:00 pm'],
   

    Customersperhour : function getRandomIntInclusive(min, max) {
    let minc = Math.ceil(min);
    let maxc = Math.floor(max);
    console.log(minc);
    return Math.floor(Math.random() * (maxc - minc + 1) + minc);
    },
    cookiesperhour: function (){
        for(let i=0;i<this.workinghours.length;i++)
        {
            let num=Math.ceil(this.avg *this.Customersperhour(this.minc,this.maxc));                  
            this.cookiesperhour.push(`${this.workinghours[i]} : ${this.num} cookies purchased`);
            let total=total+num,
        
        this.cookiesperhour.push('A total of ${this.total} cookies have been purchased');
        return this.cookiesperhour;
    
    cookiespurchased : function (){
        let container = document.getElementById('city');
        let h6 = document.createElement('h6');
        container.appendChild(h6);
        h6.textContent = `${this.location} cookies have been purchased, Daily:`;
        let unorderedList = document.createElement('ul');
        container.appendChild(unorderedList);
        for (let i = 0 ; i <= this.workinghours.length ; i++){
          let li = document.createElement('li');
          unorderedList.appendChild(li);
          li.textContent = this.cookiespurchased()[i];
        }
      }
};
  Seattle.Customersperhour(Seattle.min,Seattle.max);
  Seattle.cookiesperhour();
  Seattle.cookiespurchased();
