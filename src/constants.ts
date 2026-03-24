export interface BrandSubcategory {
  name: string;
  description: string;
  image?: string;
}

export interface Brand {
  name: string;
  logo: string;
  description: string;
  products?: string[];
  image?: string;
  mainBiography?: string;
  subcategories?: BrandSubcategory[];
}

export interface ProductSection {
  id: string;
  title: string;
  description: string;
  icon: string;
  brands: Brand[];
}

export const BRANDS_DATA: Brand[] = [
  {
    name: "Kicker",
    logo: "https://aceaudioinc.com/wp-content/uploads/2021/03/b9dbd980082a744c0a2850396743f18b.jpeg",
    description: "Make your sound larger than life with Kicker's mid-range speakers, car tweeters, and subwoofers. Since 1973, Kicker has provided excellent sound quality with remarkable performance.",
    products: ["Subwoofers", "Speakers", "Amplifiers"]
  },
  {
    name: "Rockford Fosgate",
    logo: "https://aceaudioinc.com/wp-content/uploads/2021/03/bafa9748d2658073a6b7e2b97229d08b.png",
    description: "Car audio for Sedans, Coupes, SUVs, and Trucks. Lifted or lowered. Rockford Fosgate audio ensures the experience is performance-driven – just like your ride.",
    products: ["Amplifiers", "Speakers", "Subwoofers"],
    image: "https://aceaudioinc.com/wp-content/uploads/2021/03/P2D2-12_1_m.png",
    mainBiography: "Get Power series sound quality in a drop-in speaker. These full-range speakers inherit all the coolest features from their big brother component systems. Be prepared, these are more than OEM replacement speakers, their sound quality has been perfected for true Rockford Fosgate fanatics! Our subwoofer incorporates technologies never before seen in car audio, like the Injection Molded Foam Surround, making the foam strong and durable like a rubberized material. The Edge Wound voice coil allows the windings to be very close with no air gaps so it stays cool for high power handling capacity. We also engineered a very efficient “Push/Pull” voice coil design with a huge Neodymium magnet for a very efficient motor assembly. We have a full-range speaker rated at 100 Watts RMS designed as a high-powered OEM replacement perfected for sound quality. Speakers include grilles, integrated concealed crossovers, and mounting hardware.",
    subcategories: [
      {
        name: "Amplifiers",
        description: "Unleash the beast in your system. RF amps bring out all the potential in your speakers and subs.",
        image: "https://aceaudioinc.com/wp-content/uploads/2021/03/Screen-Shot-2021-03-19-at-1.19.18-PM.png"
      },
      {
        name: "Speakers",
        description: "The music moves you. RF speakers are designed to overachieve and to take you on your journey.",
        image: "https://aceaudioinc.com/wp-content/uploads/2021/03/Screen-Shot-2021-03-19-at-1.19.45-PM.png"
      },
      {
        name: "Subwoofers",
        description: "Bass, how low can you go? Everyone will know it’s you from blocks away with RF subs in your ride.",
        image: "https://aceaudioinc.com/wp-content/uploads/2021/03/Screen-Shot-2021-03-19-at-1.22.34-PM.png"
      }
    ]
  },
  {
    name: "Alpine",
    logo: "https://aceaudioinc.com/wp-content/uploads/2021/03/alpine-logo-vector-01-e1616022036711.png",
    description: "For over four decades, the Alpine brand has been synonymous with premium sound quality and innovation. Explore the passion and dedication behind enhancing your drive.",
    products: ["Sound Systems", "Amplifiers", "Subwoofers"]
  },
  {
    name: "Kenwood",
    logo: "https://aceaudioinc.com/wp-content/uploads/2021/03/Kenwood_logo_logotype_wordmark.png",
    description: "KENWOOD speakers are designed to meet the critical listening demands of the North American music lover. From speakers to amplifiers, Kenwood delivers quality.",
    products: ["Speakers", "Amplifiers", "Subwoofers"]
  },
  {
    name: "Pioneer",
    logo: "https://aceaudioinc.com/wp-content/uploads/2021/03/376510814PioneerLogo_medium.gif",
    description: "Rated as one of the best sounding sound systems nowadays. Pioneer is a hallmark of good engineering and good sound with something for every budget.",
    products: ["Speakers", "Amplifiers", "Entertainment Systems"]
  },
  {
    name: "Focal",
    logo: "https://aceaudioinc.com/wp-content/uploads/2021/03/focal.png",
    description: "We strive to create sound equipment that honors the artist's musical creation and empowers you to feel a new dimension of the music.",
    products: ["Premium Speakers"]
  },
  {
    name: "Stinger",
    logo: "https://aceaudioinc.com/wp-content/uploads/2021/03/lighter.png",
    description: "We design and engineer technology that makes your drive more fun. Built for audiophiles by audiophiles, our products span infotainment, audio upgrades, and installation accessories.",
    products: ["Speakers", "Installation Accessories"]
  },
  {
    name: "EchoMaster",
    logo: "https://aceaudioinc.com/wp-content/uploads/2021/03/EchoMaster_FullColour_TEAL_Updated3-7-19-copy.png",
    description: "Backup cameras and blindspot cameras provide a level of visibility that a simple rearview mirror can never approach.",
    products: ["Audio Accessories", "Safety Systems"]
  },
  {
    name: "Rhino Box",
    logo: "https://aceaudioinc.com/wp-content/uploads/2024/05/logo-1.png",
    description: "Your home for the guaranteed best quality subwoofer enclosures. Made in America with great attention to detail, precision, and quality. Nothing hits harder than a Rhino.",
    products: ["Carpeted Bass Boxes", "Poly Bass Boxes", "Accessories"]
  },
  {
    name: "Heise",
    logo: "https://aceaudioinc.com/wp-content/uploads/2021/03/Heise-Logo-2.png",
    description: "Our Heise LED headlight bulbs will outlast and outperform others on the market, shining 260% brighter than other LEDs to allow you to see even farther at night.",
    products: ["LED Headlights"]
  },
  {
    name: "Viper",
    logo: "https://aceaudioinc.com/wp-content/uploads/2021/03/Viper-Logo.png",
    description: "Viper is the world's best selling vehicle security and remote start brand. We use cutting-edge technology to make sure you are in control.",
    products: ["Remote Starts", "Security Systems"]
  }
];

