document.addEventListener("DOMContentLoaded", function() {
    const maze = document.getElementById("maze");
    const player = document.createElement("div");
    const key = document.createElement("div");
    const house = document.createElement("div");
    let difficultyLevel = "easy";
  
    function createMaze() {
      maze.innerHTML = "";
  
      const walls = [
        { top: 0, left: 0 },
        { top: 40, left: 0 },
        { top: 80, left: 0 },
        // Add more walls here based on the difficulty level
      ];
  
      walls.forEach(wall => {
        const wallElement = document.createElement("div");
        wallElement.className = "wall";
        wallElement.style.top = wall.top + "px";
        wallElement.style.left = wall.left + "px";
        maze.appendChild(wallElement);
      });
  
      maze.appendChild(player);
      maze.appendChild(key);
      maze.appendChild(house);
    }
  
    function movePlayer(event) {
      const key = event.keyCode;
  
      // Move up
      if (key === 38) {
        player.style.top = parseInt(player.style.top) - 40 + "px";
      }
      // Move down
      else if (key === 40) {
        player.style.top = parseInt(player.style.top) + 40 + "px";
      }
      // Move left
      else if (key === 37) {
        player.style.left = parseInt(player.style.left) - 40 + "px";
      }
      // Move right
      else if (key === 39) {
        player.style.left = parseInt(player.style.left) + 40 + "px";
      }
  
      checkCollision();
    }
  
    function checkCollision() {
      if (
        player.style.top === key.style.top &&
        player.style.left === key.style.left
      ) {
        console.log("You found the key!");
        key.style.display = "none";
      }
  
      if (
        player.style.top === house.style.top &&
        player.style.left === house.style.left
      ) {
        console.log("Congratulations! You reached the house!");
      }
    }
  
    function setDifficulty(level) {
      difficultyLevel = level;
      createMaze();
    }
  
    document.addEventListener("keydown", movePlayer);
  
    // Game initialization
    setDifficulty("easy");
  });
  