const harga = [10000, 20000, 30000];
const kode = ["001", "002", "003"];

function hitungTotal() {
    const kodeInput = document.getElementById("kode").value;
    const barangInput = parseInt(document.getElementById("barang").value);

    const index = kode.indexOf(kodeInput);
        if (index !== -1){
            const totalHarga = harga[index] * barangInput;
            alert(`Total harga: ${totalHarga}`);

            const uang = parseFloat(prompt("Masukkan uang anda:"));
            const kembalian = uang - totalHarga;
            alert(`Kembalian anda: ${kembalian}`);

            document.getElementById("kode").value = "";
            document.getElementById("barang").value = "";

        } else{
            alert("Kode tidak sesuai atau inputan tidak boleh kosong!")
        }
}

document.getElementById("submit").addEventListener("click", hitungTotal);

