import TextInformation from "./components/text/text";
import Channel from "./components/channel/channel";
import MobileApps from "./components/mobile-apps/mobile-app";
import Comments from "./components/comments/comments";

export default function Home() {
  return (
    <>
      <header>
        <TextInformation />
      </header>
      <main>
        <Channel/>
        <Comments/>
      </main>
      <footer>
        <MobileApps/>
      </footer>
    </>
  );
}
