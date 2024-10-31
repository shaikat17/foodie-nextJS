'use client';

import { useEffect, useState } from 'react';
import MealItem from './meal-item';
import classes from './meals-grid.module.css';
import { getMeals } from '@/lib/meals';
import Loading from '@/app/meals/loading-out';

export default function MealsGrid() {
    const [meals, setMeals] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    
    useEffect(() => {
        const fetchMeals = async () => {
            setIsLoading(true);
            const response = await getMeals();
            setMeals(response);
            setIsLoading(false); // Set to false only after data is fetched
        };

        fetchMeals();
    }, []); // Empty dependency array to run only once on mount
    
    if (isLoading) {
        return <Loading />;
    }
    
    return (
        <ul className={classes.meals}>
           {meals.map((meal) => (
               <li key={meal.id}>
                   <MealItem {...meal} />
               </li>
           ))}
        </ul>
    );
}
