
import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import { useParams } from 'react-router-dom'

const View = () => {
    const {id} = useParams()
    // console.log(id);
    // const allRecipesData = sessionStorage.getItem("allRecipes");
    //     console.log(allRecipesData);
    const [recipe,setRecipe] = useState({})
    useEffect(() => {
        const allRecipesData = sessionStorage.getItem("allRecipes");
        if (allRecipesData) {
            const allRecipes = JSON.parse(allRecipesData);
            const foundRecipe = allRecipes.find(recipe => recipe.id == id);
            setRecipe(foundRecipe || {});
        }
    }, [id])

      console.log(recipe.name);
      

    
  return (
    <>
        <Header/>
        <div className='d-flex flex-column align-items-center justify-content-center w-100 px-5'>
            <h1 className='m-5 fw-bolder text-warning'>{recipe?.name}</h1>
            <div className="row w-100 px-5">
                <div className="col-lg-6">
                    <img width={'100%'} className='img-fluid rounded-5' src={recipe?.image} alt="" />
                </div>
                <div className="col-lg-1"></div>
                <div className="col-lg-5 mt-2 d-flex flex-column align-items-md-start align-items-center justify-content-start">
                    
                    <div className='rounded-5 border border-danger border-5 border-opacity-25 p-3 mb-1 d-inline-block'>
                        <p className='mb-3'> <span className='fw-bold'>Preparation Time :</span> {recipe?.prepTimeMinutes} min</p>
                        <p className=''> <span className='fw-bold'>Cooking Time :</span> {recipe?.cookTimeMinutes} min</p>
                    </div>
                    <h4 className='mb-3'><span className='fw-bold fs-3'>Cuisine:</span> {recipe?.cuisine}</h4>
                    <h4 className='fw-bold'>Ingredients :</h4>
                    <ul className='mb-3'>
                        {
                            recipe?.ingredients?.map((item,index)=>(
                                <li key={index}>{item}</li>
                            ))  
                            || <li>No ingredients available!!!</li>
                        }
                    </ul>
                    <h4 className='fw-bold'>Instructions :</h4>
                    <ul>
                        {
                            recipe?.instructions?.map((item,index)=>(
                                <li key={index}>{item}</li>
                            ))  
                            || <li>No instructions available!!!</li>
                        }
                    </ul>
                </div>
            </div>
        </div>
    </>
  )
}

export default View