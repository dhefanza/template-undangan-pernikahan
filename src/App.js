// import logo from './logo.svg';
// import "./App.css";
import wall_head from "./assets/images/wall_header.jpg";
import qris from "./assets/images/portfolioDhefanza.png";
import "./assets/css/style.css";

function App() {
    return (
        <div className="App">
            <header className="App-header"></header>
            {/* Header  */}
            <section className="header">
                <div className="container-fluid header">
                    <div className="row">
                        <div className="col-12 px-0">
                            <img className="bg-wallpaper" src={wall_head} alt="bg-header" />
                        </div>
                    </div>
                </div>
            </section>
            {/* End of header */}

            {/* Invitation */}
            <section className="invitation">
                <div className="container-fluid wallpaper py-4">
                    <div className="row align-items-center justify-content-evenly">
                        <div className="col-12 col-lg-7 col-md-6 text-center pt-5 ">
                            <p>Bismillahirrahmanirrahim</p>
                            <p>Assalamu'alaikum Warahmatullahi Wabarakatuh</p>
                            <p>Dengan memohon Rahmat dan Ridho Allah SWT, kami bermaksud</p>
                            <p>menyelenggarakan resepsi pernikahan putra - putri kami</p>
                            <h1 className="nama">Karina Indah Sari</h1>
                            <p>Putri kedua dari Bapak Eko Widodo & Ibu Ani Rahayu</p>
                            <p>dengan</p>
                            <h1 className="nama">Budi Nur Dwi</h1>
                            <p>Putra pertama dari Bapak Nur Yusuf & Ibu Tyas Putri</p>
                        </div>

                        <div className="col-12 col-lg-5 col-md-6 pt-5">
                            <p className="text-center">Yang Insya Allah akan dilaksanakan pada : </p>
                            <div className="row justify-content-center text-center">
                                <div className="col-4">
                                    <div class="card bg-transparent card-schedule">
                                        <div class="card-body card-content py-1">
                                            <p className="mb-1">AKAD NIKAH</p>
                                            <p className="mb-1">09.00 - 10.00 WIB</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-3">
                                    <p className="tgl mb-1">SABTU</p>
                                    <p className="date mb-1">
                                        <b>28</b>
                                    </p>
                                    <p className="tgl mb-1">JANUARI 2023</p>
                                </div>

                                <div className="col-4">
                                    <div class="card bg-transparent card-schedule">
                                        <div class="card-body card-content py-1">
                                            <p className="mb-1">RESEPSI</p>
                                            <p className="mb-1">11.00 - 14.00 WIB</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-12">
                                    <p>Merupakan suatu kehormatan dan kebahagiaan bagi kami, apabila Bapak/Ibu/Saudara/i berkenan untuk hadir.</p>
                                    <p>Demikian undangan ini kami sampaikan kami ucapkan terima kasih.</p>
                                    <p>Assalamu'alaikum Warahmatullahi Wabarakatuh</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* End of invitation */}

            {/* Location */}
            <section className="location">
                <div className="container-fluid py-4 location">
                    <div className="row">
                        <h1>Lokasi</h1>
                        <div className="col-12 px-2 d-flex flex-wrap justify-content-left">
                            <i class="bi bi-geo-alt-fill"></i>
                            <p>Gedung Wisma Syahida Inn</p>
                            <p>Jl. Kertamukti No.5, Cirendeu, Kec. Ciputat Tim., Kota Tangerang Selatan, Banten 15412</p>
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3965.6420035845213!2d106.75795241485486!3d-6.3106730954328!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69efd013df1611%3A0x6f56a20f5eea188a!2sWisma%20Syahida%20Inn!5e0!3m2!1sid!2sid!4v1673671549579!5m2!1sid!2sid"
                                width="100%"
                                height="450px"
                                allowfullscreen=""
                                loading="lazy"
                                referrerpolicy="no-referrer-when-downgrade"
                            ></iframe>
                        </div>
                    </div>
                </div>
            </section>
            {/* End of location */}

            <div className="container-fluid py-4 amplop-digital">
                <h1>Amplop Digital</h1>
                <div className="row">
                    <div className="col-12 d-flex justify-content-center">
                        <img src={qris} alt="qris-code" width={400} height={400} />
                    </div>
                </div>
            </div>

            {/* Copyright */}
            <section className="copyright">
                <div className="container-fluid pb-4 copyright">
                    <div className="row">
                        <div className="col-12">
                            <p>2023 © made with love - by Dhefanza Satria</p>
                        </div>
                    </div>
                </div>
            </section>
            {/* End of copyright */}
        </div>
    );
}

export default App;
