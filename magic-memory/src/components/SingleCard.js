import './SingleCard.css';

export default function SingleCard({ card }) {
  return (
    <div className="card" key={card.id}>
      <div>
        <img className="front" src={card.src} alt="card front" />
        <img src="/img/cover.png" alt="cover card" className="back" />
      </div>
    </div>
  );
}
