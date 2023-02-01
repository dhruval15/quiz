function qa(){

  let answer1 = document.querySelector('input[name="ques1"]:checked');
  let answer2 = document.querySelector('input[name="ques2"]:checked');
  let answer3 = document.querySelector('input[name="ques3"]:checked');
  let answer4 = document.querySelector('input[name="ques4"]:checked');
  let answer5 = document.querySelector('input[name="ques5"]:checked');
  let total = 0;
  
  let correct = document.getElementById('p2');
  let correctVal = correct.value;

      document.getElementById('kohli').style.color = "#008000";
      if(answer1 != null && answer1.value == correctVal){
        total++; 
      }
    
      if(answer1 != null && answer1.value != correctVal ){
        let t = document.querySelector('input[name="ques1"]:checked');
        let t1 = t.nextElementSibling;
        t1.style.color = "red";
       
       //answer1.classList.add("err");
        //document.querySelector('label[name="ques1"]').style.color = "red";
      //  console.log(x);
        //let k = document.querySelectorAll('input[name="d1"]');
        //console.log(k);
      
      
      document.getElementById('kohli').style.color = "LightGreen"; 
      // let w = document.querySelectorAll('label[name="d1"]').forEach(function(e){
      //   e.style.color = "red";
      //  });
     
        // for(let i=0;i<x.length;i++){
        //    x[i].classList.add("err");
        // }
      }
     
    
  
  let correct1 = document.getElementById('p3');
  let correctVal1 = correct1.value;

  document.getElementById('six').style.color = "#008000";
  
    if(answer2 != null && answer2.value == correctVal1){
      total++; 
    }
    if(answer2 != null && answer2.value != correctVal1){
      let t = document.querySelector('input[name="ques2"]:checked');
      let t1 = t.nextElementSibling;
      t1.style.color = "red";
    
    /*  let w = document.querySelectorAll('label[name="ques2"]');
      for(let i=0;i<w.length;i++){
        w[i].classList.add("err");
    }*/
      document.getElementById('six').style.color = "LightGreen"; 
    }
 
 let correct2 = document.getElementById('p4');
 let correctVal2 = correct2.value;

  document.getElementById('st').style.color = "#008000";
   if(answer3 != null && answer3.value == correctVal2){
     total++; 
   }
   if(answer3 != null && answer3.value != correctVal2){
    let t = document.querySelector('input[name="ques3"]:checked');
      let t1 = t.nextElementSibling;
      t1.style.color = "red";
    
   /* let w = document.querySelectorAll('label[name="d3"]'); 
      for(let i=0;i<w.length;i++){
        w[i].classList.add("err");
    }*/
    document.getElementById('st').style.color = "LightGreen"; 
  }

let correct4 = document.getElementById('p5');
  let correctVal4 = correct4.value;

  document.getElementById('vt').style.color = "green";
    if(answer4 != null && answer4.value == correctVal4){
      total++; 
    }
    if(answer4 != null && answer4.value != correctVal4){
      let t = document.querySelector('input[name="ques4"]:checked');
      let t1 = t.nextElementSibling;
      t1.style.color = "red";
    
     /* let w = document.querySelectorAll('label[name="d4"]');
      for(let i=0;i<w.length;i++){
        w[i].classList.add("err");
    }*/
      document.getElementById('vt').style.color = "LightGreen"; 
    }
 
 let correct5 = document.getElementById('p6');
  let correctVal5 = correct5.value;

  document.getElementById('four').style.color = "green";
    if(answer5 != null && answer5.value == correctVal5){
      total++; 
    }
    if(answer5 != null && answer5.value != correctVal5){
      let t = document.querySelector('input[name="ques5"]:checked');
      let t1 = t.nextElementSibling;
      t1.style.color = "red";
    
    /*  let w = document.querySelectorAll('label[name="d5"]');
      for(let i=0;i<w.length;i++){
        w[i].classList.add("err");
    }*/
      document.getElementById('four').style.color = "LightGreen"; 
    }
 
    let q = document.getElementsByClassName('q2');
    document.getElementById("btn1").style.display = "none";
    
    document.getElementById('r1').innerHTML = " You Scored " +total + " out of " + q.length;
}


  