export interface Pet {
  id: number;
  name: string;
  type: string;
  breed: string;
  age: number;
  gender: string;
  size: string;
  personality: string;
  image: string;
  adoptionFee: number;
}

export const pets: Pet[] = [
  {
    id: 1,
    name: "Buddy",
    type: "Dog",
    breed: "Golden Retriever",
    age: 3,
    gender: "Male",
    size: "Large",
    personality: "Friendly",
    image: "/one.jpg",
    adoptionFee: 250,
  },
  {
    id: 2,
    name: "Whiskers",
    type: "Cat",
    breed: "Siamese",
    age: 2,
    gender: "Female",
    size: "Medium",
    personality: "Playful",
    image: "/two.jpg",
    adoptionFee: 150,
  },
  {
    id: 3,
    name: "Tweety",
    type: "Bird",
    breed: "Canary",
    age: 1,
    gender: "Male",
    size: "Small",
    personality: "Energetic",
    image: "/three.jpg",
    adoptionFee: 50,
  },
  {
    id: 4,
    name: "Max",
    type: "Dog",
    breed: "German Shepherd",
    age: 5,
    gender: "Male",
    size: "Large",
    personality: "Loyal",
    image: "/four.jpg",
    adoptionFee: 200,
  },
  {
    id: 5,
    name: "Luna",
    type: "Cat",
    breed: "Maine Coon",
    age: 4,
    gender: "Female",
    size: "Large",
    personality: "Calm",
    image: "/fice.jpg",
    adoptionFee: 175,
  },
  {
    id: 6,
    name: "Hammy",
    type: "Small Animal",
    breed: "Hamster",
    age: 1,
    gender: "Male",
    size: "Small",
    personality: "Active",
    image: "/six.jpg",
    adoptionFee: 25,
  },
  {
    id: 7,
    name: "Bella",
    type: "Dog",
    breed: "Labrador Retriever",
    age: 2,
    gender: "Female",
    size: "Large",
    personality: "Energetic",
    image: "/seven.jpg",
    adoptionFee: 225,
  },
  {
    id: 8,
    name: "Oliver",
    type: "Cat",
    breed: "British Shorthair",
    age: 3,
    gender: "Male",
    size: "Medium",
    personality: "Lazy",
    image: "/eight.jpg",
    adoptionFee: 160,
  },
  {
    id: 9,
    name: "Polly",
    type: "Bird",
    breed: "Parrot",
    age: 6,
    gender: "Female",
    size: "Medium",
    personality: "Talkative",
    image: "/nine.jpg",
    adoptionFee: 300,
  },
];
