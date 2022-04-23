import {useContext, useEffect, useState} from "react";
import {postService} from "../../services";
import {Post} from "../../components";
import {Outlet, useSearchParams} from "react-router-dom";
import {MyContext} from "../../index";

const PostsPage = () => {
    const [posts, setPosts] = useState([]);
    // const value = useContext(MyContext);
    const [query, setQuery] = useSearchParams({page: '1'});

    useEffect(() => {
        postService.getAll(query.get('page'), 10).then(({data}) => setPosts(data))
        // console.log(value);
        // value.name = 'Olha'
    }, [query])

    const nextPage = () => {
        // let page = query.get('page');
        // page = +page + 1
        // setQuery({page: page.toString()})

        const queryObj = Object.fromEntries(query.entries());
        queryObj.page++
        setQuery(queryObj)
    }
    return (
        <div style={{display: 'flex'}}>
            <div>
                {posts.map(post => <Post key={post.id} post={post}/>)}
                <button onClick={() => nextPage()}>Next</button>
            </div>
            <div><Outlet/></div>
        </div>
    );
};

export {PostsPage};