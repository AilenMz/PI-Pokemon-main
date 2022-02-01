import React from 'react';
import { configure, shallow } from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import { Link } from "react-router-dom";
import isReact from "is-react";
// import '@testing-library/jest-dom/extend-expect'
// import {render} from '@testing-library/react'

import LangindPage from '../Components/LandingPage/landingPage.jsx'

configure({ adapter: new Adapter() });

describe('<LangindPage/>', ()=>{
    let landing

    beforeEach(()=>{
        landing=shallow(<LangindPage/>);
        expect(isReact.classComponent(LangindPage)).toBeFalsy()
    })

    it('debería renderizar un <Link to> que vaya a /home', ()=>{
        expect(landing.find(Link).length).toBeGreaterThanOrEqual(1)
        expect(landing.find(Link).at(0).prop('to')).toEqual('/home')
    })

    it('debería renderizar un h1 con el contenido "Bienvenidos a la App de"', ()=>{
        expect(landing.find('h1').length).toBeGreaterThanOrEqual(1)
        expect(landing.find('h1').at(0).text()).toBe("Bienvenidos a la App de")
    })
})

