
// import { TiLocationOutline } from "react-icons/ti";
export const menu = [
  { id: 1, name: "Home", link: "/home" },
  { id: 2, name: "Destination", link: "/province" },
  { id: 3, name: "About", link: "/about" },
  { id: 4, name: "Contect", link: "/contect" }, 
 
];
import phnompenh from '../assets/images/phnompenh.jpg'
import province from '../assets/images/Expore_provin.jpg'
// PhnomPenh
export const discoverCards = [
  {
    id: 1,
    title: "Welcome to Phnom Penh",
    description:
      "Discover the capital city of Cambodia — a vibrant blend of culture, history, and modern life.",
    buttonText: "Explore Phnom Penh",
    image: phnompenh,
    buttonColor: "bg-blue-600 hover:bg-blue-700",
    linkUrl: "/phnompenh",
    category: "City", // ✅ added category
  },
  {
    id: 2,
    title: "Explore All Provinces",
    description:
      "Journey through Cambodia's stunning provinces, each with its own story, culture, and beauty.",
    buttonText: "Explore Provinces",
    image: province, // replace with your imported image variable
    buttonColor: "bg-green-600 hover:bg-green-700",
    linkUrl: "/provinces",
    category: "Region", // ✅ added category
  },
];


export const PhnomPenhTourist = [
  {
    id: 1,
    name: "Royal Palace",
    imageUrl: "https://i.pinimg.com/1200x/d0/a7/2a/d0a72ae547c7d844238416b210a999ea.jpg",
    description: "The Royal Palace of Cambodia is a complex of buildings serving as the royal residence of the King of Cambodia. Built in 1866, it features stunning Khmer architecture and houses the Silver Pagoda.",
    linkUrl: "/attractions/royal-palace",
    category: "Historical Site"
  },
  {
    id: 2,
    name: "Aeon Mall",
    imageUrl: "https://i.pinimg.com/1200x/92/cf/6a/92cf6a4f58111dd673a76886f9e6bb7f.jpg",
    description: "A modern shopping mall offering international and local brands, entertainment, and dining options. Perfect for shopping and leisure.",
    linkUrl: "/attractions/aeon-1",
    category: "Mall"
  },
  {
   id: 3,
   name: "Phnom Penh Night Market",
   imageUrl: "https://i.pinimg.com/1200x/c0/3b/a0/c03ba04e668a375200458ecd5c7a0719.jpg", // replace with a real image
   description:"A lively night market featuring local street food, handicrafts, and souvenirs. Perfect for evening strolls and experiencing Phnom Penh's vibrant nightlife.",
   linkUrl: "/attractions/night-market",
   category: "Market & Entertainment",
  },
  {
    id: 4,
    name: "Phsar Thmei",
    imageUrl: "https://i.pinimg.com/1200x/0d/9c/22/0d9c22da6b80a3ae2be07cfa10db43c7.jpg",
    description: "An iconic Art Deco building with a distinctive yellow dome, built in 1937. The market offers jewelry, clothing, souvenirs, and local food in a bustling atmosphere.",
    linkUrl: "/attractions/central-market",
    category: "Market"
  },
  {
    id: 5,
    name: "Wat Phnom",
    imageUrl: "https://i.pinimg.com/736x/b2/94/42/b294422f98c75851ba72e2f5b2d11a99.jpg",
    description: "The namesake temple of Phnom Penh, built in 1372. Situated on a small hill, it's the tallest religious structure in the city and an important cultural landmark.",
    linkUrl: "/attractions/wat-phnom",
    category: "Temple"
  },
  {
    id: 6,
    name: "National Museum of Cambodia",
    imageUrl: "https://i.pinimg.com/1200x/57/ea/94/57ea94876deeb748aa4c97be41192861.jpg",
    description: "Houses the world's finest collection of Khmer art, including sculptures, ceramics, and ethnographic objects from prehistoric to post-Angkorian periods.",
    linkUrl: "/attractions/national-museum",
    category: "Museum"
  },
 {
    id: 7,
    name: "Russian Market",
    imageUrl: "https://i.pinimg.com/736x/ca/ed/a3/caeda325d0e401b38b4b9be5ad725ba7.jpg",
    description:"One of Phnom Penh's most famous markets, known for its vast selection of souvenirs, clothing, jewelry, handicrafts, and antiques. A must-visit shopping destination for tourists and locals alike.",
    linkUrl: "/attractions/russian-market",
    category: "Shopping",
  },
  {
    id: 8,
    name: "Sokha Phnom Penh Hotele",
    imageUrl: "https://i.pinimg.com/1200x/79/f5/3e/79f53e9e08b77d1cfda653d6e548abb7.jpg",
    description:
      "A five-star luxury resort in the heart of Phnom Penh, featuring world-class amenities, rooftop pool, spa, fine dining restaurants, and stunning city views. Perfect for relaxation and entertainment.",
    linkUrl: "/attractions/sokha-hotel",
    category: "Resort",
  },
  {
    id: 9,
    name: "Chaktomuk Conference Hall",
    imageUrl: "https://i.pinimg.com/1200x/81/58/fa/8158fa9d6d77be3a2c77937877c1078e.jpg", // replace with real image URL
    description: "A fan-shaped hall designed by Vann Molyvann, offering 270-degree views of the confluence of four rivers. A blend of traditional Khmer elements and modern architecture.",
    linkUrl: "/attractions/chaktomuk-hall",
    category: "Landmark"
  },
  {
    id: 10,
    name: "Koh Pich (Diamond Island)",
    imageUrl: "https://i.pinimg.com/736x/22/f9/24/22f9244d4143ca1639f656bdb256a9b8.jpg",
    description: "A modern development area featuring parks, restaurants, and entertainment venues. Popular spot for locals and tourists to relax and enjoy river views.",
    linkUrl: "/attractions/diamond-island",
    category: "Landmark"
  },
  {
    id: 11,
    name: "Olympic Stadium",
    imageUrl: "https://i.pinimg.com/1200x/f9/92/76/f99276e87ab930a03ba8d08267e8d4a3.jpg",
    description: "Built in the 1960s with a distinctive modernist design. A popular spot for locals to exercise, with aerobics classes and sports activities in the evenings.",
    linkUrl: "/attractions/olympic-stadium",
    category: "Landmark"
  },
  {
  id: 12,
  name: "Phnom Penh Riverside Pool ",
  imageUrl: "https://i.pinimg.com/1200x/5e/f0/16/5ef01683bd5777035bd3827603771111.jpg", // same as your reference
  description: "A popular recreational area featuring a large swimming pool, sunbathing zones, and leisure facilities. Perfect for families and tourists looking to relax and have fun in the city.",
  linkUrl: "/attractions/riverside-pool",
  category: "Recreation & Pool"
}

];
// Phnom Penh Detail
export const PhnomPenhDetail = [
  {
    id: 1,
    content: `The Royal Palace, located in the heart of Phnom Penh, is one of Cambodia’s most important historical landmarks. 
    Built in 1866, it serves as the official residence of the King of Cambodia and showcases the best of traditional Khmer architecture 
    with beautiful gilded roofs and ornate decorations. The complex also includes the Silver Pagoda, which houses priceless Buddhist relics, 
    including a crystal Buddha and a golden Maitreya Buddha encrusted with diamonds.`,
    tip: "Visitors are advised to dress modestly and visit early in the morning to avoid crowds.",
    gallery: [
      "https://i.pinimg.com/1200x/6d/6b/34/6d6b34a19aa1dd7b49a695ecf411b071.jpg",
      "https://i.pinimg.com/736x/35/5f/d1/355fd15cedfc7ba0fb2758ede24f89d6.jpg",
      "https://i.pinimg.com/1200x/70/b9/9a/70b99a295170118a07dbf53c8ddeb639.jpg"
    ]
  },
  {
    id: 2,
    content: `Aeon Mall 1 is one of the largest and most modern shopping centers in Cambodia. Opened in 2014, 
    it offers a wide range of international and local brands, a cinema, restaurants, cafes, and family entertainment. 
    Its clean design and air-conditioned comfort make it a favorite hangout for both locals and tourists.`,
    tip: "Visit during weekdays to avoid weekend crowds.",
    gallery: [
      "https://i.pinimg.com/1200x/2c/7e/97/2c7e97929817ab0083189f679ee2ac7b.jpg",
      "https://i.pinimg.com/1200x/d4/89/48/d48948c822091e82fe9a6c21397ebcb6.jpg"
      , "https://i.pinimg.com/1200x/e1/b8/61/e1b861f10677ce493f6a98ba7604f4a7.jpg",
    ]
  },
  {
    id: 3,
    content: `Located along the riverside, this night market is a hub of activity and culture, featuring local street food, 
    live music, clothing stalls, and handmade crafts. It offers visitors an authentic glimpse into Phnom Penh’s nightlife 
    and is a great place to relax and shop under the stars.`,
    tip: "Come hungry — local street foods like grilled skewers and banana pancakes are must-tries!",
    gallery: [
      "https://i.pinimg.com/736x/8b/69/ce/8b69ce2dc1c6c740caa191c4e22acfbb.jpg",
      "https://i.pinimg.com/1200x/3a/5c/4f/3a5c4f52ff84fc1d5893423d6c5fec27.jpg"
      , "https://i.pinimg.com/736x/35/48/33/354833e1a0c3dc68e4db362b6efe2a20.jpg",
    ]
  },
  {
    id: 4,
    content: `Built in 1937, Central Market is one of Phnom Penh’s most distinctive landmarks, featuring a massive Art Deco dome painted in bright yellow. 
    Inside, visitors can find jewelry, souvenirs, electronics, and local delicacies. The market is not only a shopping hub but also 
    an architectural gem that showcases Cambodia’s colonial-era heritage.`,
    tip: "Morning visits are best to enjoy the cool weather and vibrant market energy.",
    gallery: [
      "https://i.pinimg.com/736x/1f/8b/1d/1f8b1d9cda512adc8562a185f1a4428c.jpg",
      "https://i.pinimg.com/1200x/8c/2d/2f/8c2d2f85ed742ec7af5a8c44625d4309.jpg",
     "https://i.pinimg.com/1200x/1b/b9/05/1bb90578656524f5b9741d7d6ac01d52.jpg",
    ]
  },
  {
    id: 5,
    content: `Wat Phnom, standing atop a 27-meter-high hill, is the spiritual heart of Phnom Penh. 
    Built in 1372, it is said to have been founded by Lady Penh to house sacred Buddha statues she found floating in the river. 
    The temple offers a peaceful atmosphere with lush greenery and panoramic views of the city. It is also associated with 
    the legend that gave Phnom Penh its name.`,
    tip: "The best time to visit is during sunset, when the temple glows beautifully in golden light.",
    gallery: [
      "https://i.pinimg.com/736x/9b/a5/25/9ba525afe441daf981df83f2c283765c.jpg",
      "https://i.pinimg.com/736x/11/97/0b/11970ba933ffb2440bd1409973b3ec08.jpg",
      "https://i.pinimg.com/736x/ff/aa/03/ffaa03a4c0e49daa85e78f39085bd786.jpg",
    
    ]
  },
  {
    id: 6,
    content: `Located near the Royal Palace, the National Museum houses the world’s finest collection of Khmer sculptures and artifacts, 
    ranging from prehistoric times to the post-Angkorian era. The building itself, with its red sandstone and graceful Khmer-style 
    roof, is a masterpiece of traditional design.`,
    tip: "Guided tours are available to gain deeper insight into Khmer history and art.",
    gallery: [
      "https://i.pinimg.com/736x/8e/cb/bf/8ecbbf51888a5afe7673071edb36aa4f.jpg",
      "https://i.pinimg.com/1200x/a7/8a/24/a78a24efcbf03d06615f42736ba0b92f.jpg",
       "https://i.pinimg.com/736x/2c/5f/53/2c5f53874e11eddccb3baf7da98a9db9.jpg",

       "https://i.pinimg.com/736x/35/6c/c7/356cc7b6481dd3068a866900cf5e0c7d.jpg",
      "https://i.pinimg.com/736x/cc/5d/db/cc5ddb3472ab4cf1b1c00fce687909e9.jpg",
       "https://i.pinimg.com/736x/29/72/28/297228756c1c4304a3cd340d4d44e317.jpg",
    ]
    
  },
  
  
  {
    id: 7,
    content: `The Russian Market is a bustling maze of vendors selling clothes, souvenirs, motor parts, and delicious local food. 
    It got its name from the 1980s, when many Russian expatriates shopped there. Today, it’s a must-visit for bargain hunters 
    and those seeking an authentic Cambodian market experience.`,
    tip: "Bargain politely — prices are usually flexible.",
    gallery: [
      "https://i.pinimg.com/1200x/2b/a8/c8/2ba8c8b809abe44e258bd7989fbfa1bb.jpg",
      "https://i.pinimg.com/1200x/8f/45/c8/8f45c80296e16983aed6b258e454c15c.jpg",
       "https://i.pinimg.com/1200x/01/91/8b/01918ba5cc7eb483b1427459a972abc1.jpg",
    ]
  },
  {
    id: 8,
    content: `This luxurious 5-star hotel sits along the Chroy Changvar peninsula, offering breathtaking views of both the Mekong 
    and Tonle Sap rivers. With its elegant rooms, infinity pool, and fine dining, Sokha Phnom Penh is ideal for those seeking comfort 
    and a premium stay in the capital.`,
    tip: "Book a riverside room for the best sunrise views.",
    gallery: [
      "https://i.pinimg.com/736x/36/77/8a/36778aa5f50aec39d3dfea152b29bba9.jpg",
      "https://i.pinimg.com/1200x/9a/54/36/9a54365a05b7a387780375a72a184216.jpg"
      , "https://i.pinimg.com/1200x/dc/7c/e1/dc7ce19f75a06c077918394c81f4b627.jpg",
    ]
  },
  {
    id: 9,
    content: `Designed by Cambodia’s renowned architect Vann Molyvann in 1961, this unique fan-shaped hall is a landmark of modern Khmer architecture. 
    It hosts national conferences, performances, and cultural events, blending tradition and modernism beautifully.`,
    tip: "Check local event schedules — there are often free cultural shows or exhibitions.",
    gallery: [
      "https://i.pinimg.com/736x/c2/77/37/c27737cedb36ef92d44bbb6fb117f8e6.jpg",
      "https://i.pinimg.com/736x/fa/d7/e4/fad7e4cb4751613876c15980a04c60c5.jpg",
       "https://i.pinimg.com/736x/88/3d/da/883dda7b52a42cd37c9006017cf006fd.jpg",
    ]
  },
  {
    id: 10,
    content: `Koh Pich, or Diamond Island, is a modern urban island filled with entertainment, shopping centers, and beautiful riverside parks. 
    It's known for its night views, love bridge, and event halls. Many festivals and fairs are held here throughout the year.`,
    tip: "Visit at night for the best lights and romantic river atmosphere.",
    gallery: [
      "https://i.pinimg.com/736x/e2/f1/4e/e2f14e178f402a1fe6553b64e3cb887b.jpg",
      "https://i.pinimg.com/736x/88/0f/b6/880fb6894fbab2f83dfd6c97998e7282.jpg",
       "https://i.pinimg.com/736x/b0/ae/65/b0ae65fff8a87105512843e62a0b043c.jpg",
    ]
  },
  {
    id: 11,
    content: `Built in the 1960s by Vann Molyvann, the Olympic Stadium is an architectural marvel and a hub for sports and events. 
    Locals often come here in the evening to exercise, play football, or enjoy the sunset over the city.`,
    tip: "Sunset is the perfect time to visit — the atmosphere is lively and the view is stunning.",
    gallery: [
      "https://i.pinimg.com/1200x/bb/02/7a/bb027a19b8d61ebea58249fc5f08b277.jpg",
      "https://i.pinimg.com/1200x/b5/17/25/b517253ecebc83d442cc5df877a6ed3f.jpg",
       "https://i.pinimg.com/736x/45/e9/65/45e96501536b8505d6e80bfd029f4398.jpg",
    ]
  },
  {
    id: 12,
    content: `Located along the Tonle Sap River, this recreational area offers pools, bars, and relaxation spaces. 
    It’s perfect for cooling off from the tropical heat while enjoying river views and modern leisure facilities.`,
    tip: "Bring swimwear and visit in the late afternoon for a relaxing sunset dip.",
    gallery: [
     "https://i.pinimg.com/736x/93/a7/39/93a73973589a8c3dd960be2d82f6c95b.jpg",
      "https://i.pinimg.com/1200x/7e/43/40/7e43409561a11876333bc8f3a3f1a7a7.jpg",
       "https://i.pinimg.com/1200x/24/1f/75/241f756e0fdf9b3d700442de05a40ed2.jpg",
    ]
  }
];


