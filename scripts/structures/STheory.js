export class STheory {
    constructor(type) {
        this.type = type;
        this.examples = [];
    }

    addExample(example) {
        this.examples.push(example);
    }

    setExamples(examples) {
        this.examples = examples;
    }

    getRandomExample() {
        return this.examples[Math.floor(Math.random() * this.examples.length)];
    }

}