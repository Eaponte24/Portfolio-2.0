import React, { useState } from "react";
import { validateEmail } from "../../utils/helpers";


const styles = {
	header: {
	  fontFamily: "Bebas Neue",
	  display: "flex",
	  justifyContent: "space-between",
	  alignItems: "center",
	  padding: "0 20px",
	  height: "80px",
	  borderBottom: "1px solid #e0e0e0",
	  color: "#000",
	},
  
	description: {
	  fontFamily: "Teko",
	  color: "#000",
	  textDecoration: "none",
	  fontSize: "1.2rem",
	  fontWeight: "bold",
	},
  
  // center the form section and increase the width
  sectionStyle: {
	width: "40%",
	margin: "auto",
  },

  // Form header
  formHeader: {
	fontFamily: "Bebas Neue",
	color: "#000",
	textDecoration: "none",
	fontSize: "1.2rem",
	  },

  // error message 
  errorMessage: {
	color: "red",
	fontFamily: "Bebas Neue",
	textDecoration: "none",
	fontSize: "1.2rem",
	  },

  // button style
  buttonStyle: {
	backgroundColor: "#000",
	color: "#fff",
	fontFamily: "Bebas Neue",
	textDecoration: "none",
	fontSize: "1.2rem",
	border: "none",
	padding: "10px 20px",
	margin: "10px",
	borderRadius: "5px",
	  },

  // input style
  inputStyle: {
	backgroundColor: "#f5f5f5",
	color: "#000",
	fontFamily: "Bebas Neue",
	textDecoration: "none",
	fontSize: "1.2rem",
	border: "none",
	padding: "10px 20px",
	margin: "10px",
	width: "100%",
	borderRadius: "5px",
	  },
  
  };

function Contact() {
	const [formState, setFormState] = useState({
		name: "",
		email: "",
		message: "",
	});

	const [errorMessage, setErrorMessage] = useState("");

	const { name, email, message } = formState;

	function handleChange(e) {
		if (e.target.name === "email") {
			const isValid = validateEmail(e.target.value);
			if (!isValid) {
				setErrorMessage("Your email is invalid.");
			} else {
				if (!e.target.value.length) {
					setErrorMessage(`${e.target.name} is required.`);
				} else {
					setErrorMessage("");
				}
			}
		}

		if (!errorMessage) {
			setFormState({ ...formState, [e.target.name]: e.target.value });
		}
	}

	function handleBlank(e) {
		if (e.target.name === "Name" || e.target.name === "Message") {
			if (!e.target.value.length) {
				setErrorMessage(`${e.target.name} is required.`);
			} else {
				setErrorMessage("");
			}
		}

		if (!errorMessage) {
			setFormState({ ...formState, [e.target.name]: e.target.value });
		}
	}

	return (
		<section style={styles.sectionStyle}>
			<div>
				<h2 style={styles.header}>Contact Me</h2>
			</div>
			<div>
				<form>
					<div>
						<label style={styles.formHeader}>Name:</label>
						<br></br>
						<input
							style={styles.inputStyle}
							type="text"
							defaultValue={name}
							onBlur={handleBlank}
							name="Name"
						/>
					</div>
					<div>
						<label style={styles.formHeader}>Email address:</label>
						<br></br>
						<input
							style={styles.inputStyle}
							type="email"
							defaultValue={email}
							name="email"
							onBlur={handleChange}
						/>
					</div>
					<div>
						<label style={styles.formHeader}>Message:</label>
						<br></br>
						<textarea
							style={styles.inputStyle}
							name="Message"
							defaultValue={message}
							onBlur={handleBlank}
							rows="5"
						/>
					</div>
					{errorMessage && (
						<div>
							<p style={styles.errorMessage}>{errorMessage}</p>
						</div>
					)}
					<button style={styles.buttonStyle} type="submit">Submit</button>
				</form>
			</div>
		</section>
	);
}

export default Contact;