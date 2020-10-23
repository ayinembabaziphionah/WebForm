import React from "react";
import ReactDOM from "react-dom";
import "./App.css";
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      type1: "Fruits",
      veg1: "Magoes",
      veg1Img:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTpDE8h4jYQI8ZKU6vU6cSmN81fSSo3ye4CkA&usqp=CAU",
      MangoesQuantity: 10,
      veg2: "Mangoes",
      veg2Img:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR9-CAGHBX1iaT2xf_EsZXd6XhlVZOemxLvbA&usqp=CAU",
        MangoesQuantity: 30,
        appleImg:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQjzejhaKAYSmXKUenkIs-l7Iv3JFocWgKf5A&usqp=CAU",
      appleImgQuantity: 30,
      appleImgPrice: 100,
      };
  }
  render() {
    return (
      <div style={{ textAlign: "center" }}>
        <h1>MY GREEN KIOSK APP</h1>
        <h>  {this.state.type1} </h>
        <section className="products">
          <div className="product-card">
            <div className="product-image">
              <img className="photo" src={this.state.appleImg} alt="" />
            </div>
            <div className="product-info">
              <h5> Pineapples</h5>
              <p> Kes {this.state.appleImgPrice}</p>
              <p> Quantity {this.state.pineaplesQuantity} </p>
            </div>
          </div>
          <div className="product-card">
            <div className="product-image">
              <img className="photo" src={this.state.veg1Img} alt="" />
            </div>
            <div className="product-info">
              <h5>Bananas</h5>
              <h6> kes 50</h6>
              <p> Quantity {this.state.mangoesQuantity} </p>
            </div>
          </div>
          <div className="product-card">
            <div className="product-image">
              <img className="photo" src={this.state.veg2Img} alt="" />
            </div>
            <div className="product-info">
              <h5>Mangoes</h5>
              <h6> kes 75</h6>
              <p> Quantity {this.state.MangoesQuantity} </p>
            </div>
          </div>
          <div className="product-card">
            <div className="product-image">
              <img className="photo" src={this.state.bunchImg} alt="" />
            </div>
          </div>
 </section>
      </div>
    );
  }
}
export default App;