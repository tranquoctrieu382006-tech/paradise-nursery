const image = (photoId) =>
  `https://images.unsplash.com/${photoId}?auto=format&fit=crop&w=700&q=80`;

// Six products in each of three categories (18 unique plants altogether).
export const products = [
  // Easy Care
  { id: 'snake-plant', name: 'Snake Plant', category: 'Easy Care', price: 18, image: image('photo-1501004318641-b39e6451bec6'), description: 'A resilient, sculptural favourite.' },
  { id: 'zz-plant', name: 'ZZ Plant', category: 'Easy Care', price: 22, image: image('photo-1497250681960-ef046c08a56e'), description: 'Glossy leaves with minimal fuss.' },
  { id: 'jade-plant', name: 'Jade Plant', category: 'Easy Care', price: 16, image: image('photo-1509423350716-97f2360af0e4'), description: 'A compact succulent for sunny spots.' },
  { id: 'aloe-vera', name: 'Aloe Vera', category: 'Easy Care', price: 14, image: image('photo-1512428813834-c702c7702b78'), description: 'A bright-window succulent.' },
  { id: 'rubber-plant', name: 'Rubber Plant', category: 'Easy Care', price: 28, image: image('photo-1485955900006-10f4d324d411'), description: 'Bold, deep-green leaves.' },
  { id: 'ponytail-palm', name: 'Ponytail Palm', category: 'Easy Care', price: 25, image: image('photo-1463320726281-696a485928c7'), description: 'A playful plant with a sculptural shape.' },
  // Low Light
  { id: 'peace-lily', name: 'Peace Lily', category: 'Low Light', price: 24, image: image('photo-1483794344563-d27a8d18014e'), description: 'Elegant foliage for softer light.' },
  { id: 'golden-pothos', name: 'Golden Pothos', category: 'Low Light', price: 18, image: image('photo-1459156212016-c812468e2115'), description: 'Trailing vines for shelves and corners.' },
  { id: 'chinese-evergreen', name: 'Chinese Evergreen', category: 'Low Light', price: 26, image: image('photo-1494438639946-1ebd1d20bf85'), description: 'Patterned leaves for a calm interior.' },
  { id: 'cast-iron-plant', name: 'Cast Iron Plant', category: 'Low Light', price: 29, image: image('photo-1525498128493-380d1990a112'), description: 'A dependable plant for shaded rooms.' },
  { id: 'heartleaf-philodendron', name: 'Heartleaf Philodendron', category: 'Low Light', price: 20, image: image('photo-1518531933037-91b2f5f229cc'), description: 'Heart-shaped leaves with a trailing habit.' },
  { id: 'parlor-palm', name: 'Parlor Palm', category: 'Low Light', price: 23, image: image('photo-1487530811176-3780de880c2d'), description: 'Soft tropical fronds for small spaces.' },
  // Pet-Friendly
  { id: 'spider-plant', name: 'Spider Plant', category: 'Pet-Friendly', price: 17, image: image('photo-1520412099551-62b6bafeb5bb'), description: 'Arching leaves and cheerful plantlets.' },
  { id: 'calathea-orbifolia', name: 'Calathea Orbifolia', category: 'Pet-Friendly', price: 32, image: image('photo-1585320806297-9794b3e4eeae'), description: 'Broad leaves with silver-green stripes.' },
  { id: 'boston-fern', name: 'Boston Fern', category: 'Pet-Friendly', price: 21, image: image('photo-1593691509543-c55fb32e5cee'), description: 'Feathery fronds for a lush feel.' },
  { id: 'areca-palm', name: 'Areca Palm', category: 'Pet-Friendly', price: 30, image: image('photo-1592150621744-aca64f48394a'), description: 'A bright, tropical statement plant.' },
  { id: 'prayer-plant', name: 'Prayer Plant', category: 'Pet-Friendly', price: 24, image: image('photo-1509423350716-97f2360af0e4'), description: 'Decorative foliage with a gentle pattern.' },
  { id: 'baby-rubber-plant', name: 'Baby Rubber Plant', category: 'Pet-Friendly', price: 19, image: image('photo-1497250681960-ef046c08a56e'), description: 'Thick, rounded leaves in a compact form.' },
];

export const categories = ['Easy Care', 'Low Light', 'Pet-Friendly'];
