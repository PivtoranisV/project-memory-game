const CardsList = ({ data }) => {
  return (
    <>
      <ul>
        {data.map((card) => (
          <li key={card._id}>
            <div>
              <img src={card.imageUrl} alt={card.name} />
            </div>
            <h2>{card.name}</h2>
          </li>
        ))}
      </ul>
    </>
  );
};

export default CardsList;
