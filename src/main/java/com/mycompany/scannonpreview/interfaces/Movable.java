package com.mycompany.scannonpreview.interfaces;

import com.mycompany.scannonpreview.objects.Vector2D;
import com.mycompany.scannonpreview.ui.entities.Cannon;
import com.mycompany.scannonpreview.ui.entities.Panel;

import java.awt.*;


public interface Movable {

    public void move();
    public Vector2D getDrawSize();
    public Vector2D getDrawLocation();

    public Cannon getOwner();

    public Component getComponent();

    public void collide(Movable instigator);

    public Panel getPanel();
}
