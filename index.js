// Code your solution in this file!
function distanceFromHqInBlocks (location) {
    //returns the number of blocks given a value
    let head_quarter = 42;
    let distance = head_quarter - location; 
    return ( distance > 0 ? distance : -distance );
  }
  
  function distanceFromHqInFeet (location) {
    const FeetPerBlock = 264;  
    return (FeetPerBlock*distanceFromHqInBlocks(location));
    // calls distanceFromHqInBlocks from inside the distanceFromHqInFeet function, passing the argument from distanceFromHqInFeet into distanceFromHqInBlocks
    //the return value of distanceFromHqInBlocks can then be used to calculate feet
  }

  function distanceTravelledInFeet (beginning , destination) {
    const  FeetPerBlock= 264; 
    return (Math.abs(beginning-destination)*FeetPerBlock);
  }


  function calculatesFarePrice (beginning , destination) {
    const  FeetPerBlock= 264; 
    let distance = distanceTravelledInFeet(beginning , destination);
    let retVal = ''
    if(distance > 2500)
    {
        retVal = 'cannot travel that far'
    }
    else if(distance < 400)
    {
        retVal = 0
    }else if(distance > 2000 && distance < 2501)
    {   
        // retVal = (2000 - 400)*2
        retVal = 25
    }else
    {
        retVal = ((Math.min(distance-400,2000-400))*2)/100
    }
    return retVal;
  }