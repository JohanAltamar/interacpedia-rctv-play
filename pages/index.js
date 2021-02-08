import Head from "next/head";
import Link from "next/link";
// import ProductsList from "../components/ProductsList";
// import { getProducts } from "../utils/api";

const HomePage = () => {
  return (
    <div className="w-full">
      <Head>
        <title>Interacpedia RCTVPlay</title>
      </Head>
      {/* <ProductsList products={products} /> */}
      <div className="video-container relative">
        <video
          src="https://rtvcplay-v2.s3.amazonaws.com/s3fs-public/field/field_video_cover_bg/production/SLIDER%20WEB%20CARNE%20DE%20TU%20CARNE_0.mp4"
          autoPlay
          loop
        ></video>
        <div
          className="info-container absolute bottom-0 left-0 flex flex-col justify-center items-center text-white w-full"
          style={{ boxShadow: "inset 0px -50px 30px 0px rgba(0,0,0,0.95)" }}
        >
          <span className="uppercase text-2xl px-4 mt-8 bg-red-600">
            Estreno
          </span>
          <span
            className="text-xl"
            style={{ textShadow: "rgb(0, 0, 0) 2px 3px 5px" }}
          >
            Película de ficción
          </span>
          <span
            className="uppercase mb-10"
            style={{
              fontSize: "6rem",
              lineHeight: "1",
              textShadow: "rgb(0, 0, 0) 2px 3px 5px",
            }}
          >
            Carne de tu carne
          </span>
          <Link href="/">
            <a className="text-2xl border flex items-center px-5 py-3 mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 623.87 623.87"
                width="30"
                height="30"
                focusable="false"
                ariaHidden="true"
                color="#FFF"
              >
                <path
                  fill="#FFF"
                  d="M311.93,0C139.66,0,0,139.66,0,311.93S139.66,623.87,311.93,623.87,623.87,484.21,623.87,311.93,484.21,0,311.93,0Zm0,585.34c-151,0-273.4-122.41-273.4-273.41s122.41-273.4,273.4-273.4,273.41,122.41,273.41,273.4S462.93,585.34,311.93,585.34Z"
                ></path>
                <path
                  fill="#FFF"
                  d="M418.47,326.83,278,414.61a17.56,17.56,0,0,1-26.86-14.89V224.16A17.55,17.55,0,0,1,278,209.27l140.46,87.78a17.56,17.56,0,0,1,0,29.78Z"
                ></path>
              </svg>
              <span className="uppercase ml-4">Ver ahora</span>
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
