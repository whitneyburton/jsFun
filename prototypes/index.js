const { kitties } = require('./datasets/kitties');
const { clubs } = require('./datasets/clubs');
const { mods } = require('./datasets/mods');
const { cakes } = require('./datasets/cakes');
const { classrooms } = require('./datasets/classrooms');
const { breweries } = require('./datasets/breweries');
const { instructors, cohorts } = require('./datasets/turing');
const { bosses, sidekicks } = require('./datasets/bosses');
const { constellations, stars } = require('./datasets/astronomy');
const { weapons, characters } = require('./datasets/ultima');






// SINGLE DATASETS
// =================================================================

// DATASET: kitties from ./datasets/kitties
const kittyPrompts = {
  orangeKittyNames() {
    // Return an array of just the names of kitties who are orange e.g.
    // 
    // ['Tiger', 'Snickers']

    const result = kitties.filter((kitty) => {
        return kitty.color === 'orange';
    }).map((kitty) => {
        return kitty.name;
    });
    return result;

    // Annotation:
    // First we had to determine what prototype method to use, and we chose the filter method because we knew that we would need to return an array that is a subset of the original array based on the color property. The filter method requires a boolean to be returned, so for each kitty if the color property is orange, that kitty object will be pushed into the new array. Then we needed to return only the name of each kitty, so we chose the map method to iterate over the new filtered array and grab just the names of the orange kitties. 
  },

  sortByAge() {
    // Sort the kitties by their age

    const result = kitties.sort((a, b) => {
        return b.age - a.age;
    });
    return result;

    // Annotation:
    // The method to use to sort all of the kitties by their age is the sort method. The sort method takes two parameters which we passed in as a and b. The sort method returns b.age - a.age so that the new sorted array will go from oldest to youngest.
  },

  growUp() {
    // Return an array of kitties who have all grown up by 2 years e.g.
    // [{
    //   name: 'Felicia',
    //   age: 4,
    //   color: 'grey'
    // },
    // {
    //   name: 'Tiger',
    //   age: 7,
    //   color: 'orange'
    // },
    // ...etc]

    const result = kitties.map((kitty) => {
        kitty.age += 2;
        return kitty;
    });
    return result;
  }

    // Annotation:
    // In order to return an array of kitties who have all grown up by 2 years, we will use the mao method because we know we will be returning an array of the same length as the dataset array that we are working with. For each kitty object within the array, we are working directly with the age property and adding/re-assigning 2 to their current age. We then return the kitty object with the new age to the new array which will be created by the map method. 

};



// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------




// DATASET: clubs from ./datasets/clubs
const clubPrompts = {
  membersBelongingToClubs() {
    // Create an object whose keys are the names of people, and whose values are
    // arrays that include the names of the clubs that person is a part of. e.g. 
    // {
    //   Louisa: ['Drama'],
    //   Pam: ['Drama', 'Art', 'Chess'],
    //   ...etc
    // }

    const result = clubs.reduce((acc, club) => {
        club.members.forEach(member => {
            if (!acc[member]) {
                acc[member] = [club.club]
            } else {
                acc[member].push(club.club)
            }
        })  
        return acc;
    }, {});

    return result;

    // Annotation:
    // In order to create a new object of each member and the clubs they belong to, I needed to use the reduce method. The reduce method takes in the parameters of the accumulator (which in this case is an empty object), and the current element (which is the single club instance). Then I used a forEach method in order to iterate over each members property which needed a conditional to first check if the accumulator DOESN'T already have that given members name in it. If it doesn't, it that's that members name and assigns it to an array with that club name that is associated with for that iteration. If it does already exist, it takes that iterations club name and assigns it to the member object. 
  }
};






// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------