// Province
export const provinceCards = [
  {
    id: 1,
    name: "Siem Reap",
    names: "សៀមរាប",
    locationIcon: "📍",
    category: "Historical",
    description: "Home to Angkor Wat and other ancient temples surrounded by lush forests.",
    imageUrl: "https://media-cdn.tripadvisor.com/media/attractions-splice-spp-674x446/13/2b/cc/9f.jpg",
    linkUrl: "/provinces/siem-reap",
  },
  {
    id: 2,
    name: "Kampot",
    names: "កំពត",
    locationIcon: "📍",
    category: "Nature & River",
    description: "Peaceful riverside town famous for pepper farms and Bokor Mountain views.",
    imageUrl: "https://i.pinimg.com/1200x/15/67/3c/15673cb031cb9037466273a728a09014.jpg",
    linkUrl: "/provinces/kampot",
  },
  {
    id: 3,
    name: "Kep",
    names: "កែប",
    locationIcon: "📍",
    category: "Beach",
    description: "Coastal retreat known for crab market, beaches, and Rabbit Island.",
    imageUrl: "https://i.pinimg.com/736x/de/93/7a/de937a41a35b9551653dc02a4c088043.jpg",
    linkUrl: "/provinces/kep",
  },
  {
    id: 4,
    name: "Koh Kong",
    names: "កោះកុង",
    locationIcon: "📍",
    category: "Coastal & Nature",
    description: "Coastal region with pristine beaches, mangroves, and eco-adventures.",
    imageUrl: "https://i.pinimg.com/1200x/c8/68/0c/c8680cd769ab9877eff9a7bf7f6a7449.jpg",
    linkUrl: "/provinces/koh-kong",
  },
  {
    id: 5,
    name: "Sihanoukville",
    names: "ព្រះសីហនុ",
    locationIcon: "📍",
    category: "Beach",
    description: "Cambodia’s premier beach city with white sands and crystal-clear waters.",
    imageUrl: "https://i.pinimg.com/1200x/ad/2c/ee/ad2cee9a632fa9a218ac0aaa08b9d54a.jpg",
    linkUrl: "/provinces/sihanoukville",
  },
  {
    id: 6,
    name: "Kratie",
    names: "ក្រចេះ",
    locationIcon: "📍",
    category: "River & Wildlife",
    description: "Riverside town famous for rare Irrawaddy dolphins and French-era buildings.",
    imageUrl: "https://i.pinimg.com/1200x/43/47/29/434729a4a6e4ee847a14da461617e50d.jpg",
    linkUrl: "/provinces/kratie",
  },
  {
    id: 7,
    name: "Mondulkiri",
    names: "មណ្ឌលគិរី",
    locationIcon: "📍",
    category: "Mountain",
    description: "Cool mountain region known for elephants, waterfalls, and coffee farms.",
    imageUrl: "https://i.pinimg.com/736x/1e/e6/92/1ee692eb7bb76c23006b8afe257112d0.jpg",
    linkUrl: "/provinces/mondulkiri",
  },
  {
    id: 8,
    name: "Ratanakiri",
    names: "រតនគិរី",
    locationIcon: "📍",
    category: "Mountain",
    description: "Remote province with lakes, waterfalls, and indigenous tribal communities.",
    imageUrl: "https://i.pinimg.com/1200x/44/c1/de/44c1debe54349933bc49e624c8f66a72.jpg",
    linkUrl: "/provinces/ratanakiri",
  },
  {
    id: 9,
    name: "Battambang",
    names: "បាត់តំបង",
    locationIcon: "📍",
    category: "Cultural",
    description: "Known for colonial buildings, the bamboo train, and scenic countryside views.",
    imageUrl: "https://i.pinimg.com/1200x/7b/cc/81/7bcc814dc9337c232b1978a1264ef16e.jpg",
    linkUrl: "/provinces/battambang",
  },
  {
    id: 10,
    name: "Banteay Meanchey",
    names: "បន្ទាយមានជ័យ",
    locationIcon: "📍",
    category: "Historical",
    description: "Northwest province home to Banteay Chhmar Temple and rice fields.",
    imageUrl: "https://i.pinimg.com/1200x/8a/ac/71/8aac7117935667daa4dc8df8c7f6725d.jpg",
    linkUrl: "/provinces/banteay-meanchey",
  },
  {
    id: 11,
    name: "Kandal",
    names: "កណ្តាល",
    locationIcon: "📍",
    category: "Cultural",
    description: "Province surrounding Phnom Penh, known for silk weaving and traditional crafts.",
    imageUrl: "https://i.pinimg.com/1200x/62/9f/06/629f063a89e87f3e434977e5cce550d3.jpg",
    linkUrl: "/provinces/kandal",
  },
  {
    id: 12,
    name: "Takeo",
    names: "តាកែវ",
    locationIcon: "📍",
    category: "Historical",
    description: "The cradle of Cambodian civilization with ancient pre-Angkorian temples.",
    imageUrl: "https://i.pinimg.com/1200x/d5/11/91/d51191ecd18ace67b656ea1c60509424.jpg",
    linkUrl: "/provinces/takeo",
  },
  {
    id: 13,
    name: "Kampong Cham",
    names: "កំពង់ចាម",
    locationIcon: "📍",
    category: "Cultural",
    description: "Riverside city with French colonial charm and the iconic bamboo bridge.",
    imageUrl: "https://i.pinimg.com/736x/c0/71/f4/c071f4c5071ec13004c7a37856dae448.jpg",
    linkUrl: "/provinces/kampong-cham",
  },
  {
    id: 14,
    name: "Kampong Chhnang",
    names: "កំពង់ឆ្នាំង",
    locationIcon: "📍",
    category: "Cultural",
    description: "Known for pottery villages and floating communities on the Tonle Sap River.",
    imageUrl: "https://i.pinimg.com/1200x/4c/3f/d3/4c3fd3a5216bdf231e20ad6106ca527b.jpg",
    linkUrl: "/provinces/kampong-chhnang",
  },
  {
    id: 15,
    name: "Kampong Speu",
    names: "កំពង់ស្ពឺ",
    locationIcon: "📍",
    category: "Nature",
    description: "Rich in natural beauty with waterfalls, mountains, and Kirirom National Park.",
    imageUrl: "https://i.pinimg.com/1200x/e0/f9/f7/e0f9f7693a84ce6c03f134edc1abb0e7.jpg",
    linkUrl: "/provinces/kampong-speu",
  },
  {
    id: 16,
    name: "Kampong Thom",
    names: "កំពង់ធំ",
    locationIcon: "📍",
    category: "Historical",
    description: "Home to Sambor Prei Kuk, an ancient pre-Angkorian temple complex.",
    imageUrl: "https://i.pinimg.com/1200x/60/24/8a/60248a6b1ae0e6d8fec9839b15f0e726.jpg",
    linkUrl: "/provinces/kampong-thom",
  },
  {
    id: 17,
    name: "Preah Vihear",
    names: "ព្រះវិហារ",
    locationIcon: "📍",
    category: "Historical",
    description: "Home to the cliff-top Preah Vihear Temple with spectacular views.",
    imageUrl: "https://i.pinimg.com/1200x/18/2a/7a/182a7aa82e507fb5e06953ddabde210b.jpg",
    linkUrl: "/provinces/preah-vihear",
  },
  {
    id: 18,
    name: "Prey Veng",
    names: "ព្រៃវែង",
    locationIcon: "📍",
    category: "Agriculture",
    description: "Agricultural province with traditional pagodas and peaceful countryside.",
    imageUrl: "https://i.pinimg.com/736x/cc/be/fc/ccbefc72af2e1835755f7147c71d905d.jpg",
    linkUrl: "/provinces/prey-veng",
  },
  {
    id: 19,
    name: "Pursat",
    names: "ពោតិ៍សាត់",
    locationIcon: "📍",
    category: "Mountain & Nature",
    description: "Known for marble carvings and scenic areas near the Cardamom Mountains.",
    imageUrl: "https://i.pinimg.com/1200x/53/69/1c/53691c5ffdbff09d1fd2e3b7f67aff19.jpg",
    linkUrl: "/provinces/pursat",
  },
  {
    id: 20,
    name: "Stung Treng",
    names: "ស្ទឹងត្រេង",
    locationIcon: "📍",
    category: "River & Eco-Tourism",
    description: "Peaceful border province with rivers, wetlands, and eco-tourism.",
    imageUrl: "https://i.pinimg.com/1200x/1b/01/fe/1b01fe398cd873b6ba2cc8e66a290660.jpg",
    linkUrl: "/provinces/stung-treng",
  },
  {
    id: 21,
    name: "Svay Rieng",
    names: "ស្វាយរៀង",
    locationIcon: "📍",
    category: "Agriculture",
    description: "Border province with Vietnam, rich in agriculture and culture.",
    imageUrl: "https://i.pinimg.com/1200x/fd/78/80/fd78805f8ce862135726b6fc7f51aafc.jpg",
    linkUrl: "/provinces/svay-rieng",
  },
  {
    id: 22,
    name: "Oddar Meanchey",
    names: "ឧត្តរមានជ័យ",
    locationIcon: "📍",
    category: "Historical & Nature",
    description: "Northern province featuring ancient temples and forest reserves.",
    imageUrl: "https://i.pinimg.com/1200x/3a/a0/e2/3aa0e28d4ce67028fe5bd4e51741fb5c.jpg",
    linkUrl: "/provinces/oddar-meanchey",
  },
  {
    id: 23,
    name: "Pailin",
    names: "ប៉ៃលិន",
    locationIcon: "📍",
    category: "Mountain & Mining",
    description: "Small province famous for gem mining and mountain landscapes.",
    imageUrl: "https://i.pinimg.com/1200x/77/98/12/779812b3a8337a7c1756465aa0e42a6e.jpg",
    linkUrl: "/provinces/pailin",
  },
  {
    id: 24,
    name: "Tboung Khmum",
    names: "ត្បូងឃ្មុំ",
    locationIcon: "📍",
    category: "Agriculture",
    description: "New agricultural province known for rubber plantations and rural charm.",
    imageUrl: "https://i.pinimg.com/736x/ce/56/82/ce56824cc7254f491f9df171fbe13902.jpg",
    linkUrl: "/provinces/tboung-khmum",
  },
];

