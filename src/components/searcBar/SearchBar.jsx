import React, { useState } from 'react'
import PropTypes from 'prop-types'

function SearchBar(props) {
  const { items, onItemsReturns, keyToSearch } = props

  const [inputValue, setInputValue] = useState('')

  const handleInputChange = (e) => {
    const filter = e.target.value
    const itemsFiltered = items.filter((el) => el[keyToSearch].includes(filter))

    setInputValue(filter)
    onItemsReturns(itemsFiltered)
  }

  return (
    <div>
      <input type="text" placeholder='Rechercher' value={inputValue} onChange={handleInputChange} />
    </div>
  )
}

SearchBar.propTypes = {
  items: PropTypes.arrayOf(Object).isRequired,
  onItemsReturns: PropTypes.func,
  keyToSearch: PropTypes.string.isRequired,
}

SearchBar.defaultProps = {
  onItemsReturns: () => {},
}

export default SearchBar
