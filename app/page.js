"use client";

import Image from "next/image";
import { useEffect, useMemo, useState } from "react";
import styles from "./page.module.scss";

const EVENT_DATE = new Date("2026-11-13T20:00:00-03:00");

function getTimeLeft() {
  const diff = Math.max(EVENT_DATE.getTime() - Date.now(), 0);

  return {
    dias: Math.floor(diff / 86400000),
    horas: Math.floor((diff / 3600000) % 24),
    min: Math.floor((diff / 60000) % 60),
    seg: Math.floor((diff / 1000) % 60),
  };
}

const details = [
  ["Fecha", "13 NOV 2026"],
  ["Hora", "20 HS"],
  ["Salon", "Mirna Eventos"],
  ["Direccion", "Av. Del Viento Chorrillero 2164"],
];

export default function Home() {
  const [timeLeft, setTimeLeft] = useState(getTimeLeft);

  useEffect(() => {
    const interval = setInterval(() => setTimeLeft(getTimeLeft()), 1000);
    return () => clearInterval(interval);
  }, []);

  const countdown = useMemo(
    () =>
      Object.entries(timeLeft).map(([label, value]) => ({
        label,
        value: String(value).padStart(2, "0"),
      })),
    [timeLeft],
  );

  return (
    <main className={styles.page}>
      <section className={styles.hero}>
        <Image
          src="/foto.jpeg"
          alt="Isa en su fiesta de quince"
          fill
          priority
          sizes="100vw"
          className={styles.heroImage}
        />
        <div className={styles.noise} />
        <div className={styles.heroGradient} />
        <div className={styles.heroChrome} aria-hidden="true">
          <span />
          <span />
          <span />
        </div>

        <div className={styles.heroTop}>
          <span>XV invitation</span>
          <span>13.11.26</span>
        </div>

        <div className={styles.heroCopy}>
          <p className={styles.preTitle}>Birthday couture night</p>
          <h1>
            <span>ISA</span>
            <span>FEST</span>
          </h1>
          <p className={styles.heroDate}>Viernes 13 de noviembre · 20 hs</p>
        </div>

        <div className={styles.scrollCue}>
          <span />
        </div>
      </section>

      <section className={`${styles.panel} ${styles.countdownPanel}`}>
        <div className={styles.countdownLead}>
          <span className={styles.eyebrow}>Cuenta regresiva</span>
          <h2>La noche empieza en</h2>
          <p>El momento mas esperado ya tiene fecha, hora y lugar.</p>
        </div>
        <div className={styles.countdown}>
          {countdown.map((item, index) => (
            <div
              className={styles.countBox}
              key={item.label}
              style={{ "--delay": `${index * 90}ms` }}
            >
              <strong>{item.value}</strong>
              <span>{item.label}</span>
            </div>
          ))}
        </div>
      </section>

      <section className={styles.statement}>
        <div className={styles.statementFrame}>
          <Image src="/monio.png" alt="" width={160} height={126} />
          <p>Te espero para festejar este gran momento de mi vida.</p>
        </div>
      </section>

      <section className={styles.partyPanel}>
        <div className={styles.chapter}>
          <span className={styles.eyebrow}>Fiesta</span>
          <h2>Una noche absolutamente Isa.</h2>
          <p>Agenda principal</p>
        </div>

        <div className={styles.detailGrid}>
          {details.map(([label, value], index) => (
            <div
              className={styles.detailItem}
              key={label}
              style={{ "--delay": `${index * 80}ms` }}
            >
              <span>{label}</span>
              <strong>{value}</strong>
            </div>
          ))}
        </div>
      </section>

      <section className={styles.editorialPhoto}>
        <Image
          src="/foto2.jpeg"
          alt="Isa con vestido de quince"
          fill
          sizes="(min-width: 900px) 820px, 100vw"
        />
        <div className={styles.photoCaption}>
          <span>Dress code</span>
          <strong>Elegante</strong>
          <p>Sin brillos. Evitar colores como rosa y verde.</p>
        </div>
      </section>

      <section className={styles.pricingPanel}>
        <div className={styles.chapter}>
          <span className={styles.eyebrow}>Precios</span>
          <h2>Reserva tu lugar</h2>
          <p>Opciones de pago</p>
        </div>

        <div className={styles.priceHero}>
          <span>Valor de la tarjeta</span>
          <strong>$85000</strong>
          <p>Hasta el 13/10</p>
        </div>

        <div className={styles.priceRows}>
          <div>
            <span>Ninos</span>
            <strong>$60000</strong>
          </div>
          <div>
            <span>Plan de pago</span>
            <strong>3 cuotas de $29000</strong>
          </div>
        </div>

        <div className={styles.payment}>
          <h3>Como puedo pagar?</h3>
          <p>En efectivo o por transferencia.</p>
          <div>
            <span>Alias</span>
            <strong>ISI.FEST.15</strong>
          </div>
          <small>2664-586468</small>
        </div>
      </section>

      <section className={styles.finalCtas}>
        <div>
          <Image src="/corazoon.png" alt="" width={118} height={94} />
          <span className={styles.eyebrow}>Participa</span>
          <h2>Sumate a la noche</h2>
        </div>
        <nav aria-label="Formularios">
          <a href="https://docs.google.com/forms/" target="_blank">
            Recomendame una cancion
          </a>
          <a href="https://docs.google.com/forms/" target="_blank">
            Confirmar asistencia
          </a>
        </nav>
      </section>
    </main>
  );
}
