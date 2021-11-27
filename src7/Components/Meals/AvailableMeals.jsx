import classes from './AvailableMeals.module.css';
import MealItem from './MealItem/MealItem';
import Card from '../UI/Card';
import { useEffect, useState } from 'react';

// const MealsList = [
//     {
//         id: "1",
//         name: "chicken biryani",
//         description: "this is yummy",
//         price: "5"
//     }, 
//     {
//         id: "2",
//         name: "mutton biryani",
//         description: "this is yummy",
//         price: "10"
//     }, 
//     {
//         id: "3",
//         name: "fish biryani",
//         description: "this is yummy",
//         price: "15"
//     },
//     {
//         id: "4",
//         name: "keema biryani",
//         description: "this is yummy",
//         price: "10"
//     }];

const AvailableMeals = () => {
    const [meals, setMeals] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [httperror, setHttpError] = useState();
    useEffect(() => {
        // useeffects callback function must be synchronus
        // to use async define it below way
        const fetchMeals = async () => {
            setIsLoading(true);
            const response = await fetch('https://dummy-api-f4510-default-rtdb.firebaseio.com/meals.json');
            if (!response.ok){
                throw new Error("something went wrong at fetch");
            }
            const responseData = await response.json();
            const loadedMeals = [];
            for (let key in responseData){
                loadedMeals.push({
                    id: key,
                    name: responseData[key].name,
                    description: responseData[key].description,
                    price: responseData[key].price,
                })
            }
            setMeals(loadedMeals);
            setIsLoading(false);
        }
        //  if we use try catch to handle error we have to await on fetchMeals 
        // return as it returns a promise 
        // we can handle a promise error by extending with catch similar to then without using await
        // as shown here
        fetchMeals().catch((error) => {
            setIsLoading(false);
            setHttpError(error.message);
        });
    },[])

    if (isLoading){
        return <section className={classes.mealsLoading}>
            <p>Loading...</p>
        </section>
    }

    if (httperror){
        return <section className={classes.mealserror}>
            <p>{httperror}</p>
        </section>
    }

    const mealsList = meals.map(meal => {
        return <MealItem id={meal.id} name={meal.name} description={meal.description} price={meal.price}/>
    });
    
    return (
        <section className={classes.meals}>
            <Card>
                <ul>{mealsList}</ul>
            </Card>
        </section>
    );
}

export default AvailableMeals;