import React, {useEffect} from 'react';
import Link from "next/link";
import useFetch from "../hooks/useFetch";
import {useDispatch, useSelector} from "react-redux";
import {fetchCategories} from "../store/features/categoriesSlice";

const TagCloud = () => {

    const {categories, isLoading} = useSelector(state => state.categories)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchCategories())
    }, [])

    return (
        <div className="bottom-col">
            <div className="col-caption">
                <span>TAG CLOUD</span>
            </div>
            <div className="list-tags">
                <p className="hidden"></p>
                {
                    !isLoading &&
                    categories.map(category =>
                        <Link key={category.id} href={'http://localhost:3000/category/'+category.id}>{category.name}</Link>
                    )
                }
            </div>
        </div>
    );
};

export default TagCloud;