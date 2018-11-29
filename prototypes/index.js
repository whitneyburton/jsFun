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
    // First we had to determine what prototype method to use, and we chose the filter method because we knew that we would need to return an array that is a subset of the original array based on the color property. Then we needed to return only the name of each kitty, so we chose the map method to grab just the names of the orange kitties. 
  },

  sortByAge() {
    // Sort the kitties by their age
    // let sortedKitties = [...kitties]
    // ... is the spread operator to make a copy of the kitties dataset
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
    // Write your annotation here as a comment
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
    // In order to return an array that includes only the flavor and inStock properties of each cake, the 
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
    // In order to return only the cakes that are in stock, you need to use the filter method to find only the cakes that result in cake.inStock returning "true". The filter method then puts those that are true into a new array. 
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
    // The reduce method here iterates over each cake and starting at 0 for the accumulator, it adds the number thats held as the value for inStock and then that is assigned to be the new accumulator value for the next iteration. 
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
    // The reduce method allows us to create a new empty object. In the 
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

// we need to return a single value (reduce method)
// to get the total, we will need breweries.beers.length

    const result = breweries.reduce((beerSum, currentBrewery) => {
      return beerSum += currentBrewery.beers.length;
    }, 0);
    return result;

    // Annotation:
    // Write your annotation here as a comment
  },

  getBreweryBeerCount() {
    // Return an array of objects where each object has the name of a brewery
    // and the count of the beers that brewery has e.g.
    // [
    //  { name: 'Little Machine Brew', beerCount: 12 },
    //  { name: 'Ratio Beerworks', beerCount: 5},
    // ...etc.
    // ]

// we are given the breweries array 
// we want an array
// map method 
    const result = breweries.map(brewery => {
      return { name: brewery.name, beerCount: brewery.beers.length };
    });
    return result;

    // Annotation:
    // Write your annotation here as a comment
  },

  findHighestAbvBeer() {
    // Return the beer which has the highest ABV of all beers
    // e.g.
    // { name: 'Barrel Aged Nature\'s Sweater', type: 'Barley Wine', abv: 10.9, ibu: 40 }

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

    const result = 'REPLACE WITH YOUR RESULT HERE';
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

    const result = 'REPLACE WITH YOUR RESULT HERE';
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






// DATASET: bosses, sidekicks from ./datasets/bosses
const bossPrompts = {
  bossLoyalty() {
    // Create an array of objects that each have the name of the boss and the sum
    // loyalty of all their sidekicks. e.g.:
    // [
    //   { bossName: 'Jafar', sidekickLoyalty: 3 },
    //   { bossName: 'Ursula', sidekickLoyalty: 20 },
    //   { bossName: 'Scar', sidekickLoyalty: 16 }
    // ]

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

    const result = 'REPLACE WITH YOUR RESULT HERE';
    return result;

    // Annotation:
    // Write your annotation here as a comment
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