import ReviewType from "types/Review/Review";
const defaultReviews: ReviewType[] = [
    {
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/86/Socorro.gutierrez.jpg/640px-Socorro.gutierrez.jpg", // Replace with the URL of the first generated image
        name: "John Doe",
        alt: "Portrait of John Doe, a happy patron at the bar",
        stars: 4.5,
        text:"This is the review that I am giving and I want to make is somewaht longer. I do not even care that this looks terrible. We will put this through a paragraph splitter.",
        reviewSource: "yelp"
    },
    {
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Profile_picture_Professor_Jo_Delahunty_QC.jpg/640px-Profile_picture_Professor_Jo_Delahunty_QC.jpg", // Replace with the URL of the second generated image
        name: "Jane Smith",
        alt: "Portrait of Jane Smith, enjoying her evening",
        stars: 4,
        text:"This is the review that I am giving and I want to make is somewaht longer. I do not even care that this looks terrible. We will put this through a paragraph splitter.",
        reviewSource: "google"
    },
    {
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Avi_Katz_%28cropped%29.jpg/640px-Avi_Katz_%28cropped%29.jpg", 
        name: "Mike Johnson",
        alt: "Portrait of Mike Johnson, a content man with a drink",
        stars: 3.5,
        text:"This is the review that I am giving and I want to make is somewaht longer. I do not even care that this looks terrible. We will put this through a paragraph splitter.",
        reviewSource: "yelp"
    },
    {
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bf/Emask_profile_picture.jpg/640px-Emask_profile_picture.jpg", 
        name: "Emily Davis",
        alt: "Portrait of Emily Davis, cheerfully laughing",
        stars: 5,
        text:"This is the review that I am giving and I want to make is somewaht longer. I do not even care that this looks terrible. We will put this through a paragraph splitter.",
        reviewSource: "google"
    },
    {
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/Abraham%28Avi%29_Loeb.jpg/640px-Abraham%28Avi%29_Loeb.jpg", // Replace with the URL of the fifth generated image
        name: "Alex Thompson",
        alt: "Portrait of Alex Thompson, in a thoughtful mood",
        stars: 4,
        text:"This is the review that I am giving and I want to make is somewaht longer. I do not even care that this looks terrible. We will put this through a paragraph splitter.",
        reviewSource: "yelp"
    },
    {
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/HE_profile_picture.jpg/640px-HE_profile_picture.jpg", // Replace with the URL of the sixth generated image
        name: "Sara Wilson",
        alt: "Portrait of Sara Wilson, jovially enjoying her night out",
        stars: 4.5,
        text:"This is the review that I am giving and I want to make is somewaht longer. I do not even care that this looks terrible. We will put this through a paragraph splitter.",
        reviewSource: "google"
    }
];
export default defaultReviews