import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./Products.css";
import CardList from "../Components/CardList";


function Products() {
  return (
    <div className="Products">
      <BrowserRouter>
        <Switch>
          <Route exact path="/products" component={CardList} />
        </Switch>
      </BrowserRouter>
      
    </div>
  );
}

export default Products;
