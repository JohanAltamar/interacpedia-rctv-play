import Head from "next/head";
import { useRouter } from "next/router";
import { useState } from "react";
import VideoPlayer from "../../../components/VideoPlayer";
import { getTopic, getTopics, getVideosByTopic } from "../../../utils/api";

const ProductPage = ({ topic, videos }) => {
  const router = useRouter();

  if (router.isFallback) {
    return <div>Loading category...</div>;
  }

  const { title, field_cover_image } = topic.attributes;
  
  const initialState = {url: "", open: false};
  const [videoPlayer, setVideoPlayer] = useState(initialState);

  const handleVideoClick = (url) => {
    setVideoPlayer({open: true, url})
  }

  const handleVideoPlayerClose = () => {
    setVideoPlayer(initialState);
  }
  
  return (
    <div className="min-h-screen bg-purple-200 pt-20 px-12 flex flex-col items-center relative">
      <Head>
        <title>{title} | RCTV Play</title>
      </Head>
      <h1 className="text-center text-4xl my-5 font-bold capitalize">
        {title}
      </h1>
      <img
        src={field_cover_image.uri}
        alt={field_cover_image.title}
        style={{ maxWidth: 300, maxHeight: 400 }}
      />
      <hr />
      {!!videos.length && (
        <section className="w-full my-5">
          <h3 className="text-2xl">Videos</h3>
          {videos.map(({ attributes, id }) => (
            <div
              className="my-5"
              onClick={() => {
                handleVideoClick(attributes.field_video_url.uri);
              }}
            >
              <video
                className="cursor-pointer"
                src={attributes.field_video_url.uri}
                width="400"
              />
              <p className="capitalize">{attributes.title}</p>
            </div>
          ))}
        </section>
      )}
      <VideoPlayer url={videoPlayer.url} open={videoPlayer.open} close={handleVideoPlayerClose} />
    </div>
  );
};

export default ProductPage;

export async function getStaticProps({ params }) {
  const topic = await getTopic(params.pid);
  const videos = await getVideosByTopic(params.pid);

  return { props: { topic, videos } };
}

export async function getStaticPaths() {
  const topics = await getTopics();

  return {
    paths: topics.map((topic) => {
      return {
        params: { pid: topic.id, slug: topic.slug || "hola" },
      };
    }),
    fallback: true,
  };
}
