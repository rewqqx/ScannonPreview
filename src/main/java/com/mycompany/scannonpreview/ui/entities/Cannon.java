/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.mycompany.scannonpreview.ui.entities;

import com.mycompany.scannonpreview.interfaces.Controllable;
import com.mycompany.scannonpreview.controller.Controller;
import com.mycompany.scannonpreview.objects.Vector2D;

import java.awt.Graphics;
import java.awt.Graphics2D;
import java.awt.image.BufferedImage;
import javax.swing.JPanel;

import static com.mycompany.scannonpreview.utils.ResourceUtils.*;

/**
 * @author crewd
 */
public class Cannon extends JPanel implements Controllable {

    private double rotation = 0;

    Vector2D size = new Vector2D(512, 512);
    Vector2D aim = new Vector2D(0, 0);

    BufferedImage texture = null;

    Controller controller;

    public Cannon() {
        try {
            texture = resizeImage(getBufferedImageFromFile("resources/textures/cannon.svg"), size);
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    public void setController(Controller controller) {
        this.controller = controller;
        controller.setOwner(this);
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
        graphic.drawImage(rotateImage(texture, rotation), null, 0, 0);

    }

    private void updateRotation(double rotation) {
        this.rotation = rotation;
        updateUI();
    }

    @Override
    public void setMouseLocation(Vector2D location) {
        try {
            aim = new Vector2D(location.x - (getWidth() / 2) - getLocationOnScreen().x, location.y - (getHeight() / 2) - getLocationOnScreen().y);
            if (location.x - (getWidth() / 2) - getLocationOnScreen().x < 0) {
                updateRotation(Math.PI+aim.toAngle());
            } else {
                updateRotation(aim.toAngle());
            }
        } catch (Exception e) {

        }
    }

    @Override
    public void action() {
    }
}
