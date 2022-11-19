package com.mycompany.scannonpreview.ui;

import com.mycompany.scannonpreview.controller.BotController;
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
        ((Cannon) (pCannon)).setScoreField(tBotScore1);
        ((Cannon) (pBotCanon)).setController(new BotController());
        ((Cannon) (pBotCanon)).setScoreField(tBotScore);
        factory.start();

        getGameHandler().setRenderer(Render);
    }

    public JPanel getRenderPanel() {
        return Render;
    }

    @SuppressWarnings("unchecked")
    // <editor-fold defaultstate="collapsed" desc="Generated Code">//GEN-BEGIN:initComponents
    private void initComponents() {
        java.awt.GridBagConstraints gridBagConstraints;

        Render = new javax.swing.JPanel();
        pCannon = new Cannon();
        pBotCanon = new Cannon();
        tBotScore = new javax.swing.JLabel();
        tBotScore1 = new javax.swing.JLabel();

        setDefaultCloseOperation(javax.swing.WindowConstants.EXIT_ON_CLOSE);
        setBackground(new java.awt.Color(255, 204, 51));
        setMaximumSize(new java.awt.Dimension(1000, 600));
        setMinimumSize(new java.awt.Dimension(1000, 600));
        setPreferredSize(new java.awt.Dimension(1000, 600));
        getContentPane().setLayout(new java.awt.GridBagLayout());

        Render.setBackground(new java.awt.Color(255, 204, 0));
        Render.setLayout(new org.netbeans.lib.awtextra.AbsoluteLayout());

        pCannon.setBackground(new java.awt.Color(255, 204, 0));
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

        Render.add(pCannon, new org.netbeans.lib.awtextra.AbsoluteConstraints(725, 300, 157, 163));

        pBotCanon.setBackground(new java.awt.Color(255, 204, 0));
        pBotCanon.setMaximumSize(new java.awt.Dimension(400, 400));
        pBotCanon.setMinimumSize(new java.awt.Dimension(400, 400));

        javax.swing.GroupLayout pBotCanonLayout = new javax.swing.GroupLayout(pBotCanon);
        pBotCanon.setLayout(pBotCanonLayout);
        pBotCanonLayout.setHorizontalGroup(
                pBotCanonLayout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
                        .addGap(0, 0, Short.MAX_VALUE)
        );
        pBotCanonLayout.setVerticalGroup(
                pBotCanonLayout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
                        .addGap(0, 0, Short.MAX_VALUE)
        );

        Render.add(pBotCanon, new org.netbeans.lib.awtextra.AbsoluteConstraints(25, 300, 157, 163));

        tBotScore.setFont(new java.awt.Font("Arial", 0, 24)); // NOI18N
        tBotScore.setForeground(new java.awt.Color(50, 50, 50));
        tBotScore.setText("Score: 100");
        Render.add(tBotScore, new org.netbeans.lib.awtextra.AbsoluteConstraints(70, 50, -1, -1));

        tBotScore1.setFont(new java.awt.Font("Arial", 0, 24)); // NOI18N
        tBotScore1.setForeground(new java.awt.Color(50, 50, 50));
        tBotScore1.setText("Score: 100");
        Render.add(tBotScore1, new org.netbeans.lib.awtextra.AbsoluteConstraints(800, 50, -1, -1));

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
    private javax.swing.JPanel pBotCanon;
    private javax.swing.JPanel pCannon;
    private javax.swing.JLabel tBotScore;
    private javax.swing.JLabel tBotScore1;
    // End of variables declaration//GEN-END:variables
}
