import { useState } from 'react';
import { AgGridReact } from 'ag-grid-react';
import { useSelector } from 'react-redux';
import { Button } from '../../common';
import { BUTTONS, BUTTONS_VARIANTS } from '../../constants';
import './Profile.css';
import 'ag-grid-community/styles/ag-grid.css'; // Core CSS
import 'ag-grid-community/styles/ag-theme-quartz.css'; // Theme
import checkIcon from '../../assets/check.svg';
import { selectUserInfo } from '../../store/authSlice';

export function Profile() {
    const {
        firstName,
        lastName,
        username,
        email,
        address,
        specialization,
        dateOfBirth,
        avatar,
    } = useSelector(selectUserInfo);
    const [rowData, setRowData] = useState([
        { name: 'Elizabeth Lopez', status: true },
        { name: 'Matthew Martinez', status: true },
        { name: 'Elizabeth Hall', status: false },
    ]);
    const [colfDefs, setColfDefs] = useState([
        { field: 'name', width: 170, cellClass: 'bold' },
        {
            field: 'status',
            cellDataType: 'text',
            sortable: true,
            filter: true,
            width: 130,
            valueFormatter: (params) =>
                params.value ? 'ACTIVE' : ' NOT ACTIVE',
            cellClassRules: {
                'status--active': (params) => params.value === true,
                'status--inactive': (params) => params.value === false,
            },
        },
    ]);
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
                <div className="my-profile__actions">
                    <Button>{BUTTONS.EDIT_PROFILE}</Button>
                    <Button variant={BUTTONS_VARIANTS.SECONDARY}>
                        {BUTTONS.CHANGE_PASSWORD}
                    </Button>
                </div>
            </section>
            <section className="my-students">
                <h2 className="subheader">My Students</h2>

                <div className="ag-theme-quartz my-students__table">
                    <AgGridReact
                        rowData={rowData}
                        columnDefs={colfDefs}
                        autoSizeStrategy={{ type: 'fitGridWidth' }}
                    />
                </div>
            </section>
        </section>
    );
}
