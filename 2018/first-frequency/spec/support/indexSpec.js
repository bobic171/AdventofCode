describe('Test Frequency Engine', () => {
    it('should add entries', () => {
        let frequencyEngine = new FrequencyEngine();
        let frequencyValues = [+1, +1];

        const compleateFrequency = frequencyEngine(frequencyValues);
        expect(compleateFrequency == 2);
    });

    it('should subtract entries', () => {
        let frequencyEngine = new FrequencyEngine();
        let frequencyValues = [-1, -1];

        const compleateFrequency = frequencyEngine(frequencyValues);
        expect(compleateFrequency == -2);
    });

    it('should add and subtract entries', () => {
        let frequencyEngine = new FrequencyEngine();
        let frequencyValues = [+5, -3];

        const compleateFrequency = frequencyEngine(frequencyValues);
        expect(compleateFrequency == 2);
    })
});