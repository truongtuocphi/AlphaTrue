interface IconTwitterCircleProps extends React.SVGProps<SVGSVGElement> {
  width?: string | number;
  height?: string | number;
  color?: string;
}

const IconTwitterCircle: React.FC<IconTwitterCircleProps> = ({
  width = "1rem",
  height = "1rem",
  color = "currentColor",
  ...props
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 36 36"
      fill="none"
    >
      <g clipPath="url(#clip0_1432_4317)">
        <path
          d="M18 36C27.9411 36 36 27.9411 36 18C36 8.05887 27.9411 0 18 0C8.05887 0 0 8.05887 0 18C0 27.9411 8.05887 36 18 36Z"
          fill="#303433"
        />
        <path
          d="M18 36C27.9411 36 36 27.9411 36 18C36 8.05887 27.9411 0 18 0C8.05887 0 0 8.05887 0 18C0 27.9411 8.05887 36 18 36Z"
          fill="white"
          fillOpacity="0.2"
        />
        <path
          d="M23.5083 10.5073H26.179L20.3444 17.1759L27.2083 26.2504H21.8339L17.6244 20.7468L12.8079 26.2504H10.1356L16.3763 19.1176L9.79167 10.5073H15.3026L19.1075 15.5378L23.5083 10.5073ZM22.571 24.6519H24.0508L14.4984 12.0219H12.9104L22.571 24.6519Z"
          fill="white"
        />
      </g>
      <defs>
        <clipPath id="clip0_1432_4317">
          <rect width="36" height="36" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default IconTwitterCircle;
