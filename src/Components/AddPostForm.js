import React, {useState} from 'react'

const AddPostForm = ({country, user}) => {
    
    let [title, setTitle] = useState("")
    let [post, setPost] = useState("")
    let [category, setCategory] = useState("General")
    let [img, setImg] = useState("")

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
                    console.log(newPost)
                    // add the function that takes in the newPost and passed it up 
                    // to add to array of country posts
                    setTitle("")
                    setPost("")
                    setImg("")
                })
        }

    return (
       <div className="post-form-container">
           <h3>Add a Post!</h3>
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
                    <option value="Recommendation">Recommendations</option>
                    <option value="Travel Buddy">Travel Buddy</option>
                    <option value="Food/Drink">Food/Drink</option>
                    <option value="Rideshare">Rideshares</option>
                    <option value="For Sale">For Sale</option>
                    <option value="Activity">Activity</option>
                </select>

                <br/>

                <input
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
       </div> 
    );
}

export default AddPostForm;