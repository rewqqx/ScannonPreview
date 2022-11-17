/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.mycompany.scannonpreview.controller;

import com.mycompany.scannonpreview.interfaces.Controllable;

/**
 * @author crewd
 */
public abstract class Controller {
    protected Controllable owner;

    public void setOwner(Controllable owner) {
        this.owner = owner;
    }
}
