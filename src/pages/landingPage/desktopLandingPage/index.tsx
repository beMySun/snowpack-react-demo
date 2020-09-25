import React from 'react';
import DPlayer from 'react-dplayer';
// import { Button, Carousel, BackTop } from 'antd';

import Button from 'antd/es/button';
import Carousel from 'antd/es/carousel';
import BackTop from 'antd/es/back-top';

import 'antd/es/back-top/style/css';
import 'antd/es/button/style/css';
import 'antd/es/carousel/style/css';

import Icon from '@ant-design/icons';
import classnames from 'classnames';

import gudangkuLogo from '../../../assets/landingpage/logo_32.png';

import iconArrow from '../../../assets/landingpage/icon_arrow.svg';
import videoCover from '../../../assets/landingpage/img_videoCover_1440.png';
import videoBg from '../../../assets/landingpage/bg_1@2x.png';

import spotBg from '../../../assets/landingpage/bg_2@2x.png';
import Spot1 from '../../../assets/landingpage/img_benefit_centralization.png';
import Spot2 from '../../../assets/landingpage/img_benefit_automatic.png';
import Spot3 from '../../../assets/landingpage/img_benefit_visibility.png';

import feature1 from '../../../assets/landingpage/img_feature_storeManagement.png';
import feature2 from '../../../assets/landingpage/img_feature_stockManagement.png';
import feature3 from '../../../assets/landingpage/img_feature_orderManagement.png';
import feature4 from '../../../assets/landingpage/img_feature_barcode.png';
import feature5 from '../../../assets/landingpage/img_feature_storeHistory.png';
import feature6 from '../../../assets/landingpage/img_feature_location.png';

import quote from '../../../assets/landingpage/icon_ quotation.png';
import readyBg from '../../../assets/landingpage/bg_3@2x.png';

import './index.less';

