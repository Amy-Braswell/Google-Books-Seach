import React, {Component} from 'react'
import './SearchBar.css'
import ResultList from '../ResultList/ResultList'


class SearchBar extends Component{

    constructor(props) {
        super(props);
        this.state = {
            endpoint: 'https://www.googleapis.com/books/v1/volumes?q=',
            apiKey: '&key=AIzaSyCNZ3ZrFLo1JrewwGP4NfsgIEVYDsy7I3Y',
            searchedKeyword: '',
            items:[]
        };
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange(event) {
        this.setState({searchedKeyword: event.target.value})
    }

    handleSubmit(e){
        e.preventDefault()

        const url = this.state.endpoint + this.state.searchedKeyword + this.state.apiKey

        fetch(url)
        .then(res => res.json())
        .then(data => {
          this.setState({
            items: data.items,
          })
        })
    }

    render(){
       
        return (
            <div className="parent-container"> 
                <header>
                    <form 
                    className="search__form"
                    onSubmit={this.handleSubmit}
                    >
                        <div className="search__bar">
                            <label htmlFor="search">Search:</label>
                            <input required
                                type="text" 
                                placeholder="Enter Keyword"
                                value={this.state.value} 
                                onChange={this.handleChange}
                                name="searchedKeyword"
                            />
                            <button type="submit">Search</button>
                        </div>
                    </form>
                </header>

                <div>
                    <ResultList 
                        items = {this.state.items} 
                    />
                </div>
            </div>
          )
    }

}

export default SearchBar

