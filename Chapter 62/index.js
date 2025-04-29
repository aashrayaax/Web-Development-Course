/* Create a business name generator by combining list of adjectives and shop name and another word


Adjectives:
Crazy 
Amazing
Fire 

Shop Name:
Engine
Foods
Garments

Another Word:
Bros
Limited
Hub



*/

const random = Math.floor(Math.random() * 3) + 1;
console.log(random);

o = {
    1 : "Crazy",
    2 : "Amazing",
    3 : "Fire"

};

o1 = {
    4 : "Engine",
    5 : "Foods",
    6 : "Garments"

};

o2 = {
    7 : "BroadcastChannel",
    8 : "Limited",
    9 : "Hub"
};

if(random<3){
    if(random<3){   
         console.log((`${o[1]} ${o1[4]} ${o2[7]}`)); 
    }
    if(random>3 && random<6){
        console.log((`${o[1]} ${o1[4]} ${o2[7]}`));

    }

//     (o[1, o1[4, o2[7)  
//         (o[1, o1[4, o2[8) 
//              (o[1, o1[4, o2[9)
// (o[1, o1[5, o2[7) 
//      (o[1, o1[5, o2[8) 
//          (o[1, o1[5, o2[9)
// (o[1, o1[6, o2[7) 
//      (o[1, o1[6, o2[8) 
//          (o[1, o1[6, o2[9)

}

