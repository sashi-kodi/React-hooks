import React, {useState, useEffect} from 'react';
import RepoDisplay from './RepoDisplay';

const ReposComponent = (props)=>{
    let style={listStyleType:'none'};
    const [page,setPage]= useState(1);
   
    const [commits, setCommits] = useState([]);
    useEffect(()=>{
        fetchData();
    },[page]);
    
    const fetchData= ()=>{
        let url=`https://api.github.com/search/commits?q=repo:facebook/react+css&page=${page}`;
        fetch(url,{ method:'GET',
                  headers:new Headers({'Accept': "application/vnd.github.cloak-preview" })
                  })
        .then(response=> response.json())
        .then(data=>{
            if(data.items.length>0){
                setCommits(data.items);
            }
            else{
                
                setPage(1);
            }
        })
    }
    
    const nextPage=()=>{
        setPage(page+1);
    }
    
    return(
        <React.Fragment>
        <button onClick={nextPage}>Next Page</button>
      <ul style={style}>
        {commits.map(el=>(
           <RepoDisplay repo={el} key={el.url} />
         ))}
        </ul>
         </React.Fragment>
    
    )
    
}
export default ReposComponent;