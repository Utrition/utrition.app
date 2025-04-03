import { CheckIcon } from "../components/check-icon";

export interface Feature {
  title: string;
  description: string;
  icon: React.ReactNode;
}

export const features: Feature[] = [
  {
    title: "Community",
    description: "We are only as strong as those around us. We're creating a place for you, our users, to follow and share your friends' interests and preferences.",
    icon: <CheckIcon />,
  },
  {
    title: "Personalized Diets",
    description: "We enable you to set up your personalized account ready for you to shop and swipe away using only your pantry items and our brief questionnaire.",
    icon: <CheckIcon />,
  },
  {
    title: "Artificial Intelligence",
    description: "We are harnessing the power of AI to create personalized product and recipe recommendations specifically for you and your household.",
    icon: <CheckIcon />,
  },
  {
    title: "Transparency",
    description: "We enable you to make your own informed consumer decisions based on credible, unbiased information.",
    icon: <CheckIcon />,
  },
  {
    title: "Fitness & Lifestyle",
    description: "We are partnering with curated organizations including clubs, wellness centers, and gyms to help navigate you on your health journey.",
    icon: <CheckIcon />,
  },
]; 