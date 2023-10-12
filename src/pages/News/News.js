import React, { useState } from 'react';
import data from './data';

import {
  Container,
  PageName,
  NewsItem,
  Inform,
  AllComments,
  Comments,
  User,
  UserAvatar,
  UserName,
  Description,
  Img,
  CommentDiv,
  Comment,
  CommentContent,
  NewComment,
  BoxComment
} from './News.styled';

function News() {
  const [commentValues, setCommentValues] = useState([]);

  const handleCommentChange = (event, index) => {
    const updatedCommentValues = [...commentValues];
    updatedCommentValues[index] = event.target.value;
    setCommentValues(updatedCommentValues);
  };

  return (
    <Container>
      <PageName>News</PageName>
      {data.map((item, index) => (
        <NewsItem key={item.post_id}>
          <Inform> {/* post  */}
            <User>  {/* avatar + name  */}
              {item.author_img && item.author_img.trim() !== '' ? (
                <UserAvatar bgImage={item.author_img} alt={item.author_name} />
              ) : null}
              <UserName>{item.author_name}</UserName>
            </User>
            <Description>{item.post_content}</Description>
            {item.post_image && item.post_image.trim() !== '' ? (
              <Img bgImage={item.post_image} />
            ) : null} {/* if have img  */}
          </Inform>

          <AllComments>
            <Comments> {/* other comment  */}
              {item.comments.map((comment) => (
                <CommentDiv key={comment.comment_id}>
                  {comment.commenter_img !== null ? (
                    <UserAvatar bgImage={comment.author_img} />
                  ) : null} {/* avatar */}
                  <Comment> {/* name + content */}
                    <UserName>{comment.commenter_name}</UserName>
                    <CommentContent>{comment.comment_content}</CommentContent>
                  </Comment>
                </CommentDiv>
              ))}
            </Comments>
            <NewComment> {/* my cmt   */}
              {item.author_img && item.author_img.trim() !== '' ? (
                <UserAvatar bgImage={item.author_img} />
              ) : null} {/* change to my avatar */}
              <BoxComment 
                placeholder="Comment"
                value={commentValues[index] || ''}
                onChange={(event) => handleCommentChange(event, index)}
              /> {/* input there */}
            </NewComment>
          </AllComments>
        </NewsItem>
      ))}
    </Container>
  );
}

export default News;