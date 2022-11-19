package com.mycompany.scannonpreview.ui;

import com.mycompany.scannonpreview.controller.PlayerController;
import com.mycompany.scannonpreview.factory.TaskFactory;
import com.mycompany.scannonpreview.ui.entities.Cannon;

import javax.swing.*;

import static com.mycompany.scannonpreview.singleton.GameHandler.getGameHandler;


public class Window extends javax.swing.JFrame {

    TaskFactory factory = new TaskFactory();

    public Window() {
        initComponents();
        ((Cannon) (pCannon)).setController(new PlayerController());
        factory.start();

        getGameHandler().setRenderer(Render);
    }

    public JPanel getRenderPanel(){
        return Render;
    }

    @SuppressWarnings("unchecked")
    // <editor-fold defaultstate="collapsed" desc="Generated Code">//GEN-BEGIN:initComponents
    private void initComponents() {
        java.awt.GridBagConstraints gridBagConstraints;

        Render = new javax.swing.JPanel();
        pCannon = new Cannon();

        setDefaultCloseOperation(javax.swing.WindowConstants.EXIT_ON_CLOSE);
        setBackground(new java.awt.Color(255, 204, 51));
        setMaximumSize(new java.awt.Dimension(1000, 600));
        setMinimumSize(new java.awt.Dimension(1000, 600));
        setPreferredSize(new java.awt.Dimension(1000, 600));
        getContentPane().setLayout(new java.awt.GridBagLayout());

        Render.setBackground(new java.awt.Color(255, 204, 0));
        Render.setLayout(new org.netbeans.lib.awtextra.AbsoluteLayout());

        pCannon.setBackground(new java.awt.Color(0, 0, 0));
        pCannon.setMaximumSize(new java.awt.Dimension(400, 400));
        pCannon.setMinimumSize(new java.awt.Dimension(400, 400));
        pCannon.setPreferredSize(new java.awt.Dimension(400, 400));

        javax.swing.GroupLayout pCannonLayout = new javax.swing.GroupLayout(pCannon);
        pCannon.setLayout(pCannonLayout);
        pCannonLayout.setHorizontalGroup(
            pCannonLayout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
            .addGap(0, 0, Short.MAX_VALUE)
        );
        pCannonLayout.setVerticalGroup(
            pCannonLayout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
            .addGap(0, 0, Short.MAX_VALUE)
        );

        Render.add(pCannon, new org.netbeans.lib.awtextra.AbsoluteConstraints(24, 243, 157, 163));

        gridBagConstraints = new java.awt.GridBagConstraints();
        gridBagConstraints.gridx = 0;
        gridBagConstraints.gridy = 0;
        gridBagConstraints.fill = java.awt.GridBagConstraints.BOTH;
        gridBagConstraints.anchor = java.awt.GridBagConstraints.NORTHWEST;
        gridBagConstraints.weightx = 1.0;
        gridBagConstraints.weighty = 1.0;
        getContentPane().add(Render, gridBagConstraints);

        pack();
    }// </editor-fold>//GEN-END:initComponents


    // Variables declaration - do not modify//GEN-BEGIN:variables
    private javax.swing.JPanel Render;
    private javax.swing.JPanel pCannon;
    // End of variables declaration//GEN-END:variables
}
