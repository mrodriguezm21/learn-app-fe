import './AboutUs.css';
import { CardMember } from './components/CardMember';
import bannerImg from '../../assets/about-us-banner.jpg';
import member1Img from '../../assets/member1.jpg';
import member2Img from '../../assets/member2.jpg';
import member3Img from '../../assets/member3.jpg';

export function AboutUs() {
    const teamMembers = [
        {
            imgSrc: member1Img,
            name: 'John Doe',
            profession: 'Professional title',
            description: 'Pariatur ea consectetur anim qui nisi exerci',
        },
        {
            imgSrc: member2Img,
            name: 'Sara Rose',
            profession: 'Professional title',
            description: 'Laborum officia esse cillum mollit eiusmod',
        },
        {
            imgSrc: member3Img,
            name: 'Jack Black',
            profession: 'Professional title',
            description: 'Culpa adipisicing aute sunt velit cupidatat qui a',
        },
    ];
    return (
        <section className="about-us">
            <h1 className="header">About Us</h1>
            <p className="about-us__main-text">
                Welcome to the &apos;About Us&apos;section of Learn Platform,
                where we aim to provide you with a deeper understanding of our
                philosophy, values, and mission. Established in 2023, Learn
                Platform was born out of a passion for learning and a belief in
                the power of knowledge to transform lives.{' '}
            </p>
            <div className="about-us__banner">
                <img src={bannerImg} alt="group of 4 people looking a laptop" />
            </div>
            <div className="about-us__team">
                <div className="about-us__team__heading">
                    <h2>Our Team</h2>
                    <p>
                        Aliqua ipsum tempor aliqua eiusmod lorem ad labore culpa
                        aliquip
                    </p>
                </div>
                {teamMembers.map((member, index) => (
                    <CardMember
                        key={index}
                        imgSrc={member.imgSrc}
                        name={member.name}
                        profession={member.profession}
                        description={member.description}
                    />
                ))}
            </div>
        </section>
    );
}
