const express = require('express');
const app = express();
const port = 3000;

app.use(express.json()); // Parse JSON requests

let musics = [
    {
        id: 1,
        title: "Amin Paling Serius",
        artist: "Nadin Amizah & Sal Priadi",
    },
    {
        id: 2,
        title: "Sorai",
        artist: "Nadin Amizah",
    },
    {
        id: 3,
        title: "Bertaut",
        artist: "Nadin Amizah",
    }
];

// Get all music
app.get('/musics', (req, res) => {
    res.setHeader("Content-Type", "application/json");
    res.statusCode = 200;
    res.send(JSON.stringify(musics));
});

// Get music by id
app.get('/musics/:id', (req, res) => {
    const id = req.params.id;
    const music = musics.find(music => music.id == id);
    if (music) {
        res.json(music);
    } else {
        res.status(404).json({ message: 'Music not found' });
    }
});

// Create music
app.post('/musics', (req, res) => {
    const music = req.body;
    music.id = musics.length + 1;
    musics.push(music);
    res.status(201).json({
        info: "success",
        message: "Data berhasil ditambahkan",
        data: music,
    });
});

// Update music
app.put('/musics/:id', (req, res) => {
    const id = req.params.id;
    const music = req.body;
    const index = musics.findIndex(music => music.id == id);
    if (index !== -1) {
        musics[index] = { ...music, id: parseInt(id) };
        res.json({
            info: "success",
            message: "Data berhasil diubah",
            data: musics[index],
        });
    } else {
        res.status(404).json({ message: 'Music not found' });
    }
});

// Delete music
app.delete('/musics/:id', (req, res) => {
    const id = req.params.id;
    const index = musics.findIndex(music => music.id == id);
    if (index !== -1) {
        musics.splice(index, 1);
        res.json({
            info: "success",
            message: "Data berhasil dihapus",
        });
    } else {
        res.status(404).json({ message: 'Music not found' });
    }
});

const cors = require('cors');

app.use(cors({
  origin: "*",
  methods: "*"
}));

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
