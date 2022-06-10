const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']
//  const isMatching = drivers.filter(findMatching)
 function findMatching(kadere, newKadere) {
     const isMatching = kadere.filter(
         driverMatch => driverMatch.toLowerCase() === newKadere.toLowerCase()
     )
     return isMatching;
 }
 function fuzzyMatch(drivers, letter) {
    const stringMatch = drivers.filter((driverName) => 
         driverName.slice(0,2) === letter.slice(0, 2)
     )
     return stringMatch;
 } 
