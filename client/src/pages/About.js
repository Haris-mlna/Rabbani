import React from "react";
import Navbar from "../components/Navbar";
import "../scss/aboupages.scss";

function About() {
  return (
    <>
      <div className="aboutpages">
        <Navbar />
        <main>
          <article>
            Rabbani merupakan perusahaan garment yang bergerak dalam bidang
            retail busana muslim dengan tagline Professor Kerudung Indonesia.
            Rabbani merupakan salah satu perusahaan kerudung instan pertama dan
            terbesar di Indonesia dengan mengeluarkan produk andalan berupa
            kerudung instan dan produk lain yang juga telah dikembangkan yaitu
            busana muslim diantaranya kemko, tunik, kastun, kemko,tunik serta
            perlengkapan lain seperti ciput/inner kerudung dan aksesoris.
            Sewaktu awal didirikan, Rabbani ingin merubah paradigma sebagian
            besar masyarakat yang memandang bahwa wanita yang memakai busana
            muslim itu kurang modis. Untuk itu Rabbani ingin menunjukkan bahwa
            wanita yang memakai busana muslim itu modern dan terhormat serta
            tampil gaya dan trendy yang syar'i. Namun di sisi lain, Rabbani juga
            menghadapi tantangan yang besar. Hal tersebut dikarenakan pada waktu
            itu wanita yang memakai busana muslimah masih jarang dan belum
            menjadi trend seperti sekarang.
          </article>
        </main>
      </div>
    </>
  );
}

export default About;
