export class SLevel {
    constructor() {
        this.sequences = []
    }

    setName(name) {
        this.name = name;
    }

    addSequence(sequence) {
        this.sequences.push(sequence);
    }
}