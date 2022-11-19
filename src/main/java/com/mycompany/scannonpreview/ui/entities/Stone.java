package com.mycompany.scannonpreview.ui.entities;

import com.mycompany.scannonpreview.interfaces.Movable;
import com.mycompany.scannonpreview.objects.Vector2D;

import javax.swing.*;
import java.awt.*;
import java.awt.image.BufferedImage;

import static com.mycompany.scannonpreview.utils.ResourceUtils.*;

public class Stone extends JPanel implements Movable {


    Vector2D size = new Vector2D(64, 64);

    Vector2D speed = new Vector2D(1,1);
    int speedScaler = 20;
    Vector2D location = new Vector2D(0,0);
    BufferedImage texture = null;

    public Stone(Vector2D location, Vector2D speed) {

        this.speed = speed;
        this.location = new Vector2D(location.x - size.x/2, location.y-size.y/2);

        try {
            texture = resizeImage(getBufferedImageFromFile("resources/textures/stone.svg"), size);
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    private void resizeTexture() {
        if (texture.getWidth() != getWidth() || texture.getHeight() != getHeight()) {
            size = new Vector2D(getWidth(), getHeight());
            texture = resizeImage(texture, size);
        }
    }

    @Override
    protected void paintComponent(Graphics g) {

        if (texture == null) {
            return;
        }

        resizeTexture();

        Graphics2D graphic = (Graphics2D) g;
        graphic.drawImage(texture, null, 0, 0);

    }

    @Override
    public void move() {
        location = new Vector2D(location.x + speed.x * speedScaler, location.y + speed.y * speedScaler);
    }

    @Override
    public Vector2D getDrawSize() {
        return size;
    }

    @Override
    public Vector2D getDrawLocation() {
        return location;
    }

    @Override
    public Component getComponent() {
        return this;
    }
}
