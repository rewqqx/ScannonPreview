package com.mycompany.scannonpreview.factory;

import com.mycompany.scannonpreview.objects.StringInt;
import com.mycompany.scannonpreview.objects.Vector2D;
import com.mycompany.scannonpreview.ui.entities.Panel;

import java.util.ArrayList;
import java.util.List;

import static com.mycompany.scannonpreview.singleton.GameHandler.getGameHandler;

public class TaskFactory {
    private int SPAWN_RATE = 6000;

    private List<StringInt> expressions = new ArrayList<>();

    private Vector2D size = new Vector2D(200, 80);

    public TaskFactory() {
        generateTestExpressions();
    }

    private void generateTestExpressions() {
        expressions.add(new StringInt("x+3=5", 0));
        expressions.add(new StringInt("x=8", 30));
        expressions.add(new StringInt("x=5-3", -30));
        expressions.add(new StringInt("x=1", 30));
        expressions.add(new StringInt("x=2", -30));
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
            Panel task = new Panel(expressions.get(0).str , expressions.get(0).val);
            task.setVectorLocation(new Vector2D(350, 0));
            getGameHandler().addMovable(task);

            System.out.println("Task generated: " + expressions.get(0));
            expressions.remove(0);
        }
    }




    public void start() {
        tick();
    }
}
