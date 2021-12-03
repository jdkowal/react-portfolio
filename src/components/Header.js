import React from 'react';

const styles = {
    headerStyle: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#4F5D75',
    boxShadow: '0 5px 35px black'
    }

}

function Header() {
    return (
        <div className="header">
            <h1>Joe Kowalczyk</h1>
        </div>
    );
}

export default Header;