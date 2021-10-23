
const kjøpBilett = (e) => {
    e.preventDefault(); 

    const kunde = {
        film : $('#film').val(),
        antall : $('#antall').val(), 
        fornavn : $('#fnavn').val(),
        etternavn : $('#enavn').val(),
        telefon : $('#telefonnr').val(), 
        epost : $('#epost').val(),
    };

$.post('/lagre', kunde, function () {
    hentAlle();
});

$('#film').val(""); 
$('#antall').val("");
$('#fnavn').val("");
$('#enavn').val("");
$('#telefonnr').val("");
$('#epost').val(""); 

};

function hentAlle() {
    $.get('/biletter', function(data){
    formaterData(data); 
    });
    
}

const formaterData = (kunder) => {
    melding.innerHTML = ""; 
    for(const kunde of kunder) {
        melding.innerHTML += /*html*/`
        <div>
        Film: ${kunde.film}<br/>
        Antall: ${kunde.antall} <br/>
        Fornavn: ${kunde.fornavn} <br/>
        Etternavn: ${kunde.etternavn} <br/>
        TelefonNr: ${kunde.telefon} <br/>
        Epost: ${kunde.epost}
        </div>
        `;
    }
};

const slettBillet = () => {
    form.reset(); 
    melding.innerHTML = ""; 
    $.get('/slett', function(){
    hentAlle(); 
    });
};
    
    


const melding = document.getElementById('melding'); 
const form = document.querySelector('form'); 
form.addEventListener('submit', kjøpBilett);
form.addEventListener('reset',slettBillet);


def hoved_meny():
    print("--------------------------------------")
    print(" Velkommen til Student Registering")
    print("---------------------------------------")
    print("1. Legg til ny Student")
    print("2. Legg til Emner")
    print("3. Legg til eksamenskarakterer")
    print("4. Søk etter student")
    print("5. Skriv ut studentliste")
    print("6. Rediger/Oppdater Studentinformasjon")
    print("7. Slett Student")
    print("8. Avslutt Programmet")


 


def legg_til_student():    #Variabel for å kontrollere løkka
    student = 'j'

    studentfil=open('student.txt', 'a')

     #Legger til studenter
    while student == 'j' or student == 'J':
        print('Skriv inn følgende student informasjon: ')
        studentnr = (input('Oppgi Studentnr: '))
        f_navn = input('Oppgi Fornavn: ')
        e_navn = input('Oppgi Etternavn: ')
        studium = input('Oppgi Studium: ')
        

        studentfil.write(studentnr+'`\n')
        studentfil.write(f_navn +'\n')
        studentfil.write(e_navn + '\n')
        studentfil.write(studium + '\n')

        print('Skal det leses inn flere studenter?')
        student= input('J = ja, alt annet = nei: ')

   
    #Lukker filen
    studentfil.close()
    print('Opplysninger satt til student.txt')



 

def emner():
    emnelokke  = 'j'

    emnefil=open('emne.txt', 'a')

    while emnelokke == 'j' or emnelokke == 'J':
        print('Skriv inn følgende emne informasjon: ')
        emnekode =input('Oppgi Emnekode: ')
        emnenavn =input('Oppgi emnenavn: ')
        
        emnefil.write(emnekode +'\n')
        emnefil.write(emnenavn + '\n')

        print('Skal det leses inn flere emner?' )
        emnelokke=input('J= ja, alt annet = nei: ')
    

        emnefil.close()
        print('Opplysninger satt til emne.txt')




def karak():
    karakterlokke = 'j'

    eksamensresultatfil = open('eksamensresultat.txt', 'a')

    while karakterlokke == 'J' or karakterlokke == 'j':
        emnekode = input('Oppgi emnekode: ')
        studentnr= input('Oppgi studentnr: ')
        karakter=input('Oppgi karakter: ')

        eksamensresultatfil.write(emnekode + '\n')
        eksamensresultatfil.write(studentnr + '\n')
        eksamensresultatfil.write(karakter + '\n')
        print('Skal det skrives inn flere karakterer?' )
        karakterlokke=input('J= ja, alt annet = nei: ')

        eksamensresultatfil.close()
        print('Opplysninger satt til eksamensresultat.txt')




def studentsok()
    funnet = False

    sok=input('Skriv inn studentnummer for å søke etter: ')

    studentfil=open('student.txt','r')
    

    studentnr=studentfil.readline()

    while studentnr != '':
        karakter=(studentfil.readline())

        studentnr = studentnr.rstrip('\n')

        if studentnr ==sok:
            print('Studentnummer:',studentnmr)
            print('Karakter:',karakter)
            print()

            funnet=True

        studentnmr=studentfil.readline()

    studentfil.close()

    if not funnet:
        print('Denne studenten finnnes ikke i systemet')



def studentliste():









def Red_opp():









def slett_student():
    

while True:
    hoved_meny()

    valg = input("Enter your choice: ")
    if valg == '1':
        legg_til_student()
    elif valg == '2':
        emner()
    elif valg == '3':
        karak()
    elif valg == '4':
        studentsok()
    elif valg == '5':
        studentliste()
    elif valg == '6':
        Red_opp()
    elif valg == '7':
        slett_student()
    else:
        break
    
        
        

print("-------------------------------")
print(" Takk for at du bruker vårt system!")
print("-------------------------------")
    
hovedmeny()

