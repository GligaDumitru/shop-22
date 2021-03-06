import React from 'react'
import './preview-collection.style.scss'
import CollectionItem from './../collection-item/collection-item.component';
export default function PreviewCollection({ title, items }) {
    return (
        <div>
            <div className="preview-collection">
                <h1 className="title">
                    {
                        title.toUpperCase()
                    }
                </h1>
                <div className="preview">
                    {
                        items.filter((item, idx) => idx < 4).map(({ ...item }) => {
                            return (
                                <CollectionItem key={item.id}  {...item} />
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}
