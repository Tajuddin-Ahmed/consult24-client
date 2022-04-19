import Image from "next/image";
import { FaMapMarkerAlt } from "react-icons/fa";
const CategoryItem = ({ category }) => {
  const { img, title, address } = category;
  return (
    <>
      <div className="col-md-4 col-lg-4 col-sm-6">
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
    </>
  );
};
export default CategoryItem;
