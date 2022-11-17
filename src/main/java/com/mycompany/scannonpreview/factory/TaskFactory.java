package com.mycompany.scannonpreview.factory;

import com.mycompany.scannonpreview.objects.Vector2D;
import com.mycompany.scannonpreview.ui.Window;
import com.mycompany.scannonpreview.ui.entities.PanelTask;

import javax.swing.*;
import java.util.ArrayList;
import java.util.List;

public class TaskFactory {

    private JFrame frame;

    private int FRAME_RATE = 60;
    private int SPAWN_RATE = 150;

    private int speed = 1;

    private List<String> expressions = new ArrayList<>();
    private List<PanelTask> panels = new ArrayList<>();

    private Vector2D size = new Vector2D(200, 80);

    public TaskFactory(JFrame frame) {
        this.frame = frame;

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
                int CUR_FRAME = SPAWN_RATE;
                while (true) {
                    try {
                        CUR_FRAME += 1;
                        if (CUR_FRAME >= SPAWN_RATE) {
                            CUR_FRAME = 0;
                            spawn();
                        }
                        moveTasks();
                        Thread.sleep((int) (1000 / FRAME_RATE));
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
            panels.add(task);

            System.out.println("Task generated: " + expressions.get(0));
            expressions.remove(0);
        }
    }

    private void moveTasks() {
        for (PanelTask task : panels) {
            ((Window)(frame)).getRenderPanel().remove(task);
            Vector2D oldLocation = task.getVectorLocation();
            task.setVectorLocation(new Vector2D(oldLocation.x, oldLocation.y + speed));
            ((Window)(frame)).getRenderPanel().add(task, new org.netbeans.lib.awtextra.AbsoluteConstraints(task.getVectorLocation().x, task.getVectorLocation().y, size.x, size.y));
        }
        ((Window)(frame)).getRenderPanel().updateUI();
    }

    public void start() {
        tick();
    }
}
