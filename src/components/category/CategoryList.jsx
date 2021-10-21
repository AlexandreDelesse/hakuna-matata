import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'

import './categoryList.css'

export default function CategoryList(props) {
  const { categories, onCategoriesSelectedChanges } = props

  const [categoryList, setCategoryList] = useState([])

  const handleOnCategoryClick = (e, category) => {
    if (categoryList.includes(category)) {
      setCategoryList(
        categoryList.filter((oldCategory) => oldCategory !== category),
      )
    } else {
      setCategoryList([...categoryList, category])
    }

  }

  useEffect(()=>{
    onCategoriesSelectedChanges(categoryList)
  }, [categoryList])


  return (
    <div className="w-100 align-items-center d-flex categoryListContainer">
      {categories.map((category) => (
        <div
          className={`rounded p-2 m-2 categoryItem ${
            categoryList.includes(category) && 'categoryItemClicked'
          }`}
          key={category}
          onClick={(e) => handleOnCategoryClick(e, category)}
        >
          {category}
        </div>
      ))}
    </div>
  )
}

CategoryList.propsTypes = {
  categories: PropTypes.arrayOf(String).isRequired,
  onCategoriesSelectedChanges: PropTypes.func,
}

CategoryList.defaultProps = {
  onCategoriesSelectedChanges: () => {},
}
