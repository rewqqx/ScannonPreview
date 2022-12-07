export class SGroup {
    constructor() {
        this.levels = []
    }

    setName(name) {
        this.name = name;
    }

    addLevel(level) {
        this.levels.push(level);
    }

    setIconPath(path) {
        this.iconPath = path;
    }

}