import React, { useEffect } from "react";
import PhotoList from "components/PhotoList";
import "../styles/PhotoDetailsModal.scss";
import closeSymbol from "../assets/closeSymbol.svg";

const PhotoDetailsModal = ({
  onClose,
  photos,
  createFavorite,
  deleteFavorite,
  favPhotos,
}) => {

  // Perform side effect in modal component
  // Directly update the DOM with new styling
  useEffect(() => {
    const mainImage = document.querySelector(
      ".photo-details-modal  #single-image"
    );

    mainImage.classList.add("photo-details-modal__image");
    mainImage.classList.remove("photo-list__image");
    mainImage.setAttribute("src", `${photos[0].urls.full}`);
    
    //remove border from image container and and remove margin-right
    document
      .querySelector(".photo-details-modal ul li")
      .setAttribute("style", "border: none;margin-right:0");
      
  }, [photos]);
 
  // create an array of similar photos
  const similarPhotos = Object.values(photos[0].similar_photos);

  return (
    <div className="photo-details-modal">
      <button onClick={onClose} className="photo-details-modal__close-button">
        <img src={closeSymbol} alt="close symbol" />
      </button>

      <PhotoList
        photos={photos}
        createFavorite={createFavorite}
        deleteFavorite={deleteFavorite}
        favPhotos={favPhotos}
        onPhotoClick={() => null}
      />

      <div className="photo-details-modal__images">
        <div className="photo-details-modal__header">Similar Photos</div>
        <PhotoList
          photos={similarPhotos}
          createFavorite={createFavorite}
          deleteFavorite={deleteFavorite}
          favPhotos={favPhotos}
          onPhotoClick={() => null}
        />
      </div>
    </div>
  );
};

export default PhotoDetailsModal;
