import Head from "next/head";
import Link from "next/link";
import {
  getTopicsBySections,
} from "../../utils/api";

const index = ({ topics }) => {

  return (
    <div className="relative pt-20 px-12 pb-10 min-h-screen bg-purple-500">
      <Head>
        <title>Aprende | Interacpedia RCTVPlay</title>
      </Head>
      {!!topics.length &&
        topics.map(
          (section) =>
            !!section.topics.length && (
              <>
                <span className="flex items-center text-2xl text-white fill-current font-semibold pt-5">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 12 10"
                    width="12"
                    height="12"
                    focusable="false"
                    aria-hidden="true"
                    className="mr-1 transform -rotate-90 text-white"
                  >
                    <polygon
                      fill-rule="evenodd"
                      points="6.01 10 .01 0 12.01 0"
                    ></polygon>
                  </svg>
                  <h2 className="uppercase">{section.title}</h2>
                </span>
                <div className="flex mt-4">
                  {section.topics.map(({attributes, id}) => (
                    <Link href={`/aprende/${section.title}/${id}`}>
                      <div className="relative mr-6 cursor-pointer">
                        <img
                          src={attributes.field_cover_image.uri}
                          alt=""
                          width="300px"
                          height="400px"
                          style={{ maxHeight: 400, maxWidth: 300 }}
                        />
                        <div className="opacity-0 absolute top-0 left-0 w-full p-4 h-full text-white hover:opacity-100 bg-red-700 bg-opacity-75 border-2">
                          <img
                            src="https://rtvcplay-v2.s3.amazonaws.com/s3fs-public/field/logo_negative/brand/logo-senal-colombia-blanco.png"
                            alt="logo_senal colombia"
                            width="30%"
                            className="float-right"
                          />
                          <span className="w-full text-center flex justify-center mt-20">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 623.87 623.87"
                              width="64"
                              height="64"
                              focusable="false"
                              aria-hidden="true"
                              color="#ffffff"
                            >
                              <path
                                fill="#ffffff"
                                d="M311.93,0C139.66,0,0,139.66,0,311.93S139.66,623.87,311.93,623.87,623.87,484.21,623.87,311.93,484.21,0,311.93,0Zm0,585.34c-151,0-273.4-122.41-273.4-273.41s122.41-273.4,273.4-273.4,273.41,122.41,273.41,273.4S462.93,585.34,311.93,585.34Z"
                              ></path>
                              <path
                                fill="#ffffff"
                                d="M418.47,326.83,278,414.61a17.56,17.56,0,0,1-26.86-14.89V224.16A17.55,17.55,0,0,1,278,209.27l140.46,87.78a17.56,17.56,0,0,1,0,29.78Z"
                              ></path>
                            </svg>
                          </span>
                          <span className="capitalize">{section.title}</span>
                          <h3 className="font-bold text-3xl capitalize">
                            {attributes.title}
                          </h3>
                          <p>{attributes.field_resume}</p>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </>
            )
        )}
    </div>
  );
};

export default index;

export async function getStaticProps() {

  const topics = await getTopicsBySections(
    "7031cf31-422d-4044-a3eb-e498098fb213"
  );

  return { props: { topics } };
}
