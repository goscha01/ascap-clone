import { useState  } from 'react';
import BlogList from './BlogList';

import useFetch from './useFetch';

const Home = () => {
    const { data:blogs, isLoading, error } = useFetch('http://localhost:8000/blogs')
    const MyComponent = (<main><h1 id="title">Look ma!</h1></main>)
    console.log(MyComponent)

    const [name, setName] = useState('marion');

    const handleDelete = (id) => {
        const newBlogs = blogs.filter(blog => blog.id != id);
        // setBlogs(newBlogs);
    }



    return ( 
        <div className="home">
            { error && <div>{error}</div>}
            {isLoading && <div>Loading...</div> }
            {
                blogs && <BlogList blogs={blogs} title='All blogs!' handleDelete = {handleDelete}/>

            }
            {
               blogs && <BlogList 
                blogs={blogs.filter((blog) => blog.author == 'mario')} 
                title="Mario's blog"
                handleDelete = {handleDelete}
                />
            }
            
                <p>{name}</p>
                <button onClick={() => setName('George')}> Change name</button>
 
        </div>
     );
}
 
export default Home;