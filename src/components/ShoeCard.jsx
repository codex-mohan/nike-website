const ShoeCard = ({ imgUrl, changeBigShoeImg, bigShoeImg }) => {
  const handleClick = () => {
    if (bigShoeImg !== imgUrl.bigShoe){
      changeBigShoeImg(imgUrl.bigShoe)
    }
  }
  
  return (
    <div
      className={`border-2 rounded-xl ${
        bigShoeImg === imgUrl ? "border-coral-red" : "border-transparent"
      } cursor-pointer max-sm:flex-1`}
      onClick={handleClick}
    >
      <div>
        <img
          src={imgUrl}
          alt="Shoe Collection"
        />
      </div>
    </div>
  );
};

export default ShoeCard;
