import React from "react";
import Article from "./Article";
function ArticleList({posts}){
    console.log({posts})
    return (
        <main>
           {posts.map((posts) => {
            return (<Article 
                key={posts.id} 
                title={posts.title}
                date={posts.date}
                preview={posts.preview}
                 />)
           })}


        </main>
    )
}
export default ArticleList