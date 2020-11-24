import React from "react";


const Home = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 col-sm-3">
          <h1>About Me</h1>
          <hr/>
            <img className="img" src="IMG_0045.jpeg" alt="Photo" className="img-thumbnail"/>
                <p>Elizabeth is a travel professional with over 10 years of sales and customer service experience. She has decided to make the move from the corporate travel industry to a coding and web development program due to the Covid-19 pandemic.</p>
                <p>She graduated from Western Michigan University in 2014 with a BA in Travel and Tourism Marketing. She have been living in Lakeview, Chicago for the past 5 years. She has a two year old Golden Retriever named Gretchen that she spends the majority of her free time with.</p>
                 <p>Elizabeth is originally from Grand Rapids, MI. She has also lived in Kalamazoo, MI and Dublin, Ireland for a short period of time. She is excited to learn coding and development to expand her skill set.</p>
        </div>
      </div>
        <div className="col-md-6 col-sm-3">
        </div>
    </div>
  );
};

export default Home;
