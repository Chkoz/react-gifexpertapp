import React from 'react'
// import { getGifs } from '../helpers/getGifs';
import { GifGridItem } from './GifGridItem';
import { useFetchGifs } from '../hooks/useFetchGifs';

export const GifGrid = ({category}) => {
    const {data,loading}=useFetchGifs(category);
    // const [images, setimages] = useState([]);

    // useEffect(() => {
    //     getGifs(category)
    //     .then(setimages)
    // }, [category])
     
    return (
        <>
        <h3>{category}</h3>

        {loading && <p>Cargando...</p>}

        <div className="card-grid">
            
                {
                    data.map(img=>(
                        <GifGridItem key={img.id} {...img} />
                    ))
                }
        </div>
        </>
    )
}
