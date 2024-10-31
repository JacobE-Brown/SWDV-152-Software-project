LevelConfig.json File
    The LevelsConfig.json is the configuration file that will contain the levels of our game. 

    It works by making an array of level object. We can access any level by asking to retreive the level by its index ( level minus one). 

    Each level-object will contain this information:

    Level name.
    Win condition (Some sort of test using the framework Jest or something equivilent).
    Level grid map (Which will be a 2d array --an array in an array -- which will tell each cell of our game board what it should be)

PlayerData.json

    The PlayerData.json will be a file that we write to that contains all the solutions that the player has done and saves it to the local storage. 

    It will be an array of level objects that correlate to the LevelConfig.json, but will also contain a "playerSolution" variable which stores the player solution.