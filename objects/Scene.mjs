export class Scene {
    constructor(context) {
        this.context = context;
        this.items = []
    }

    addItem(item) {
        this.items.push(item)
    }

    drawItems() {
        this.items.forEach(value => {
            console.log(value.getName());
            value.draw();
        })
        this.context.fill();
    }
}
