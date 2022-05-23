import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import useFetch from "./useFetch";

const BlogDetails = () => {
const { id } = useParams();
const { data, isLoading, error  } = useFetch('http://localhost:8000/blogs/' + id);
const navigate = useNavigate();
const handleClick =() => {
    fetch('http://localhost:8000/blogs/'+ data.id, {
        method: 'DELETE'
    }). then(() => {
        navigate('/');
    })
}
    return ( 
        <div className="blog-details">
            {isLoading && <div>Loading...</div>}
            { error && <div>{ error }</div>}
            { data && (
                <article>
                    <h2>{ data.title }</h2>
                    <p>written by { data.author }</p>
                    <div> {data.body }</div>
                    <button onClick={handleClick}>delete</button>
                </article>
            )}
        </div>
     );
}
 
export default BlogDetails;