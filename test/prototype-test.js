const { expect } = require('chai');
const { turingPrompts, piePrompts, clubPrompts,
        bossPrompts, classPrompts, modPrompts,
        kittyPrompts, astronomyPrompts, cakePrompts } = require('../prototypes/index');

describe('PROTOTYPES', () => {


  describe('Turing Prompts', () => {
    it('studentsForEachInstructor', () => {
      const result = turingPrompts.studentsForEachInstructor();
      expect(result).to.deep.equal([{"name":"Pam","studentCount":21},{"name":"Brittany","studentCount":21},{"name":"Nathaniel","studentCount":21},{"name":"Robbie","studentCount":18},{"name":"Leta","studentCount":18},{"name":"Travis","studentCount":30},{"name":"Louisa","studentCount":30},{"name":"Christie","studentCount":20},{"name":"Will","studentCount":20}]);
    });

    it('studentsPerInstructor', () => {
      const result = turingPrompts.studentsPerInstructor();
      expect(result).to.deep.equal({ cohort1806: 15, cohort1804: 7, cohort1803: 10, cohort1801: 9 });
    });

    it('modulesPerTeacher', () => {
      const result = turingPrompts.modulesPerTeacher();
      expect(result).to.deep.equal({Pam: [2, 4],Brittany: [2, 4],Nathaniel: [2, 4],Robbie: [4],Leta: [4, 2],Travis: [1, 2, 3, 4],Louisa: [1, 2, 3, 4],Christie: [1, 2, 3, 4],Will: [1, 2, 3, 4 ]});
    });

    it('curriculumPerTeacher', () => {
      const result = turingPrompts.curriculumPerTeacher();
      expect(result).to.deep.equal({ html: [ 'Travis', 'Louisa' ],css: [ 'Travis', 'Louisa' ],javascript: [ 'Travis', 'Louisa', 'Christie', 'Will' ],recursion: [ 'Pam', 'Leta' ],scope: [ 'Pam', 'Nathaniel', 'Will' ],oop: [ 'Brittany', 'Nathaniel', 'Will' ],react: [ 'Christie', 'Will' ],redux: [ 'Will' ],pwas: [ 'Brittany', 'Robbie', 'Leta', 'Louisa' ],mobile: [ 'Nathaniel' ],node: [ 'Pam', 'Robbie', 'Leta', 'Louisa', 'Christie' ] });
    });
  });


  describe('Club Prompts', () => {
    it('membersBelongingToClubs', () => {
      const result = clubPrompts.membersBelongingToClubs({ Louisa: [ 'Drama', 'Art' ],Pam: [ 'Drama', 'Chess', 'Newspaper' ],Nathaniel: [ 'Drama', 'Astronomy' ],Leta: [ 'Band', 'Newspaper', 'Astronomy' ],Robbie: [ 'Band', 'Chess', 'FBLA' ],Jhun: [ 'Band', 'Art' ],Will: [ 'Band' ],David: [ 'Chess', 'Newspaper', 'FBLA' ],Brittany: [ 'Chess', 'Newspaper' ],Christie: [ 'Newspaper', 'FBLA' ] });
      expect(result).to.deep.equal();
    });
  });


  describe('Boss Prompts', () => {
    it('bossLoyalty', () => {
      const result = bossPrompts.bossLoyalty();
      expect(result).to.deep.equal([ { bossName: 'Scar', sidekickLoyalty: 16 },{ bossName: 'Ursula', sidekickLoyalty: 20 },{ bossName: 'Jafar', sidekickLoyalty: 3 } ]);
    });
  });


  describe('Class Prompts', () => {
    it('feClassrooms', () => {
      const result = classPrompts.feClassrooms();
      expect(result).to.deep.equal([ { roomLetter: 'A', program: 'FE', capacity: 32 },{ roomLetter: 'C', program: 'FE', capacity: 27 },{ roomLetter: 'E', program: 'FE', capacity: 22 },{ roomLetter: 'G', program: 'FE', capacity: 29 } ]);
    });

    it('totalCapacities', () => {
      const result = classPrompts.totalCapacities();
      expect(result).to.deep.equal({ FE: 110, BE: 96 });
    });

    it('sortByCapacity', () => {
      const result = classPrompts.sortByCapacity();
      expect(result).to.deep.equal([ { roomLetter: 'H', program: 'BE', capacity: 18 },{ roomLetter: 'F', program: 'BE', capacity: 19 },{ roomLetter: 'E', program: 'FE', capacity: 22 },{ roomLetter: 'C', program: 'FE', capacity: 27 },{ roomLetter: 'B', program: 'BE', capacity: 29 },{ roomLetter: 'G', program: 'FE', capacity: 29 },{ roomLetter: 'D', program: 'BE', capacity: 30 },{ roomLetter: 'A', program: 'FE', capacity: 32 } ]);
    });

  });


  describe('Mod Prompts', () => {
    it('studentsPerMod', () => {
      const result = modPrompts.studentsPerMod();
      expect(result).to.deep.equal([ { mod: 1, studentsPerInstructor: 9 },{ mod: 2, studentsPerInstructor: 11 },{ mod: 3, studentsPerInstructor: 10 },{ mod: 4, studentsPerInstructor: 8 } ]);
    });
  });


  describe('Kitty Prompts', () => {
    it('orangeKittyNames', () => {
      const result = kittyPrompts.orangeKittyNames();
      expect(result).to.deep.equal([ 'Tiger', 'Snickers' ]);
    });

    it('sortByAge', () => {
      const result = kittyPrompts.sortByAge();
      expect(result).to.deep.equal([ { name: 'Snickers', age: 8, color: 'orange' },{ name: 'Tiger', age: 5, color: 'orange' },{ name: 'Felicia', age: 2, color: 'grey' },{ name: 'Max', age: 1, color: 'tuxedo' } ]);
    });

    it('growUp', () => {
      const result = kittyPrompts.growUp();
      expect(result).to.deep.equal([{ name: 'Felicia', age: 4, color: 'grey' },{ name: 'Tiger', age: 7, color: 'orange' },{ name: 'Snickers', age: 10, color: 'orange' },{ name: 'Max', age: 3, color: 'tuxedo' } ]);
    });
  });


  describe('Pie Prompts', () => {
  });


  describe('Astronomy Prompts', () => {
    it('starsInConstellations', () => {
      const result = astronomyPrompts.starsInConstellations();
      expect(result).to.deep.equal();
    });

    it('starsByColor', () => {
      const result = astronomyPrompts.starsByColor();
      expect(result).to.deep.equal();
    });

    it('constellationsStarsExistIn', () => {
      const result = astronomyPrompts.constellationsStarsExistIn();
      expect(result).to.deep.equal();
    });
  });


  describe('Cake Prompts', () => {
    it('allToppings', () => {
      const result = cakePrompts.allToppings();
      expect(result).to.deep.equal();
    });

    it('groceryList', () => {
      const result = cakePrompts.groceryList();
      expect(result).to.deep.equal();
    });

    it('stockPerCake', () => {
      const result = cakePrompts.stockPerCake();
      expect(result).to.deep.equal();
    });

    it('totalInventory', () => {
      const result = cakePrompts.totalInventory();
      expect(result).to.deep.equal();
    });

    it('onlyInStock', () => {
      const result = cakePrompts.onlyInStock();
      expect(result).to.deep.equal();
    });
  });


});