function getSongListPromise() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const songList = [
          {
            title: "song title 1",
            artists: [{ name: "artist name 1" }],
            duration: 200
          },
          {
            title: "song title 2",
            artists: [{ name: "artist name 2" }],
            duration: 300
          }
        ];
  
        // Introduce a 20% chance for the promise to fail
        const randomNumber = Math.random();
        if (randomNumber <= 0.2) {
          reject("Error: Unable to fetch song list");
        } else {
          resolve(songList);
        }
      }, 2000);
    });
  }
  
  function printSongListPromise() {
    getSongListPromise()
      .then((songs) => {
        console.log("Song list:");
        songs.forEach((song) => {
          console.log(`Title: ${song.title}`);
          console.log(`Artist: ${song.artists[0].name}`);
          console.log(`Duration: ${song.duration}`);
          console.log("--------------------");
        });
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }
  
  printSongListPromise();

  
  async function getSongListAsyncAwait() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const songList = [
          {
            title: "song title 1",
            artists: [{ name: "artist name 1" }],
            duration: 200
          },
          {
            title: "song title 2",
            artists: [{ name: "artist name 2" }],
            duration: 300
          }
        ];
  
        // Introduce a 20% chance for the promise to fail
        const randomNumber = Math.random();
        if (randomNumber <= 0.2) {
          reject("Error: Unable to fetch song list");
        } else {
          resolve(songList);
        }
      }, 2000);
    });
  }
  
  async function printSongListAsyncAwait() {
    try {
      const songs = await getSongListAsyncAwait();
      console.log("Song list:");
      songs.forEach((song) => {
        console.log(`Title: ${song.title}`);
        console.log(`Artist: ${song.artists[0].name}`);
        console.log(`Duration: ${song.duration}`);
        console.log("--------------------");
      });
    } catch (error) {
      console.error("Error:", error);
    }
  }
  
  printSongListAsyncAwait();
  