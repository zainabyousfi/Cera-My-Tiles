let wall = "Wall";
let floor = "Floor";
let black = "Black";
let grey = "Grey";
let cream = "Cream";
let light_orange = "Light Orange";
let black_and_white = "Black and White";
let white = "White";
let grey_white = "Grey and White";
let red_clay = "Red Clay";
let moon_white = "Moon White";
let brown = "Brown";
let light_silver = "Light Silver";
let ceramic = "Ceramic";
let bedroom = "Bedroom";
let outdoor = "Outdoor";
let livingroom = "Living Room";
let bathroom = "Bathroom";
let commercial_spaces = "Commercial Spaces";
let kitchen = "Kitchen";



let product = [{
    image: "https://img.freepik.com/free-photo/black-marble-texture-background_24972-2295.jpg?w=740&t=st=1699178788~exp=1699179388~hmac=8e33964484afb1bf027abcf86a38b52a9dfa144a14a3f5949b0a5e57be5f0c7a",
    Title: "Design No 1",
    SKU: "item-01",
    Category:`${wall} ${kitchen} ${black} Tile`,
    Description: "Black wall marble is an exquisite choice for kitchen design, known for its elegance and timeless beauty. Its deep, glossy surface and white veining create a striking contrast that complements modern and traditional kitchen styles. Resistant to heat and moisture, it's a durable option that adds a touch of luxury to any culinary space.",
    Pricing : `Rs: ${400} /sq.feet`,
},{
  image: "https://img.freepik.com/premium-photo/slate-tile-ceramic_84738-6657.jpg?w=826",
  Title: "Design No 2",
  SKU: "item-02",
  Category:`${wall} ${kitchen} ${black} Tile`,
  Description: "Black wall marble is an exquisite choice for kitchen design, known for its elegance and timeless beauty. Its deep, glossy surface and white veining create a striking contrast that complements modern and traditional kitchen styles. Resistant to heat and moisture, it's a durable option that adds a touch of luxury to any culinary space.",
  Pricing : `Rs: ${405} /sq.feet`,
},{
  image: "https://img.freepik.com/premium-photo/abstract-dark-cement-plaster-wall-surface-with-scratch-lines-texture-background_150101-2328.jpg?w=740",
  Title: "Design No 3",
  SKU: "item-03",
  Category:`${wall} ${kitchen} ${black} Tile`,
  Description: "Black wall marble is an exquisite choice for kitchen design, known for its elegance and timeless beauty. Its deep, glossy surface and white veining create a striking contrast that complements modern and traditional kitchen styles. Resistant to heat and moisture, it's a durable option that adds a touch of luxury to any culinary space.",
  Pricing : `Rs: ${409} /sq.feet`,
},{
    image: "https://img.freepik.com/premium-photo/old-ceramic-tile-with-cement-texture-cement-concrete-stone-mosaic-tile_526818-3697.jpg?w=996",
    Title: "Design No 4",
    SKU: "item-04",
    Category:`${wall} ${kitchen} ${black} Tile`,
    Description: "Black wall marble is an exquisite choice for kitchen design, known for its elegance and timeless beauty. Its deep, glossy surface and white veining create a striking contrast that complements modern and traditional kitchen styles. Resistant to heat and moisture, it's a durable option that adds a touch of luxury to any culinary space.",
    Pricing : `Rs: ${900} /sq.feet`,
},{
    image: "https://img.freepik.com/premium-photo/old-ceramic-tile-with-cement-texture-cement-concrete-stone-mosaic-tile_526818-3703.jpg?w=996",
    Title: "Design No 5",
    SKU: "item-05",
    Category:`${wall} ${kitchen} ${black} Tile`,
    Description: "Black wall marble is an exquisite choice for kitchen design, known for its elegance and timeless beauty. Its deep, glossy surface and white veining create a striking contrast that complements modern and traditional kitchen styles. Resistant to heat and moisture, it's a durable option that adds a touch of luxury to any culinary space.",
    Pricing : `Rs: ${678} /sq.feet`,
},{
    image: "https://img.freepik.com/premium-vector/marble-check-seamless-pattern_497027-447.jpg?w=740",
    Title: "Design No 1",
    SKU: "item-06",
    Category:`${wall} ${kitchen} ${black_and_white} Tile`,
    Description: "Black wall marble is an exquisite choice for kitchen design, known for its elegance and timeless beauty. Its deep, glossy surface and white veining create a striking contrast that complements modern and traditional kitchen styles. Resistant to heat and moisture, it's a durable option that adds a touch of luxury to any culinary space.",
    Pricing : `Rs: ${879} /sq.feet`,
},{
    image: "https://img.freepik.com/free-photo/square-black-white_1203-674.jpg?w=740&t=st=1699461358~exp=1699461958~hmac=6ca9be4f14af1f670648c7aea9e785d972e0473f135258f27eeef22672af492f",
    Title: "Design No 2",
    SKU: "item-07",
    Category:`${wall} ${kitchen} ${black_and_white} Tile`,
    Description: "Black wall marble is an exquisite choice for kitchen design, known for its elegance and timeless beauty. Its deep, glossy surface and white veining create a striking contrast that complements modern and traditional kitchen styles. Resistant to heat and moisture, it's a durable option that adds a touch of luxury to any culinary space.",
    Pricing : `Rs: ${234} /sq.feet`,
},{
  image: "https://img.freepik.com/premium-photo/sussex-bond-gray-brick-wall-seamless-pattern-background-texture_337817-5876.jpg?w=996",
  Title: "Design No 3",
  SKU: "item-08",
  Category:`${wall} ${kitchen} ${black_and_white} Tile`,
  Description: "Black wall marble is an exquisite choice for kitchen design, known for its elegance and timeless beauty. Its deep, glossy surface and white veining create a striking contrast that complements modern and traditional kitchen styles. Resistant to heat and moisture, it's a durable option that adds a touch of luxury to any culinary space.",
  Pricing : `Rs: ${987} /sq.feet`,
},{
  image: "https://img.freepik.com/free-photo/texture-backgrounds_1122-1852.jpg?1&t=st=1699461369~exp=1699461969~hmac=868731ac2f1a1f8dd3e76a59c00a9e0674ff0b8f6bcc711b850b29bcba67db41",
  Title: "Design No 4",
  SKU: "item-09",
  Category:`${wall} ${kitchen} ${black_and_white} Tile`,
  Description: "Black wall marble is an exquisite choice for kitchen design, known for its elegance and timeless beauty. Its deep, glossy surface and white veining create a striking contrast that complements modern and traditional kitchen styles. Resistant to heat and moisture, it's a durable option that adds a touch of luxury to any culinary space.",
  Pricing : `Rs: ${409} /sq.feet`,
},{
  image: "https://img.freepik.com/free-photo/old-ceramic-tiles-with-classic-pattern-laid-background-texture-wallpaper-presentation-splash-screen-advertising_166373-2651.jpg?w=740&t=st=1699535504~exp=1699536104~hmac=f316049ab44a08b5fdb388d3ccbf5b72c85be16e29c022158b9dfcb518d9078a",
  Title: "Design No 5",
  SKU: "item-10",
  Category:`${wall} ${kitchen} ${black_and_white} Tile`,
  Description: "Black wall marble is an exquisite choice for kitchen design, known for its elegance and timeless beauty. Its deep, glossy surface and white veining create a striking contrast that complements modern and traditional kitchen styles. Resistant to heat and moisture, it's a durable option that adds a touch of luxury to any culinary space.",
  Pricing : `Rs: ${489} /sq.feet`,
},{
  image: "https://img.freepik.com/free-photo/close-up-white-marble-textured-wall_53876-139849.jpg?w=740&t=st=1699462037~exp=1699462637~hmac=d872e83b3950b1893286bde590a522f0920e64680e76094ae1dc655a863b37c2",
  Title: "Design No 1",
  SKU: "item-11",
  Category:`${wall} ${kitchen} ${white} Tile`,
  Description: "Black wall marble is an exquisite choice for kitchen design, known for its elegance and timeless beauty. Its deep, glossy surface and white veining create a striking contrast that complements modern and traditional kitchen styles. Resistant to heat and moisture, it's a durable option that adds a touch of luxury to any culinary space.",
  Pricing : `Rs: ${480} /sq.feet`,
},{
  image: "https://img.freepik.com/free-photo/white-tiles-textures-background_74190-3870.jpg?w=740&t=st=1699462066~exp=1699462666~hmac=14105c5bbd8835ee21d5177c401a28f7b932e9479fefbf3d3f308285b40a7384",
  Title: "Design No 2",
  SKU: "item-12",
  Category:`${wall} ${kitchen} ${white} Tile`,
  Description: "Black wall marble is an exquisite choice for kitchen design, known for its elegance and timeless beauty. Its deep, glossy surface and white veining create a striking contrast that complements modern and traditional kitchen styles. Resistant to heat and moisture, it's a durable option that adds a touch of luxury to any culinary space.",
  Pricing : `Rs: ${488} /sq.feet`,
},{
  image: "https://img.freepik.com/premium-photo/vintage-tiled-wall-texture_1194-26079.jpg?w=740",
  Title: "Design No 3",
  SKU: "item-13",
  Category:`${wall} ${kitchen} ${white} Tile`,
  Description: "Black wall marble is an exquisite choice for kitchen design, known for its elegance and timeless beauty. Its deep, glossy surface and white veining create a striking contrast that complements modern and traditional kitchen styles. Resistant to heat and moisture, it's a durable option that adds a touch of luxury to any culinary space.",
  Pricing : `Rs: ${485} /sq.feet`,
},{
  image: "https://img.freepik.com/free-vector/white-tile-wall-floor-bathroom-background_107791-1094.jpg?w=826&t=st=1699462121~exp=1699462721~hmac=2ebecb8d52f9a5ff167ebfe5c409faf71b53c70368fbd2d986cb16e196777b18",
  Title: "Design No 4",
  SKU: "item-14",
  Category:`${wall} ${kitchen} ${white} Tile`,
  Description: "Black wall marble is an exquisite choice for kitchen design, known for its elegance and timeless beauty. Its deep, glossy surface and white veining create a striking contrast that complements modern and traditional kitchen styles. Resistant to heat and moisture, it's a durable option that adds a touch of luxury to any culinary space.",
  Pricing : `Rs: ${449} /sq.feet`,
},{
  image: "https://img.freepik.com/free-photo/empty-wall-background_1339-6362.jpg?w=740&t=st=1699462148~exp=1699462748~hmac=6dc1b113457e22e5d11dc4085aedd128c8fc2c1c741c37efd0d023663f89d76d",
  Title: "Design No 5",
  SKU: "item-15",
  Category:`${wall} ${kitchen} ${white} Tile`,
  Description: "Black wall marble is an exquisite choice for kitchen design, known for its elegance and timeless beauty. Its deep, glossy surface and white veining create a striking contrast that complements modern and traditional kitchen styles. Resistant to heat and moisture, it's a durable option that adds a touch of luxury to any culinary space.",
  Pricing : `Rs: ${429} /sq.feet`,

},{
  image: "https://img.freepik.com/premium-photo/old-ceramic-tile-with-cement-texture-cement-concrete-stone-mosaic-tile_526818-3612.jpg?w=740",
  Title: "Design No 1",
  SKU: "item-16",
  Category:`${wall} ${bathroom} ${black} Tile`,
  Description: "Bold and contemporary, these wall black bathroom tiles exude sophistication. Their sleek, matte finish adds a touch of modern elegance, creating a striking contrast that elevates any bathroom design. The deep black hue not only makes a stylish statement but also brings a sense of depth and luxury to the space.",
  Pricing : `Rs: ${390} /sq.feet `,
},{
  image: "https://img.freepik.com/free-photo/floor-tiles-faience-kitchen-bathroom-design_23-2148283322.jpg?size=626&ext=jpg&ga=GA1.1.139193818.1699522362&semt=ais",
  Title: "Design No 2",
  SKU: "item-17",
  Category:`${wall} ${bathroom} ${black} Tile`,
  Description: "Bold and contemporary, these wall black bathroom tiles exude sophistication. Their sleek, matte finish adds a touch of modern elegance, creating a striking contrast that elevates any bathroom design. The deep black hue not only makes a stylish statement but also brings a sense of depth and luxury to the space.",
  Pricing : `Rs: ${954} /sq.feet`,
},{
  image: "https://img.freepik.com/premium-photo/black-white-mosaic-tile-wall-modern-home-generative-ai_410516-67809.jpg?size=626&ext=jpg&ga=GA1.1.139193818.1699522362&semt=ais",
  Title: "Design No 3",
  SKU: "item-18",
  Category:`${wall} ${bathroom} ${black} Tile`,
  Description: "Bold and contemporary, these wall black bathroom tiles exude sophistication. Their sleek, matte finish adds a touch of modern elegance, creating a striking contrast that elevates any bathroom design. The deep black hue not only makes a stylish statement but also brings a sense of depth and luxury to the space.",
  Pricing : `Rs: ${390} /sq.feet`,
},{
  image: "https://img.freepik.com/free-photo/black-stones-tiled-floor_1194-6238.jpg?size=626&ext=jpg&ga=GA1.1.139193818.1699522362&semt=ais",
  Title: "Design No 4",
  SKU: "item-19",
  Category:`${wall} ${bathroom} ${black} Tile`,
  Description: "Bold and contemporary, these wall black bathroom tiles exude sophistication. Their sleek, matte finish adds a touch of modern elegance, creating a striking contrast that elevates any bathroom design. The deep black hue not only makes a stylish statement but also brings a sense of depth and luxury to the space.",
  Pricing : `Rs: ${354} /sq.feet`,
},{
  image: "https://img.freepik.com/free-photo/black-square-tiled-texture-background_53876-63561.jpg?size=626&ext=jpg&ga=GA1.1.139193818.1699522362&semt=ais",
  Title: "Design No 5",
  SKU: "item-20",
  Category:`${wall} ${bathroom} ${black} Tile`,
  Description: "Bold and contemporary, these wall black bathroom tiles exude sophistication. Their sleek, matte finish adds a touch of modern elegance, creating a striking contrast that elevates any bathroom design. The deep black hue not only makes a stylish statement but also brings a sense of depth and luxury to the space.",
  Pricing : `Rs: ${357} /sq.feet`,
},{
  image: "https://img.freepik.com/premium-photo/concrete-wall-textur_38145-324.jpg?size=626&ext=jpg&ga=GA1.1.139193818.1699522362&semt=ais",
  Title: "Design No 1",
  SKU: "item-21",
  Category:`${wall} ${bathroom} ${grey} Tile`,
  Description: "Transform your bathroom into a serene oasis with these wall grey tiles. The subtle and versatile grey palette creates a calming atmosphere, perfect for relaxation. The textured finish adds depth and interest, while the neutral tone effortlessly complements various design elements, making it a timeless choice for a sophisticated and soothing bathroom.",
  Pricing : `Rs: ${750} /sq.feet`,
},{
  image: "https://img.freepik.com/premium-photo/tiled-texture-concrete-seamless-background_124507-10134.jpg?size=626&ext=jpg&ga=GA1.1.139193818.1699522362&semt=ais",
  Title: "Design No 2",
  SKU: "item-22",
  Category:`${wall} ${bathroom} ${grey} Tile`,
  Description: "Transform your bathroom into a serene oasis with these wall grey tiles. The subtle and versatile grey palette creates a calming atmosphere, perfect for relaxation. The textured finish adds depth and interest, while the neutral tone effortlessly complements various design elements, making it a timeless choice for a sophisticated and soothing bathroom.",
  Pricing : `Rs: ${360} /sq.feet`,
},{
  image: "https://img.freepik.com/premium-photo/wall-tiles-background_134070-34.jpg?size=626&ext=jpg&ga=GA1.1.139193818.1699522362&semt=ais",
  Title: "Design No 3",
  SKU: "item-23",
  Category:`${wall} ${bathroom} ${grey} Tile`,
  Description: "Transform your bathroom into a serene oasis with these wall grey tiles. The subtle and versatile grey palette creates a calming atmosphere, perfect for relaxation. The textured finish adds depth and interest, while the neutral tone effortlessly complements various design elements, making it a timeless choice for a sophisticated and soothing bathroom.",
  Pricing : `Rs: ${359} /sq.feet`,
},{
  image: "https://img.freepik.com/premium-photo/grunge-background-with-space-text-image_196038-11448.jpg?size=626&ext=jpg&ga=GA1.1.139193818.1699522362&semt=ais",
  Title: "Design No 4",
  SKU: "item-24",
  Category:`${wall} ${bathroom} ${grey} Tile`,
  Description: "Transform your bathroom into a serene oasis with these wall grey tiles. The subtle and versatile grey palette creates a calming atmosphere, perfect for relaxation. The textured finish adds depth and interest, while the neutral tone effortlessly complements various design elements, making it a timeless choice for a sophisticated and soothing bathroom.",
  Pricing : `Rs: ${330} /sq.feet`,
},{
  image: "https://img.freepik.com/premium-photo/texture-dark-metal-tiles_76562-160.jpg?size=626&ext=jpg&ga=GA1.1.139193818.1699522362&semt=ais",
  Title: "Design No 5",
  SKU: "item-25",
  Category:`${wall} ${bathroom} ${grey} Tile`,
  Description: "Transform your bathroom into a serene oasis with these wall grey tiles. The subtle and versatile grey palette creates a calming atmosphere, perfect for relaxation. The textured finish adds depth and interest, while the neutral tone effortlessly complements various design elements, making it a timeless choice for a sophisticated and soothing bathroom.",
  Pricing : `Rs: ${370} /sq.feet`,
},{
  image: "https://img.freepik.com/premium-photo/wall-tile-tile-pink-coral-color-background_137637-86.jpg?size=626&ext=jpg&ga=GA1.1.139193818.1699522362&semt=ais",
  Title: "Design No 1",
  SKU: "item-26",
  Category:`${wall} ${bathroom} ${light_orange} Tile`,
  Description: "Infuse warmth and vibrancy into your bathroom with these light orange wall tiles. The soft and inviting hue instantly brightens the space, creating a cheerful ambiance. The glossy finish adds a touch of glamour, while the unique color choice brings a playful and refreshing energy to your bathroom decor.",
  Pricing : `Rs: ${950} /sq.feet`,
},{
  image: "https://img.freepik.com/premium-photo/abstract-colorful-background_196038-6402.jpg?size=626&ext=jpg&ga=GA1.1.139193818.1699522362&semt=ais",
  Title: "Design No 2",
  SKU: "item-27",
  Category:`${wall} ${bathroom} ${light_orange} Tile`,
  Description: "Infuse warmth and vibrancy into your bathroom with these light orange wall tiles. The soft and inviting hue instantly brightens the space, creating a cheerful ambiance. The glossy finish adds a touch of glamour, while the unique color choice brings a playful and refreshing energy to your bathroom decor.",
  Pricing : `Rs: ${353} /sq.feet`,
},{
  image: "https://img.freepik.com/premium-photo/texture-brown-concrete-wall-background_33720-335.jpg?size=626&ext=jpg&ga=GA1.1.139193818.1699522362&semt=ais",
  Title: "Design No 3",
  SKU: "item-28",
  Category:`${wall} ${bathroom} ${light_orange} Tile`,
  Description: "Infuse warmth and vibrancy into your bathroom with these light orange wall tiles. The soft and inviting hue instantly brightens the space, creating a cheerful ambiance. The glossy finish adds a touch of glamour, while the unique color choice brings a playful and refreshing energy to your bathroom decor.",
  Pricing : `Rs: ${320} /sq.feet`,
},{
  image: "https://img.freepik.com/premium-photo/grunge-texture_196038-13567.jpg?size=626&ext=jpg&ga=GA1.1.139193818.1699522362&semt=ais",
  Title: "Design No 4",
  SKU: "item-29",
  Category:`${wall} ${bathroom} ${light_orange} Tile`,
  Description: "Infuse warmth and vibrancy into your bathroom with these light orange wall tiles. The soft and inviting hue instantly brightens the space, creating a cheerful ambiance. The glossy finish adds a touch of glamour, while the unique color choice brings a playful and refreshing energy to your bathroom decor.",
  Pricing : `Rs: ${366} /sq.feet`,
},{
  image: "https://img.freepik.com/premium-photo/colorful-abstract-textured-background-design_705441-808.jpg?size=626&ext=jpg&ga=GA1.1.139193818.1699522362&semt=ais",
  Title: "Design No 5",
  SKU: "item-30",
  Category:`${wall} ${bathroom} ${light_orange} Tile`,
  Description: "Infuse warmth and vibrancy into your bathroom with these light orange wall tiles. The soft and inviting hue instantly brightens the space, creating a cheerful ambiance. The glossy finish adds a touch of glamour, while the unique color choice brings a playful and refreshing energy to your bathroom decor.",
  Pricing : `Rs: ${458} /sq.feet`,
},{
  image: "https://img.freepik.com/premium-photo/gray-stone-rock-shelf-counter-gray-rock-pattern-product-display_39408-1685.jpg?size=626&ext=jpg&ga=GA1.1.139193818.1699522362&semt=ais",
  Title: "Design No 1",
  SKU: "item-31",
  Category:`${wall} ${outdoor} ${grey_white} Tile`,
  Description: "Elevate your outdoor space with these grey and white wall tiles, a perfect blend of sophistication and tranquility. The harmonious contrast between the two tones creates a timeless aesthetic, while the durable design ensures longevity. Transform your exterior walls into a stylish canvas, seamlessly marrying modernity with classic charm.",
  Pricing : `Rs: ${490} /sq.feet`,
},{
  image: "https://img.freepik.com/premium-photo/vintage-textured-brick-wall_480962-16710.jpg?size=626&ext=jpg&ga=GA1.1.139193818.1699522362&semt=ais",
  Title: "Design No 2",
  SKU: "item-32",
  Category:`${wall} ${outdoor} ${grey_white} Tile`,
  Description: "Elevate your outdoor space with these grey and white wall tiles, a perfect blend of sophistication and tranquility. The harmonious contrast between the two tones creates a timeless aesthetic, while the durable design ensures longevity. Transform your exterior walls into a stylish canvas, seamlessly marrying modernity with classic charm.",
  Pricing : `Rs: ${358} /sq.feet`,
},{
  image: "https://img.freepik.com/premium-photo/large-luxury-modern-bright-interiors-room-illustration-3d-rendering_653967-3531.jpg?size=626&ext=jpg&ga=GA1.1.139193818.1699522362&semt=ais",
  Title: "Design No 3",
  SKU: "item-33",
  Category:`${wall} ${outdoor} ${grey_white} Tile`,
  Description: "Elevate your outdoor space with these grey and white wall tiles, a perfect blend of sophistication and tranquility. The harmonious contrast between the two tones creates a timeless aesthetic, while the durable design ensures longevity. Transform your exterior walls into a stylish canvas, seamlessly marrying modernity with classic charm.",
  Pricing : `Rs: ${984} /sq.feet`,
},{
  image: "https://img.freepik.com/premium-photo/wall-texture-made-from-gray-decorative-bricks_300849-548.jpg?size=626&ext=jpg&ga=GA1.1.139193818.1699522362&semt=ais",
  Title: "Design No 4",
  SKU: "item-34",
  Category:`${wall} ${outdoor} ${grey_white} Tile`,
  Description: "Elevate your outdoor space with these grey and white wall tiles, a perfect blend of sophistication and tranquility. The harmonious contrast between the two tones creates a timeless aesthetic, while the durable design ensures longevity. Transform your exterior walls into a stylish canvas, seamlessly marrying modernity with classic charm.",
  Pricing : `Rs: ${870} /sq.feet`,
},{
  image: "https://img.freepik.com/premium-photo/brick-wall-structure-concrete-brick-masonry-background-brickwall-building-material-concept-surface-abstract-backdrop-wall-texture-background_474717-18156.jpg?size=626&ext=jpg&ga=GA1.1.139193818.1699522362&semt=ais",
  Title: "Design No 5",
  SKU: "item-35",
  Category:`${wall} ${outdoor} ${grey_white} Tile`,
  Description: "Elevate your outdoor space with these grey and white wall tiles, a perfect blend of sophistication and tranquility. The harmonious contrast between the two tones creates a timeless aesthetic, while the durable design ensures longevity. Transform your exterior walls into a stylish canvas, seamlessly marrying modernity with classic charm.",
  Pricing : `Rs: ${423} /sq.feet`,
},{
  image: "https://img.freepik.com/premium-photo/cobblestone-background_1426-14298.jpg?size=626&ext=jpg&ga=GA1.1.139193818.1699522362&semt=ais",
  Title: "Design No 1",
  SKU: "item-36",
  Category:`${wall} ${outdoor} ${red_clay} Tile`,
  Description: "Embrace rustic charm with these outdoor wall tiles in a rich red-clay hue. Inspired by nature, the warm and earthy tones evoke a sense of coziness and authenticity. The textured finish adds depth, creating a visually captivating facade that effortlessly blends with outdoor surroundings, bringing a touch of timeless elegance to your space.",
  Pricing : `Rs: ${456} /sq.feet`,
},{
  image: "https://img.freepik.com/premium-photo/red-old-rectangular-tiles-background-texture_8119-1071.jpg?size=626&ext=jpg&ga=GA1.1.139193818.1699522362&semt=ais",
  Title: "Design No 2",
  SKU: "item-37",
  Category:`${wall} ${outdoor} ${red_clay} Tile`,
  Description: "Embrace rustic charm with these outdoor wall tiles in a rich red-clay hue. Inspired by nature, the warm and earthy tones evoke a sense of coziness and authenticity. The textured finish adds depth, creating a visually captivating facade that effortlessly blends with outdoor surroundings, bringing a touch of timeless elegance to your space.",
  Pricing : `Rs: ${456} /sq.feet`,
},{
  image: "https://img.freepik.com/premium-photo/wall-stains-oil-dirt-various_38791-70.jpg?size=626&ext=jpg&ga=GA1.1.139193818.1699522362&semt=ais",
  Title: "Design No 3",
  SKU: "item-38",
  Category:`${wall} ${outdoor} ${red_clay} Tile`,
  Description: "Embrace rustic charm with these outdoor wall tiles in a rich red-clay hue. Inspired by nature, the warm and earthy tones evoke a sense of coziness and authenticity. The textured finish adds depth, creating a visually captivating facade that effortlessly blends with outdoor surroundings, bringing a touch of timeless elegance to your space.",
  Pricing : `Rs: ${230} /sq.feet`,
},{
  image: "https://img.freepik.com/premium-photo/synthetic-leather_102618-2397.jpg?size=626&ext=jpg&ga=GA1.1.139193818.1699522362&semt=ais",
  Title: "Design No 4",
  SKU: "item-39",
  Category:`${wall} ${outdoor} ${red_clay} Tile`,
  Description: "Embrace rustic charm with these outdoor wall tiles in a rich red-clay hue. Inspired by nature, the warm and earthy tones evoke a sense of coziness and authenticity. The textured finish adds depth, creating a visually captivating facade that effortlessly blends with outdoor surroundings, bringing a touch of timeless elegance to your space.",
  Pricing : `Rs: ${650} /sq.feet`,
},{
  image: "https://img.freepik.com/premium-photo/abstract-background-from-paving-red-tiles-bricks_91130-344.jpg?size=626&ext=jpg&ga=GA1.1.139193818.1699522362&semt=ais",
  Title: "Design No 5",
  SKU: "item-40",
  Category:`${wall} ${outdoor} ${red_clay} Tile`,
  Description: "Embrace rustic charm with these outdoor wall tiles in a rich red-clay hue. Inspired by nature, the warm and earthy tones evoke a sense of coziness and authenticity. The textured finish adds depth, creating a visually captivating facade that effortlessly blends with outdoor surroundings, bringing a touch of timeless elegance to your space.",
  Pricing : `Rs: ${960} /sq.feet`,
},{
  image: "https://img.freepik.com/premium-photo/window_52137-15865.jpg?size=626&ext=jpg&ga=GA1.1.139193818.1699522362&semt=ais",
  Title: "Design No 1",
  SKU: "item-41",
  Category:`${wall} ${outdoor} ${moon_white} Tile`,
  Description: "Elevate your outdoor aesthetic with these moon white wall tiles, exuding an air of contemporary elegance. The crisp, clean hue radiates sophistication, while the sleek, matte finish adds a touch of modernity. Transform your outdoor walls into a canvas of tranquility, where style meets serenity in a harmonious fusion.",
  Pricing : `Rs: ${450} /sq.feet`,
},{
  image: "https://img.freepik.com/premium-photo/natural-white-marble-texture-skin-tile-wallpaper-luxurious-background-creative-stone-ceramic-art-wall-interiors-backdrop-design-picture-high-resolution_43429-3197.jpg?size=626&ext=jpg&ga=GA1.1.139193818.1699522362&semt=ais",
  Title: "Design No 2",
  SKU: "item-42",
  Category:`${wall} ${outdoor} ${moon_white} Tile`,
  Description: "Elevate your outdoor aesthetic with these moon white wall tiles, exuding an air of contemporary elegance. The crisp, clean hue radiates sophistication, while the sleek, matte finish adds a touch of modernity. Transform your outdoor walls into a canvas of tranquility, where style meets serenity in a harmonious fusion.",
  Pricing : `Rs: ${570} /sq.feet`,
},{
  image: "https://img.freepik.com/premium-photo/rectangle-tile-background_44651-156.jpg?size=626&ext=jpg&ga=GA1.1.139193818.1699522362&semt=ais",
  Title: "Design No 3",
  SKU: "item-43",
  Category:`${wall} ${outdoor} ${moon_white} Tile`,
  Description: "Elevate your outdoor aesthetic with these moon white wall tiles, exuding an air of contemporary elegance. The crisp, clean hue radiates sophistication, while the sleek, matte finish adds a touch of modernity. Transform your outdoor walls into a canvas of tranquility, where style meets serenity in a harmonious fusion.",
  Pricing : `Rs: ${450} /sq.feet`,
},{
  image: "https://img.freepik.com/premium-photo/minimalism-architecture-urban-wall-hedge-background_1156-923.jpg?size=626&ext=jpg&ga=GA1.1.139193818.1699522362&semt=ais",
  Title: "Design No 4",
  SKU: "item-44",
  Category:`${wall} ${outdoor} ${moon_white} Tile`,
  Description: "Elevate your outdoor aesthetic with these moon white wall tiles, exuding an air of contemporary elegance. The crisp, clean hue radiates sophistication, while the sleek, matte finish adds a touch of modernity. Transform your outdoor walls into a canvas of tranquility, where style meets serenity in a harmonious fusion.",
  Pricing : `Rs: ${440} /sq.feet`,
},{
  image: "https://img.freepik.com/premium-photo/copy-space-front-view-white-brick-wall_23-2148742493.jpg?size=626&ext=jpg&ga=GA1.1.139193818.1699522362&semt=ais",
  Title: "Design No 5",
  SKU: "item-45",
  Category:`${wall} ${outdoor} ${moon_white} Tile`,
  Description: "Elevate your outdoor aesthetic with these moon white wall tiles, exuding an air of contemporary elegance. The crisp, clean hue radiates sophistication, while the sleek, matte finish adds a touch of modernity. Transform your outdoor walls into a canvas of tranquility, where style meets serenity in a harmonious fusion.",
  Pricing : `Rs: ${436} /sq.feet`,
},{
  image: "https://img.freepik.com/premium-photo/closeup-surface-brown-marble-wall-texture-background_85347-1297.jpg?size=626&ext=jpg&ga=GA1.1.139193818.1699522362&semt=ais",
  Title: "Design No 1",
  SKU: "item-46",
  Category:`${wall} ${livingroom} ${cream} Tile`,
  Description: "Create a cozy and inviting atmosphere in your living room with these cream-colored wall tiles. The soft and neutral tones exude warmth, while the glossy finish adds a touch of elegance. These tiles effortlessly enhance the visual appeal of your space, providing a timeless backdrop for versatile and stylish interior design.*",
  Pricing : `Rs: ${364} /sq.feet`,
},{
  image: "https://img.freepik.com/premium-photo/old-beige-tile-wall-background_87918-742.jpg?size=626&ext=jpg&ga=GA1.1.139193818.1699522362&semt=ais",
  Title: "Design No 2",
  SKU: "item-47",
  Category:`${wall} ${livingroom} ${cream} Tile`,
  Description: "Create a cozy and inviting atmosphere in your living room with these cream-colored wall tiles. The soft and neutral tones exude warmth, while the glossy finish adds a touch of elegance. These tiles effortlessly enhance the visual appeal of your space, providing a timeless backdrop for versatile and stylish interior design.",
  Pricing : `Rs: ${356} /sq.feet`,
},{
  image: "https://img.freepik.com/premium-photo/light-grunge-tile-background-wall-texture_124507-10452.jpg?size=626&ext=jpg&ga=GA1.1.139193818.1699522362&semt=ais",
  Title: "Design No 3",
  SKU: "item-48",
  Category:`${wall} ${livingroom} ${cream} Tile`,
  Description: "Create a cozy and inviting atmosphere in your living room with these cream-colored wall tiles. The soft and neutral tones exude warmth, while the glossy finish adds a touch of elegance. These tiles effortlessly enhance the visual appeal of your space, providing a timeless backdrop for versatile and stylish interior design.",
  Pricing : `Rs: ${378} /sq.feet`,
},{
  image: "https://img.freepik.com/premium-photo/colored-ceramic-stones-abstract-smooth-brown-mosiac-texture-abstract-ceramic-mosaic-adorned-building-abstract-seamless-pattern_1258-71951.jpg?size=626&ext=jpg&ga=GA1.1.139193818.1699522362&semt=ais",
  Title: "Design No 4",
  SKU: "item-49",
  Category:`${wall} ${livingroom} ${cream} Tile`,
  Description: "Create a cozy and inviting atmosphere in your living room with these cream-colored wall tiles. The soft and neutral tones exude warmth, while the glossy finish adds a touch of elegance. These tiles effortlessly enhance the visual appeal of your space, providing a timeless backdrop for versatile and stylish interior design.",
  Pricing : `Rs: ${380} /sq.feet`,
},{
  image: "https://img.freepik.com/premium-photo/old-beige-tile-wall-background_87918-1000.jpg?size=626&ext=jpg&ga=GA1.1.139193818.1699522362&semt=ais",
  Title: "Design No 5",
  SKU: "item-50",
  Category:`${wall} ${livingroom} ${cream} Tile`,
  Description: "Create a cozy and inviting atmosphere in your living room with these cream-colored wall tiles. The soft and neutral tones exude warmth, while the glossy finish adds a touch of elegance. These tiles effortlessly enhance the visual appeal of your space, providing a timeless backdrop for versatile and stylish interior design.",
  Pricing : `Rs: ${367} /sq.feet`,
},{
  image: "https://img.freepik.com/premium-photo/texture-tiles-background_44074-3816.jpg?size=626&ext=jpg&ga=GA1.1.139193818.1699522362&semt=ais",
  Title: "Design No 1",
  SKU: "item-51",
  Category:`${wall} ${livingroom} ${black} Tile`,
  Description: "Elevate your living room with a bold statement using these black wall tiles. The sleek and sophisticated color exudes a contemporary charm, creating a striking focal point. The matte finish adds a touch of understated luxury, making these tiles a perfect choice for those who appreciate modern, edgy elegance in their living space.",
  Pricing : `Rs: ${376} /sq.feet`,
},{
  image: "https://img.freepik.com/premium-photo/rough-black-marble-tiles-texture-background_474756-93.jpg?size=626&ext=jpg&ga=GA1.1.139193818.1699522362&semt=ais",
  Title: "Design No 2",
  SKU: "item-52",
  Category:`${wall} ${livingroom} ${black} Tile`,
  Description: "Elevate your living room with a bold statement using these black wall tiles. The sleek and sophisticated color exudes a contemporary charm, creating a striking focal point. The matte finish adds a touch of understated luxury, making these tiles a perfect choice for those who appreciate modern, edgy elegance in their living space.",
  Pricing : `Rs: ${356} /sq.feet`,
},{
  image: "https://img.freepik.com/premium-photo/black-abstract-background-grunge-surfacemodern-shape-concept-3d-rendering_45981-1427.jpg?size=626&ext=jpg&ga=GA1.1.139193818.1699522362&semt=ais",
  Title: "Design No 3",
  SKU: "item-53",
  Category:`${wall} ${livingroom} ${black} Tile`,
  Description: "Elevate your living room with a bold statement using these black wall tiles. The sleek and sophisticated color exudes a contemporary charm, creating a striking focal point. The matte finish adds a touch of understated luxury, making these tiles a perfect choice for those who appreciate modern, edgy elegance in their living space.",
  Pricing : `Rs: ${398} /sq.feet`,
 },{
  image: "https://img.freepik.com/premium-photo/4k-high-resolution-gray-wall-designed-brick-marble-wallpaper-background-3d-rendering-024_547280-44.jpg?size=626&ext=jpg&ga=GA1.1.139193818.1699522362&semt=ais",
  Title: "Design No 4",
  SKU: "item-54",
  Category:`${wall} ${livingroom} ${black} Tile`,
  Description: "Elevate your living room with a bold statement using these black wall tiles. The sleek and sophisticated color exudes a contemporary charm, creating a striking focal point. The matte finish adds a touch of understated luxury, making these tiles a perfect choice for those who appreciate modern, edgy elegance in their living space.",
  Pricing : `Rs: ${356} /sq.feet`,
 },{
  image: "https://img.freepik.com/premium-photo/texture-black-wood-use-as-natural-background-gloomy-wooden-table_333858-338.jpg?size=626&ext=jpg&ga=GA1.1.139193818.1699522362&semt=ais",
  Title: "Design No 5",
  SKU: "item-55",
  Category:`${wall} ${livingroom} ${black} Tile`,
  Description: "Elevate your living room with a bold statement using these black wall tiles. The sleek and sophisticated color exudes a contemporary charm, creating a striking focal point. The matte finish adds a touch of understated luxury, making these tiles a perfect choice for those who appreciate modern, edgy elegance in their living space.",
  Pricing : `Rs: ${450} /sq.feet`,
 },{
  image: "https://img.freepik.com/premium-photo/empty-white-clean-ceramic-tile-wall-floor-background-minimal-simple-style-interior-backdrop_7189-2869.jpg?size=626&ext=jpg&ga=GA1.1.139193818.1699522362&semt=ais",
  Title: "Design No 1",
  SKU: "item-56",
  Category:`${wall} ${livingroom} ${white} Tile`,
  Description: "Transform your living room into a timeless oasis with these white wall tiles. The crisp and clean color scheme brings a sense of freshness and versatility to your space. The glossy finish adds a touch of sophistication, creating a canvas for endless design possibilities while ensuring a bright and airy ambiance.",
  Pricing : `Rs: ${230} /sq.feet`,
 },{
  image: "https://img.freepik.com/premium-photo/vintage-tiled-wall-texture_1194-26079.jpg?size=626&ext=jpg&ga=GA1.1.139193818.1699522362&semt=ais",
  Title: "Design No 2",
  SKU: "item-57",
  Category:`${wall} ${livingroom} ${white} Tile`,
  Description: "Transform your living room into a timeless oasis with these white wall tiles. The crisp and clean color scheme brings a sense of freshness and versatility to your space. The glossy finish adds a touch of sophistication, creating a canvas for endless design possibilities while ensuring a bright and airy ambiance.",
  Pricing : `Rs: ${870} /sq.feet`,
 },{
  image: "https://img.freepik.com/premium-photo/white-wall-tile-floor-outdoor-patio-ground-floor-worn-outside-tiling-background_100800-8696.jpg?size=626&ext=jpg&ga=GA1.1.139193818.1699522362&semt=ais",
  Title: "Design No 3",
  SKU: "item-58",
  Category:`${wall} ${livingroom} ${white} Tile`,
  Description: "Transform your living room into a timeless oasis with these white wall tiles. The crisp and clean color scheme brings a sense of freshness and versatility to your space. The glossy finish adds a touch of sophistication, creating a canvas for endless design possibilities while ensuring a bright and airy ambiance.",
  Pricing : `Rs: ${980} /sq.feet`,
 },{
  image: "https://img.freepik.com/premium-photo/background-texture-close-up-tile-texture_63047-1017.jpg?size=626&ext=jpg&ga=GA1.1.139193818.1699522362&semt=ais",
  Title: "Design No 4",
  SKU: "item-59",
  Category:`${wall} ${livingroom} ${white} Tile`,
  Description: "Transform your living room into a timeless oasis with these white wall tiles. The crisp and clean color scheme brings a sense of freshness and versatility to your space. The glossy finish adds a touch of sophistication, creating a canvas for endless design possibilities while ensuring a bright and airy ambiance.",
  Pricing : `Rs: ${760} /sq.feet`,
 },{
  image: "https://img.freepik.com/premium-photo/white-wall-tiles-texture_275441-2.jpg?size=626&ext=jpg&ga=GA1.1.139193818.1699522362&semt=ais",
  Title: "Design No 5",
  SKU: "item-60",
  Category:`${wall} ${livingroom} ${white} Tile`,
  Description: "Transform your living room into a timeless oasis with these white wall tiles. The crisp and clean color scheme brings a sense of freshness and versatility to your space. The glossy finish adds a touch of sophistication, creating a canvas for endless design possibilities while ensuring a bright and airy ambiance.",
  Pricing : `Rs: ${450} /sq.feet`,
 },{
  image: "https://img.freepik.com/premium-photo/wooden-texture-with-squares-background_488220-41776.jpg?size=626&ext=jpg&ga=GA1.1.139193818.1699522362&semt=ais",
  Title: "Design No 1",
  SKU: "item-61",
  Category:`${wall} ${bedroom} ${brown} Tile`,
  Description: "Infuse your bedroom with warmth and coziness using these brown wall tiles. The earthy tones create a soothing and intimate atmosphere, perfect for relaxation. The textured finish adds depth and visual interest, enhancing the overall aesthetic. Bring a touch of nature indoors, enveloping your bedroom in a comforting and timeless embrace.",
  Pricing : `Rs: ${980} /sq.feet`,
 },{
  image: "https://img.freepik.com/premium-photo/seamless-backsplash-texture-smooth-glossy-tile-material-elegant-background-design-3d_477306-1268.jpg?size=626&ext=jpg&ga=GA1.1.139193818.1699522362&semt=ais",
  Title: "Design No 2",
  SKU: "item-62",
  Category:`${wall} ${bedroom} ${brown} Tile`,
  Description: "Infuse your bedroom with warmth and coziness using these brown wall tiles. The earthy tones create a soothing and intimate atmosphere, perfect for relaxation. The textured finish adds depth and visual interest, enhancing the overall aesthetic. Bring a touch of nature indoors, enveloping your bedroom in a comforting and timeless embrace.",
  Pricing : `Rs: ${760} /sq.feet`,
 },{
  image: "https://img.freepik.com/premium-photo/wood-tiles-texture-background-concept_333858-347.jpg?size=626&ext=jpg&ga=GA1.1.139193818.1699522362&semt=ais",
  Title: "Design No 3",
  SKU: "item-63",
  Category:`${wall} ${bedroom} ${brown} Tile`,
  Description: "Infuse your bedroom with warmth and coziness using these brown wall tiles. The earthy tones create a soothing and intimate atmosphere, perfect for relaxation. The textured finish adds depth and visual interest, enhancing the overall aesthetic. Bring a touch of nature indoors, enveloping your bedroom in a comforting and timeless embrace.",
  Pricing : `Rs: ${540} /sq.feet`,
 },{
  image: "https://img.freepik.com/premium-photo/brown-bricks-wall-texture-background-3d-render_31479-128.jpg?size=626&ext=jpg&ga=GA1.1.139193818.1699522362&semt=ais",
  Title: "Design No 4",
  SKU: "item-64",
  Category:`${wall} ${bedroom} ${brown} Tile`,
  Description: "Infuse your bedroom with warmth and coziness using these brown wall tiles. The earthy tones create a soothing and intimate atmosphere, perfect for relaxation. The textured finish adds depth and visual interest, enhancing the overall aesthetic. Bring a touch of nature indoors, enveloping your bedroom in a comforting and timeless embrace.",
  Pricing : `Rs: ${920} /sq.feet`,
 },{
  image: "https://img.freepik.com/premium-photo/old-brown-tiled-floor-texture-background_75775-160.jpg?size=626&ext=jpg&ga=GA1.1.139193818.1699522362&semt=ais",
  Title: "Design No 5",
  SKU: "item-65",
  Category:`${wall} ${bedroom} ${brown} Tile`,
  Description: "Infuse your bedroom with warmth and coziness using these brown wall tiles. The earthy tones create a soothing and intimate atmosphere, perfect for relaxation. The textured finish adds depth and visual interest, enhancing the overall aesthetic. Bring a touch of nature indoors, enveloping your bedroom in a comforting and timeless embrace.",
  Pricing : `Rs: ${130} /sq.feet`,
 },{
  image: "https://img.freepik.com/premium-photo/large-luxury-modern-bright-interiors-room-illustration-3d-rendering_653967-3531.jpg?size=626&ext=jpg&ga=GA1.1.139193818.1699522362&semt=ais",
  Title: "Design No 1",
  SKU: "item-66",
  Category:`${wall} ${bedroom} ${grey} Tile`,
  Description: "Transform your bedroom into a serene retreat with these grey wall tiles. The versatile and calming hue creates a sophisticated backdrop for relaxation. The sleek, matte finish adds a modern touch, while the neutral color allows for effortless integration with various decor styles. Elevate your bedroom with a timeless, contemporary charm.",
  Pricing : `Rs: ${650} /sq.feet`,
 },{
  image: "https://img.freepik.com/premium-photo/concrete-wall-textur_38145-324.jpg?size=626&ext=jpg&ga=GA1.1.139193818.1699522362&semt=ais",
  Title: "Design No 2",
  SKU: "item-67",
  Category:`${wall} ${bedroom} ${grey} Tile`,
  Description: "Transform your bedroom into a serene retreat with these grey wall tiles. The versatile and calming hue creates a sophisticated backdrop for relaxation. The sleek, matte finish adds a modern touch, while the neutral color allows for effortless integration with various decor styles. Elevate your bedroom with a timeless, contemporary charm.",
  Pricing : `Rs: ${870} /sq.feet`,
 },{
  image: "https://img.freepik.com/free-photo/marble-textured-paper-background_53876-101832.jpg?w=740&t=st=1699535683~exp=1699536283~hmac=dc1a6b8dc6e2194d23ffdcaa4de9cc33777d0f0c826d0404a497c8d6b10e43a8",
  Title: "Design No 3",
  SKU: "item-68",
  Category:`${wall} ${bedroom} ${grey} Tile`,
  Description: "Transform your bedroom into a serene retreat with these grey wall tiles. The versatile and calming hue creates a sophisticated backdrop for relaxation. The sleek, matte finish adds a modern touch, while the neutral color allows for effortless integration with various decor styles. Elevate your bedroom with a timeless, contemporary charm.",
  Pricing : `Rs: ${467} /sq.feet`,
 },{
  image: "https://img.freepik.com/premium-photo/ceramics-tiles-porcelain-tiles-texture-design-psd-file_780399-11.jpg?size=626&ext=jpg&ga=GA1.1.139193818.1699522362&semt=ais",
  Title: "Design No 4",
  SKU: "item-69",
  Category:`${wall} ${bedroom} ${grey} Tile`,
  Description: "Transform your bedroom into a serene retreat with these grey wall tiles. The versatile and calming hue creates a sophisticated backdrop for relaxation. The sleek, matte finish adds a modern touch, while the neutral color allows for effortless integration with various decor styles. Elevate your bedroom with a timeless, contemporary charm.",
  Pricing : `Rs: ${347} /sq.feet`,
 },{
  image: "https://img.freepik.com/premium-photo/white-brick-wall-abstract-background-texture-new-clean-pattern-background_483511-1955.jpg?size=626&ext=jpg&ga=GA1.1.139193818.1699522362&semt=ais",
  Title: "Design No 5",
  SKU: "item-70",
  Category:`${wall} ${bedroom} ${grey} Tile`,
  Description: "Transform your bedroom into a serene retreat with these grey wall tiles. The versatile and calming hue creates a sophisticated backdrop for relaxation. The sleek, matte finish adds a modern touch, while the neutral color allows for effortless integration with various decor styles. Elevate your bedroom with a timeless, contemporary charm.",
  Pricing : `Rs: ${865} /sq.feet`,
 },{
  image: "https://img.freepik.com/premium-photo/futuristic-carbon-fiber-background-pattern-3d-rendering_355067-7971.jpg?size=626&ext=jpg&ga=GA1.1.139193818.1699522362&semt=ais",
  Title: "Design No 1",
  SKU: "item-71",
  Category:`${wall} ${bedroom} ${light_silver} Tile`,
  Description: "Create an aura of refined luxury in your bedroom with these light silver wall tiles. The subtle and elegant color scheme exudes sophistication, while the glossy finish adds a touch of glamour. Elevate your space with a luminous sheen, turning your bedroom into a haven of modern opulence and timeless style.",
  Pricing : `Rs: ${653} /sq.feet`,
 },{
  image: "https://img.freepik.com/premium-photo/beautiful-abstract-grunge-decorative-stucco-wall-background-art-rough-stylized-texture-banner-with-space-text_263512-6345.jpg?size=626&ext=jpg&ga=GA1.1.139193818.1699522362&semt=ais",
  Title: "Design No 2",
  SKU: "item-72",
  Category:`${wall} ${bedroom} ${light_silver} Tile`,
  Description: "Create an aura of refined luxury in your bedroom with these light silver wall tiles. The subtle and elegant color scheme exudes sophistication, while the glossy finish adds a touch of glamour. Elevate your space with a luminous sheen, turning your bedroom into a haven of modern opulence and timeless style.",
  Pricing : `Rs: ${653} /sq.feet`,
 },{
  image: "https://img.freepik.com/premium-photo/wall-with-white-square-pattern-words-cube-it_579873-3897.jpg?size=626&ext=jpg&ga=GA1.1.139193818.1699522362&semt=ais",
  Title: "Design No 3",
  SKU: "item-73",
  Category:`${wall} ${bedroom} ${light_silver} Tile`,
  Description: "Create an aura of refined luxury in your bedroom with these light silver wall tiles. The subtle and elegant color scheme exudes sophistication, while the glossy finish adds a touch of glamour. Elevate your space with a luminous sheen, turning your bedroom into a haven of modern opulence and timeless style.",
  Pricing : `Rs: ${764} /sq.feet`,
 },{
  image: "https://img.freepik.com/premium-photo/white-abstract-3d-texture-honeycomb-with-shadows-3d-render_295714-5590.jpg?size=626&ext=jpg&ga=GA1.1.139193818.1699522362&semt=ais",
  Title: "Design No 4",
  SKU: "item-74",
  Category:`${wall} ${bedroom} ${light_silver} Tile`,
  Description: "Create an aura of refined luxury in your bedroom with these light silver wall tiles. The subtle and elegant color scheme exudes sophistication, while the glossy finish adds a touch of glamour. Elevate your space with a luminous sheen, turning your bedroom into a haven of modern opulence and timeless style.",
  Pricing : `Rs: ${887} /sq.feet`,
 },{
  image: "https://img.freepik.com/premium-photo/seamless-metal-floor-plate-with-diamond-pattern-anti-slip-stainless-steel-sheet-plate_75563-5542.jpg?size=626&ext=jpg&ga=GA1.1.139193818.1699522362&semt=ais",
  Title: "Design No 5",
  SKU: "item-75",
  Category:`${wall} ${bedroom} ${light_silver} Tile`,
  Description: "Create an aura of refined luxury in your bedroom with these light silver wall tiles. The subtle and elegant color scheme exudes sophistication, while the glossy finish adds a touch of glamour. Elevate your space with a luminous sheen, turning your bedroom into a haven of modern opulence and timeless style.",
  Pricing : `Rs: ${464} /sq.feet`,
 },{
  image: "https://img.freepik.com/premium-photo/ceramic-tile-abstract-mosaic-ornamental-geometric-pattern_379858-610.jpg?size=626&ext=jpg&ga=GA1.1.139193818.1699522362&semt=ais",
  Title: "Design No 1",
  SKU: "item-76",
  Category:`${wall} ${commercial_spaces} ${ceramic} Tile`,
  Description: "Revitalize commercial spaces with these ceramic-colored wall tiles, striking the perfect balance between durability and aesthetics. The neutral hue adds a versatile backdrop, while the ceramic finish ensures resilience and easy maintenance. Elevate the ambiance of your commercial setting with a timeless and professional touch, blending practicality with refined design.",
  Pricing : `Rs: ${760} /sq.feet`,
 },{
  image: "https://img.freepik.com/premium-photo/brown-marble-tile-texture-interior-background_124507-13553.jpg?size=626&ext=jpg&ga=GA1.1.139193818.1699522362&semt=ais",
  Title: "Design No 2",
  SKU: "item-77",
  Category:`${wall} ${commercial_spaces} ${ceramic} Tile`,
  Description: "Revitalize commercial spaces with these ceramic-colored wall tiles, striking the perfect balance between durability and aesthetics. The neutral hue adds a versatile backdrop, while the ceramic finish ensures resilience and easy maintenance. Elevate the ambiance of your commercial setting with a timeless and professional touch, blending practicality with refined design.",
  Pricing : `Rs: ${340} /sq.feet`,
 },{
  image: "https://img.freepik.com/premium-photo/wall-with-white-panel-that-says-word-it_616652-146.jpg?size=626&ext=jpg&ga=GA1.1.139193818.1699522362&semt=ais",
  Title: "Design No 3",
  SKU: "item-78",
  Category:`${wall} ${commercial_spaces} ${ceramic} Tile`,
  Description: "Revitalize commercial spaces with these ceramic-colored wall tiles, striking the perfect balance between durability and aesthetics. The neutral hue adds a versatile backdrop, while the ceramic finish ensures resilience and easy maintenance. Elevate the ambiance of your commercial setting with a timeless and professional touch, blending practicality with refined design.",
  Pricing : `Rs: ${870} /sq.feet`,
 },{
  image: "https://img.freepik.com/premium-photo/3d-illustration-modern-geometric-wallpaper-white-tiles-with-wooden-walnut-decor_473931-132.jpg?size=626&ext=jpg&ga=GA1.1.139193818.1699522362&semt=ais",
  Title: "Design No 4",
  SKU: "item-79",
  Category:`${wall} ${commercial_spaces} ${ceramic} Tile`,
  Description: "Revitalize commercial spaces with these ceramic-colored wall tiles, striking the perfect balance between durability and aesthetics. The neutral hue adds a versatile backdrop, while the ceramic finish ensures resilience and easy maintenance. Elevate the ambiance of your commercial setting with a timeless and professional touch, blending practicality with refined design.",
  Pricing : `Rs: ${120} /sq.feet`,
 },{
  image: "https://img.freepik.com/premium-photo/wall-with-light-pattern-that-has-light-pattern-it_616652-186.jpg?size=626&ext=jpg&ga=GA1.1.139193818.1699522362&semt=ais",
  Title: "Design No 5",
  SKU: "item-80",
  Category:`${wall} ${commercial_spaces} ${ceramic} Tile`,
  Description: "Revitalize commercial spaces with these ceramic-colored wall tiles, striking the perfect balance between durability and aesthetics. The neutral hue adds a versatile backdrop, while the ceramic finish ensures resilience and easy maintenance. Elevate the ambiance of your commercial setting with a timeless and professional touch, blending practicality with refined design.",
  Pricing : `Rs: ${340} /sq.feet`,
 },{
  image: "https://img.freepik.com/premium-photo/common-vintage-white-ceramic-tiles-background-vertical-photo_429051-203.jpg?size=626&ext=jpg&ga=GA1.1.139193818.1699522362&semt=ais",
  Title: "Design No 1",
  SKU: "item-81",
  Category:`${wall} ${commercial_spaces} ${white} Tile`,
  Description: "Transform commercial spaces into sleek and professional environments with these white wall tiles. The clean and bright color palette creates an airy and inviting atmosphere. The glossy finish adds a touch of sophistication, providing a timeless backdrop for a variety of businesses, from modern offices to chic retail spaces.",
  Pricing : `Rs: ${980} /sq.feet`,
 },{
  image: "https://img.freepik.com/premium-photo/light-shadow-window-frame-with-3d-wall-panel-3d-rendering_39972-662.jpg?size=626&ext=jpg&ga=GA1.1.139193818.1699522362&semt=ais",
  Title: "Design No 2",
  SKU: "item-82",
  Category:`${wall} ${commercial_spaces} ${white} Tile`,
  Description: "Transform commercial spaces into sleek and professional environments with these white wall tiles. The clean and bright color palette creates an airy and inviting atmosphere. The glossy finish adds a touch of sophistication, providing a timeless backdrop for a variety of businesses, from modern offices to chic retail spaces.",
  Pricing : `Rs: ${650} /sq.feet`,
 },{
  image: "https://img.freepik.com/premium-photo/modern-tile-wall-design-abstract-background-3d-rendering_118019-1907.jpg?size=626&ext=jpg&ga=GA1.1.139193818.1699522362&semt=ais",
  Title: "Design No 3",
  SKU: "item-83",
  Category:`${wall} ${commercial_spaces} ${white} Tile`,
  Description: "Transform commercial spaces into sleek and professional environments with these white wall tiles. The clean and bright color palette creates an airy and inviting atmosphere. The glossy finish adds a touch of sophistication, providing a timeless backdrop for a variety of businesses, from modern offices to chic retail spaces.",
  Pricing : `Rs: ${567} /sq.feet`,
 },{
  image: "https://img.freepik.com/premium-photo/modern-tile-wall-darkness-background-design-3d-rendering_118019-1981.jpg?size=626&ext=jpg&ga=GA1.1.139193818.1699522362&semt=ais",
  Title: "Design No 4",
  SKU: "item-84",
  Category:`${wall} ${commercial_spaces} ${white} Tile`,
  Description: "Transform commercial spaces into sleek and professional environments with these white wall tiles. The clean and bright color palette creates an airy and inviting atmosphere. The glossy finish adds a touch of sophistication, providing a timeless backdrop for a variety of businesses, from modern offices to chic retail spaces.",
  Pricing : `Rs: ${980} /sq.feet`,
 },{
  image: "https://img.freepik.com/premium-photo/white-brick-wall-texture-background-with-space-text_33867-161.jpg?size=626&ext=jpg&ga=GA1.1.139193818.1699522362&semt=ais",
  Title: "Design No 5",
  SKU: "item-85",
  Category:`${wall} ${commercial_spaces} ${white} Tile`,
  Description: "Transform commercial spaces into sleek and professional environments with these white wall tiles. The clean and bright color palette creates an airy and inviting atmosphere. The glossy finish adds a touch of sophistication, providing a timeless backdrop for a variety of businesses, from modern offices to chic retail spaces.",
  Pricing : `Rs: ${240} /sq.feet`,
 },{
  image: "https://img.freepik.com/premium-photo/abstract-seamless-mosaic-pattern-ceramic-tile-interior_379858-1932.jpg?size=626&ext=jpg&ga=GA1.1.139193818.1699522362&semt=ais",
  Title: "Design No 1",
  SKU: "item-86",
  Category:`${wall} ${commercial_spaces} ${grey} Tile`,
  Description: "Elevate your commercial space with these grey wall tiles, striking the perfect balance between modernity and versatility. The cool and neutral tones create a sophisticated ambiance, while the matte finish adds a touch of contemporary elegance. These tiles offer a timeless aesthetic, seamlessly complementing various design styles in commercial settings.",
  Pricing : `Rs: ${540} /sq.feet`,
 },{
  image: "https://img.freepik.com/premium-photo/black-white-wood-seamless-texture_924688-1439.jpg?size=626&ext=jpg&ga=GA1.1.139193818.1699522362&semt=ais",
  Title: "Design No 2",
  SKU: "item-87",
  Category:`${wall} ${commercial_spaces} ${grey} Tile`,
  Description: "Elevate your commercial space with these grey wall tiles, striking the perfect balance between modernity and versatility. The cool and neutral tones create a sophisticated ambiance, while the matte finish adds a touch of contemporary elegance. These tiles offer a timeless aesthetic, seamlessly complementing various design styles in commercial settings.",
  Pricing : `Rs: ${476} /sq.feet`,
 },{
  image: "https://img.freepik.com/premium-photo/background-dark-decorative-concrete-slabs_88088-293.jpg?size=626&ext=jpg&ga=GA1.1.139193818.1699522362&semt=ais",
  Title: "Design No 3",
  SKU: "item-88",
  Category:`${wall} ${commercial_spaces} ${grey} Tile`,
  Description: "Elevate your commercial space with these grey wall tiles, striking the perfect balance between modernity and versatility. The cool and neutral tones create a sophisticated ambiance, while the matte finish adds a touch of contemporary elegance. These tiles offer a timeless aesthetic, seamlessly complementing various design styles in commercial settings.",
  Pricing : `Rs: ${760} /sq.feet`,
 },{
  image: "https://img.freepik.com/premium-photo/close-up-grey-marble-textured-background_218148-1864.jpg?size=626&ext=jpg&ga=GA1.1.139193818.1699522362&semt=ais",
  Title: "Design No 4",
  SKU: "item-89",
  Category:`${wall} ${commercial_spaces} ${grey} Tile`,
  Description: "Elevate your commercial space with these grey wall tiles, striking the perfect balance between modernity and versatility. The cool and neutral tones create a sophisticated ambiance, while the matte finish adds a touch of contemporary elegance. These tiles offer a timeless aesthetic, seamlessly complementing various design styles in commercial settings.",
  Pricing : `Rs: ${340} /sq.feet`,
 },{
  image: "https://img.freepik.com/premium-photo/grey-texture-made-tiles_174699-433.jpg?size=626&ext=jpg&ga=GA1.1.139193818.1699522362&semt=ais",
  Title: "Design No 5",
  SKU: "item-90",
  Category:`${wall} ${commercial_spaces} ${grey} Tile`,
  Description: "Elevate your commercial space with these grey wall tiles, striking the perfect balance between modernity and versatility. The cool and neutral tones create a sophisticated ambiance, while the matte finish adds a touch of contemporary elegance. These tiles offer a timeless aesthetic, seamlessly complementing various design styles in commercial settings.",
  Pricing : `Rs: ${920} /sq.feet`,
 },{
  image: "https://img.freepik.com/free-photo/3d-concrete-interior-with-architectural-columns-structures_1048-17295.jpg?w=900&t=st=1699465493~exp=1699466093~hmac=9d4dfdb6d29ac0d68576a6b32c7195d5aa0998046b4f5802e2743214f7ee7ae5",
  Title: "Design No 1",
  SKU: "item-91",
  Category:`${floor} ${bathroom} ${black} Tile`,
  Description: "Elevate your bathroom with our sleek and versatile black floor tiles. Their classic design exudes sophistication, while their durable and easy-to-maintain surface ensures lasting beauty in your space. Transform your bathroom into a contemporary oasis.",
  Pricing : `Rs: ${929} /sq.feet`,
},{
  image: "https://img.freepik.com/premium-photo/empty-room-with-old-background-shadows_323609-3.jpg?w=900",
  Title: "Design No 2",
  SKU: "item-92",
  Category:`${floor} ${bathroom} ${black} Tile`,
  Description: "Elevate your bathroom with our sleek and versatile black floor tiles. Their classic design exudes sophistication, while their durable and easy-to-maintain surface ensures lasting beauty in your space. Transform your bathroom into a contemporary oasis.",
  Pricing : `Rs: ${945} /sq.feet`,
},{
  image: "https://img.freepik.com/premium-photo/ancient-texture-background_1459-1809.jpg?w=740",
  Title: "Design No 3",
  SKU: "item-93",
  Category:`${floor} ${bathroom} ${black} Tile`,
  Description: "Elevate your bathroom with our sleek and versatile black floor tiles. Their classic design exudes sophistication, while their durable and easy-to-maintain surface ensures lasting beauty in your space. Transform your bathroom into a contemporary oasis.",
  Pricing : `Rs: ${939} /sq.feet`,
},{
  image: "https://img.freepik.com/free-photo/full-frame-black-wooden-stripes_23-2148123633.jpg?w=740&t=st=1699465549~exp=1699466149~hmac=405c550ecb4b2c20fefe8e4386f3115e97369db8064018bb38e0dc8abb6d0f10",
  Title: "Design No 4",
  SKU: "item-94",
  Category:`${floor} ${bathroom} ${black} Tile`,
  Description: "Elevate your bathroom with our sleek and versatile black floor tiles. Their classic design exudes sophistication, while their durable and easy-to-maintain surface ensures lasting beauty in your space. Transform your bathroom into a contemporary oasis.",
  Pricing : `Rs: ${939} /sq.feet`,
},{
  image: "https://img.freepik.com/free-photo/oxide-steel-texture_1194-8710.jpg?w=740&t=st=1699465568~exp=1699466168~hmac=cb9515b6a7891781dc461d7f091824a692d7578109c3ea493b5c1544dfec13fa",
  Title: "Design No 5",
  SKU: "item-95",
  Category:`${floor} ${bathroom} ${black} Tile`,
  Description: "Elevate your bathroom with our sleek and versatile black floor tiles. Their classic design exudes sophistication, while their durable and easy-to-maintain surface ensures lasting beauty in your space. Transform your bathroom into a contemporary oasis.",
  Pricing : `Rs: ${959} /sq.feet`,
},{
  image: "https://img.freepik.com/premium-vector/brick-stone-pavement_52465-241.jpg?w=740",
  Title: "Design No 1",
  SKU: "item-96",
  Category:`${floor} ${bathroom} ${grey} Tile`,
  Description: "Elevate your bathroom with our sleek and versatile black floor tiles. Their classic design exudes sophistication, while their durable and easy-to-maintain surface ensures lasting beauty in your space. Transform your bathroom into a contemporary oasis.",
  Pricing : `Rs: ${359} /sq.feet`,
},{
  image: "https://img.freepik.com/free-photo/medium-square-brick-wall_1194-7397.jpg?w=740&t=st=1699465913~exp=1699466513~hmac=dbd06f86512bcf54ac4a36f55267a095c66ad8c184213e485596989147cfb42azxa",
  Title: "Design No 2",
  SKU: "item-97",
  Category:`${floor} ${bathroom} ${grey} Tile`,
  Description: "Elevate your bathroom with our sleek and versatile black floor tiles. Their classic design exudes sophistication, while their durable and easy-to-maintain surface ensures lasting beauty in your space. Transform your bathroom into a contemporary oasis.",
  Pricing : `Rs: ${879} /sq.feet`,
},{
  image: "https://img.freepik.com/premium-photo/concrete-wall-textur_38145-324.jpg?w=740",
  Title: "Design No 3",
  SKU: "item-98",
  Category:`${floor} ${bathroom} ${grey} Tile`,
  Description: "Elevate your bathroom with our sleek and versatile black floor tiles. Their classic design exudes sophistication, while their durable and easy-to-maintain surface ensures lasting beauty in your space. Transform your bathroom into a contemporary oasis.",
  Pricing : `Rs: ${359} /sq.feet`,
},{
  image: "https://img.freepik.com/free-photo/vintage-stained-wooden-wall-background-texture_23-2148283331.jpg?w=740&t=st=1699466016~exp=1699466616~hmac=97a2a4139f1d181103c86be18ce31b6a7cfff61e39a8e8345137d819feddbbd5",
  Title: "Design No 4",
  SKU: "item-99",
  Category:`${floor} ${bathroom} ${grey} Tile`,
  Description: "Elevate your bathroom with our sleek and versatile black floor tiles. Their classic design exudes sophistication, while their durable and easy-to-maintain surface ensures lasting beauty in your space. Transform your bathroom into a contemporary oasis.",
  Pricing : `Rs: ${959} /sq.feet`,
},{
  image: "https://img.freepik.com/free-photo/urban-wall-surface_23-2148107019.jpg?w=740&t=st=1699466041~exp=1699466641~hmac=d9a31285a31ae88c6dedcf226176674b4bec75802c18bd8f495cf26e32127bfc",
  Title: "Design No 5",
  SKU: "item-100",
  Category:`${floor} ${bathroom} ${grey} Tile`,
  Description: "Elevate your bathroom with our sleek and versatile black floor tiles. Their classic design exudes sophistication, while their durable and easy-to-maintain surface ensures lasting beauty in your space. Transform your bathroom into a contemporary oasis.",
  Pricing : `Rs: ${959} /sq.feet`,
},{
  image: "https://img.freepik.com/free-photo/abstract-colorful-geometric-pattern-orange-yellow-red-stoneware-mosaic-texture-background-modern-style-wall-background_1258-72202.jpg?w=740&t=st=1699469121~exp=1699469721~hmac=a1370dd9864083e11993ee29450f24dd049912f3d2fbcb5f293ef498e09c72e1",
  Title: "Design No 1",
  SKU: "item-101",
  Category:`${floor} ${bathroom} ${light_orange} Tile`,
  Description: "Elevate your bathroom with our sleek and versatile black floor tiles. Their classic design exudes sophistication, while their durable and easy-to-maintain surface ensures lasting beauty in your space. Transform your bathroom into a contemporary oasis.",
  Pricing : `Rs: ${389} /sq.feet`,
},{
  image: "https://img.freepik.com/free-photo/decoration-colorful-glass-mosaic-art-abstract-wall-background_1258-71964.jpg?w=740&t=st=1699469150~exp=1699469750~hmac=a7edda49ee0bcba3af545d2e377bee3299bf429e531d0830e3a3416403ba2b52",
  Title: "Design No 2",
  SKU: "item-102",
  Category:`${floor} ${bathroom} ${light_orange} Tile`,
  Description: "Elevate your bathroom with our sleek and versatile black floor tiles. Their classic design exudes sophistication, while their durable and easy-to-maintain surface ensures lasting beauty in your space. Transform your bathroom into a contemporary oasis.",
  Pricing : `Rs: ${199} /sq.feet`,
},{
  image: "https://img.freepik.com/premium-vector/abstract-background-translucent-rectangles-white-orange-colors_444390-15146.jpg?w=900",
  Title: "Design No 3",
  SKU: "item-103",
  Category:`${floor} ${bathroom} ${light_orange} Tile`,
  Description: "Elevate your bathroom with our sleek and versatile black floor tiles. Their classic design exudes sophistication, while their durable and easy-to-maintain surface ensures lasting beauty in your space. Transform your bathroom into a contemporary oasis.",
  Pricing : `Rs: ${639} /sq.feet`,
},{
  image: "https://img.freepik.com/premium-photo/abstract-colorful-background_196038-6402.jpg?w=740",
  Title: "Design No 4",
  SKU: "item-104",
  Category:`${floor} ${bathroom} ${light_orange} Tile`,
  Description: "Elevate your bathroom with our sleek and versatile black floor tiles. Their classic design exudes sophistication, while their durable and easy-to-maintain surface ensures lasting beauty in your space. Transform your bathroom into a contemporary oasis.",
  Pricing : `Rs: ${949} /sq.feet`,
},{
  image: "https://img.freepik.com/free-photo/abstract-colorful-geometric-pattern-orange-yellow-red-stoneware-mosaic-texture-background-modern-style-wall-background_1258-72207.jpg?w=740&t=st=1699469216~exp=1699469816~hmac=a1c6358bc8372a9f1788fc6565aae931669cb423f36b6a92c11d9ee8a2e01f96",
  Title: "Design No 5",
  SKU: "item-105",
  Category:`${floor} ${bathroom} ${light_orange} Tile`,
  Description: "Elevate your bathroom with our sleek and versatile black floor tiles. Their classic design exudes sophistication, while their durable and easy-to-maintain surface ensures lasting beauty in your space. Transform your bathroom into a contemporary oasis.",
  Pricing : `Rs: ${249} /sq.feet`,
},{
  image: "https://img.freepik.com/free-photo/modern-stone-wall_23-2147986488.jpg?w=740&t=st=1699513370~exp=1699513970~hmac=d48ea44daf53e3abda2ce7ef1a9499a7236b5d4976336bdbd7f9507e321718e2",
  Title: "Design No 1",
  SKU: "item-106",
  Category:`${floor} ${outdoor} ${grey_white} Tile`,
  Description: "Transform your outdoor space with our durable and stylish outdoor floor tiles. Engineered for all seasons, these tiles combine functionality with aesthetics, providing a slip-resistant surface that withstands weather elements",
  Pricing : `Rs: ${649} /sq.feet`,
},{
  image: "https://img.freepik.com/free-photo/rock-texture_1339-1300.jpg?w=740&t=st=1699513387~exp=1699513987~hmac=9c43120acd148f8f31d77086be7b9ba6b6ea8a06ae5eab498414d9f03f332953",
  Title: "Design No 2",
  SKU: "item-107",
  Category:`${floor} ${outdoor} ${grey_white} Tile`,
  Description: "Transform your outdoor space with our durable and stylish outdoor floor tiles. Engineered for all seasons, these tiles combine functionality with aesthetics, providing a slip-resistant surface that withstands weather elements",
  Pricing : `Rs: ${959} /sq.feet`,
},{
  image: "https://img.freepik.com/free-photo/gray-grid-cement-textured-wall-background_53876-101724.jpg?w=740&t=st=1699513404~exp=1699514004~hmac=9266e3f0b4823d7153024c0976e4ad92b47c220446b92d84399910bd535eb5d5",
  Title: "Design No 3",
  SKU: "item-108",
  Category:`${floor} ${outdoor} ${grey_white} Tile`,
  Description: "Transform your outdoor space with our durable and stylish outdoor floor tiles. Engineered for all seasons, these tiles combine functionality with aesthetics, providing a slip-resistant surface that withstands weather elements",
  Pricing : `Rs: ${479} /sq.feet`,
},{
  image: "https://img.freepik.com/premium-photo/wall-tiles-background_134070-34.jpg?w=740",
  Title: "Design No 4",
  SKU: "item-109",
  Category:`${floor} ${outdoor} ${grey_white} Tile`,
  Description: "Transform your outdoor space with our durable and stylish outdoor floor tiles. Engineered for all seasons, these tiles combine functionality with aesthetics, providing a slip-resistant surface that withstands weather elements",
  Pricing : `Rs: ${949} /sq.feet`,
},{
  image: "https://img.freepik.com/premium-photo/vintage-textured-brick-wall_480962-11292.jpg?w=900",
  Title: "Design No 5",
  SKU: "item-110",
  Category:`${floor} ${outdoor} ${grey_white} Tile`,
  Description: "Transform your outdoor space with our durable and stylish outdoor floor tiles. Engineered for all seasons, these tiles combine functionality with aesthetics, providing a slip-resistant surface that withstands weather elements",
  Pricing : `Rs: ${279} /sq.feet`,
},{
  image: "https://img.freepik.com/free-photo/pattern-red-material-block-background_1253-632.jpg?w=740&t=st=1699513662~exp=1699514262~hmac=3ee3ea47afe931815427ae3bdc720634fd4ecee14bc06a734f05cecb6b8606ae",
  Title: "Design No 1",
  SKU: "item-111",
  Category:`${floor} ${outdoor} ${red_clay} Tile`,
  Description: "Transform your outdoor space with our durable and stylish outdoor floor tiles. Engineered for all seasons, these tiles combine functionality with aesthetics, providing a slip-resistant surface that withstands weather elements",
  Pricing : `Rs: ${169} /sq.feet`,
},{
  image: "https://img.freepik.com/free-photo/floor-tiles-faience-kitchen-bathroom-design_23-2148283276.jpg?w=740&t=st=1699513683~exp=1699514283~hmac=c18c9146c39d6a190f2404a46dd68bdb20eb9352a4b0ada0c98e0a382a4507ca",
  Title: "Design No 2",
  SKU: "item-112",
  Category:`${floor} ${outdoor} ${red_clay} Tile`,
  Description: "Transform your outdoor space with our durable and stylish outdoor floor tiles. Engineered for all seasons, these tiles combine functionality with aesthetics, providing a slip-resistant surface that withstands weather elements",
  Pricing : `Rs: ${299} /sq.feet`,
},{
  image: "https://img.freepik.com/free-photo/hollow-brick-construction-internal-external-walls-buildings-unloaded-structures-pallets-goods-stock-construction-repair-delivery-sale-building-materials_166373-3215.jpg?w=740&t=st=1699513700~exp=1699514300~hmac=f71180d4e01812692d0e75ef3fd92b650eff91582bb0611291e6b37090f77bcd",
  Title: "Design No 3",
  SKU: "item-113",
  Category:`${floor} ${outdoor} ${red_clay} Tile`,
  Description: "Transform your outdoor space with our durable and stylish outdoor floor tiles. Engineered for all seasons, these tiles combine functionality with aesthetics, providing a slip-resistant surface that withstands weather elements",
  Pricing : `Rs: ${959} /sq.feet`,
},{
  image: "https://img.freepik.com/free-photo/mediterranean-tiles-background_24837-633.jpg?w=740&t=st=1699513722~exp=1699514322~hmac=15e457087e4fb84996b8347b736eac2271e1d497d121894efee758cd667cf115",
  Title: "Design No 4",
  SKU: "item-114",
  Category:`${floor} ${outdoor} ${red_clay} Tile`,
  Description: "Transform your outdoor space with our durable and stylish outdoor floor tiles. Engineered for all seasons, these tiles combine functionality with aesthetics, providing a slip-resistant surface that withstands weather elements",
  Pricing : `Rs: ${389} /sq.feet`,
},{
  image: "https://img.freepik.com/premium-photo/texture-wall-covered-with-tiles_285336-1745.jpg?w=740",
  Title: "Design No 5",
  SKU: "item-115",
  Category:`${floor} ${outdoor} ${red_clay} Tile`,
  Description: "Transform your outdoor space with our durable and stylish outdoor floor tiles. Engineered for all seasons, these tiles combine functionality with aesthetics, providing a slip-resistant surface that withstands weather elements",
  Pricing : `Rs: ${489} /sq.feet`,
},{
  image: "https://img.freepik.com/free-photo/flat-lay-abstract-metal-wallpaper-close-up_23-2148859882.jpg?w=740&t=st=1699514114~exp=1699514714~hmac=6c2c7e270566a0ac6b48b8e056b1f68f5414d735b9474487737ca67042310fca",
  Title: "Design No 1",
  SKU: "item-116",
  Category:`${floor} ${outdoor} ${moon_white} Tile`,
  Description: "Transform your outdoor space with our durable and stylish outdoor floor tiles. Engineered for all seasons, these tiles combine functionality with aesthetics, providing a slip-resistant surface that withstands weather elements",
  Pricing : `Rs: ${469} /sq.feet`,
},{
  image: "https://img.freepik.com/premium-photo/clean-tile-wall-bathroom-background_700226-1000.jpg?w=740",
  Title: "Design No 2",
  SKU: "item-117",
  Category:`${floor} ${outdoor} ${moon_white} Tile`,
  Description: "Transform your outdoor space with our durable and stylish outdoor floor tiles. Engineered for all seasons, these tiles combine functionality with aesthetics, providing a slip-resistant surface that withstands weather elements",
  Pricing : `Rs: ${489} /sq.feet`,
},{
  image: "https://img.freepik.com/free-photo/tiled-stones_1194-5322.jpg?w=740&t=st=1699514144~exp=1699514744~hmac=4f4e03fedf8c7dc527add6b7d07719915ab9e02f6e83be085e19a4cb0dc1c70e",
  Title: "Design No 3",
  SKU: "item-118",
  Category:`${floor} ${outdoor} ${moon_white} Tile`,
  Description: "Transform your outdoor space with our durable and stylish outdoor floor tiles. Engineered for all seasons, these tiles combine functionality with aesthetics, providing a slip-resistant surface that withstands weather elements",
  Pricing : `Rs: ${199} /sq.feet`,
},{
  image: "https://img.freepik.com/premium-photo/wall-oval-round-stone_320880-2975.jpg?w=740",
  Title: "Design No 4",
  SKU: "item-119",
  Category:`${floor} ${outdoor} ${moon_white} Tile`,
  Description: "Transform your outdoor space with our durable and stylish outdoor floor tiles. Engineered for all seasons, these tiles combine functionality with aesthetics, providing a slip-resistant surface that withstands weather elements",
  Pricing : `Rs: ${289} /sq.feet`,
},{
  image: "https://img.freepik.com/premium-vector/seamless-pattern-with-modern-vertical-rectangular-white-tiles-realistic-texture-illustration_198278-515.jpg?w=740",
  Title: "Design No 5",
  SKU: "item-120",
  Category:`${floor} ${outdoor} ${moon_white} Tile`,
  Description: "Transform your outdoor space with our durable and stylish outdoor floor tiles. Engineered for all seasons, these tiles combine functionality with aesthetics, providing a slip-resistant surface that withstands weather elements",
  Pricing : `Rs: ${469} /sq.feet`,
},{
  image: "https://img.freepik.com/free-photo/close-up-black-marble-textured-background_53876-63511.jpg?w=740&t=st=1699514628~exp=1699515228~hmac=68bb8b590fa0cea2fd6867b3946a94e954f8861037a1f0307fe8308106dfb60d",
  Title: "Design No 1",
  SKU: "item-121",
  Category:`${floor} ${commercial_spaces} ${ceramic} Tile`,
  Description: "Elevate your commercial space with our premium floor tiles, marrying form and function seamlessly. Designed for high-traffic areas, these tiles boast durability without compromising on style..",
  Pricing : `Rs: ${449} /sq.feet`,
},{
  image: "https://img.freepik.com/premium-photo/tilers-hands-are-installing-ceramic-tile_191163-965.jpg?w=740",
  Title: "Design No 2",
  SKU: "item-122",
  Category:`${floor} ${commercial_spaces} ${ceramic} Tile`,
  Description: " Elevate your commercial space with our premium floor tiles, marrying form and function seamlessly. Designed for high-traffic areas, these tiles boast durability without compromising on style.",
  Pricing : `Rs: ${499} /sq.feet`,
},{
  image: "https://img.freepik.com/free-photo/still-life-putting-up-decorative-vinyls_23-2149683463.jpg?w=740&t=st=1699514672~exp=1699515272~hmac=8b084c3da2555b5dec38bbfabda50d716cdb1ff86bfd21fc23e885a101b37f3c",
  Title: "Design No 3",
  SKU: "item-123",
  Category:`${floor} ${commercial_spaces} ${ceramic} Tile`,
  Description: "Elevate your commercial space with our premium floor tiles, marrying form and function seamlessly. Designed for high-traffic areas, these tiles boast durability without compromising on style.",
  Pricing : `Rs: ${429} /sq.feet`,
},{
  image: "https://img.freepik.com/premium-photo/contemporary-contracted-style-solid-geometry-splicing-patterns_662067-161.jpg?w=826",
  Title: "Design No 4",
  SKU: "item-124",
  Category:`${floor} ${commercial_spaces} ${ceramic} Tile`,
  Description: "Elevate your commercial space with our premium floor tiles, marrying form and function seamlessly. Designed for high-traffic areas, these tiles boast durability without compromising on style.",
  Pricing : `Rs: ${449} /sq.feet`,
},{
  image: "https://img.freepik.com/free-photo/still-life-putting-up-decorative-vinyls_23-2149683458.jpg?w=740&t=st=1699514711~exp=1699515311~hmac=d03f0c686427dbd7946f4df40af360cf82e47a05e9f56806aed02c9c321b2e09",
  Title: "Design No 5",
  SKU: "item-125",
  Category:`${floor} ${commercial_spaces} ${ceramic} Tile`,
  Description: "Elevate your commercial space with our premium floor tiles, marrying form and function seamlessly. Designed for high-traffic areas, these tiles boast durability without compromising on style.",
  Pricing : `Rs: ${489} /sq.feet`,
},{
  image: "https://img.freepik.com/free-vector/simple-gray-triangular-background_53876-95732.jpg?w=900&t=st=1699515364~exp=1699515964~hmac=11776d6e8ae776ee467d3b04b0c72a645dda065cba3aecee637226c267632250",
  Title: "Design No 1",
  SKU: "item-126",
  Category:`${floor} ${commercial_spaces} ${white} Tile`,
  Description: "Elevate your commercial space with our premium floor tiles, marrying form and function seamlessly. Designed for high-traffic areas, these tiles boast durability without compromising on style.",
  Pricing : `Rs: ${499} /sq.feet`,
},{
  image: "https://img.freepik.com/premium-vector/white-tile-geometric-texture-seamless-vector-background_547648-651.jpg?w=740",
  Title: "Design No 2",
  SKU: "item-127",
  Category:`${floor} ${commercial_spaces} ${white} Tile`,
  Description: "Elevate your commercial space with our premium floor tiles, marrying form and function seamlessly. Designed for high-traffic areas, these tiles boast durability without compromising on style.",
  Pricing : `Rs: ${488} /sq.feet`,
},{
  image: "https://img.freepik.com/premium-photo/modern-white-tile-background-texture-square-ceramic-mosaic-home-kitchen-concept-3d-illustration_73274-788.jpg?w=740",
  Title: "Design No 3",
  SKU: "item-128",
  Category:`${floor} ${commercial_spaces} ${white} Tile`,
  Description: "Elevate your commercial space with our premium floor tiles, marrying form and function seamlessly. Designed for high-traffic areas, these tiles boast durability without compromising on style.",
  Pricing : `Rs: ${487} /sq.feet`,
},{
  image: "https://img.freepik.com/premium-photo/3d-render-empty-bathroomxa_645691-2907.jpg?w=740",
  Title: "Design No 4",
  SKU: "item-129",
  Category:`${floor} ${commercial_spaces} ${white} Tile`,
  Description: "Elevate your commercial space with our premium floor tiles, marrying form and function seamlessly. Designed for high-traffic areas, these tiles boast durability without compromising on style.",
  Pricing : `Rs: ${486} /sq.feet`,
},{
  image: "https://img.freepik.com/premium-photo/empty-white-clean-ceramic-tile-wall-floor-background-minimal-simple-style-interior-backdrop_7189-2869.jpg?w=826",
  Title: "Design No 5",
  SKU: "item-130",
  Category:`${floor} ${commercial_spaces} ${white} Tile`,
  Description: "Elevate your commercial space with our premium floor tiles, marrying form and function seamlessly. Designed for high-traffic areas, these tiles boast durability without compromising on style.",
  Pricing : `Rs: ${485} /sq.feet`,
},{
  image: "https://img.freepik.com/premium-vector/brick-wall_648765-3977.jpg?w=360",
  Title: "Design No 1",
  SKU: "item-131",
  Category:`${floor} ${commercial_spaces} ${grey} Tile`,
  Description: "Elevate your commercial space with our premium floor tiles, marrying form and function seamlessly. Designed for high-traffic areas, these tiles boast durability without compromising on style.",
  Pricing : `Rs: ${484} /sq.feet`,
},{
  image: "https://img.freepik.com/free-photo/stone-texture_1194-5592.jpg?w=740&t=st=1699515690~exp=1699516290~hmac=fda59459ed91025a0a7cad09f41a29a9bcdea04720067d9fe816460427ee7c34",
  Title: "Design No 2",
  SKU: "item-132",
  Category:`${floor} ${commercial_spaces} ${grey} Tile`,
  Description: "Elevate your commercial space with our premium floor tiles, marrying form and function seamlessly. Designed for high-traffic areas, these tiles boast durability without compromising on style.",
  Pricing : `Rs: ${482} /sq.feet`,
},{
  image: "https://img.freepik.com/free-photo/urban-wall-surface_23-2148107019.jpg?w=740&t=st=1699515710~exp=1699516310~hmac=c124bcaab43072186946ded451000191568dd26b1f00ff1423233f71bd35f9a8",
  Title: "Design No 3",
  SKU: "item-133",
  Category:`${floor} ${commercial_spaces} ${grey} Tile`,
  Description: "Elevate your commercial space with our premium floor tiles, marrying form and function seamlessly. Designed for high-traffic areas, these tiles boast durability without compromising on style.",
  Pricing : `Rs: ${481} /sq.feet`,
},{
  image: "https://img.freepik.com/free-photo/white-vintage-brick-wall_1194-5920.jpg?w=740&t=st=1699515728~exp=1699516328~hmac=7b6c70847ec1d095e134f89cdf612cab005b66ced94b6e8071725e335aba60bc",
  Title: "Design No 4",
  SKU: "item-134",
  Category:`${floor} ${commercial_spaces} ${grey} Tile`,
  Description: "Elevate your commercial space with our premium floor tiles, marrying form and function seamlessly. Designed for high-traffic areas, these tiles boast durability without compromising on style.",
  Pricing : `Rs: ${489} /sq.feet`,
},{
  image: "https://img.freepik.com/free-photo/rock-tile-texture_1339-6281.jpg?w=740&t=st=1699515746~exp=1699516346~hmac=79812a9b5b8ddd1bc64830dd214f858910afda7aa386b08ab09f2553dab28e88",
  Title: "Design No 5",
  SKU: "item-135",
  Category:`${floor} ${commercial_spaces} ${grey} Tile`,
  Description: "Elevate your commercial space with our premium floor tiles, marrying form and function seamlessly. Designed for high-traffic areas, these tiles boast durability without compromising on style.",
  Pricing : `Rs: ${189} /sq.feet`,
},{
  image: "https://img.freepik.com/free-photo/square-black-white_1203-674.jpg?w=740&t=st=1699516082~exp=1699516682~hmac=aa61bb32c8572cd50e58b55a360efbe688c9c67fbe6d102f771e4418c5851bd4",
  Title: "Design No 1",
  SKU: "item-136",
  Category:`${floor} ${kitchen} ${black_and_white} Tile`,
  Description: "Upgrade your kitchen with our exquisite floor tiles, blending practicality and charm seamlessly. Crafted for high-traffic areas, these tiles provide durability and easy maintenance. ",
  Pricing : `Rs: ${289} /sq.feet`,
},{
  image: "https://img.freepik.com/free-photo/black-white-plate-geometric-pattern-floor-minimalist-design_169016-25290.jpg?w=740&t=st=1699516096~exp=1699516696~hmac=01a4569e7a3e7bf67c5e36e59d7fc79ed0e3d114212e00864189c0f7502dddb0",
  Title: "Design No 2",
  SKU: "item-137",
  Category:`${floor} ${kitchen} ${black_and_white} Tile`,
  Description: "Upgrade your kitchen with our exquisite floor tiles, blending practicality and charm seamlessly. Crafted for high-traffic areas, these tiles provide durability and easy maintenance. ",
  Pricing : `Rs: ${389} /sq.feet`,
},{
  image: "https://img.freepik.com/free-photo/black-square-tiled-texture-background_53876-63561.jpg?w=740&t=st=1699516113~exp=1699516713~hmac=f06b16c93fc6a1ec5399c8633db938eabfb8455d093aac4af14113cce57c23e8",
  Title: "Design No 3",
  SKU: "item-138",
  Category:`${floor} ${kitchen} ${black_and_white} Tile`,
  Description: "Upgrade your kitchen with our exquisite floor tiles, blending practicality and charm seamlessly. Crafted for high-traffic areas, these tiles provide durability and easy maintenance. ",
  Pricing : `Rs: ${589} /sq.feet`,
},{
  image: "https://img.freepik.com/premium-photo/marble-wall-texture-different-shape-seamless-pattern_124507-12000.jpg?w=740",
  Title: "Design No 4",
  SKU: "item-139",
  Category:`${floor} ${kitchen} ${black_and_white} Tile`,
  Description: "Upgrade your kitchen with our exquisite floor tiles, blending practicality and charm seamlessly. Crafted for high-traffic areas, these tiles provide durability and easy maintenance. ",
  Pricing : `Rs: ${789} /sq.feet`,
},{
  image: "https://img.freepik.com/free-vector/black-white-geometric-background_1164-985.jpg?w=740&t=st=1699516149~exp=1699516749~hmac=cdde4e305cf4e256a58660ac3103b40205b9245c01ab4c1bd0354df9323f5de7",
  Title: "Design No 5",
  SKU: "item-140",
  Category:`${floor} ${kitchen} ${black_and_white} Tile`,
  Description: "Upgrade your kitchen with our exquisite floor tiles, blending practicality and charm seamlessly. Crafted for high-traffic areas, these tiles provide durability and easy maintenance. ",
  Pricing : `Rs: ${489} /sq.feet`,
},{
  image: "https://img.freepik.com/free-vector/black-squares-background_1051-1046.jpg?w=740&t=st=1699516322~exp=1699516922~hmac=06f71b142bed16b7be1d7c39287846180785ff83244dbb58a4d6859c316b274c",
  Title: "Design No 1",
  SKU: "item-141",
  Category:`${floor} ${kitchen} ${black} Tile`,
  Description: "Upgrade your kitchen with our exquisite floor tiles, blending practicality and charm seamlessly. Crafted for high-traffic areas, these tiles provide durability and easy maintenance. ",
  Pricing : `Rs: ${989} /sq.feet`,
},{
  image: "https://img.freepik.com/free-photo/old-fashioned-squared-shapes-texture_1194-5668.jpg?w=740&t=st=1699516343~exp=1699516943~hmac=8578fa109be7c0494c2be5a89eaf0b0601d0e53f2d2b068c3ad17a9dffff4640",
  Title: "Design No 2",
  SKU: "item-142",
  Category:`${floor} ${kitchen} ${black} Tile`,
  Description: "Upgrade your kitchen with our exquisite floor tiles, blending practicality and charm seamlessly. Crafted for high-traffic areas, these tiles provide durability and easy maintenance. ",
  Pricing : `Rs: ${489} /sq.feet`,
},{
  image: "https://img.freepik.com/free-photo/squared-black-wall_1194-6820.jpg?w=740&t=st=1699516360~exp=1699516960~hmac=848ea3d2d249bbd4794a855ab9eff65a559dacf51044582f0f54de98df8a4a27",
  Title: "Design No 3",
  SKU: "item-143",
  Category:`${floor} ${kitchen} ${black} Tile`,
  Description: "Upgrade your kitchen with our exquisite floor tiles, blending practicality and charm seamlessly. Crafted for high-traffic areas, these tiles provide durability and easy maintenance. ",
  Pricing : `Rs: ${485} /sq.feet`,
},{
  image: "https://img.freepik.com/free-photo/vignette-dark-gray-mosaic-tiles-textured-background_53876-101725.jpg?w=740&t=st=1699516376~exp=1699516976~hmac=490935acdf8c6bad48893bacd687e15d77110750289c3282ff7b1b8ab220e639",
  Title: "Design No 4",
  SKU: "item-144",
  Category:`${floor} ${kitchen} ${black} Tile`,
  Description: "Upgrade your kitchen with our exquisite floor tiles, blending practicality and charm seamlessly. Crafted for high-traffic areas, these tiles provide durability and easy maintenance. ",
  Pricing : `Rs: ${429} /sq.feet`,
},{
  image: "https://img.freepik.com/premium-photo/old-ceramic-tile-with-cement-texture-cement-concrete-stone-mosaic-tile_526818-3612.jpg?w=740",
  Title: "Design No 5",
  SKU: "item-145",
  Category:`${floor} ${kitchen} ${black} Tile`,
  Description: "Upgrade your kitchen with our exquisite floor tiles, blending practicality and charm seamlessly. Crafted for high-traffic areas, these tiles provide durability and easy maintenance. ",
  Pricing : `Rs: ${419} /sq.feet`,
},{
  image: "https://img.freepik.com/free-vector/white-elegant-texture-background_23-2148428927.jpg?w=740&t=st=1699516568~exp=1699517168~hmac=58366b54a953003fef41a8214583d2aa08ba3e60cb8ca406283d6b08b46cf7d5",
  Title: "Design No 1",
  SKU: "item-146",
  Category:`${floor} ${kitchen} ${white} Tile`,
  Description: "Upgrade your kitchen with our exquisite floor tiles, blending practicality and charm seamlessly. Crafted for high-traffic areas, these tiles provide durability and easy maintenance. ",
  Pricing : `Rs: ${483} /sq.feet`,
},{
  image: "https://img.freepik.com/free-photo/white-cubes-3d-background_23-2150505298.jpg?w=740&t=st=1699516588~exp=1699517188~hmac=2ba142102795b5695f7cb41a50b6cf503263cf98ee702362dd04f6e73bfb923e",
  Title: "Design No 2",
  SKU: "item-147",
  Category:`${floor} ${kitchen} ${white} Tile`,
  Description: "Upgrade your kitchen with our exquisite floor tiles, blending practicality and charm seamlessly. Crafted for high-traffic areas, these tiles provide durability and easy maintenance. ",
  Pricing : `Rs: ${483} /sq.feet`,
},{
  image: "https://img.freepik.com/free-photo/blank-stationery-concept-with-lot-business-cards_23-2147725129.jpg?w=740&t=st=1699516612~exp=1699517212~hmac=11eb7ce2bb6b29b74e6d45c24fab6133ce2507b2a0e84429b80bde1c1bacb552",
  Title: "Design No 3",
  SKU: "item-148",
  Category:`${floor} ${kitchen} ${white} Tile`,
  Description: "Upgrade your kitchen with our exquisite floor tiles, blending practicality and charm seamlessly. Crafted for high-traffic areas, these tiles provide durability and easy maintenance. ",
  Pricing : `Rs: ${489} /sq.feet`,
},{
  image: "https://img.freepik.com/free-vector/geometric-elegant-texture-background_23-2148430745.jpg?w=740&t=st=1699516630~exp=1699517230~hmac=831d2f3e60cbb290a46dc3e0c783678f9403ed038996f8a04be36da6d242e012",
  Title: "Design No 4",
  SKU: "item-149",
  Category:`${floor} ${kitchen} ${white} Tile`,
  Description: "Upgrade your kitchen with our exquisite floor tiles, blending practicality and charm seamlessly. Crafted for high-traffic areas, these tiles provide durability and easy maintenance. ",
  Pricing : `Rs: ${484} /sq.feet`,
},{
  image: "https://img.freepik.com/premium-photo/embossed-hexagon-resembling-honeycomb_52701-279.jpg?w=740",
  Title: "Design No 5",
  SKU: "item-150",
  Category:`${floor} ${kitchen} ${white} Tile`,
  Description: "Upgrade your kitchen with our exquisite floor tiles, blending practicality and charm seamlessly. Crafted for high-traffic areas, these tiles provide durability and easy maintenance. ",
  Pricing : `Rs: ${434} /sq.feet`,
},{
  image: "https://img.freepik.com/free-photo/marble-brown-patterned-texture-background-natural-pattern-color-design-abstract-marble-thailand_1253-1005.jpg?w=740&t=st=1699517881~exp=1699518481~hmac=2ee210dae54f652c117a1774ba7d6cdc9857e4324a88ad0e536dea9bedbe146f",
  Title: "Design No 1",
  SKU: "item-151",
  Category:`${floor} ${livingroom} ${cream} Tile`,
  Description: "Transform your living room into a haven of elegance with our luxurious floor tiles. Designed for both style and durability, these tiles effortlessly enhance your space. Choose from a variety of patterns and textures to create a warm and inviting atmosphere for unforgettable moments",
  Pricing : `Rs: ${645} /sq.feet`,
},{
  image: "https://img.freepik.com/free-photo/minimal-stone-structure-texture_23-2149041177.jpg?w=740&t=st=1699517897~exp=1699518497~hmac=63cc9ceadfd55c0d25c9593e15707a77d031a09b28ccd053e22b5fea8329266b",
  Title: "Design No 2",
  SKU: "item-152",
  Category:`${floor} ${livingroom} ${cream} Tile`,
  Description: "Transform your living room into a haven of elegance with our luxurious floor tiles. Designed for both style and durability, these tiles effortlessly enhance your space. Choose from a variety of patterns and textures to create a warm and inviting atmosphere for unforgettable moments",
  Pricing : `Rs: ${278} /sq.feet`,
},{
  image: "https://img.freepik.com/premium-photo/light-grunge-tile-background-wall-texture_124507-10452.jpg?w=740",
  Title: "Design No 3",
  SKU: "item-153",
  Category:`${floor} ${livingroom} ${cream} Tile`,
  Description: "Transform your living room into a haven of elegance with our luxurious floor tiles. Designed for both style and durability, these tiles effortlessly enhance your space. Choose from a variety of patterns and textures to create a warm and inviting atmosphere for unforgettable moments",
  Pricing : `Rs: ${977} /sq.feet`,
},{
  image: "https://img.freepik.com/free-photo/marble-brown-patterned-texture-background-natural-pattern-color-design-abstract-marble-thailand_1253-913.jpg?w=740&t=st=1699517929~exp=1699518529~hmac=b2494e328f7f272a32d4529aa9e2900cf76f48268eb3529fd4fd41d9292c1f8e",
  Title: "Design No 4",
  SKU: "item-154",
  Category:`${floor} ${livingroom} ${cream} Tile`,
  Description: "Transform your living room into a haven of elegance with our luxurious floor tiles. Designed for both style and durability, these tiles effortlessly enhance your space. Choose from a variety of patterns and textures to create a warm and inviting atmosphere for unforgettable moments",
  Pricing : `Rs: ${768} /sq.feet`,
},{
  image: "https://img.freepik.com/free-photo/rustic-beige-concrete-textured-background_53876-101716.jpg?w=740&t=st=1699517948~exp=1699518548~hmac=5426df249621fb39c023b52115167a4390a225e7babde011763840a686a0389a",
  Title: "Design No 5",
  SKU: "item-155",
  Category:`${floor} ${livingroom} ${cream} Tile`,
  Description: "Transform your living room into a haven of elegance with our luxurious floor tiles. Designed for both style and durability, these tiles effortlessly enhance your space. Choose from a variety of patterns and textures to create a warm and inviting atmosphere for unforgettable moments",
  Pricing : `Rs: ${645} /sq.feet`,
},{
  image: "https://img.freepik.com/free-vector/dark-seamless-pattern-with-hexagons-background_1108-496.jpg?w=740&t=st=1699518177~exp=1699518777~hmac=aaee90a7a34040bfeac276ce4a3e443e2a4b9897dca6cd52870bc08e22627849",
  Title: "Design No 1",
  SKU: "item-156",
  Category:`${floor} ${livingroom} ${black} Tile`,
  Description: "Transform your living room into a haven of elegance with our luxurious floor tiles. Designed for both style and durability, these tiles effortlessly enhance your space. Choose from a variety of patterns and textures to create a warm and inviting atmosphere for unforgettable moments",
  Pricing : `Rs: ${499} /sq.feet`,
},{
  image: "https://img.freepik.com/premium-photo/black-white-photo-wall-with-many-black-squares_662214-30980.jpg?w=740",
  Title: "Design No 2",
  SKU: "item-157",
  Category:`${floor} ${livingroom} ${black} Tile`,
  Description: "Transform your living room into a haven of elegance with our luxurious floor tiles. Designed for both style and durability, these tiles effortlessly enhance your space. Choose from a variety of patterns and textures to create a warm and inviting atmosphere for unforgettable moments",
  Pricing : `Rs: ${109} /sq.feet`,
},{
  image: "https://img.freepik.com/free-photo/dark-gray-stone-wall_1194-7031.jpg?w=740&t=st=1699518260~exp=1699518860~hmac=6a67a0cbdbe43b88f9454259a0a4c03e96f4c7481f13d1d58bcbbc6d046fb3bf",
  Title: "Design No 3",
  SKU: "item-158",
  Category:`${floor} ${livingroom} ${black} Tile`,
  Description: "Transform your living room into a haven of elegance with our luxurious floor tiles. Designed for both style and durability, these tiles effortlessly enhance your space. Choose from a variety of patterns and textures to create a warm and inviting atmosphere for unforgettable moments",
  Pricing : `Rs: ${389} /sq.feet`,
},{
  image: "https://img.freepik.com/free-vector/dark-square-grid-background_1409-1361.jpg?w=826&t=st=1699518285~exp=1699518885~hmac=c0647086f9d5d86ef6d61524a10eef4a219e13ed598e7415bceae78bb52caa74",
  Title: "Design No 4",
  SKU: "item-159",
  Category:`${floor} ${livingroom} ${black} Tile`,
  Description: "Transform your living room into a haven of elegance with our luxurious floor tiles. Designed for both style and durability, these tiles effortlessly enhance your space. Choose from a variety of patterns and textures to create a warm and inviting atmosphere for unforgettable moments",
  Pricing : `Rs: ${349} /sq.feet`,
},{
  image: "https://img.freepik.com/free-photo/close-up-black-marble-background_53876-63507.jpg?w=740&t=st=1699518454~exp=1699519054~hmac=7b843f6017de00f89a0b588538d74ce90a807781ebdf78700288be7df89dbe45",
  Title: "Design No 5",
  SKU: "item-160",
  Category:`${floor} ${livingroom} ${black} Tile`,
  Description: "Transform your living room into a haven of elegance with our luxurious floor tiles. Designed for both style and durability, these tiles effortlessly enhance your space. Choose from a variety of patterns and textures to create a warm and inviting atmosphere for unforgettable moments",
  Pricing : `Rs: ${879} /sq.feet`,
},{
  image: "https://img.freepik.com/free-photo/white-cubes-3d-background_23-2150505298.jpg?w=740&t=st=1699520240~exp=1699520840~hmac=3002bd92a94581959ab00d29f375f7132a0f6ab883e2ffc5714371bdb03e2735",
  Title: "Design No 1",
  SKU: "item-161",
  Category:`${floor} ${livingroom} ${white} Tile`,
  Description: "Transform your living room into a haven of elegance with our luxurious floor tiles. Designed for both style and durability, these tiles effortlessly enhance your space. Choose from a variety of patterns and textures to create a warm and inviting atmosphere for unforgettable moments",
  Pricing : `Rs: ${759} /sq.feet`,
},{
  image: "https://img.freepik.com/free-vector/white-abstract-background-3d-paper-style_23-2148387434.jpg?w=740&t=st=1699520260~exp=1699520860~hmac=bfffa36a12b9d678143730dcb49aa6ccba0c1535256544359f5c5605fb7bb040",
  Title: "Design No 2",
  SKU: "item-162",
  Category:`${floor} ${livingroom} ${white} Tile`,
  Description: "Transform your living room into a haven of elegance with our luxurious floor tiles. Designed for both style and durability, these tiles effortlessly enhance your space. Choose from a variety of patterns and textures to create a warm and inviting atmosphere for unforgettable moments",
  Pricing : `Rs: ${469} /sq.feet`,
},{
  image: "https://img.freepik.com/premium-photo/perspective-grid-line-background_256301-358.jpg?w=740",
  Title: "Design No 3",
  SKU: "item-163",
  Category:`${floor} ${livingroom} ${white} Tile`,
  Description: "Transform your living room into a haven of elegance with our luxurious floor tiles. Designed for both style and durability, these tiles effortlessly enhance your space. Choose from a variety of patterns and textures to create a warm and inviting atmosphere for unforgettable moments",
  Pricing : `Rs: ${749} /sq.feet`,
},{
  image: "https://img.freepik.com/premium-photo/white-ceramic-brick-tile-wall-modern-abstract-texture-background_7189-2878.jpg?w=740",
  Title: "Design No 4",
  SKU: "item-164",
  Category:`${floor} ${livingroom} ${white} Tile`,
  Description: "Transform your living room into a haven of elegance with our luxurious floor tiles. Designed for both style and durability, these tiles effortlessly enhance your space. Choose from a variety of patterns and textures to create a warm and inviting atmosphere for unforgettable moments",
  Pricing : `Rs: ${989} /sq.feet`,
},{
  image: "https://img.freepik.com/free-vector/abstract-shapes-background_1053-452.jpg?w=740&t=st=1699520316~exp=1699520916~hmac=0716797431aa67c700b64c421cc232b765f94af2d5bd5723dfd9b4cf1a4d5d30",
  Title: "Design No 5",
  SKU: "item-165",
  Category:`${floor} ${livingroom} ${white} Tile`,
  Description: "Transform your living room into a haven of elegance with our luxurious floor tiles. Designed for both style and durability, these tiles effortlessly enhance your space. Choose from a variety of patterns and textures to create a warm and inviting atmosphere for unforgettable moments",
  Pricing : `Rs: ${159} /sq.feet`,
},{
  image: "https://img.freepik.com/free-photo/brown-tiled-texture-background_87358-89.jpg?w=740&t=st=1699520540~exp=1699521140~hmac=1ac9a7ebbb8a42dd65369caddbebd55c0575511b9a95eee7ad8b58c5e7bef140",
  Title: "Design No 1",
  SKU: "item-166",
  Category:`${floor} ${bedroom} ${brown} Tile`,
  Description: "Indulge in comfort and style with our bedroom floor tiles. Radiating warmth and sophistication, these tiles are crafted for durability and easy maintenance. Choose from a selection of serene designs to create a cozy retreat that complements your personal haven seamlessly.",
  Pricing : `Rs: ${289} /sq.feet`,
},{
  image: "https://img.freepik.com/free-photo/colored-ceramic-stones-abstract-smooth-brown-mosiac-texture-abstract-ceramic-mosaic-adorned-building_1258-57194.jpg?w=740&t=st=1699520558~exp=1699521158~hmac=da35410a6f05861d76aa2975237791ba1712fd6b8bc7b0f52d6a135bf32c6200",
  Title: "Design No 2",
  SKU: "item-167",
  Category:`${floor} ${bedroom} ${brown} Tile`,
  Description: "Indulge in comfort and style with our bedroom floor tiles. Radiating warmth and sophistication, these tiles are crafted for durability and easy maintenance. Choose from a selection of serene designs to create a cozy retreat that complements your personal haven seamlessly.",
  Pricing : `Rs: ${369} /sq.feet`,
},{
  image: "https://img.freepik.com/premium-photo/wooden-texture-with-squares-background_488220-41776.jpg?w=740",
  Title: "Design No 3",
  SKU: "item-168",
  Category:`${floor} ${bedroom} ${brown} Tile`,
  Description: "Indulge in comfort and style with our bedroom floor tiles. Radiating warmth and sophistication, these tiles are crafted for durability and easy maintenance. Choose from a selection of serene designs to create a cozy retreat that complements your personal haven seamlessly.",
  Pricing : `Rs: ${479} /sq.feet`,
},{
  image: "https://img.freepik.com/free-photo/brown-marbled-stone-texture_53876-94003.jpg?w=740&t=st=1699520593~exp=1699521193~hmac=eb4acc948abecc5bdeb6cbde39940e879c1ef17324d57b4908bb463bd70598bb",
  Title: "Design No 4",
  SKU: "item-169",
  Category:`${floor} ${bedroom} ${brown} Tile`,
  Description: "Indulge in comfort and style with our bedroom floor tiles. Radiating warmth and sophistication, these tiles are crafted for durability and easy maintenance. Choose from a selection of serene designs to create a cozy retreat that complements your personal haven seamlessly.",
  Pricing : `Rs: ${764} /sq.feet`,
},{
  image: "https://img.freepik.com/free-photo/grunge-tile-background_1048-9855.jpg?w=740&t=st=1699520620~exp=1699521220~hmac=11aa4025a67ee100b8fa85ff73b460b23297d089992018b54abc521a6bf88ebc",
  Title: "Design No 5",
  SKU: "item-170",
  Category:`${floor} ${bedroom} ${brown} Tile`,
  Description: "Indulge in comfort and style with our bedroom floor tiles. Radiating warmth and sophistication, these tiles are crafted for durability and easy maintenance. Choose from a selection of serene designs to create a cozy retreat that complements your personal haven seamlessly.",
  Pricing : `Rs: ${867} /sq.feet`,
},{
  image: "https://img.freepik.com/free-photo/old-fashioned-squared-shapes-texture_1194-5666.jpg?w=740&t=st=1699520873~exp=1699521473~hmac=084f1b3ea6102a964f6bd30a02450f620e0ada0c32ed9cefe80f1a47e8cda1b9",
  Title: "Design No 1",
  SKU: "item-171",
  Category:`${floor} ${bedroom} ${grey} Tile`,
  Description: "Indulge in comfort and style with our bedroom floor tiles. Radiating warmth and sophistication, these tiles are crafted for durability and easy maintenance. Choose from a selection of serene designs to create a cozy retreat that complements your personal haven seamlessly.",
  Pricing : `Rs: ${574} /sq.feet`,
},{
  image: "https://img.freepik.com/free-vector/simple-3d-geometric-pattern-vector-grey-background_53876-140924.jpg?w=740&t=st=1699520898~exp=1699521498~hmac=dbcfea71ae151e51e435489bedcca87345e76965eaaaf1a148534fbf1caa16fa",
  Title: "Design No 2",
  SKU: "item-172",
  Category:`${floor} ${bedroom} ${grey} Tile`,
  Description: "Indulge in comfort and style with our bedroom floor tiles. Radiating warmth and sophistication, these tiles are crafted for durability and easy maintenance. Choose from a selection of serene designs to create a cozy retreat that complements your personal haven seamlessly.",
  Pricing : `Rs: ${784} /sq.feet`,
},{
  image: "https://img.freepik.com/premium-photo/grey-background-texture_196038-8648.jpg?w=740",
  Title: "Design No 3",
  SKU: "item-173",
  Category:`${floor} ${bedroom} ${grey} Tile`,
  Description: "Indulge in comfort and style with our bedroom floor tiles. Radiating warmth and sophistication, these tiles are crafted for durability and easy maintenance. Choose from a selection of serene designs to create a cozy retreat that complements your personal haven seamlessly.",
  Pricing : `Rs: ${945} /sq.feet`,
},{
  image: "https://img.freepik.com/premium-vector/abstract-textured-background-with-grey-rectangles-banner-design-beautiful-futuristic-dynamic-geometric-pattern-design-vector-illustration_515038-4109.jpg?w=900",
  Title: "Design No 4",
  SKU: "item-174",
  Category:`${floor} ${bedroom} ${grey} Tile`,
  Description: "Indulge in comfort and style with our bedroom floor tiles. Radiating warmth and sophistication, these tiles are crafted for durability and easy maintenance. Choose from a selection of serene designs to create a cozy retreat that complements your personal haven seamlessly.",
  Pricing : `Rs: ${845} /sq.feet`,
},{
  image: "https://img.freepik.com/free-vector/volumetric-pattern_1110-968.jpg?w=740&t=st=1699520947~exp=1699521547~hmac=7909bcbb3ab6812734540435a0e55e0ef549e79b8fbbbe6173d7be3a17270c63",
  Title: "Design No 5",
  SKU: "item-175",
  Category:`${floor} ${bedroom} ${grey} Tile`,
  Description: "Indulge in comfort and style with our bedroom floor tiles. Radiating warmth and sophistication, these tiles are crafted for durability and easy maintenance. Choose from a selection of serene designs to create a cozy retreat that complements your personal haven seamlessly.",
  Pricing : `Rs: ${359} /sq.feet`,
},{
  image: "https://img.freepik.com/free-photo/square-black-white_1203-673.jpg?w=740&t=st=1699521143~exp=1699521743~hmac=44822ff68938fc66ea45006fede72a37548f308e52eb66389e55665261793170",
  Title: "Design No 1",
  SKU: "item-176",
  Category:`${floor} ${bedroom} ${light_silver} Tile`,
  Description: "Indulge in comfort and style with our bedroom floor tiles. Radiating warmth and sophistication, these tiles are crafted for durability and easy maintenance. Choose from a selection of serene designs to create a cozy retreat that complements your personal haven seamlessly.",
  Pricing : `Rs: ${985} /sq.feet`,
},{
  image: "https://img.freepik.com/free-photo/white-grey-tile-wall-high-resolution-wallpaper-brick-seamless-texture-interior-background_1258-72193.jpg?w=740&t=st=1699521160~exp=1699521760~hmac=4d914cb42e0cc7d446d098db90be81de72851baab8321fe4e81a075e8b8e184b",
  Title: "Design No 2",
  SKU: "item-177",
  Category:`${floor} ${bedroom} ${light_silver} Tile`,
  Description: "Indulge in comfort and style with our bedroom floor tiles. Radiating warmth and sophistication, these tiles are crafted for durability and easy maintenance. Choose from a selection of serene designs to create a cozy retreat that complements your personal haven seamlessly.",
  Pricing : `Rs: ${136} /sq.feet`,
},{
  image: "https://img.freepik.com/free-photo/top-view-abstract-metal-wallpaper-close-up_23-2148859876.jpg?w=740&t=st=1699521192~exp=1699521792~hmac=95748ed93ea22ebce07fcef03a95a6d024bf7a95ba420598edeeb4b1219989ce",
  Title: "Design No 3",
  SKU: "item-178",
  Category:`${floor} ${bedroom} ${light_silver} Tile`,
  Description: "Indulge in comfort and style with our bedroom floor tiles. Radiating warmth and sophistication, these tiles are crafted for durability and easy maintenance. Choose from a selection of serene designs to create a cozy retreat that complements your personal haven seamlessly.",
  Pricing : `Rs: ${964} /sq.feet`,
},{
  image: "https://img.freepik.com/free-photo/3d-abstract-geometrical-kaleidoscope-transformation-fractal-distortion-white-surface-3d-render-illustration_1217-2708.jpg?w=900&t=st=1699521212~exp=1699521812~hmac=0cb1986cbb2d32c03b2937f6a51b844dc93604c2bf95b811318051dc9b6d2c13",
  Title: "Design No 4",
  SKU: "item-179",
  Category:`${floor} ${bedroom} ${light_silver} Tile`,
  Description: "Indulge in comfort and style with our bedroom floor tiles. Radiating warmth and sophistication, these tiles are crafted for durability and easy maintenance. Choose from a selection of serene designs to create a cozy retreat that complements your personal haven seamlessly.",
  Pricing : `Rs: ${986} /sq.feet`,
},{
  image: "https://img.freepik.com/premium-photo/grey-background-texture_196038-8648.jpg?w=740",
  Title: "Design No 5",
  SKU: "item-180",
  Category:`${floor} ${bedroom} ${light_silver} Tile`,
  Description: "Indulge in comfort and style with our bedroom floor tiles. Radiating warmth and sophistication, these tiles are crafted for durability and easy maintenance. Choose from a selection of serene designs to create a cozy retreat that complements your personal haven seamlessly.",
  Pricing : `Rs: ${489} /sq.feet`,
},]

