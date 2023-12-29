import { JoinUsBox } from './components/JoinUsBox';
import imgTrainer from '../../assets/join-us-trainer.png';
import imgStudent from '../../assets/join-us-student.jpeg';
import './JoinUs.css';

export function JoinUs() {
    return (
        <section className="join-us__container">
            <h1 className="header">Join Us</h1>
            <JoinUsBox rol="Trainer" imgSrc={imgTrainer} />
            <JoinUsBox rol="Student" imgSrc={imgStudent} />
        </section>
    );
}
