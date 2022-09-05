const map_3d = document.querySelector('#map_3d');
const comparisons= document.querySelector("#comparison");
const timelapses = document.querySelector('#timelapse');
timelapses.addEventListener('click',timelapse);
comparisons.addEventListener("click", comparison);
map_3d.addEventListener('click', map3d);


// let dynamic_content= document.getElementById('dynamic_content');










function comparison(){
 
const my_video= document.getElementById('myVideo');
const my_3d=document.getElementById('my3d');
const my_map=document.getElementById('map');
if (my_map.style.display==='none'){
    my_map.style.display = "block";
    
}

comparisons.style.background='#3CB769';

 my_3d.style.display = "none";
 my_video.style.display = "none"; 

 timelapses.style.background='transparent';
 map_3d.style.background='transparent';

 
//  map_3d.onmouseover = function() 
//  {
//      this.style.background = "red";
//  }
//  map_3d.onmouseleave = function() 
//  {
//      this.style.background = "none";
//  }


   
   
}

function timelapse(){

  const my_video= document.getElementById('myVideo');
  const my_3d=document.getElementById('my3d');
  const my_map=document.getElementById('map');

  timelapses.style.background='#3CB769';
  my_video.style.display = "block";
  
  my_3d.style.display = "none";
  my_map.style.display = "none";



  comparisons.style.background='transparent';
  map_3d.style.background='transparent';

      
    
    
    
}

function map3d(){
  // const map_3d= document.createElement('iframe');
  // map_3d.setAttribute('id','my3d');
  // map_3d.src='https://geoapps.icimod.org/godawari3d/'

  // if ( document.getElementById('dynamic_content').childNodes.length===1){
  //   dynamic_content.append(map_3d);

  // }
  //  else{
    
    // let mapnode2= document.getElementById('dynamic_content').childNodes[1];
    // dynamic_content.removeChild(mapnode2);
    // dynamic_content.append(map_3d);
    const my_video= document.getElementById('myVideo');
    const my_3d=document.getElementById('my3d');
    const my_map=document.getElementById('map');
    my_3d.style.display = "block";
    my_map.style.display = "none";
    my_video.style.display = "none";
    map_3d.style.background='#3CB769';
    timelapses.style.background='transparent';
    comparisons.style.background='transparent';
  
  
    
    
    
  //  }

}

