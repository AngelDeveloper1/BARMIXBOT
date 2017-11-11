import React from 'react'
import ProductCategoryRaw from './ProductCategoryRaw.js'
import ProductRaw from './ProductRaw.js'
export default class ProductTable extends React.Component{
  constructor(){
    super()
  }
  render(){
    return(
      <div>
          <ProductCategoryRaw/>
          <ProductRaw/>
          <ProductRaw/>
          <ProductRaw/>
          <ProductCategoryRaw/>
          <ProductRaw/>
          <ProductRaw/>
          <ProductRaw/>
      </div>
    )
  }
}
