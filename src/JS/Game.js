//multiplier for random
let multiplier = 1000;

//Start the game
function playGame()
{
    let randomNum = Math.floor(Math.random() * multiplier); //gets a random number between 0 and 1000 and ensures that it is an integer
    let usr = document.getElementById("userGuess").value;
    if(isNaN(parseInt(usr)))
    {
        alert("A valid number was not entered. Try again.");
    }
    let randomDigits = randomNum.toString();

    let map1 = new Map();
    let map2 = new Map();

    setupMap(map1, usr);
    setupMap(map2, randomDigits);

    updateOutputFields(usr, randomDigits);
    let win = hasSameNumOfNumbers(map1, map2);

    if(win)
    {
        document.getElementById("result").innerText = "You won!!!!!!";
    }
    else
    {
        document.getElementById("result").innerText = "No such luck for your today...";
    }

}

function setupMap(map, str)
{
    for (let i = 0; i < str.length; i++)
    {
        //if the map already contains the given key, increment the current value related to that key
        if(map.has(str.charAt(i)))
        {
            map.set(str.charAt(i).toString(), map.get(str.charAt(i))+1);
        }
        else
        {
            map.set(str.charAt(i).toString(), 1);
        }
    }
    return map;
}

//comparing the contents of two maps
function hasSameNumOfNumbers(map1, map2)
{
    if(map1.size !== map2.size)
    {
        return false;
    }

    //loop through all the keys
    for(let key of map1.keys()){
        //check that both maps have identical keys
        if(!map2.has(key)){
            return false;
        }
        else{
            //check that the maps have the same values for their matching keys
            if(map1.get(key) != map2.get(key)){
                return false;
            }
        }
    }

    //everything up to this point has matched
    return true;
}

function updateOutputFields(usr, rand)
{
    let usrGuess = document.getElementById("guessOutput");
    let randGen = document.getElementById("randGenOutput");
    usrGuess.innerText = usr;
    randGen.innerText = rand;
}