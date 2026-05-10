export interface Project {
  title: string;
  description: string;
  logo: string;
  link: string;
  slug: string;
  tech: { icon: string; name: string }[];
}

export const projects: Project[] = [
  {
    title: "Smart dental healthcare (Web & Mobile)",
    description: "Nền tảng chăm sóc sức khỏe răng miệng thông minh, đặt lịch, hồ sơ, tư vấn từ xa, thanh toán MoMo v.v.. Tích hợp phân tích AI và hỗ trợ đa nền tảng.",
    logo: "/logos/project1_icon.svg",
    link: "https://github.com/GiaHuyyy/Smart-dental-healthcare",
    tech: [
      { icon: "/logos/next_icon.svg", name: "Next.js" },
      { icon: "/logos/react_icon.svg", name: "React.js" },
      { icon: "/logos/expo_icon.svg", name: "Expo" },
      { icon: "/logos/typescript_icon.svg", name: "TypeScript" },
      { icon: "/logos/tailwind_icon.svg", name: "Tailwind CSS" },
      { icon: "/logos/redux_icon.svg", name: "Redux" },
      { icon: "/logos/momo_icon.svg", name: "Momo Payment" },
      { icon: "/logos/nest_icon.svg", name: "NestJS" },
      { icon: "/logos/mongo_icon.svg", name: "MongoDB" },
      { icon: "/logos/mongoose_icon.svg", name: "Mongoose" },
      { icon: "/logos/socket_icon.svg", name: "Socket.IO" },
      { icon: "/logos/webrtc_icon.svg", name: "WebRTC" },
      { icon: "/logos/docker_icon.svg", name: "Docker" },
      { icon: "/logos/cloudinary_icon.svg", name: "Cloudinary" },
      { icon: "/logos/gemini_icon.svg", name: "Gemini AI" },
      { icon: "/logos/maptiler_icon.svg", name: "MapTiler" },
      { icon: "/logos/sendgrid_icon.svg", name: "SendGrid" },
      { icon: "/logos/zerobounce_icon.svg", name: "ZeroBounce" },
      { icon: "/logos/jwt_icon.svg", name: "JWT" },
    ],
    slug: "smart-dental-healthcare",
  },
  {
    title: "Chat app (Web & Mobile)",
    description: "Ứng dụng nhắn tin thời gian thực đa nền tảng lấy ý tưởng từ 'Zalo' với Socket.IO, WebRTC và JWT v.v..",
    logo: "/logos/project2_icon.svg",
    link: "https://github.com/GiaHuyyy/CNM-ChatApp",
    tech: [
      { icon: "/logos/react_icon.svg", name: "React.js" },
      { icon: "/logos/tailwind_icon.svg", name: "Tailwind CSS" },
      { icon: "/logos/expo_icon.svg", name: "Expo" },
      { icon: "/logos/node_icon.svg", name: "Node.js" },
      { icon: "/logos/express_icon.svg", name: "Express.js" },
      { icon: "/logos/socket_icon.svg", name: "Socket.IO" },
      { icon: "/logos/webrtc_icon.svg", name: "WebRTC" },
      { icon: "/logos/mongo_icon.svg", name: "MongoDB" },
      { icon: "/logos/aws_icon.svg", name: "AWS S3" },
      { icon: "/logos/jwt_icon.svg", name: "JWT" },
    ],
    slug: "chat-app",
  },
  {
    title: "Healthy check app (Mobile)",
    description: "Ứng dụng kiểm tra sức khỏe cá nhân, theo dõi chỉ số và cung cấp gợi ý cải thiện lối sống.",
    logo: "/logos/project3_icon.svg",
    link: "https://github.com/GiaHuyyy/healthy-check-app",
    tech: [
      { icon: "/logos/react_icon.svg", name: "React.js" },
      { icon: "/logos/expo_icon.svg", name: "Expo" },
      { icon: "/logos/tailwind_icon.svg", name: "Tailwind CSS" },
      { icon: "/logos/appwrite_icon.svg", name: "Appwrite" },
      { icon: "/logos/babel_icon.svg", name: "Babel" },
      { icon: "/logos/gemini_icon.svg", name: "Gemini AI" },
    ],
    slug: "healthy-check-app",
  },
  {
    title: "Ecommerce microservices (Web)",
    description: "Nền tảng thương mại điện tử theo kiến trúc microservice, hỗ trợ thanh toán và CI/CD.",
    logo: "/logos/project4_icon.svg",
    link: "https://github.com/ngophuc29/KT-TKPM_PROJECT",
    tech: [
      { icon: "/logos/vite_icon.svg", name: "Vite" },
      { icon: "/logos/react_icon.svg", name: "React.js" },
      { icon: "/logos/tailwind_icon.svg", name: "Tailwind CSS" },
      { icon: "/logos/shadcn_ui_icon.svg", name: "Shadcn UI" },
      { icon: "/logos/node_icon.svg", name: "Node.js" },
      { icon: "/logos/express_icon.svg", name: "Express.js" },
      { icon: "/logos/mongo_icon.svg", name: "MongoDB" },
      { icon: "/logos/momo_icon.svg", name: "Momo Payment" },
      { icon: "/logos/docker_icon.svg", name: "Docker" },
      { icon: "/logos/microservice_icon.svg", name: "Microservices" },
      { icon: "/logos/jenkins_icon.svg", name: "Jenkins" },
      { icon: "/logos/github_actions_icon.svg", name: "GitHub Actions" },
      { icon: "/logos/redis_icon.svg", name: "Redis" },
      { icon: "/logos/cloudinary_icon.svg", name: "Cloudinary" },
      { icon: "/logos/jwt_icon.svg", name: "JWT" },
    ],
    slug: "ecommerce-microservices",
  },
];
