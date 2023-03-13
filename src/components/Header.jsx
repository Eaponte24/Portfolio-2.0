import React from "react";
import NavTabs from "./Navtabs";

const styles = {
	header: {
		fontFamily: "Bebas Neue",
		backgroundColor: "#17706E",
	},
	// center the h2 text
	h2: {
		fontFamily: 'Bebas Neue',
		color: "#F7F7EE",
		textDecoration: "none",
		fontSize: "11rem",
		fontWeight: "bold",
		position: "relative",
		left: "26%",
		width: "100%",
		margin: 0,
		
	},

	nav: { 
		alignItems: "center",
		padding: "0 20px",
		height: "80px",
		backgroundColor: "#F7F7EE",
		fontSize: "3rem",
		// hex for black
		borderTop: "2px solid #000",
		borderBottom: "2px solid #000",
	}

};

function Header(props) {

    
	const { currentPage, handlePageChange } = props;

	return (
		<header style={styles.header}>
			<div>
				<a href="/Portfolio-2.0" style={styles.h2}>Enrique Aponte</a>
			</div>
			<div style={styles.nav}>
            <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
			</div>
		</header>
	);
}

export default Header;