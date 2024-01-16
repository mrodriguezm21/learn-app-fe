import { Button } from '../../common';
import { BUTTONS, BUTTONS_VARIANTS } from '../../constants';
import './Profile.css';

export function Profile() {
    return (
        <section className="profile__container">
            <h1 className="header">My Account</h1>
            <section className="my-profile">
                <h2 className="subheader">My profile</h2>
                <div className="my-profile__avatar">
                    <img src="https://placehold.co/600x400" alt="profile pic" />
                    <div className="status__box">
                        <span>Status</span>
                        <span>Active</span>
                    </div>
                </div>
                <div className="my-profile__info">
                    <div className="my-profile__info__textbox">
                        <span className="bold">First Name</span>
                        <span>John</span>
                    </div>
                    <div className="my-profile__info__textbox">
                        <span className="bold">Last Name</span>
                        <span>Black</span>
                    </div>
                    <div className="my-profile__info__textbox">
                        <span className="bold">User Name</span>
                        <span>Jihn_12</span>
                    </div>
                    <div className="my-profile__info__textbox">
                        <span className="bold">Specialization</span>
                        <span>Java</span>
                    </div>
                    <div className="my-profile__info__textbox">
                        <span className="bold">Address</span>
                        <span>456 Lake Shore DrIL 6061lUnited States</span>
                    </div>
                    <div className="my-profile__info__textbox">
                        <span className="bold">Email</span>
                        <span>Jiohn_12@gmail.com</span>
                    </div>
                </div>
                <div className="my-profile__actions">
                    <Button>{BUTTONS.EDIT_PROFILE}</Button>
                    <Button variant={BUTTONS_VARIANTS.SECONDARY}>
                        {BUTTONS.CHANGE_PASSWORD}
                    </Button>
                </div>
            </section>
        </section>
    );
}
