import { ProductType } from "../common/enum/ProductType.enum";
import { CreateProductDTO } from "../products/dtos/create-product.dto";

export const petsData: Partial<CreateProductDTO>[] = [
  {
    sku: 1001,
    name: "Golden Retriever",
    price: 1200.0,
    gender: "male",
    size: "large",
    age: "2 months",
    color: ["tan"],
    vaccinated: true,
    dewormed: true,
    certified: "AKC",
    microchip: true,
    location: "New York, NY",
    addInfo: ["Playful", "Good with kids"],
    images: [
      "https://www.patasdacasa.com.br/sites/default/files/styles/article_detail_1200/public/2023-11/cachorro%20golden%20filhote.jpg.webp?itok=GMk6C7Rh",
      "https://s3.amazonaws.com/cdn-origin-etr.akc.org/wp-content/uploads/2020/07/09151754/Golden-Retriever-puppy-standing-outdoors.jpg",
      "https://www.petplace.com/article/dogs/pet-care/dog-care/puppy-care/media_16e89029edcc85076147cda767a7cd26d98767af3.png?width=750&format=png&optimize=medium",
    ],
    type: ProductType.PET,
  },
  {
    sku: 1002,
    name: "Persian",
    price: 950.49,
    gender: "female",
    size: "small",
    age: "3 months",
    color: ["apricot"],
    vaccinated: true,
    dewormed: true,
    certified: "CFA",
    microchip: false,
    location: "Austin, TX",
    addInfo: ["Litter trained", "Very affectionate"],
    images: [
      "https://t3.ftcdn.net/jpg/02/26/62/36/360_F_226623621_xozMQnRsIDwxZXZgP6Xiitjbl4aSod5b.jpg",
      "https://media.istockphoto.com/id/139525209/photo/close-up-of-a-cute-kitten-resting-on-a-step.jpg?s=612x612&w=0&k=20&c=N__TimQT2GdKh08VJm9Du5D7nILWgZ0zfxjgwDnqZJ4=",
      "https://thumbs.dreamstime.com/b/stock-photo-persian-kitten-months-old-sitting-front-w-lovely-grey-isolated-white-background-58059038.jpg",
    ],
    type: ProductType.PET,
  },
  {
    sku: 1003,
    name: "Labrador Retriever",
    price: 1099.9,
    gender: "male",
    size: "large",
    age: "2 months",
    color: ["black"],
    vaccinated: true,
    dewormed: true,
    certified: "AKC",
    microchip: true,
    location: "Chicago, IL",
    addInfo: ["Loyal", "Good swimmer"],
    images: [
      "https://kindredpup.com/wp-content/uploads/2020/12/120161984_2674750696119514_875923304621930075_o-1024x1024.jpg",
      "https://sweetcreamlabradors.com/wp-content/uploads/2024/01/skygus-puppy.jpg",
      "https://i.pinimg.com/736x/c3/ce/45/c3ce4576c54231e5c88329247e9327d1.jpg",
    ],
    type: ProductType.PET,
  },
  {
    sku: 1004,
    name: "Siamese",
    price: 1300.0,
    gender: "female",
    size: "small",
    age: "2.5 months",
    color: ["silver", "black_white"],
    vaccinated: true,
    dewormed: true,
    certified: "TICA",
    microchip: true,
    location: "Los Angeles, CA",
    addInfo: ["Talkative", "Elegant"],
    images: [
      "https://untamed.com/cdn/shop/articles/how_to_take_care_of_siamese_kittens_featured_1200x1200.jpg?v=1653902885",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThuVdsTFgZWzvCgFS08i5xq-Ox0_OqOrD_6Q&s",
      "https://www.dailypaws.com/thmb/Yu5OPZM2zXkhJX7j8byvmwHpbNg=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/siamese-ball-129783445-2000-8fe8815de13841b7b803fb1703f28504.jpeg",
    ],
    type: ProductType.PET,
  },
  {
    sku: 1005,
    name: "Poodle",
    price: 999.9,
    gender: "male",
    size: "medium",
    age: "2.5 months",
    color: ["apricot"],
    vaccinated: true,
    dewormed: false,
    certified: "AKC",
    microchip: false,
    location: "Seattle, WA",
    addInfo: ["Hypoallergenic", "Very smart"],
    images: [
      "https://t3.ftcdn.net/jpg/01/63/55/64/360_F_163556483_Robxwa3ucXIH3q5KLADAjCzrit4V6mPO.jpg",
      "https://t3.ftcdn.net/jpg/01/71/81/28/360_F_171812850_msndEAw3h3FD2i8Q4IMqHXl8VKbvBq1n.jpg",
      "https://t4.ftcdn.net/jpg/01/41/59/13/360_F_141591338_xRblCyJK6LOXmPmSVTgIBZsgaSGw5jzs.jpg",
    ],
    type: ProductType.PET,
  },
  {
    sku: 1006,
    name: "British Shorthair",
    price: 1050.5,
    gender: "female",
    size: "small",
    age: "3 months",
    color: ["silver"],
    vaccinated: true,
    dewormed: false,
    certified: "CFA",
    microchip: true,
    location: "Phoenix, AZ",
    addInfo: ["Independent", "Easy-going"],
    images: [
      "https://bri-cat.com/images/pa-10.jpg",
      "https://t4.ftcdn.net/jpg/00/14/48/53/360_F_14485377_iCMt1Bbw3zLw9GMjiYgO0bd91mjTdFAC.jpg",
      "https://i.pinimg.com/564x/a1/99/dd/a199dd62a7094f98abab1815767d2e73.jpg",
    ],
    type: ProductType.PET,
  },
  {
    sku: 1007,
    name: "Beagle",
    price: 980.0,
    gender: "male",
    size: "medium",
    age: "2 months",
    color: ["black", "tan"],
    vaccinated: true,
    dewormed: true,
    certified: "AKC",
    microchip: true,
    location: "Denver, CO",
    addInfo: ["Friendly", "Loves walks"],
    images: [
      "https://i.ytimg.com/vi/bx7BjjqHf2U/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLAdzZxUJspm8k-O4dPSAwYpCoXX2w",
      "https://www.akc.org/wp-content/uploads/2021/01/Beagle-puppy-standing-in-the-grass-1-500x486.jpeg",
      "https://cdn.royalcanin-weshare-online.io/TD9-7XoBRYZmsWpc-Lca/v3/bp-lot-2-beagle-couleur-human",
    ],
    type: ProductType.PET,
  },
  {
    sku: 1008,
    name: "Maine Coon",
    price: 1150.49,
    gender: "female",
    size: "medium",
    age: "3 months",
    color: ["black_white"],
    vaccinated: true,
    dewormed: true,
    certified: "TICA",
    microchip: false,
    location: "Miami, FL",
    addInfo: ["Large size", "Gentle giant"],
    images: [
      "https://www.zooplus.co.uk/magazine/wp-content/uploads/2019/03/maine-coon-kitten-brown.jpg",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCO5AT1wKWNGDuK2TizItaogLNEEaR9HpbdKdjor2yoCzHBR1I8ShrKLQIF5SjwDlqE2s&usqp=CAU",
      "https://as2.ftcdn.net/v2/jpg/01/60/53/35/1000_F_160533524_D9CPXTV27KWJeX3cvTh4lVznkrjAQnVU.jpg",
    ],
    type: ProductType.PET,
  },
  {
    sku: 1009,
    name: "Bulldog",
    price: 899.9,
    gender: "male",
    size: "large",
    age: "2 months",
    color: ["tan", "black"],
    vaccinated: false,
    dewormed: true,
    certified: "AKC",
    microchip: false,
    location: "Atlanta, GA",
    addInfo: ["Laid-back", "Good indoors"],
    images: [
      "https://media.gettyimages.com/id/93392638/pt/foto/english-bulldog-puppy-walking-in-grass.jpg?s=612x612&w=gi&k=20&c=RKhEmbjoqQSaIHMCuQ_hW4gNG1qrU9ST3QPx51tDzdA=",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS75ox9r13K6Sx4Q8M3d3jb0H_7q9Ch65wWfcUaxcgQe87FDuPDe-gVLvdGCdm_N3qD17s&usqp=CAU",
      "https://as1.ftcdn.net/v2/jpg/03/27/10/82/1000_F_327108214_Np3E8PhMIaw6eeRlEB6XBdKamgAy6ddK.jpg",
    ],
    type: ProductType.PET,
  },
  {
    sku: 1010,
    name: "Ragdoll",
    price: 1399.99,
    gender: "female",
    size: "small",
    age: "2.5 months",
    color: ["silver"],
    vaccinated: true,
    dewormed: true,
    certified: "CFA",
    microchip: true,
    location: "Boston, MA",
    addInfo: ["Very docile", "Great with kids"],
    images: [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFdqdhNlnMv8R7gHEbjfgpAuSCYWJulmO3BQ&s",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPjqc7vfwzdyNAi68gYmo6heZhQKUnC7AKQAzmOvmHEkorlkp7oi_TgQHaWhtkNPXCrDY&usqp=CAU",
      "https://images.squarespace-cdn.com/content/v1/65d8e0e62ad0e23e47d05707/1720655520499-L7VF4D0OK2IZ7UFEPI3Q/Gus-The-Blue-Mitted-Ragdoll-Kitten-For-Sale-San-Diego-California.jpeg",
    ],
    type: ProductType.PET,
  },
  {
    sku: 1011,
    name: "Boxer",
    price: 980.0,
    gender: "male",
    size: "Large",
    age: "3 months",
    color: ["red", "black"],
    vaccinated: true,
    dewormed: true,
    certified: "AKC",
    microchip: true,
    location: "Dallas, TX",
    addInfo: ["Active", "Protective"],
    images: [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_uYiSK2SVgsHdmsaCbQeIxLQmMW1TzgQ8Nw&s",
      "https://i.pinimg.com/736x/15/20/b7/1520b77e26a8d7ada15d545681f8360b.jpg",
      "https://dogtime.com/wp-content/uploads/sites/12/2023/07/GettyImages-185822841.jpg",
    ],
    type: ProductType.PET,
  },
  {
    sku: 1012,
    name: "Bengal",
    price: 1200.0,
    gender: "female",
    size: "small",
    age: "2.5 months",
    color: ["black"],
    vaccinated: true,
    dewormed: true,
    certified: "TICA",
    microchip: true,
    location: "Orlando, FL",
    addInfo: ["Wild look", "High energy"],
    images: [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaw87c1o6CQa_Gmic_Q465ICanCSZ01HcfUQ&s",
      "https://as1.ftcdn.net/v2/jpg/05/51/71/84/1000_F_551718415_HXWtYHsMDP4OvBjnzZeTpSzq5MI3Ww9A.jpg",
      "https://royalbengalcattery.com/images/article/76.jpg",
    ],
    type: ProductType.PET,
  },
  {
    sku: 1013,
    name: "Doberman",
    price: 1299.9,
    gender: "male",
    size: "large",
    age: "3 months",
    color: ["black", "tan"],
    vaccinated: true,
    dewormed: true,
    certified: "AKC",
    microchip: true,
    location: "San Diego, CA",
    addInfo: ["Guard dog", "Very loyal"],
    images: [
      "https://m.media-amazon.com/images/I/71YUzwr8slL._AC_UF1000,1000_QL80_.jpg",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSARYFtOPfICgCpICex1hjO_DKUR8ULxpCCqA&s",
      "https://pet-health-content-media.chewy.com/wp-content/uploads/2024/09/11181048/202104doberman-pinscher-puppy.jpg",
    ],
    type: ProductType.PET,
  },
  {
    sku: 1014,
    name: "Scottish Fold",
    price: 1100.5,
    gender: "female",
    size: "small",
    age: "2 months",
    color: ["apricot"],
    vaccinated: false,
    dewormed: true,
    certified: "CFA",
    microchip: false,
    location: "Portland, OR",
    addInfo: ["Folded ears", "Quiet"],
    images: [
      "https://images.squarespace-cdn.com/content/v1/63ba00d65e2bce113005eb4b/c5c92303-e76d-4e1f-8dc9-26b4fba928c5/EPP_0925.jpg",
      "https://i.pinimg.com/736x/86/40/95/8640954006178f357e0a0a0906a50927.jpg",
      "https://i.pinimg.com/474x/78/82/ef/7882efa077ff440311db86ab83c7832f.jpg",
    ],
    type: ProductType.PET,
  },
  {
    sku: 1015,
    name: "German Shepherd",
    price: 1400.9,
    gender: "male",
    size: "large",
    age: "3.5 months",
    color: ["black", "tan"],
    vaccinated: true,
    dewormed: true,
    certified: "AKC",
    microchip: true,
    location: "Las Vegas, NV",
    addInfo: ["Highly trainable", "Working dog"],
    images: [
      "https://images.squarespace-cdn.com/content/v1/63deb27b4a085e065cb68f2a/b61cc348-d225-4b3d-bbb3-37c1ae2671a7/14-week-old-german-shepherd-puppy-in-grass.jpg",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQr2V_WcCF18k4cltTXeisLImGBZOgeGozDOtoM731lvJVVQBoejO63gYYPFbr8KOGemAU&usqp=CAU",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMYPyowelflP4LUL9Y96E9pq2Ew-P2lpLjeg&s",
    ],
    type: ProductType.PET,
  },
  {
    sku: 1016,
    name: "Abyssinian",
    price: 950.49,
    gender: "female",
    size: "small",
    age: "3 months",
    color: ["red"],
    vaccinated: true,
    dewormed: false,
    certified: "TICA",
    microchip: false,
    location: "Charlotte, NC",
    addInfo: ["Elegant", "Playful"],
    images: [
      "https://www.catipilla.com/wp-content/uploads/2023/01/Abyssinian-Cat-scaled.jpg",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbQNnpVGkRqrDkf9pJyYJ__GU26AOF0EjlcQ&s",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLmBcZaWEr3KHyg8sJu8xLzmc724nOMObiUA&s",
    ],
    type: ProductType.PET,
  },
  {
    sku: 1017,
    name: "Shih Tzu",
    price: 1150.0,
    gender: "male",
    size: "small",
    age: "2 months",
    color: ["black_white"],
    vaccinated: true,
    dewormed: true,
    certified: "AKC",
    microchip: true,
    location: "Cleveland, OH",
    addInfo: ["Small breed", "Lap dog"],
    images: [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnb7y1htQ3jpN3p4_W1pf1swRNv36N9DZxkw&s",
      "https://i.pinimg.com/736x/7b/89/86/7b8986b36c58c3b3f242cbc085fbf6c8.jpg",
      "https://media.gettyimages.com/id/1407813859/pt/foto/shih-tzu-puppy.jpg?s=612x612&w=gi&k=20&c=gVW26FKkr1q5b1BbDYvZESlBcZw_Efdw7AGlmsgkPG8=",
    ],
    type: ProductType.PET,
  },
  {
    sku: 1018,
    name: "Russian Blue",
    price: 1000.0,
    gender: "female",
    size: "small",
    age: "2.5 months",
    color: ["silver"],
    vaccinated: true,
    dewormed: true,
    certified: "CFA",
    microchip: false,
    location: "Salt Lake City, UT",
    addInfo: ["Soft coat", "Very calm"],
    images: [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRa7UJujgG7cGjs28f6EYjX-L3Z0mbnvVbD9w&s",
      "https://purebredkitties.com/cdn/shop/files/barhat-russian-blue-kitten-gray-656_600x.webp?v=1741232190",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtM1DcdbFxDJmPz_JD--ZVpr6LOOQlAP9fmg&s",
    ],
    type: ProductType.PET,
  },
  {
    sku: 1019,
    name: "Yorkshire Terrier",
    price: 1249.9,
    gender: "female",
    size: "small",
    age: "3.5 months",
    color: ["tan", "black"],
    vaccinated: true,
    dewormed: true,
    certified: "AKC",
    microchip: true,
    location: "Philadelphia, PA",
    addInfo: ["Tiny size", "Energetic"],
    images: [
      "https://www.akc.org/wp-content/uploads/2020/07/Yorkshire-Terrier-puppy-in-a-dog-bed.20200601164413905.jpg",
      "https://m.media-amazon.com/images/I/510GX0AWflL._AC_UF1000,1000_QL80_.jpg",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTii0oVcjePeHjKxUzJ-RIBGItEo6KhmKemVnI84Dk5cApgKHR7DxwazKI7zLhp5HIOMHs&usqp=CAU",
    ],
    type: ProductType.PET,
  },
  {
    sku: 1020,
    name: "Sphynx",
    price: 1600.0,
    gender: "male",
    size: "small",
    age: "2 months",
    color: ["black"],
    vaccinated: true,
    dewormed: true,
    certified: "TICA",
    microchip: true,
    location: "San Francisco, CA",
    addInfo: ["Hairless", "Loves attention"],
    images: [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOGOo7Rk2uIf9CiIZ_ZXOWMOWrz6Gw-Wp4Hw&s",
      "https://i.pinimg.com/474x/73/53/18/735318d146356593acc5ae4003510032.jpg",
      "https://external-preview.redd.it/XHbvdXdGeW6XoCh_0YJ6YdCs6O7AmHeTWZerTusYTjQ.png?auto=webp&s=c192d15aa933dbce80499f6fcd6769ba3b93ae2e",
    ],
    type: ProductType.PET,
  },
  {
    sku: 1021,
    name: "Chihuahua",
    price: 899.9,
    gender: "female",
    size: "small",
    age: "2 months",
    color: ["tan"],
    vaccinated: true,
    dewormed: true,
    certified: "AKC",
    microchip: true,
    location: "San Antonio, TX",
    addInfo: ["Tiny", "Alert"],
    images: [
      "https://cdn.pixabay.com/photo/2021/09/25/07/36/chihuahua-6654269_1280.jpg",
      "https://i.pinimg.com/564x/de/f2/c5/def2c5d97009e22d7576d573258a4574.jpg",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfw8QXafhcx335nXNN_j0VXq33k_e7q1bFDyRC1tCNHwRyK5enx_6o7VOuRiuDyQ1CpPc&usqp=CAU",
    ],
    type: ProductType.PET,
  },
  {
    sku: 1022,
    name: "Himalayan",
    price: 1250.99,
    gender: "male",
    size: "medium",
    age: "3 months",
    color: ["black_white"],
    vaccinated: true,
    dewormed: true,
    certified: "CFA",
    microchip: false,
    location: "Columbus, OH",
    addInfo: ["Quiet", "Needs grooming"],
    images: [
      "https://media.gettyimages.com/id/1406623752/photo/beautiful-blue-eyes-himalayan-small-kitten.jpg?s=612x612&w=gi&k=20&c=ru9imxsGSmDudB3vhn7lXNKOgePfDynR3SgTGDe6tpI=",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNCeFXYIpoy4fk57P0QjTv2bPshgoGXBwHCQ&s",
      "https://preview.redd.it/a1x27illtji61.jpg?width=640&crop=smart&auto=webp&s=99fb99172d4c668ea192906502d7d8b693c23eee",
    ],
    type: ProductType.PET,
  },
  {
    sku: 1023,
    name: "Great Dane",
    price: 1450.0,
    gender: "male",
    size: "large",
    age: "2.5 months",
    color: ["black"],
    vaccinated: true,
    dewormed: true,
    certified: "AKC",
    microchip: true,
    location: "Indianapolis, IN",
    addInfo: ["Very large", "Gentle giant"],
    images: [
      "https://animals.net/wp-content/uploads/2018/08/Great-Dane-1-650x425.jpg",
      "https://res.cloudinary.com/lancaster-puppies-laravel/image/upload/v1670961391/breeds/wr2q7dtm6fvngn6bgy9b.jpg",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRK30TKThMVkI-wLpIMFKMrbsJvUNjAFJyDVmeUS4jbMgICOgTQiNRSqIDXj1SbAOCVHPI&usqp=CAU",
    ],
    type: ProductType.PET,
  },
  {
    sku: 1024,
    name: "Oriental Shorthair",
    price: 1099.9,
    gender: "female",
    size: "small",
    age: "2 months",
    color: ["red"],
    vaccinated: true,
    dewormed: false,
    certified: "TICA",
    microchip: false,
    location: "Detroit, MI",
    addInfo: ["Unique look", "Vocal"],
    images: [
      "https://static.wixstatic.com/media/7f428d_eb054b13ac634963b4a95666413e7b2d~mv2.jpg/v1/fill/w_292,h_292,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/7f428d_eb054b13ac634963b4a95666413e7b2d~mv2.jpg",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYCEY2uh2ZSaMkrKCb_c0z2aBw3xtBUr1K3gQ88GPgWsvwVygl95mfxaeIGupsbfK5hQ8&usqp=CAU",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxMxJoQAefQ8h6uhZsoXi7nAHURFRL8yLpsPWCM7nIr_Mc3Dv4z0hLM5jRnvDuIqbRLAA&usqp=CAU",
    ],
    type: ProductType.PET,
  },
  {
    sku: 1025,
    name: "Dachshund",
    price: 1000.0,
    gender: "male",
    size: "small",
    age: "3 months",
    color: ["black", "tan"],
    vaccinated: true,
    dewormed: true,
    certified: "AKC",
    microchip: true,
    location: "Nashville, TN",
    addInfo: ["Loyal", "Curious"],
    images: [
      "https://www.bellaandduke.com/wp-content/uploads/2024/10/pexels-pixabay-257519-jpg-scaled.webp",
      "https://preciouspupsusa.com/cdn/shop/products/671C7BFF-D7C1-4C0C-8FC0-055F1704974B.jpg?v=1680834702",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhK0fJ97khMXVOGOvkf4Xp1gwXhIzY-WyHMg&s",
    ],
    type: ProductType.PET,
  },
  {
    sku: 1026,
    name: "Turkish Angora",
    price: 1049.49,
    gender: "female",
    size: "small",
    age: "2.5 months",
    color: ["white"],
    vaccinated: true,
    dewormed: true,
    certified: "CFA",
    microchip: false,
    location: "Louisville, KY",
    addInfo: ["Elegant", "Active"],
    images: [
      "https://media.gettyimages.com/id/1583983816/pt/foto/ankara-turkiye-turkish-angora-kitten-also-known-as-ankara-cats-considered-the-ancestor-of-long.jpg?s=612x612&w=gi&k=20&c=HDnKvMB7CZZX-YQTy1UVzeXYiStED87oMgFChqoMUrA=",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHEyimD7N0SocVvtzLG7TTo_pW-WFcUaPfpQ&s",
      "https://i.redd.it/obligatory-is-my-kitten-a-turkish-angora-v0-ldxaputbu08d1.jpg?width=1170&format=pjpg&auto=webp&s=b9c9da3fe531b7775c832eaeee5da85aaef6e61c",
    ],
    type: ProductType.PET,
  },
  {
    sku: 1027,
    name: "Husky",
    price: 1350.0,
    gender: "male",
    size: "large",
    age: "2 months",
    color: ["black", "white"],
    vaccinated: true,
    dewormed: true,
    certified: "AKC",
    microchip: true,
    location: "Minneapolis, MN",
    addInfo: ["Talkative", "Loves cold"],
    images: [
      "https://images.unsplash.com/photo-1577938006455-9c04410b9a67?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8RmlsaG90ZSUyMGRlJTIwY2FjaG9ycm8lMjBodXNreXxlbnwwfHwwfHx8MA%3D%3D",
      "https://t4.ftcdn.net/jpg/12/51/71/73/360_F_1251717361_MocP5qmQnyipYv4Ns1hX0ONg9QKL8wFH.jpg",
      "https://as2.ftcdn.net/v2/jpg/01/50/22/43/1000_F_150224318_jaba7G4K6vwrOPGJYGG3tsCDfXMNSaS2.jpg",
    ],
    type: ProductType.PET,
  },
  {
    sku: 1028,
    name: "Savannah",
    price: 1999.99,
    gender: "female",
    size: "medium",
    age: "3 months",
    color: ["black, apricot"],
    vaccinated: true,
    dewormed: true,
    certified: "TICA",
    microchip: true,
    location: "Tampa, FL",
    addInfo: ["Exotic", "Very active"],
    images: [
      "https://www.amanukats.com/wp-content/uploads/2023/02/f7-savannah-kitten-1-1m2dee.jpg",
      "https://static.wixstatic.com/media/c139fc_7ec73b45686d49aa950cc85b1212b704~mv2_d_3456_2304_s_2.jpg/v1/fill/w_980,h_653,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/c139fc_7ec73b45686d49aa950cc85b1212b704~mv2_d_3456_2304_s_2.jpg",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8k0MS6cgLA5rUhnlx7a8F2uMGj_V-loo3sv5k900CqDG2a_K3uUjuB02Lw03wPrEb-1w&usqp=CAU",
    ],
    type: ProductType.PET,
  },
  {
    sku: 1029,
    name: "Pomeranian",
    price: 1100.0,
    gender: "female",
    size: "small",
    age: "3.5 months",
    color: ["apricot"],
    vaccinated: true,
    dewormed: true,
    certified: "AKC",
    microchip: true,
    location: "Kansas City, MO",
    addInfo: ["Fluffy", "Alert"],
    images: [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpCPjJr2VE9A59toR2Z2Iwu4-Wx-BYugSiDw&s",
      "https://supertails.com/cdn/shop/articles/pomeranian-green-field-43482806.webp?v=1735976688",
      "https://preview.redd.it/teacup-pomeranian-puppy-v0-lyqqlce35k6d1.jpeg?width=640&crop=smart&auto=webp&s=7e078c7abdd8f89a80e63666b956cc7e498ea170",
    ],
    type: ProductType.PET,
  },
  {
    sku: 1030,
    name: "Norwegian Forest",
    price: 1150.5,
    gender: "male",
    size: "small",
    age: "2 months",
    color: ["black_white"],
    vaccinated: true,
    dewormed: true,
    certified: "CFA",
    microchip: true,
    location: "Omaha, NE",
    addInfo: ["Strong", "Thick fur"],
    images: [
      "https://www.thesprucepets.com/thmb/naNi8zjtjKgkevMBuLR25s4ZjYY=/2082x0/filters:no_upscale():strip_icc()/GettyImages-1161924364-3c0fe39ad3de4b5abfac8b75c5fae539.jpg",
      "https://www.shutterstock.com/image-photo/kitten-norwegian-forest-cat-260nw-713771098.jpg",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQxFG3uJCH-7BwbByU-qpev6B_AyUad74EvuKGE5pIuivD_1m6v7h-1sW4DBbE07etIrY&usqp=CAU",
    ],
    type: ProductType.PET,
  },
];
