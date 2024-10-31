"use client";

import { useFormStatus } from "react-dom";
import ImagePicker from "@/components/meals/image-picker";

import classes from "./page.module.css";
import { shareMeal } from "@/lib/actions";
import MealsFormSubmit from "@/components/meals/meals-form-submit";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function ShareMealPage() {
  const router = useRouter();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    title: '',
    summary: '',
    instructions: '',
    image: null,
  });

  const [errorMessage, setErrorMessage] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    // console.log(name, value);
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage(null);

    formData['image'] = e.target.image.files[0];

    // console.log(formData)

    const formDataToSubmit = new FormData();
  Object.keys(formData).forEach((key) => {
    formDataToSubmit.append(key, formData[key]);
  });

    const response = await shareMeal(formDataToSubmit);
    if (response.error) {
      setErrorMessage(response.message);
    } else {
      // console.log('Success!');
      router.push('/meals');
      }
  };


  return (
    <>
      <header className={classes.header}>
        <h1>
          Share your <span className={classes.highlight}>favorite meal</span>
        </h1>
        <p>Or any other meal you feel needs sharing!</p>
      </header>
      <main className={classes.main}>
        {errorMessage && <p className={classes.error}>{errorMessage}</p>}
        <form className={classes.form} onSubmit={handleSubmit} >
          <div className={classes.row}>
            <p>
              <label htmlFor="name">Your name</label>
              <input type="text" id="name" name="name" required value={formData.name} onChange={handleChange} />
            </p>
            <p>
              <label htmlFor="email">Your email</label>
              <input type="email" id="email" name="email" required onChange={handleChange} value={formData.email} />
            </p>
          </div>
          <p>
            <label htmlFor="title">Title</label>
            <input type="text" id="title" name="title" required onChange={handleChange} value={formData.title} />
          </p>
          <p>
            <label htmlFor="summary">Short Summary</label>
            <input type="text" id="summary" name="summary" required onChange={handleChange} value={formData.summary} />
          </p>
          <p>
            <label htmlFor="instructions">Instructions</label>
            <textarea
              id="instructions"
              name="instructions"
              rows="10"
              required onChange={handleChange} value={formData.instructions} ></textarea>
          </p>
          <ImagePicker label="Select Recipe Image" name="image" />
          <p className={classes.actions}>
            <MealsFormSubmit />
          </p>
        </form>
      </main>
    </>
  );
}
