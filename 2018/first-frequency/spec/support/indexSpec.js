//import {frequencyEngine} from '../../index.js';

var index = require("../../index");

describe('Test Frequency Engine', () => {
    it('should add entries', () => {
        let frequencyValues = [+1, +1];

        const compleateFrequency = index.frequencyEngine(frequencyValues);
        expect(compleateFrequency).toBe(2);
    });

    it('should subtract entries', () => {
        let frequencyValues = [-1, -1];

        const compleateFrequency = index.frequencyEngine(frequencyValues);
        expect(compleateFrequency).toBe(-2);
    });

    it('should add and subtract entries', () => {
        let frequencyValues = [+5, -3];

        const compleateFrequency = index.frequencyEngine(frequencyValues);
        expect(compleateFrequency).toBe(2);
    });
});