// siemReap explor
export const provinceSiemReap = [
  {
    id: 1,
    name: "Angkor Wat",
    imageUrl: "https://i.pinimg.com/1200x/f2/dd/0b/f2dd0b92b409a302718cf4c39ca0aaeb.jpg",
    description: "The largest religious monument in the world, this 12th-century temple complex is a masterpiece of Khmer architecture and Cambodia's most iconic landmark.",
    linkUrl: "/attractions/angkor-wat",
    category: "Temple",
    content: "Angkor Wat, located in Siem Reap, is Cambodia's largest and most famous temple complex. Built in the 12th century by King Suryavarman II, it combines classical Khmer architecture with spiritual symbolism.",
    tip: "Visit early in the morning to see the sunrise over the temple and avoid the crowds.",
    gallery: [
      "https://i.pinimg.com/1200x/21/d0/03/21d003e105f08dccd240e562d3994988.jpg",
      "https://i.pinimg.com/1200x/58/ee/05/58ee0518639b996b8e143d1d254241a3.jpg",
      "https://i.pinimg.com/1200x/a9/f9/94/a9f994a501a9646121a2d661bc7f8fa5.jpg",

      "https://i.pinimg.com/736x/a3/1e/c8/a31ec8d4e5ac4d10e71c7ccc2645f167.jpg",
      "https://i.pinimg.com/1200x/88/c6/9b/88c69b5a9cd258a0865ba01df5d38b54.jpg",
      "https://i.pinimg.com/736x/00/3c/6b/003c6b27faa83444c00b0275f8209987.jpg",
    ]
  },
  {
    id: 2,
    name: "Bayon Temple",
    imageUrl: "https://i.pinimg.com/1200x/7d/d8/25/7dd8257a7b1e22c1419fc2efa4af76e8.jpg",
    description: "Famous for its massive stone faces, this temple at the center of Angkor Thom features 216 serene faces carved into 54 towers.",
    linkUrl: "/attractions/bayon-temple",
    category: "Temple",
    content: "Bayon Temple is a richly decorated Khmer temple at the center of Angkor Thom. Its 54 towers are adorned with 216 giant smiling faces, making it one of the most iconic temples in Cambodia.",
    tip: "Take your time exploring the intricate bas-reliefs depicting Khmer history.",
    gallery: [
      "https://i.pinimg.com/1200x/9d/a0/e2/9da0e2735c0d43aaf7739c2549c4d098.jpg",
      "https://i.pinimg.com/1200x/0b/83/df/0b83df792e92400b34f8752e44f59742.jpg",
      "https://i.pinimg.com/1200x/6d/6c/7d/6d6c7d4fe54b17747cfecba373392a9a.jpg",

      "https://i.pinimg.com/1200x/b1/2c/0d/b12c0d71287fe757a76a388b6d23ceb2.jpg",
      "https://i.pinimg.com/736x/e7/b7/5b/e7b75b6782b5764225be09cb786b92c6.jpg",
      "https://i.pinimg.com/736x/12/6e/1a/126e1a586724d5372f58f5c023ec44b4.jpg",
    ]
  },
  {
    id: 3,
    name: "Ta Prohm",
    imageUrl: "https://i.pinimg.com/736x/59/c4/1b/59c41b77b3f1f85df05aa6863dbd7f68.jpg",
    description: "Known as the 'Tomb Raider Temple', this atmospheric ruin is famous for the giant trees growing through its ancient stones.",
    linkUrl: "/attractions/ta-prohm",
    category: "Temple",
    content: "Ta Prohm is a jungle temple best known for the massive trees and roots growing over the ruins. Its unique atmosphere was featured in the 'Tomb Raider' movie.",
    tip: "Bring good walking shoes and explore both the main temple and surrounding ruins.",
    gallery: [
      "https://i.pinimg.com/736x/33/23/40/332340d94709ff64bda63266ef10514b.jpg",
      "https://i.pinimg.com/736x/8b/6e/98/8b6e98ffd20f499be89f421876234266.jpg",
      "https://i.pinimg.com/1200x/67/f9/1a/67f91a85b771b1c903fb95a5a5254a00.jpg"
    ]
  },
  {
    id: 4,
    name: "Angkor National Museum",
    imageUrl: "https://i.pinimg.com/1200x/82/42/5b/82425b467e423df3651de82a6230fa05.jpg",
    description: "A state-of-the-art museum showcasing the history and culture of the Khmer civilization with impressive collections of artifacts and sculptures.",
    linkUrl: "/attractions/angkor-museum",
    category: "Museum",
    content: "Angkor National Museum houses a rich collection of Khmer artifacts, sculptures, and educational displays to help visitors understand Cambodia’s history and culture.",
    tip: "Audio guides are available and highly recommended for full context.",
    gallery: [
      "https://i.pinimg.com/736x/78/95/79/78957912f8e056737e6a4ed52a83e0af.jpg",
      "https://i.pinimg.com/736x/8e/97/ed/8e97ed493aa36d9026694953b19b0066.jpg",
      "https://i.pinimg.com/736x/30/61/65/3061657e634bda457287fee0bf6bbda5.jpg"
    ]
  },
  {
    id: 5,
    name: "Tonle Sap Lake",
    imageUrl: "https://i.pinimg.com/1200x/ab/b4/ae/abb4aece7138c4fd39928001d903203e.jpg",
    description: "Southeast Asia's largest freshwater lake, home to floating villages and diverse wildlife. Experience authentic local life on the water.",
    linkUrl: "/attractions/tonle-sap",
    category: "Nature",
    content: "Tonle Sap Lake is Southeast Asia’s largest freshwater lake. Explore floating villages, watch stilt houses, and see local life unfold on the water.",
    tip: "Take a boat tour in the morning to see fishing activities and wildlife.",
    gallery: [
      "https://i.pinimg.com/736x/14/a1/dc/14a1dcb045dc16ed1a8706f28c330872.jpg",
      "https://i.pinimg.com/736x/db/ba/c9/dbbac96d4c34bd3acac2bbb91f604de4.jpg",
      "https://i.pinimg.com/736x/83/6f/35/836f352d68e26c625eb8cc1b453f8e3d.jpg"
    ]
  },
  {
    id: 6,
    name: "Pub Street",
    imageUrl: "https://i.pinimg.com/1200x/7b/4e/61/7b4e61795ddaa021566996c64d121331.jpg",
    description: "The heart of Siem Reap's nightlife, featuring restaurants, bars, street food, and vibrant entertainment in a pedestrian-friendly area.",
    linkUrl: "/attractions/pub-street",
    category: "Entertainment",
    content: "Pub Street is the nightlife hub of Siem Reap with vibrant restaurants, bars, and street food stalls. It’s the perfect place to experience local culture after sunset.",
    tip: "Visit in the evening for lively entertainment and try local dishes at street stalls.",
    gallery: [
      "https://i.pinimg.com/1200x/1c/7a/0f/1c7a0fa7dcb456b1ebe4399d2832d055.jpg",
      "https://i.pinimg.com/1200x/33/b8/e3/33b8e30e9c3709940144ed0f50d594ff.jpg",
      "https://i.pinimg.com/1200x/6f/d0/f8/6fd0f87a1d9f210e07c646f49a874fd8.jpg"
    ]
  },
  {
    id: 7,
    name: "Banteay Srei",
    imageUrl: "https://i.pinimg.com/1200x/a7/de/09/a7de09dce2059a76cf08dd4c599516c1.jpg",
    description: "The 'Citadel of Women' is renowned for its intricate pink sandstone carvings, considered the finest examples of classical Khmer art.",
    linkUrl: "/attractions/banteay-srei",
    category: "Temple",
    content: "Banteay Srei is a 10th-century temple famous for its pink sandstone and detailed carvings. Its intricate decorations make it a jewel of classical Khmer art.",
    tip: "Hire a guide to fully appreciate the carvings and history.",
    gallery: [
      "https://i.pinimg.com/736x/7c/3f/24/7c3f24351a3c720753287c43a5325bb7.jpg",
      "https://i.pinimg.com/1200x/49/1c/a7/491ca799dfada087bcc5791461db0f12.jpg",
      "https://i.pinimg.com/736x/6c/7f/93/6c7f9370c6c866a301adf9bf66da7442.jpg"
    ]
  },
  {
    id: 8,
    name: "Old Market (Phsar Chas)",
    imageUrl: "https://i.pinimg.com/1200x/7e/a8/4f/7ea84f160b81b07ff5578312f4b23b6e.jpg",
    description: "A bustling traditional market offering local crafts, silk products, spices, and authentic Cambodian street food.",
    linkUrl: "/attractions/old-market",
    category: "Shopping",
    content: "Old Market is a bustling market in the center of Siem Reap, perfect for buying souvenirs, local crafts, and sampling street food.",
    tip: "Bargaining is common; start with half the price and negotiate.",
    gallery: [
      "https://i.pinimg.com/1200x/49/e2/be/49e2be7424e9bbdb04aac76ffb32f7d3.jpg",
      "https://i.pinimg.com/736x/2a/e6/97/2ae69757d143955271601b0f1d998c38.jpg",
      "https://i.pinimg.com/1200x/3d/3b/ea/3d3bead930fac3d8772c600c7e75bc44.jpg"
    ]
  },
  {
    id: 9,
    name: "Phnom Bakheng",
    imageUrl: "https://i.pinimg.com/1200x/09/30/56/093056bdb8ad77adf6648b27e97f13f3.jpg",
    description: "A hilltop temple offering spectacular sunset views over Angkor Wat and the surrounding jungle landscape.",
    linkUrl: "/attractions/phnom-bakheng",
    category: "Temple",
    content: "Phnom Bakheng is a hilltop temple known for its panoramic sunset views. It’s a must-visit for photographers and romantics.",
    tip: "Arrive early to secure a good spot for sunset; it can get crowded.",
    gallery: [
      "https://i.pinimg.com/736x/25/c6/c1/25c6c17d3f287fb9f252a476f661b729.jpg",
      "https://i.pinimg.com/1200x/d2/2e/c5/d22ec51eaf0cc4f5d4097266623c0c77.jpg",
      "https://i.pinimg.com/1200x/1f/be/3f/1fbe3f8967bd16bd25df2e1b32586ccf.jpg"
    ]
  },

  // Remaining 7 entries: Cambodian Cultural Village, Preah Khan, Angkor Night Market, Phare Circus, Banteay Kdei, Beng Mealea, Artisans Angkor
  {
    id: 10,
    name: "Cambodian Cultural Village",
    imageUrl: "https://i.pinimg.com/1200x/8a/7d/b0/8a7db0771038e21417ccfa8131ebefcf.jpg",
    description: "An open-air museum showcasing replicas of traditional Cambodian houses, cultural performances, and exhibits from different regions.",
    linkUrl: "/attractions/cultural-village",
    category: "Culture",
    content: "Cambodian Cultural Village offers visitors a chance to see miniature replicas of Cambodian villages, traditional houses, and cultural shows.",
    tip: "Plan to spend 2-3 hours exploring performances and exhibits.",
    gallery: [
      "https://i.pinimg.com/1200x/da/64/cd/da64cdd54d229a3c749431cbad1dcb72.jpg",
      "https://i.pinimg.com/1200x/ff/fd/cb/fffdcbda4da1a445c0bbb67f28033e3f.jpg",
      "https://i.pinimg.com/1200x/f5/24/1d/f5241d420765d1162ec7480af3bb1101.jpg"
    ]
  },
  {
    id: 11,
    name: "Preah Khan",
    imageUrl: "https://i.pinimg.com/1200x/75/0e/db/750edb5eb07dccc4c1ce35dab8b926f4.jpg",
    description: "A sprawling temple complex with atmospheric corridors, intricate carvings, and a peaceful atmosphere away from the crowds.",
    linkUrl: "/attractions/preah-khan",
    category: "Temple",
    content: "Preah Khan is a large temple complex with labyrinthine corridors and carvings. It provides a serene experience without the large tourist crowds.",
    tip: "Bring water and explore slowly; some areas are uneven.",
    gallery: [
      "https://i.pinimg.com/1200x/97/40/9d/97409d68591f1a273fe82c9c96184596.jpg",
      "https://i.pinimg.com/736x/fc/22/1d/fc221db00a113ac4d40595bc824f9b21.jpg",
      "https://i.pinimg.com/736x/4a/01/3a/4a013a69634ac6cd9bb438e9d148f3d3.jpg"
    ]
  },
  {
    id: 12,
    name: "Angkor Night Market",
    imageUrl: "https://i.pinimg.com/1200x/65/a6/cd/65a6cdb15fdf7aee8354e46ee5bc2520.jpg",
    description: "A vibrant evening market featuring handicrafts, souvenirs, clothing, and local food stalls in a lively atmosphere.",
    linkUrl: "/attractions/night-market",
    category: "Shopping",
    content: "Angkor Night Market comes alive in the evening with handicrafts, souvenirs, and street food. It’s a perfect place to shop and experience local culture.",
    tip: "Go after sunset to enjoy the lights, music, and street performances.",
    gallery: [
      "https://i.pinimg.com/1200x/99/79/83/99798388cbdd4656ea4c6ced36677367.jpg",
      "https://i.pinimg.com/736x/81/55/96/8155963678ded9d7871a42dbce37d9ec.jpg",
      "https://i.pinimg.com/736x/4a/3c/5c/4a3c5ce2bbc730f7753cafcdf2a94bee.jpg"
    ]
  },
    {
    id: 13,
    name: "Phare Circus",
    imageUrl: "https://i.pinimg.com/1200x/6b/43/f6/6b43f6a7b03cc55d35a87f4971cc3731.jpg",
    description: "A spectacular circus performance combining acrobatics, theater, and music to tell uniquely Cambodian stories.",
    linkUrl: "/attractions/phare-circus",
    category: "Entertainment",
    content: "Phare Circus is an award-winning circus in Siem Reap combining acrobatics, music, and storytelling that reflects Cambodian culture and history.",
    tip: "Arrive early to get the best seats and enjoy pre-show street performances.",
    gallery: [
      "https://i.pinimg.com/736x/23/68/2c/23682c0a52263cf8877719f5168c2cfd.jpg",
      "https://i.pinimg.com/1200x/1c/e5/f4/1ce5f4aa8f0e18f597f2e0918042c459.jpg",
      "https://i.pinimg.com/1200x/e9/78/40/e97840162af6084376783d23ce40e635.jpg"
    ]
  },
  {
    id: 14,
    name: "Banteay Kdei",
    imageUrl: "https://i.pinimg.com/1200x/06/eb/f9/06ebf93637722e0142b915f298a44820.jpg",
    description: "A peaceful Buddhist monastery temple with beautiful carvings and a tranquil atmosphere, less crowded than major temples.",
    linkUrl: "/attractions/banteay-kdei",
    category: "Temple",
    content: "Banteay Kdei is a serene Buddhist monastery temple with beautiful carvings. It is less visited, allowing for a peaceful exploration of its ancient halls.",
    tip: "Go early in the morning for soft light and fewer tourists.",
    gallery: [
      "https://i.pinimg.com/1200x/06/eb/f9/06ebf93637722e0142b915f298a44820.jpg",
      "https://i.pinimg.com/1200x/5f/b1/ce/5fb1cee799b1e41db1a29f4f852002fa.jpg",
      "https://i.pinimg.com/1200x/d1/19/81/d119811e71528b545800a21aa2f17f23.jpg"
    ]
  },
  {
    id: 15,
    name: "Beng Mealea",
    imageUrl: "https://i.pinimg.com/1200x/01/c4/28/01c428186c602372b4b9650b1167f84e.jpg",
    description: "A mysterious jungle temple largely unrestored, offering an adventurous Indiana Jones-style experience with trees and vines engulfing ancient structures.",
    linkUrl: "/attractions/beng-mealea",
    category: "Temple",
    content: "Beng Mealea is an adventurous temple mostly overgrown by jungle. Its unrestored state gives visitors a sense of discovery and exploration.",
    tip: "Wear good shoes, and explore carefully; some paths are uneven and slippery.",
    gallery: [
      "https://i.pinimg.com/736x/1b/ba/8a/1bba8a51a886c7a3894818ca518e584c.jpg",
      "https://i.pinimg.com/1200x/ad/21/5f/ad215f8bdce47d2dfa0d06552a8551ec.jpg",
      "https://i.pinimg.com/1200x/8d/7b/e5/8d7be55bc9fbcfb8365c9b78a0fc0c15.jpg"
    ]
  },
  {
    id: 16,
    name: "Artisans Angkor",
    imageUrl: "https://i.pinimg.com/1200x/95/6b/33/956b3309eb98764ea7a1238060fc9f1a.jpg",
    description: "A social enterprise workshop where you can watch skilled artisans create traditional Cambodian crafts including silk weaving, stone carving, and lacquerware.",
    linkUrl: "/attractions/artisans-angkor",
    category: "Culture",
    content: "Artisans Angkor showcases Cambodia's traditional crafts with live demonstrations of silk weaving, stone carving, and other local arts.",
    tip: "Bring a camera; you can photograph artisans at work and buy souvenirs directly from the workshop.",
    gallery: [
      "https://i.pinimg.com/736x/39/15/50/391550df926fcb3dd46bd5a3ead913da.jpg",
      "https://i.pinimg.com/736x/05/0c/24/050c24775bb7390fdadf919437952c28.jpg",
      "https://i.pinimg.com/1200x/2d/52/51/2d5251326bea376c5dd546ab79402d27.jpg"
    ]
  },
  
];
// KomPot
export const provinceKomPot=[
  {
  id: 1,
  name: "Tomnop Tek Krolar",
  imageUrl: "https://i.pinimg.com/1200x/cd/49/5b/cd495be105c6224702f5892bc4b64fe2.jpg",
  description: "A peaceful hidden lake surrounded by mountains and lush greenery. Perfect for relaxing, kayaking, and enjoying Kampot’s countryside.",
  linkUrl: "https://www.tripadvisor.com/Attraction_Review-g608455-d26291222-Reviews-Secret_Lake_Kampot-Kampot_Kampot_Province.html",
  category: "Nature & Adventure",
  content: "Secret Lake, locally known as Tomnop Tek Krolar, is a tranquil man-made lake located just outside Kampot town. Surrounded by rolling hills, palm trees, and farms, it’s a favorite spot for picnics, kayaking, and soaking in the countryside atmosphere.",
  tip: "Visit during late afternoon for the best lighting and peaceful views.",
  gallery: [
    "https://i.pinimg.com/736x/3f/49/26/3f4926da0525c7baa2d618025c7e2a48.jpg",
    "https://i.pinimg.com/736x/e4/fe/bf/e4febf1c25e3d11ddec5b2fa77b65f6d.jpg",
    "https://i.pinimg.com/736x/06/86/f4/0686f48185bfaae573c29b90ed498d7d.jpg"
  ]
},
  {
    "id": 2,
    "name": "La Plantation",
    "imageUrl": "https://i.pinimg.com/1200x/17/37/fa/1737fafb1f231c9be57afdc4d41e4c6b.jpg",
    "description": "A renowned pepper farm offering tours to learn about Kampot's famous pepper cultivation.",
    "linkUrl": "https://www.la-plantation.com",
    "category": "Agriculture",
    "content": "Explore the history and cultivation process of Kampot pepper, one of the world's finest.",
    "tip": "Wear comfortable shoes for the farm tour and bring insect repellent.",
    "gallery": [
      "https://i.pinimg.com/1200x/ff/55/3c/ff553c58d37eadb98c609b47c449cfae.jpg",
       "https://i.pinimg.com/1200x/24/d6/66/24d666c016155f54adaeb1e64a8eea7d.jpg",
       "https://i.pinimg.com/1200x/48/87/64/488764e7325ac5d2d96fdf1af5a05433.jpg",
      
      ]
  },
  {
    "id": 3,
    "name": "Bokor National Park",
    "imageUrl": "https://i.pinimg.com/1200x/b2/3c/19/b23c1988e47069c0e5bce25a8850fecd.jpg",
    "description": "A vast park known for its cool climate, waterfalls, and the historic Bokor Hill Station.",
    "linkUrl": "https://www.nationalparks.gov.kh/en/bokor",
    "category": "Nature & History",
    "content": "Hike through misty forests, visit the old French hill station, and enjoy panoramic views.",
    "tip": "Bring a jacket as temperatures can drop unexpectedly.",
    "gallery": [
      "https://i.pinimg.com/1200x/b6/a7/69/b6a7693e28e7a801ae6d9147fda15296.jpg",
       "https://i.pinimg.com/1200x/fd/16/47/fd1647d14ccee8ccae6fb4f09acce911.jpg",
       "https://i.pinimg.com/1200x/89/aa/13/89aa13cfe7df218acd359ae08805c660.jpg",
       ]
  },
  {
    "id": 4,
    "name": "Veal Pouch Waterfall",
    "imageUrl": "https://i.pinimg.com/1200x/9d/5b/33/9d5b337d6eae65153437ac4e938c823f.jpg",
    "description": "A serene waterfall located in the countryside, perfect for a refreshing swim.",
    "linkUrl": "https://www.tripadvisor.com/Attraction_Review-g608455-d456789-Reviews-Veal_Pouch_Waterfall-Kampot_Kampot_Province.html",
    "category": "Nature",
    "content": "Enjoy a peaceful day surrounded by nature, ideal for picnics and relaxation.",
    "tip": "Visit during the dry season for the best experience.",
    "gallery": [
      "https://i.pinimg.com/1200x/b7/dc/af/b7dcaf3c30ab01cfae52e960e9753269.jpg",
       "https://i.pinimg.com/1200x/9c/68/c1/9c68c17ac64c550f10337b60c568ce80.jpg",
       "https://i.pinimg.com/1200x/c3/f1/c1/c3f1c1a9fe3bdecec83f4b3935641fd4.jpg"
      ]
  },
  {
  "id": 5,
  "name": "Arcadia Water Park Kampot",
  "imageUrl": "https://i.pinimg.com/1200x/8c/08/2a/8c082aef0ca34bb742a1257cbe667e8c.jpg",
  "description": "A fun riverside water park with rope swings, slides, and floating platforms.",
  "linkUrl": "https://www.tripadvisor.com/Attraction_Review-g608455-d11994542-Reviews-Arcadia_Water_Park_Kampot-Kampot_Kampot_Province.html",
  "category": "Adventure & Fun",
  "content": "Located along the Kampot River, this water park is popular among young travelers looking for excitement and relaxation.",
  "tip": "Bring swimwear and waterproof bags for your belongings.",
  "gallery": [
    "https://i.pinimg.com/1200x/23/73/c0/2373c05909c374c73eee8ca179fbc951.jpg",
    "https://i.pinimg.com/1200x/cf/13/0f/cf130f94de19828a27fb13cb7c36eaa9.jpg",
    "https://i.pinimg.com/1200x/84/00/6b/84006be48a7cb3be041966a568616004.jpg",
    "https://i.pinimg.com/1200x/5d/c7/fc/5dc7fc81feb9f388379966cdc30f8de4.jpg",
    "https://i.pinimg.com/736x/e3/1a/b8/e31ab862f4e8dd0d25df4e23d3a671d9.jpg",
    "https://i.pinimg.com/1200x/77/d2/ac/77d2ac33c9e71a9e7f2fbe80c351a3ba.jpg"
  ]
},
  {
    "id": 6,
    "name": "Kampot Salt Fields",
    "imageUrl": "https://i.pinimg.com/1200x/91/4a/b4/914ab49ea7973fc28b58102f857f5d13.jpg",
    "description": "Traditional salt farms where you can observe the salt production process.",
    "linkUrl": "https://www.tripadvisor.com/Attraction_Review-g608455-d456791-Reviews-Kampot_Salt_Fields-Kampot_Kampot_Province.html",
    "category": "Agriculture",
    "content": "Learn about the ancient methods of salt farming and its importance to the local economy.",
    "tip": "Best visited during the dry season for optimal salt production.",
    "gallery": [
      "https://i.pinimg.com/1200x/fb/13/79/fb137982bcdddac7ebad21dc75bfd85b.jpg",
       "https://i.pinimg.com/736x/5a/22/9d/5a229daa7c8fc43c1f2adf92bd94c5dd.jpg",
       "https://i.pinimg.com/736x/0e/56/db/0e56db820ee32af3fd90e56ba5601972.jpg"
      
      ]
  },
  {
    "id": 7,
    "name": "Teuk Chhou Rapids",
    "imageUrl": "https://i.pinimg.com/1200x/13/15/5a/13155a4f615b3012e968589e84d60741.jpg",
    "description": "A popular spot for tubing and picnicking along the river.",
    "linkUrl": "https://www.tripadvisor.com/Attraction_Review-g608455-d456792-Reviews-Teuk_Chhou_Rapids-Kampot_Kampot_Province.html",
    "category": "Adventure & Leisure",
    "content": "Enjoy a fun-filled day with family and friends in a natural setting.",
    "tip": "Check water levels before visiting as they can fluctuate.",
    "gallery": [
      "https://i.pinimg.com/1200x/a9/43/c8/a943c8833fd7d2f1a09c3945d338bab1.jpg",
       "https://i.pinimg.com/1200x/7e/64/32/7e6432ddd8e883c37247bff0579dec23.jpg",
        "https://i.pinimg.com/1200x/fc/8b/d0/fc8bd0483d3b53cdec82c21ca5ada72e.jpg"
      ]
  },
  {
    "id": 8,
    "name": "Kampot River",
    "imageUrl": "https://i.pinimg.com/1200x/32/b5/10/32b5100277271875fbac5efa43a1072a.jpg",
    "description": "A scenic river offering boat tours and sunset views.",
    "linkUrl": "https://www.tripadvisor.com/Attraction_Review-g608455-d456793-Reviews-Kampot_River-Kampot_Kampot_Province.html",
    "category": "Nature & Relaxation",
    "content": "Cruise along the river to witness the stunning landscapes and local life.",
    "tip": "Evening boat rides offer breathtaking sunset views.",
    "gallery": [
      "https://i.pinimg.com/736x/df/e8/1a/dfe81ab63113a143c05bd454ede3f249.jpg",
       "https://i.pinimg.com/736x/e3/06/ce/e306ceac2dc23696b3e27ae6ed95b6a5.jpg",
        "https://i.pinimg.com/736x/52/13/89/521389d9e6ed918029343584df51eed5.jpg",
        "https://i.pinimg.com/736x/59/1c/11/591c11f7c2bf9350660b977292623fda.jpg",
        "https://i.pinimg.com/1200x/d4/ee/26/d4ee26dc1e83d44b9c8da13cce7e03a9.jpg",
        "https://i.pinimg.com/1200x/94/4d/79/944d79eb0626086db9a0026bd7628709.jpg",
      ]
  },
  {
    "id": 9,
    "name": "Phnom Chhngok Cave",
    "imageUrl": "https://i.pinimg.com/1200x/40/fd/cc/40fdcc1cbe7d91990302a23528c1206a.jpg",
    "description": "An ancient limestone cave featuring a unique bell-shaped stalactite.",
    "linkUrl": "https://www.tripadvisor.com/Attraction_Review-g608455-d456794-Reviews-Phnom_Chhngok_Cave-Kampot_Kampot_Province.html",
    "category": "History & Nature",
    "content": "Discover the geological wonders and historical significance of this cave.",
    "tip": "Bring a flashlight to explore the cave's interior.",
    "gallery": [
      "https://i.pinimg.com/736x/e5/d9/40/e5d940424a400f2ff67ea185ad7d7a1c.jpg",
       "https://i.pinimg.com/1200x/2b/80/0b/2b800b2b2e60dda45d93eeb85fd7b915.jpg",
       "https://i.pinimg.com/1200x/e0/90/97/e09097cd13e0bbad40484840a21ed347.jpg"
      
      ]
  },
  {
  "id": 10,
  "name": "Secret Lake (Tomnop Tek Krolar)",
  "imageUrl": "https://i.pinimg.com/736x/ef/f6/5e/eff65e254b466d4b71fb19733900e967.jpg",
  "description": "A man-made lake surrounded by beautiful mountain views and tranquil atmosphere.",
  "linkUrl": "https://www.tripadvisor.com/Attraction_Review-g608455-d456797-Reviews-Secret_Lake-Kampot_Kampot_Province.html",
  "category": "Nature & Relaxation",
  "content": "The lake is ideal for kayaking, photography, or simply relaxing near the water with stunning views of Bokor Mountain.",
  "tip": "Bring a hat and sunscreen, as shade is limited around the lake.",
  "gallery": [
    "https://i.pinimg.com/736x/90/6d/d3/906dd3c127beaabdb86cbc94afb6ae2f.jpg",
    "https://i.pinimg.com/1200x/09/ae/00/09ae00aacc85b80bdacf6b6c163189c2.jpg",
    "https://i.pinimg.com/1200x/9f/68/54/9f6854417d8149c309b93fd0ed075dd3.jpg",
    
  ]
},
  {
    "id": 11,
    "name": "Rabbit Island (Koh Tonsay)",
    "imageUrl": "https://i.pinimg.com/1200x/44/19/ac/4419ac197ad5a8cc5fe4291f25000248.jpg",
    "description": "A tranquil island offering beaches, snorkeling, and seafood.",
    "linkUrl": "https://www.tripadvisor.com/Attraction_Review-g608455-d456796-Reviews-Rabbit_Island_Koh_Tonsay-Kampot_Kampot_Province.html",
    "category": "Island Getaway",
    "content": "Escape to a serene island for relaxation and aquatic adventures.",
    "tip": "Bring essentials as there are limited facilities on the island.",
    "gallery": [
      "https://i.pinimg.com/1200x/93/55/89/9355890ce3c38f2758d24f70abb982bf.jpg",
      "https://i.pinimg.com/1200x/92/b5/50/92b550f7d0d84a82d9a7b56874026a32.jpg",
      "https://i.pinimg.com/736x/41/53/a9/4153a959a8f627f383e08f0de33eaaca.jpg",
      "https://i.pinimg.com/1200x/d3/cc/32/d3cc32ba9b02e401592cb63b87f60da0.jpg",
      "https://i.pinimg.com/736x/9e/f0/ef/9ef0ef2c2738cb25600b8013c9261435.jpg",
      "https://i.pinimg.com/736x/9f/c1/85/9fc1854c050c1fb1ff32ecacaf9ee284.jpg"
      
      ]
  },
 
{
  id: 12,
  name: "Kampot River Sunset Cruise",
  imageUrl: "https://i.pinimg.com/1200x/20/43/2a/20432a7d4673fdd26f3d4e050080fb22.jpg",
  description: "Enjoy a relaxing boat ride along the Kampot River, watching the stunning sunset reflect off the calm waters.",
  linkUrl: "https://www.tripadvisor.com/Attraction_Review-g608455-d12049141-Reviews-Kampot_River_Cruise-Kampot_Kampot_Province.html",
  category: "Leisure & Relaxation",
  content: "A river cruise in Kampot is one of the most popular evening activities. Visitors can enjoy cool breezes, local drinks, and the breathtaking view of the sun setting behind Bokor Mountain.",
  tip: "Book a sunset tour around 5 PM for the best golden-hour experience.",
  gallery: [
    "https://i.pinimg.com/1200x/84/cd/bf/84cdbfcf2881885707e5b150b13c2a9c.jpg",
    "https://i.pinimg.com/1200x/47/1c/26/471c261fe1d2e0cf466c3be600b6a06d.jpg",
    "https://i.pinimg.com/1200x/f3/81/9c/f3819c2b2dd8e8baae95329ca57f1712.jpg"
  ]
}
];

