
package com.mycompany.scannonpreview.ui.entities;


import com.mycompany.scannonpreview.interfaces.Movable;
import com.mycompany.scannonpreview.objects.Vector2D;

import java.awt.*;

public class PanelTask extends javax.swing.JPanel implements Movable {


    Vector2D size = new Vector2D(256, 128);

    Vector2D speed = new Vector2D(0,1);
    Vector2D location = new Vector2D(0,0);

    public PanelTask(String expression) {
        initComponents();

        tExpression.setText(expression);
    }

    public Vector2D getVectorLocation() {
        return location;
    }

    public void setVectorLocation(Vector2D location) {
        this.location = location;
    }


    @SuppressWarnings("unchecked")
    // <editor-fold defaultstate="collapsed" desc="Generated Code">//GEN-BEGIN:initComponents
    private void initComponents() {

        tExpression = new javax.swing.JLabel();

        setLayout(new java.awt.GridBagLayout());

        tExpression.setText("Content");
        add(tExpression, new java.awt.GridBagConstraints());
    }// </editor-fold>//GEN-END:initComponents

    private javax.swing.JLabel tExpression;

    @Override
    public void move() {
        location = new Vector2D(location.x + speed.x, location.y + speed.y);
        setLocation(location.x, location.y);
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
