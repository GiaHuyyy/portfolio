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
    description: "Nền tảng chăm sóc sức khỏe răng miệng thông minh, đặt lịch, hồ sơ và tư vấn từ xa.",
    logo: "/logos/driwwwle.svg",
    link: "https://github.com/GiaHuyyy/Smart-dental-healthcare",
    tech: [
      { icon: "/logos/next_icon.svg", name: "Next.js" },
      { icon: "/logos/react_icon.svg", name: "React.js" },
      { icon: "/logos/typescript_icon.svg", name: "TypeScript" },
      { icon: "/logos/tailwind_icon.svg", name: "Tailwind CSS" },
      { icon: "/logos/redux_icon.svg", name: "Redux" },
      { icon: "/logos/nest_icon.svg", name: "NestJS" },
      { icon: "/logos/mongo_icon.svg", name: "MongoDB" },
      { icon: "/logos/mongoose_icon.svg", name: "Mongoose" },
      { icon: "/logos/socket_icon.svg", name: "Socket.IO" },
      { icon: "/logos/docker_icon.svg", name: "Docker" },
    ],
    slug: "smart-dental-healthcare",
  },
  {
    title: "Chat app",
    description: "Ứng dụng nhắn tin thời gian thực đa nền tảng (web/mobile) với Socket.IO, WebRTC và JWT.",
    logo: "/logos/vsc.svg",
    link: "https://github.com/GiaHuyyy/CNM-ChatApp",
    tech: [
      { icon: "/logos/react_icon.svg", name: "React.js" },
      { icon: "/logos/nodejs_icon.svg", name: "Node.js" },
      { icon: "/logos/mongodb_icon.svg", name: "MongoDB" },
      { icon: "/logos/socket.io_icon.svg", name: "Socket.IO" },
      { icon: "/logos/jwt_icon.svg", name: "JWT" },
    ],
    slug: "chat-app",
  },
  {
    title: "Healthy check app",
    description: "Ứng dụng kiểm tra sức khỏe cá nhân, theo dõi chỉ số và cung cấp gợi ý cải thiện lối sống.",
    logo: "/logos/subtrackt.svg",
    link: "https://github.com/GiaHuyyy/healthy-check-app",
    tech: [
      { icon: "/logos/react_icon.svg", name: "React.js" },
      { icon: "/logos/nodejs_icon.svg", name: "Node.js" },
      { icon: "/logos/mongodb_icon.svg", name: "MongoDB" },
      { icon: "/logos/socket.io_icon.svg", name: "Socket.IO" },
      { icon: "/logos/jwt_icon.svg", name: "JWT" },
    ],
    slug: "healthy-check-app",
  },
  {
    title: "Ecommerce microservices",
    description: "Nền tảng thương mại điện tử theo kiến trúc microservice, hỗ trợ thanh toán và CI/CD.",
    logo: "/logos/coolify.svg",
    link: "https://github.com/ngophuc29/KT-TKPM_PROJECT",
    tech: [
      { icon: "/logos/react_icon.svg", name: "React.js" },
      { icon: "/logos/nodejs_icon.svg", name: "Node.js" },
      { icon: "/logos/mongodb_icon.svg", name: "MongoDB" },
      { icon: "/logos/socket.io_icon.svg", name: "Socket.IO" },
      { icon: "/logos/jwt_icon.svg", name: "JWT" },
    ],
    slug: "ecommerce-microservices",
  },
];
