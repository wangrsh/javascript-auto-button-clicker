var i = 0;                   

function myLoop () {          
   setTimeout(function () {    
     $("#MainContent_DataList1_btna_"+i).click();  //button id= ...btna_0,btna_1  
      i++;                    
      if (i<100) { 

         myLoop(); 	  
      }
      
      else
         
         {
            alert("done!");
         }
     
   }, 2500)
}

myLoop();








