import React, {Component} from 'react'
import './ResultList.css'
import BookCover from '../images/placeholder.jpg'

class ResultList extends Component {

    render(){

        var items = this.props.items
        // var bookCover = items.volumeInfo.imageLinks.thumbnail

        return(
            <div>
                <ul>
                    {items.map(item => (
                        <li key={item.id}>
                            <div className='returned__item'>
                                <div className='photo'>
                                    {/* TRYING TO BRING IN EACH THUMBNAIL
                                    I KNOW THUMBNAIL IS AT (data.items[0].volumeInfo.imageLinks.thumbnail)
                                    BUT IT SEEMS LIKE IMAGES HAVE TO BE IMPORTS....
                                    HOW DO I GET THE SRC LINKS DYNAMICALLY AND IMPORT THEM INTO A COMPONENT? 
                                    CURRENT PLACEHOLDER (YELLOW RECTANGLE IS COMING FROM A PHOTOSHOP FILE...*/}
                                    <img src={BookCover} alt='book cover'></img>
                                </div>

                                <div className="details">
                                    <h2>{item.volumeInfo.title}</h2>
                                    <h3>{item.volumeInfo.authors}</h3>
                                    {/* !!!TRYING TO RETURN PRICE BUT JSON HAS AMOUNT AND CURRENCY AS AN OBJECT */}
                                    {/* <h3>{item.saleInfo.listPrice.amount}</h3>   */}
                                    <p>{item.volumeInfo.description}</p>
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        )
    }

}

export default ResultList