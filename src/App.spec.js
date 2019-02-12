import React from 'react';
import {shallow} from 'enzyme';
import App from './App';

describe('App', () => {
  describe('foo method', () => {
    it('should return foo', () => {
      const instance = shallow(<App/>).instance();
      expect(instance.foo()).to.equal('foo');
    });
  });
});