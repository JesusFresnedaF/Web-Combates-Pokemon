
import java.util.ArrayList;
import org.apache.jasper.tagplugins.jstl.core.ForEach;

/*

 */

/**
 *
 * @author jesus
 */
public class Persona {
    private String nombre;
    private String password;
    
    public Persona(){
        this.nombre = "";
        this.password = "";
    }

    public Persona(String nombre, String password) {
        this.nombre = nombre;
        this.password = password;
    }

    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }
    
    public int login(ArrayList<Persona> usuarios){
        //consultar la base de datos
        //si es incorrecto return -1, si es correcto return 10 digitos aleatorios
        int retorno = -1;
        for (Persona usuario : usuarios){
            if (this.nombre.equals(usuario.getNombre()) && this.password.equals(usuario.getPassword())){
                retorno = 1;
            }
        }
        return retorno;
    }
    
}
