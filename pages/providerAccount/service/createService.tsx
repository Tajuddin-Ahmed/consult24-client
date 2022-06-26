import { useRouter } from "next/router";
import { IoMdArrowBack } from "react-icons/io";
import cls from "../provider.module.css";
import * as Yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useEffect, useState } from "react";
import axios from "axios";
const CreateService = () => {
  const router = useRouter();
  const [category, setCategory] = useState([]);
  const [categoryId, setCategoryId] = useState();
  const [subCategory, setSubCategory] = useState([]);
  const [loading, setLoading] = useState(false);
  const handleOnChange = (e) => {
    setCategoryId(e.target.value);
  };

  // Getting all category
  useEffect(() => {
    const getAllCategory = async () => {
      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: "Token " + localStorage.getItem("token"),
        },
      };
      try {
        const res = await axios.get(
          "https://c24apidev.accelx.net/api/service_category/",
          config
        );
        if (res.status === 200) {
          setCategory(res.data);
        }
      } catch (error) {
        console.log(error.message);
      }
    };
    getAllCategory();
    // Getting All Sub category
    if (categoryId) {
      const getAllSubCategory = async () => {
        const config = {
          headers: {
            "Content-Type": "application/json",
            Authorization: "Token " + localStorage.getItem("token"),
          },
        };
        try {
          const res = await axios.get(
            `https://c24apidev.accelx.net/api/CategoryWiseSubCategoryAPIView/?category_id=${categoryId}`,
            config
          );
          if (res.status === 200) {
            setSubCategory(res.data);
          }
        } catch (error) {
          console.log(error.message);
        }
      };
      getAllSubCategory();
    }
  }, [categoryId]);

  const validationSchema = Yup.object().shape({
    serviceCategory: Yup.string().nullable().required("Required"),
    serviceSubCategory: Yup.string().required("Required"),
  });
  const formOptions = { resolver: yupResolver(validationSchema) };

  const { register, handleSubmit, reset, formState } = useForm(formOptions);
  const { errors } = formState;
  const onSubmit = (values: any) => {
    router.push(
      {
        pathname: "/providerAccount/createServiceMore",
        query: {
          ...values,
        },
      },
      "/providerAccount/service/createServiceMore"
    );
  };
  return (
    <>
      <div className={`bg-light pt-3 pb-5 ${cls.bgImg}`}>
        <div className="row">
          <div className="container">
            <div className="col-md-12 mt-5 d-flex justify-content-center">
              <div
                className="card p-4 bg-white me-5 shadow-sm"
                style={{ width: "32rem" }}
              >
                <p
                  className="card-text"
                  onClick={() => router.back()}
                  style={{ cursor: "pointer" }}
                >
                  <IoMdArrowBack /> Back
                </p>
                <form onSubmit={handleSubmit(onSubmit)}>
                  <div className={`card-body bg-light ${cls.font}`}>
                    <h5>Tell about your Service Category</h5>
                    <p style={{ fontSize: "12px" }}>
                      Customer will see this when they search
                    </p>
                    <div className="mb-2">
                      <label htmlFor="serviceCategory">Service Category</label>
                      <select
                        name="serviceCategory"
                        id="serviceCategory"
                        {...register("serviceCategory")}
                        onChange={handleOnChange}
                        className={`${cls.businessInput} ${
                          errors.serviceCategory ? "is-invalid" : ""
                        }`}
                      >
                        <option value="">Select Category</option>
                        {category.map((cat) => {
                          return (
                            <option key={cat.id} value={cat.id}>
                              {cat.category_name}
                            </option>
                          );
                        })}
                      </select>
                      <div className="invalid-feedback">
                        {errors.serviceCategory?.message}
                      </div>
                    </div>
                    <div className="mb-2">
                      <label htmlFor="serviceSubCategory">
                        Service Sub Category
                      </label>
                      <br />
                      <select
                        name="serviceSubCategory"
                        {...register("serviceSubCategory")}
                        id="serviceSubCategory"
                        className={`${cls.businessInput} ${
                          errors.serviceSubCategory ? "is-invalid" : ""
                        }`}
                      >
                        <option value="">Select Category</option>
                        {subCategory.map((subCat) => {
                          return (
                            <option key={subCat.id} value={subCat.id}>
                              {subCat.service_sub_category_name}
                            </option>
                          );
                        })}
                      </select>
                      <div className="invalid-feedback">
                        {errors.serviceSubCategory?.message}
                      </div>
                    </div>

                    <button
                      className="w-100 btn btn-info mt-3"
                      type="submit"
                      disabled={!formState.isValid && !formState.isDirty}
                    >
                      Next
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default CreateService;