export const PRODUCT_SECTIONS: ProductSection[] = [
  {
    id: "audio",
    title: "Audio Systems",
    description: "With brand new speaker systems, we want to match the perfect sound system to your car and make both long and short drives more enjoyable.",
    icon: "Speaker",
    brands: BRANDS_DATA.filter(b => ["Kicker", "Rockford Fosgate", "Alpine", "Kenwood", "Pioneer", "Focal", "Stinger", "EchoMaster", "Rhino Box"].includes(b.name))
  },
  {
    id: "cameras",
    title: "Back-Up Cameras",
    description: "We sell different types of backup cameras that provide a level of visibility that a simple rearview mirror can never approach.",
    icon: "Camera",
    brands: [
      {
        name: "Alpine",
        logo: "https://aceaudioinc.com/wp-content/uploads/2021/03/alpine-logo-vector-01-e1616022036711.png",
        description: "Alpine Back-up Cameras have High Dynamic Range to enhance the details of your rear-view image no matter the driving conditions.",
        image: "https://aceaudioinc.com/wp-content/uploads/2021/03/Screen-Shot-2021-03-26-at-12.18.04-PM.png"
      },
      {
        name: "Kenwood",
        logo: "https://aceaudioinc.com/wp-content/uploads/2021/03/Kenwood_logo_logotype_wordmark.png",
        description: "The Kenwood multi-view camera is equipped with an advanced image processor capable of altering viewing angles and increasing viewing options.",
        image: "https://aceaudioinc.com/wp-content/uploads/2021/03/Screen-Shot-2021-03-26-at-1.06.53-PM.png"
      },
      {
        name: "Pioneer",
        logo: "https://aceaudioinc.com/wp-content/uploads/2021/03/376510814PioneerLogo_medium.gif",
        description: "The Pioneer Backup camera offers improved resolution and eliminates the smear that occurs with bright light or direct sunlight.",
        image: "https://aceaudioinc.com/wp-content/uploads/2021/03/Screen-Shot-2021-03-26-at-2.20.48-PM.png"
      }
    ]
  },
  {
    id: "screens",
    title: "Touch Screens & Displays",
    description: "We sell Apple CarPlay, Android Auto systems, and various radio touch screens. Rise above the rest with the latest display technology.",
    icon: "Monitor",
    brands: [
      {
        name: "Alpine",
        logo: "https://aceaudioinc.com/wp-content/uploads/2021/03/alpine-logo-vector-01-e1616022036711.png",
        description: "Rise above the rest with Alpine Car play systems, the largest display on the market, and the culmination of everything you love.",
        image: "https://aceaudioinc.com/wp-content/uploads/2021/03/Screen-Shot-2021-03-26-at-12.49.01-PM.png"
      },
      {
        name: "Kenwood",
        logo: "https://aceaudioinc.com/wp-content/uploads/2021/03/Kenwood_logo_logotype_wordmark.png",
        description: "Enjoy convenient control of popular apps like Spotify and Pandora, built-in Bluetooth for hands-free calls and streaming music.",
        image: "https://aceaudioinc.com/wp-content/uploads/2021/03/Screen-Shot-2021-03-26-at-1.27.25-PM.png"
      },
      {
        name: "Pioneer",
        logo: "https://aceaudioinc.com/wp-content/uploads/2021/03/376510814PioneerLogo_medium.gif",
        description: "Pioneer digital media receivers are built specifically for CD-free digital music devotees. So you can have the most comfortable experience.",
        image: "https://aceaudioinc.com/wp-content/uploads/2021/03/Screen-Shot-2021-03-26-at-2.22.36-PM.png"
      },
      {
        name: "Stinger",
        logo: "https://aceaudioinc.com/wp-content/uploads/2021/03/lighter.png",
        description: "Stinger has everything a true audiophile needs to upgrade a vehicle's sound or infotainment system with the latest accessories."
      }
    ]
  },
  {
    id: "headlights",
    title: "LED Headlights",
    description: "Check out our awesome LED headlights. Heise LED Lighting offers a range of high quality aftermarket lighting options.",
    icon: "Zap",
    brands: BRANDS_DATA.filter(b => b.name === "Heise")
  },
  {
    id: "remote-start",
    title: "Remote Start",
    description: "Are you tired of using your keys? Our Viper remote starts bring your vehicle up to speed with cutting-edge technology.",
    icon: "Key",
    brands: BRANDS_DATA.filter(b => b.name === "Viper")
  }
];

