interface IconArrowProps {
  width?: number | string;
  height?: number | string;
  fill?: string;
}

const IconArrow: React.FC<IconArrowProps> = ({ width, height, fill }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      fontSize={12}
      color={fill}
      stroke="currentColor"
      strokeWidth="1.5"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M4.5 10.5L12 3m0 0l7.5 7.5M12 3v18"
      ></path>
    </svg>
  );
};

export default IconArrow;
