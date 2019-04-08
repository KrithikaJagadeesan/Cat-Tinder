import React, { Component } from 'react'
import Cats from './components/Cats'
import NewCat from './components/NewCat'
import Header from './components/Header'
import { getCats } from './api'
import { createCat } from './api'
import { deleteCat} from './api'


class App extends Component {
    constructor(props){
		super(props)
		this.state = {
			cats: []
		}
	}

    handleNewCat(cat) {
	        createCat(cat)
        .then(successCat => {
            this.setState({
                cats: successCat })
            console.log("SUCCESS! New cat: ", successCat);
        })
    }

    componentWillMount() {
        getCats()
        .then(APIcats => {
            this.setState({
                cats: APIcats
            })
        })
    }
    deleteKitty(id){
        deleteCat(id)
        .then(APIcats => {
            this.setState({
                cats: APIcats
            })
        })
    }

  render() {
    return (
		<div>
            <Header />
			<Cats cats={this.state.cats} deleteKitty = {this.deleteKitty.bind(this)}/>
			<NewCat newSubmit= {this.handleNewCat.bind(this)} />
		</div>
    );
  }
}
export default App;