// Kep province
export const provincekep = [
  {
    id: 1,
    name: "Kep Beach",
    imageUrl: "https://i.pinimg.com/736x/d0/a2/aa/d0a2aaa704c135d8d99e31eb303ee374.jpg",
    description: "A tranquil crescent-shaped beach near the tip of the Kep peninsula.",
    linkUrl: "https://www.tourismcambodia.com/travelguides/provinces/kep/what-to-see/40_.htm",
    category: "Beach & Relaxation",
    content:
      "Kep Beach is a one-kilometre long crescent of sand near the tip of the peninsula. Dining platforms and seafood vendors line the road behind the beach. It is busy on weekends but often quiet during the week.",
    tip: "Visit early morning or weekday to avoid crowds; bring sun-protection and choose a seaside mat to relax at a vendor platform.",
    gallery: [
      "https://i.pinimg.com/1200x/2c/a5/9c/2ca59c43ecfdce9827a68d282310efa2.jpg",
      "https://i.pinimg.com/736x/f2/2b/58/f22b58a13015860a2e3c1c7c884a2ac8.jpg",
      "https://i.pinimg.com/736x/91/ba/be/91babeb71612415f2d0639bdb2c24dc0.jpg",
      "https://i.pinimg.com/736x/9f/c3/b7/9fc3b7a51f396726b5a767fe1f14c7de.jpg",
      "https://i.pinimg.com/736x/76/6f/ec/766fec55d9975be50bdfd74a9479184b.jpg",
      "https://i.pinimg.com/736x/c2/1d/57/c21d57b250726f660cb3264f26740573.jpg"
    ]
  },
  {
    id: 2,
    name: "Kep Crab Market",
    imageUrl: "https://i.pinimg.com/736x/2c/e1/20/2ce1204193b6282f01c555fa6cfa56d3.jpg",
    description: "The vibrant local seafood market famous for its fresh crabs and seaside grills.",
    linkUrl: "https://wondersofcambodia.com/kep-province-cambodias-coastal-gem/",
    category: "Food & Market",
    content:
      "Kep is best known for its seafood, especially the fresh crabs that are fried with Kampot pepper. The market is a bustling spot where you can pick your seafood and have it cooked on the spot.",
    tip: "Arrive when the fishing boats come in (late afternoon) for the freshest selection; carry cash and negotiate cooking fee separately.",
    gallery: [
      "https://i.pinimg.com/736x/c5/b6/ba/c5b6ba7544c658456906aa00aa3d3a26.jpg",
      "https://i.pinimg.com/1200x/4c/76/74/4c7674618bee682777370d82767cbe4b.jpg",
      "https://i.pinimg.com/1200x/c2/e3/f4/c2e3f43aab985243d523ff486ccf2c17.jpg"
    ]
  },
  {
    id: 3,
    name: "Koh Tonsay (Rabbit Island)",
    imageUrl: "https://i.pinimg.com/736x/90/f3/29/90f3293e0079f8ff44f5ea79cb2a7bcb.jpg",
    description: "A peaceful island off Kep with white sand beaches and shallow clear waters.",
    linkUrl: "https://en.wikipedia.org/wiki/Koh_Tonsay",
    category: "Island Getaway",
    content:
      "Koh Tonsay (Rabbit Island) is located just 4 km south of Kep town, and is known for its white-sand beaches and shallow sea bed — perfect for a relaxed day or overnight stay.",
    tip: "Take the boat early in the morning to avoid the heat and return at sunset; bring mosquito repellent for evenings.",
    gallery: [
      "https://i.pinimg.com/736x/f6/3a/27/f63a276515e0589a40e17b8308a0f40b.jpg",
      "https://i.pinimg.com/1200x/ba/c2/19/bac2195f91ca8f0f21af96e914f020e0.jpg",
      "https://i.pinimg.com/736x/ab/1d/4c/ab1d4cdedc8d0833e626f242128f9b4d.jpg"
    ]
  },
  {
    id: 4,
    name: "Kep National Park",
    imageUrl: "https://i.pinimg.com/736x/8b/f7/93/8bf793ea52fc34e1593f907b24bd64d1.jpg",
    description: "A forested park offering coastal views, hiking trails and fresh air escape from the town.",
    linkUrl: "https://en.wikipedia.org/wiki/Kep_National_Park",
    category: "Nature & Hiking",
    content:
      "Kep National Park was established in 1993 and includes a small mountain range with views over the sea and nearby islands. Visitors can hike, enjoy birdwatching, and relax in nature.",
    tip: "Wear good shoes for the uphill trails; go early morning or late afternoon for cooler temperatures and better light for photos.",
    gallery: [
      "https://khiri.com/wp-content/uploads/2022/02/Kep-national-park-e1645176836899.jpg",
      "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0e/b9/11/4a/photo1jpg.jpg?h=-1&s=1&w=1200",
      "https://i.pinimg.com/736x/21/5b/5e/215b5eb281a0188466325aebdb7ce0f4.jpg"
    ]
  },
  {
    id: 5,
    name: "Phnom Sar Sear",
    imageUrl: "https://i.pinimg.com/1200x/1b/42/10/1b421066354fe0eadac55b5c800ae58f.jpg",
    description: "A nature & cultural resort site about 14 km from Kep with caves and a legend-linked hill.",
    linkUrl: "https://www.tourismcambodia.com/travelguides/provinces/kep/what-to-see.htm",
    category: "Nature & Culture",
    content:
      "Phnom Sar Sear is a natural and cultural resort located about 14 kilometers southwest of Kep city. According to local legend, Prince Sakor Reach used this hill to evade foes. Visitors can explore caves and admire panoramic views from the hilltop.",
    tip: "Explore the caves (bring a torch) and enjoy the hilltop views; visit in the dry season to avoid muddy tracks.",
    gallery: [
      "https://i.pinimg.com/736x/c2/c8/38/c2c8385577500af236353e68e82c7193.jpg",
      "https://i.pinimg.com/1200x/d9/4f/2c/d94f2cd75c07ff0bf281367a807be6b6.jpg",
      "https://i.pinimg.com/736x/e0/35/f0/e035f0869c41cfac54dacec1f976e4b9.jpg"
    ]
  },
  {
    id: 6,
    name: "Pepper Farm Tour",
    imageUrl: "https://i.pinimg.com/1200x/b1/0d/05/b10d0593339268d85b0fd59d79a096f3.jpg",
    description:
      "Visit a local pepper plantation near Kep to see how the world-famous Kampot pepper is grown and processed.",
    linkUrl: "https://angkorfocus.com/kep-tourist-attractions/what-to-see-in-kep.html",
    category: "Agriculture & Experience",
    content:
      "One of the must-do activities is a visit to a pepper plantation near Kep. The pepper used to be the number one pepper in the world and is now being revived with local initiatives. Learn about harvesting, drying, and the different pepper grades.",
    tip: "Ask for a short guided tour of the farm, sample the different pepper grades, and take home some freshly packed peppercorns as souvenir.",
    gallery: [
      "https://i.pinimg.com/1200x/9c/d7/61/9cd761af975ff8889d4f1d8576abfe63.jpg",
      "https://i.pinimg.com/1200x/15/e3/21/15e321113cef94cfc67bd167883220b1.jpg",
      "https://i.pinimg.com/736x/60/74/54/6074545faf9049b1f49c599f5c9ab518.jpg"
    ]
  },
  {
    id: 7,
    name: "Kep Crab Alley",
    imageUrl: "https://i.pinimg.com/736x/d4/a6/9d/d4a69d34065f8e3b753c09f2b8c525f0.jpg",
    description: "A lively street lined with crab restaurants and seafood eateries.",
    linkUrl: "/tourist/kep-crab-alley",
    category: "Food & Nightlife",
    content:
      "Enjoy freshly cooked crabs, grilled seafood, and local dishes while strolling along Crab Alley. This area comes alive in the evening with locals and tourists dining by the sea.",
    tip: "Evening visits are best for a lively atmosphere.",
    gallery: [
      "https://i.pinimg.com/736x/a6/97/d6/a697d6a583872cd4cb6a80648b1a539c.jpg",
      "https://i.pinimg.com/736x/7d/27/2e/7d272e910e86cb68c042f057652ffb8d.jpg",
      "https://i.pinimg.com/736x/11/53/9d/11539d480c4d5298bf58196f6933bbb0.jpg"
    ]
  },
  {
    id: 8,
    name: "Salt-Fields Visit",
    imageUrl: "https://i.pinimg.com/1200x/b8/a9/16/b8a916c5e4cd90d6158580acc64e7934.jpg",
    description: "Observe traditional salt manufacturing along the coastal plain near Kep.",
    linkUrl: "https://www.tourismcambodia.com/travelguides/provinces/kep/what-to-see.htm",
    category: "Agriculture & Local Industry",
    content:
      "Salt manufacturing is well-known in this seaside province. Visitors can see how sea salt is harvested in shallow evaporation ponds. It’s an insightful experience into local livelihoods.",
    tip: "Late afternoon light makes for good photos of salt beds; ask permission before walking through production zones.",
    gallery: [
      "https://i.pinimg.com/736x/8e/0c/e3/8e0ce30cff425e4e07525ded0587186f.jpg",
      "https://i.pinimg.com/1200x/e6/01/72/e60172bb081bd204a2c9a29378098520.jpg",
      "https://i.pinimg.com/1200x/bf/51/60/bf51600795bf25cca7f340400ebe000e.jpg"
    ]
  },
  {
    id: 9,
    name: "Kep Pier",
    imageUrl: "https://i.pinimg.com/736x/de/75/1a/de751a10d8f5c0f5c254e8950dc02732.jpg",
    description: "A peaceful pier for sunset views and boat trips to nearby islands.",
    linkUrl: "/tourist/kep-pier",
    category: "Nature & Adventure",
    content:
      "Kep Pier is perfect for evening walks, taking photos, or boarding boats to nearby Rabbit Island. The calm atmosphere and sea breeze make it a favorite spot among visitors.",
    tip: "Sunset is spectacular; bring a camera and insect repellent.",
    gallery: [
      "https://i.pinimg.com/1200x/88/60/10/886010adc05ffb3d450984df0ae8ec75.jpg",
      "https://i.pinimg.com/1200x/c3/8f/51/c38f5126c1a081fc54382a4ecdc53949.jpg",
      "https://i.pinimg.com/736x/a5/95/bb/a595bb68c4c47f6f1bbbc098bc287851.jpg"
    ]
  },
 {
    id: 10,
    name: "Vine Retreat",
    imageUrl: "https://i.pinimg.com/736x/15/9c/b3/159cb3a12b6a725edd9c2d869ea05d8a.jpg",
    description: "An eco-lodge surrounded by organic farms and mountain scenery.",
    linkUrl: "https://www.tripadvisor.com/Hotel_Review-g608456-d1419956-Reviews-The_Vine_Retreat-Kep.html",
    category: "Eco & Wellness",
    content: "The Vine Retreat promotes sustainable living with organic food, yoga sessions, and peaceful natural surroundings — ideal for eco-conscious travelers.",
    tip: "Perfect for wellness retreats or countryside stays.",
    gallery: [
      "https://i.pinimg.com/1200x/4b/19/73/4b1973751836c8f838e94de57769f065.jpg",
      "https://i.pinimg.com/736x/ad/08/98/ad089809256e266716d4e05857462e13.jpg",
      "https://i.pinimg.com/736x/ce/ab/5b/ceab5bc0e312ce70d0f2b934170e6fca.jpg"
    ]
  }
];


