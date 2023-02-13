import React from "react";
import NavTabs from "./Navtabs";

const styles = {
	header: {
		fontFamily: 'Bebas Neue',
		display: "flex",
		justifyContent: "space-between",
		alignItems: "center",
		padding: "0 20px",
		height: "80px",
		borderBottom: "1px solid #e0e0e0",
	},
	// center the h2 text
	h2: {
		fontFamily: 'Bebas Neue',
		color: "#000",
		textDecoration: "none",
		fontSize: "2rem",
		fontWeight: "bold",
	},

};

function Header(props) {

    
	const { currentPage, handlePageChange } = props;

	return (
		<header style={styles.header}>
			<div>
				<h2 style={styles.h2}>Enrique Aponte</h2>
			</div>
			<div>
            <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
			</div>
		</header>
	);
}

export default Header;