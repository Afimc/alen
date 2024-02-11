import React,{Component} from "react";
import Cards from '../@components/Cards/Cards';
import Header from '../@components/Header/Header';
import {Offers} from '../@components/Offers/Offers';
import Footer from '../@components/Footer/Footer';



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
            <div className='App'>
                <Header searchChange={this.onSearchChange}/>
                <Cards Offers={filteredOffers} />
                <Footer/>
            </div>
        );

    }
    


}

export default App;