import React from 'react';
import ReactDOM from 'react-dom/client';
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import './index.css';
import App from './App';
import LoginPage from "./pages/LoginPage";
import ProfilesPage from "./pages/ProfilesPage";
import OtherservicesPage from "./pages/OtherservicesPage";
import NewsPage from "./pages/NewsPage";
import MapPage from "./pages/MapPage";
import WantedPage from "./pages/WantedPage";
import WikiPage from "./pages/WikiPage";
import MessangerPage from "./pages/MessangerPage";
import FriendsPage from "./pages/FriendsPage";
import Groupspage from "./pages/Groupspage";
import VetPage from "./pages/VetPage";
import PetsheltersPage from "./pages/PetsheltersPage";
import VoulunterrteamsPage from "./pages/VoulunterrteamsPage";
import PetstorePage from "./pages/PetstorePage";
import * as path from "path";


const router = createBrowserRouter([
    {
        path: "/dashboard",
        element: <App/>,
        children: [
            {
            path : `profile`,
    element: <ProfilesPage />},
            {
                path: `login`,
                element: <LoginPage/>
            },
            {
                path: `news`,
                element: <NewsPage/>
            },
            {
                path: `map`,
                element: <MapPage/>
            },
            {
                path: `wanted`,
                element: <WantedPage/>
            },
            {
                path: `wiki`,
                element: <WikiPage/>
            },
            {
                path: `messenger`,
                element: <MessangerPage/>
            },
            {
                path: `fiends`,
                element: <FriendsPage/>
            },
            {
                path: `groups`,
                element: <Groupspage/>
            },
            {
                path: `vethelp`,
                element: <VetPage/>
            },
            {
                path: `petsheletrs`,
                element: <PetsheltersPage/>
            },
            {
                path: `volunteerteams`,
                element: <VoulunterrteamsPage/>
            },
            {
                path: `othersservices`,
                element: <OtherservicesPage/>
            },
            {
                path: `petstore`,
                element: <PetstorePage/>
            },
        ]
    },
    // {
    //     path: `/news`,
    //     element: <NewsPage/>
    // },
    // {
    //     path: `/map`,
    //     element: <MapPage/>
    // },
    //         {
    //             path: `/wanted`,
    //             element: <WantedPage/>
    //         },
    // {
    //     path: `/wiki`,
    //     element: <WikiPage/>
    // },
    // {
    //     path: `/messenger`,
    //     element: <MessangerPage/>
    // },
    // {
    //     path: `/fiends`,
    //     element: <FriendsPage/>
    // },
    // {
    //     path: `/groups`,
    //     element: <Groupspage/>
    // },
    // {
    //     path: `/vethelp`,
    //     element: <VetPage/>
    // },
    // {
    //     path: `/petsheletrs`,
    //     element: <PetsheltersPage/>
    // },
    // {
    //     path: `/volunteerteams`,
    //     element: <VoulunterrteamsPage/>
    // },
    // {
    //     path: `/othersservices`,
    //     element: <OtherservicesPage/>
    // },
    // {
    //     path: `/petstore`,
    //     element: <PetstorePage/>
    // },

]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <RouterProvider router={router}/>
    </React.StrictMode>
);

