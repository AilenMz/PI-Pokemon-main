import React from 'react';
import { configure, mount } from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import { MemoryRouter, Link } from "react-router-dom";
import * as ReactRedux from "react-redux";
import configureStore from "redux-mock-store";
import thunk from "redux-thunk";
import isReact from "is-react";

import Detail from '../Components/Details/details.jsx'
import * as actions from "../Redux/Actions/index.js"

configure({ adapter: new Adapter() });

