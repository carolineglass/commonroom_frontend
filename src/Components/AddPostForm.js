import React, {useState} from 'react'
import addPost from '../images/addPost.png'

const AddPostForm = ({country, user, addNewPost}) => {
    
    let [title, setTitle] = useState("")
    let [post, setPost] = useState("")
    let [category, setCategory] = useState("General")
    let [img, setImg] = useState("")
    let [toggle, setToggle] = useState(false)

    let handleToggle = (e) => {
        setToggle((prevToggle) => {return !prevToggle})
    }

    let handleSubmit = (e) => {
        e.preventDefault() 
        
        fetch("http://localhost:3000/posts", {
            method: "POST",
            headers: {
                "content-type": "application/json",
                "accept": "application/json"
            },
            body: JSON.stringify({
                user_id: user.id,
                country_id: country.id,
                title,
                post,
                category,
                img
                })
            })
                .then(r => r.json())
                .then((newPost) => {
                    addNewPost(newPost)
                    // add the function that takes in the newPost and passed it up 
                    // to add to array of country posts
                    setTitle("")
                    setPost("")
                    setImg("")
                })
        }

    return (
       <div className="post-form-container">
           {/* <img className="add-post" onClick={handleToggle} src={addPost} /> */}

            <svg className="add-post" onClick={handleToggle} xmlns="http://www.w3.org/2000/svg" 
            class="icon icon-tabler icon-tabler-circle-plus" width="40" height="40" viewBox="0 0 24 24" 
            stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round">
            <path stroke="none" d="M0 0h24v24H0z"/>
            <circle cx="12" cy="12" r="9" />
            <line x1="9" y1="12" x2="15" y2="12" />
            <line x1="12" y1="9" x2="12" y2="15" />
            </svg>

           {toggle ?
            
            <form className="add-post" onSubmit={handleSubmit}>
                <input
                type="text"
                placeholder="Title"
                name="title"
                value={title}
                onChange={(e) => {setTitle(e.target.value)}}
                />

                <input
                type="text"
                placeholder="Image Url"
                name="img"
                value={img}
                onChange={(e) => {setImg(e.target.value)}}
                />
        
                {/* <div className="category-form"> */}
                <label>Choose Category</label>
                <select value={category} onChange={(e) => {setCategory(e.target.value)}}>
                    <option value="General">General</option>
                    <option value="Recommendation">Recommendation</option>
                    <option value="Travel Buddy">Travel Buddy</option>
                    <option value="Food/Drink">Food/Drink</option>
                    <option value="Rideshare">Rideshare</option>
                    <option value="For Sale">For Sale</option>
                    <option value="Activity">Activity</option>
                </select>
                {/* </div> */}

                <textarea
                className="textarea" 
                type="text"
                placeholder="Write Post"
                name="post"
                value={post}
                onChange={(e) => {setPost(e.target.value)}}
                />

                <input 
                className="post-button"
                type="submit"
                value="Post"
                />
           </form>
           :
           null
           }
       </div> 
    );
}

export default AddPostForm;