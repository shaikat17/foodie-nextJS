'use server';

export async function shareMeal(formData) {

    const meal = {
      title: formData.get('title'),
      summary: formData.get('summary'),
      instructions: formData.get('instructions'),
      image: formData.get('image'),
      creator: formData.get('name'),
      creator_email: formData.get('email'),
    };

    // try {
    //   await fetch('/api/meals', {
    //     method: 'POST',
    //     headers: {
    //       'Content-Type': 'application/json',
    //     },
    //     body: JSON.stringify(meal),
    //   });
    // } catch (error) {
    //   console.error(error);
    // }
    console.log(meal)
  }