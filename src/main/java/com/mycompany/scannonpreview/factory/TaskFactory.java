package com.mycompany.scannonpreview.factory;

import com.mycompany.scannonpreview.objects.Vector2D;
import com.mycompany.scannonpreview.ui.Window;
import com.mycompany.scannonpreview.ui.entities.PanelTask;

import javax.swing.*;
import java.util.ArrayList;
import java.util.List;

import static com.mycompany.scannonpreview.singleton.GameHandler.getGameHandler;

public class TaskFactory {
    private int SPAWN_RATE = 5000;

    private List<String> expressions = new ArrayList<>();

    private Vector2D size = new Vector2D(200, 80);

    public TaskFactory() {
        generateTestExpressions();
    }

    private void generateTestExpressions() {
        expressions.add("x+3=5");
        expressions.add("x-1=6");
        expressions.add("x=2");
    }

    private void tick() {
        Thread render = new Thread(new Runnable() {
            public void run() //Этот метод будет выполняться в побочном потоке
            {
                while (expressions.size() > 0) {
                    try {
                        spawn();
                        Thread.sleep(SPAWN_RATE);
                    } catch (InterruptedException e) {
                        throw new RuntimeException(e);
                    }
                }
            }
        });
        render.start();    //Запуск потока
    }

    private void spawn() {
        if (expressions.size() > 0) {
            PanelTask task = new PanelTask(expressions.get(0));
            task.setVectorLocation(new Vector2D(500, 0));
            getGameHandler().addMovable(task);

            System.out.println("Task generated: " + expressions.get(0));
            expressions.remove(0);
        }
    }




    public void start() {
        tick();
    }
}
