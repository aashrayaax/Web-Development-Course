// let r = Math.random()
let first, second, third;
// console.log(r)
let r = Math.random()
if(r<0.33) 
    {
    first = "Crazy";
}
else if(r>0.33 && r<=0.66)
    {
    first = "Amazing"
    }
else if(r>0.66)
{
    first = "Fire"
}



random = Math.random()

if (random<0.33) 
    {
    second = "Engine";
}
else if(random>0.33 && random<=0.66)
    {
    second = "Foods"
}
else if(random>0.66)
{
    second = "Garments"
}



rand = Math.random()

if(rand<0.33)
    {
    third = "Bros";
}
else if(rand>0.33 && rand<=0.66) 
{
    third = "Limited"
}
else if(rand>0.66)
{
    third = "Hub"
}


console.log(`${first} ${second} ${third}`)




