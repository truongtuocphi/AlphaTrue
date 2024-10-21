interface IconAddressProps extends React.SVGProps<SVGSVGElement> {
  width?: string | number;
  height?: string | number;
  color?: string;
}

const IconAddress: React.FC<IconAddressProps> = ({
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
      viewBox="0 0 20 20"
      fill="none"
    >
      <path
        d="M10 10.4167C11.3807 10.4167 12.5 9.29746 12.5 7.91675C12.5 6.53604 11.3807 5.41675 10 5.41675C8.6193 5.41675 7.50001 6.53604 7.50001 7.91675C7.50001 9.29746 8.6193 10.4167 10 10.4167Z"
        stroke="#303433"
        stroke-width="1.5"
        strokeLinecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M10 10.4167C11.3807 10.4167 12.5 9.29746 12.5 7.91675C12.5 6.53604 11.3807 5.41675 10 5.41675C8.6193 5.41675 7.50001 6.53604 7.50001 7.91675C7.50001 9.29746 8.6193 10.4167 10 10.4167Z"
        stroke="white"
        strokeOpacity="0.2"
        stroke-width="1.5"
        strokeLinecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M10 18.3334C11.6667 15.0001 16.6667 12.8486 16.6667 8.33342C16.6667 4.65152 13.6819 1.66675 10 1.66675C6.31811 1.66675 3.33334 4.65152 3.33334 8.33342C3.33334 12.8486 8.33334 15.0001 10 18.3334Z"
        stroke="#303433"
        stroke-width="1.5"
        strokeLinecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M10 18.3334C11.6667 15.0001 16.6667 12.8486 16.6667 8.33342C16.6667 4.65152 13.6819 1.66675 10 1.66675C6.31811 1.66675 3.33334 4.65152 3.33334 8.33342C3.33334 12.8486 8.33334 15.0001 10 18.3334Z"
        stroke="white"
        strokeOpacity="0.2"
        stroke-width="1.5"
        strokeLinecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export default IconAddress;
