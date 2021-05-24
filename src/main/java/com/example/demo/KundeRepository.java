package com.example.demo;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jndi.JndiTemplate;

public class KundeRepository {

    @Autowired
    private JndiTemplate db;

    public void lagreKunde(Kunde kunde) {
        String sql = "INSERT INTO Kunde (navn, adresse) VALUES(?,?,?,?,?,?)";
        db.update(sql, kunde.get(), kunde.getAdresse());

    }

    public List<Kunde> hentAlleKunder() {

        String sql = "SELECT * FROM Kunde";
        List<Kunde> alleKunder = db.query(sql, new BeanPropertyRowMapper(Kunde.class));
        return alleKunder;

    }

    public void slettAlleKunder() {
        String sql = "DELETE FROM Kunde";
        db.update(sql);

    }
}
