import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import './AdminService.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import LoadingSpinner from '../../LoadingSpinner/LoadingSpinner';

const AdminService = () => {
    const downIcon = <FontAwesomeIcon icon={faChevronDown} />
    const getEmail = sessionStorage.getItem('user');

    const [adminService, setAdminService] = useState([]);
    useEffect(() => {
        fetch(`https://obscure-hollows-57552.herokuapp.com/all-order-data/admin?email=${getEmail}`)
            .then(res => res.json())
            .then(data => setAdminService(data))
    }, [getEmail]);

    const handleUpdate = (id) => {
        const statusOption = 'Done';
        fetch(`https://obscure-hollows-57552.herokuapp.com/update-statue/${id}`, {
            method: 'PATCH',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ statusOption })
        })
            .then(res => res.json())
            .then(data => {
                if (data.success === false) {
                    alert('Status Updated Successfully... Hurray!');
                }
                if (data.success === true) {
                    alert('Status Updated Failed... Sad!');
                }
            })
            .then(() => window.location.reload())
    }
    const handleDelete = (id) => {
        fetch(`https://obscure-hollows-57552.herokuapp.com/delete-order/${id}`, { method: 'DELETE' })
            .then(res => res.json())
            .then(data => {
                if (data.success === false) {
                    alert('Order Cancel Success')
                }
                if (data.success === true) {
                    alert('Order Cancel Fail')
                }
            })
            .then(() => window.location.reload())
    }

    return (
        <div className="list-table">
            <Table responsive className="w-100">
                <thead className="table-header">
                    <tr className="">
                        <th className="">Name</th>
                        <th className="ww-25">Email Id</th>
                        <th className="">Service</th>
                        <th className="w-25">Project Details</th>
                        <th className="">Status</th>
                    </tr>
                </thead>
                <tbody>
                    {adminService.length > 0 ? adminService.map(data =>
                        <tr key={data._id}>
                            <td>{data.name}</td>
                            <td>{data.email}</td>
                            <td>{data.courseCategory}</td>
                            <td>{data.projectDetails}</td>
                            <td>
                                <div className="dropdown">
                                    <span className={data.statusOption === 'Pending' ? 'text-danger' : 'text-success'}>
                                        {data.statusOption}
                                        <span className="ml-2">{downIcon}</span>
                                    </span>
                                    <div className="dropdown-content">
                                        {data.statusOption !== "Done" ?
                                            <span className="d-block text-success "
                                                onClick={() => handleUpdate(`${data._id}`)}>
                                                Done
                                            </span> : ""
                                        }
                                        <span className="d-block text-danger mb2"
                                            onClick={() => handleDelete(`${data._id}`)}>
                                            Cancel
                                        </span>
                                    </div>
                                </div>
                            </td>
                        </tr>
                    ) : <tr>
                            <td>
                                <LoadingSpinner />
                            </td>
                        </tr>
                    }
                </tbody>
            </Table>
        </div>
    );
};

export default AdminService;