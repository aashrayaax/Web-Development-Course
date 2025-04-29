function adjective() {
    let a = "Crazy";
    let b = "Amazing";
    let c = "Fire"

    let random = Math.floor(Math.random() * 3);
    {
        switch (random) {

            case 0:
                return a;
            case 1:
                return b;
            case 2:
                return c;
                defualt:
                console.log('Sorry, No more value exists');


        }
    }

}
function ShopNames()
{
    let a="Engine";
    let b="Foods";
    let c="Garments";
    let ran =Math.floor(Math.random()*3);
    {
        switch(ran)
        {
            case 0:
                return a;
                break;
            case 1:
                return b;
                break;
            case 2:
                return c;
                break;
            defualt:
            console.log('Sorry, No more value exists');
        }
    }
}

function AnotherWord()
{
    let a="Bros";
    let b="Limited";
    let c="hub";
    let ran = Math.floor(Math.random()*3);
    {
        switch(ran)
        {
            case 0:
                return a;
                break;
            case 1:
                return b;
                break;
            case 2:
                return c;
                break;
            defualt:
            console.log('Sorry, No more value exists');
        }
    }
}

//Combine all the functions togethers
console.log("The new business name is :" + adjective()+ " "+
ShopNames()+ " " +AnotherWord() );


