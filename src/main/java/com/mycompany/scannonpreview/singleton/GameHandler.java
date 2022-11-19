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
                            doCollision();
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
        renderer.add(item.getComponent(), new org.netbeans.lib.awtextra.AbsoluteConstraints((int) item.getDrawLocation().x, (int) item.getDrawLocation().y, (int) item.getDrawSize().x, (int) item.getDrawSize().y));

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
        if (renderer != null) {
            renderer.add(item.getComponent(), new org.netbeans.lib.awtextra.AbsoluteConstraints((int) item.getDrawLocation().x, (int) item.getDrawLocation().y, (int) item.getDrawSize().x, (int) item.getDrawSize().y));
            movableList.add(item);
        }
    }

    public void setRenderer(JPanel panel) {
        renderer = panel;
    }

    public JPanel getRenderer() {
        return renderer;
    }

    private void doCollision() {
        for (Movable a : movableList) {
            for (Movable b : movableList) {
                if (!a.equals(b)) {
                    if (checkCollide(a, b)) {
                        a.collide(b);
                        b.collide(a);
                    }
                }
            }
        }
    }

    private Boolean checkCollide(Movable a, Movable b) {
        if (a.getDrawLocation().x < b.getDrawLocation().x - a.getDrawSize().x) {
            return false;
        }

        if (a.getDrawLocation().y < b.getDrawLocation().y - a.getDrawSize().y) {
            return false;
        }

        if (a.getDrawLocation().x > b.getDrawLocation().x + b.getDrawLocation().x) {
            return false;
        }

        if (a.getDrawLocation().y > b.getDrawLocation().y + b.getDrawLocation().y) {
            return false;
        }

        return true;
    }
}
