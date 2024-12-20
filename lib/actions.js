'use server';

import { saveMeal } from "./meals";

function isInvalidText(text) {
  return !text || text.trim() === "";
}
export async function shareMeal(formData) {
  const meal = {
    title: formData.get('title'),
    summary: formData.get('summary'),
    instructions: formData.get('instructions'),
    image: formData.get('image'),
    creator: formData.get('name'),
    creator_email: formData.get('email'),
  };

  // console.log(meal);

  if (
    isInvalidText(meal.title) ||
    isInvalidText(meal.summary) ||
    isInvalidText(meal.instructions) ||
    isInvalidText(meal.creator) ||
    isInvalidText(meal.creator_email) ||
    !meal.creator_email.includes('@') ||
    !meal.image || 
    meal.image.size === 0
  ) { 
    return { error: true, message: 'Invalid Input. Please check all fields and try again.' };
  }

  // Call to save the meal
  await saveMeal(meal);

  return { success: true };
}
