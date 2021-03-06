import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { Helmet } from 'react-helmet'
import axios from 'axios'

import PopularTagsList from '../Tags/PopularTagsList'
import FilteringBar from '../Filters'
import Preview from '../Base/Preview.js'
import Pagination from '../Base/Pagination'
import PostsList from './PostsList'
import { PostLoading } from '../Misc/Loading'
import '../Misc/Animations.css'
import './Posts.css'

export default function Posts() {
  const location = useLocation()
  const [posts, setPosts] = useState([])
  const [query, setQuery] = useState(new URLSearchParams(useLocation().search))
  const [loading, setLoading] = useState(true)
  let searchValue = '&search='
  if(query.has('search'))
    searchValue = '&search=' + query.get('search')
  const [currentPageUrl, setCurrentPageUrl] = useState("https://orbimind.herokuapp.com/api/posts?page=1" + "&category=" + query.get("category") + "&order=date$desc" + searchValue)
  const [nextPageUrl, setNextPageUrl] = useState()
  const [prevPageUrl, setPrevPageUrl] = useState()
  const params = new URLSearchParams('?' + currentPageUrl.split('?')[1])
  let next = +params.get('page') + 1
  let prev = +params.get('page') - 1
  let title = "All posts"
  if(query.get("category") !== null)
    title = query.get("category")

  useEffect(() => {
    let cancel
    let queryCategory = query.get("category")

    axios.get(currentPageUrl, {
      cancelToken: new axios.CancelToken(c => cancel = c)
    }).then(result => {
      setNextPageUrl("https://orbimind.herokuapp.com/api/posts?page=" + next + "&category=" + queryCategory + "&order=date$desc")
      setPrevPageUrl("https://orbimind.herokuapp.com/api/posts?page=" + prev + "&category=" + queryCategory + "&order=date$desc")
      setPosts(result.data.map(p => p))
      setLoading(false)
    })

    return () => cancel();
  }, [currentPageUrl])

  useEffect(() => {
    setQuery(new URLSearchParams(location.search.slice(1)))
  }, [location])

  useEffect(() => {
    let newUrl = currentPageUrl.slice(0, currentPageUrl.indexOf('?')) + '?'
    let queries = new URLSearchParams(currentPageUrl.slice(currentPageUrl.indexOf('?')))
    
    queries.set('category', query.get('category'))
    queries.set('search', query.get('search'))
    query.get('order') ? queries.set('order', query.get('order')) : queries.set('order', 'date$desc')
    queries.set('status', query.get('status'))
    queries.has('page') && queries.set('page', '1')
    
    for (const q of queries) {
      newUrl += q[0] + '=' + q[1] + '&'
    }

    if (newUrl[newUrl.length - 1] === '&') {
      newUrl = newUrl.slice(0, newUrl.length - 1)
    }
  
    setCurrentPageUrl(newUrl)
  }, [query])

  function gotoNextPage() {
    setCurrentPageUrl(nextPageUrl)
  }
  function gotoPrevPage() {
    setCurrentPageUrl(prevPageUrl)
  }

  return (
    <>
    <Helmet>
        <title>Posts &#8739; Orbimind</title>
    </Helmet>
    <Preview title={title}/>
    <div className='postsRoot'>
        <div className='posts fadeIn'>
            <div className='content'>
                <FilteringBar setCurrentPageUrl={ setCurrentPageUrl } />
                <div className="postsList">
                    {
                      loading && <PostLoading />
                    }
                    { 
                      posts.length 
                      ? <PostsList posts={posts}/>
                      : loading ? null : <p style={{width:'100%', height:'200px', display:'grid', placeItems:'center'}}>No posts here. Be the first to ask!</p>
                    }
                </div>
                { 
                  posts.length ? 
                  <Pagination
                    gotoNextPage={gotoNextPage}
                    gotoPrevPage={gotoPrevPage}
                    currentPage={params.get('page')}
                    isNext={posts.length >= 10 ? true : false }
                  />
                  : null
                }
            </div>
            <PopularTagsList  />
        </div>
    </div>
    </>
  );
}
