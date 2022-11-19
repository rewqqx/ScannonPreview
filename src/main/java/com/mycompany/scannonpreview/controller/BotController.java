package com.mycompany.scannonpreview.controller;

import com.mycompany.scannonpreview.objects.Vector2D;
import com.mycompany.scannonpreview.ui.entities.Panel;

import java.util.List;
import java.util.Random;

import static com.mycompany.scannonpreview.singleton.GameHandler.getGameHandler;

public class BotController extends Controller {

    int FRAME_RATE = 60;


    private Vector2D aim = new Vector2D(0, 0);

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
                        tryShoot();
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
        Vector2D newTarget = new Vector2D(pan.getDrawLocation().x + pan.getDrawSize().x / 2, pan.getDrawLocation().y + pan.getDrawSize().y / 2);
        Vector2D direction = new Vector2D(newTarget.x - aim.x, newTarget.y - aim.y);

        aim = new Vector2D(aim.x + direction.x * 3 / direction.norm(), aim.y + +direction.y * 3 / direction.norm());

        owner.setMouseLocation(aim);
    }


    private void tryShoot() {
        if(selectPanel().reward > 0){
            Random rnd = new Random();
            int val = rnd.nextInt(100);
            if(val == 1){
                owner.action();
            }
        }
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
