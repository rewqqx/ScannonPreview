/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.mycompany.scannonpreview.objects;

/**
 * @author crewd
 */
public class Vector2D {

    public double x = 0;
    public double y = 0;

    public Vector2D(double x, double y) {
        this.x = x;
        this.y = y;
    }

    public double toAngle() {
        return Math.atan((double) y / (double) x);
    }

}
