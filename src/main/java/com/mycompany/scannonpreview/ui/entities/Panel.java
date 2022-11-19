
package com.mycompany.scannonpreview.ui.entities;


import com.mycompany.scannonpreview.interfaces.Movable;
import com.mycompany.scannonpreview.objects.Vector2D;

import javax.swing.*;
import java.awt.*;

public class Panel extends javax.swing.JPanel implements Movable {


    Vector2D size = new Vector2D(256, 128);

    Vector2D speed = new Vector2D(0, 1);
    Vector2D location = new Vector2D(0, 0);

    Color color = new Color(255, 255, 255);

    private boolean activated = false;

    private String expression = "";
    private int reward = 0;

    public Panel(String expression, int reward) {
        this.reward = reward;
        this.expression = expression;
    }


    public Vector2D getVectorLocation() {
        return location;
    }

    public void setVectorLocation(Vector2D location) {
        this.location = location;
    }


    @Override
    public void move() {
        location = new Vector2D(location.x + speed.x, location.y + speed.y);
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

    @Override
    public void collide(Movable instigator) {
        if (!activated) {
            activated = true;
            System.out.println("Hit: ");
        }
    }

    @Override
    protected void paintComponent(Graphics g) {
        int width = getWidth();
        int height = getHeight();

        int a = 20, b = 20, c = 20, d = 20;

        Graphics2D graphics = (Graphics2D) g;

        graphics.setColor(color);

        if (activated) {
            if (reward > 0) {
                graphics.setColor(new Color(50, 200, 50));
            } else {
                graphics.setColor(color);
            }
        }

        //graphics.setColor(new Color(getBackground().getRed(), getBackground().getGreen(), getBackground().getBlue(), getBackground().getAlpha()));

        // Draw Corners
        graphics.fillOval(0, 0, a, a);

        graphics.fillOval(width - b, 0, b, b);

        graphics.fillOval(width - c, height - c, c, c);

        graphics.fillOval(0, height - d, d, d);

        // Draw Borders
        graphics.fillRect(0, a / 2, width / 2, height - d / 2 - a / 2);
        graphics.fillRect(width / 2, b / 2, width, height - c / 2 - b / 2);

        graphics.fillRect(a / 2, 0, width - b / 2 - a / 2, height / 2);
        graphics.fillRect(d / 2, height / 2, width - c / 2 - d / 2, height / 2 + 1);

        drawCenteredString(graphics, expression, new Rectangle(0, 0, width, height), new Font("Arial", Font.BOLD , 32));


    }

    public void drawCenteredString(Graphics g, String text, Rectangle rect, Font font) {
        // Get the FontMetrics
        FontMetrics metrics = g.getFontMetrics(font);

        g.setColor(new Color(50, 50, 50));
        // Determine the X coordinate for the text
        int x = rect.x + (rect.width - metrics.stringWidth(text)) / 2;
        // Determine the Y coordinate for the text (note we add the ascent, as in java 2d 0 is top of the screen)
        int y = rect.y + ((rect.height - metrics.getHeight()) / 2) + metrics.getAscent();
        // Set the font
        g.setFont(font);
        // Draw the String
        g.drawString(text, x, y);
    }
}
