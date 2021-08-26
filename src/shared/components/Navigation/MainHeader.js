import React from 'react';

import './MainHeader.css';

const MainHeader = (props) => {
	return <heaader className="main-header">{props.children}</heaader>;
};

export default MainHeader;