// DATASET: mods from ./datasets/mods
const modPrompts = {
  studentsPerMod() {
    // Return an array of objects where the keys are mod (the number of the module)
    // will use map() because the array will be the same length once returned 
    // and studentsPerInstructor (how many students per instructor there are for that mod) e.g.
    // [
    //   { mod: 1, studentsPerInstructor: 9 },
    //   { mod: 2, studentsPerInstructor: 11 },
    //   { mod: 3, studentsPerInstructor: 10 },
    //   { mod: 4, studentsPerInstructor: 8 }
    // ]

    const result = mods.map((mod) => {
        // create studentsPerInstructor variable 
        // assign it to mod.students/mod.instructors 
        let studentsPerInstructor = (mod.students / mod.instructors);
        return {mod: mod.mod, studentsPerInstructor: studentsPerInstructor};
    });
    return result;

    // Annotation:
    // Since we are returning an array of the same length and data type, we will use the map method. The map method will iterate through each individual mod object and assign a new variable of studentsPerInstructor to the quotient of the mod objects students property divided by the instructors property (both numbers). Each iteration will return an object whose first key is mod: and the value being the mod's mod property (the number 1, 2, 3, or 4) and second key:value pair being the studentsPerInstructor. The map method will return a new array of these objects. 
  }
};






// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------






// DATASET: cakes from ./datasets/cakes
const cakePrompts = {
  stockPerCake() {
    // Return an array of objects that include just the flavor of the cake and how
    // much of that cake is in stock e.g.
    // [ 
    //    { flavor: 'dark chocolate', inStock: 15 },
    //    { flavor: 'yellow', inStock: 14 },
    //    ..etc
    // ]

    const result = cakes.map((cake) => {
        return {
            flavor: cake.cakeFlavor,
            inStock: cake.inStock
        }
    });
    return result;

    // Annotation:
    // By using the map method we will return an array of the same length and data type (objects). On each iteration on each cake object, the map method will return an object whose key value pairs are only the flavor (value being the original cakeFlavor property) and inStock (value being the original inStock property).
  },

  onlyInStock() {
    // Return an array of only the cakes that are in stock
    // e.g.
    // [
    //   {
    //   cakeFlavor: 'dark chocolate',
    //   filling: null,
    //   frosting: 'dark chocolate ganache',
    //   toppings: ['dutch process cocoa', 'toasted sugar', 'smoked sea salt'],
    //   inStock: 15
    // },
    // {
    //   cakeFlavor: 'yellow',
    //   filling: 'citrus glaze',
    //   frosting: 'chantilly cream',
    //   toppings: ['berries', 'edible flowers'],
    //   inStock: 14
    // },
    // ..etc
    // ]

    const result = cakes.filter((cake) => {
        return cake.inStock;
    });
    return result;

    // Annotation:
    // In order to return only the cakes that are in stock (therefore an array of a different length of the original), you need to use the filter method to find only the cakes that result in cake.inStock returning "true". The filter method then puts those that are true into a new array. 
  },
  
  totalInventory() {
    // Return the total amount of cakes in stock e.g.
    // 59

    const result = cakes.reduce((acc, cake) => {
        acc += cake.inStock;
        return acc;
    }, 0);
    return result;

    // Annotation:
    // The reduce method iterates over each cake and starting at 0 for the accumulator, it adds the number thats held as the value for inStock and then that is assigned to be the new accumulator value for the next iteration. Therefore, after the reduce method has iterated over every cake in the cakes array, it will return the accumulator which will have added every value together and will be the total amount of cakes in stock. 
  },

  allToppings() {
    // Return an array of all unique toppings (no duplicates) needed to bake
    // every cake in the dataset e.g.
    // ['dutch process cocoa', 'toasted sugar', 'smoked sea salt', 'berries', ..etc]

    const result = cakes.reduce((acc, cake) => {
        cake.toppings.forEach(topping => {
            if (acc.indexOf(topping) === -1) {
                acc.push(topping);
            }
        })
        return acc;
    }, []);
    return result;

    // Annotation:
    // In order to create a new array of only the unique toppings needed, you need to use the reduce method so that you can start your initial value as an empty array, and then push each unique topping into that array (also, we know that it's reduce because we can see that the length of this new array will be different that the existing array). By looking at the cake objects property of toppings and then running a forEach loop on each specific topping, we can then create a condition which checks to make sure that within the accumulator (an array with the current unique toppings) that the topping the forEach loop is currently looking at doesn't already exist within the array by making sure that that indexOf method doesn't return a value of -1 (falsy). IF that index returns falsy, which means that that topping hasn't been added yet, it will then execute the code which runs the push method on the accumulator which adds that unique topping to our new array. 
  },

  groceryList() {
    // I need to make a grocery list. Please give me an object where the keys are
    // each topping, and the values are the amount of that topping I need to buy e.g.
    // { 
    //    'dutch process cocoa': 1,
    //    'toasted sugar': 3,
    //    'smoked sea salt': 3,
    //    'berries': 2, 
    //    ...etc
    // }

    const result = cakes.reduce((groceryListObj, cake) => {
        cake.toppings.forEach(topping => {
            if (!groceryListObj[topping]) {
              groceryListObj[topping] = 1;
            } else {
              groceryListObj[topping]++;
            }
        })
        return groceryListObj;
    }, {});
    return result;

    // Annotation:
    // The reduce method allows us to create a new empty object as our accumulator. We know that we need this method because we are working with an array dataset and need to return an object. Within the reduce method, we run a forEach loop on each toppings property of each cake object within the array. On each forEach iteration, we run a conditional to first see if each individual topping is already included in the object (by using the bang operator to return true/false whether or not that specific topping is already included) and then if it isn't, that topping is added to the array and assigned to the value of 1 to start. If that topping is already included, then we increment the value of that topping by 1 so that the counter is increased each time that ingredient is needed more than once. After the forEach loop has completed, we return the entire groceryListObj. 
  }
};






// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------






// DATASET: classrooms from ./datasets/classrooms
const classPrompts = {
  feClassrooms() {
    // Create an array of just the front-end classrooms. e.g.
    // [
    //   { roomLetter: 'A', program: 'FE', capacity: 32 },
    //   { roomLetter: 'C', program: 'FE', capacity: 27 },
    //   { roomLetter: 'E', program: 'FE', capacity: 22 },
    //   { roomLetter: 'G', program: 'FE', capacity: 29 }
    // ]

    const result = classrooms.filter(classroom => {
        return classroom.program === 'FE';
    });
    return result;

    // Annotation:
    // The filter method allows us to look at each individual classroom and check to see if the program property is strictly equal to 'FE', and if that evaluates to true, then it keeps that object within the array. If not, it excludes that from the array. 
  },

  totalCapacities() {
    // Create an object where the keys are 'feCapacity' and 'beCapacity',
    // and the values are the total capacity for all classrooms in each program e.g.
    // { 
    //   feCapacity: 110,
    //   beCapacity: 96
    // }

    const result = classrooms.reduce((capacityObj, classroom) => {
      if (classroom.program === 'FE') {
        capacityObj.feCapacity += classroom.capacity;
      } else {
        capacityObj.beCapacity += classroom.capacity;
      }
        return capacityObj;
    }, { feCapacity: 0, beCapacity: 0 });
    return result;

    // Annotation:
    // Right away I know that I know that I will need to use the reduce method because I will be creating a new object that has different keys from the cakes objects. The two parameters for the reduce method are the accumulator, which is an empty object named capacityObj, and the current element, which here is each classroom. I assigned the two objects key:value pairs within the empty object because I knew I only had two specific keys to assign. Within the reduce method I included a conditional if statement which checked to see if the current elements program property has a value of 'FE', and if so, assign and add that current elements capacity value to the feCapacity key's value. If the conditional doesn't evaluate to true, it bumps to the else statement which does the same process for the beCapacity key. 
  },

  sortByCapacity() {
    // Return the array of classrooms sorted by their capacity (least capacity to greatest)

    // 
    // iterate over the capacity property of the classrooms object 
    // 

    // const result = kitties.sort((a, b) => {
    //     return b.age - a.age;
    // });

    const result = classrooms.sort((a, b) => {
        return a.capacity - b.capacity;
    });
    return result;

    // Annotation:
    // Because I want to sort the classrooms by capacity I know that I need the sort method. This method sorts the array by each indices capacity property and returns them in ascending order. 
  }
};






// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------






// DATASET: breweries from ./datasets/breweries
const breweryPrompts = {
  getBeerCount() {
    // Return the total beer count of all beers for every brewery e.g.
    // 40

// we have one array 
// we want a single number 
// use reduce()
// acc will be a sum of all the breweries beer arrays 
// on each iteration, look at the beers property and get the array.length
// add/assign that to our accumulator 
    const result = breweries.reduce((sum, brewery) => {
        return sum += brewery.beers.length;
    }, 0)
    return result;

    // Annotation:
    // In order to work with an array and return a single number, I know that I will need to use the reduce method. I begin the accumulator at 0 because I will be adding each breweries beer count to that starting value. The reduce method iterates over each brewery and looks at its 'beers' property length, and adds/assigns that length number to the sum (which is the parameter we passed as the accumulator). 
    // *** IMPORTANT - must assign the brewery.beers.length to the sum, rather than vice versa. This is like how we assign a variable name to the variable value and not vice versa. When I first did this backwards, the following getBreweryBeerCount's test wouldn't pass because the brewery.beers.length was being added at each beerCount iteration and not showing each breweries individual beerCounts. 
  },

  getBreweryBeerCount() {
    // Return an array of objects where each object has the name of a brewery
    // and the count of the beers that brewery has e.g.
    // [
    //  { name: 'Little Machine Brew', beerCount: 12 },
    //  { name: 'Ratio Beerworks', beerCount: 5},
    // ...etc.
    // ]

// given an array 
// given back an array 
// use map

    const result = breweries.map(brewery => {
        return { name: brewery.name, beerCount: brewery.beers.length }
    })
    return result;

    // Annotation:
    // Here we are returning an array of the same length as the dataset we are working with so we are using the map method. The map method iterates over each brewery within the array, and returns an object with the key value pairs of brewery's name property and the brewery's beers property's length. 
  },

  findHighestAbvBeer() {
    // Return the beer which has the highest ABV of all beers
    // e.g.
    // { name: 'Barrel Aged Nature\'s Sweater', type: 'Barley Wine', abv: 10.9, ibu: 40 }

    const result = breweries.reduce((beerArray, brewery) => {
      beerArray = beerArray.concat(brewery.beers);
      return beerArray;
    }, []).sort((a, b) => {
      return b.abv - a.abv;
    });
    return result.shift();

    // Annotation:
    // We know to use the reduce method because we are working with an array and need to return an object. However, we actually first need to use that reduce method to take all of the breweries beers property (which is an array) and concat them into one large array so that we can sort them. Therefore, the reduce method creates a beerArray variable and assigns it to the value of each breweries beers property concatted with the current beerArray on each iteration. The reduce method then returns the total beerArray which now has all of the beers every brewery has listed. We then chain the sort method upon this so that we can take that beerArray and sort each beer's abv property from greatest to least. This returns the new sorted array. Once the sort method has completed, the final return returns the result but has the shift() method upon it so that it actually only returns the first element within the beerArray which is the beer with the highest ABV. 
  }
};






// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------






// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------






// DOUBLE DATASETS
// =================================================================

