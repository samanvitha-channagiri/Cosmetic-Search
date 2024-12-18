const heroimagesource =[
 "https://www.simpleskincare.in/cdn/shop/collections/Collection-page_SKIN-BARRIER-CARE_54929afb-54c5-4edc-83ae-3e8e93153ba4_1200x400.jpg?v=1721714285", // Replace with your image URL
 "https://img.freepik.com/free-vector/pomegranate-cosmetic-bottles-beauty-banner_33099-2264.jpg",   
 "https://www.simpleskincare.in/cdn/shop/collections/1743a16edc1a--Serums-GIF_1200x400.gif?v=1721713624",
 "https://www.maybelline.com/-/media/project/loreal/brand-sites/mny/americas/us/homepage/product-carousel/holiday/2024/maybelline-holiday-2024-hp-banner-2160x810.jpg?rev=6948247c3a664467a551a3dcb363f21c&cx=0.25&cy=0.31&cw=1440&ch=540&hash=AB83837D15B7BE976FF5F70380741CCB",
  "https://img.freepik.com/free-vector/promo-banner-with-premium-perfume_1419-2233.jpg?t=st=1733853728~exp=1733857328~hmac=8f6483aa24f401519a885e2093ff53a57263e34dd5919e4f1d837437fe315a7c&w=1380"
]
const mockProductData = [
    {
        id: 1,
        name: "Vaseline Body Lotion",
        brand: "Vaseline",
        price: 343.00,
        rating: 4.4,
        category: "skincare,haircare",
        description: "A deep moisture nourishing body cream that provides hydration.",
        image: "./assets/images/id1.jpg",
        ingredients: "Water, Mineral oil, Glycerin",
        shades: null,
        reviews: [
            {
                reviewer: "Alice",
                rating: 4,
                reviewText: "This cream is amazing! My skin feels so hydrated and smooth."
            },
            {
                reviewer: "Bob",
                rating: 5,
                reviewText: "Good product, but I expected more hydration."
            }
        ]
    },
    {
        id: 2,
        name: "Serum Foundation",
        brand: "NY bae",
        price: 246.00,
        rating: 2.9,
        category: "makeup",
        description: "Light weight and moisturising,Buildable and flawless coverage.",
        image: "./assets/images/id2.jpg",
        ingredients: "Almond oil,jojoba oil,Glycerin",
        shades: ["Dewy"],
        reviews: [
            {
                reviewer: "Charlotte",
                rating: 3,
                reviewText: "I love the dewy shade, and it lasts all day!"
            },
            {
                reviewer: "Emma",
                rating: 4,
                reviewText: "The shade is beautiful."
            }
        ]
    },
    {
        id: 3,
        name: "LOREAL Shampoo",
        brand: "LOREAL",
        price: 541.00,
        rating: 3.9,
        category: "haircare",
        description: "A gentle shampoo that revitalizes your hair.",
        image: "./assets/images/id3.jpg",
        ingredients: "Tea Tree Oil, Keratin",
        shades: null,
        reviews: [
            {
                reviewer: "Liam",
                rating: 4,
                reviewText: "My hair feels cleaner, but it doesn't add volume like I hoped."
            }
        ]
    },
    {
        id: 4,
        name: "Ponds Body Lotion",
        brand: "PONDS",
        price: 475.00,
        rating: 4.3,
        category: "skincare",
        description: "Provides silky smooth skin with long-lasting hydration.",
        image: "./assets/images/id4.jpg",
        ingredients: "Cocoa Butter, Almond Oil",
        shades: null,
        reviews: [
            {
                reviewer: "Sophia",
                rating: 5,
                reviewText: "This lotion is incredible. It keeps my skin hydrated all day."
            }
        ]
    },
    {
        id: 5,
        name: "Matte Foundation",
        brand: "Brand E",
        price: 29.99,
        rating: 5,
        category: "makeup",
        description: "Lightweight foundation with full coverage.",
        image: "./assets/images/id5.jpg",
        ingredients: "Hyaluronic Acid, Mineral Pigments",
        shades: ["Fair", "Medium", "Tan", "Deep"],
        reviews: [
            {
                reviewer: "Olivia",
                rating: 5,
                reviewText: "Perfect foundation. Covers everything while feeling light on my skin."
            },
            {
                reviewer: "Isabella",
                rating: 4,
                reviewText: "Great coverage, but it can be a bit thick if applied too much."
            }
        ]
    },
    {
        id: 6,
        name: "ORIGIN Perfume",
        brand: "BEARDO",
        price: 348.00,
        rating: 3.8,
        category: "fragrances",
        description: "An exotic perfume with floral and woody notes.",
        image: "./assets/images/id6.jpg",
        ingredients: "Ethyl alcohol, Aqua ",
        shades: null,
        reviews: [
            {
                reviewer: "Zoe",
                rating: 5,
                reviewText: "The scent is heavenly! It lasts all day long."
            }
        ]
    },
    {
        id: 7,
        name: "Moisturizing Hand Cream",
        brand: "Nat Habit",
        price: 194.00,
        rating: 4,
        category: "skincare",
        description: "Nourishes dry hands with a non-greasy formula.",
        image: "./assets/images/id7.jpg",
        ingredients: "Jojoba Oil, vanilla,Glycerin",
        shades: ["vanilla"],
        reviews: [
            {
                reviewer: "Ethan",
                rating: 4,
                reviewText: "It works well, but I wish it absorbed a bit faster."
            }
        ]
    },
    {
        id: 8,
        name: "Volumizing Mascara",
        brand: "SWISS BEAUTY",
        price: 209.00,
        rating: 4.0,
        category: "makeup",
        description: "Creates dramatic lashes with a smudge-proof formula.",
        image: "./assets/images/id8.jpg",
        ingredients: "Silica, Vitamin B5",
        shades: ["Black"],
        reviews: [
            {
                reviewer: "Ava",
                rating: 5,
                reviewText: "My lashes have never looked so full! Highly recommend."
            }
        ]
    },
    {
        id: 9,
        name: "Repairing Hair Mask",
        brand: "Tresemme",
        price: 408.00,
        rating: 4.2,
        category: "haircare",
        description: "Deeply repairs damaged hair and restores shine.",
        image: "./assets/images/id9.jpg",
        ingredients: "Argan Oil, Biotin",
        shades: null,
        reviews: [
            {
                reviewer: "Mia",
                rating: 4,
                reviewText: "Good product, helps with frizz, but not sure if it repairs my hair."
            }
        ]
    },
    {
        id: 10,
        name: "Compact Powder",
        brand: "FACESCANADA",
        price: 155.00,
        rating: 4.2,
        category: "makeup",
        description: "Absorbs excess oil and provides a matte finish.",
        image: "./assets/images/id10.jpg",
        ingredients: "Talc, Zinc Oxide",
        shades: ["Light", "Medium", "Dark"],
        reviews: [
            {
                reviewer: "James",
                rating: 3,
                reviewText: "It works okay, but it doesn’t keep my face matte for long."
            }
        ]
    },{
        
        id: 11,
        name: "Compact Powder",
        brand: "maybelline",
        price: 161.00,
        rating: 4.0,
        category: "makeup",
        description: "Absorbs excess oil and provides a matte finish.",
        image: "./assets/images/id11.jpg",
        ingredients: "Talc, Zinc Oxide",
        shades: ["Light", "Medium", "Dark"],
        reviews: [
            {
                reviewer: "James",
                rating: 3,
                reviewText: "It works okay, but it doesn’t keep my face matte for long."
            }
        ]
        
    },{
        
        id: 12,
        name: "Compact Powder",
        brand: "PONDS",
        price: 105.00,
        rating: 4.1,
        category: "makeup",
        description: "Absorbs excess oil and provides a matte finish.",
        image: "./assets/images/id12.jpg",
        ingredients: "Talc, Zinc Oxide",
        shades: ["BB glow", "Pink"],
        reviews: [
            {
                reviewer: "James",
                rating: 3,
                reviewText: "It works okay, but it doesn’t keep my face matte for long."
            }
        ]
    },
    {
        id: 13,
        name: "Matte Lipstick",
        brand: "Maybelline",
        price: 181.00,
        rating: 4.1,
        category: "makeup",
        description: "Long-lasting lipstick with a smooth finish.",
        image: "./assets/images/id13.jpg",
        ingredients: "Natural Oils, Vitamin C",
        shades: ["660 touch of spice", "Nude Nuance", "Coral Crush"],
        reviews: [
            {
                reviewer: "Charlotte",
                rating: 5,
                reviewText: "I love the red velvet shade, and it lasts all day!"
            },
            {
                reviewer: "Emma",
                rating: 4,
                reviewText: "The color is beautiful, but it's a bit drying on my lips."
            }
        ]
    },
    {
        id: 14,
        name: "Liquid Lipstick",
        brand: "Insight",
        price: 103.00,
        rating: 3.6,
        category: "makeup",
        description: "Long-lasting lipstick with a smooth finish.",
        image: "./assets/images/id14.jpg",
        ingredients: "Natural Oils, Vitamin C",
        shades: ["Molten Pink", "Nude Nuance", "21 Romance"],
        reviews: [
            {
                reviewer: "Charlotte",
                rating: 5,
                reviewText: "I love the red velvet shade, and it lasts all day!"
            },
            {
                reviewer: "Emma",
                rating: 4,
                reviewText: "The color is beautiful, but it's a bit drying on my lips."
            }
        ]
    },
    {
        id: 15,
        name: "Liquid Lipstick",
        brand: "Insight",
        price: 204.00,
        rating: 4.6,
        category: "makeup",
        description: "Long-lasting lipstick with a smooth finish.",
        image: "./assets/images/id15.jpg",
        ingredients: "Natural Oils, Vitamin C",
        shades: ["660 touch of spice", "Nude Nuance", "Coral Crush"],
        reviews: [
            {
                reviewer: "Charlotte",
                rating: 5,
                reviewText: "I love the red velvet shade, and it lasts all day!"
            },
            {
                reviewer: "Emma",
                rating: 4,
                reviewText: "The color is beautiful, but it's a bit drying on my lips."
            }
        ]
    },
    {
        id: 16,
        name: "Long stayLipstick",
        brand: "Mamaearth",
        price: 358.00,
        rating: 3.8,
        category: "makeup",
        description: "Long-lasting lipstick with a smooth finish.",
        image: "./assets/images/id16.jpg",
        ingredients: "Natural Oils, Vitamin C",
        shades: ["Rose nude", "Pink rose", "Coral Crush"],
        reviews: [
            {
                reviewer: "Charlotte",
                rating: 5,
                reviewText: "I love the red velvet shade, and it lasts all day!"
            },
            {
                reviewer: "Emma",
                rating: 4,
                reviewText: "The color is beautiful, but it's a bit drying on my lips."
            }
        ]
    },{
        id: 17,
        name: "PH Lipstick",
        brand: "RENEE",
        price: 424.00,
        rating: 4.6,
        category: "makeup",
        description: "Long-lasting lipstick with a smooth finish.",
        image: "./assets/images/id17.jpg",
        ingredients: "Natural Oils, Vitamin C",
        shades: ["Madness PH stick"],
        reviews: [
            {
                reviewer: "Charlotte",
                rating: 5,
                reviewText: "I love the red velvet shade, and it lasts all day!"
            },
            {
                reviewer: "Emma",
                rating: 4,
                reviewText: "The color is beautiful, but it's a bit drying on my lips."
            }
        ]
    },{
        id: 18,
        name: "Matte Lipstick",
        brand: "SUGAR",
        price: 561.00,
        rating: 5.0,
        category: "makeup",
        description: "Long-lasting lipstick with a smooth finish.",
        image: "./assets/images/id18.jpg",
        ingredients: "Natural Oils, Vitamin C",
        shades: ["Madness PH stick"],
        reviews: [
            {
                reviewer: "Charlotte",
                rating: 5,
                reviewText: "I love the red velvet shade, and it lasts all day!"
            },
            {
                reviewer: "Emma",
                rating: 4,
                reviewText: "The color is beautiful, but it's a bit drying on my lips."
            }
        ]
    },{
        id: 19,
        name: "GlossyLipstick",
        brand: "LAKME 9 TO 5",
        price: 550.00,
        rating: 5.0,
        category: "makeup",
        description: "Long-lasting lipstick with a smooth finish.",
        image: "./assets/images/id19.jpg",
        ingredients: "Natural Oils, Vitamin C",
        shades: ["Pink","Peach","Red pop"],
        reviews: [
            {
                reviewer: "Charlotte",
                rating: 5,
                reviewText: "I love the red velvet shade, and it lasts all day!"
            },
            {
                reviewer: "Emma",
                rating: 4,
                reviewText: "The color is beautiful, but it's a bit drying on my lips."
            }
        ]
    },
    {
        id: 20,
        name: "Signature Perfume",
        brand: "DJOKR",
        price: 600.00,
        rating: 2.8,
        category: "fragrances",
        description: "An exotic perfume with floral and woody notes.",
        image: "./assets/images/id20.jpg",
        ingredients: "Ethyl alcohol, Aqua ",
        shades: null,
        reviews: [
            {
                reviewer: "Zoe",
                rating: 5,
                reviewText: "The scent is heavenly! It lasts all day long."
            }
        ]
    },{
        id: 21,
        name: "GODFATHER Perfume",
        brand: "BEARDO",
        price: 650.00,
        rating: 4.8,
        category: "fragrances",
        description: "An spicy perfume with floral.",
        image: "./assets/images/id21.jpg",
        ingredients: "Ethyl alcohol, Aqua ",
        shades: null,
        reviews: [
            {
                reviewer: "Zoe",
                rating: 5,
                reviewText: "The scent is heavenly! It lasts all day long."
            }
        ]
    },{
        id: 22,
        name: "UPSILON Perfume",
        brand: "",
        price: 348.00,
        rating: 3.8,
        category: "fragrances",
        description: "A golden sand and star perfume ,long lasting.",
        image: "./assets/images/id22.jpg",
        ingredients: "Ethyl alcohol, Aqua ",
        shades: null,
        reviews: [
            {
                reviewer: "Zoe",
                rating: 5,
                reviewText: "The scent is heavenly! It lasts all day long."
            }
        ]
    },{
        id: 23,
        name: "Perfume",
        brand: "LAYER R Wattagirl",
        price:429.00,
        rating: 4.1,
        category: "fragrances",
        description: "An exotic perfume with floral and woody notes.",
        image: "./assets/images/id23.jpg",
        ingredients: "Ethyl alcohol, Aqua ",
        shades: null,
        reviews: [
            {
                reviewer: "Zoe",
                rating: 5,
                reviewText: "The scent is heavenly! It lasts all day long."
            }
        ]
    },{
        id: 24,
        name: "BOHO WAVES Perfume",
        brand: "UPSILON",
        price: 849.00,
        rating: 3.8,
        category: "fragrances",
        description: "An exotic perfume with floral and woody notes.",
        image: "./assets/images/id24.jpg",
        ingredients: "Ethyl alcohol, Aqua ",
        shades: null,
        reviews: [
            {
                reviewer: "Zoe",
                rating: 5,
                reviewText: "The scent is heavenly! It lasts all day long."
            }
        ]
    },{
        id: 25,
        name: "Women Perfume",
        brand: "Bellavita",
        price: 550.00,
        rating: 4.3,
        category: "fragrances",
        description: "An exotic perfume with floral and woody notes.",
        image: "./assets/images/id25.jpg",
        ingredients: "Ethyl alcohol, Aqua ",
        shades: null,
        reviews: [
            {
                reviewer: "Zoe",
                rating: 5,
                reviewText: "The scent is heavenly! It lasts all day long."
            }
        ]
    },{
        id: 26,
        name: "Men Perfume",
        brand: "BUGG",
        price: 400.00,
        rating: 4.4,
        category: "fragrances",
        description: "An exotic perfume with floral and woody notes.",
        image: "./assets/images/id26.jpg",
        ingredients: "Ethyl alcohol, Aqua ",
        shades: null,
        reviews: [
            {
                reviewer: "Zoe",
                rating: 5,
                reviewText: "The scent is heavenly! It lasts all day long."
            }
        ]
    },{
        id: 27,
        name: "Curl Cream",
        brand: "Arata",
        price: 329.00,
        rating: 3.8,
        category: "haircare",
        description: "Moisturize ,hydrate, curl defines ,reduces frizz.",
        image: "./assets/images/id27.jpg",
        ingredients: "Silicon,No sulphate,paraben",
        shades: null,
        reviews: [
            {
                reviewer: "Mia",
                rating: 4,
                reviewText: "Good product, helps with frizz, but not sure if it repairs my hair."
            }
        ]
    },{
        id: 28,
        name: "Anti-drandruff Hair serum",
        brand: "Minimalist",
        price: 474.00,
        rating: 4.0,
        category: "haircare",
        description: "Pre shampoo treatment,reduces drandruff.",
        image: "./assets/images/id28.jpg",
        ingredients: "Silicon,No sulphate,paraben",
        shades: null,
        reviews: [
            {
                reviewer: "Mia",
                rating: 4,
                reviewText: "Good product, helps with frizz, but not sure if it repairs my hair."
            }
        ]
    },{
        id: 29,
        name: "Hair Cream",
        brand: "Himalaya herbals",
        price: 85.00,
        rating: 4.1,
        category: "haircare",
        description: "Moisturize ,hydrate, curl defines ,reduces frizz.",
        image: "./assets/images/id29.jpg",
        ingredients: "Silicon,No sulphate,paraben",
        shades: null,
        reviews: [
            {
                reviewer: "Mia",
                rating: 4,
                reviewText: "Good product, helps with frizz, but not sure if it repairs my hair."
            }
        ]
    },{
        id:30,
        name: "Hair mask",
        brand: "Parachute",
        price: 650.00,
        rating: 4.8,
        category: "haircare",
        description: "Moisturize ,hydrate, curl defines ,reduces frizz.",
        image: "./assets/images/id30.jpg",
        ingredients: "Silicon,No sulphate,paraben",
        shades: null,
        reviews: [
            {
                reviewer: "Mia",
                rating: 4,
                reviewText: "Good product, helps with frizz, but not sure if it repairs my hair."
            }
        ]
    },{
        id: 31,
        name: "Hair Serum",
        brand: "Livon",
        price: 191.00,
        rating: 4.3,
        category: "haircare",
        description: "Moisturize ,hydrate, curl defines ,reduces frizz.",
        image: "./assets/images/id31.jpg",
        ingredients: "Argon oil ,Vitamin-E",
        shades: null,
        reviews: [
            {
                reviewer: "Mia",
                rating: 4,
                reviewText: "Good product, helps with frizz, but not sure if it repairs my hair."
            }
        ]
    },{
        id: 32,
        name: "Castor oil",
        brand: "Dabur",
        price: 209.00,
        rating: 4.3,
        category: "haircare",
        description: "Moisturize ,hydrate skin, promotes hair growth.",
        image: "./assets/images/id32.jpg",
        ingredients: "Argon oil ,Vitamin-E",
        shades: null,
        reviews: [
            {
                reviewer: "Mia",
                rating: 4,
                reviewText: "Good product, helps with frizz, but not sure if it repairs my hair."
            }
        ]
    },
    {
        id: 33,
        name: "matte Foundation",
        brand: "MARS",
        price: 339.00,
        rating: 4.1,
        category: "makeup",
        description: "Light weight and moisturising,Buildable and flawless coverage.",
        image: "./assets/images/id33.jpg",
        ingredients: "Almond oil,jojoba oil,Glycerin",
        shades: [,"shade-06","shade-05","shade-04"],
        reviews: [
            {
                reviewer: "Charlotte",
                rating: 3,
                reviewText: "I love the 06 shade, and it lasts all day!"
            },
            {
                reviewer: "Emma",
                rating: 4,
                reviewText: "The shade is beautiful."
            }
        ]
    },{
        id: 34,
        name: " Foundation",
        brand: "Swiss Beauty",
        price: 397.00,
        rating: 4.3,
        category: "makeup",
        description: "Light weight and moisturising,Buildable and flawless coverage.",
        image: "./assets/images/id34.jpg",
        ingredients: "Almond oil,jojoba oil,Glycerin",
        shades: [,"golden-beige","fair Ivory","multicolor"],
        reviews: [
            {
                reviewer: "Charlotte",
                rating: 3,
                reviewText: "I love the 06 shade, and it lasts all day!"
            },
            {
                reviewer: "Emma",
                rating: 4,
                reviewText: "The shade is beautiful."
            }
        ]
    },
    {
        id: 35,
        name: " Foundation",
        brand: "Swiss Beauty",
        price: 300.00,
        rating: 3.9,
        category: "makeup",
        description: "Light weight and moisturising,Buildable and flawless coverage.",
        image: "./assets/images/id35.jpg",
        ingredients: "Almond oil,jojoba oil,Glycerin",
        shades: [,"golden-beige","fair Ivory","multicolor"],
        reviews: [
            {
                reviewer: "Charlotte",
                rating: 3,
                reviewText: "I love the 06 shade, and it lasts all day!"
            },
            {
                reviewer: "Emma",
                rating: 4,
                reviewText: "The shade is beautiful."
            }
        ]
    },{
        id: 36,
        name: " Foundation",
        brand: "LAKME",
        price: 450.00,
        rating: 4.6,
        category: "makeup",
        description: "Light weight and moisturising,Buildable and flawless coverage.",
        image: "./assets/images/id36.jpg",
        
        ingredients: "Almond oil,jojoba oil,Glycerin",
        shades: [,"golden-beige","fair Ivory","multicolor"],
        reviews: [
            {
                reviewer: "Charlotte",
                rating: 3,
                reviewText: "I love the 06 shade, and it lasts all day!"
            },
            {
                reviewer: "Emma",
                rating: 4,
                reviewText: "The shade is beautiful."
            }
        ]
    },{
        id: 37,
        name: " Foundation",
        brand: "FIT-ME",
        price: 250.00,
        rating: 4.6,
        category: "makeup",
        description: "Light weight and moisturising,Buildable and flawless coverage.",
        image: "./assets/images/id37.jpg",
        ingredients: "Almond oil,jojoba oil,Glycerin",
        shades: [,"golden-beige","fair Ivory","multicolor"],
        reviews: [
            {
                reviewer: "Charlotte",
                rating: 3,
                reviewText: "I love the 06 shade, and it lasts all day!"
            },
            {
                reviewer: "Emma",
                rating: 4,
                reviewText: "The shade is beautiful."
            }
        ]
    },{
        id: 38,
        name: " Gel sunscreen",
        brand: "de cons",
        price: 321.00,
        rating: 4.1,
        category:"makeup",
        description: "Sunscren for oily skin,Non greasy,no white cast.",
        image: "./assets/images/id38.jpg",
        ingredients: "Almond oil,jojoba oil,Glycerin",
        shades: ["Aqua","glycerine"," cetearyl olivate"],
        reviews: [
            {
                reviewer: "Charlotte",
                rating: 3,
                reviewText: "I love the 06 shade, and it lasts all day!"
            },
            {
                reviewer: "Emma",
                rating: 4,
                reviewText: "The shade is beautiful."
            }
        ]
    }
];
