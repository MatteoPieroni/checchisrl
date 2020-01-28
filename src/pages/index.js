import React from "react"
import { Link } from "gatsby"

import { Layout } from "../components/layout";
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />

    <div id="page-wrapper">
      <main role="main">
        <article>
          <header className="section-top-padding background-white">
            <div className="line text-center">
              <h1
                className="text-dark text-s-size-30 text-m-size-40 text-l-size-headline text-thin text-line-height-1"
              >
                Checchi srl
              </h1>
              <p className="margin-bottom-0 text-size-16 text-dark">
                Dal 1955… maestri di qualità!
              </p>
            </div>
          </header>
          <section className="section-top-padding background-white">
            <div className="line">
              <div className="margin">
                <div className="s-12 m-12 l-4 margin-m-bottom">
                  <a className="image-hover-zoom margin-bottom" href="https://www.sfogliami.it/fl/178918/jfjddn2j143zrxksykv9u115xzhbq7my" target="_blank" rel="noopener noreferrer"
                    ><img src="img/depliant-proposte-libri-testo-2020-2021-editori-cartolibreria-checchi-massarosa.jpg" alt="Depliant 2020/2021" className="margin-auto"
                  /></a>
                </div>
                <div className="s-12 m-12 l-8 margin-m-bottom">
                  <a className="image-hover-zoom margin-bottom" href="https://www.sfogliami.it/fl/178918/jfjddn2j143zrxksykv9u115xzhbq7my" target="_blank" rel="noopener noreferrer"
                    >
                    <h2>Depliant 2020/2021</h2>
                  </a>
                  <p className="margin-bottom">
                    Clicca sulla Copertina per visualizzare online il Depliant oppure clicca quì sotto per scaricare il depliant in formato PDF.
                  </p>
                  <a href="http://localhost/checchi/wp-content/uploads/2016/03/proposte-ministeriali-2018.pdf" target="_blank" rel="noopener noreferrer" className="button">Scarica il depliant</a>
                </div>
              </div>
            </div>
          </section>
          <section className="section-top-padding background-white">
            <div className="line">
              <div className="margin">
                <div className="s-12 m-12 l-4 margin-m-bottom">
                  <a className="image-hover-zoom margin-bottom" href="/"
                    ><img src="img/img-03.jpg" alt=""
                  /></a>
                  <h2>Libri scolastici</h2>
                  <p className="margin-bottom">
                    Rappresentanza e distribuzione di testi scolastici e
                    parascolastici per le scuole dell’infanzia e primarie
                  </p>
                </div>
                <div className="s-12 m-12 l-4 margin-m-bottom">
                  <a className="image-hover-zoom margin-bottom" href="/"
                    ><img src="img/img-04.jpg" alt=""
                  /></a>
                  <h2>Cartoleria</h2>
                  <p className="margin-bottom">
                    Da oltre 50 anni la cartolibreria Checchi offre un servizio
                    attento e qualificato alle famiglie, ai ragazzi e al mondo
                    della scuola.
                  </p>
                </div>
                <div className="s-12 m-12 l-4 margin-m-bottom">
                  <a className="image-hover-zoom margin-bottom" href="/"
                    ><img src="img/img-05.jpg" alt=""
                  /></a>
                  <h2>Centro didattico</h2>
                  <p className="margin-bottom">
                    Uno spazio accogliente e di libero accesso ad uso esclusivo
                    dei docenti che possono così consultare libri e guide,
                    vedere dvd o ascoltare cd.
                  </p>
                </div>
              </div>
            </div>
          </section>
          <section className="section-top-padding background-white">
            <div className="line">
              <h2
                className="text-s-size-40 text-size-50 text-line-height-1 margin-bottom-10 text-thin text-center"
              >
                <span className="text-dark">-</span> Il Team
                <span className="text-dark">-</span>
              </h2>
              <p className="margin-bottom-50 text-center">
                Il nostro team garantisce sempre il miglior servizio. Che si
                tratti di cartoleria, aiuto ai docenti o rappresentanza.
              </p>
              <div className="carousel-blocks owl-carousel">
                <div className="item">
                  <div className="padding">
                    <img
                      className="full-img border-image border-primary"
                      src="img/team-01.jpg"
                      alt="Lucio Lucchesi"
                    />
                    <h3
                      className="text-s-size-16 text-size-20 text-line-height-1 text-dark margin-top-20 margin-bottom-0"
                    >
                      Lucio Lucchesi
                    </h3>
                    <p className="text-size-14 text-dark margin-bottom-10">
                      Rappresentante
                    </p>
                  </div>
                </div>
                <div className="item">
                  <div className="padding">
                    <img
                      className="full-img border-image border-primary"
                      src="img/team-02.jpg"
                      alt="Maria Rita Bernardini"
                    />
                    <h3
                      className="text-s-size-16 text-size-20 text-line-height-1 text-dark margin-top-20 margin-bottom-0"
                    >
                      Maria Rita Bernardini
                    </h3>
                    <p className="text-size-14 text-dark margin-bottom-10">
                      Amministrazione
                    </p>
                  </div>
                </div>
                <div className="item">
                  <div className="padding">
                    <img
                      className="full-img border-image border-primary"
                      src="img/team-03.jpg"
                      alt="Sara Bernardini"
                    />
                    <h3
                      className="text-s-size-16 text-size-20 text-line-height-1 text-dark margin-top-20 margin-bottom-0"
                    >
                      Sara Bernardini
                    </h3>
                    <p className="text-size-14 text-dark margin-bottom-10">
                      Rappresentante
                    </p>
                  </div>
                </div>
                <div className="item">
                  <div className="padding">
                    <img
                      className="full-img border-image border-primary"
                      src="img/team-04.jpg"
                      alt="Marco Iacomini"
                    />
                    <h3
                      className="text-s-size-16 text-size-20 text-line-height-1 text-dark margin-top-20 margin-bottom-0"
                    >
                      Marco Iacomini
                    </h3>
                    <p className="text-size-14 text-dark margin-bottom-10">
                      Rappresentante
                    </p>
                  </div>
                </div>
                <div className="item">
                  <div className="padding">
                    <img
                      className="full-img border-image border-primary"
                      src="img/team-05.jpg"
                      alt="Silvia "
                    />
                    <h3
                      className="text-s-size-16 text-size-20 text-line-height-1 text-dark margin-top-20 margin-bottom-0"
                    >
                      Silvia
                    </h3>
                    <p className="text-size-14 text-dark margin-bottom-10">
                      Graphic Designer
                    </p>
                  </div>
                </div>
                <div className="item">
                  <div className="padding">
                    <img
                      className="full-img border-image border-primary"
                      src="img/team-05.jpg"
                      alt="Valentina Zancaner"
                    />
                    <h3
                      className="text-s-size-16 text-size-20 text-line-height-1 text-dark margin-top-20 margin-bottom-0"
                    >
                      Valentina Zancaner
                    </h3>
                    <p className="text-size-14 text-dark margin-bottom-10">
                      Addetta alle vendite
                    </p>
                  </div>
                </div>
                <div className="item">
                  <div className="padding">
                    <img
                      className="full-img border-image border-primary"
                      src="img/team-05.jpg"
                      alt="Stefano Lucchesi"
                    />
                    <h3
                      className="text-s-size-16 text-size-20 text-line-height-1 text-dark margin-top-20 margin-bottom-0"
                    >
                      Stefano Lucchesi
                    </h3>
                    <p className="text-size-14 text-dark margin-bottom-10">
                      Addetto alle vendite
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="section background-white">
            <div className="line">
              <h2
                className="text-s-size-40 text-size-50 text-line-height-1 margin-bottom-10 text-thin text-center"
              >
                <span className="text-dark">-</span> Case editrici
                <span className="text-dark">-</span>
              </h2>
              <p className="margin-bottom-50 text-center">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                diam nonummy<br />
                nibh euismod tincidunt ut laoreet dolore magna aliquam erat
                volutpat.
              </p>
              <div className="margin2x">
              <div className="s-6 m-4 l-2">
                <img
                  className="margin-bottom-40"
                  src="img/atlas-editore-cartolibreria-checchi-massarosa.jpg"
                  alt=""
                />
              </div>
              <div className="s-6 m-4 l-2">
                <img
                  className="margin-bottom-40"
                  src="img/erickson-editore-cartolibreria-checchi-massarosa.jpg"
                  alt=""
                />
              </div>
              <div className="s-6 m-4 l-2">
                <img
                  className="margin-bottom-40"
                  src="img/fabbri-editore-cartolibreria-checchi-massarosa.jpg"
                  alt=""
                />
              </div>
              <div className="s-6 m-4 l-2">
                <img
                  className="margin-bottom-40"
                  src="img/mondadori-editore-cartolibreria-checchi-massarosa.jpg"
                  alt=""
                />
              </div>
                <div className="s-6 m-4 l-2">
                  <img
                    className="margin-bottom-40"
                    src="img/3-10-tre-dieci-editore-cartolibreria-checchi-massarosa.jpg"
                    alt=""
                  />
                </div>
                <div className="s-6 m-4 l-2">
                  <img
                    className="margin-bottom-40"
                    src="img/l-saperii-editore-cartolibreria-checchi-massarosa.jpg"
                    alt=""
                  />
                </div>
                <div className="s-6 m-4 l-2">
                  <img
                    className="margin-bottom-40"
                    src="img/eli-editore-cartolibreria-checchi-massarosa.jpg"
                    alt=""
                  />
                </div>
                <div className="s-6 m-4 l-2">
                  <img
                    className="margin-bottom-40"
                    src="img/rcs-editore-cartolibreria-checchi-massarosa.jpg"
                    alt=""
                  />
                </div>
                <div className="s-6 m-4 l-2">
                  <img
                    className="margin-bottom-40"
                    src="img/nicola-milano-editore-cartolibreria-checchi-massarosa.jpg"
                    alt=""
                  />
                </div>
                <div className="s-6 m-4 l-2">
                  <img
                    className="margin-bottom-40"
                    src="img/tre-sei-editore-cartolibreria-checchi-massarosa.jpg"
                    alt=""
                  />
                </div>
                <div className="s-6 m-4 l-2">
                  <img
                    className="margin-bottom-40"
                    src="img/edizioni-il-rubino-editore-cartolibreria-checchi-massarosa.jpg"
                    alt=""
                  />
                </div>
                <div className="s-6 m-4 l-2">
                  <img
                    className="margin-bottom-40"
                    src="img/raffaello-d-editore-cartolibreria-checchi-massarosa.jpg"
                    alt=""
                  />
                </div>
                <div className="s-6 m-4 l-2">
                  <img
                    className="margin-bottom-40"
                    src="img/la-scuola-editore-cartolibreria-checchi-massarosa.jpg"
                    alt=""
                  />
                </div>
                <div className="s-6 m-4 l-2">
                  <img
                    className="margin-bottom-40"
                    src="img/raffaello-editore-cartolibreria-checchi-massarosa.jpg"
                    alt=""
                  />
                </div>
                <div className="s-6 m-4 l-2">
                  <img className="margin-bottom-40" src="img/la-spiga-modern-languages-editore-cartolibreria-checchi-massarosa.jpg" alt="" />
                </div>
                <div className="s-6 m-4 l-2">
                  <img className="margin-bottom-40" src="img/raffaello-ragazzi-editore-cartolibreria-checchi-massarosa.jpg" alt="" />
                </div>
              </div>
              </div>
          </section>
        </article>
      </main>
    </div>
    {/* <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/page-2/">Go to page 2</Link> */}
  </Layout>
)

export default IndexPage
