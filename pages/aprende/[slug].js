import Head from "next/head";
import { useRouter } from "next/router";

const ProductPage = ({ product }) => {
  const router = useRouter();
  if (router.isFallback) {
    return <div>Loading category...</div>;
  }

  return (
    <div className="m-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-4 mt-8">
      <Head>
        <title>{product.title} product</title>
      </Head>
    </div>
  );
};

export default ProductPage;

export async function getStaticProps({ params }) {
  // const product = await getProduct(params.slug);
  const product = {title: "hola", slug:"matematicas"}

  return { props: { product } };
}

export async function getStaticPaths() {
  // const products = await getProducts();
  const products = [{title: "hola", slug:"matemáticas"}]
  return {
    paths: products.map((_product) => {
      return {
        params: { slug: _product.slug },
      };
    }),
    fallback: true,
  };
}
