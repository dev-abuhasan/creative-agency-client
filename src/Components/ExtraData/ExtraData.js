import React, { createContext, useState } from 'react';
import { } from 'react-router-dom';

let Context = null;
const { Provider, Consumer } = Context = createContext();

const ExtraDataProvider = (props) => {

    //dashboard true false condition
    const [seeData, setSeeData] = useState({
        order: false,
        serviceClient: false,
        serviceAdmin: false,
        review: false,
        addService: false,
        makeAdmin: false
    })
    const ClickShowData = (e) => {
        if (e === "order") {
            setSeeData({
                order: true,
                serviceClient: false,
                serviceAdmin: false,
                review: false,
                addService: false,
                makeAdmin: false
            })
        }
        if (e === "services-list-admin") {
            setSeeData({
                order: false,
                serviceClient: false,
                serviceAdmin: true,
                review: false,
                addService: false,
                makeAdmin: false
            })
        }
        if (e === "review") {
            setSeeData({
                order: false,
                serviceClient: false,
                serviceAdmin: false,
                review: true,
                addService: false,
                makeAdmin: false
            })
        }
        if (e === "services-list") {
            setSeeData({
                order: false,
                serviceClient: true,
                serviceAdmin: false,
                review: false,
                addService: false,
                makeAdmin: false
            })
        }
        if (e === "add-service") {
            setSeeData({
                order: false,
                serviceClient: false,
                serviceAdmin: false,
                review: false,
                addService: true,
                makeAdmin: false
            })
        }
        if (e === "make-admin") {
            setSeeData({
                order: false,
                serviceClient: false,
                serviceAdmin: false,
                review: false,
                addService: false,
                makeAdmin: true
            })
        }

    }


    //check admin
    const getEmail = sessionStorage.getItem('user');
    const [Admin, setAdmin] = useState(null);

return (
    <Provider value={
        {   
            seeData,
            getEmail,
            Admin,
            setAdmin,
            setSeeData,
            ClickShowData,
        }
    }>
        {props.children}
    </Provider>
)

}


export { ExtraDataProvider, Consumer as UserConsumer, Context as ExtraDataContext };