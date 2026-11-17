import Image from "next/image";

const navigation = [
  { label: "Inicio", href: "#inicio" },
  { label: "Historia", href: "#historia" },
  { label: "Titulares", href: "#titulares" },
  { label: "Noticias", href: "#noticias" },
  { label: "Cultos", href: "#cultos" },
  { label: "Calendario", href: "#calendario" },
  { label: "Galería", href: "#galeria" },
  { label: "Contacto", href: "#contacto" },
];

const galleryImages = [
  {
    src: "https://images.unsplash.com/photo-1529260830199-42c24126f198?auto=format&fit=crop&w=1000&q=85",
    alt: "Interior de una iglesia iluminada",
    className: "gallery-image gallery-image-tall",
  },
  {
    src: "https://images.unsplash.com/photo-1518998053901-5348d3961a04?auto=format&fit=crop&w=1000&q=85",
    alt: "Detalle arquitectónico de un templo",
    className: "gallery-image",
  },
  {
    src: "https://images.unsplash.com/photo-1507692049790-de58290a4334?auto=format&fit=crop&w=1000&q=85",
    alt: "Escena religiosa de archivo",
    className: "gallery-image",
  },
];

const titularGroups = [
  {
    title: "Nuestro Padre Jesús de las Misericordias",
    description:
      "Nuestro Padre Jesús de las Misericordias es una de las grandes devociones de nuestra Hermandad. La imagen actual fue realizada por el imaginero jerezano Francisco Pinto Berraquero en 1977, sustituyendo a la primitiva talla de Antonio Castillo Lastrucci. La primera estación de penitencia de la Hermandad con la imagen primitiva tuvo lugar el Lunes Santo de 1958, iniciando así una historia de fe y devoción por las calles de Jerez.",
    photos: [
      {
        src: "/titulares/1.jpg",
        alt: "Nuestro Padre Jesús de las Misericordias, fotografía 1",
        width: 4000,
        height: 5299,
      },
      {
        src: "/titulares/3.jpg",
        alt: "Nuestro Padre Jesús de las Misericordias, fotografía 3",
        width: 180,
        height: 306,
      },
    ],
  },
  {
    title: "María Santísima de la Candelaria",
    description:
      "María Santísima de la Candelaria, Madre y protectora de nuestra Hermandad, es símbolo de amor, consuelo y esperanza para todos sus devotos. La imagen fue realizada en 1959 por el imaginero jerezano Manuel Prieto Fernández. En 1969 realizó por primera vez su estación de penitencia bajo palio, incorporándose al cortejo procesional y acompañando desde entonces a sus hijos por las calles de Jerez.",
    photos: [
      {
        src: "/titulares/2.jpg",
        alt: "María Santísima de la Candelaria, fotografía 2",
        width: 4000,
        height: 5226,
      },
      {
        src: "/titulares/4.jpg",
        alt: "María Santísima de la Candelaria, fotografía 4",
        width: 214,
        height: 309,
      },
    ],
  },
];

function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="section-heading">
      <span className="eyebrow">{eyebrow}</span>
      <h2>{title}</h2>
      {description && <p>{description}</p>}
    </div>
  );
}

function PlaceholderNotice({ children }: { children: React.ReactNode }) {
  return <p className="placeholder-notice">{children}</p>;
}

function OfficialCrest({ placement }: { placement: "header" | "footer" }) {
  return (
    <span className={`official-crest official-crest--${placement}`}>
      <Image
        className="official-crest-image"
        src="/escudo-candelaria.png"
        alt=""
        width={1199}
        height={1312}
        unoptimized
      />
    </span>
  );
}

