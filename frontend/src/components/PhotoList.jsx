import React from "react";
import PhotoListItem from "./PhotoListItem";
import "../styles/PhotoList.scss";

const PhotoList = ({
  photos,
  createFavorite,
  deleteFavorite,
  onPhotoClick,
  favPhotos,
}) => {
  const renderedPhotos = photos.map((photo) => (
    <PhotoListItem
      key={photo.id}
      photoListData={photo}
      createFavorite={createFavorite}
      deleteFavorite={deleteFavorite}
      onPhotoClick={onPhotoClick}
      favPhotos={favPhotos}
    />
  ));

  return <ul className="photo-list">{renderedPhotos}</ul>;
};

export default PhotoList;
