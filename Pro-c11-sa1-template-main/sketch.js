var weight = [  ];
function weight1(){
  average = 0;
  for(var i = 0; i < weight.length; i = i+1){
    average = average+ weight[i]

    
  }
  total = average / weight.length
  console.log(total)

}
function setup() {
  createCanvas(400,400);
  weight1()



}

function draw() 
{
  background(30);
}

 