export const REVIEWS_DATA = [
  {
    name: "Chasity Lowe",
    text: "A great experience as usual. The guys up there are professional and also very friendly.",
    rating: 5
  },
  {
    name: "Keith Daniel",
    text: "Experts! Had a problem with my factory stereo that no other place in town could've fixed, and they made a great solution! Took their time, did it RIGHT the first time. Very friendly service and a super clean repair/install of components!",
    rating: 5
  },
  {
    name: "Frankie Fikes",
    text: "Well in for a key pad battery but they was out of them but he did gave me some good information on the problem, which was helpful to me. But that's where I want to go to get my CD install and speaker they have a good brands to choose from. I can tell that they are well schooled in their profession.",
    rating: 5
  },
  {
    name: "Louisiana Cat Lady",
    text: "Had a single deck installed today. I'm super satisfied with the work and the service. Didn't take long at all and the price was very budget friendly. No upselling. All my questions answered. Wonderful experience.",
    rating: 5
  },
  {
    name: "Jonathan Peyton",
    text: "Knowledgeable, good selection of products, competent & creative installers. Would recommend for any audio related needs – car, boat, ATVs, they do it all.",
    rating: 5
  },
  {
    name: "Eddie Hammonds",
    text: "I had tweeters installed this morning very pleased with the install thanks guys",
    rating: 5
  }
];
