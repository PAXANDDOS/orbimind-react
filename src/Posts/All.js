import React from 'react';
import './Posts.css';

// async function sendRequest(method, url, data = null) {
//     const responce = await fetch(url);
//     const json = await responce.json();
//     return json;
// }

function AllPosts() {
    // let posts = sendRequest('GET', 'https://orbimind.herokuapp.com/api/posts');
    // console.log(posts)

    return (
        <div className='postsRoot'>
            <div className='posts'>
                <div className='content'>
                    <div className='filteringBar'>
                        <div>
                            <span>Didn’t find what you <br />were looking for?</span>
                            <button id='ask'>Ask a question</button>
                        </div>
                        <div>
                            <span>Sort by:&nbsp;</span>
                            <select id='sortBy'>
                                <option>Newest</option>
                                <option>Active</option>
                                <option>Closed</option>
                                <option>Top</option>
                            </select>
                            <button>
                                <svg width="13" height="12" viewBox="0 0 13 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12.9475 5.19472C12.8624 4.54631 12.1794 4.10245 11.5256 4.34447C11.2808 4.43603 10.9861 4.30002 10.8756 4.05587C10.7434 3.7646 10.5815 3.48564 10.393 3.2265C10.2251 2.99572 10.257 2.69374 10.4656 2.52347C10.7147 2.32108 10.8539 2.02179 10.8474 1.70319C10.8409 1.37925 10.6866 1.08103 10.4238 0.883984C9.99159 0.560593 9.52034 0.291265 9.02256 0.0840539C8.88822 0.028361 8.7474 0 8.60384 0C8.08493 0 7.64725 0.364627 7.56275 0.866867C7.51834 1.13082 7.26538 1.3102 6.98047 1.27968C6.66412 1.24648 6.33481 1.24648 6.019 1.27968C5.73516 1.3102 5.48112 1.13082 5.43672 0.866867C5.35222 0.364627 4.91456 0 4.39563 0C4.25209 0 4.11125 0.0283861 3.97747 0.0840539C3.47913 0.291265 3.00787 0.560041 2.57562 0.883984C2.31347 1.08103 2.15909 1.37925 2.15259 1.70266C2.14609 2.02179 2.28531 2.32055 2.53447 2.524C2.74356 2.69374 2.77443 2.99572 2.60706 3.22595C2.41856 3.48509 2.25606 3.76405 2.1239 4.05532C2.0134 4.29947 1.7404 4.44296 1.46793 4.34176C1.34878 4.29786 1.22472 4.27538 1.09906 4.27538C0.5704 4.27538 0.120809 4.67052 0.0520254 5.1947C0.017875 5.46029 0 5.73175 0 6C0 6.26825 0.017875 6.53971 0.0525332 6.80527C0.137033 7.45314 0.819533 7.89702 1.47441 7.65553C1.71869 7.56397 2.01391 7.69998 2.12441 7.94413C2.25657 8.2354 2.41853 8.51436 2.60703 8.7735C2.77494 9.00428 2.743 9.30626 2.53444 9.47653C2.28528 9.67892 2.14607 9.97821 2.15257 10.2968C2.15907 10.6208 2.31344 10.919 2.57616 11.116C3.00841 11.4394 3.47966 11.7087 3.97744 11.9159C4.11178 11.9716 4.2526 12 4.39616 12C4.91507 12 5.35275 11.6354 5.43725 11.1331C5.48166 10.8692 5.73516 10.6925 6.01953 10.7203C6.33532 10.7535 6.66466 10.7535 6.981 10.7203C7.26591 10.6919 7.51888 10.8692 7.56328 11.1331C7.64778 11.6354 8.08544 11.9994 8.60437 12C8.74791 12 8.88875 11.9716 9.02253 11.9159C9.52032 11.7087 9.99212 11.44 10.4238 11.116C10.686 10.919 10.8409 10.6208 10.8474 10.2973C10.8539 9.97821 10.7147 9.67945 10.4655 9.476C10.2564 9.30626 10.2256 9.00428 10.3929 8.77405C10.5814 8.51491 10.7439 8.23595 10.8761 7.94468C10.9866 7.7 11.2601 7.55704 11.5321 7.65824C11.6512 7.70269 11.7753 7.72517 11.9009 7.72517C12.4296 7.72517 12.8792 7.33003 12.948 6.80585C12.9821 6.53703 13 6.26664 13 6C13 5.73336 12.9821 5.46297 12.9475 5.19472ZM6.5 8.1417C5.30509 8.1417 4.33334 7.18115 4.33334 6C4.33334 4.81885 5.30509 3.8583 6.5 3.8583C7.69491 3.8583 8.66666 4.81885 8.66666 6C8.66666 7.18115 7.69491 8.1417 6.5 8.1417Z" fill="black"/>
                                </svg>
                                Filters
                            </button>
                        </div>
                    </div>
                    <div className='postsList'>
                        <div className='postElement'>
                            <div>
                                <button id="like">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 240.835 240.835">
                                        <path d="M129.007,57.819c-4.68-4.68-12.499-4.68-17.191,0L3.555,165.803c-4.74,4.74-4.74,12.427,0,17.155c4.74,4.74,12.439,4.74,17.179,0l99.683-99.406l99.671,99.418c4.752,4.74,12.439,4.74,17.191,0c4.74-4.74,4.74-12.427,0-17.155 L129.007,57.819z"/>
                                    </svg>
                                </button>
                                <span id='rating'>0</span>
                                <button id="dislike">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 240.835 240.835">
                                        <path d="M129.007,57.819c-4.68-4.68-12.499-4.68-17.191,0L3.555,165.803c-4.74,4.74-4.74,12.427,0,17.155c4.74,4.74,12.439,4.74,17.179,0l99.683-99.406l99.671,99.418c4.752,4.74,12.439,4.74,17.191,0c4.74-4.74,4.74-12.427,0-17.155 L129.007,57.819z"/>
                                    </svg>
                                </button>
                            </div>
                            <div>
                                <h1 id="postTitle">How to lorem ipsum dolor without cringe generations and ho to simiop lskiwu njnxj sl?</h1>
                                <span id="postContent">Guys I really need lorem ipsum dolor semi bold php api to cringe furry connection over html ethernet where js could do some seci peci and make asdasnjasnjnj to finish...</span>
                                <div id="postTags"><button>TagObject</button><button>TagObject</button><button>TagObject</button></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='tags'>
                    <h1>Popular tags</h1>
                    <button>TagObjectssss</button>
                    <button>TagObject</button>
                    <button>TagObjectssss</button>
                    <button>TagObject</button>
                    <button>TagObjectssss</button>
                    <button>TagObject</button>
                </div>
            </div>
        </div>
    );
}

export default AllPosts;