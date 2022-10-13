// useRef lessons
// ICON IS GONNA BE BEAD LIZARD. THANKS SHEP
import React, { useRef, useState } from "react";
import "./styles/newtWitter.scss";
import { IconContext } from "react-icons";
import {
  FaUser,
  FaRegComment,
  FaRegHeart,
  FaRetweet,
  FaRegEdit,
} from "react-icons/fa";
import { FiTrash2 } from "react-icons/fi";

const randomId = () => {
  const numbersLetters =
    "0123456789abcdefghijklmnopqrstuvwzyzABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
  let randId = "";
  let randIndex;
  for (let i = 0; i < 6; i++) {
    randIndex = Math.floor(Math.random() * numbersLetters.length);
    randId += numbersLetters[randIndex];
  }
  return randId;
};

const recentPosts = [
  {
    id: randomId(),
    date: new Date(),
    user: "Asabeneh Yetayeh",
    post: "30 Days Of React challenge has been started on 1 October and still ongoing. It will end the 30 October 2020. It was a real challenge for everyone. Students learned quite a lot of concepts. I hope this will help lots of students. ",
    postInfo: [{ comment: 0 }, { repost: 0 }, { hearts: 0 }],
  },
  {
    id: randomId(),
    date: new Date(),
    user: "Asabeneh Yetayeh",
    post: "30 Days Of JavaScript challenge has been started on 1 January and ended on 30 January 2020. It is of the best JavaScript material on the internet. Students learned quite a lot of concepts. I hope this will help lots of students. JavaScript for Ever! ",
    postInfo: [{ comment: 0 }, { repost: 0 }, { hearts: 0 }],
  },
  {
    id: randomId(),
    date: new Date(),
    user: "Asabeneh Yetayeh",
    post: "30 Days Of Python challenge has been started on 22 November 2019  and ended on 22 December 2020. It is of the best references for Pythonistas, data scientists and aspiring ML. Students learned quite a lot of concepts. I hope this will help lots of students. Python is for best friend",
    postInfo: [{ comment: 0 }, { repost: 0 }, { hearts: 0 }],
  },
  {
    id: randomId(),
    date: new Date(),
    user: "Asabeneh Yetayeh",
    post: "30 Days Of Python challenge has been started on 22 November 2019  and ended on 22 December 2020. It is of the best references for Pythonistas, data scientists, and aspiring ML. Students learned quite a lot of concepts. Python is eating the world.",
    postInfo: [{ comment: 0 }, { repost: 0 }, { hearts: 0 }],
  },
  {
    id: randomId(),
    date: new Date(),
    user: "Asabeneh Yetayeh",
    post: "I have no idea about the coming challenge. It could be 30 days of HTML &  CSS, ReactNative, Data Analysis or MERN. ",
    postInfo: [{ comment: 0 }, { repost: 0 }, { hearts: 0 }],
  },
];

