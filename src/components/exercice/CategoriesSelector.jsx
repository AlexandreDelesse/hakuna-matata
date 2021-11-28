import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'

function CategoriesSelector(props) {
  const { onCategoriesChanged, className } = props
  const [categories, setCategories] = useState([])
  const [newCategory, setNewCategory] = useState('')

  const handleOnAddCategory = () => {
    setCategories([...categories, newCategory])
    setNewCategory('')
  }

  useEffect(() => {
    onCategoriesChanged(categories)
  }, [categories])

  const handleOnChangeNewCategory = (e) => {
    setNewCategory(e.target.value)
  }

  const handleOnChangeNewCategoryKeyPressed = (key) => {
    if (key.code === 'Enter') handleOnAddCategory()
  }

  return (
    <div className={className}>
      <div className="d-flex">
        <input
          type="text"
          className="hm-input w-100"
          name="label"
          value={newCategory}
          onChange={handleOnChangeNewCategory}
          placeholder="Category"
          onKeyPress={handleOnChangeNewCategoryKeyPressed}
        />
        <button className="btn btn-warning ms-2" onClick={handleOnAddCategory}>
          add
        </button>
      </div>
      <div>
        {categories.map((category) => (
          <div key={category}>{category}</div>
        ))}
      </div>
    </div>
  )
}

CategoriesSelector.propTypes = {
  onCategoriesChanged: PropTypes.func,
  className: PropTypes.string,
}

CategoriesSelector.defaultProps = {
  onCategoriesChanged: () => {},
  className: '',
}

export default CategoriesSelector
