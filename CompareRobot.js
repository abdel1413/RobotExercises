// funtion to count the number of steps
function countSteps(state, robot, memmory) {
  for (let step = 0; ; step++) {
    if (state.parcels.length == 0) return state;
    let action = robot(state, memmory);
    state = state.move(action.direction);
    memmory = action.memmory;
  }
}

function CompareRobot(robot1, memmory1, robot2, memory2) {
  let total1 = 0,
    total2 = 0;
  for (let i = 0; i < 100; i++) {
    //generating new state
    let state = VillageState.random();
    //counting number of steps by calling the countStep function
    total1 += countSteps(state, robot1, memmory1);
    total2 += countSteps(state, robot2, memory2);
  }
  console.log(`the robot 1 needs ${total1 / 100} steps per task`);
  console.log(`the robot2 needs ${total2 / 100} steps per task`);
}

CompareRobot(RouteRobot, [], goalOrientedRobot, []);
