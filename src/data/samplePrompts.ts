// Sample prompts data - in a real app this would come from your backend API
import { getImageUrl } from "@/config/app";

export interface Prompt {
  id: string;
  imageUrl: string;
  promptText: string;
  category: string;
  createdAt: string;
}

export const samplePrompts: Prompt[] = [
  {
    id: "1",
    imageUrl: getImageUrl("business-portrait.jpg"),
    promptText: "Professional portrait of a confident business person in modern office setting, wearing a stylish navy suit, crisp lighting, contemporary style, realistic photography, high resolution, clean background",
    category: "Men",
    createdAt: "2024-03-15T10:00:00Z"
  },
  {
    id: "2", 
    imageUrl: getImageUrl("woman-professional.jpg"),
    promptText: "Elegant professional woman in modern workspace, wearing sophisticated attire, natural lighting, contemporary style, realistic photography, high resolution",
    category: "Women",
    createdAt: "2024-03-14T15:30:00Z"
  },
  {
    id: "3",
    imageUrl: getImageUrl("couple-urban.jpg"),
    promptText: "Happy couple walking together in modern urban setting, stylish casual attire, warm natural lighting, contemporary lifestyle, realistic photography, high resolution",
    category: "Couple",
    createdAt: "2024-03-13T12:15:00Z"
  },
  {
    id: "4",
    imageUrl: getImageUrl("kids-playing.jpg"),
    promptText: "Cheerful children playing in modern playground, bright colorful clothing, natural outdoor lighting, joyful family atmosphere, realistic photography, high resolution",
    category: "Kids",
    createdAt: "2024-03-12T09:45:00Z"
  },
  {
    id: "5",
    imageUrl: getImageUrl("cute-cat.jpg"),
    promptText: "Adorable cat with bright blue eyes and white fur, playful pose, natural lighting, cute pet photography, realistic style, high resolution",
    category: "Animals",
    createdAt: "2024-03-11T14:20:00Z"
  },
  {
    id: "6",
    imageUrl: getImageUrl("landscape-sunset.jpg"),
    promptText: "Beautiful landscape at sunset with mountains and clouds, golden hour lighting, scenic nature photography, realistic style, high resolution",
    category: "Nature",
    createdAt: "2024-03-10T18:00:00Z"
  },
  {
    id: "7",
    imageUrl: getImageUrl("abstract-art.jpg"),
    promptText: "Modern abstract art with vibrant colors and geometric shapes, contemporary digital art style, creative composition, high resolution",
    category: "Art",
    createdAt: "2024-03-09T11:30:00Z"
  },
  {
    id: "8",
    imageUrl: getImageUrl("fashion-portrait.jpg"),
    promptText: "Trendy fashion portrait of young model wearing stylish street wear, urban background, natural lighting, contemporary style, realistic photography, high resolution",
    category: "Women",
    createdAt: "2024-03-08T16:45:00Z"
  },
  {
    id: "9",
    imageUrl: getImageUrl("golden-retriever.jpg"),
    promptText: "Beautiful golden retriever dog running in park, playful expression, natural outdoor lighting, pet photography, realistic style, high resolution",
    category: "Animals",
    createdAt: "2024-03-07T13:20:00Z"
  },
  {
    id: "10",
    imageUrl: getImageUrl("romantic-couple.jpg"),
    promptText: "Romantic couple enjoying sunset on beach, holding hands, warm golden lighting, intimate moment, realistic photography, high resolution",
    category: "Couple",
    createdAt: "2024-03-06T19:30:00Z"
  },
  {
    id: "11",
    imageUrl: getImageUrl("family-home.jpg"),
    promptText: "Happy family with children in modern home setting, cozy atmosphere, natural lighting, lifestyle photography, realistic style, high resolution",
    category: "Kids",
    createdAt: "2024-03-05T11:15:00Z"
  }
];

export const categories = [
  { name: "All Prompts", count: samplePrompts.length },
  { name: "Men", count: samplePrompts.filter(p => p.category === "Men").length },
  { name: "Women", count: samplePrompts.filter(p => p.category === "Women").length },
  { name: "Couple", count: samplePrompts.filter(p => p.category === "Couple").length },
  { name: "Kids", count: samplePrompts.filter(p => p.category === "Kids").length },
  { name: "Animals", count: samplePrompts.filter(p => p.category === "Animals").length },
  { name: "Nature", count: samplePrompts.filter(p => p.category === "Nature").length },
  { name: "Art", count: samplePrompts.filter(p => p.category === "Art").length }
];