import Header from "../../components/header";
import { Container } from "./style";
import map from "./map.svg";
import jwt_decode from "jwt-decode";
import axios from "axios";
import { useEffect, useState } from "react";

const CheckoutServices = () => {
  const [addressInfo, setAddressInfo] = useState({});
  const cart = JSON.parse(localStorage.getItem("cart"));
  const token = localStorage.getItem("authToken");
  const decoded = jwt_decode(token);
  const id = decoded.sub;
  //   console.log(id);

  const getDatasFromUser = async () => {
    try {
      const response = await axios.get(
        `https://easy-wash-server.herokuapp.com/users/${id}`
      );
      setAddressInfo(response.data.address);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(getDatasFromUser, []);

  const { street, number, district, city, UF } = addressInfo;

  return (
    <Container>
      <Header />
      <div className="address">
        <div className="imgContainer">
          <img src={map} alt="Map" />
        </div>
        <div className="addressInfo">
          <h3 className="infoTittle">Endereço de coleta:</h3>
          <p>
            R. {street}, {number}
          </p>
          <p>
            {district} - {city}, {UF}
          </p>
        </div>
      </div>
      <div className="productsContainer">
        <div className="productTitle">Meus produtos</div>
        <div className="productsList"></div>
      </div>
    </Container>
  );
};

export default CheckoutServices;
