import React, { Fragment } from 'react';
import './image.scss';

const Image = ({url, alt}) => {
    return <Fragment>
        <div className="image__wrapper">
            <img className="image" src={url} alt={alt}/>
        </div>
    </Fragment>;
};

export default Image;

