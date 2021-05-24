function validerNavn(data) {
  const veistrekning = $("#veistrekning").val();
  const regexp = /^[a-zA-ZæøåÆØÅ. \-]{2,20}$/;
  const ok = regexp.test(veistrekning);
  if (!ok) {
    $("#feilVeistrekning").html(
      "Veistrekningen må starte med en stor bokstav og et eller to siffer"
    );
    return false;
  } else {
    $("#feilVeistrekning").html("");
    return true;
  }
}
