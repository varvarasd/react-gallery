import React, { useContext, Fragment } from 'react';
import {
    Layout,
    Button,
    Loading,
    Image,
    LeftArrow,
    RightArrow
} from '../../components';
import Error from '../Error';

import ImagesContext from '../../context/ImagesContext';
import './home.scss';

const Home = () => {
    const { images, image, isLoading, dispatch, failedFetch } = useContext(ImagesContext);

    if(!images.length || failedFetch) return <Error errorMessage={failedFetch}/>;

    const mainContent = <Fragment>
        <div className="content__wrapper">
            <Image url={image.url} alt={image.author} />
        </div>
        <div className="buttons__wrapper">
            <Button role="previous" addClass="previous" labelName="previous" action={() => dispatch({ type: 'PREVIOUS_IMAGE' })}>
                <LeftArrow width={"20px"}/>
            </Button>
            <p className="image__author">By {image && image.author}</p>
            <Button role="next"addClass="next" labelName="next" action={() => dispatch({ type: 'NEXT_IMAGE' })}>
                <RightArrow width={"20px"}/>
            </Button>
        </div>
    </Fragment>;

    const contentElement = isLoading ? <Loading /> : mainContent;

    const preloadImages = images.map(({url, author}) => <link key={author} priority={true} as="image" href={url} />);

    return (
        <Layout
            links={preloadImages}
            title='React Gallery - Home' 
            description="Simple react gallery - home page">
            <section className="container">
                {contentElement}
            </section>
        </Layout>
    );
}

export default Home;