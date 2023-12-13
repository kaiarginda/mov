// // src/LoginForm.js
// import React, { useState } from "react";

// const LoginForm = () => {
//   const [formData, setFormData] = useState({
//     username: "",
//     password: "",
//   });
//   const [fail, setFail] = useState(false);
//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value,
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     // Add logic to send login data to the server or perform other actions
//     const res = await fetch("http://localhost:5000/api/login", {
//       method: "POST",
//       headers: {
//         "Content-type": "application/json",
//       },
//       body: JSON.stringify({ formData }),
//     });

//     if (res.ok) {
//       const data = await res.json();
//       if (!data.fail) {
//         localStorage.setItem("authtoken", data.token);
//         window.location.href = "/";
//       } else {
//       }
//     }
//   };

//   return (
//     <div style={styles.container}>
//       <h2 style={styles.heading}>Login to Movie Website</h2>
//       <h2>{fail ? "user doesnot exist" : null}</h2>
//       <form style={styles.form} onSubmit={handleSubmit}>
//         <label style={styles.label}>
//           Username:
//           <input
//             type="text"
//             name="username"
//             value={formData.username}
//             onChange={handleChange}
//             style={styles.input}
//             required
//           />
//         </label>
//         <br />
//         <label style={styles.label}>
//           Password:
//           <input
//             type="password"
//             name="password"
//             value={formData.password}
//             onChange={handleChange}
//             style={styles.input}
//             required
//           />
//         </label>
//         <br />
//         <button type="submit" style={styles.button}>
//           Login
//         </button>
//       </form>
//     </div>
//   );
// };

// const styles = {
//   container: {
//     maxWidth: "400px",
//     margin: "auto",
//     padding: "20px",
//     border: "1px solid #ccc",
//     borderRadius: "8px",
//     marginBottom: "150px",
//     transform: "translateY(100px)", // Add this line for translation
//   },
//   heading: {
//     textAlign: "center",
//     color: "#333",
//   },
//   form: {
//     display: "flex",
//     flexDirection: "column",
//   },
//   label: {
//     margin: "10px 0",
//   },
//   input: {
//     padding: "8px",
//     borderRadius: "4px",
//     border: "1px solid #ccc",
//   },
//   button: {
//     backgroundColor: "#28A745",
//     color: "#fff",
//     padding: "10px",
//     borderRadius: "4px",
//     cursor: "pointer",
//     marginTop: "10px",
//   },
// };

// export default LoginForm;

import React, { useState } from "react";
import { Link } from "react-router-dom";

const LoginForm = () => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  const [fail, setFail] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFail(false);

    const res = await fetch("https://movipia.onrender.com/api/login", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({ formData }),
    });

    if (res.ok) {
      const data = await res.json();
      if (!data.fail) {
        localStorage.setItem("authtoken", data.token);
        window.location.href = "/";
      } else {
        setFail(true);
      }
    }
  };

  const styles = {
    container: {
      maxWidth: "400px",
      margin: "auto",
      padding: "20px",
      border: "1px solid #ccc",
      borderRadius: "8px",
      marginBottom: "150px",
      transform: "translateY(100px)",
    },
    heading: {
      textAlign: "center",
      color: "#333",
    },
    form: {
      display: "flex",
      flexDirection: "column",
    },
    label: {
      margin: "10px 0",
    },
    input: {
      padding: "8px",
      borderRadius: "4px",
      border: "1px solid #ccc",
    },
    button: {
      backgroundColor: "#28A745",
      color: "#fff",
      padding: "10px",
      borderRadius: "4px",
      cursor: "pointer",
      marginTop: "10px",
    },
    failMessage: {
      color: "red",
      textAlign: "center",
      marginTop: "10px",
    },
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Login to Movie Website</h2>
      <div style={styles.failMessage}>
        {fail ? "User does not exist" : null}
      </div>
      <form style={styles.form} onSubmit={handleSubmit}>
        <label style={styles.label}>
          Username:
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
            style={styles.input}
            required
          />
        </label>
        <br />
        <label style={styles.label}>
          Password:
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            style={styles.input}
            required
          />
        </label>
        <br />
        <button type="submit" style={styles.button}>
          Login
        </button>
      </form>

      <Link to="/">Go Back To HomePage</Link>
    </div>
  );
};

export default LoginForm;
