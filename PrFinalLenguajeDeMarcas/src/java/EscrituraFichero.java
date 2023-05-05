
import java.io.BufferedWriter;
import java.io.FileWriter;
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
public class EscrituraFichero {
    private BufferedWriter bw;
    
    public EscrituraFichero(){
        try {
            this.bw = new BufferedWriter(new FileWriter("usuarios.txt", true));
        } catch (IOException ex) {
            Logger.getLogger(EscrituraFichero.class.getName()).log(Level.SEVERE, null, ex);
        }
    }
    
    public void escribirUsuario(Persona p){
        try {
            bw.write(p.toString());
        } catch (IOException ex) {
            Logger.getLogger(EscrituraFichero.class.getName()).log(Level.SEVERE, null, ex);
        }
    }
    
    public void cerrar(){
        try {
            bw.close();
        } catch (IOException ex) {
            Logger.getLogger(EscrituraFichero.class.getName()).log(Level.SEVERE, null, ex);
        }
    }
}
