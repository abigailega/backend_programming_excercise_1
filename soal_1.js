// soal_1.js

// Fungsi untuk memeriksa apakah sebuah angka prima atau bukan
function isPrime(number) {
    if (number <= 1) return false;
    if (number <= 3) return true;

    if (number % 2 === 0 || number % 3 === 0) return false;

    let i = 5;
    while (i * i <= number) {
        if (number % i === 0 || number % (i + 2) === 0) return false;
        i += 6;
    }

    return true;
}

// Menampilkan semua bilangan prima dari 1 hingga 1000
function displayPrimes() {
    for (let i = 1; i <= 1000; i++) {
        if (isPrime(i)) {
            console.log(i);
        }
    }
}

// Memanggil fungsi untuk menampilkan bilangan prima
displayPrimes();