// // // import { useState } from "react";
// // // import React from "react";
// // // import "./index.css";
// // // import "./Individual.css";
// // // const IndividualComment = ({
// // //   comment,
// // //   parentId,
// // //   productId,
// // //   allComments,
// // //   loggedUser,
// // // }) => {
// // //   const [showReplyForm, setShowReplyForm] = useState(false);
// // //   const [replyText, setReplyText] = useState("");

// // //   const toggleReplyForm = () => {
// // //     setShowReplyForm(!showReplyForm);
// // //   };

// // //   const handleReplyTextChange = (event) => {
// // //     setReplyText(event.target.value);
// // //   };

// // //   const submitReply = async (com) => {
// // //     if (loggedUser) {
// // //       await fetch("/api/reply", {
// // //         method: "POST",
// // //         body: JSON.stringify({
// // //           reply: replyText,
// // //           parentId,
// // //           productId,
// // //           root: "no",
// // //           author: loggedUser.username,
// // //         }),
// // //       });
// // //     }

// // //     setReplyText("");
// // //     setShowReplyForm(false);
// // //   };

// // //   return (
// // //     <div
// // //       key={comment._id}
// // //       className="border rounded-lg p-4 my-4 shadow-md transition duration-300 ease-in-out transform "
// // //     >
// // //       {comment.author}
// // //       <h1 className="text-lg font-bold mb-2 text-blue-800">{comment.text}</h1>
// // //       <button
// // //         className="text-blue-500 hover:underline transition duration-300 ease-in-out transform "
// // //         onClick={toggleReplyForm}
// // //       >
// // //         Reply
// // //       </button>
// // //       {showReplyForm && (
// // //         <div className="mt-4">
// // //           <textarea
// // //             value={replyText}
// // //             onChange={handleReplyTextChange}
// // //             className="w-full p-2 border rounded-md text-black"
// // //             placeholder="Your reply..."
// // //           />
// // //           <button
// // //             onClick={() => {
// // //               submitReply(comment);
// // //             }}
// // //             className="bg-blue-500 text-white px-4 py-2 rounded-md mt-2 hover:bg-blue-600 transition duration-300 ease-in-out transform "
// // //           >
// // //             Submit Reply
// // //           </button>
// // //         </div>
// // //       )}

// // //       {allComments.map((com) => {
// // //         if (com.parentId === comment._id) {
// // //           return (
// // //             <IndividualComment
// // //               key={com._id}
// // //               allComments={allComments}
// // //               parentId={com._id}
// // //               productId={productId}
// // //               comment={com}
// // //               loggedUser={loggedUser}
// // //             />
// // //           );
// // //         }
// // //       })}
// // //     </div>
// // //   );
// // // };

// // // export default IndividualComment;

// // import React, { useState } from "react";
// // import "./Individual.css";
// // const IndividualComment = ({
// //   comment,
// //   parentId,
// //   productId,
// //   allComments,
// //   loggedUser,
// // }) => {
// //   console.log(comment);
// //   const [showReplyForm, setShowReplyForm] = useState(false);
// //   const [replyText, setReplyText] = useState("");

// //   const toggleReplyForm = () => {
// //     setShowReplyForm(!showReplyForm);
// //   };

// //   const handleReplyTextChange = (event) => {
// //     setReplyText(event.target.value);
// //   };

// //   // const submitReply = async (com) => {
// //   //   if (loggedUser) {
// //   //     await fetch("http://localhost:5000/api/reply", {
// //   //       method: "POST",
// //   //       headers: {
// //   //         "Content-Type": "application/json",
// //   //       },
// //   //       body: JSON.stringify({
// //   //         reply: replyText,
// //   //         parentId,
// //   //         productId,
// //   //         root: "no",
// //   //         author: loggedUser.username,
// //   //       }),
// //   //     });
// //   //     window.location.reload();
// //   //   }

// //   //   setReplyText("");
// //   //   setShowReplyForm(false);
// //   //   // window.location.reload();
// //   // };

// //   const submitReply = async (com) => {
// //     if (loggedUser) {
// //       try {
// //         const response = await fetch("http://localhost:5000/api/reply", {
// //           method: "POST",
// //           headers: {
// //             "Content-Type": "application/json",
// //           },
// //           body: JSON.stringify({
// //             reply: replyText,
// //             parentId,
// //             productId,
// //             root: "no",
// //             author: loggedUser.username,
// //           }),
// //         });

// //         if (response.ok) {
// //           // Assuming the reply was successful, reload the page
// //           window.location.reload();
// //         } else {
// //           // Handle error scenarios if needed
// //           console.error("Failed to submit reply");
// //         }
// //       } catch (error) {
// //         console.error("Error during fetch:", error);
// //       }

// //       setReplyText("");
// //       setShowReplyForm(false);
// //     }
// //   };

