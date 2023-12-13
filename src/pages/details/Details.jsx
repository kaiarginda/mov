import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./style.scss";
import useFetch from "../../hooks/useFetch";
import DetailsBanner from "./detailsBanner/DetailsBanner";
import Cast from "./cast/Cast";
import VideosSection from "./videosSection/VideosSection";
import Similar from "./carousels/Similar";
import Recommendation from "./carousels/Recommendation";
import CommentInput from "../../components/CommentInput";
import CommentList from "../../components/CommentList";

const Details = () => {
  const [loggedUser, setLoggedUser] = useState(null);
  const [commentData, setCommentData] = useState(null);
  const [isMounted, setIsMounted] = useState(true);

  const token = localStorage.getItem("authtoken");

  const { mediaType, id } = useParams();
  const { data, loading } = useFetch(`/${mediaType}/${id}/videos`);
  const { data: credits, loading: creditsLoading } = useFetch(
    `/${mediaType}/${id}/credits`
  );
  useEffect(() => {
    const fetchLoggedUser = async () => {
      if (!token) return;

      try {
        const res = await fetch("http://localhost:5000/api/getloggeduser", {
          method: "POST",
          headers: {
            "Content-type": "application/json",
          },
          body: JSON.stringify({ token }),
        });

        if (res.ok) {
          const data = await res.json();
          setLoggedUser(data.user);
        }
      } catch (error) {
        console.error("Error fetching logged user:", error);
      }
    };

    fetchLoggedUser();

    const fetchCommentData = async () => {
      try {
        const res = await fetch(`http://localhost:5000/api/getComments`, {
          method: "POST",
          headers: { "Content-type": "application/json" },
          body: JSON.stringify({ id }),
        });
        if (res.ok) {
          const data = await res.json();
          console.log(data, "datatata");
          // setComments(data.comments);
          setCommentData(data.commentData);
        }
      } catch (error) {
        console.error("Error fetching comments:", error);
      }
    };

    fetchCommentData();
    if (id && loggedUser) {
    }
  }, [token]);
  // console.log(id, loggedUser, "id loggeduser", commentData);

  return (
    <div>
      <DetailsBanner video={data?.results?.[0]} crew={credits?.crew} />
      <Cast data={credits?.cast} loading={creditsLoading} />

      {/* {id && loggedUser ? (
        <div>
          <CommentInput postID={id} author={loggedUser} />
          {commentData && id ? (
            <CommentList productId={id} />
          ) : (
            <p>Loading comments...</p>
          )}
        </div>
      ) : commentData && id ? (
        <CommentList productId={id} showReply={false} />
      ) : (
        <p>Loading comments...</p>
      )} */}
      {id && loggedUser ? (
        <div>
          <CommentInput postID={id} author={loggedUser} />
          {commentData && id ? (
            <CommentList productId={id} />
          ) : (
            <p>Loading comments...</p>
          )}
        </div>
      ) : id ? (
        <CommentList productId={id} showReply={false} />
      ) : (
        <p>Loading comments...</p>
      )}

      <VideosSection data={data} loading={loading} />
      <Similar mediaType={mediaType} id={id} />
      <Recommendation mediaType={mediaType} id={id} />
    </div>
  );
};

export default Details;
