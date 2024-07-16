interface IconMenuProps extends React.SVGProps<SVGSVGElement> {
  width?: string | number;
  height?: string | number;
  color?: string;
}

export default function IconMenu({
  width = 18,
  height = 18,
  color = "#fff",
}: IconMenuProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      fill="none"
    >
      <path
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M2.25 9h13.5M2.25 4.5h13.5m-13.5 9h13.5"
      />
    </svg>
  );
}
