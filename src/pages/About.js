import React, { useEffect } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import "../scss/aboupages.scss";

import AOS from "aos";
import "aos/dist/aos.css";

function About() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <div className="aboutpages">
        <Navbar />
        <main>
          <div class="profile-container">
            <div class="profile">
              <div className="img-profile">
                <img
                  src="/images/Logo Rabbani.png"
                  alt=""
                  className="profile-pic"
                />
              </div>
              <div className="title-profile">
                <h1 data-aos="fade-up" data-aos-duration="1000">
                  Rabbani Profile
                </h1>
              </div>
            </div>
            <article data-aos="fade-right" data-aos-duration="2000">
              <p>
                Rabbani merupakan perusahaan garment yang bergerak dalam bidang
                retail busana muslim dengan tagline Professor Kerudung
                Indonesia. Rabbani merupakan salah satu perusahaan kerudung
                instan pertama dan terbesar di Indonesia dengan mengeluarkan
                produk andalan berupa kerudung instan dan produk lain yang juga
                telah dikembangkan yaitu busana muslim diantaranya kemko, tunik,
                kastun, kemko,tunik serta perlengkapan lain seperti ciput/inner
                kerudung dan aksesoris.
              </p>

              <p>
                Sewaktu awal didirikan, Rabbani ingin merubah paradigma sebagian
                besar masyarakat yang memandang bahwa wanita yang memakai busana
                muslim itu kurang modis. Untuk itu Rabbani ingin menunjukkan
                bahwa wanita yang memakai busana muslim itu modern dan terhormat
                serta tampil gaya dan trendy yang syar'i. Namun di sisi lain,
                Rabbani juga menghadapi tantangan yang besar. Hal tersebut
                dikarenakan pada waktu itu wanita yang memakai busana muslimah
                masih jarang dan belum menjadi trend seperti sekarang.
              </p>

              <p>
                Asal kata Rabbani terilhami dari salah satu surat di kitab suci
                Al-Qur'an yaitu surat Ali Imron ayat 79 yang artinya adalah para
                pengabdi Allah yang bersedia mengajarkan dan diajarkan kitab
                Allah.
              </p>

              <p className="arab">
                مَا كَانَ لِبَشَرٍ أَنْ يُؤْتِيَهُ اللَّهُ الْكِتَابَ
                وَالْحُكْمَ وَالنُّبُوَّةَ ثُمَّ يَقُولَ لِلنَّاسِ كُونُوا
                عِبَادًا لِي مِنْ دُونِ اللَّهِ وَلَٰكِنْ كُونُوا رَبَّانِيِّينَ
                بِمَا كُنْتُمْ تُعَلِّمُونَ الْكِتَابَ وَبِمَا كُنْتُمْ
                تَدْرُسُونَ
              </p>

              <p>
                "Tidak wajar bagi seseorang manusia yang Allah berikan kepadanya
                Al Kitab, hikmah dan kenabian, lalu dia berkata kepada manusia:
                "Hendaklah kamu menjadi penyembah-penyembahku bukan penyembah
                Allah." Akan tetapi (dia berkata): "Hendaklah kamu menjadi
                orang-orang rabbani[208], karena kamu selalu mengajarkan Al
                Kitab dan disebabkan kamu tetap mempelajarinya."
              </p>

              <p>
                Untuk melakukan pemasarannya, saat ini CV. Rabbani Asysa
                (Rabbani) memiliki <em>141 reshare</em> atau cabang yang
                tersebar di seluruh <b>Indonesia</b> dan <b>luar negeri</b>.
                Kantor pusat Rabbani berlokasi di{" "}
                <b>Jl. Citarum no 20 A Bandung</b>, dengan nomor Telp.{" "}
                <b>022-7234254</b>. Untuk info lainnya terdapat dalam website
                Rabbani yaitu{" "}
                <a href="http://www.rabbani.co.id" target="_blank">
                  www.rabbani.co.id
                </a>
              </p>
            </article>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
}

export default About;
