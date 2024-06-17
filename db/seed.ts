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
    // {
    //   title: "PROMO 20% dto ELAION AURO en BOXES",
    //   active_from: "01/03/2024",
    //   active_to: "30/04/2024",
    //   category: "boxes",
    //   image:
    //     "https://res.cloudinary.com/dw24usdw9/image/upload/v1718596317/ypf-aca/45c5401c-c9da-497b-9b34-4bd027a2747f.png",
    //   url: "https://serviclub.com.ar/blogs/77_5-de-descuento-socios-aca.html",
    // },
    // {
    //   title: "VIAJÁ COMO UN CAMPEÓN",
    //   active_from: "01/03/2024",
    //   active_to: "30/04/2024",
    //   category: "estaciones",
    //   image:
    //     "https://res.cloudinary.com/dw24usdw9/image/upload/v1718596455/ypf-aca/5ab2e96e-aa4f-4e5e-81e3-e16e48d02570.png",
    //   url: "https://serviclub.com.ar/blogs/371_viaj-como-un-campen.html",
    // },
    // {
    //   title: "SÁBADO Y DOMINGO INFINIA",
    //   active_from: "26/04/2024",
    //   active_to: "28/04/2024",
    //   category: "combustible",
    //   image:
    //     "https://res.cloudinary.com/dw24usdw9/image/upload/v1718627661/ypf-aca/69f1ab52-789e-4b12-aa4f-2ceeb81d080a.png",
    //   url: "https://serviclub.com.ar/blogs/380_sbado-y-domingo-infinia.html",
    // },
    // {
    //   title: "¡Canjeá y ahorrá en BOXES!",
    //   active_from: "04/04/2024",
    //   active_to: "30/04/2024",
    //   category: "boxes",
    //   image:
    //     "https://res.cloudinary.com/dw24usdw9/image/upload/v1718628039/ypf-aca/1f2dbd36-349d-484d-a358-15d3f20cd2ad.png",
    //   url: "https://serviclub.com.ar/blogs/378_canjea-y-ahorra-en-boxes.html",
    // },
    {
      title: "¡A FULL CON VOS!",
      active_from: "10/06/2024",
      active_to: "30/06/2024",
      category: "full",
      image:
        "https://res.cloudinary.com/dw24usdw9/image/upload/v1718625597/ypf-aca/28caed13-1589-4cc0-b5d3-3b2b2f34ace9.png",
      url: "https://serviclub.com.ar/blogs/377_a-full-con-vos.html",
    },
    // {
    //   title: "Santander Select JUEVES",
    //   active_from: "18/04/2024",
    //   active_to: "25/04/2024",
    //   category: "combustible",
    //   image:
    //     "https://res.cloudinary.com/dw24usdw9/image/upload/v1718628142/e0270c13-8dc6-4471-8684-299131b0fb1e.png",
    //   url: "https://serviclub.com.ar/blogs/376_santander-select-jueves.html",
    // },
    // {
    //   title: "¡Martes 10% en INFINIA E INFINIA DIESEL!",
    //   active_from: "11/02/2024",
    //   active_to: "30/04/2024",
    //   category: "combustible",
    //   image:
    //     "https://res.cloudinary.com/dw24usdw9/image/upload/v1718628381/1e18efb3-fb6d-4f9b-876a-f2f608f1e865.png",
    //   url: "https://serviclub.com.ar/blogs/372_martes-10-en-infinia-e-infinia-diesel.html",
    // },
    {
      title: "¡Lunes 20% de ahorro en INFINIA!",
      active_from: "10/06/2024",
      active_to: "30/06/2024",
      category: "combustible",
      image:
        "https://res.cloudinary.com/dw24usdw9/image/upload/v1718634013/c9a135f1-c193-4d83-bb3d-490ab644ab15.png",
      url: "https://serviclub.com.ar/blogs/372_martes-10-en-infinia-e-infinia-diesel.html",
    },
    // {
    //   title: "20%dto. Macro en FULL",
    //   active_from: "15/03/2024",
    //   active_to: "30/04/2024",
    //   category: "full",
    //   image:
    //     "https://res.cloudinary.com/dw24usdw9/image/upload/v1718628417/f5769b16-baea-4917-bfc4-f57c287637b9.png",
    //   url: "https://serviclub.com.ar/blogs/368_20dto-macro-en-full.html",
    // },
    // {
    //   title: "¡Con INFINIA duplicá tus puntos!",
    //   active_from: "27/03/2024",
    //   active_to: "30/04/2024",
    //   category: "combustible",
    //   image:
    //     "https://res.cloudinary.com/dw24usdw9/image/upload/v1718628618/48acc41b-7c39-469a-83f7-b646bef52ea3.png",
    //   url: "https://serviclub.com.ar/blogs/363_con-infinia-duplica-tus-puntos.html",
    // },
    // {
    //   title: "¡Canjeá y ahorrá más en FULL!",
    //   active_from: "06/04/2024",
    //   active_to: "30/04/2024",
    //   category: "full",
    //   image:
    //     "https://res.cloudinary.com/dw24usdw9/image/upload/v1718628662/2835a5c4-c9fa-4c27-b51c-a315d4a5c217.png",
    //   url: "https://serviclub.com.ar/blogs/362_canjea-y-ahorra-mas-en-full.html",
    // },
    // {
    //   title: "¡Canjeá y ahorrá en SUPER!",
    //   active_from: "06/04/2024",
    //   active_to: "30/04/2024",
    //   category: "combustible",
    //   image:
    //     "https://res.cloudinary.com/dw24usdw9/image/upload/v1718628735/6f4a47c1-e0b6-49bc-99b0-2d2a58404f77.png",
    //   url: "https://serviclub.com.ar/blogs/361_canjea-y-ahorra-en-super.html",
    // },
    // {
    //   title: "¡Canjeá y ahorrá en INFINIA!",
    //   active_from: "06/04/2024",
    //   active_to: "30/04/2024",
    //   category: "combustible",
    //   image:
    //     "https://res.cloudinary.com/dw24usdw9/image/upload/v1718628768/601fe54a-c042-405d-b397-fee9f6416592.png",
    //   url: "https://serviclub.com.ar/blogs/360_canjea-y-ahorra-en-infinia.html",
    // },
    // {
    //   title: "¡Canjeá y ahorrá en INFINIA DIESEL!",
    //   active_from: "06/04/2024",
    //   active_to: "30/04/2024",
    //   category: "combustible",
    //   image:
    //     "https://res.cloudinary.com/dw24usdw9/image/upload/v1718628768/601fe54a-c042-405d-b397-fee9f6416592.png",
    //   url: "https://serviclub.com.ar/blogs/359_canjea-y-ahorra-en-infinia-diesel.html",
    // },
    // {
    //   title: "¡Canjeá y ahorrá en GNC!",
    //   active_from: "06/04/2024",
    //   active_to: "30/04/2024",
    //   category: "combustible",
    //   image:
    //     "https://res.cloudinary.com/dw24usdw9/image/upload/v1718628835/267e54c7-6a0e-446d-aeda-ab002dd9e005.png",
    //   url: "https://serviclub.com.ar/blogs/358_canjea-y-ahorra-en-gnc.html",
    // },
    // {
    //   title: "Llévate un café de cortesía",
    //   active_from: "09/11/2023",
    //   active_to: "31/12/2023",
    //   category: "boxes",
    //   image:
    //     "https://res.cloudinary.com/dw24usdw9/image/upload/v1718628881/7add5732-4080-48b6-9395-02319f91771f.png",
    //   url: "https://serviclub.com.ar/blogs/344_llevate-un-cafe-de-cortesia.html",
    // },
    {
      title: "Cuidá tu auto con YPF BOXES",
      active_from: "05/07/2023",
      active_to: "",
      category: "boxes",
      image:
        "https://res.cloudinary.com/dw24usdw9/image/upload/v1718628910/da72a301-1979-4ddd-99bb-bbf85cdf2d05.png",
      url: "https://serviclub.com.ar/blogs/326_cuida-tu-auto-con-ypf-boxes.html",
    },
    // {
    //   title: "15% de descuento con Hipotecario",
    //   active_from: "01/04/2024",
    //   active_to: "30/04/2024",
    //   category: "combustible",
    //   image:
    //     "https://res.cloudinary.com/dw24usdw9/image/upload/v1718628944/d0aea154-cad1-4917-a0dd-420f10ab1be3.png",
    //   url: "https://serviclub.com.ar/blogs/320_15-de-descuento-con-hipotecario.html",
    // },
    // {
    //   title: "Beneficio Banco Macro",
    //   active_from: "01/02/24",
    //   active_to: "30/04/2024",
    //   category: "combustible",
    //   image:
    //     "https://res.cloudinary.com/dw24usdw9/image/upload/v1718628977/f43d1506-5f9f-40ed-8641-6597cdc9bc89.png",
    //   url: "https://serviclub.com.ar/blogs/314_beneficio-banco-macro.html",
    // },
    {
      title: "Elaion Auro",
      active_from: "09/02/2023",
      active_to: "",
      category: "boxes",
      image:
        "https://res.cloudinary.com/dw24usdw9/image/upload/v1718629059/62a4bfb5-be4b-4cfb-a73a-68a32bc81ef1.png",
      url: "https://serviclub.com.ar/blogs/310_elaion-auro.html",
    },
    {
      title: "Centro de Experiencias Virtual de YPF",
      active_from: "06/02/2023",
      active_to: "",
      category: "combustible",
      image:
        "https://res.cloudinary.com/dw24usdw9/image/upload/v1718629094/f4aca295-dbba-4342-874a-9f18e6d8548f.png",
      url: "https://serviclub.com.ar/blogs/284_centro-de-experiencias-virtual-de-ypf.html",
    },
    // {
    //   title: "SuperClub+ Santander",
    //   active_from: "18/01/2024",
    //   active_to: "28/03/2024",
    //   category: "combustible",
    //   image:
    //     "https://res.cloudinary.com/dw24usdw9/image/upload/v1718629120/6fb48377-39e8-4e93-975f-253ebca4c2ad.png",
    //   url: "https://serviclub.com.ar/blogs/253_superclub-santander-.html",
    // },
    // {
    //   title: "Beneficio Banco Comafi",
    //   active_from: "01/04/2024",
    //   active_to: "30/04/2024",
    //   category: "combustible",
    //   image:
    //     "https://res.cloudinary.com/dw24usdw9/image/upload/v1718629126/b17e23a8-6572-4cce-9e5f-b073ab5d4cf5.png",
    //   url: "https://serviclub.com.ar/blogs/239_beneficio-banco-comafi.html",
    // },
    // {
    //   title: "10% de descuento con tu tarjeta Ualá",
    //   active_from: "01/04/2024",
    //   active_to: "30/04/2024",
    //   category: "combustible",
    //   image:
    //     "https://res.cloudinary.com/dw24usdw9/image/upload/v1718629132/2be10e0e-d26e-483a-b9d7-279618a5f8fd.png",
    //   url: "https://serviclub.com.ar/blogs/232_10-de-descuento-con-tu-tarjeta-uala.html",
    // },
  ]);
}
