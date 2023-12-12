// // import React from "react";
// // import IndividualComment from "../components/IndividualComment";
// // import { useState, useEffect } from "react";
// // import "./index.css";

// // const CommentList = async ({ productId }) => {
// //   //   const comments = await Comment.find({ root: "root" });
// //   //   const allComments = await Comment.find();
// //   const [loggedUser, setLoggedUser] = useState(null);
// //   const [comments, setComments] = useState(null);
// //   const [allComments, setAllComments] = useState(null);
// //   useEffect(() => {
// //     const fetchComments = async () => {
// //       const res = await fetch("http://localhost:5000/api/getrootcomments");
// //       if (res.ok) {
// //         const data = await res.json();
// //         setComments(data.comments);
// //       }
// //     };
// //     const fetchRootComments = async () => {
// //       const res = await fetch("http://localhost:5000/api/getallcomments");
// //       if (res.ok) {
// //         const data = await res.json();
// //         setAllComments(data.allComments);
// //       }
// //     };
// //     fetchComments();
// //     fetchRootComments();
// //   });

// //   const token = localStorage.getItem("authtoken");

// //   if (token) {
// //     const fetchLoggedUser = async () => {
// //       if (!token) return;
// //       const res = await fetch("http://localhost:5000/api/getloggeduser", {
// //         method: "POST",
// //         headers: {
// //           "Content-type": "application/json",
// //         },
// //         body: JSON.stringify({ token }),
// //       });

// //       if (res.ok) {
// //         const dat = await res.json();
// //         setLoggedUser(dat.user);
// //       }
// //     };

// //     fetchLoggedUser();
// //     // console.log(user, "verify");
// //   }
// //   // console.log(user, "from ficking asdfasufasfasd");
// //   console.log(comments, allComments, "npeispartniotri");
// //   return (
// //     <div className="bg-slate-900">
// //       {comments.map((comment) => {
// //         if (comment.productId !== productId) {
// //           return null; // Return null to skip rendering
// //         }
// //         return (
// //           <IndividualComment
// //             key={comment._id} // Provide a unique key
// //             comment={comment}
// //             parentId={comment._id}
// //             productId={productId}
// //             allComments={allComments}
// //             loggedUser={loggedUser} // Pass user to loggedUser
// //           />
// //         );
// //       })}
// //     </div>
// //   );
// // };

// // export default CommentList;

// import React, { useState, useEffect } from "react";
// import IndividualComment from "../components/IndividualComment";
// import "./index.css";

// const CommentList = ({ productId }) => {
//   const [loggedUser, setLoggedUser] = useState(null);
//   const [comments, setComments] = useState(null);
//   const [allComments, setAllComments] = useState(null);

//   useEffect(() => {
//     const fetchComments = async () => {
//       const res = await fetch("http://localhost:5000/api/getrootcomments");
//       if (res.ok) {
//         const data = await res.json();
//         setComments(data.comments);
//       }
//     };

//     const fetchRootComments = async () => {
//       const res = await fetch("http://localhost:5000/api/getallcomments");
//       if (res.ok) {
//         const data = await res.json();
//         setAllComments(data.allComments);
//       }
//     };

//     fetchComments();
//     fetchRootComments();
//   }, []);

//   const token = localStorage.getItem("authtoken");

//   useEffect(() => {
//     const fetchLoggedUser = async () => {
//       if (!token) return;
//       const res = await fetch("http://localhost:5000/api/getloggeduser", {
//         method: "POST",
//         headers: {
//           "Content-type": "application/json",
//         },
//         body: JSON.stringify({ token }),
//       });

//       if (res.ok) {
//         const dat = await res.json();
//         setLoggedUser(dat.user);
//       }
//     };

//     fetchLoggedUser();
//   }, [token]);

//   return (
//     <div className="bg-slate-900">
//       {comments && // Add a check here
//         comments.map((comment) => {
//           if (comment.productId !== productId) {
//             return null; // Return null to skip rendering
//           }
//           return (
//             <IndividualComment
//               key={comment._id} // Provide a unique key
//               comment={comment}
//               parentId={comment._id}
//               productId={productId}
//               allComments={allComments}
//               loggedUser={loggedUser} // Pass user to loggedUser
//             />
//           );
//         })}
//     </div>
//   );
// };

// export default CommentList;

// CommentList.jsx

import React, { useState, useEffect } from "react";
import IndividualComment from "../components/IndividualComment";
import "./index.css";

const CommentList = ({ productId, showReply }) => {
  const [loggedUser, setLoggedUser] = useState(null);
  const [comments, setComments] = useState([]);
  const [allComments, setAllComments] = useState([]);

  useEffect(() => {
    const fetchComments = async () => {
      const res = await fetch("http://localhost:5000/api/getrootcomments");
      if (res.ok) {
        const data = await res.json();
        setComments(data.comments || []); // Set to an empty array if null
      }
    };

    const fetchRootComments = async () => {
      const res = await fetch("http://localhost:5000/api/getallcomments");
      if (res.ok) {
        const data = await res.json();
        setAllComments(data.allComments || []); // Set to an empty array if null
      }
    };

    fetchComments();
    fetchRootComments();
  }, []);

  useEffect(() => {
    const token = localStorage.getItem("authtoken");

    const fetchLoggedUser = async () => {
      if (!token) return;
      const res = await fetch("http://localhost:5000/api/getloggeduser", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({ token }),
      });

      if (res.ok) {
        const dat = await res.json();
        setLoggedUser(dat.user);
      }
    };

    fetchLoggedUser();
  }, []);

  return (
    <div className="bg-slate-900">
      {comments.map((comment) => {
        if (comment.productId !== productId) {
          return null;
        }
        return (
          <IndividualComment
            key={comment._id}
            comment={comment}
            parentId={comment._id}
            productId={productId}
            allComments={allComments}
            loggedUser={loggedUser}
            showReply={showReply}
          />
        );
      })}
    </div>
  );
};

export default CommentList;
