export class Background {
    constructor(context) {
        this.curAngle = 0;
        this.context = context;
    }

    drawBackground() {

        this.context.fillStyle = "#67befd";
        this.curAngle += 0.03;

        this.context.translate(1920/2, 200);

        this.context.rotate(this.curAngle * Math.PI / 180);

        let delta = (360 / 16) * Math.PI / 180;


        for (let i = 1; i <= 16; i++) {

            if (i % 2 == 0) {
                this.context.fillStyle = "#fed934";
            } else {
                this.context.fillStyle = "#fabc26";
            }

            this.context.rotate(-delta);
            this.context.beginPath();
            this.context.moveTo(0, 0);
            this.context.lineTo(1920, -100);
            this.context.lineTo(1920, 1080);
            this.context.fill();
        }
        this.context.setTransform(1, 0, 0, 1, 0, 0);
    }

}