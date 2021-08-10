import React,{Component} from "react";
import StoreContent from "../components/store_content";

class Store extends Component{
    render(){
        return(          
            <main className="minh-footer-adj bg-products">     
                <StoreContent/>
            </main>
        );
    }
}

export default Store;