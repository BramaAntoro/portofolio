document.getElementById('sendBtn').addEventListener('click', sendToWhatsApp);

function sendToWhatsApp() {
    // Ambil data dari form
    const forInput = document.getElementById('forInput').value;
    const emailInput = document.getElementById('emailInput').value;
    const textareaInput = document.getElementById('textareaInput').value;

    // Nomor WhatsApp tujuan (gunakan format internasional tanpa '+')
    const phoneNumber = '6282120164306'; // ganti dengan nomor WhatsApp Anda

    // Pesan yang akan dikirim
    const message = `For: ${forInput}\nEmail: ${emailInput}@gmail.com\nMessage: ${textareaInput}`;

    // URL WhatsApp API
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    // Arahkan pengguna ke WhatsApp
    window.open(whatsappURL, '_blank');
}
