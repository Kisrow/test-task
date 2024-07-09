import Image from "next/image";

export default function Comments() {
  
  function Comment(userName, domen, text, img) {
    return (
      <li>
        <div className="comments__userInfo">
          <div className="comments__photo"><Image  src={img} width={48} height={48}/></div>
          <div className="comments__user">
            <p className="comments__userName">{userName}</p>
            <p className="comments__userDomen">{domen}</p>
          </div>
        </div>
        <p className="comments__paragraph">{text}</p>
      </li>
    );
  }
  
  return (
    <ul className="comments">
      {Comment(
        "Lorenzo",
        "@lorenzoo",
        "Amazing Telegram bot! Provides real-time crypto prices and news",
        "/lorenzo.png"
      )}
      {Comment(
        "Adalina",
        "@ada",
        "Must-have bot for crypto traders. Accurate signals and analysis",
        "/adalina.png"
      )}
      {Comment(
        "Alexander",
        "@alex_x",
        "Superb cryptocurrency bot! Quick updates and reliable data",
        "/alexander.png"
      )}
      {Comment(
        "Rushana",
        "@Hana",
        "Efficient and user-friendly bot. Simplifies crypto trading tasks",
        "/rushana.png"
      )}
    </ul>
  );
}