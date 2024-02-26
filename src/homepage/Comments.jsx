import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import left from "./assets/menu-img/left-bean-big.png";
import { useTranslation } from "react-i18next";

const Comments = ({ elem }) => {
  const navigate = useNavigate();

  const handledClick = () => {
    navigate("/products");
  };

  const [name, setName] = useState("");
  const [comment, setComment] = useState("");
  const [commentsList, setCommentsList] = useState([]);
  const [replyIndex, setReplyIndex] = useState(null);
  const [replyName, setReplyName] = useState("");
  const [replyComment, setReplyComment] = useState("");

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleCommentChange = (event) => {
    setComment(event.target.value);
  };

  const handleSubmit = () => {
    if (name.trim() === "" || comment.trim() === "") {
      alert("Заполните все поля!");
      return;
    }

    const newComment = { name, comment };
    const newCommentsList = [...commentsList, newComment];
    setCommentsList(newCommentsList);

    localStorage.setItem("comments", JSON.stringify(newCommentsList));

    setName("");
    setComment("");
  };

  const handleDelete = (commentIndex, replyIndex) => {
    if (replyIndex !== undefined) {
      const updatedReplies = [...commentsList[commentIndex].replies];
      updatedReplies.splice(replyIndex, 1);

      const updatedCommentsList = [...commentsList];
      updatedCommentsList[commentIndex].replies = updatedReplies;

      setCommentsList(updatedCommentsList);
    } else {
      const updatedCommentsList = [...commentsList];
      updatedCommentsList.splice(commentIndex, 1);
      setCommentsList(updatedCommentsList);
    }

    localStorage.setItem("comments", JSON.stringify(commentsList));
  };

  const handleReply = (commentIndex) => {
    setReplyIndex(commentIndex);
    setReplyName("");
    setReplyComment(`Answered(a) ${commentsList[commentIndex].name}`);
  };

  const handleCancelReply = () => {
    setReplyIndex(null);
    setReplyName("");
    setReplyComment("");
  };

  const handleReplyNameChange = (event) => {
    setReplyName(event.target.value);
  };

  const handleReplyCommentChange = (event) => {
    setReplyComment(event.target.value);
  };

  const handleSubmitReply = (commentIndex) => {
    if (replyName.trim() === "" || replyComment.trim() === "") {
      alert("Заполните все поля!");
      return;
    }

    const repliedComment = {
      name: replyName,
      comment: replyComment,
      replyInfo: "",
    };
    const repliedName = commentsList[commentIndex].name;
    repliedComment.replyInfo = `Answered(a) ${repliedName}`;

    const updatedCommentsList = [...commentsList];
    updatedCommentsList[commentIndex].replies =
      updatedCommentsList[commentIndex].replies || [];
    updatedCommentsList[commentIndex].replies.push(repliedComment);

    setCommentsList(updatedCommentsList);
    localStorage.setItem("comments", JSON.stringify(updatedCommentsList));

    setReplyName("");
    handleCancelReply();
  };

  useEffect(() => {
    const storedComments = localStorage.getItem("comments");
    if (storedComments) {
      setCommentsList(JSON.parse(storedComments));
    }
  }, []);
  const { t, i18n } = useTranslation();

  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  };
  return (
    <div style={{ marginLeft: "7%" }}>
      <div className="change_lan">
        <button onClick={() => changeLanguage("en")}>EN</button>
        <button onClick={() => changeLanguage("ru")}>RU</button>
      </div>
      <img className="img__big-bean" src={left} alt="" />
      <div className="lavazza">
        <div className="lavazza__img">
          <img
            style={{ marginTop: "50px", borderRadius: "10px" }}
            src="https://oe.kg/upload/resize_cache/iblock/ada/570_362_0/adac3cbf44e449efd02d1a94d9655c32.jpeg"
            alt=""
          />
        </div>
        <div>
          <div className="Lavazza__cold-p">
            <p>
              {t("tittle")}
              <hr />
            </p>
            <div style={{ display: "flex" }}>
              <p style={{ marginTop: "-2%" }}>{t("price")}</p>
              <button onClick={handledClick} className="card__buy">
                {t("buy")}
              </button>
            </div>
          </div>
          <div>
            <div className="block11">
              <p style={{ marginLeft: "12%" }}>{t("brand")}</p>
              <p style={{ marginLeft: "24%" }}>{t("lavaza")}</p>
            </div>
            <div className="block12">
              <p style={{ marginLeft: "12%" }}>{t("weight")}</p>
              <p style={{ marginLeft: "23%" }}>1kg</p>
            </div>
            <div className="block13">
              <p style={{ marginLeft: "12%" }}>{t("packaging")}</p>
              <p style={{ marginLeft: "7%" }}>{t("vacum")}</p>
            </div>
            <div className="block14">
              <p style={{ marginLeft: "12%" }}>{t("grain")}</p>
              <p style={{ marginLeft: "14%" }}>{t("arabica")}</p>
            </div>
            <div className="block15">
              <p style={{ marginLeft: "12%" }}>{t("degree")}</p>
              <p style={{ marginLeft: "7%" }}>{t("medium")}</p>
            </div>
            <div className="block16">
              <p style={{ marginLeft: "12%" }}>{t("country")}</p>
              <p style={{ marginLeft: "2%" }}>{t("italy")}</p>
            </div>
          </div>
        </div>
      </div>
      ;
      <div className="block17">
        <p>{t("description")}</p>
        <p>{t("superb")}</p>
      </div>
      <div className="block_comments">
        <p className="block__comments-p">{t("test")}</p>
        <div className="input__comments">
          <div>
            <input
              type="text"
              placeholder="Name"
              className="input__comments1"
              value={name}
              onChange={handleNameChange}
            />
          </div>
          <div>
            <textarea
              className="input__comment2"
              placeholder="Enter your review"
              value={comment}
              onChange={handleCommentChange}
              rows="5"
              cols="50"
            ></textarea>
          </div>
          <button className="submit_bottun" onClick={handleSubmit}>
            {t("sub")}
          </button>
        </div>
        <div>
          {commentsList.map((item, commentIndex) => (
            <div key={commentIndex}>
              <div className="comments__p">
                <p>
                  {item.name} {item.replyInfo}
                </p>
                <p>{item.comment}</p>
              </div>
              <button
                style={{
                  height: "50px",
                  width: "150px",
                  marginLeft: "10%",
                }}
                className="submit_bottun"
                onClick={() => handleDelete(commentIndex)}
              >
                {t("delete")}
              </button>
              <button
                style={{
                  height: "50px",
                  width: "150px",
                  marginLeft: "1%",
                  marginTop: "0.3%",
                }}
                className="submit_bottun"
                onClick={() => handleReply(commentIndex)}
              >
                Reply to comment
              </button>
              {replyIndex === commentIndex && (
                <div className="input__comments">
                  <div>
                    <input
                      style={{ marginTop: "1%" }}
                      type="text"
                      placeholder="Name"
                      className="input__comments1"
                      value={replyName}
                      onChange={handleReplyNameChange}
                    />
                  </div>
                  <div>
                    <textarea
                      style={{ marginTop: "0.5%" }}
                      className="input__comment2"
                      placeholder="Enter your answer"
                      onChange={handleReplyCommentChange}
                      rows="4"
                      cols="50"
                    ></textarea>
                  </div>
                  <button
                    style={{ marginLeft: "20px" }}
                    className="submit_bottun"
                    onClick={() => handleSubmitReply(commentIndex)}
                  >
                    Send reply
                  </button>
                  <button
                    style={{ marginLeft: "20px" }}
                    className="submit_bottun"
                    onClick={handleCancelReply}
                  >
                    Cancel reply
                  </button>
                </div>
              )}
              {item.replies && (
                <div style={{ marginLeft: "10%", marginBottom: "4.5%" }}>
                  {item.replies.map((reply, replyIndex) => (
                    <div key={replyIndex} className="comments__p reply">
                      <p style={{ fontSize: "13px" }}>
                        {reply.name} {reply.replyInfo}
                      </p>
                      <p>{reply.comment}</p>
                      <button
                        style={{ marginLeft: "-1.3%", marginTop: "-0.7%" }}
                        className="submit_bottun"
                        onClick={() => handleDelete(commentIndex, replyIndex)}
                      >
                        Delete reply
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Comments;
