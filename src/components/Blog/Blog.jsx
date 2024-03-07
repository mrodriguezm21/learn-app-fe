import { Box, Button } from '../../common';
import './Blog.css';

export function Blog() {
    const cardContent = {
        imgSrc: 'https://via.placeholder.com/150',
        imgAlt: 'placeholder',
        header: 'Blog Title',
        tag: 'Do consectetur',
        timeToRead: 5,
        date: 'Dec 24, 2022',
    };
    // const cards = Array(6).fill(cardContent);

    return (
        <section className="blog">
            <h1 className="header">Blog</h1>
            <ul className="blog__cards_container">
                {Array(6)
                    .fill(cardContent)
                    .map((card, index) => (
                        <li key={index}>
                            <Box
                                imgSrc={card.imgSrc}
                                imgAlt={card.imgAlt}
                                header={card.header}
                                tag={card.tag}
                                timeToRead={card.timeToRead}
                                date={card.date}
                            />
                        </li>
                    ))}
            </ul>
            <Button>Load more articles</Button>
        </section>
    );
}
