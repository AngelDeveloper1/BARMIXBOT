import React from 'react'
import SearchBar from'./SearchBar.js'
import ProductTable from './ProductTable.js'
export default class FilterableProductTable extends React.Component{
  constructor(){
    super()
  }
  render(){
    return(
      <div>
        <ProductTable/>
        <SearchBar/>
      </div>
    )
  }
}
