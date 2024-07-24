const Card = ({ card }: any) => {
  return (
    <div
      key={card.id}
      className="group relative h-[300px] w-[448px] overflow-hidden bg-neutral-200 rounded-lg cursor-pointer"
    >
      <div
        style={{
          backgroundImage: `url(${card.src})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="absolute inset-0 z-0 transition-transform duration-300 group-hover:scale-110"
      ></div>
    </div>
  );
};

export default Card;
