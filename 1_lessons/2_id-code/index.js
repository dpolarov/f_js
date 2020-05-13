
var timestamp = '',cluster = '', user = '' , type = '';


for (var i=0;i < 10;i++){
 
  timestamp = Math.round(Date.now() / 1000).toString(16).padStart(8, "0");
  cluster = Math.floor(Math.random() * Math.floor(254)+1).toString(16).padStart(1, "0");
  type = Math.floor(Math.random() * Math.floor(15)+1).toString(16).padStart(1, "0");
  user = Math.floor(Math.random() * Math.floor(1000055)+1).toString(16).padStart(6, "0");
  
  
  //console.log(timestamp + ':' + cluster + ':' + type +':' + user);
  console.log(timestamp +  cluster + type + user);
  
}