export default function Home() {
  return (
    <>
      <header className="site-header">
        <a className="brand" href="#inicio" aria-label="Ir al inicio">
          <OfficialCrest placement="header" />
          <span className="brand-copy">
            <span className="brand-name">
              Hermandad Sacramental de la Candelaria
            </span>
            <span className="brand-location">Jerez de la Frontera</span>
          </span>
        </a>
      </header>

      <nav className="main-nav" aria-label="Navegación principal">
        <div className="nav-inner">
          {navigation.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
        </div>
      </nav>

      <main>
        <section className="hero" id="inicio" aria-labelledby="hero-title">
          <div
            className="hero-photo"
            role="img"
            aria-label="Fotografía provisional de la Plaza del Arenal en Jerez de la Frontera"
          />
          <div className="hero-shade" />
          <div className="hero-content">
            <span className="hero-kicker">Hermandad Sacramental</span>
            <h1 id="hero-title">
              Hermandad de
              <br />
              <em>La Candelaria</em>
            </h1>
            <span className="hero-divider" aria-hidden="true" />
            <p>Jerez de la Frontera</p>
            <a className="button button-gold" href="#historia">
              Conócenos <span aria-hidden="true">→</span>
            </a>
          </div>
          <span className="photo-tag">Fotografía provisional de Jerez</span>
          <a
            className="hero-photo-credit"
            href="https://commons.wikimedia.org/wiki/File:Arenal,_Jerez_de_la_Frontera,_2023_(02).jpg"
            target="_blank"
            rel="noopener noreferrer"
          >
            Plaza del Arenal · Draceane / Wikimedia Commons · CC BY-SA 4.0
          </a>
          <a className="hero-scroll" href="#historia">
            <span aria-hidden="true">↓</span> Descubrir
          </a>
        </section>

        <section className="welcome section-shell" aria-labelledby="welcome-title">
          <div className="welcome-mark" aria-hidden="true">
            <span>✣</span>
          </div>
          <div>
            <span className="eyebrow">Bienvenidos</span>
            <h2 id="welcome-title">
              Fe, tradición y
              <br />
              <em>hermandad.</em>
            </h2>
            <p>
              Este es el espacio digital de la Hermandad Sacramental de la
              Candelaria de Jerez de la Frontera. Un lugar de encuentro para
              acercarse a la vida de la Hermandad.
            </p>
          </div>
        </section>

        <section className="history-section section-shell" id="historia">
          <div className="history-copy">
            <SectionHeading
              eyebrow="Nuestra Hermandad"
              title="Historia"
              description="Un camino de fe y devoción compartido."
            />
            <PlaceholderNotice>
              El contenido histórico oficial se incorporará cuando esté
              disponible y validado por la Hermandad.
            </PlaceholderNotice>
          </div>
          <div className="history-image image-frame">
            <div
              className="image-fill history-photo"
              role="img"
              aria-label="Fotografía provisional de arquitectura religiosa"
            />
            <span className="photo-tag">Fotografía provisional</span>
          </div>
        </section>

        <section className="titulares-section" id="titulares">
          <div className="section-shell">
            <SectionHeading
              eyebrow="Devoción"
              title="Nuestros Sagrados Titulares"
              description="Conoce a nuestros Sagrados Titulares."
            />
            <div className="titulares-grid">
              {titularGroups.map((titular) => (
                <article className="titular-card" key={titular.title}>
                  <h3 className="titular-title">{titular.title}</h3>
                  <div className="titular-gallery">
                    {titular.photos.map((photo) => (
                      <figure className="titular-photo-frame" key={photo.src}>
                        <Image
                          className="titular-photo"
                          src={photo.src}
                          alt={photo.alt}
                          width={photo.width}
                          height={photo.height}
                          unoptimized
                        />
                      </figure>
                    ))}
                  </div>
                  <p className="titular-description">{titular.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="news-section section-shell" id="noticias">
          <div className="section-topline">
            <SectionHeading
              eyebrow="Actualidad"
              title="Noticias"
              description="Novedades y comunicados de la Hermandad."
            />
            <span className="section-index">01 — Actualidad</span>
          </div>
          <div className="news-grid">
            {[1, 2, 3].map((item) => (
              <article className="news-card" key={item}>
                <span className="news-number">0{item}</span>
                <span className="eyebrow">Comunicaciones oficiales</span>
                <h3>Próximamente</h3>
                <p>En este espacio se publicarán noticias verificadas.</p>
              </article>
            ))}
          </div>
        </section>

        <section className="worship-section" id="cultos">
          <div className="worship-image" role="img" aria-label="Fotografía provisional de una escena religiosa" />
          <div className="worship-panel">
            <SectionHeading
              eyebrow="Vida de Hermandad"
              title="Cultos"
              description="Encuentros de oración y celebración."
            />
            <PlaceholderNotice>
              Los horarios y convocatorias se publicarán aquí cuando la
              Hermandad facilite la información oficial.
            </PlaceholderNotice>
            <a className="text-link" href="#calendario">
              Consultar calendario <span aria-hidden="true">→</span>
            </a>
            <span className="photo-tag">Fotografía provisional</span>
          </div>
        </section>

        <section className="calendar-section section-shell" id="calendario">
          <div className="calendar-intro">
            <SectionHeading
              eyebrow="Agenda"
              title="Calendario"
              description="Próximas fechas y convocatorias."
            />
          </div>
          <div className="calendar-empty">
            <span className="calendar-symbol" aria-hidden="true">✣</span>
            <p>El calendario se actualizará con las fechas oficiales.</p>
          </div>
        </section>

        <section className="gallery-section" id="galeria">
          <div className="section-shell">
            <div className="section-topline">
              <SectionHeading
                eyebrow="Imágenes"
                title="Galería fotográfica"
                description="Momentos y recuerdos de nuestra Hermandad."
              />
              <span className="gallery-note">Imágenes provisionales</span>
            </div>
            <div className="gallery-grid">
              {galleryImages.map((image) => (
                <figure className={image.className} key={image.src}>
                  <div
                    className="image-fill"
                    role="img"
                    aria-label={`${image.alt}. Fotografía provisional.`}
                    style={{ backgroundImage: `url("${image.src}")` }}
                  />
                  <figcaption>Fotografía provisional</figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>

        <section className="contact-section" id="contacto">
          <div className="contact-ornament" aria-hidden="true">✣</div>
          <span className="eyebrow">Estamos aquí</span>
          <h2>Contacto</h2>
          <p>
            Los datos oficiales de contacto se añadirán cuando sean confirmados
            por la Hermandad.
          </p>
          <span className="contact-divider" aria-hidden="true" />
          <span className="contact-location">Jerez de la Frontera</span>
        </section>
      </main>

      <footer className="site-footer">
        <div className="footer-identity">
          <OfficialCrest placement="footer" />
          <a className="footer-brand" href="#inicio">
            La Candelaria
          </a>
        </div>
        <span>Hermandad Sacramental · Jerez de la Frontera</span>
        <a href="#inicio" className="back-to-top">Volver arriba ↑</a>
      </footer>
    </>
  );
}
