function Images(props) {
  return (
    <div className="images">
      {props.response?.map((images) => (
        <div key={images.id}>
          <img
            src={images.previewURL}
            alt={images.userImageURL}
            style={{ width: "100%", height: "auto" }}
          />
        </div>
      ))}
    </div>
  );
}
export default Images;
