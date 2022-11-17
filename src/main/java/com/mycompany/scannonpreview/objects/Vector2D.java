/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.mycompany.scannonpreview.objects;

/**
 * @author crewd
 */
public class Vector2D {

    public int x = 0;
    public int y = 0;

    public Vector2D(int x, int y) {
        this.x = x;
        this.y = y;
    }

    public double toAngle() {
        return Math.atan((double) y / (double) x);
    }

}
