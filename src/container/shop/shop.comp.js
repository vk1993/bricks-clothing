import React from 'react'
import SHOP_DATA from './shop.data'
import CollectionPreview from '../../component/collection-preview/collection-preview.comp';


export default class Shop extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            collections: SHOP_DATA
        }
    }
    render(){
        const {collections} = this.state;
        return <div className="shopPage">
            {
                collections.map(({id, ...otherProps}) => (
                    <CollectionPreview key={id} {...otherProps}> </CollectionPreview>
                ))
            }
        </div>
    }
}