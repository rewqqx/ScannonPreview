package com.mycompany.scannonpreview.controller;

import com.mycompany.scannonpreview.objects.Vector2D;
import com.mycompany.scannonpreview.ui.entities.Panel;

import java.util.List;

import static com.mycompany.scannonpreview.singleton.GameHandler.getGameHandler;

public class BotController extends Controller {

    int FRAME_RATE = 60;

    public BotController() {
        tick();
    }

    private void tick() {
        Thread render = new Thread(new Runnable() {
            public void run() //Этот метод будет выполняться в побочном потоке
            {
                while (true) {
                    try {
                        Thread.sleep((int) (1000 / FRAME_RATE));
                        setLocation();
                    } catch (InterruptedException e) {
                        throw new RuntimeException(e);
                    }
                }
            }
        });
        render.start();    //Запуск потока
    }

    private void setLocation() {
        Panel pan = selectPanel();
        owner.setMouseLocation(new Vector2D(pan.getDrawLocation().x + pan.getDrawSize().x / 2, pan.getDrawLocation().y + pan.getDrawSize().y / 2));
    }

    private Panel selectPanel() {
        List<Panel> list = getGameHandler().getPanels();

        for (Panel item : list) {
            if (!item.activated) {
                return item;
            }
        }

        return new Panel("", 0);
    }

}
