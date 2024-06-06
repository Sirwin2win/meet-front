import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Styles.css";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

const Products = () => {
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
  return (
    <div className="container">
      <div className="row">
        {category.map((v) => (
          <div className="col-sm-4 my-4">
            <Card style={{ width: "18rem" }}>
              <Card.Img
                variant="top"
                src={"http://localhost:5000/images/" + v.image}
                className="prod"
              />
              <Card.Body>
                <Card.Title key={v.name}>{v.name}</Card.Title>
                <Card.Text key={v.description}>{v.description}</Card.Text>
                <Link to={`/product/${v._id}`}>
                  <Button variant="primary">Book Now</Button>
                </Link>
              </Card.Body>
            </Card>

            {/* <p key={v.name}>{v.name}</p>
           <img src={'http://localhost:5000/images/'+v.image} alt='' className='prod' />
        <p key={v.description}>{v.description}</p> */}
          </div>
        ))}
        {/* <div class="col-sm-3">col-sm</div> */}
      </div>
    </div>
  );
};

export default Products;
