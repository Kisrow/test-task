export default function Advantages() {

  function Advantage(value, name) {
    return(
      <li>
        <p className="advantages__value">{value}</p>
        <p className="advantages__name">{name}</p>
      </li>
    )
  }

  return (
    <ul className="advantages">
      {Advantage("20K+", "subscribers")}
      {Advantage("19,5K", "successful cases")}
      {Advantage("4.8/5", "rating")}
    </ul>
  );
}