// // src/RegistrationForm.js
// import { trusted } from "mongoose";
// import React, { useState } from "react";

// const RegistrationForm = () => {
//   const [formData, setFormData] = useState({
//     username: "",
//     password: "",
//   });

//   const [success, setSuccess] = useState(false);
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
//     setFail(false);
//     setSuccess(false);

//     const res = await fetch("http://localhost:5000/api/createuser", {
//       method: "POST",
//       headers: {
//         "Content-type": "application/json",
//       },
//       body: JSON.stringify({
//         username: formData.username,
//         password: formData.password,
//       }),
//     });

//     if (res.ok) {
//       const data = await res.json();
//       console.log(data, "dta");
//       if (data.success) {
//         setSuccess(true);
//       }
//       if (data.fail) {
//         setFail(true);
//       }
//     }
//     // Add logic to send registration data to the server or perform other actions
//     // console.log("Registration data submitted:", formData);
//   };

//   return (
//     <div style={styles.container}>
//       <h2 style={styles.heading}>Register for Movie Website</h2>
//       <h2>{fail ? <p>Account With that username already exists</p> : null}</h2>
//       <h2>{success ? <p>Account Created Succesfully</p> : null}</h2>

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
//           Register
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
//     // paddingTop: "150px",
//     // marginTop: "50px",
//     transform: "translateY(100px)", // Add this line for translation
//     marginBottom: "200px",
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
//     backgroundColor: "#007BFF",
//     color: "#fff",
//     padding: "10px",
//     borderRadius: "4px",
//     cursor: "pointer",
//     marginTop: "10px",
//   },
// };

// export default RegistrationForm;

import React, { useState } from "react";

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const [success, setSuccess] = useState(false);
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
    setSuccess(false);

    const res = await fetch("http://localhost:5000/api/createuser", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        username: formData.username,
        password: formData.password,
      }),
    });

    if (res.ok) {
      const data = await res.json();
      console.log(data, "data");
      if (data.success) {
        setSuccess(true);
      }
      if (data.fail) {
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
      transform: "translateY(100px)",
      marginBottom: "200px",
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
      backgroundColor: "#007BFF",
      color: "#fff",
      padding: "10px",
      borderRadius: "4px",
      cursor: "pointer",
      marginTop: "10px",
    },
    successMessage: {
      color: "green",
      textAlign: "center",
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
      <h2 style={styles.heading}>Register for Movie Website</h2>
      <div style={styles.failMessage}>
        {fail && <p>Account with that username already exists</p>}
      </div>
      <div style={styles.successMessage}>
        {success && <p>Account created successfully</p>}
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
          Register
        </button>
      </form>
    </div>
  );
};

export default RegistrationForm;
