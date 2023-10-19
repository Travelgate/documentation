import React from "react";

const YoutubeVideo = ({ id }) => {
    return (
        <iframe style={{aspectRatio: "16 / 9", width: "100%"}}
                src={`https://www.youtube.com/embed/${id}?controls=0`}
                title="YouTube video player" frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen></iframe>
    )
}

export default YoutubeVideo;
