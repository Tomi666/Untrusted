// ***** Level 01 - cellBlockA *****
    // Either change value of x or y in the for cycles so map border is moved
    // y was originally 3 in this one
        // for (y = 5; y <= map.getHeight() - 10; y++) {
        //     map.placeObject(5, y, 'block');
        //     map.placeObject(map.getWidth() - 5, y, 'block');
        // }

// ***** Level 02 - theLongWayOut - part 1 *****
    // Placed another exit 2 blocks away from the original exit
    // Original exit was on getWidth()-5 and getheight()-4
        // map.placeObject(map.getWidth()-7, map.getHeight()-4, 'exit');

// ***** Level 02 - theLongWayOut - part 2 *****

// ***** Level 03 - validationEngaged *****
    // Changed the x parameter in placeObject in the first for loop
    // Originally x was 5, now it's 3
        // map.placeObject(3, y, 'block');

// ***** Level 04 - multiplicity *****
    // Placed another exit 10 rows below the original
    // Original was at get.Width() -5, 5
        // map.placeObject(map.getWidth() -5, 15, 'exit');

// ***** Level 05 - minesweeper *****
    // Changed color of mines to black so they are distinct from empty blocks
        // map.setSquareColor(x, y, '#000');

// ***** Level 06 - drones101 *****
    // Placed 3 more blocks on the map and the drone got stuck in it
        //     map.placeObject(map.getWidth()-8, 11, 'block');
        //     map.placeObject(map.getWidth()-9, 12, 'block');
        //     map.placeObject(map.getWidth()-8, 13, 'block');

// ***** Level 07 - colors *****
    // Made a random number generator, each time I use phone it picks a number
    // If that number is 1 or 2 or 3 I become red, if 4 or 5 or 6 I become green, and if 7 or 8 or 9 I become yellow
        //         randomInt = Math.floor(Math.random() * 10);
        //         if (randomInt === 1 || randomInt === 2 || randomInt === 3) {
        //         	player.setColor('#f00');
        //         } else if (randomInt === 4 || randomInt === 5 || randomInt === 6) {
        //         	player.setColor('#0f0');
        //         } else if (randomInt === 7 || randomInt === 8 || randomInt === 9) {
        //         player.setColor('#ff0');
        //         }

// ***** Level 08 - intoTheWoods *****
    // Placed generate forest in setPhoneCallback, so when I use phone,
    // the forest changes but the player position doesn't.
    // So I just keep change forest and walk until I get to exit
        // map.getPlayer().setPhoneCallback(functionList["generateForest"]);

// ***** Level 09 - fordingTheRiver *****
    // Made a function for phone use, which changes the direction of boat to up
        // 	map.getPlayer().setPhoneCallback(function () {
        //     	raftDirection = 'up';
        //  })

// ***** Level 10 - ambush - part 1 *****

// ***** Level 10 - ambush - part 2 *****

// ***** Level 10 - ambush - part 3 *****

// ***** Level 11 - robot *****

// ***** Level 12 - robotNav *****

// ***** Level 13 - robotMaze *****

// ***** Level 14 - crispsContest *****

// ***** Level 15 - exceptionalCrossing *****

// ***** Level 16 - lasers - part 1 *****

// ***** Level 16 - lasers - part 2 *****

// ***** Level 17 - pointers *****

// ***** Level 18 - superDrEvalBros *****

// ***** Level 19 - documentObjectMadness *****

// ***** Level 20 - bossFight *****

// ***** Level 21 - endOfTheLine *****
