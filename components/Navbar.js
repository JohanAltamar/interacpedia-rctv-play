import Link from "next/link";

const Navbar = () => {
  return (
    <header className="fixed top-0 left-0 flex items-center w-screen bg-black bg-opacity-75 h-20 px-8 border-b border-blue-DEFAULT z-50">
      <div
        className="flex text-white font-extrabold items-center text-xl uppercase m-auto"
        style={{ width: "100%", maxWidth: 1270 }}
      >
        <Link href="/">
          <a>
            <img
              src="https://rtvcplay-v2.s3.amazonaws.com/s3fs-public/field/image/banners/logo-RTVCPlay-Header.png"
              alt="home"
              className="logo"
              height="54"
              width="172.5"
            />
          </a>
        </Link>
        <nav className="mx-5 h-20 flex items-center">
          <Link href="/ficcion">
            <a className="px-5 block h-20 flex items-center border-r border-gray-400 border-opacity-50 hover:bg-blue-DEFAULT">
              Ficción
            </a>
          </Link>
          <Link href="/ficcion">
            <a className="px-5 block h-20 flex items-center border-r border-gray-400 border-opacity-50 hover:bg-blue-DEFAULT">
              Documentales
            </a>
          </Link>
          <Link href="/ficcion">
            <a className="px-5 block h-20 flex items-center border-r border-gray-400 border-opacity-50 hover:bg-blue-DEFAULT">
              Podcasts
            </a>
          </Link>
          <Link href="/ficcion">
            <a className="px-5 block h-20 flex items-center border-r border-gray-400 border-opacity-50 hover:bg-blue-DEFAULT">
              Especiales
            </a>
          </Link>
          <Link href="/ficcion">
            <a className="px-5 block h-20 flex items-center border-r border-gray-400 border-opacity-50 hover:bg-blue-DEFAULT">
              <span style={{ marginRight: 10 }}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 17 17"
                  width="18"
                  height="18"
                  focusable="false"
                  aria-hidden="true"
                  fill="none"
                >
                  <image
                    id="image0"
                    width="17"
                    height="17"
                    x="0"
                    y="0"
                    xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABEAAAARCAMAAAAMs7fIAAAABGdBTUEAALGPC/xhBQAAACBjSFJN
AAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAY1BMVEX/////AAD/////////
////////////////////////ycn/Pz//Bwj/AAD/////kJD/AQH/////////////x8f/AQH/////
Pj7/////Bwj/////////Pz//////////AAD///89u+5uAAAAH3RSTlMAAAY5YHeALXRAj8vw/C6k
+XYINpD4Xcxz8X1ezC9hzK6H9QAAAAFiS0dEAIgFHUgAAAAHdElNRQfkBw4ELhgMnGGxAAAAiklE
QVQY022QWRKDIBBEB9B2YZHEFTXh/rcUQoJlxfc11TVL9xAFuChKlIXg9KWqkairJDQ4aVjsCEUr
lVayDZUJO8JIZ33EdsDjST0wjD5hB6CnCZj9DwlMtAAuKwpYaAV0VjSw3vRc9szA9rllL7f+/ZCJ
nnen3R49v25zETM5u2Espefiff7nAB5MD5vv+AofAAAAJXRFWHRkYXRlOmNyZWF0ZQAyMDIwLTA3
LTE0VDA0OjQ2OjI0KzAzOjAwzJSPrgAAACV0RVh0ZGF0ZTptb2RpZnkAMjAyMC0wNy0xNFQwNDo0
NjoyNCswMzowML3JNxIAAAAASUVORK5CYII="
                  ></image>
                </svg>
              </span>
              En Vivo
            </a>
          </Link>
          <Link href="/ficcion">
            <a className="px-5 block h-20 flex items-center border-r border-gray-400 border-opacity-50 hover:bg-blue-DEFAULT">
              <span style={{marginRight: 10}}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 82 40"
                  width="40"
                  height="18"
                  focusable="false"
                  aria-hidden="true"
                  color="#009bdb"
                >
                  <image xlinkHref="data:image/png;base64,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"></image>
                </svg>
              </span>
              Infantil
            </a>
          </Link>
          <Link href="/aprende">
            <a className="px-5 block h-20 flex items-center border-r border-gray-400 border-opacity-50 hover:bg-blue-DEFAULT">
              Aprende
            </a>
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
