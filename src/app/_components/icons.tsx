import {
  User,
  Snail,
  Plus,
  MapPin,
  ChevronLeft,
  ChevronRight,
  Webhook,
  Loader2,
  Sliders,
  Activity,
  X,
  ArrowRight,
  Sun,
  Pencil,
  Moon,
  ArrowLeft,
  CircleX,
  EllipsisVertical,
  Download,
  ArrowDown,
  Laptop,
  Menu,
  UserRoundCog,
  LoaderCircle,
  Play,
  Minus,
  Linkedin,
  MoveDown,
  Instagram,
  LucideProps,
} from "lucide-react";

export const Icons = {
  User,
  Snail,
  ChevronRight,
  UserRoundCog,
  Instagram,
  MoveDown,
  LoaderCircle,
  Linkedin,
  Sliders,
  Plus,
  Minus,
  EllipsisVertical,
  Download,
  ArrowDown,
  ChevronLeft,
  Pencil,
  Webhook,
  CircleX,
  Menu,
  Loader2,
  ArrowLeft,
  MapPin,
  Sun,
  Moon,
  Laptop,
  ArrowRight,
  X,
  Activity,
  Play,
  Vercel: ({ ...props }: LucideProps) => (
    <svg
      viewBox="0 0 256 222"
      width="256"
      height="222"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMid"
    >
      <path fill="#fff" d="m128 0 128 221.705H0z" />
    </svg>
  ),
};

export type Icon = keyof typeof Icons;
