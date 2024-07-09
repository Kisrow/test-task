import Link from "next/link";
import Advantages from "../advantages/advantages"

export default function Channel() {
  return (
    <div className="channel">
      <p className="channel__paragraph">
        Subscribe to our channel to learn more
      </p>
      <Advantages/>
      <Link href="/" className="channel__link">
      Join Whatsapp
      </Link>
    </div>
  );
}