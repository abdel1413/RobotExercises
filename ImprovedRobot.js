/**
 *
 * @param {*} param0
 * @param {*} route
 * @returns
 * this function is the improvement of goalOrientedRobot
 * which takes a single route every time.
 * this improvedRobot collects all the possible routes
 * for pick up and then shooses the short ones
 */
function ImprovedRobot({ place, parcels }, route) {
  //check rout length
  if (route.length == 0) {
    //describe a route for every parcel
    let routes = parcels.map((parcel) => {
      if (this.place != place) {
        return {
          route: findRoute(roadGraph, place, parcel.place),
          pickUp: true,
        };
      } else {
        return {
          route: findRoute(roadGraph, place, parcel.address),
          pickUp: false,
        };
      }
    });

    //create a function to determine the precedence a route
    //gets when choosing.
    // The route counts negatively and the route that
    //pick up a parel gets a small bonus
    function score(route, pickUp) {
      return (pickUp ? 0.5 : 0) - route.length;
    }
    route = routes.reduce((a, b) => (score(a) > score(b) ? a : b)).route;
  }
  return { direction: route[0], memmory: route.slice(1) };
}
