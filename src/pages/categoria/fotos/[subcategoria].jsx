import SubcategoryCard from "@/components/Categories/Subcategory/SubcategoryCard";
import HeroCategory from "@/components/Hero/HeroCategory/HeroCategory";
import Layout from "@/components/Layout/Layout";
import subcategories from "@/data/subcategories";

export const getServerSideProps = async ({ params }) => {
  try {
    const subcategory = params.subcategoria;
    const items = subcategories[params.subcategoria] || [];
    return {
      props: { items, subcategory },
    };
  } catch (error) {
    return { props: { items: [] } };
  }
};

function Subcatgory({ items = [], subcategory }) {
  return (
    <Layout metaData={{ title: `Subcategoría | ${subcategory}` }}>
      <HeroCategory
        background="/img/category/bg_fotos.jpg"
        search={true}
        title={subcategory}
        desc="La magia en cada imagen"
        layer={{
          background:
            "linear-gradient(0deg, rgba(0,0,0,.7) 0%, rgba(0,0,0,0.3) 49%, rgba(0,0,0,0) 100%)",
          backgroundBlendMode: "multiply",
        }}
      />
      <section className="container p-5">
        <div className="row">
          {items.map((item, index) => (
            <div key={index} className="col-4">
              <SubcategoryCard {...item} />
            </div>
          ))}
        </div>
      </section>
    </Layout>
  );
}

export default Subcatgory;
