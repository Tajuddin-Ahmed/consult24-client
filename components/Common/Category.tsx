import Link from "next/link";
import CategoryItem from "./CategoryItem";

const Category = () => {
  const categories = [
    {
      id: 1,
      img: "/images/category/category-7.jpg",
      title: "House Cleaning",
      address: "san francisco",
    },
    {
      id: 2,
      img: "/images/category/category-8.jpg",
      title: "Interior painting",
      address: "california",
    },
    {
      id: 3,
      img: "/images/category/category-9.jpg",
      title: "Handyman",
      address: "syatle",
    },
  ];
  return (
    <>
      <section className="category-area pt-100 pb-0 bg-f5f5f5">
        <div className="container">
          <div className="section-title">
            <h2>Popular topics</h2>
          </div>

          <div className="row">
            {categories.map((category) => (
              <CategoryItem
                category={category}
                key={category.id}
              ></CategoryItem>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Category;
