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
    description: "Make your sound larger than life with Kicker's mid-range speakers, car tweeters, and subwoofers.",
    products: ["Subwoofers", "Speakers", "Amplifiers"],
    image: "https://aceaudioinc.com/wp-content/uploads/2021/03/Untitled-1.png",
    mainBiography: "Make your sound larger than life with Kicker’s mid-range speakers, car tweeters, and subwoofers. Since 1973, Kicker has provided excellent sound quality with remarkable performance. We want to match the perfect Kicker speaker systems to your car and make both long and short drives more enjoyable.",
    subcategories: [
      {
        name: "Amplifiers",
        description: "Kicker Amplifiers will give you all the power and sound you need.",
        image: "https://aceaudioinc.com/wp-content/uploads/2021/03/amplifiers.jpg"
      },
      {
        name: "Subwoofers",
        description: "Make your sound larger than life with Kicker subwoofers.",
        image: "https://aceaudioinc.com/wp-content/uploads/2021/03/subwoofers.jpg"
      },
      {
        name: "Speakers",
        description: "Kicker Speakers give you excellent sound quality with remarkable performance.",
        image: "https://aceaudioinc.com/wp-content/uploads/2021/03/43ds.jpg"
      }
    ]
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
    description: "For over four decades, the Alpine brand has been synonymous with premium sound quality and innovation.",
    products: ["Sound Systems", "Amplifiers", "Subwoofers"],
    image: "https://aceaudioinc.com/wp-content/uploads/2021/03/Untitled-design-15.png",
    mainBiography: "For over four decades, the Alpine brand has been synonymous with premium sound quality and innovation. Explore the passion and dedication behind enhancing your drive. Make your drive your own! Our Alpine systems will bring your car to the 21st century by giving you the ultimate sound system.",
    subcategories: [
      {
        name: "Sound Systems",
        description: "Rise above the rest with Alpine Car play systems, the largest display on the market.",
        image: "https://aceaudioinc.com/wp-content/uploads/2021/03/Screen-Shot-2021-03-26-at-12.49.01-PM.png"
      },
      {
        name: "Amplifiers",
        description: "No matter your system, Alpine amplifiers will deliver the power it takes to play your music.",
        image: "https://aceaudioinc.com/wp-content/uploads/2021/03/Screen-Shot-2021-03-26-at-12.25.33-PM.png"
      },
      {
        name: "Subwoofers",
        description: "Our Alpine Subwoofers give you all the power and bass your system needs.",
        image: "https://aceaudioinc.com/wp-content/uploads/2021/03/Screen-Shot-2021-03-26-at-12.18.04-PM.png"
      }
    ]
  },
  {
    name: "Kenwood",
    logo: "https://aceaudioinc.com/wp-content/uploads/2021/03/Kenwood_logo_logotype_wordmark.png",
    description: "KENWOOD speakers are designed to meet the critical listening demands of the North American music lover.",
    products: ["Speakers", "Amplifiers", "Subwoofers"],
    image: "https://aceaudioinc.com/wp-content/uploads/2021/03/Untitled-design-16.png",
    mainBiography: "KENWOOD speakers are designed to meet the critical listening demands of the North American music lover. From speakers to amplifiers, Kenwood delivers quality. Take your ride to the next level with our awesome Kenwood products!",
    subcategories: [
      {
        name: "Speakers",
        description: "Speakers may be the most important piece of the sound quality puzzle. Our Kenwood speakers will give you the best sound quality.",
        image: "https://aceaudioinc.com/wp-content/uploads/2021/03/Screen-Shot-2021-03-26-at-1.06.53-PM.png"
      },
      {
        name: "Amplifiers",
        description: "Kenwood Amplifiers deliver high quality sound combined with impressive power to ensure your audio systems reach their full potential.",
        image: "https://aceaudioinc.com/wp-content/uploads/2021/03/Screen-Shot-2021-03-26-at-1.23.11-PM.png"
      },
      {
        name: "Entertainment Systems",
        description: "Enjoy convenient control of popular apps like Spotify and Pandora, built-in Bluetooth for hands-free calls and streaming music.",
        image: "https://aceaudioinc.com/wp-content/uploads/2021/03/Screen-Shot-2021-03-26-at-1.27.25-PM.png"
      }
    ]
  },
  {
    name: "Pioneer",
    logo: "https://aceaudioinc.com/wp-content/uploads/2021/03/376510814PioneerLogo_medium.gif",
    description: "Rated as one of the best sounding sound systems nowadays. Pioneer is a hallmark of good engineering and good sound.",
    products: ["Speakers", "Amplifiers", "Entertainment Systems"],
    image: "https://aceaudioinc.com/wp-content/uploads/2021/03/Untitled-design-20.png",
    mainBiography: "Rated as one of the best sounding sound systems nowadays. Pioneer is a hallmark of good engineering and good sound with something for every budget. We want you to enjoy your ride more than ever by bringing Pioneer to your vehicle! Whatever vehicle you drive, we can make it sound and feel brand new.",
    subcategories: [
      {
        name: "Speakers",
        description: "Pioneer Speakers are designed to overachieve and to keep you relaxed on your journey.",
        image: "https://aceaudioinc.com/wp-content/uploads/2021/03/Screen-Shot-2021-03-26-at-2.18.45-PM.png"
      },
      {
        name: "Amplifiers",
        description: "Our Pioneer amplifiers deliver high quality sound combined with impressive power.",
        image: "https://aceaudioinc.com/wp-content/uploads/2021/03/Screen-Shot-2021-03-26-at-2.20.48-PM.png"
      },
      {
        name: "Entertainment Systems",
        description: "Pioneer digital media receivers are built specifically for CD-free digital music devotees.",
        image: "https://aceaudioinc.com/wp-content/uploads/2021/03/Screen-Shot-2021-03-26-at-2.22.36-PM.png"
      }
    ]
  },
  {
    name: "Focal",
    logo: "https://aceaudioinc.com/wp-content/uploads/2021/03/focal.png",
    description: "We strive to create sound equipment that honors the artist's musical creation and empowers you to feel a new dimension of the music.",
    products: ["Premium Speakers"],
    image: "https://aceaudioinc.com/wp-content/uploads/2021/03/Untitled-design-18.png",
    mainBiography: "We strive to create sound equipment that honors the artist’s musical creation and empowers you to feel a new dimension of the music. We want every nuance to be revealed with precision and purity. With Focal, let the sound thrill your senses until you go beyond the usual perception of music and discover new fields of emotion. Focal has been creating benchmark acoustic equipment since 1979.",
    subcategories: [
      {
        name: "Speakers",
        description: "The music moves you. The new Focal speakers are designed to overachieve and to keep you relaxed on your journey.",
        image: "https://aceaudioinc.com/wp-content/uploads/2021/03/Screen-Shot-2021-03-26-at-1.58.54-PM.png"
      }
    ]
  },
  {
    name: "Stinger",
    logo: "https://aceaudioinc.com/wp-content/uploads/2021/03/lighter.png",
    description: "We design and engineer technology that makes your drive more fun. Built for audiophiles by audiophiles.",
    products: ["Speakers", "Installation Accessories"],
    image: "https://aceaudioinc.com/wp-content/uploads/2021/03/Untitled-design-21.png",
    mainBiography: "We design and engineer technology that makes your drive more fun. Built for audiophiles by audiophiles, our products span infotainment and radio upgrades, audio upgrades and all the installation accessories to make those enhancements easy. Stinger sets the bar for bad to the bone sound performance and is the go-to brand for car audio enthusiasts.",
    subcategories: [
      {
        name: "Speakers",
        description: "Our Stinger Speakers are Made to create an engrossing listening experience with detail and create unrivaled impact and tonality.",
        image: "https://aceaudioinc.com/wp-content/uploads/2021/03/Screen-Shot-2021-03-26-at-2.33.18-PM.png"
      }
    ]
  },
  {
    name: "EchoMaster",
    logo: "https://aceaudioinc.com/wp-content/uploads/2021/03/EchoMaster_FullColour_TEAL_Updated3-7-19-copy.png",
    description: "Backup cameras and blindspot cameras provide a level of visibility that a simple rearview mirror can never approach.",
    products: ["Audio Accessories", "Safety Systems"],
    image: "https://aceaudioinc.com/wp-content/uploads/2021/03/Untitled-design-22.png",
    mainBiography: "Backup cameras and blindspot cameras provide a level of visibility that a simple rearview mirror can never approach by giving you a crystal clear view of what’s behind your car. Backing up and parking have never been safer than now. Our EchoMaster Backup Cameras will give you the feeling of safety, everytime you back up.",
    subcategories: [
      {
        name: "Backup Cameras",
        description: "Our EchoMaster Backup Cameras will give you the feeling of safety, everytime you back up.",
        image: "https://aceaudioinc.com/wp-content/uploads/2021/03/Screen-Shot-2021-03-26-at-2.45.58-PM.png"
      }
    ]
  },
  {
    name: "Rhino Box",
    logo: "https://aceaudioinc.com/wp-content/uploads/2024/05/logo-1.png",
    description: "Your home for the guaranteed best quality subwoofer enclosures. Made in America with great attention to detail.",
    products: ["Carpeted Bass Boxes", "Poly Bass Boxes", "Accessories"],
    image: "https://aceaudioinc.com/wp-content/uploads/2024/05/Untitled-design-2024-05-10T120154.043.png",
    mainBiography: "Welcome to Rhino Box, your home for the guaranteed best quality sub-woofer enclosures. We manufacture our sub-woofer enclosures at our state of the art facility in Houston, Texas, USA. Which means all of our products are made in America with great attention to detail, precision, and quality. All of our boxes are nailed, glued, and sealed again to insure durability and sound quality. 'Nothing hits harder than a Rhino.'",
    subcategories: [
      {
        name: "Carpeted Bass Boxes",
        description: "Experience the ultimate in car audio with Rhino Box carpeted bass boxes, meticulously engineered for unmatched performance and durability.",
        image: "https://aceaudioinc.com/wp-content/uploads/2024/05/DOG-227-CA.jpg"
      },
      {
        name: "Poly Bass Boxes",
        description: "Upgrade your car's audio system with Poly bass boxes, delivering crisp, clear sound and deep, powerful bass.",
        image: "https://aceaudioinc.com/wp-content/uploads/2024/05/vi.jpg"
      },
      {
        name: "Accessories",
        description: "Accessorize your ride with our range of premium bass box accessories, designed to enhance both style and functionality.",
        image: "https://aceaudioinc.com/wp-content/uploads/2024/05/SPACER.CA_.1.png"
      }
    ]
  },
  {
    name: "Heise",
    logo: "https://aceaudioinc.com/wp-content/uploads/2021/03/Heise-Logo-2.png",
    description: "Our Heise LED headlight bulbs will outlast and outperform others on the market.",
    products: ["LED Headlights"]
  },
  {
    name: "Viper",
    logo: "https://aceaudioinc.com/wp-content/uploads/2021/03/Viper-Logo.png",
    description: "Viper is the world's best selling vehicle security and remote start brand.",
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
