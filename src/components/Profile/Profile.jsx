import { useState } from 'react';
import { AgGridReact } from 'ag-grid-react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Button } from '../../common';
import { BUTTONS, BUTTONS_VARIANTS, ROLS } from '../../constants';
import './Profile.css';
import 'ag-grid-community/styles/ag-grid.css'; // Core CSS
import 'ag-grid-community/styles/ag-theme-quartz.css'; // Theme
import checkIcon from '../../assets/check.svg';
import { selectUserInfo } from '../../store/authSlice';

export function Profile() {
    const navigate = useNavigate();
    const {
        firstName,
        lastName,
        username,
        email,
        address,
        specialization,
        dateOfBirth,
        avatar,
        role,
    } = useSelector(selectUserInfo);
    const [rowDataStudent, setRowDataStudent] = useState([
        { name: 'Elizabeth Lopez', specialization: 'PHP' },
        { name: 'Matthew Martinez', specialization: 'JavaScript' },
        { name: 'Elizabeth Hall', specialization: 'Algorhtms' },
    ]);
    const [rowDataTrainer, setRowDataTrainer] = useState([
        { name: 'Elizabeth Lopez', status: true },
        { name: 'Matthew Martinez', status: true },
        { name: 'Elizabeth Hall', status: false },
    ]);
    const [colfDefsTrainer, setColfDefsTrainer] = useState([
        { field: 'name', width: 170, cellClass: 'bold', resizable: false },
        {
            field: 'status',
            cellDataType: 'text',
            sortable: true,
            filter: true,
            width: 130,
            resizable: false,
            valueFormatter: (params) =>
                params.value ? 'ACTIVE' : ' NOT ACTIVE',
            cellClassRules: {
                'status--active': (params) => params.value === true,
                'status--inactive': (params) => params.value === false,
            },
        },
    ]);
    const [colfDefsStudent, setColfDefsStudent] = useState([
        { field: 'name', width: 170, cellClass: 'bold', resizable: false },
        {
            field: 'specialization',
            cellDataType: 'text',
            sortable: true,
            filter: true,
            width: 130,
            resizable: false,
        },
    ]);
    const handleChangePassword = () => {
        navigate('/change-password');
    };
    return (
        <section className="profile__container">
            <h1 className="header">My Account</h1>
            <section className="my-profile">
                <h2 className="subheader">My profile</h2>
                <div className="my-profile__avatar">
                    <img
                        src={avatar ?? 'https://placehold.co/600x400'}
                        alt="profile pic"
                    />
                    <div className="status__box">
                        <span className="bold">Status</span>
                        <div className="status--active">
                            <img src={checkIcon} alt="" />
                            Active
                        </div>
                    </div>
                </div>
                <div className="my-profile__info">
                    <div className="my-profile__info__textbox">
                        <span className="bold">First Name</span>
                        <span>{firstName}</span>
                    </div>
                    <div className="my-profile__info__textbox">
                        <span className="bold">Last Name</span>
                        <span>{lastName}</span>
                    </div>
                    <div className="my-profile__info__textbox">
                        <span className="bold">User Name</span>
                        <span>{username}</span>
                    </div>
                    {dateOfBirth && (
                        <div className="my-profile__info__textbox">
                            <span className="bold">Date of Birth</span>
                            <span>{dateOfBirth}</span>
                        </div>
                    )}
                    <div className="my-profile__info__textbox">
                        <span className="bold">Specialization</span>
                        <span>{specialization ?? 'Update your profile'}</span>
                    </div>
                    <div className="my-profile__info__textbox">
                        <span className="bold">Address</span>
                        <span>{address ?? 'Unknown'}</span>
                    </div>
                    <div className="my-profile__info__textbox">
                        <span className="bold">Email</span>
                        <span>{email}</span>
                    </div>
                </div>
            </section>
            <section className="right-container">
                <div className="right-container__header">
                    <h2 className="subheader">
                        {role === ROLS.TRAINER ? 'My Students' : 'My Trainers'}
                    </h2>
                    <Button>{BUTTONS.ADD_TRAINER}</Button>
                </div>

                <div className="ag-theme-quartz right-container__table">
                    <AgGridReact
                        rowData={
                            role === ROLS.TRAINER
                                ? rowDataTrainer
                                : rowDataStudent
                        }
                        columnDefs={
                            role === ROLS.TRAINER
                                ? colfDefsTrainer
                                : colfDefsStudent
                        }
                        autoSizeStrategy={{ type: 'fitGridWidth' }}
                    />
                </div>
            </section>
            <div className="profile__actions">
                <Button>{BUTTONS.EDIT_PROFILE}</Button>
                <Button
                    onClick={handleChangePassword}
                    variant={BUTTONS_VARIANTS.SECONDARY}
                >
                    {BUTTONS.CHANGE_PASSWORD}
                </Button>
                {role === ROLS.STUDENT && (
                    <Button variant={BUTTONS_VARIANTS.QUATERNARY}>
                        {BUTTONS.DELETE_PROFILE}
                    </Button>
                )}
            </div>
        </section>
    );
}
