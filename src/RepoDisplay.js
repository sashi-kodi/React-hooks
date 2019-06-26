import React from 'react';
const RepoDisplay = ({repo})=>{
    let style={
        backgroundColor: 'azure',
        border:'1px solid blue',
        padding:'10px',
        textAlign:'left',
        margin:'10px'
    };
    
    return(
    <li style={style}>
        <p>Author: {repo.commit.author.name}</p>
    
         <p>Message: {repo.commit.message}</p>
        </li>
    
    )
}
export default RepoDisplay;