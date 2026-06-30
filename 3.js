document.getElementById('btnPesan').addEventListener('click', function() {
    const pesan = document.getElementById('pesan');
    // Toggle (muncul/sembunyi) pesan saat tombol diklik
    if (pesan.classList.contains('hidden')) {
        pesan.classList.remove('hidden');
        this.textContent = 'Sembunyikan';
    } else {
        pesan.classList.add('hidden');
        this.textContent = 'Klik Saya!';
    }
});