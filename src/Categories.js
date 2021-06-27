import React from 'react'

function Categories({ filterItems, Categories }) {

    return (
        <div className="categories">
            {Categories.map((category, index) => {
                return <button className="btn-category" onClick={() => filterItems(category)} key={index}> {category} </button>
            })}
        </div>
    );
}

export default Categories;