// //   return (
// //     <div className="comment-container">
// //       <div className="comment-author">{comment.author} </div>
// //       <h1 className="comment-text">{comment.text}</h1>
// //       <button className="reply-button" onClick={toggleReplyForm}>
// //         Reply
// //       </button>
// //       {showReplyForm && (
// //         <div className="reply-form">
// //           <textarea
// //             value={replyText}
// //             onChange={handleReplyTextChange}
// //             className="reply-textarea"
// //             placeholder="Your reply..."
// //           />
// //           <button
// //             onClick={() => {
// //               submitReply(comment);
// //             }}
// //             className="submit-button"
// //           >
// //             Submit Reply
// //           </button>
// //         </div>
// //       )}

// //       {allComments.map((com) => {
// //         if (com.parentId === comment._id) {
// //           return (
// //             <IndividualComment
// //               key={com._id}
// //               allComments={allComments}
// //               parentId={com._id}
// //               productId={productId}
// //               comment={com}
// //               loggedUser={loggedUser}
// //             />
// //           );
// //         }
// //       })}
// //     </div>
// //   );
// // };

// // export default IndividualComment;

// // IndividualComment.jsx
// import React, { useState } from "react";
// import "./Individual.css";

// const IndividualComment = ({
//   comment,
//   parentId,
//   productId,
//   allComments,
//   loggedUser,
// }) => {
//   const [showReplyForm, setShowReplyForm] = useState(false);
//   const [replyText, setReplyText] = useState("");

//   const toggleReplyForm = () => {
//     setShowReplyForm(!showReplyForm);
//   };

//   const handleReplyTextChange = (event) => {
//     setReplyText(event.target.value);
//   };

//   const submitReply = async (com) => {
//     if (loggedUser) {
//       try {
//         const response = await fetch("http://localhost:5000/api/reply", {
//           method: "POST",
//           headers: {
//             "Content-Type": "application/json",
//           },
//           body: JSON.stringify({
//             reply: replyText,
//             parentId,
//             productId,
//             root: "no",
//             author: loggedUser.username,
//           }),
//         });

//         if (response.ok) {
//           window.location.reload();
//         } else {
//           console.error("Failed to submit reply");
//         }
//       } catch (error) {
//         console.error("Error during fetch:", error);
//       }

//       setReplyText("");
//       setShowReplyForm(false);
//     }
//   };

//   return (
//     <div className="comment-container">
//       <div className="comment-author">{comment.author}</div>
//       <h1 className="comment-text">{comment.text}</h1>
//       <button className="reply-button" onClick={toggleReplyForm}>
//         Reply
//       </button>
//       {showReplyForm && (
//         <div className="reply-form">
//           <textarea
//             value={replyText}
//             onChange={handleReplyTextChange}
//             className="reply-textarea"
//             placeholder="Your reply..."
//           />
//           <button
//             onClick={() => submitReply(comment)}
//             className="submit-button"
//           >
//             Submit Reply
//           </button>
//         </div>
//       )}

//       {allComments.map((com) => {
//         if (com.parentId === comment._id) {
//           return (
//             <IndividualComment
//               key={com._id}
//               allComments={allComments}
//               parentId={com._id}
//               productId={productId}
//               comment={com}
//               loggedUser={loggedUser}
//             />
//           );
//         }
//         return null;
//       })}
//     </div>
//   );
// };

// export default IndividualComment;

// IndividualComment.jsx
import React, { useState } from "react";
import "./Individual.css";

const IndividualComment = ({
  comment,
  parentId,
  productId,
  allComments,
  loggedUser,
  showReply,
}) => {
  const [showReplyForm, setShowReplyForm] = useState(false);
  const [replyText, setReplyText] = useState("");

  const toggleReplyForm = () => {
    setShowReplyForm(!showReplyForm);
  };

  const handleReplyTextChange = (event) => {
    setReplyText(event.target.value);
  };

  const submitReply = async (com) => {
    if (loggedUser) {
      try {
        const response = await fetch("https://movipia.onrender.com/api/reply", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            reply: replyText,
            parentId,
            productId,
            root: "no",
            author: loggedUser.username,
          }),
        });

        if (response.ok) {
          window.location.reload();
        } else {
          console.error("Failed to submit reply");
        }
      } catch (error) {
        console.error("Error during fetch:", error);
      }

      setReplyText("");
      setShowReplyForm(false);
    }
  };

  return (
    <div className="comment-container">
      <div className="comment-author">{comment.author}</div>
      <p className="comment-text">{comment.text}</p>
      {showReply ? (
        <button className="reply-button" onClick={toggleReplyForm}>
          Reply
        </button>
      ) : null}

      {showReplyForm && (
        <div className="reply-form">
          <textarea
            value={replyText}
            onChange={handleReplyTextChange}
            className="reply-textarea"
            placeholder="Your reply..."
          />
          <button
            onClick={() => submitReply(comment)}
            className="submit-button"
          >
            Submit Reply
          </button>
        </div>
      )}

      {allComments.map((com) => {
        if (com.parentId === comment._id) {
          return (
            <IndividualComment
              key={com._id}
              allComments={allComments}
              parentId={com._id}
              productId={productId}
              comment={com}
              loggedUser={loggedUser}
            />
          );
        }
        return null;
      })}
    </div>
  );
};

export default IndividualComment;
