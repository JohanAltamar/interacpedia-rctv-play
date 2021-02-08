import axios from "axios";

export function getDrupalUrl(path) {
  return `${
    process.env.NEXT_PUBLIC_DRUPAL_API_URL || "http://localhost/drupal9"
  }/jsonapi/node${path}`;
}

// Helper to make GET requests to Strapi
export async function fetchAPI(path) {
  try {
    const requestUrl = getDrupalUrl(path);
    const response = await axios.get(requestUrl);
    const { data } = response.data;
    return data;
  } catch (error) {
    console.error(error);
  }
}

export async function getCategories() {
  const categories = await fetchAPI(
    "/categories?fields[node--categories]=title"
  );
  return categories;
}

export async function getCategory(categoryID) {
  const categories = await fetchAPI(
    `/categories/${categoryID}?fields[node--categories]=title`
  );
  return categories;
}

export async function getSections(categoryID) {
  let sections = await fetchAPI(
    `/sections?fields[node--sections]=title${
      categoryID ? "&filter[field_category.id]=" + categoryID : ""
    }`
  );
  return sections;
}

export async function getSection(sectionID) {
  const sections = await fetchAPI(
    `/sections/${sectionID}?fields[node--sections]=title`
  );
  return sections;
}

export async function getTopics(sectionID) {
  const topics = await fetchAPI(`/topics${sectionID ? "?filter[field_section.id]=" + sectionID : ""}`);

  return topics;
}

export async function getTopicsBySections(categoryID){
  const sections = await getSections(categoryID);

  const values = Promise.all(sections.map(async({id:sectionID, attributes}) => {
    const topicObj = {};
    const topics = await getTopics(sectionID);

    topicObj.title = attributes.title;
    topicObj.topics = topics;

    return topicObj;
  }))

  return values;
}

export async function getTopic(topicID) {
  const topics = await fetchAPI(
    `/topics/${topicID}`
  );
  return topics;
}

export async function getVideos(sectionID) {
  const videos = await fetchAPI(
    `/videos?fields[node--videos]=title${
      sectionID ? "&filter[field_section.id]=" + sectionID : ""
    }`
  );
  console.log("hola", videos);

  return videos;
}

export async function getVideosBySection(categoryID) {
  try {
    const sectionArray = await getSections(categoryID);

    const value = await Promise.all(sectionArray.map(async({ id: sectionID, attributes }) => {
      let videosObj = {};
      const videos = await fetchAPI(
        `/videos${
          sectionID ? "?filter[field_section.id]=" + sectionID : ""
        }`
      );

      videosObj.title = attributes.title;
      videosObj.videos = videos;

      return videosObj;
    }))

    return value;
  } catch (error) {
    console.error(error);
  }
}

export async function getVideosByTopic(topicID) {
  console.log(topicID)
  const videos = await fetchAPI(`/videos?filter[field_topic.id]=${topicID}`)

  return videos
}

export async function getVideo(videoID) {
  const videos = await fetchAPI(
    `/videos/${videoID}?fields[node--videos]=title`
  );
  return videos;
}

export async function getProducts() {
  const products = await fetchAPI("/products");
  return products;
}

export async function getProduct(slug) {
  const products = await fetchAPI(`/products?slug=${slug}`);
  return products?.[0];
}
