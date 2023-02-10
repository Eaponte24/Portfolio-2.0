import React from "react";
import NavTabs from "./Navtabs";

function Header(props) {

    
	const { currentPage, handlePageChange } = props;

	return (
		<header>
			<div>
				<h2>Enrique Aponte</h2>
			</div>
			<div>
            <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
			</div>
		</header>
	);
}

export default Header;