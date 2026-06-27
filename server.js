require("dotenv").config();

const express = require("express");
const axios = require("axios");
const path = require("path");

const app = express();

app.use(express.static("public"));

app.get("/search-song", async (req, res) => {

    try{

        const query = req.query.q;

        const url =
`https://www.googleapis.com/youtube/v3/search?part=snippet&type=video&videoCategoryId=10&maxResults=1&q=${encodeURIComponent(query)}&key=${process.env.YOUTUBE_API_KEY}`;

        const response = await axios.get(url);

        if(response.data.items.length===0){

            return res.json({
                success:false
            });

        }

        const video=response.data.items[0];

        res.json({

            success:true,

            videoId:video.id.videoId,

            title:video.snippet.title,

            artist:video.snippet.channelTitle,

            thumbnail:video.snippet.thumbnails.high.url

        });

    }catch(err){

        console.log(err.response?.data || err.message);

        res.status(500).json({
            success:false
        });

    }

});
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {

    console.log(`Server Running on Port ${PORT}`);

});

app.listen(process.env.PORT,()=>{

    console.log("Server Running");

});