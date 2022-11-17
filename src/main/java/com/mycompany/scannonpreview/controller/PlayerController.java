package com.mycompany.scannonpreview.controller;

import com.github.kwhat.jnativehook.GlobalScreen;
import com.github.kwhat.jnativehook.NativeHookException;
import com.github.kwhat.jnativehook.mouse.NativeMouseEvent;
import com.github.kwhat.jnativehook.mouse.NativeMouseInputListener;
import com.github.kwhat.jnativehook.mouse.NativeMouseListener;
import com.mycompany.scannonpreview.objects.Vector2D;


public class PlayerController extends Controller implements NativeMouseInputListener {

    public PlayerController(){
        try {
            GlobalScreen.registerNativeHook();

            GlobalScreen.addNativeMouseListener(this);
            GlobalScreen.addNativeMouseMotionListener(this);
        } catch (NativeHookException e) {
            throw new RuntimeException(e);
        }
    }

    public void nativeMouseClicked(NativeMouseEvent e) {
        owner.action();
    }

    public void nativeMouseMoved(NativeMouseEvent e) {
        owner.setMouseLocation(new Vector2D(e.getX(), e.getY()));
    }

}
