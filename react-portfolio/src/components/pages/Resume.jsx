import React from 'react';


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

// reduce size of section and center the content
sectionStyle: {
  width: "70%",
		margin: "auto",
    padding: "30px",
},

};

export default function Resume() {
  return (
    <div style={styles.sectionStyle}>
      <h1 style={styles.header}>Resume Page</h1>
      <p style={styles.description}>
        Donec a volutpat quam. Curabitur nec varius justo, sed rutrum ligula.
        Curabitur pellentesque turpis sit amet eros iaculis, a mollis arcu
        dictum. Ut vel ante eget massa ornare placerat. Etiam nisl orci, finibus
        sodales volutpat et, hendrerit ut dolor. Suspendisse porta dictum nunc,
        sed pretium risus rutrum eget. Nam consequat, ligula in faucibus
        vestibulum, nisi justo laoreet risus, luctus luctus mi lacus sit amet
        libero. Class aptent taciti sociosqu ad litora torquent per conubia
        nostra, per inceptos himenaeos. Mauris pretium condimentum tellus eget
        lobortis. Interdum et malesuada fames ac ante ipsum primis in faucibus.
        Donec placerat accumsan mi, ut congue neque placerat eu. Donec nec ipsum
        in velit pellentesque vehicula sit amet at augue. Maecenas aliquam
        bibendum congue. Pellentesque semper, lectus non ullamcorper iaculis,
        est ligula suscipit velit, sed bibendum turpis dui in sapien.
      </p>
    </div>
  );
}