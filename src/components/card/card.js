import "./card-style.css";

const Card = (item) => {
  console.log(item.original_title);
  return (
    <div className="item-card">
      <img
        className="image-poster"
        src={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
        alt={item.original_title}
      />
    </div>
  );
};

export default Card;
