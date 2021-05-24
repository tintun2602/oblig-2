function hentData() {
  const melding = {
    veistrekning: $("#veistrekning").val(),
    fraSted: $("#fraSted").val(),
    tilSted: $("tilSted").val(),
    fraDatoTid: $("fraDatoTid").val(),
    tilDatoTid: $("tilDatoTid").val(),
    melding: $("#melding").val(),
  };

  if (validerNavn()) {
    $.post("/lagre", melding, function () {});
  }
}
