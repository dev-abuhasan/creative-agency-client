import React, { useContext, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faTaxi, faCommentDots, faPlus, faUserPlus } from '@fortawesome/free-solid-svg-icons';
import { ExtraDataContext } from '../../ExtraData/ExtraData';
import LoadingSpinner from '../../LoadingSpinner/LoadingSpinner';

const Sidebar = () => {
    const ExtraData = useContext(ExtraDataContext)
    const { ClickShowData, seeData, setSeeData, getEmail, Admin, setAdmin } = ExtraData;

    const shoppingCart = <FontAwesomeIcon icon={faShoppingCart} />
    const taxiIcon = <FontAwesomeIcon icon={faTaxi} />
    const commentIcon = <FontAwesomeIcon icon={faCommentDots} />
    const plusIcon = <FontAwesomeIcon icon={faPlus} />
    const faUserPlusIcon = <FontAwesomeIcon icon={faUserPlus} />

    useEffect(() => {
        fetch(`https://obscure-hollows-57552.herokuapp.com/check-admin`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email: getEmail })
        })
            .then(res => res.json())
            .then(data => {
                if (data.admin === true) {
                    setAdmin(true)
                    setSeeData({ serviceAdmin: true })
                } else if (data.admin === false) {
                    setAdmin(false)
                    setSeeData({ order: true })
                }
            })
    }, [getEmail, setSeeData, setAdmin])

    return (
        <div className="pt-5">
            {Admin == null ?
                <LoadingSpinner />
                :
                <>
                    { Admin === true ? <>
                        <p
                            className={seeData.serviceAdmin === true ? "m-2 text-success" : "m-2"}
                            onClick={() => ClickShowData("services-list-admin")}>
                            <span className="mr-2">{taxiIcon}</span>
                            Order List 
                        </p>
                        <p
                            className={seeData.addService === true ? "m-2 text-success" : "m-2"}
                            onClick={() => ClickShowData("add-service")}>
                            <span className="mr-2">{plusIcon}</span>
                            Add Service
                        </p>
                        <p
                            className={seeData.makeAdmin === true ? "m-2 text-success" : "m-2"}
                            onClick={() => ClickShowData("make-admin")}>
                            <span className="mr-2">{faUserPlusIcon}</span>
                            Make Admin
                        </p>
                    </>
                        :
                        <>
                            <p
                                className={seeData.order === true ? "m-2 text-success" : "m-2"}
                                onClick={() => ClickShowData("order")}>
                                <span className="mr-2">{shoppingCart}</span>
                             Order
                        </p>
                            <p
                                className={seeData.serviceClient === true ? "m-2 text-success" : "m-2"}
                                onClick={() => ClickShowData("services-list")}>
                                <span className="mr-2">{taxiIcon}</span>
                            Services List
                        </p>
                            <p
                                className={seeData.review === true ? "m-2 text-success" : "m-2"}
                                onClick={() => ClickShowData("review")}>
                                <span className="mr-2">{commentIcon}</span>
                            Review
                        </p>
                        </>
                    }
                </>
            }
        </div>
    );
};

export default Sidebar;