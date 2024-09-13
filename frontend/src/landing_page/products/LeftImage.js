import React from "react";
function LeftImage( {imageURL,productName,productDescription,tryDemo,learnMore,googlePlay,appStore} ) {
    return ( 
        <div className="container p-3">
            <div className="row">
                <div className="col-6 p-5">
                    <img src={imageURL}></img>
                </div>
                <div className="col-6 p-5" >
                    <h1 className="px-4">{productName}</h1>
                    <p className="py-4 px-4" >{productDescription}</p>
                     
                    <div>
                        <a href={tryDemo} className="px-4" style={{ textDecoration: "none" }} >{tryDemo}  <i class="fa-solid fa-arrow-right-long"></i></a>
                        <a href={learnMore} className="px-5" style={{ textDecoration: "none" }} >{learnMore}  <i class="fa-solid fa-arrow-right-long"></i></a>
                    </div>
                    <div>
                        <a href={googlePlay} ><img className="p-4 " src="assets\googlePlayBadge.svg"/></a>
                        <a href={appStore} ><img className="p-3" src="assets\appstoreBadge.svg"/></a>
                    </div>
                </div>
            </div>
        </div>
     );
}
export default LeftImage;