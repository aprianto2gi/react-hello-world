import React, {Component} from "react";
import YoutubeComp from "../../component/YoutubeComp/YoutubeComp";

class Home extends Component{
    render(){
        return(
            <div>
                <p>Youtube Component</p><hr />
                <YoutubeComp time="8.00" title="Part 1" desc="Installasi React JS" />
                <YoutubeComp time="9.00" title="Part 2" desc="Struktur React JS" />
                <YoutubeComp time="10.00" title="Part 3" desc="Componen & Container React JS" />
                <YoutubeComp time="11.00" title="Part 4" desc="Home di Container" />
                <YoutubeComp />
            </div>            
        )       
    }
}

export default Home;