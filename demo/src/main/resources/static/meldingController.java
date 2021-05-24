package com.example.demo; 

import java.util.ArrayList;
import java.util.List;

import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class meldingController {
    
    private JdbcTemplate db; 
    private Logger logger = LoggerFactory.getLogger(MeldingController.class); 

    @PostMapping("/lagre")
    public void lagreMelding(Melding m) {
     String regex = "[A-ZÆØÅ](0-9)(1,2)";
     boolean OK = m.getVeistrekning().matches(regex); 
     if(OK) {
        String sql = "INSERT INTO Melding (veistrekning, fraSted, tilSted, fraDatoTid, tilDatoTid, melding)" + "VALUES(?,?,?,?,?,?)"; 
         try{
            db.update(sql, m.getVeistrekning(), m.getFraSted(), m.TilSted(), m.getFraDato(), m.getTilDato(), m.getMelding()); 
         }
         catch(Exception e) {
             logger.error("Feil i lagre veimeldingen" + e); 
         }
        
        } else {
            logger.error("Feil i regEx i meldingen" + m.getVeistrekning()); 
        }
    }
}