// KohKong
// 1
import koh1 from '../assets/images/Kohkong_1.jpg'
import koh2 from '../assets/images/Kohkong_1_1.jpg'
import koh3 from '../assets/images/Kohkong_1_2.jpg'
import koh4 from '../assets/images/Kohkong_1_3.jpg'
// 2
import koh5 from '../assets/images/KohKong_2.jpg'
import koh6 from '../assets/images/koh_2_1.jpg'
import koh7 from '../assets/images/koh_2_2.jpg'
import koh8 from '../assets/images/koh_2_3.jpg'

// 3
import koh_1 from '../assets/images/koh-3.jpg'
import koh_2 from '../assets/images/koh-3_1.jpg'
import koh_3 from '../assets/images/koh_3_2.jpg'
import koh_4 from '../assets/images/koh_3_3.jpg'


// 4
import koh_5 from '../assets/images/koh_4.webp'
import koh_6 from '../assets/images/koh_4_1.jpg'
import koh_7 from '../assets/images/koh_4_2.jpg'
import koh_8 from '../assets/images/koh_4_3.jpg'


// 5
import kohkong1 from '../assets/images/koh_5.jpg'
import kohkong2 from '../assets/images/koh-5_1.jpg'
import kohkong3 from '../assets/images/koh_5_2.jpg'
import kohkong4 from '../assets/images/koh_5_3.jpg'

