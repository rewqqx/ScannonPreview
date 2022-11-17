package com.mycompany.scannonpreview.utils;

import com.mycompany.scannonpreview.objects.Vector2D;

import java.awt.*;
import java.awt.geom.AffineTransform;
import java.awt.image.BufferedImage;
import java.io.File;
import java.io.IOException;
import java.util.Iterator;
import javax.imageio.ImageIO;
import javax.imageio.ImageReader;

public class ResourceUtils {

    public static BufferedImage getBufferedImageFromFile(String path) throws IOException {
        File file = new File(path);

        BufferedImage in = ImageIO.read(file);

        return in;
    }

    public static BufferedImage resizeImage(BufferedImage image, Vector2D size) {
        Image tmp = image.getScaledInstance(size.x, size.y, Image.SCALE_SMOOTH);
        BufferedImage dimg = new BufferedImage(size.x, size.y, BufferedImage.TYPE_INT_ARGB);

        Graphics2D g2d = dimg.createGraphics();
        g2d.drawImage(tmp, 0, 0, null);
        g2d.dispose();

        return dimg;
    }

    public static BufferedImage rotateImage(BufferedImage image, double angle) {
        double rads = angle;
        double sin = Math.abs(Math.sin(rads)), cos = Math.abs(Math.cos(rads));
        int w = image.getWidth();
        int h = image.getHeight();

        BufferedImage rotated = new BufferedImage(w, h, BufferedImage.TYPE_INT_ARGB);
        Graphics2D g2d = rotated.createGraphics();
        AffineTransform at = new AffineTransform();

        int x = w / 2;
        int y = h / 2;
        g2d.setBackground(new Color(255, 255, 255, 0));
        at.rotate(rads, x, y);
        g2d.setTransform(at);
        g2d.clearRect(0, 0, w, h);
        g2d.drawImage(image, 0, 0, null);
        g2d.dispose();

        return rotated;
    }
}
