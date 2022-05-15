import React, {useState} from 'react';
import Link from "next/link";
import axiosAuth from "../axios/axiosAuth";

const HeaderSearchBar = ({onOpen}) => {

    const [query, setQuery] = useState('')
    const [loading, setLoading] = useState(false)
    const [products, setProducts] = useState([])

    const submitHandler = async (e) => {
        e.preventDefault()
        setLoading(true)
        const {data} = await axiosAuth.get('/products', {
            params: {
                search : query
            }
        })
        setProducts(data)
        setLoading(false)
    }

    return (
       <>
           <div
               onClick={onOpen}
               className="search-icon">
               <i className="fa fa-search"></i>
           </div>
           <div className="search-box">
               <form onSubmit={submitHandler}>
                   <input
                       type="search"
                       value={query}
                       onChange={e => {
                           setQuery(e.target.value)
                       }}
                       placeholder="Begin typing..."
                        className="txt-search"/>
               </form>
               {
                   loading ? <p>Loading...</p> :
                       <ul className="search-items">
                           {
                               products.map(product =>
                                   <li key={product.id}>
                                       <Link href={'http://localhost:3000/product/'+product.id}>{product.name}</Link>
                                   </li>
                               )
                           }
                       </ul>
               }

           </div>
       </>
    );
};

export default HeaderSearchBar;