package com.mycompany.scannonpreview.interfaces;

import com.mycompany.scannonpreview.objects.Vector2D;

import java.awt.*;

public interface Movable {

    public void move();
    public Vector2D getDrawSize();
    public Vector2D getDrawLocation();

    public Component getComponent();
}
