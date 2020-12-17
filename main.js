 var menu_array=["cheesy delight","panner tikka masala","farmhouse pizza","chilliy pizza","cheese burst farmhouse pizza"];
 function getmenu(){
     var htmldata;
     html="<ol class='menulist'>"
     menu_array.sort();
     for(var i=0;i<menu_array.length;i++){
         htmldata=htmldata+'<li>' +menu_array[i] + '</li>';
     }
     htmldata=htmldata+"</ol>"
     document.getElementsById("dissply_menu").innerHTML =htmldata;
     document.getElementById("add_item").Value;
    }
    function add_item(){
        var htmldata;
        var item=document.getElementById("add_item").Value
        menu_array.push(item);
        menu_array.sort();
        htmldata="<section class= 'cards'>"
        for(var i=0;i<menu_array.length;i++){
        htmldata=htmldata+'<div class="card">'+'<img src="images/pizzalmg.png"/>'+menu_array[i]+'</div>'
        } 
        htmldata=htmldata+"</section>"
        document.getElementById("addTopings").innerHTML =htmldata;
      }
  
 


       