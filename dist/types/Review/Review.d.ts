type ReviewType = {
    name: string;
    img: string;
    alt?: string;
    stars: FiveStarsType;
    text: string;
    reviewSource: ReviewSourceType;
};
export default ReviewType;
