export class STheory {
    constructor(type) {
        this.errorType = type;
        this.examples = [];
    }

    addExample(example) {
        this.examples.push(example);
    }

    setExamples(examples) {
        this.examples = examples;
    }

}