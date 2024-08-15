function SendMail() {
    var params = {
        from_name: document.getElementById("forInput").value,
        email_id: document.getElementById("emailInput").value,
        message: document.getElementById("textareaInput").value
    }
    emailjs.send("service_9zqjyri", "template_ah9t8n5", params).then(function (res) {
        alert("Succes! ");
    })
}

// IMG Slide
document.addEventListener('DOMContentLoaded', function () {
    var carousel = document.getElementById('carouselExample');
    var carouselItems = carousel.querySelectorAll('.carousel-item');
    var projectName = document.querySelector('.name-project');
    var projectDescription = document.querySelector('.card-text p');

    carousel.addEventListener('slid.bs.carousel', function () {
        var activeItem = carousel.querySelector('.carousel-item.active');
        var imgSrc = activeItem.querySelector('.img-work').getAttribute('src');

        var textMapping = {
            'assets/img/project/projectWarung/home-page-project-Warung.png': {
                name: 'Home Page',
                description: 'Saya menciptakan Website yang menawarkan 3 fitur utama: Fitur Produk memperlihatkan produk dan harga, Fitur Hutang mencatat nama pengutang, nominal, dan tanggal pembuatan, serta Fitur Kalkulator yang berfungsi seperti kalkulator konvensional. website ini dibuat dengan Bahasa Pemrograman HTML, CSS, JS, Bootstrap, PHP, dan database MySQL.Kombinasi teknologi web dan fungsionalitas ini telah meningkatkan efisiensi bisnis warung saya'
            },
            'assets/img/project/projectWarung/Bagian-Produk.png': {
                name: 'Bagian Produk',
                description: 'Disini dapat mempermudah kita untuk melihat nama dan harga barang,yang biasa nya kita harus liat daftar list dari kertas satu per satu sekarang kita hanya perlu mencari nama barang di menu "Cari Produk" maka akan menampilkan nama dan harga barang yang ingin kita cari,dan terdapat fitur tambah produk untuk menambahkan data produk,lalu data akan disimpan di "data produk" di data produk terdapat #(nomor),barang,harga dan aksi,di bagian aksi kita dapat menghapus data produk dan mengedit data produk'
            },
            'assets/img/project/projectWarung/Bagian-Hutang.png': {
                name: 'Bagian Hutang',
                description: 'disini kita dapat melihat nama,nominal,tanggal hutang,tidak perlu ribet-ribet lagi untuk menulis di bon dan mencari nama,nominal saat penghutang ingin membayar hutang,cukup cari nama di menu "cari",kita disini dapat memasukan nama,nominal dan tanggal hutang di menu,lalu data akan di kirim ke "Data Hutang" disini terdapat #(nomor),Hutang(nama penghutang),nominal,tanggal dan aksi,di aksi kita dapat menghapus dan mengedit data'
            },
            'assets/img/project/projectWarung/Bagian-Kalkulator.png': {
                name: 'Bagian Kalkulator',
                description: 'Disini kalkulatot bekerja seperti kalkulator pada umum nya,terdapat fitur kali,tambah,kurang,bagi dan fitur kalkulator pada umum nya'
            }
        };


        if (textMapping.hasOwnProperty(imgSrc)) {
            projectName.textContent = textMapping[imgSrc].name;
            projectDescription.textContent = textMapping[imgSrc].description;
        }
    });
});
