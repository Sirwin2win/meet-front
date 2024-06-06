import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { FaEdit } from "react-icons/fa";
import { FaRegTrashAlt } from "react-icons/fa";

const ManageProduct = () => {
  const navigate = useNavigate();
  const [category, setCategory] = useState([]);
  useEffect(() => {
    const fetchCategory = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/products/");
        setCategory(res.data);
      } catch (error) {
        console.log("Error fetching data", error);
      }
    };
    fetchCategory();
  }, []);

  const deleteProduct = async (id) => {
    try {
      await axios.post("http://localhost:5000/api/products/remove/", {
        id: id,
      });
      // console.log("Post deleted:", id);
      setCategory(category.filter((category) => category._id !== id));
    } catch (error) {
      console.error("Error deleting category:", error);
    }
  };

  return (
    <div className="container">
      <Link to={"/create-room"}>
        {" "}
        <button className="btn btn-primary">Create Room</button>{" "}
      </Link>
      <table className="table table-hover">
        <thead>
          <tr>
            <th>Name</th>
            <th>Description</th>
            <th>Price</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {category.map((v) => (
            <tr>
              <td key={v._id}> {v.name} </td>
              <td key={v._id}> {v.description} </td>
              <td key={v._id}>
                <img
                  src={"http://localhost:5000/images/" + v.image}
                  style={{ height: "50px", width: "50px" }}
                  alt=""
                />
              </td>
              <td>
                {/* <Link to={`/${v.id}/detail`}><Icon.Trash style={colors}/></Link>  */}
                <button onClick={() => deleteProduct(v._id)}>
                  <FaRegTrashAlt />
                </button>
              </td>
              {/* <span><Link to={`/${v.id}/detail`}>More</Link></span> */}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ManageProduct;
