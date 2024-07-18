interface IconIsolationProps extends React.SVGProps<SVGSVGElement> {
  width?: string | number;
  height?: string | number;
  color?: string;
}

const IconIsolation: React.FC<IconIsolationProps> = ({
  width = "16",
  height = "14",
  color = "#0054FB",
  ...props
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 16 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g clipPath="url(#clip0_712_862)">
        <path
          d="M9.45503 12.67L15.315 2.52C15.965 1.4 15.155 0 13.865 0H2.13503C0.845029 0 0.0350286 1.4 0.685029 2.52L6.54503 12.68C7.19503 13.8 8.80503 13.8 9.45503 12.68V12.67Z"
          fill={color}
        />
      </g>
      <defs>
        <clipPath id="clip0_712_862">
          <rect
            width="15.09"
            height="13.51"
            fill="white"
            transform="translate(0.455017)"
          />
        </clipPath>
      </defs>
    </svg>
  );
};

export default IconIsolation;
