import  {Link} from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';

function Testomonial(props){
    const index = props.index;
    const item = props.items;
    const baseApiUrl = 'http://127.0.0.1:8000/api';
    const baseUrl = 'http://127.0.0.1:8000';
    
    var _class=''
    if(index=='0'){
        _class='active'
    }
       
    return(
        <div className={`carousel-item ${item.product.slug}`}>
            <figure className="text-center">
                <blockquote className="blockquote">
                    <p>A well-known quote, contained in a blockquote element.</p>
                </blockquote>
                <figcaption className="blockquote-footer">
                  <i className='fa fa-star text-warning'></i>
                  <i className='fa fa-star text-warning'></i>
                  <i className='fa fa-star text-warning'></i>
                  <i className='fa fa-star text-warning'></i>
                  <cite title="Source Title">Customer Name</cite>
                </figcaption>
              </figure>
        </div>
    )
}