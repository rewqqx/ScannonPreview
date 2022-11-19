package com.mycompany.scannonpreview.singleton;

import com.mycompany.scannonpreview.interfaces.Movable;

import javax.swing.*;
import java.awt.*;
import java.util.ArrayList;
import java.util.List;

public class GameHandler {
    private static volatile GameHandler singleton;

    private int FRAME_RATE = 30;

    private List<Movable> movableList = new ArrayList<>();

    private JPanel renderer;

    private GameHandler() {
        tick();
    }

    private void tick() {
        Thread render = new Thread(new Runnable() {
            public void run() //Этот метод будет выполняться в побочном потоке
            {
                while (true) {
                    try {
                        if (renderer != null) {
                        moveItems();
                            renderer.updateUI();
                        }
                        Thread.sleep((int) (1000 / FRAME_RATE));
                    } catch (InterruptedException e) {
                        throw new RuntimeException(e);
                    }
                }
            }
        });
        render.start();    //Запуск потока
    }

    private void moveItems() {
        for (Movable item : movableList) {
            item.move();
            reattachMovable(item);
        }
    }

    private void reattachMovable(Movable item) {
        renderer.remove(item.getComponent());
        renderer.add(item.getComponent(), new org.netbeans.lib.awtextra.AbsoluteConstraints(item.getDrawLocation().x, item.getDrawLocation().y, item.getDrawSize().x, item.getDrawSize().y));

    }

    public static GameHandler getGameHandler() {
        if (singleton == null) {
            synchronized (GameHandler.class) {
                singleton = new GameHandler();
            }
        }
        return singleton;
    }

    public void addMovable(Movable item) {
        renderer.add(item.getComponent(), new org.netbeans.lib.awtextra.AbsoluteConstraints(item.getDrawLocation().x, item.getDrawLocation().y, item.getDrawSize().x, item.getDrawSize().y));
        movableList.add(item);
    }

    public void setRenderer(JPanel panel) {
        renderer = panel;
    }

    public JPanel getRenderer() {
        return renderer;
    }
}
