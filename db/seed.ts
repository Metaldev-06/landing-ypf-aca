import { db, Oils, Promotions } from "astro:db";

// https://astro.build/db/seed
export default async function seed() {
  await db.insert(Oils).values([
    {
      name: "FS530",
      type: "sintetico",
      goo: "5W-30",
      brand: "ELAION",
      image:
        "https://res.cloudinary.com/dw24usdw9/image/upload/v1716636975/Elaion_FS530_kmcrji.webp",
      url: "https://elaion.com.ar/productos/elaion-FS530.html",
    },
    {
      name: "MI 1540",
      type: "mineral",
      goo: "15W-40",
      brand: "ELAION",
      image:
        "https://res.cloudinary.com/dw24usdw9/image/upload/v1716636976/Elaion_MI1540_ubqtga.webp",
      url: "https://elaion.com.ar/productos/elaion-MI1540.html",
    },
    {
      name: "FS540",
      type: "sintetico",
      goo: "5W-40",
      brand: "ELAION",
      image:
        "https://res.cloudinary.com/dw24usdw9/image/upload/v1716636976/Elaion_FS540_emska0.webp",
      url: "https://elaion.com.ar/productos/elaion-FS540.html",
    },
    {
      name: "MI 2050",
      type: "mineral",
      goo: "20W-50",
      brand: "ELAION",
      image:
        "https://res.cloudinary.com/dw24usdw9/image/upload/v1716636975/Elaion_MI2050_otocob.webp",
      url: "https://elaion.com.ar/productos/elaion-MI2050.html",
    },
    {
      name: "TS 1040",
      type: "semisintetico",
      goo: "10W-40",
      brand: "ELAION",
      image:
        "https://res.cloudinary.com/dw24usdw9/image/upload/v1716636976/Elaion_TS1040_qwydpw.webp",
      url: "https://elaion.com.ar/productos/elaion-TS1040.html",
    },
    {
      name: "Moto 2T 1L",
      type: "sintetico",
      goo: "...",
      brand: "ELAION",
      image:
        "https://res.cloudinary.com/dw24usdw9/image/upload/v1716636976/elaion-moto_msx1vy.webp",
      url: "https://lubricantes.ypf.com/elaion-motos.html",
    },
    {
      name: "Moto 4T 500",
      type: "mineral",
      goo: "20W-50",
      brand: "ELAION",
      image:
        "https://res.cloudinary.com/dw24usdw9/image/upload/v1716641016/ELAION-Moto-4T-20W-501-1_wjat8r.webp",
      url: "https://lubricantes.ypf.com/elaion-motos.html",
    },
    {
      name: "Moto Cadenas",
      type: "sintetico",
      goo: "...",
      brand: "ELAION",
      image:
        "https://res.cloudinary.com/dw24usdw9/image/upload/v1716641197/ELAION-Moto-Cadenas1-1024x1024_cbttut.webp",
      url: "https://lubricantes.ypf.com/elaion-motos.html",
    },

    {
      name: "HIDRO ATF",
      type: "hidraulico",
      goo: "...",
      brand: "YPF",
      image:
        "https://res.cloudinary.com/dw24usdw9/image/upload/v1716641757/hidro-atf_p03psa.webp",
      url: "https://lubricantes.ypf.com/otros-lubricantes-m.html",
    },
    {
      name: "GRASA 62 EP",
      type: "mineral",
      goo: "...",
      brand: "YPF",
      image:
        "https://res.cloudinary.com/dw24usdw9/image/upload/v1716642821/Dise%C3%B1o_sin_t%C3%ADtulo_2_iyysk5.webp",
      url: "https://lubricantes.ypf.com/otros-lubricantes-m.html",
    },
  ]);

  await db.insert(Promotions).values([
    {
      title: "5% de descuento Socios ACA",
      active_from: "12/02/2020",
      active_to: "",
      category: "aca",
      image:
        "https://res.cloudinary.com/dw24usdw9/image/upload/v1718593044/ypf-aca/2ffccc2a-52a6-435d-b4db-cab3c8d3bfb0.png",
      url: "https://serviclub.com.ar/blogs/77_5-de-descuento-socios-aca.html",
    },
    {
      title: "PROMO 20% dto ELAION AURO en BOXES",
      active_from: "01/03/2024",
      active_to: "30/04/2024",
      category: "boxes",
      image:
        "https://res.cloudinary.com/dw24usdw9/image/upload/v1718596317/ypf-aca/45c5401c-c9da-497b-9b34-4bd027a2747f.png",
      url: "https://serviclub.com.ar/blogs/77_5-de-descuento-socios-aca.html",
    },
    {
      title: "VIAJÁ COMO UN CAMPEÓN",
      active_from: "01/03/2024",
      active_to: "30/04/2024",
      category: "estaciones",
      image:
        "https://res.cloudinary.com/dw24usdw9/image/upload/v1718596455/ypf-aca/5ab2e96e-aa4f-4e5e-81e3-e16e48d02570.png",
      url: "https://serviclub.com.ar/blogs/371_viaj-como-un-campen.html",
    },
  ]);
}
