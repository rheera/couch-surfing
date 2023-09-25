import "../scss/Card.scss";

const Card = (props: { title: string; image: string; price: number }) => (
  <div className="card">
    {props.title}
    <img src={props.image} />
    <div>{props.price}/night</div>
  </div>
);

export default Card;
