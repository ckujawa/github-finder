import React from 'react';
import UserSearch from "../components/users/UserSearch";
import UserResults from "../components/users/UserResults";

const Home = () => {
    return (
        <div>
            <h1 className="text-6xl">
                <UserSearch/>
                <UserResults/>
            </h1>
        </div>
    );
};

export default Home;
