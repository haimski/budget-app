import React from 'react';
import { Header } from 'semantic-ui-react';

function MainHeader(props) {
    const { type, title } = props;

    return (
        <div className="App">
            <Header as={type}>{title}</Header>
        </div>
    );
}

export default MainHeader;
