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
  QuestionMark: ({ ...props }: LucideProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="50.012"
      height="49.3"
      viewBox="0 0 50.012 49.3"
    >
      <g
        id="Group_332"
        data-name="Group 332"
        transform="matrix(0.995, 0.105, -0.105, 0.995, 4.798, -1.117)"
      >
        <path
          id="Path_1377"
          data-name="Path 1377"
          d="M35.562,3.524c-5.252-2.232-11.01-2.394-13.881-2.4A23.253,23.253,0,0,0,8.367,5.282C3.72,8.614-.03,14.617,0,24.222c-.03,9.5,3.014,15.144,7.484,18.148,4.435,2.989,9.837,3.373,14.433,3.526.3.013.89.006,1.006.006,9.376,0,20.294-5.771,22.412-23.763a23.926,23.926,0,0,0,.245-3.481A15.474,15.474,0,0,0,35.562,3.524Zm6.759,18.218C40.039,38.825,31.085,42.72,22.751,42.863c-.262.006-.513,0-.752,0-4.477-.13-9.3-.6-12.812-3.008C5.71,37.467,3.076,33.169,3.04,24.222,3.1,6.767,15.765,4.315,21.681,4.163c2.707-.016,8.139.2,12.686,2.156,4.547,2.019,8.117,5.316,8.181,12.339A23.609,23.609,0,0,1,42.322,21.742Z"
          transform="translate(0)"
          fill="#ee6200"
        />
        <path
          id="Path_1378"
          data-name="Path 1378"
          d="M9.573,11.216a1.786,1.786,0,0,0-.9-.5,1.7,1.7,0,0,0-1.45.525,1.426,1.426,0,0,0-.051,2.3c.019.019.052.054.068.067l.016.022a1.511,1.511,0,0,0,2.3.016A1.619,1.619,0,0,0,9.573,11.216Z"
          transform="translate(14.912 21.606)"
          fill="#ee6200"
        />
        <path
          id="Path_1379"
          data-name="Path 1379"
          d="M14.986,9.962c.467-1.017-.2-3.262-2.771-3.383a7.226,7.226,0,0,0-.924.067c-2.806.277-2.863,2.941-2.931,3.714v.029a1.52,1.52,0,0,1-3.025.293,3.009,3.009,0,0,1-.011-.321c-.07-.935.318-6.015,5.586-6.737a11.741,11.741,0,0,1,1.305-.079,5.394,5.394,0,0,1,4.745,2.251,6.153,6.153,0,0,1,1.052,4.318c-.184,1.634-2.114,4.006-3.755,5.8-1.649,1.669-3.329,3.469-3.5,4.108a2.626,2.626,0,0,0-.283,1.211,3.9,3.9,0,0,0,.264,1.339,2.779,2.779,0,0,0,.231.5,1.523,1.523,0,0,1-.48,2.092,1.548,1.548,0,0,1-.8.229A1.522,1.522,0,0,1,8.4,24.68a6.93,6.93,0,0,1-.957-3.45A5.343,5.343,0,0,1,7.979,18.8c.75-1.787,2.5-3.453,4.087-4.992A13.265,13.265,0,0,0,14.986,9.962Z"
          transform="translate(11.995 5.456)"
          fill="#ee6200"
        />
      </g>
    </svg>
  ),
};

export type Icon = keyof typeof Icons;
