import React,{Component} from "react";
import ProductsList from "../components/products_list";

class Products extends Component{
    render(){
        return(          
            <main className="minh-footer-adj bg-products">     
                <ProductsList/>
            </main>
        );
    }
}

export default Products;