package com.example.demo;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class BbyController {

    @Autowired
    KundeRepository rep; 

    private final List<Biletter> filmListe = new ArrayList<>();

    @PostMapping("/lagre")
    public void visResultat(Biletter inputFilm) {
        filmListe.add(inputFilm);

    }

    @GetMapping("/biletter")
    public List<Biletter> hentAlle() {
        return filmListe;
    }

    @GetMapping("/slett")
    public void slettBilett() {
        filmListe.clear();
    }

}
