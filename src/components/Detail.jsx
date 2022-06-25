import React from 'react';
import cardData from './cardData.json'
import {useParams} from 'react-router-dom'
import './detail.css'

const Detail = ({card}) => {
    const {id} = useParams();
    return (
        <div>
            <h1>{card.imgAlt}</h1>
           <div className='img-detail' style={{background:`url(${cardData[id-1].imgUrl}) no-repeat center / cover`}}></div>
        </div>
    );
};

export default Detail;