let squarefeet = document.getElementById('sqfeet')


// Get ID of clicked product

document.addEventListener('DOMContentLoaded',()=>{
    let clickedElementId = localStorage.getItem('clickedSingleElementId');
    localStorage.removeItem('clickedSingleElementId');
    for(let i = 0; i < product.length; i++){
        if(clickedElementId == product[i].SKU){
            // getting html elements

            let singleProductContainer = document.getElementById('SingleProductContainer')

            singleProductContainer.innerHTML = `<div class="container px-5 py-24 mx-auto">
            <div class="lg:w-4/5 mx-auto flex flex-wrap">
              <img alt="ecommerce" class="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded" src="${product[i].image}">
              <div class="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                <h2 class="text-sm title-font text-gray-500 tracking-widest">Product SKU: ${product[i].SKU}</h2>
                <h1 class="text-gray-900 text-3xl title-font font-medium mb-1">${product[i].Title}</h1>
                <div class="flex mb-4">
                  <span class="flex items-center">
                    <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 text-yellow-500" viewBox="0 0 24 24">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                    </svg>
                    <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 text-yellow-500" viewBox="0 0 24 24">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                    </svg>
                    <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 text-yellow-500" viewBox="0 0 24 24">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                    </svg>
                    <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 text-yellow-500" viewBox="0 0 24 24">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                    </svg>
                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 text-yellow-500" viewBox="0 0 24 24">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                    </svg>
                    <span class="text-gray-600 ml-3">4 Reviews</span>
                  </span>
                  <span class="flex ml-3 pl-3 py-2 border-l-2 border-gray-200 space-x-2s">
                    <a class="text-gray-500">
                      <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                        <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                      </svg>
                    </a>
                    <a class="text-gray-500">
                      <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                        <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                      </svg>
                    </a>
                    <a class="text-gray-500">
                      <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                        <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                      </svg>
                    </a>
                  </span>
                </div>
                <p class="leading-relaxed mb-6">${product[i].Description}</p>
                
                <div class="flex">
                  <span id="totalprice" class="title-font font-medium text-2xl text-gray-900">${product[i].Pricing}</span>
                  <button class="lfex ml-auto text-white bg-yellow-500 border-0 py-2 px-6 focus:outline-none hover:bg-yellow-600 rounded">Buy Now</button>
                  <button class="rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4">
                    <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                      <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"></path>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>`
          
        }
    }
    
  })

