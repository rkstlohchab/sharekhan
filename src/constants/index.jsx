import { BotMessageSquare } from "lucide-react";
import { BatteryCharging } from "lucide-react";
import { Fingerprint } from "lucide-react";
import { ShieldHalf } from "lucide-react";
import { PlugZap } from "lucide-react";
import { GlobeLock } from "lucide-react";

import LocationOnIcon from "@mui/icons-material/LocationOn";

import user1 from "../assets/profile-pictures/user1.jpg";
import user2 from "../assets/profile-pictures/user2.jpg";
import user3 from "../assets/profile-pictures/user3.jpg";
import user4 from "../assets/profile-pictures/user4.jpg";
import user5 from "../assets/profile-pictures/user5.jpg";
import user6 from "../assets/profile-pictures/user6.jpg";

export const navItems = [
  // { label: "Home", href: "/" },
  // { label: "Contact Us", href: "/contact-us" },
];

export const testimonials = [
  {
    user: "Rahul Verma",
    company: "Stock Mastery Pvt Ltd",
    image: user1,
    text: "I am extremely satisfied with the courses provided. The team was responsive, professional, and delivered content beyond my expectations.",
  },
  {
    user: "Priya Sharma",
    company: "TradePro Academy",
    image: user2,
    text: "I couldn't be happier with the outcome of the training. The team's expertise and teaching methods were instrumental in enhancing my trading skills.",
  },
  {
    user: "Amit Kumar",
    company: "InvestSmart Institute",
    image: user3,
    text: "Working with this company was a pleasure. Their attention to detail and commitment to excellence are commendable. I would highly recommend them to anyone looking to learn trading.",
  },
  {
    user: "Sneha Patel",
    company: "Market Wizards",
    image: user4,
    text: "Working with the team at ShareKhan Trading was a game-changer for my trading journey. Their attention to detail and innovative teaching methods helped me achieve my goals faster than I thought possible. I am grateful for their expertise and professionalism!",
  },
  {
    user: "Arjun Singh",
    company: "TradeVision Institute",
    image: user5,
    text: "I am amazed by the level of professionalism and dedication shown by the team. They were able to exceed my expectations and deliver outstanding results in my trading education.",
  },
  {
    user: "Neha Gupta",
    company: "Synergy Trading Academy",
    image: user6,
    text: "The team went above and beyond to ensure my success in trading. Their expertise and dedication are unmatched. I look forward to learning from them again in the future.",
  },
];

export const features = [
  {
    icon: <LocationOnIcon />,
    text: "Location",
    description:
      "Near Jivan Deep lab, Kharkhoda thana kalan road, \n LATITUDE:28.876600 LONGITUDE:76.911360",
  },
  {
    icon: <Fingerprint />,
    text: "Personalized Coaching",
    description:
      "Receive tailored guidance from expert traders to help you improve your trading strategies.",
  },
  {
    icon: <ShieldHalf />,
    text: "Comprehensive Market Analysis",
    description:
      "Access detailed market reports and analysis to stay ahead of the trends and make informed decisions.",
  },
  {
    icon: <BatteryCharging />,
    text: "Real-Time Trading Simulator",
    description:
      "Practice trading in a risk-free environment with our real-time market simulator.",
  },
  {
    icon: <PlugZap />,
    text: "Community Support",
    description:
      "Join a vibrant community of traders to share insights, ask questions, and collaborate.",
  },
  {
    icon: <GlobeLock />,
    text: "Progress Tracking",
    description:
      "Monitor your progress with our integrated analytics dashboard, helping you identify strengths and areas for improvement.",
  },
];

export const checklistItems = [
  {
    title: "Learn Trading with Ease",
    description:
      "Our platform simplifies complex trading concepts, making it easy for beginners to grasp and apply trading strategies. ",
  },
  {
    title: "Comprehensive Market Analysis",
    description:
      "Stay ahead of the market with our in-depth analysis tools. Gain valuable insights into market trends, price movements, and trading opportunities.",
  },
  {
    title: "Pro-Powered Trading Insights",
    description:
      "Leverage our advanced tools to enhance your trading skills. Get smart recommendations, automated trading signals, and personalized strategies that save you time and help you maximize your profits.",
  },
  {
    title: "Collaborate with Experts",
    description:
      "Join a community of seasoned traders and industry experts. Share your progress, seek advice, and learn from the best in the field through our interactive forums and live webinars.",
  },
];

export const pricingOptions = [
  {
    title: "Free",
    price: "$0",
    features: [
      "Private board sharing",
      "5 Gb Storage",
      "Web Analytics",
      "Private Mode",
    ],
  },
  {
    title: "Pro",
    price: "$10",
    features: [
      "Private board sharing",
      "10 Gb Storage",
      "Web Analytics (Advance)",
      "Private Mode",
    ],
  },
  {
    title: "Enterprise",
    price: "$200",
    features: [
      "Private board sharing",
      "Unlimited Storage",
      "High Performance Network",
      "Private Mode",
    ],
  },
];

export const resourcesLinks = [
  { href: "#", text: "Getting Started" },
  { href: "#", text: "Documentation" },
  { href: "#", text: "Tutorials" },
  { href: "#", text: "API Reference" },
  { href: "#", text: "Community Forums" },
];

export const platformLinks = [
  { href: "#", text: "Features" },
  { href: "#", text: "Supported Devices" },
  { href: "#", text: "System Requirements" },
  { href: "#", text: "Downloads" },
  { href: "#", text: "Release Notes" },
];

export const communityLinks = [
  { href: "#", text: "Events" },
  { href: "#", text: "Meetups" },
  { href: "#", text: "Conferences" },
  { href: "#", text: "Hackathons" },
  { href: "#", text: "Jobs" },
];
