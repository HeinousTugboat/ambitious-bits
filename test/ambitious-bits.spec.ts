import 'mocha';
import { expect } from 'chai';
import AmbitiousBits from '../src/ambitious-bits';

describe('base tests', function () {
    it('should at least run', function () {
        expect(true).to.be.true;
    });
});
describe('AmbitiousBits', function () {
    it('should exist', function () {
        expect(AmbitiousBits).to.exist;
    });
    it('should be invokable', function () {
        const bits = new AmbitiousBits;
        expect(bits).to.exist;
        expect(bits instanceof AmbitiousBits).to.be.true;
    });
});
