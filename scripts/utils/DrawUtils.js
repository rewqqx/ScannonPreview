export function roundedRect(context, x, y, width, height, radius, fill) {
    context.beginPath();
    context.moveTo(x, y + radius);
    context.arcTo(x, y + height, x + radius, y + height, radius);
    context.arcTo(x + width, y + height, x + width, y + height - radius, radius);
    context.arcTo(x + width, y, x + width - radius, y, radius);
    context.arcTo(x, y, x, y + radius, radius);
    if (fill) {
        context.fill();
    } else {
        context.stroke();
    }
}

// TODO: Rename function and arguments:
// degrees -> rotateAngleInDegrees
// drawImage -> transformAndDraw
// h,w,x,y
export function drawImage(context, image, x, y, w, h, degrees) {
    context.save();
    context.translate(x + w / 2, y + h / 2);
    context.rotate(degrees);
    context.translate(-x - w / 2, -y - h / 2);
    context.drawImage(image, x, y, w, h);
    context.restore();
}