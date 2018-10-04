const { expect } = require('chai');
const context = require('../context/index');

describe('CONTEXT', () => {
  it('exerciseA', () => {
    const result = context.exerciseA();
    expect(result).to.equal('instance of ship');
  });

  it('exerciseB', () => {
    const result = context.exerciseA();
    expect(result).to.equal('window');
  });

  it('exerciseC', () => {
    const result = context.exerciseA();
    expect(result).to.equal('el');
  });

  it('exerciseD', () => {
    const result = context.exerciseA();
    expect(result).to.equal('window');
  });

  it('exerciseE', () => {
    const result = context.exerciseA();
    expect(result).to.equal('window');
  });

  it('exerciseF', () => {
    const result = context.exerciseA();
    expect(result).to.equal('instance of hero');
  });

  it('exerciseG', () => {
    const result = context.exerciseA();
    expect(result).to.equal('window');
  });

  it('exerciseH', () => {
    const result = context.exerciseA();
    expect(result).to.equal('obj');
  });

  it('exerciseI', () => {
    const result = context.exerciseA();
    expect(result).to.equal('poets');
  });

  it('exerciseJ', () => {
    const result = context.exerciseA();
    expect(result).to.equal('#btn');
  });
});