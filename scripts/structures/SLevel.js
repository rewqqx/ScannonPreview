export class SLevel {
    constructor() {
        this.sequences = []
        this.type = "default";
    }

    setName(name) {
        this.name = name;
    }

    setIcon(icon) {
        this.iconPath = icon;
    }

    setType(type) {
        this.type = type;
    }

    addSequence(sequence) {
        this.sequences.push(sequence);
    }

    getRandomSequence() {
        return this.sequences[Math.floor(Math.random() * this.sequences.length)];
    }
}