// DATASET: instructors, cohorts from ./datasets/turing
const turingPrompts = {
  studentsForEachInstructor() {
    // Return an array of instructors where each instructor is an object
    // with a name and the count of students in their module. e.g. 
    // [
    //  { name: 'Pam', studentCount: 21 },
    //  { name: 'Robbie', studentCount: 18 }
    // ]

    // map over instructors array 
    // find the matching cohort for our current instructor 
    // grab the studentCount value from the matching cohort 
    // return an object with the instructor name and studentCount as properties 

// will need instructor.name and cohorts.module 
    const result = instructors.map(instructor => {
        let matchingCohort = cohorts.find(cohort => {
        return cohort.module === instructor.module;
        })        

        let numberOfStudents = matchingCohort.studentCount; 
        
        return {name: instructor.name, studentCount: numberOfStudents}
    });
        return result;

    // Annotation:
    // Write your annotation here as a comment
  },

  studentsPerInstructor() {
    // Return an object of how many students per teacher there are in each cohort e.g.
    // { 
    // cohort1806: 9,
    // cohort1804: 10.5
    // }

    // start with an array 
    // we need an object 
    // will need reduce method 

    const result = cohorts.reduce((ratioObj, cohort) => {
        let matchingCohorts = instructors.filter(instuctor => {
            return instuctor.module === cohort.module;
        });
        ratioObj['cohort' + cohort.cohort] = cohort.studentCount / matchingCohorts.length;
        return ratioObj;
    }, {});
    return result;

    // Annotation:
    // Write your annotation here as a comment
  },

  modulesPerTeacher() {
    // Return an object where each key is an instructor name and each value is
    // an array of the modules they can teach based on their skills. e.g.:
    // { 
    //   Leta: [2, 4],
    //   Nathaniel: [2],
    //   Robbie: [4],
    //   Pam: [2, 4]
    // }

    // given two arrays 
    // want an object 
    // method: reduce()
    // because we we will each instructor as a key, we know we can start with the instructors object 

    // first, we need to iterate over instructors and grab each ones name and set it as the key 
    // then, we need to have a forEach to check each subject that each instructor teaches 
    // and check that against the cohorts.curriculum array to see if they match and if so, push the mod # into the array 

    const result = instructors.reduce((obj, instructor) => {
        let modsCanTeach = obj[instructor.name] = [];
        instructor.teaches.forEach(subject => {
          cohorts.forEach(cohort => {
            if (cohort.curriculum.includes(subject) && !modsCanTeach.includes(cohort.module)) {
              modsCanTeach.push(cohort.module);
            } 
          })
        })
        return obj;
    }, {} );
    return result;

    // Annotation:
    // Write your annotation here as a comment
  },

  curriculumPerTeacher() {
    // Return an object where each key is a curriculum topic and each value is
    // an array of instructors who teach that topic e.g.:
    // { 
    //   html: [ 'Travis', 'Louisa' ],
    //   css: [ 'Travis', 'Louisa' ],
    //   javascript: [ 'Travis', 'Louisa', 'Christie', 'Will' ],
    //   recursion: [ 'Pam', 'Leta' ]
    // }

    // have two arrays 
    // need an object
    // REDUCE 

    const result = cohorts.reduce((obj, cohort) => {
      cohort.curriculum.forEach(subject => {
        obj[subject] = [];
        instructors.forEach(instructor => {
          if (instructor.teaches.includes(subject)) {
            obj[subject].push(instructor.name);
          }
        })
      })

      return obj;
    }, {} );

    return result;

    // Annotation:
    // Write your annotation here as a comment
  }
};






// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------






// DATASET: bosses, sidekicks from ./datasets/bosses
const bossPrompts = {
  bossLoyalty() {
    // Create an array of objects that each have the name of the boss and the sum loyalty of all their sidekicks. e.g.:
    // [
    //   { bossName: 'Jafar', sidekickLoyalty: 3 },
    //   { bossName: 'Ursula', sidekickLoyalty: 20 },
    //   { bossName: 'Scar', sidekickLoyalty: 16 }
    // ]

    // we are given two arrays 
    // we need an array 
    // use map

    const result = Object.keys(bosses).reduce((array, boss) => {
      let name = bosses[boss].name;
      let loyaltySum = sidekicks.filter(sidekick => {
        return sidekick.boss === name;
      }).reduce((sum, sidekick) => {
        return sum += sidekick.loyaltyToBoss;
      }, 0)
      array.push({ bossName: name, sidekickLoyalty: loyaltySum })
      return array;
    }, []);
    return result;

    // Annotation:
    // Write your annotation here as a comment
  }
};






// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------






// DATASET: constellations, stars } from ./datasets/astronomy
const astronomyPrompts = {
  starsInConstellations() {
    // Return an array of all the stars that appear in any of the constellations
    // listed in the constellations object e.g.
    // [ 
    //   { name: 'Rigel',
    //     visualMagnitude: 0.13,
    //     constellation: 'Orion',
    //     lightYearsFromEarth: 860,
    //     color: 'blue' },
    //   { name: 'Betelgeuse',
    //     visualMagnitude: 0.5,
    //     constellation: 'Orion',
    //     lightYearsFromEarth: 640,
    //     color: 'red' }
    // ]

    // we are given an object and an array 
    // we want an array 
    // use filter method 

    const result = stars.filter(star => { 
        let passFilter = false;
        Object.keys(constellations).forEach(constellationKey => { 
            if (constellations[constellationKey].stars.includes(star.name)) {
                passFilter = true;
            }
        })
        return passFilter;
    });
    return result;

    // Annotation:
    // In order to create a new array which includes stars that appear in the contellations you use the filter method on the stars array. The filter takes in each individual star, which is an object. In order to access the properties within each object you use Object.keys of the constellations object, and then with those keys you utilize a forEach iterator method over each of the constellations. forEach takes in each contellationKey and runs a conditional which checks to see if each individual constellations stars property includes the star name. If it does, then it assigns the passFilter to true, which will then add that star object into the array which is being returned from the filter method. 
  },

  starsByColor() {
    // Return an object with keys of the different colors of the stars,
    // whose values are arrays containing the star objects that match e.g.
    // {
    //   blue: [{obj}, {obj}, {obj}, {obj}, {obj}],
    //   white: [{obj}, {obj}],
    //   yellow: [{obj}, {obj}],
    //   orange: [{obj}],
    //   red: [{obj}]
    // }

    const result = 'REPLACE WITH YOUR RESULT HERE';
    return result;

    // Annotation:
    // Write your annotation here as a comment
  },

  constellationsStarsExistIn() {
    // Return an array of the names of the constellations that the brightest stars are part of e.g.
    // [ 'Canis Major',
    //   'Carina',
    //   'Boötes',
    //   'Lyra',
    //   'Auriga',
    //   'Orion',
    //   'Canis Minor',
    //   'Eridanus',
    //   'Orion',
    //   'Centaurus' ]

    const result = 'REPLACE WITH YOUR RESULT HERE';
    return result;

    // Annotation:
    // Write your annotation here as a comment
  }
};






// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------






// DATASET: charaters, weapons from ./datasets/ultima
const ultimaPrompts = {
  totalDamage() {

    // Return the sum of the amount of damage for all the weapons that our characters can use
    // Answer => 113

    const result = 'REPLACE WITH YOUR RESULT HERE';
    return result;

    // Annotation:
    // Write your annotation here as a comment
  },

  charactersByTotal() {

    // Return the sum damage and total range for each character as an object. 
    // ex: [ { Avatar: { damage: 27, range: 24 }, { Iolo: {...}, ...}

    const result = 'REPLACE WITH YOUR RESULT HERE';
    return result;

    // Annotation:
    // Write your annotation here as a comment
  },
};



module.exports = {
  breweryPrompts,
  turingPrompts,
  clubPrompts,
  bossPrompts,
  classPrompts,
  modPrompts,
  kittyPrompts,
  cakePrompts,
  astronomyPrompts,
  ultimaPrompts
};