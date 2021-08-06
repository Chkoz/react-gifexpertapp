import React,{useState} from 'react'
import AddCategory from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = () => {
    //const categories=['On Push','Samurai X','Dragon Ball'];
    const [categories, setCategories] = useState(['One Punch']);
    
    return (
        <>
            <h2>Gif Expert App</h2>
            <AddCategory setCategories={setCategories} categories={categories}/>
           <hr/> 
           {/* <button onClick={handleAdd}>Agregar</button> */}
           <ol>
               {
                   categories.map(category =>(
                    <GifGrid key={category} category={category}/>
                   ))
               }
           </ol>
           
        </>
    )
}
