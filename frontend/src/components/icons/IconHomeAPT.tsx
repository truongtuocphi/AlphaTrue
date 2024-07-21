interface IconHomeProps extends React.SVGProps<SVGSVGElement> {
  width?: string | number;
  height?: string | number;
  color?: string;
}

const IconHome = ({
  width = 32,
  height = 32,
  color = "#fff",
}: IconHomeProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="26"
    height="22"
    fill="none"
    viewBox="0 0 26 22"
  >
    <path
      fill="#fff"
      d="M20.73 21.79h2.29a2.02 2.02 0 001.75-3.03l-3.96-6.86h-3.49l3.96 6.86c1.37 2.37-.55 3.03-.55 3.03z"
    ></path>
    <path
      fill="#fff"
      d="M17.02 11.4h8.02c0-1.67-1.35-3.03-3.03-3.03h-6.74l-4.83 8.37c0 .07-.18 2.01 2.33 2.02l4.25-7.36z"
    ></path>
    <path
      fill="#fff"
      d="M10.44 16.75l-1.16 2.02c-.56.97-.22 2.2.74 2.76.31.18.65.27 1.01.27h9.71s1.91-.65.54-3.03h-8.5c-2.51 0-2.34-1.95-2.33-2.01l-.01-.01zM15.71 3.08l-1.19-2.07a2.024 2.024 0 00-3.5 0L.77 18.76c-.56.96-.23 2.2.74 2.75.31.18.65.27 1.01.27L12.77 4.03c1.32-2.29 2.94-.96 2.94-.96v.01z"
    ></path>
    <path
      fill="#fff"
      d="M15.71 3.08s-1.62-1.33-2.94.96l2.21 3.83h3.49L15.7 3.08h.01z"
    ></path>
  </svg>
);
export default IconHome;
