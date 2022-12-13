import React, { useEffect } from "react";
import "../scss/homepages.scss"; // ====> Style
import Navbar from "../components/Navbar"; // ====> Navbar
import Footer from "../components/Footer"; // ====> Footer

// Icons
import { HiChatAlt2 } from "react-icons/hi";
import { GiOpenBook } from "react-icons/gi";
import { FaBalanceScale } from "react-icons/fa";
import { TiCreditCard } from "react-icons/ti";
// Icons Ends

// img public
import heroImg from "../assets/theme/hero-1-img.png";
import headerImg from "../assets/interfaces/header.png";

// AOS Animate Scroll
import AOS from "aos";
import "aos/dist/aos.css";

function Home() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      {/* Navbar */}
      <Navbar />
      {/* Navbar Ends */}

      {/* Homepages */}
      <div className="homepages">
        {/* Header */}
        <header>
          <div className="img-header">
            <img src={headerImg} alt="Hijab" className="header-img" />
          </div>
          <div className="text-header">
            <div className="title-header">
              <h1>Welcome To Rabbani Course</h1>
            </div>
            <div className="para-header">
              <span>
                AYO!! bergabung di kelas rabbani sekarang juga jangan sampai
                ketinggalan
              </span>
              <div className="box-para" data-aos="fade-up">
                <p>
                  Kursus online kami memberi Anda cara yang terjangkau dan
                  fleksibel untuk mempelajari keterampilan baru dan mempelajari
                  topik baru dan yang sedang berkembang. Belajar dari instruktur
                  Stanford dan pakar industri tanpa biaya untuk Anda. Kesehatan
                  & Kedokteran Pendidikan Teknik Seni & Humaniora Browse All
                </p>
              </div>
            </div>
          </div>
        </header>

        {/* Main */}
        <main>
          <div className="herotext-container">
            <h2>Keunggulan</h2>
            <p muted>
              Asah skill anda, bila berhasil kami salurkan ke <br /> HRD partner
              kami.
            </p>
            <ul data-aos="fade-up">
              <li>Mudah untuk bergabung</li>
              <li>Kelas yang fleksibel</li>
              <li>Materi yang padat dan singkat</li>
              <li>Di Mentor oleh orang-orang berkualitas</li>
              <li>Tugas serta Ujian Online</li>
            </ul>
          </div>
          <div className="hero-img-container">
            <img src={heroImg} alt="Main-Images" className="heroimg" />
          </div>
        </main>

        {/* Whyus */}
        <div className="whyus">
          <div className="title-why">
            <h3>Mengapa Pilih Kami?</h3>
          </div>
          <div className="card-container">
            <div className="card">
              <div className="title-card">
                <HiChatAlt2 />
                <span>Communicative</span>
              </div>

              <div className="para-card">
                Skill <b>komunikasi</b> anda akan kami tingkatkan supaya dapat
                mudah berinteraksi di dunia pekerjaan.
              </div>
            </div>

            <div className="card">
              <div className="title-card">
                <GiOpenBook />
                <span>Productive</span>
              </div>
              <div className="para-card">
                Peningkatan pada <b>produktivitas</b> anda akan bertambah
                seiring waktu berjalan bersama kami, dengan adanya kelas rabbani
                pengetahuan anda akan selalu bertambah.
              </div>
            </div>

            <div className="card">
              <div className="title-card">
                <FaBalanceScale />
                <span>Balanced</span>
              </div>
              <div className="para-card">
                Kami didik Anda untuk <b>balanced</b>. Harus nerd dan sociable.
                Ada keluwesan, tapi juga ada kepatuhan terhadap teori dan
                aturan. Ada belajar mandiri, ada belajar terbimbing.
              </div>
            </div>

            <div className="card">
              <div className="title-card">
                <TiCreditCard />
                <span>Affordable</span>
              </div>
              <div className="para-card">
                Harga yang terjangkau dengan <b>Keuntungan yang banyak </b>
                membuat diri anda tenang dan siap untuk <b>Melangkah Maju</b>.
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Footer */}
      <Footer />
    </>
  );
}

export default Home;
