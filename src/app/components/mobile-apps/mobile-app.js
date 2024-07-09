import Image from "next/image";
import Link from "next/link";

export default function MobileApps() {

  function MobileApp(paragraph, store, src, url) {
    return(
      <li>
        <Link href={url}>
          <Image src={src} width={24} height={24}></Image>
          <div className="apps__text">
            <p className="apps__paragraph">{paragraph}</p>
            <p className="apps__store">{store}</p>
          </div>
        </Link>
      </li>
    );
  }

  return (
    <ul className="apps">
      {MobileApp(
        "get it on",
        "Google play",
        "/android.svg",
        "/"
      )}

      {MobileApp(
        "Available on the",
        "App Store",
        "/ios.svg",
        "/"
      )}
    </ul>
  );
}