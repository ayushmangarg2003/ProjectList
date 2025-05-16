// Define the project data types with TypeScript

export type ProjectImage = {
  id: number;
  alt: string;
  src: string;
};

export type Technology = {
  name: string;
  color: string; // Tailwind color class
};

export type Project = {
  id: string;
  slug: string;
  name: string;
  description: string;
  longDescription: string;
  thumbnail: string;
  github: string;
  website: string;
  technologies: Technology[];
  features: string[];
  images: ProjectImage[];
  month: string;
  year: string;
};

// Sample projects data
export const projects: Project[] = [
  {
    id: "1",
    slug: "collegemart",
    name: "College Mart",
    description: "An e-commerce platform designed specifically for college students to buy and sell items within their campus community.",
    longDescription: "College Mart is a comprehensive e-commerce platform that enables college students to buy, sell, and trade items within their campus community. The platform features user authentication, product listings with categories, search functionality, and a messaging system for buyers and sellers to communicate.",
    thumbnail: "/images/collegemart/thumbnail.png",
    github: "https://github.com/ayushmangarg2003/CollegeMart",
    website: "https://college-mart-amber.vercel.app/",
    technologies: [
      { name: "Next.js", color: "bg-black text-white" },
      { name: "React", color: "bg-blue-500" },
      { name: "TypeScript", color: "bg-blue-700" },
      { name: "Tailwind CSS", color: "bg-cyan-500" }
    ],
    features: [
      "User authentication and profiles",
      "Product listings with categories",
      "Search and filter functionality", 
      "Messaging system for buyers and sellers",
      "Responsive design for all devices"
    ],
    images: [
      { id: 1, alt: "College Mart homepage", src: "/images/collegemart/homepage.png" },
      { id: 2, alt: "Product listings page", src: "/images/collegemart/listings.png" },
      { id: 3, alt: "Product detail view", src: "/images/collegemart/details.png" }
    ],
    month: "Aug-Oct",
    year: "2025"
  },
  {
    id: "2",
    slug: "swaagfun",
    name: "Swaagfun",
    description: "A social media platform for sharing fashion trends and style inspiration with a focus on college students.",
    longDescription: "Swaagfun is a fashion-oriented social media platform that allows users to share their outfits, discover new trends, and connect with others who share similar fashion interests. The application features a personalized feed, user profiles, post creation, and interaction capabilities.",
    thumbnail: "/images/swaagfun/thumbnail.png",
    github: "https://github.com/ayushmangarg2003",
    website: "https://swaagfun.vercel.app/",
    technologies: [
      { name: "React", color: "bg-blue-500" },
      { name: "MongoDB", color: "bg-green-500" },
      { name: "Express", color: "bg-gray-700" },
      { name: "Node.js", color: "bg-green-600" }
    ],
    features: [
      "User authentication and profiles",
      "Post creation with image uploads",
      "Social interactions (likes, comments, follows)",
      "Personalized feed algorithm",
      "Trending fashion tags and discoveries"
    ],
    images: [
      { id: 1, alt: "Swaagfun main feed", src: "/images/swaagfun/feed.png" },
      { id: 2, alt: "User profile page", src: "/images/swaagfun/profile.png" },
      { id: 3, alt: "Post creation interface", src: "/images/swaagfun/create.png" }
    ],
    month: "Jun-Jul",
    year: "2024"
  },
  {
    id: "3",
    slug: "homestayz",
    name: "Homestayz",
    description: "A modern property rental platform focused on providing comfortable stays for travelers and vacationers.",
    longDescription: "Homestayz is a comprehensive property rental platform that connects property owners with travelers looking for comfortable and unique accommodations. The application includes property listings with detailed information, booking capabilities, user reviews, and a responsive design for seamless user experience across devices.",
    thumbnail: "/images/homestayz/1.png",
    github: "https://github.com/ayushmangarg2003/homestayz",
    website: "https://homestayz.vercel.app/",
    technologies: [
      { name: "React", color: "bg-blue-500" },
      { name: "MongoDB", color: "bg-green-500" },
      { name: "Express", color: "bg-gray-700" },
      { name: "Node.js", color: "bg-green-600" }
    ],
    features: [
      "Property search with filters",
      "Booking management system",
      "User reviews and ratings",
      "Secure payment integration",
      "Host and guest messaging"
    ],
    images: [
      { id: 1, alt: "Homestayz Homepage", src: "/images/homestayz/1.png" },
      { id: 2, alt: "Property Page", src: "/images/homestayz/2.png" },
      { id: 3, alt: "Booking Details", src: "/images/homestayz/3.png" }
    ],
    month: "March",
    year: "2024"
  },
  {
    id: "4",
    slug: "journal",
    name: "JournalHub",
    description: "A digital journaling platform for users to document their thoughts, goals, and daily experiences.",
    longDescription: "JournalHub is a feature-rich digital journaling application that helps users document their thoughts, track goals, and maintain daily records of their experiences. The platform includes rich text editing, template options, mood tracking, and secure cloud storage for entries with privacy controls.",
    thumbnail: "/images/journal/thumbnail.png",
    github: "https://github.com/ayushmangarg2003/Journal",
    website: "https://journalhub.vercel.app/",
    technologies: [
      { name: "React", color: "bg-blue-500" },
      { name: "MongoDB", color: "bg-green-500" },
      { name: "Express", color: "bg-gray-700" },
      { name: "Node.js", color: "bg-green-600" }
    ],
    features: [
      "Rich text editor for entries",
      "Journal templates and prompts",
      "Mood and habit tracking",
      "Search and filtering capabilities",
      "Data export and backup options"
    ],
    images: [
      { id: 1, alt: "JournalHub dashboard", src: "/images/journal/dashboard.png" },
      { id: 2, alt: "Journal entry editor", src: "/images/journal/editor.png" },
      { id: 3, alt: "Statistics and tracking", src: "/images/journal/stats.png" }
    ],
    month: "February",
    year: "2024"
  }
];

// Helper function to get a project by slug
export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find(project => project.slug === slug);
}

// Helper function to get all project slugs
export function getAllProjectSlugs(): string[] {
  return projects.map((project) => project.slug);
} 