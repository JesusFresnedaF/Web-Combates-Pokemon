
import java.io.BufferedReader;
import java.io.FileNotFoundException;
import java.io.FileReader;
import java.io.IOException;
import java.util.logging.Level;
import java.util.logging.Logger;

/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */

/**
 *
 * @author jesus
 */
public class LecturaFichero {
    private BufferedReader br;
    
    public LecturaFichero(){
        try {
            this.br = new BufferedReader(new FileReader("C:\\Users\\jesus\\Desktop\\FPDAM\\PROG\\java\\PrFinalLenguajeDeMarcas\\src\\java\\usuarios.txt"));
        } catch (FileNotFoundException ex) {
            Logger.getLogger(LecturaFichero.class.getName()).log(Level.SEVERE, null, ex);
        }
    }
    
    public String leerLinea(){
        String linea = "";
        try {
            linea = this.br.readLine();
        } catch (IOException ex) {
            Logger.getLogger(LecturaFichero.class.getName()).log(Level.SEVERE, null, ex);
        }
        return linea;
    }
    
    public void close(){
        try {
            br.close();
        } catch (IOException ex) {
            Logger.getLogger(LecturaFichero.class.getName()).log(Level.SEVERE, null, ex);
        }
    }
}
