"use strict";

export const HeroSection = ({data}) => {
    const headline = data.headline;
    const subHeadline = data.subHeadline;

    return(
        <>
            <div className="bg-blue-200 text-center">
                <div className="">
                    <h1 className="">{headline}</h1>
                </div>
                <div className="">
                    <h4>{subHeadline}</h4>
                </div>
            </div>
        </>
    );
}
