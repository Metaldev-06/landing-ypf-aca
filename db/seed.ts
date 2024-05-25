import { db, Oils } from "astro:db";

// https://astro.build/db/seed
export default async function seed() {
  // TODO

  await db.insert(Oils).values([
    {
      name: "FS530",
      type: "SINTÉTICO",
      goo: "5W-30",
      brand: "ELAION",
      image:
        "https://res.cloudinary.com/dw24usdw9/image/upload/v1716636975/Elaion_FS530_kmcrji.webp",
      url: "https://elaion.com.ar/productos/elaion-FS530.html",
    },
    {
      name: "MI 1540",
      type: "MINERAL",
      goo: "15W-40",
      brand: "ELAION",
      image:
        "https://res.cloudinary.com/dw24usdw9/image/upload/v1716636976/Elaion_MI1540_ubqtga.webp",
      url: "https://elaion.com.ar/productos/elaion-MI1540.html",
    },
    {
      name: "FS540",
      type: "SINTÉTICO",
      goo: "5W-40",
      brand: "ELAION",
      image:
        "https://res.cloudinary.com/dw24usdw9/image/upload/v1716636976/Elaion_FS540_emska0.webp",
      url: "https://elaion.com.ar/productos/elaion-FS540.html",
    },
    {
      name: "MI 2050",
      type: "MINERAL",
      goo: "20W-50",
      brand: "ELAION",
      image:
        "https://res.cloudinary.com/dw24usdw9/image/upload/v1716636975/Elaion_MI2050_otocob.webp",
      url: "https://elaion.com.ar/productos/elaion-MI2050.html",
    },
    {
      name: "TS 1040",
      type: "SEMISINTÉTICO",
      goo: "10W-40",
      brand: "ELAION",
      image:
        "https://res.cloudinary.com/dw24usdw9/image/upload/v1716636976/Elaion_TS1040_qwydpw.webp",
      url: "https://elaion.com.ar/productos/elaion-TS1040.html",
    },
    {
      name: "Moto 2T 1L",
      type: "SINTÉTICO",
      goo: "...",
      brand: "ELAION",
      image:
        "https://res.cloudinary.com/dw24usdw9/image/upload/v1716636976/elaion-moto_msx1vy.webp",
      url: "https://lubricantes.ypf.com/elaion-motos.html",
    },
    {
      name: "Moto 4T 500",
      type: "MINERAL",
      goo: "20W-50",
      brand: "ELAION",
      image:
        "https://res.cloudinary.com/dw24usdw9/image/upload/v1716641016/ELAION-Moto-4T-20W-501-1_wjat8r.webp",
      url: "https://lubricantes.ypf.com/elaion-motos.html",
    },
    {
      name: "Moto Cadenas",
      type: "SINTÉTICO",
      goo: "...",
      brand: "ELAION",
      image:
        "https://res.cloudinary.com/dw24usdw9/image/upload/v1716641197/ELAION-Moto-Cadenas1-1024x1024_cbttut.webp",
      url: "https://lubricantes.ypf.com/elaion-motos.html",
    },

    {
      name: "HIDRO ATF",
      type: "HIDRÁULICO",
      goo: "...",
      brand: "YPF",
      image:
        "https://res.cloudinary.com/dw24usdw9/image/upload/v1716641757/hidro-atf_p03psa.webp",
      url: "https://lubricantes.ypf.com/elaion-motos.html",
    },
    {
      name: "GRASA 62 EP",
      type: "MINERAL",
      goo: "...",
      brand: "YPF",
      image:
        "https://res.cloudinary.com/dw24usdw9/image/upload/v1716642821/Dise%C3%B1o_sin_t%C3%ADtulo_2_iyysk5.webp",
      url: "https://lubricantes.ypf.com/elaion-motos.html",
    },
  ]);
}
