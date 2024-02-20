import React from 'react';
import { Statistic } from 'semantic-ui-react';
const DisplayBalance = ({ value, label, size, color }) => {
    return (
        <Statistic size={size} color={color}>
            <Statistic.Value style={{ textAlign: 'center' }}>
                {value}
            </Statistic.Value>
            <Statistic.Label>{label}</Statistic.Label>
        </Statistic>
    );
};

export default DisplayBalance;
