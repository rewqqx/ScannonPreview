
package com.mycompany.scannonpreview.ui.entities;


import com.mycompany.scannonpreview.objects.Vector2D;

public class PanelTask extends javax.swing.JPanel {


    private Vector2D location = new Vector2D(0, 0);

    public PanelTask(String expression) {
        initComponents();

        tExpression.setText(expression);
    }

    public Vector2D getVectorLocation() {
        return location;
    }

    public void setVectorLocation(Vector2D location) {
        this.location = location;
    }


    @SuppressWarnings("unchecked")
    // <editor-fold defaultstate="collapsed" desc="Generated Code">//GEN-BEGIN:initComponents
    private void initComponents() {

        tExpression = new javax.swing.JLabel();

        setLayout(new java.awt.GridBagLayout());

        tExpression.setText("Content");
        add(tExpression, new java.awt.GridBagConstraints());
    }// </editor-fold>//GEN-END:initComponents


    // Variables declaration - do not modify//GEN-BEGIN:variables
    private javax.swing.JLabel tExpression;
    // End of variables declaration//GEN-END:variables
}
