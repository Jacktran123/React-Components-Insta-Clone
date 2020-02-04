import React, {useState} from 'react';



const LikeSection = () => {
  const [postLikes, setPostLikes]= useState(0);
  const [comments, setComments]= useState(0);
	const clickHandler = () => setPostLikes(postLikes + 1);

	return (
		<div>
			<div className="like-section" key="likes-icons-container">
				<div className="like-section-wrapper">
					<i className="far fa-heart" onClick={clickHandler} />
				</div>
				<div className="like-section-wrapper">
					<i className="far fa-comment" />
				</div>
			</div>
			<p className="like-number">{`${postLikes} `} likes</p>
     
		</div>
	);
};

export default LikeSection;
