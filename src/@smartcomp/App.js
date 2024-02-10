import React,{Component} from "react";
import Cards from '../@components/Cards/Cards';
import Header from '../@components/Header/Header';
import {Offers} from '../@components/Offers/Offers';



class App extends Component {
    constructor() {
        super()
        this.state = {
            Offers: Offers,
            Searchfield: ''
           
        }
    }
    
    onSearchChange = (event) => {
        this.setState({Searchfield:event.target.value })

    }

    render() {
        const filteredOffers=this.state.Offers.filter(Offers =>{
            return Offers.name.toLowerCase().includes(this.state.Searchfield.toLowerCase());
        }) 
        
        return(
            <div>
                <Header searchChange={this.onSearchChange}/>
                {/* <SearchBox searchChange={this.onSearchChange} /> */}
                <Cards Offers={filteredOffers} />
            </div>
        );

    }
    


}

export default App;