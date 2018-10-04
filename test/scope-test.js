const { expect } = require('chai');
const scope = require('../scope/index');

describe('SCOPE', () => {
  it('exerciseA', () => {
    const result = scope.exerciseA();
    expect(result).to.deep.equal([
      { 'A': 'Ben' },
      { 'B': 'CardiB' },
      { 'C': 'CardiB' },
      { 'D': 'Paul' }
    ]);
  });

  it('exerciseB', () => {
    const result = scope.exerciseB();
    expect(result).to.deep.equal([
      { 'A': 75 },
      { 'B': 64 },
      { 'C': 64 },
      { 'D': 30 }
    ]);
  });

  it('exerciseC', () => {
    const result = scope.exerciseC();
    expect(result).to.deep.equal([
      { 'A': 'Yo' },
      { 'B': 'Hey' },
      { 'C': 'Hey' },
      { 'D': 'Hello' }
    ]);
  });

  it('exerciseD', () => {
    const result = scope.exerciseD();
    expect(result).to.deep.equal([
      { 'A': 'hi' },
      { 'B': 'welcome' },
      { 'C': 'welcome' },
      { 'D': 'howdy' }
    ]);
  });

  it('exerciseE', () => {
    const result = scope.exerciseE();
    expect(result).to.deep.equal([
      { 'C': 'Brittany' },
      { 'A': 'Nathaniel' },
      { 'B': 'Nathaniel' },
      { 'D': 'Brittany' }
    ]);
  });

  it('exerciseF', () => {
    const result = scope.exerciseF();
    expect(result).to.deep.equal([
      { 'A': 'Spot' },
      { 'B': 'Spot' },
      { 'C': 'Biscuit' },
      { 'D': 'Biscuit' },
      { 'E': 'Biscuit' }
    ]);
  });

  it('exerciseG', () => {
    const result = scope.exerciseG();
    expect(result).to.deep.equal([
      { 'A': 'reference error' },
      { 'B': 'mango' },
      { 'C': 'mango' },
      { 'D': 'apple' }
    ]);
  });

  it('exerciseH', () => {
    const result = scope.exerciseH();
    expect(result).to.deep.equal([]);
  });

  it('exerciseI', () => {
    const result = scope.exerciseI();
    expect(result).to.deep.equal([]);
  });

  it('exerciseJ', () => {
    const result = scope.exerciseJ();
    expect(result).to.deep.equal([]);
  });

  it('exerciseK', () => {
    const result = scope.exerciseK();
    expect(result).to.deep.equal([]);
  });

  it('exerciseL', () => {
    const result = scope.exerciseL();
    expect(result).to.deep.equal([]);
  });

  it('exerciseM', () => {
    const result = scope.exerciseM();
    expect(result).to.deep.equal([]);
  });

  it('exerciseN', () => {
    const result = scope.exerciseN();
    expect(result).to.deep.equal([]);
  });

  it('exerciseO', () => {
    const result = scope.exerciseO();
    expect(result).to.deep.equal([]);
  });
});