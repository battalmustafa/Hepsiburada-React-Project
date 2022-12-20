import ProductPage from './components/ProductPage';
import Header from './components/Header';
import FilterPage from './components/FilterPage';
import Pagination from './components/Pagination';
import { useState } from 'react';
function App() {

  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(3);
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

   const paginate = pageNumber => setCurrentPage(pageNumber);
  return (
    <div>
      <Header/>
       <ProductPage/>
       
       <FilterPage/>
       <Pagination
        postsPerPage={postsPerPage}
        totalPosts={posts.length}
        paginate={paginate}
      />
 
    </div>
  );
}

export default App;