const NewTweet = (posts) => {
  const ref = useRef(null);
  const [tweet, setTweet] = useState("");

  const onChange = (e) => {
    setTweet(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    let tweetToSend = ref.current.value;
    posts.addPost(tweetToSend);
    setTweet("");
    //console.log("Sent tweet: " + tweetToSend);
  };

  let wordCount = 250 - tweet.length;
  let buttonStatus = wordCount < 250 && wordCount > 0;

  let buttonClass = buttonStatus ? "activeButton" : "disabledButton";

  return (
    <div>
      <form onSubmit={onSubmit}>
        <div className="new-post-text">
          <textarea
            ref={ref}
            placeholder="Write new tweet"
            value={tweet}
            cols="90"
            rows="3"
            onChange={onChange}
          />
          <p>{wordCount}</p>
        </div>
        <div className="send-tweet">
          <button className={buttonClass} disabled={!buttonStatus}>
            Add Post
          </button>
        </div>
      </form>
    </div>
  );
};


const Post = ({ post: { id, date, user, post, postInfo } }) => {
  
  let firstName = user.split(" ")[0];

  const ref = useRef(null)
  const [editing, toggleEditing] = useState(false)

  const editPost = () => {
    toggleEditing(true)
  }

  // NEED to handle onChange
  const onChange = (e) => {
    //wow
  }

  const handleSave = () => {
    let text = ref.current.value
    posts.editPost(text, id)
    console.log('new text: ')
    console.log(text)
    toggleEditing(false)
  }
  const cancelEdit = () => {
    toggleEditing(false)
  }

  const renderEditBox = (
    <div className="editContainer">
        <textarea
          ref={ref}
          placeholder={post}
          value={post}
          cols="90"
          rows="3"
          onChange={onChange}
        />
        <div>
          <button className="saveButton">Save</button>
          <button className="cancleButton" onClick={cancelEdit}>Cancel</button>
        </div>
    </div>
  )

  const renderPost = (
    <IconContext.Provider value={{ className: "shared-class", size: 25 }}>
      <div className="post-container">
        <div className="post-user-info">
          <FaUser className="faUser" />
          <h4>
            {user} <span>@{firstName}</span>
          </h4>
        </div>

        <p className="post-text">{post}</p>

        <div className="post-interact-bar">
          <div className="edit-delete">
            <button onClick={editPost}>
              <FaRegEdit className="faEdit" />
            </button>
            <button>
              <FiTrash2 className="faEdit" />
            </button>
          </div>
          <div className="user-engagement">
            <button>
              <FaRegComment className="faComment" />
            </button>
            <button>
              <FaRetweet className="faRetweet" size={28} />
            </button>
            <button>
              <FaRegHeart className="faHeart" />
            </button>
          </div>
          <div className="post-time">
            <p>time</p>
          </div>
        </div>
      </div>
    </IconContext.Provider>
  )
  
  return editing ? renderEditBox : renderPost
//   if(editing) {
//     return renderEditBox
//   }
//  return (
    
//   );
};

{/*const EditPost = ({ targetPost: {post, editing,} }) => {

  let uneditedText = targetPost.post

  const onChange = (e) => {
    targetPost.setParams({ editing: true, post: e.target.value })
  }

  const handleSave = (e) => {
    e.preventDefault();
    targetPost.setParams({ post: ref.current.value, editing: false })
    console.log("Edited tweet object: ");
    console.log(targetPost);
  };

  const handleCancel = (e) => {
    setParams({ post: uneditedText, editing: false })
  }

  return (
      <div className="editContainer">
        <textarea
          ref={ref}
          placeholder="Edit tweet"
          value={tweet}
          cols="90"
          rows="3"
          onChange={onChange}
        />
        <div>
          <button className="saveButton" onClick={handleSave}>Save</button>
          <button className="cancleButton">Cancel</button>
        </div>
      </div>
  ) 
};
*/}

const App = () => {
  const [posts, setPosts] = useState(recentPosts);

  const handleTime = (rawDate) => {

    const month = months[rawDate.getMonth()].slice(0,3)
    const year = rawDate.getFullYear()
    const date = rawDate.getDate()
    console.log(date)
    return ` ${month} ${date}, ${year}`
  }
  const addPost = (text) => {
    let id = randomId();
    let rawDate = handleTime(new Date());

    let newPost = {
      id,
      date,
      post: text,
      user: "Anonymous User",
      postInfo: [{ comment: 0 }, { repost: 0 }, { hearts: 0 }],
      editing: false,
    };
  

    if (text.length) {
      setPosts((arr) => [...arr, newPost]);
    }
    
  };
  // console.log("Logging all posts to console: ");
  // console.log(posts);

  const editPost = () => {
    setPosts({ editing: true })
  }

  const removePost = () => {};

  const eachPost = () => {
    // check 'editing' in order to render different element, <-,
    //  '-> allowing user to access newTweet in different format, overriding 'text'

    return posts.map((post) => {
      return <Post key={post.id} post={post} editPost={editPost} /> 
    });
  };

  return (
    <div className="app-container">
      <div className="new-tweet">
        <NewTweet addPost={addPost} />
      </div>
      <div className="post-feed">{eachPost()}</div>
    </div>
  );
};

export default App;