/* eslint-disable jsx-a11y/accessible-emoji */
const DesktopLandingPage: React.FC = () => {
  const carouselSettings = {
    dots: true,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 10000,
    swipeToSlide: true,
  };

  const ref = React.useRef(null as any);

  const [showHeaderBackground, setShowHeaderBackground] = React.useState(false);
  const [spotAnimated, setSpotAnimated] = React.useState(false);
  const [featureAnimated, setFeatureAnimated] = React.useState(false);

  React.useEffect(() => {
    window.onscroll = () => {
      if (document.documentElement.scrollTop > 690) {
        setShowHeaderBackground(true);
      } else {
        setShowHeaderBackground(false);
      }
      if (document.documentElement.scrollTop > 150) {
        setSpotAnimated(true);
      }
      if (document.documentElement.scrollTop > 950) {
        setFeatureAnimated(true);
      }
    };
  }, []);

  const jumpToRegist = () => window.open('https://konsultasishopeeseller.simplybook.asia/v2/');
  const jumpToFeedback = () => window.open('http://bit.ly/feedbackgudangkuLP');

  const getVideoUrl = () => {
    let videoUrl = '';
    if (window.location.hostname === 'localhost') {
      videoUrl = 'https://gudangku.test.shopee.co.id/api/s3/landing_page_video.mp4';
    } else {
      videoUrl = `${window.location.origin}/api/s3/landing_page_video.mp4`;
    }
    return videoUrl;
  };

  return (
    <div className="landing-wrapper">
      <div className="landing-content">
        <div
          className={classnames('landing-header', {
            solidBackground: showHeaderBackground,
          })}
        >
          <img src={gudangkuLogo} alt="logo" className="app-logo" />
          <div>
            <Button className="login-btn">Login</Button>
            <Button className="regist-btn" type="primary" onClick={jumpToRegist}>
              Daftar
            </Button>
          </div>
        </div>
        <section
          className="video-content"
          style={{
            backgroundImage: `url(${videoBg})`,
            backgroundSize: 'cover',
          }}
        >
          <div className="info">
            <div className="title show">Dari Shopee, Untuk Anda</div>
            <div className="desc show">
              Sistem manajemen gudang yang dibuat khusus bagi Shopee Seller untuk mengatur keluar
              masuknya barang dari berbagai channel penjualan.
            </div>
            <div>
              <Button type="primary" className="sign-up-btn" onClick={jumpToRegist}>
                Daftar Sekarang! Gratis!
              </Button>
            </div>
          </div>
          <div className="video-wrapper">
            <DPlayer
              options={{
                video: {
                  url: getVideoUrl(),
                  pic: videoCover,
                },
                contextmenu: [],
                lang: 'en',
                autoplay: true,
                volume: 0,
              }}
            />
          </div>
        </section>
        <section
          className="spots"
          style={{
            backgroundImage: `url(${spotBg})`,
            backgroundSize: 'cover',
          }}
        >
          <h2>
            HEMAT BIAYA, WAKTU DAN TENAGA
            <br />
            DENGAN GUDANGKU
          </h2>
          <div
            className={classnames('spots-wrapper', {
              animate: spotAnimated,
            })}
          >
            <div className="spots-item">
              <img src={Spot1} alt="Gudangku" className="ico" />
              <div className="title">Sentralisasi</div>
              <div className="desc">
                Kelola semua toko dari setiap channel penjualan Anda melalui satu sistem.
              </div>
            </div>
            <div className="spots-item">
              <img src={Spot2} alt="Gudangku" className="ico" />
              <div className="title">Otomatis</div>
              <div className="desc">
                Kurangi aktivitas manual dengan integrasi API dengan semua toko Shopee Anda.
                Sinkronisasi stok, cetak resi dan atur pengiriman semua dari Gudangku.
              </div>
            </div>
            <div className="spots-item">
              <img src={Spot3} alt="Gudangku" className="ico" />
              <div className="title">Visibilitas</div>
              <div className="desc">
                Dapatkan peringatan jumlah stok yang menipis dan tingkatkan akurasi stok produk
                Anda!
              </div>
            </div>
          </div>
        </section>
        <section className="features">
          <h2>JELAJAHI FITUR GUDANGKU</h2>
          <div
            className={classnames('features-list', {
              animate: featureAnimated,
            })}
          >
            <div className="feature-item">
              <img src={feature1} alt="Gudangku" className="feature-pic" />
              <div className="feature-title">Manajemen Toko</div>
              <div className="feature-desc">
                Kelola semua toko dari setiap channel penjualan Anda melalui satu sistem.
              </div>
            </div>
            <div className="feature-item">
              <img src={feature2} alt="Gudangku" className="feature-pic" />
              <div className="feature-title">Manajemen Stok</div>
              <div className="feature-desc">
                Pantau dan kelola seluruh stok produk tanpa harus membuka satu per satu halaman toko
                Shopee Anda.
              </div>
            </div>
            <div className="feature-item">
              <img src={feature3} alt="Gudangku" className="feature-pic" />
              <div className="feature-title">Manajemen Pesanan</div>
              <div className="feature-desc">
                Proses seluruh pesanan dari semua channel Penjualan melalui satu sistem.
              </div>
            </div>
            <div className="feature-item">
              <img src={feature4} alt="Gudangku" className="feature-pic" />
              <div className="feature-title">Pembuatan Barcode</div>
              <div className="feature-desc">
                Atur dan cetak barcode untuk mempermudah proses pendataan keluar-masuknya barang.
              </div>
            </div>
            <div className="feature-item">
              <img src={feature5} alt="Gudangku" className="feature-pic" />
              <div className="feature-title">Riwayat Pergerakan Stok</div>
              <div className="feature-desc">
                Ketahui riwayat pergerakan stok produk untuk keperluan administrasi Gudang Anda.
              </div>
            </div>
            <div className="feature-item">
              <img src={feature6} alt="Gudangku" className="feature-pic" />
              <div className="feature-title">Manajemen Lokasi</div>
              <div className="feature-desc">
                Buat skema lokasi penyimpanan produk untuk mempermudah proses pencarian produk di
                Gudang Anda.
              </div>
            </div>
          </div>
        </section>
        <section className="testimony">
          <h2>Testimoni Pengguna Gudangku</h2>
          <div className="carousel">
            <div
              className="prev-btn"
              onClick={() => {
                ref.current.prev();
              }}
            ></div>
            <Carousel ref={ref} {...carouselSettings}>
              <div className="slider-item">
                <img src={quote} alt="avatar" className="quote" />
                <img
                  src="https://cf.shopee.co.id/file/faeb7fbc51e6a748798406d680e2db49_tn"
                  alt="avatar"
                  className="avatar"
                />
                <div className="desc">
                  <div>
                    Gudangku sangat membantu karena cukup dengan 1 klik, semua data stok langsung
                    terintegrasi ke Shopee. Stok yang sudah di-book oleh buyer juga terlihat. Pihak
                    gudangku siap untuk membantu stock opname secara langsung, cukup responsif dan
                    selalu melakukan improvisasi setiap saat. Hal ini terlihat dari website Gudangku
                    yang selalu update.
                  </div>
                  <div style={{ marginTop: 8 }}>
                    Kita juga tak perlu lagi dibingungkan dengan stok marketplace lain karena
                    penjualannya juga bisa di-update ke Gudangku.
                  </div>
                </div>
                <p className="name">Henny, Kmarket.id</p>
              </div>
              <div className="slider-item">
                <img src={quote} alt="avatar" className="quote" />
                <img
                  src="https://cf.shopee.co.id/file/7dc3c93ce8a51e3d335ac210a2a7772f_tn"
                  alt="avatar"
                  className="avatar"
                />
                <p className="desc">
                  Dengan adanya Gudangku, saya merasa sangat terbantu. Terutama dalam hal pengaturan
                  stok untuk beberapa toko Shopee sekaligus, jadi lebih efisien. Hanya dengan sekali
                  update, stok barang langsung auto-sinkron ke semua toko Shopee saya 😊✌.
                  Terimakasih Gudangku 😊🙏 .
                </p>
                <p className="name">Andra Andirana, Anugrah Gorden Shop</p>
              </div>
              <div className="slider-item">
                <img src={quote} alt="avatar" className="quote" />
                <img
                  src="https://cf.shopee.co.id/file/572575836de51faa9d3acb025f05801a_tn"
                  alt="avatar"
                  className="avatar"
                />
                <p className="desc">
                  Kami sangat mengapresiasi Gudangku karena fitur-fiturnya sangat mudah digunakan
                  untuk mengelola stok penjualan kami. Melalui Gudangku, kami bisa melihat catatan
                  pergerakan stok dari setiap penjualan yang masuk ke toko kami. Kami sangat
                  merekomendasikan Gudangku, khususnya untuk penjual yang memiliki beberapa toko di
                  Shopee. Semoga di masa mendatang, Gudangku memiliki lebih banyak fitur tambahan
                  yang akan membantu kita untuk tumbuh menjadi lebih baik lagi. Terima kasih Shopee!
                </p>
                <p className="name">Fandy, Athir Hijab Official Shop</p>
              </div>
            </Carousel>
            <div
              className="next-btn"
              onClick={() => {
                ref.current.next();
              }}
            ></div>
          </div>
        </section>
        <section
          className="ready"
          style={{
            backgroundImage: `url(${readyBg})`,
            backgroundSize: 'cover',
          }}
        >
          <h2>SIAP MEMULAI?</h2>
          <Button type="primary" className="sign-up-btn" onClick={jumpToRegist}>
            Daftar Sekarang! Gratis!
          </Button>
        </section>
        <section className="footer">© Shopee 2020. Hak Cipta Dilindungi</section>
      </div>
      <div className="feedback" onClick={jumpToFeedback}>
        <div className="text">Masukan</div>
      </div>
      <BackTop visibilityHeight={800}>
        <div className="backtop-inner"></div>
      </BackTop>
    </div>
  );
};

export default DesktopLandingPage;
