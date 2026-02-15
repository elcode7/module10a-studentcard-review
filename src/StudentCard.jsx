import { useState } from "react";
/*

  Summary:
  This component displays a student profile card. It receives data through props
  (name, major, year, bio, imageUrl) and renders a styled card with an image,
  student information, and a button. The button toggles whether the student's
  bio is visible using React state. 
*/

function StudentCard(props) {
  // We are destructuring props.
  // Props are data passed from a parent component (like App.jsx).
  // They allow this component to be reusable for different students.

  const { name, major, year, bio, imageUrl } = props;
  // useState is a React Hook.
  // It allows functional components to store and manage internal state.
  //
  // React.useState(false) means:
  // - We create a state variable called "showBio"
  // - Its initial value is false (bio hidden by default)
  // - setShowBio is the function used to update that state
  //
  // When state changes, React automatically re-renders the component.

  const [showBio, setShowBio] = useState(false);

  const toggleBio = () => {
    setShowBio(!showBio);

    // The component must return a single parent element.
    // This div acts as the main container for the student card.
  };

  return (
    <div
      style={{
        maxWidth: "350px",
        padding: "20px",
        border: "1px solid #ccc",
        borderRadius: "12px",
        fontFamily: "Arial, sans-serif",
        textAlign: "center",
        margin: "20px auto",
        backgroundColor: "#f9f9f9",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
      }}
    >
      <img
        src={imageUrl}
        alt={`${name}'s profile`}
        style={{
          width: "100px",
          height: "100px",
          borderRadius: "50%",
          objectFit: "cover",
          marginBottom: "12px",
        }}
      />

      <h2 style={{ margin: "0", fontSize: "22px" }}>{name}</h2>

      <p style={{ margin: "4px 0", fontSize: "16px" }}>
        {major} – {year}
      </p>

      <button
        onClick={toggleBio}
        style={{
          marginTop: "12px",
          padding: "8px 16px",
          fontSize: "14px",
          borderRadius: "6px",
          border: "none",
          cursor: "pointer",
          backgroundColor: "#007BFF",
          color: "white",
        }}
      >
        {showBio ? "Hide Bio" : "Show Bio"}
      </button>

      {showBio && <p style={{ marginTop: "16px", fontSize: "14px" }}>{bio}</p>}
    </div>
  );
}

// Exporting the component so it can be imported in App.jsx
export default StudentCard;
