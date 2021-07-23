    const superbowlWin = (record) => {
    //  console.log(record)}
        const foundSeason = record.find(function(season){
          return season.result === "W"
      })
        if(foundSeason){
        return foundSeason.year
      }
    }
  





    // function superbowlWin(record){
    //   const foundSeason = redord.find(season => season.result === "W")
    //   record.find(winChecker)
    // }


//  function winChecker(record){
     
//       season.result === "W"
//     }

//iterates through objects in an array
//assigns season that equals === "W" to a variable
//if that season equals === "W" then return season year