// 6
import kohkong5 from '../assets/images/koh_6.jpg'
import kohkong6 from '../assets/images/koh_6_1.webp'
import kohkong7 from '../assets/images/koh_6_2.jpg'
import kohkong8 from '../assets/images/koh_6_3.webp'


// 7
import kohkong9 from '../assets/images/koh_7.png'
import kohkong10 from '../assets/images/koh_7_1.jpg'
import kohkong11 from '../assets/images/koh_7_2.jpg'
import kohkong12 from '../assets/images/koh_7_3.jpg'

// 8
import kohkong13 from '../assets/images/koh_8.jpg'
import kohkong14 from '../assets/images/koh_8_1.jpeg'
import kohkong15 from '../assets/images/koh_8_2.jpg'
import kohkong16 from '../assets/images/koh_8_3.jpg'
// 7
import k1 from '../assets/images/koh_9.jpg'
import k2 from '../assets/images/koh_9_1.jpg'
import k3 from '../assets/images/koh_9_2.jpg'
import k4 from '../assets/images/koh_9_3.jpg'

// 8
import k5 from '../assets/images/koh10.jpg'
import k6 from '../assets/images/koh10_1.jpg'
import k7 from '../assets/images/koh10_2.jpg'
import k8 from '../assets/images/koh10_3.jpg'



