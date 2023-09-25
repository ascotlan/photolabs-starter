import React from "react";
import PhotoList from "../components/PhotoList";
import "../styles/HomeRoute.scss";

const HomeRoute = ({
  photos,
  onPhotoClick,
  deleteFavorite,
  createFavorite,
  favPhotos,
}) => {
  return (
    <div className="home-route">
      <PhotoList
        photos={photos}
        createFavorite={createFavorite}
        deleteFavorite={deleteFavorite}
        onPhotoClick={onPhotoClick}
        favPhotos={favPhotos}
      />
    </div>
  );
};

export default HomeRoute;
