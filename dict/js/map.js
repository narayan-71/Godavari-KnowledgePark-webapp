const pre_url='https://geoapps.icimod.org/arcgisimage/services/Godawari/Godawari_2014/ImageServer/WMSServer?'
const post_url='https://geoapps.icimod.org/arcgisimage/services/Godawari/Godawari_2022/ImageServer/WMSServer?'
const extent= [
    
  85.3576817611652245,27.5761525834204058, 85.4110642215543976,27.6097659157246547
  ]
  const attribution = new ol.control.Attribution ({
    collapsible: false
    });
//pre image
const pre =

new ol.layer.Image({
source:  new ol.source.ImageWMS({
 url:pre_url,

  params: {'LAYERS':0},
  attributions: [
      '2014-02-14 satellite imagery vs'
          
     ],
}),
});



//Post image
const post = 

new ol.layer.Image({
source:  new ol.source.ImageWMS({
   url:post_url,
    params: {'LAYERS':0},
    attributions: [
       '2022-03-16 satellite imagery'
           
      ],  
  }),
});



/* Create a new map */
const map = new ol.Map({

  controls:ol.control.defaults({attribution: false}).extend([attribution]),
  target: "map",
  view: new ol.View({
    projection: "EPSG:4326",
    center: [85.385,27.591],
    extent: extent,
      zoom:16,
      minZoom: 15,
      maxZoom: 20,
  }),
  
  layers:[pre,post],
  
  });





//    // define attribution
// // extent

// creating scale
const scaleControl = new ol.control.ScaleLine({
units: 'metric',

});
// // fullscreen
const fullscreen = new ol.control.FullScreen();
  




// Control
const ctrl = new ol.control.Swipe();
// Set Watercolor on left
ctrl.addLayer(pre);
// Toner on right
ctrl.addLayer(post, true);

map.addControl(ctrl);
map.addControl(scaleControl);
map.addControl(fullscreen);
//  const initMap =(function(){
 
  
  
//  })();
  
      
 

  // document.querySelector("#comparison").addEventListener('click',initMap);