export const provinceKohKong = [
  {
    id: 1,
    name: "Tatai Waterfall",
    imageUrl: koh1,
    description:
      "A serene waterfall nestled in the Cardamom Mountains, perfect for nature lovers and adventure seekers.",
    linkUrl: "/kohkong/1",
    category: "Nature & Adventure",
    content:
      "Tatai Waterfall is one of the most accessible waterfalls in Koh Kong, offering a tranquil setting amidst lush greenery. Visitors can enjoy a refreshing swim or take a boat ride to explore the surrounding area.",
    tip: "Best visited during the rainy season for a more dramatic waterfall experience.",
    gallery:[koh2, koh3, koh4],
  },
  {
    id: 2,
    name: "Peam Krasaop Wildlife Sanctuary",
    imageUrl: koh5,
    description: "A vast mangrove forest sanctuary home to diverse wildlife and unique ecosystems.",
    linkUrl: "/kohkong/2",
    category: "Eco-Tourism",
    content: "Spanning over 245 square kilometers, the sanctuary offers boat tours through its intricate network of waterways, allowing visitors to witness the rich biodiversity and serene landscapes.",
    tip: "Consider hiring a local guide to enhance your experience and support the community.",
    gallery: [koh6,koh7,koh8],
    
  },
  {
    id: 3,
    name: "Koh Kong Island",
    imageUrl:koh_1 ,
    description: "Cambodia's largest island, offering pristine beaches and untouched natural beauty.",
    linkUrl: "/kohkong/3",
    category: "Island Getaway",
    content: "Koh Kong Island boasts seven stunning beaches along its western shore, ideal for swimming, snorkeling, and relaxing away from the crowds.",
    tip: "Bring your own supplies as amenities are limited on the island.",
    gallery: [koh_2,koh_3,koh_4]
  },
  {
    id: 4,
    name: "Botum Sakor National Park",
    imageUrl: koh_6,
    description: "The largest national park in Cambodia, featuring diverse ecosystems and abundant wildlife.",
    linkUrl: "/kohkong/4",
    category: "Nature Reserve",
    content: "Covering a vast area, the park offers opportunities for trekking, wildlife spotting, and exploring its varied landscapes, including mangroves, forests, and coastal areas.",
    tip: "Prepare for a full-day trip with sufficient water and snacks.",
    gallery: [koh_5,koh_7,koh_8]
  },
  {
    id: 5,
    name: "Koh Sdach Island",
    imageUrl: kohkong1,
    description: "A tranquil island known for its fishing villages and clear waters.",
    linkUrl: "/kohkong/5",
    category: "Cultural Experience",
    content: "Koh Sdach Island offers a glimpse into local life with its fishing communities and traditional practices. Visitors can enjoy fresh seafood and explore the island's natural beauty.",
    tip: "Respect local customs and traditions while visiting.",
    gallery: [kohkong2,kohkong3,kohkong4]
      
  },
  {
    id: 6,
    name: "Koh Smach Island",
    imageUrl: kohkong5,
    description: "An island offering pristine beaches and opportunities for snorkeling.",
    linkUrl: "/kohkong/6",
    category: "Island Adventure",
    content: "Koh Smach Island is less developed, providing a more authentic and secluded beach experience. It's perfect for travelers seeking tranquility and natural beauty.",
    tip: "Bring snorkeling gear and be prepared for basic facilities.",
    gallery: [kohkong6,kohkong7,kohkong8]
  },
  {
    id: 7,
    name: "Koh Kong Bridge",
    imageUrl: kohkong9,
    description: "The longest bridge in Cambodia, connecting Koh Kong to Thailand.",
    linkUrl: "/kohkong/7",
    category: "Historical Landmark",
    content: "Spanning 1,900 meters, the Koh Kong Bridge is a significant infrastructure project that facilitates trade and travel between Cambodia and Thailand.",
    tip: "Visit during sunset for stunning views and photo opportunities.",
    gallery: [kohkong10,kohkong11,kohkong12]
  },
  {
    id: 8,
    name: "Koh Krav Island",
    imageUrl: kohkong14,
    description: "A secluded island known for its untouched beaches and clear waters.",
    linkUrl: "/kohkong/8",
    category: "Hidden Gem",
    content: "Koh Krav Island offers a peaceful retreat with its pristine environment and opportunities for snorkeling and swimming.",
    tip: "Access is limited; consider arranging transportation in advance.",
    gallery: [kohkong13,kohkong15,kohkong16]
  },
  {
  id: 9,
  name: "Peam Krasaop Mangrove Tour",
  imageUrl: k1,
  description: "Explore the rich mangrove ecosystem at Peam Krasaop Wildlife Sanctuary.",
  linkUrl: "/kohkong/12",
  category: "Eco-Tourism",
  content: "Boat tours allow you to see unique wildlife and serene waterways in this protected mangrove forest.",
  tip: "Hire a local guide to enhance your experience and support the community.",
  gallery: [k2,k3,k4]
},
  {
    id: 10,
    name: "Stupa of Khun Chang",
    imageUrl:k5,
    description: "A historical site located on a small island near Koh Kong Bridge.",
    linkUrl: "/kohkong/9",
    category: "Cultural Heritage",
    content: "Stupa of Khun Chang is a small island featuring a historic stupa, offering scenic views and a peaceful atmosphere.",
    tip: "Best visited during the late afternoon for a serene experience.",
    gallery: [k6,k7,k8]
  },
];

