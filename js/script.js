function konversiSuhu() {
    const suhuInput = parseFloat(document.getElementById("suhu").value);
    const jenisSuhu = document.getElementById("jenisSuhu").value;
    const hasil = document.getElementById("hasil");

    if (isNaN(suhuInput)) {
        hasil.innerHTML = 'Masukkan angka yang valid!';
        return;
    }

    if (jenisSuhu === 'celcius') {
        const suhuFahrenheit = (suhuInput * 9/5) + 32;
        hasil.innerHTML = `${suhuInput} Celsius = ${suhuFahrenheit} Fahrenheit!`;
    } else if (jenisSuhu === 'fahrenheit') {
        const suhuCelsius = (suhuInput - 32) * (5 / 9);
        hasil.innerHTML = `${suhuInput} Fahrenheit = ${suhuCelsius} Celsius!`;
    }
}
