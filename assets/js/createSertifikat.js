document.addEventListener("DOMContentLoaded", function () {

    // data
    var data = [
        // kominfo
        {
            img: "assets/img/sertifikat/Sertifikat-partisipasi-Kominfo-Muhammad-Brama-Antoro.jpg",
            sertifikat: "Sertifikat Kominfo",
            penjelasan: `Sertifikat partisipasi dalam acara Makin Cakap Digital 2022 - Pendidikan Jawa Barat -
                            Pemanfaatan Internet Untuk Menyebarkan Konten Positif.Bertema Pemanfaatan Internet Untuk
                            Menyebarkan Konten Positif.Yang diselenggarakan oleh Kominfo, Siberkreasi, Yayasan
                            Pendidikan Dasar dan Menengah Pasundan`,
            kredesial: "https://drive.google.com/file/d/1464RpXwsbZhNnCTGu-jIPPGzRPrqbH3r/view?usp=drive_link"
        },
        // MySkill
        {
            img: "assets/img/sertifikat/Certificate-of-Skill-Specialization-MySkill-FRONTEND-HTML-Muhammad-Brama-Antoro.jpg",
            sertifikat: "Sertifikat MySkill HTML",
            penjelasan: `Certificate of Skill Specialization
                            E-Learning - MySkill Learning Path: Website Development
                            Completed a Full Topic with Specialization in: FRONTEND - HTML
                            March 16,2024 yang diselenggarakan oleh MySkill E-Learning`,
            kredesial: "https://storage.googleapis.com/myskill-v2-certificates/topic-DQ4WDIr2jXa70FUI477S/UWddfZoysfU2JRAf2qjYmVhRtUy2-dv4HLu2Zd5JDxU1YyKba.pdf"
        },
        {
            img: "assets/img/sertifikat/Certificate-of-Skill-Specialization-MySkill-FRONTEND-CSS-Muhammad-Brama-Antoro.jpg",
            sertifikat: "Sertifikat MySkill CSS",
            penjelasan: `Certificate of Skill Specialization E-Learning - MySkill Learning Path: Website Development
                            Completed a Full Topic with Specialization in: FRONTEND-CSS March 23,2024 yang
                            diselenggarakan oleh MySkill E-Learning`,
            kredesial: "https://storage.googleapis.com/myskill-v2-certificates/topic-DQ4WDIr2jXa70FUI477S/UWddfZoysfU2JRAf2qjYmVhRtUy2-dv4HLu2Zd5JDxU1YyKba.pdf"
        },
        {
            img: "assets/img/sertifikat/Certificate-of-Skill-Specialization-MySkill-Web-Development-Fundamental-Muhammad-Brama-Antoro.jpg",
            sertifikat: "Sertifikat MySkill Web Development Fundamental",
            penjelasan: `Certificate of Skill Specialization E-Learning - MySkill Learning Path: Website Development
                            Completed a Full Topic with Specialization in: Web Development Fundamental March 29,2024
                            yang diselenggarakan oleh MySkill E-Learning`,
            kredesial: "https://storage.googleapis.com/myskill-v2-certificates/topic-DQ4WDIr2jXa70FUI477S/UWddfZoysfU2JRAf2qjYmVhRtUy2-dv4HLu2Zd5JDxU1YyKba.pdf"
        },
        {
            img: "assets/img/sertifikat/Certificate-of-Skill-Specialization-MySkill-FRONTEND-JavaScript-Muhammad-Brama-Antoro.jpg",
            sertifikat: "Sertifikat MySkill JavaScript",
            penjelasan: `Certificate of Skill Specialization E-Learning - MySkill Learning Path: Website Development 
                            Completed a Full Topic with Specialization in: FRONTEND-JavaScript August 18,2024 
                            yang diselenggarakan oleh MySkill E-Learning`,
            kredesial: "https://storage.googleapis.com/myskill-v2-certificates/topic-pTLX6J38RGSQ4dfEO6yQ/UWddfZoysfU2JRAf2qjYmVhRtUy2-PsfN0OuiRFgPWoayOxy8.pdf"
        },
        // CodingStudio
        {
            img: "assets/img/sertifikat/Certificate-of-completion_Fundamental-Front-End-Web-Development-I_Muhammad-Brama-Antoro.jpg",
            sertifikat: "Sertifikat Coding Studio FUNDAMENTAL FRONT-END WEB DEVELOPMENT 1",
            penjelasan: `CERTIFICATE OF COMPLETION For completing the course flexy FUNDAMENTAL FRONT-END WEB
                            DEVELOPMENT 1 Completed on February 19,2024 Diselenggarakan oleh Coding StudioDigital Skill
                            Course`,
            kredesial: "https://member.codingstudio.id/certificate/77EBA40B94-77DFB8E69C-77DFB89A6F"
        },
        {
            img: "assets/img/sertifikat/Certificate-of-completion_Fundamental-Front-End-Web-Development-II_Muhammad-Brama-Antoro.jpg",
            sertifikat: "Sertifikat Coding Studio FUNDAMENTAL FRONT-END WEB DEVELOPMENT 2",
            penjelasan: `CERTIFICATE OF COMPLETION For completing the course flexy FUNDAMENTAL FRONT-END WEB
                            DEVELOPMENT 2 Completed on March 02,2024 Diselenggarakan oleh Coding StudioDigital Skill
                            Course`,
            kredesial: "https://member.codingstudio.id/certificate/77EBA40B94-77FDB43C25-77DFB89A6F"
        },
        // Academy Sekolahan
        {
            img: "assets/img/sertifikat/Certificate-of-completion-Muhammad-Brama-Antoro-Menggunakan-Bootstrap-Framework-289829.jpg",
            sertifikat: "Sertifikat Academy Sekolahan BOOTSTRAP",
            penjelasan: `Certificate of COMPLETION atas kelulusannya pada kelas Belajar Menggunakan Bootstrap
                            Framework di Academy Sekolahan,Tanggal: 2024-03-09`,
            kredesial: "https://academy.sekolahan.id/verify-certificate/289829"
        },
        {
            img: "assets/img/sertifikat/Certificate-of-completion-Muhammad-Brama-Antoro-Belajar-JavaScript-Dasar-493685.jpg",
            sertifikat: "Sertifikat Academy Sekolahan JAVASCRIPT",
            penjelasan: `Certificate of COMPLETION atas kelulusannya pada kelas Belajar JavaScript Dasar di Academy
                            Sekolahan,Tanggal: 2024-03-09`,
            kredesial: "https://academy.sekolahan.id/verify-certificate/493685"
        },
        {
            img: "assets/img/sertifikat/Certificate-of-completion-Muhammad-Brama-Antoro-Belajar-JavaScript-Dasar-493685.jpg",
            sertifikat: "Sertifikat Academy Sekolahan HTML Dan CSS Dasar",
            penjelasan: `Certificate of COMPLETION atas kelulusannya pada kelas Belajar HTML dan CSS Dasar di Academy
                            Sekolahan,Tanggal: 2024-03-30`,
            kredesial: "https://academy.sekolahan.id/verify-certificate/146629"
        }
    ]

    function tampilSertifikat() {
        var containerSertifikat = document.getElementById("container-sertifikat")
        containerSertifikat.innerHTML = ""

        data.forEach(item => {
            var kartu = document.createElement("div")
            kartu.classList.add("col-md-4")
            kartu.innerHTML = `
                <article class="cta">
                    <img class="img-sertifikat" src="${item.img}" alt="Sertifikat">
                    <div class="cta__text-column">
                        <h2 class="sertifikat-Judul">${item.sertifikat}</h2>
                        <p>${item.penjelasan}</p>
                        <a href="${item.kredesial}" target="_blank">
                            <button class="button-54" role="button">Kredensial</button>
                        </a>
                    </div>
                </article>
            `

            containerSertifikat.appendChild(kartu)
        })
    }

    tampilSertifikat()
})