// Sihanoukville
export const provinceSihanoukville = [
  {
    id: 1,
    name: "Otres Beach",
    imageUrl: "https://www.cambodiatravel.org/images/Otres-Beach.jpg",
    description: "A relaxing beach known for its calm waters, laid-back vibe, and sunset views.",
    linkUrl: "/sihanoukville/1",
    category: "Beach",
    content: "Otres Beach is ideal for travelers seeking tranquility away from the busier areas of Sihanoukville. Enjoy swimming, sunbathing, or sipping cocktails in beachfront bars.",
    tip: "Visit during the afternoon for a beautiful sunset view.",
    gallery: [
      "https://www.cambodiatravel.org/images/Otres-Beach-1.jpg",
      "https://www.cambodiatravel.org/images/Otres-Beach-2.jpg",
      "https://www.cambodiatravel.org/images/Otres-Beach-3.jpg"
    ]
  },
  {
    id: 2,
    name: "Serendipity Beach",
    imageUrl: "https://www.cambodiatravel.org/images/Serendipity-Beach.jpg",
    description: "A lively beach with bars, restaurants, and vibrant nightlife.",
    linkUrl: "/sihanoukville/2",
    category: "Beach & Nightlife",
    content: "Serendipity Beach is famous for its vibrant nightlife and local eateries. It's perfect for travelers who want a mix of relaxation and entertainment.",
    tip: "Try the local seafood at beachfront restaurants.",
    gallery: [
      "https://www.cambodiatravel.org/images/Serendipity-Beach-1.jpg",
      "https://www.cambodiatravel.org/images/Serendipity-Beach-2.jpg",
      "https://www.cambodiatravel.org/images/Serendipity-Beach-3.jpg"
    ]
  },
  {
    id: 3,
    name: "Koh Rong Samloem Island",
    imageUrl: "https://www.cambodiatravel.org/images/Koh-Rong-Samloem.jpg",
    description: "A serene island with pristine beaches and crystal-clear waters.",
    linkUrl: "/sihanoukville/3",
    category: "Island Escape",
    content: "Koh Rong Samloem offers peaceful beaches and snorkeling opportunities. It's less crowded than the main Sihanoukville coastline.",
    tip: "Bring snorkeling gear and stay overnight to fully enjoy the island.",
    gallery: [
      "https://www.cambodiatravel.org/images/Koh-Rong-Samloem-1.jpg",
      "https://www.cambodiatravel.org/images/Koh-Rong-Samloem-2.jpg",
      "https://www.cambodiatravel.org/images/Koh-Rong-Samloem-3.jpg"
    ]
  },
  {
    id: 4,
    name: "Ream National Park",
    imageUrl: "https://www.cambodiatravel.org/images/Ream-National-Park.jpg",
    description: "A natural park with mangroves, beaches, and diverse wildlife.",
    linkUrl: "/sihanoukville/4",
    category: "Nature & Adventure",
    content: "Ream National Park spans coastal and forested areas, offering trekking, bird watching, and boat trips through mangrove channels.",
    tip: "Hire a local guide for the best experience and safety.",
    gallery: [
      "https://www.cambodiatravel.org/images/Ream-National-Park-1.jpg",
      "https://www.cambodiatravel.org/images/Ream-National-Park-2.jpg",
      "https://www.cambodiatravel.org/images/Ream-National-Park-3.jpg"
    ]
  },
  {
    id: 5,
    name: "Victory Beach",
    imageUrl: "https://www.cambodiatravel.org/images/Victory-Beach.jpg",
    description: "A small beach known for its calm waters and laid-back atmosphere.",
    linkUrl: "/sihanoukville/5",
    category: "Beach",
    content: "Victory Beach is ideal for relaxation, sunbathing, and quiet walks along the shore.",
    tip: "Best visited early morning or late afternoon to avoid crowds.",
    gallery: [
      "https://www.cambodiatravel.org/images/Victory-Beach-1.jpg",
      "https://www.cambodiatravel.org/images/Victory-Beach-2.jpg",
      "https://www.cambodiatravel.org/images/Victory-Beach-3.jpg"
    ]
  },
  {
    id: 6,
    name: "Independence Beach",
    imageUrl: "https://www.cambodiatravel.org/images/Independence-Beach.jpg",
    description: "A popular beach featuring nearby resorts and restaurants.",
    linkUrl: "/sihanoukville/6",
    category: "Beach & Resort",
    content: "Independence Beach is great for swimming, relaxing at resorts, and enjoying local seafood eateries nearby.",
    tip: "Weekdays are quieter than weekends.",
    gallery: [
      "https://www.cambodiatravel.org/images/Independence-Beach-1.jpg",
      "https://www.cambodiatravel.org/images/Independence-Beach-2.jpg",
      "https://www.cambodiatravel.org/images/Independence-Beach-3.jpg"
    ]
  },
  {
    id: 7,
    name: "Koh Ta Kiev Island",
    imageUrl: "https://www.cambodiatravel.org/images/Koh-Ta-Kiev.jpg",
    description: "A secluded island with jungle trekking and pristine beaches.",
    linkUrl: "/sihanoukville/7",
    category: "Island Adventure",
    content: "Koh Ta Kiev is perfect for adventure lovers, offering jungle trekking, kayaking, and uncrowded beaches.",
    tip: "Bring camping gear if you plan to stay overnight.",
    gallery: [
      "https://www.cambodiatravel.org/images/Koh-Ta-Kiev-1.jpg",
      "https://www.cambodiatravel.org/images/Koh-Ta-Kiev-2.jpg",
      "https://www.cambodiatravel.org/images/Koh-Ta-Kiev-3.jpg"
    ]
  },
  {
    id: 8,
    name: "Wat Leu",
    imageUrl: "https://www.cambodiatravel.org/images/Wat-Leu.jpg",
    description: "A hilltop pagoda offering panoramic views of Sihanoukville.",
    linkUrl: "/sihanoukville/8",
    category: "Cultural & Religious",
    content: "Wat Leu provides both spiritual experience and scenic views of beaches and the coastline from the hilltop.",
    tip: "Best visited in the early morning for sunrise views.",
    gallery: [
      "https://www.cambodiatravel.org/images/Wat-Leu-1.jpg",
      "https://www.cambodiatravel.org/images/Wat-Leu-2.jpg",
      "https://www.cambodiatravel.org/images/Wat-Leu-3.jpg"
    ]
  },
  {
    id: 9,
    name: "Kbal Chhay Waterfall",
    imageUrl: "https://www.cambodiatravel.org/images/Kbal-Chhay.jpg",
    description: "A popular waterfall near Sihanoukville city, surrounded by tropical forest.",
    linkUrl: "/sihanoukville/9",
    category: "Nature & Adventure",
    content: "Kbal Chhay Waterfall is a refreshing spot for swimming, picnicking, and exploring the surrounding jungle trails.",
    tip: "Bring insect repellent and wear comfortable shoes for hiking.",
    gallery: [
      "https://www.cambodiatravel.org/images/Kbal-Chhay-1.jpg",
      "https://www.cambodiatravel.org/images/Kbal-Chhay-2.jpg",
      "https://www.cambodiatravel.org/images/Kbal-Chhay-3.jpg"
    ]
  },
  {
    id: 10,
    name: "Sokha Beach",
    imageUrl: "https://www.cambodiatravel.org/images/Sokha-Beach.jpg",
    description: "A private beach area maintained by Sokha Resort with clean sand and calm waters.",
    linkUrl: "/sihanoukville/10",
    category: "Beach & Luxury",
    content: "Sokha Beach is ideal for resort visitors seeking pristine sand, safe swimming, and luxury amenities.",
    tip: "Reserve a day pass at Sokha Resort if not staying overnight.",
    gallery: [
      "https://www.cambodiatravel.org/images/Sokha-Beach-1.jpg",
      "https://www.cambodiatravel.org/images/Sokha-Beach-2.jpg",
      "https://www.cambodiatravel.org/images/Sokha-Beach-3.jpg"
    ]
  }
];

export const AllDataprovice=[
  ...PhnomPenhTourist,
  ...provinceSiemReap,
  ...provinceCards,  
  ...provinceSiemReap,
  ...provinceKomPot,
  ...provincekep,
  ...provinceKohKong, 
]
