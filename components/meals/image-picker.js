"use client";

import { useRef, useState } from "react";
import classes from "./image-picker.module.css";
import Image from "next/image";

export default function ImagePicker({ label, name }) {
  const [image, setImage] = useState(null);
  const imageRef = useRef();
  function handlePickImage(event) {
    event.preventDefault();

    imageRef.current.click();
  }
    
    function handleImageChange(event) {
      const file = event.target.files[0];
        
        if (!file) {
            setImage(null);
            return;
        }

      const reader = new FileReader();
      reader.onload = () => {
        setImage(reader.result);
        // handleImage(image);
      };
      reader.readAsDataURL(file);
    }

  return (
    <div className={classes.picker}>
      <label htmlFor={name}>{label}</label>
          <div className={classes.controls}>
              <div className={classes.preview}>
                  {!image && <p>No image picked yet.</p>}
                  {image && <Image src={image} alt="Picked image" fill />}
              </div>
        <input
          className={classes.input}
          type="file"
          id={name}
          accept="image/png, image/jpeg"
          name={name}
                  ref={imageRef}
                  onChange={handleImageChange}
                  required
        />
        <button
          className={classes.button}
          type="submit"
          onClick={handlePickImage}
        >
          Pick an Image
        </button>
      </div>
    </div>
  );
}
