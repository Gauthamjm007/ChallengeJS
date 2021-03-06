/*

In ["NORTH", "SOUTH", "EAST", "WEST"], the direction "NORTH" + "SOUTH" is going north and coming back right away. What a waste of time! Better to do nothing.

The path becomes ["EAST", "WEST"], now "EAST" and "WEST" annihilate each other, therefore, the final result is [] (nil in Clojure).

In ["NORTH", "EAST", "WEST", "SOUTH", "WEST", "WEST"], "NORTH" and "SOUTH" are not directly opposite but they become directly opposite after the reduction of "EAST" and "WEST" so the whole path is reducible to ["WEST", "WEST"].
Task

Write a function dirReduc which will take an array of strings and returns an array of strings with the needless directions removed (W<->E or S<->N side by side).

    The Haskell version takes a list of directions with data Direction = North | East | West | South.
    The Clojure version returns nil when the path is reduced to nothing.
    The Rust version takes a slice of enum Direction {NORTH, SOUTH, EAST, WEST}.

    */

function dirReduc(plan) {
  var opposite = {
    NORTH: "SOUTH",
    EAST: "WEST",
    SOUTH: "NORTH",
    WEST: "EAST"
  };
  return plan.reduce(function(dirs, dir) {
    if (dirs[dirs.length - 1] === opposite[dir]) dirs.pop();
    else dirs.push(dir);
    return dirs;
  }, []);
}

console.log(dirReduc(["NORTH", "SOUTH", "EAST", "WEST"]));
console.log(dirReduc(["NORTH", "EAST", "WEST", "SOUTH", "WEST", "WEST"]));
