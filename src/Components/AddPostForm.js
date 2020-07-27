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
           <img className="add-post" onClick={handleToggle} src={addPost} />

           {toggle ?
            
            <form onSubmit={handleSubmit}>
                <input
                type="text"
                placeholder="Title"
                name="title"
                value={title}
                onChange={(e) => {setTitle(e.target.value)}}
                />

                <br/>          

                <label>Choose a Category</label>
                <select value={category} onChange={(e) => {setCategory(e.target.value)}}>
                    <option value="General">General</option>
                    <option value="Recommendation">Recommendation</option>
                    <option value="Travel Buddy">Travel Buddy</option>
                    <option value="Food/Drink">Food/Drink</option>
                    <option value="Rideshare">Rideshare</option>
                    <option value="For Sale">For Sale</option>
                    <option value="Activity">Activity</option>
                </select>

                <br/>

                <textarea 
                type="text"
                placeholder="Write Post"
                name="post"
                value={post}
                onChange={(e) => {setPost(e.target.value)}}
                />

                <br/>

                <input
                type="text"
                placeholder="Image Url"
                name="img"
                value={img}
                onChange={(e) => {setImg(e.target.value)}}
                />

                <br/>

                <input 
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