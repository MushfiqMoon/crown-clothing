import React, { useEffect, useState } from 'react'
import CatagortItem from '../catagort-item/CatagortItem'

import "./Diroctory.scss"

const Diroctory = () => {

    const [categories, setCategories] = useState([])

    useEffect(() => {
        fetch(`categories.json`)
            .then(res => res.json())
            .then(data => setCategories(data))

    }, [])


    return (
        <div className="directory-container">
            {
                categories.map((cat) =>
                    <CatagortItem key={cat.id} cat={cat} />
                )

            }

        </div>
    )
}

export default Diroctory