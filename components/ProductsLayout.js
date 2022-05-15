import React, {useEffect, useState} from 'react';
import MiniCart from "./MiniCart";
import NoUiSlider from "./NoUiSlider";
import {useDispatch, useSelector} from "react-redux";
import ProductsSidebar from "./ProductsSidebar";
import {useRouter} from "next/router";
import {fetchProducts} from "../store/features/productsSlice";
import Pagination from "./Pagination";
import SearchBar from "./SearchBar";
import MainLayout from "./MainLayout";

const sorts = [
    {
        name: 'Default sorting',
        orderBy: 'title',
        order: 'asc'
    },
    {
        name: 'Sort by price: low to high',
        orderBy: 'price',
        order: 'asc'
    },
    {
        name: 'Sort by price: high to low',
        orderBy: 'price',
        order: 'desc'
    }
]

const ProductsLayout = ({title, category, children, loadingCategory = false}) => {

    const {products: data, isLoading, pages, total} = useSelector(state => state.products)

    const dispatch = useDispatch()

    const router = useRouter()

    const [currentPage, setCurrentPage] = useState(1)
    const [selectedSort, setSelectedSort] = useState(sorts[0])
    const [isSortDropdownOpen, setIsSortDropdownOpen] = useState(false)
    const [minPrice, setMinPrice] = useState(0)
    const [maxPrice, setMaxPrice] = useState(450)
    const [priceFlag, setPriceFlag] = useState(false)
    const [searchQuery, setSearchQuery] = useState('')

    const getProducts = () => {
        if(router.isReady && !loadingCategory) {
            const params = {
                page: currentPage,
                order: selectedSort.order,
                orderBy: selectedSort.orderBy,
                minPrice, maxPrice
            }
            if(category) {
                params.category = category
            }
            if(searchQuery.length > 0) {
                params.search = searchQuery
            }
            console.log('getProducts', minPrice, maxPrice, selectedSort)
            dispatch(fetchProducts(params))
        }
    }

    useEffect(() => {
        getProducts()
        console.log(minPrice, maxPrice, selectedSort)
    }, [currentPage, selectedSort, loadingCategory, category, priceFlag])

    useEffect(() => {
        if(searchQuery.length > 0) {
            changePage(1)
        }
    }, [searchQuery])

    useEffect(() => {
        if(router.query.page) {
            setCurrentPage(+router.query.page)
        }
    }, [router.query])

    const changePage = (page) => {
        router.push({
            query: {
                page: page
            }
        })
    }

    return (
        <MainLayout title={title}>
            <div className="cols">
                <div className="colleft">
                    <div className="shopbar">
                        <h3>Showing {(currentPage - 1) * 3 + 1}-{data.length + (currentPage - 1) * 3} of {total} results</h3>
                        <div className={`sortby ${isSortDropdownOpen ? 'open' : ''}`}>
                            <p data-toggle="dropdown"
                               onClick={() => setIsSortDropdownOpen(!isSortDropdownOpen)}
                            >
                                {selectedSort.name}
                                <i className="fa fa-caret-down"></i>
                            </p>
                            <ul className="dropdown-menu active">
                                {sorts.map(item =>
                                    <li
                                        key={item.name}
                                        onClick={() => {
                                            setSelectedSort(item)
                                        }}
                                    ><a>{item.name}</a></li>
                                )}
                            </ul>
                        </div>
                        <div className="clearfix"></div>
                    </div>
                    <div className="row">
                        {children(data, isLoading)}

                    </div>
                    {!isLoading &&
                    <Pagination
                        currentPage={currentPage}
                        pages={+pages}
                        onChange={changePage}
                    />
                    }
                </div>
                <div className="colright">
                    <SearchBar
                        onSubmit={(query) => {
                            setSearchQuery(query)
                        }}
                    />
                    <MiniCart/>
                    <div className="col-caption">
                        <span> FILTER BY PRICE</span>
                    </div>
                    <div className="box-filter">
                        <div className="slider-budget">
                            <NoUiSlider
                                onUpdate={(values) => {
                                    setMinPrice(Math.round(values[0] / 100 * 450))
                                    setMaxPrice(Math.round(values[1] / 100 * 450))
                                }}
                                onChange={(values) => {
                                    setPriceFlag((prev) => !prev)
                                }}
                            />

                        </div>
                        <p>Price: <span className="budget-min"> $<em>{minPrice}</em> </span> - <span
                            className="budget-max"> $<em>{maxPrice}</em> </span></p>
                    </div>
                    <ProductsSidebar/>
                </div>
                <div className="clearfix"/>
            </div>
        </MainLayout>
    );
};

export default ProductsLayout;