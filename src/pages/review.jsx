import React from "react";

const JobApplicationCard = ({ name, university, email, onReject, onAccept }) => (
  <div style={styles.card}>
    <div style={styles.leftSection}>
      <h3 style={styles.name}>{name}</h3>
      <p style={styles.university}>{university}</p>
      <p style={styles.email}>{email}</p>
    </div>
    <div style={styles.rightSection}>
      <a href="#" style={styles.resumeLink}>Resume Link</a>
      <p style={styles.note}>Please click accept only after sending referral mail</p>
      <div style={styles.buttonContainer}>
        <button style={styles.rejectButton} onClick={onReject}>Reject</button>
        <button style={styles.acceptButton} onClick={onAccept}>Accept</button>
      </div>
    </div>
  </div>
);

const JobApplicationList = () => (
  <div style={styles.rightContainer}>
    <div style={styles.header}>
      <h2 style={styles.jobTitle}>SWE Intern, ABC Company</h2>
      <p style={styles.durationLocation}>6 Months, Bangalore</p>
    </div>
    <JobApplicationCard
      name="Rhytham Aggarwal"
      university="Delhi Technological University"
      email="aggarwalrhytham2003@gmail.com"
      onReject={() => alert("Rejected Rhytham")}
      onAccept={() => alert("Accepted Rhytham")}
    />
    <JobApplicationCard
      name="Divij Mahajan"
      university="Delhi Technological University"
      email="d.mahajan2004@gmail.com"
      onReject={() => alert("Rejected Divij")}
      onAccept={() => alert("Accepted Divij")}
    />
  </div>
);

const styles = {
  rightContainer: {
    width: "70%", // Adjust this based on available space
    margin: "0 auto",
    padding: "20px",
  },
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "20px",
  },
  jobTitle: {
    fontSize: "24px",
    color: "white",
  },
  durationLocation: {
    fontSize: "16px",
    color: "white",
    opacity: "0.7",
  },
  card: {
    backgroundColor: "#31342C",
    borderRadius: "12px",
    display: "flex",
    justifyContent: "space-between",
    padding: "20px",
    marginBottom: "20px",
    color: "white",
  },
  leftSection: {
    display: "flex",
    flexDirection: "column",
  },
  name: {
    fontSize: "18px",
    fontWeight: "bold",
    margin: 0,
  },
  university: {
    fontSize: "14px",
    opacity: "0.7",
    margin: "4px 0",
  },
  email: {
    fontSize: "14px",
    opacity: "0.7",
  },
  rightSection: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-end",
  },
  resumeLink: {
    color: "#CBDEA5",
    textDecoration: "none",
    marginBottom: "8px",
    fontSize: "14px",
  },
  note: {
    fontSize: "12px",
    opacity: "0.7",
    textAlign: "right",
    marginBottom: "10px",
  },
  buttonContainer: {
    display: "flex",
    gap: "10px",
  },
  rejectButton: {
    backgroundColor: "#A7A398",
    color: "#31342C",
    padding: "8px 20px",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
  },
  acceptButton: {
    backgroundColor: "#A7A398",
    color: "#31342C",
    padding: "8px 20px",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
  },
};

export default JobApplicationList;
