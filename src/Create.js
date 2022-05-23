import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Create = () => {
const [title, setTitle] = useState('');
const [body, setBody] = useState('');
const [author, setAuthor] = useState('');
const [gender, setGender] = useState('');
const [number, setNumber] = useState([]);

const [isPending, setIsPending] = useState(false)
const navigate = useNavigate();

const handleChange = (e) => {
 
    let test;
    if(e.target.checked == true) {
    
         number.push(e.target.value)
    } else {
        test = number.indexOf(e.target.value)
        number.splice(test,1)
    }

    setNumber(number)
}

const handleSubmit =(e) => {
    e.preventDefault()
    const blog = {title, body, author}

    setIsPending(true)
    console.log(blog);
    setTimeout(() => {
         fetch('http://localhost:8000/blogs', {
       method: 'POST',
       headers: {"Content-Type":"application/json"},
       body: JSON.stringify(blog)
    }).then(() => {
        console.log('New blog added')
        setIsPending(false)
        navigate('/')
    })
    }, 1000);
   
   
}

console.log(number)
    return (<div className="create">
        <h2>Add a new blog</h2>
        <form onSubmit={handleSubmit}>
            <label>Blog title:</label>
            <input 
                type="text" 
                required
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />
            <label>Blog body:</label>
            <textarea  
                required
                value={body}
                onChange={(e) => setBody(e.target.value)}
            />
            <label htmlFor="Blog author: "></label>
            <select onChange={(e) => setAuthor(e.target.value)}>
                <option value="mario">mario</option>
                <option value="yoshi">youshi</option>
            </select>
            <label >Gender</label>
            <div className="radio">
                <input 
                    type="radio"
                    name="gender"
                    id="male"
                    value='male'
                    onChange={(e) => setGender(e.target.value)}
                />
                <input 
                    type="radio"
                    name="gender" 
                    id="female" 
                    value='female'
                    onChange={(e) => setGender(e.target.value)}
                />
            </div>
            <div className="chewckboxes">
                <label htmlFor="one">One</label>
                <input 
                    name='one' 
                    type="checkbox" 
                    value='one' 
                    onChange={handleChange}
                />
                <label htmlFor="two">Two</label>
                <input 
                    name='two' 
                    type="checkbox" 
                    value='two' 
                    onChange={handleChange}
                    />
                <label htmlFor="three">Three</label>
                <input 
                    name='three'
                    type="checkbox"
                    value='three'
                    onChange={handleChange}
                />
            </div>
            { !isPending &&   <button>Add blog</button>}
            { isPending &&   <button disabled>Adding blog...</button>}
          
            <p>{title}</p>
            <p>{body}</p>
            <p>{author}</p>
            <p>{gender}</p>
            <p>{number}</p>
        </form>
    </div>  );
}
 
export default Create;
