import Image from "next/image";
import { FaMapMarkerAlt } from "react-icons/fa";
const CategoryItem = ({ category }) => {
  const { img, title, address } = category;
  return (
    <>
      <div className="col-xl-4 col-lg-4 col-md-4 ">
        <div className="single-listings-box without-boxshadow">
          <div className="rounded">
            <Image src={img} width={500} height={350} alt="image" />
          </div>
          <div className="text-start">
            <h6>{title}</h6>
            <address>
              <FaMapMarkerAlt />
              {address}
            </address>
          </div>
        </div>
      </div>
    </>
  );
};
export default CategoryItem;
