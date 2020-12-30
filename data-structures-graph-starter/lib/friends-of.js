/**
 * In this file, you will implement the friendsOf function that will calculate
 * the group of friends that a person has a certain distance from them.
 *
 * @param {Object} adjacencyList - The adjacency list that describes the graph,
 * never null or undefined
 * @param {string} name - The name of the person from where you will start your
 * search, never null or undefined
 * @param {number} distance - The distance away that you will traverse to find
 * the person's friends-of list, always a value greater than or equal to 1
 *
 * You will also need to implement a friendsOfRecursion function that will
 * recurse through your friends graph. friendsOf will call this.
 *
 * @param {string} name - the name of the person from where you will start
 * your search, never null or undefined.
 * @param {Object} adjacencyList - The adjacency list that describes the graph,
 * never null or undefined
 * @param {Set} visited - A list of all the graph nodes we have visited
 * @param {number} maxDistance - the maximum distance you want to recurse into
 * the graph, for example 1 should find immediate friends and 3 should find
 * immediate friends, friends of immediate friends, and friends of those friends
 * @param {number} currentDistance - the current distance we are at during our
 * recursion
 *
 * Hint: You can convert a Set into an Array using the `Array.from()` method.
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/from
 *
 * Hint: refer to the documentation of Set on MDN here:
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set
 */

function friendsOfRecursion(name, adjacencyList, visited, maxDistance, currentDistance) {
    if (maxDistance < currentDistance) return;
    visited.add(name)
    adjacencyList[name].forEach((friend) => friendsOfRecursion(friend, adjacencyList, visited, maxDistance, currentDistance + 1))
        // check if the current distance is greater than max distance, returns early
        // adds target(name) to visited list
        // loop through that persons friends and add them to visited 

}

function friendsOf(adjacencyList, name, distance) {
    if (!adjacencyList[name]) return undefined

    // if (adjacencyList[name] && distance < 20) return []
    // if (adjacencyList[name] && distance < 40) return []
    // if (adjacencyList[name] && distance < 60) return []
    // if (adjacencyList[name] && distance < 80) return []
    // if (adjacencyList[name] && distance < 100) return []

    // if (adjacencyList[name].includes(name) && distance > 100) return []

    // for (let friend in adjacencyList) {
    //     if (adjacencyList[name] === friend && adjacencyList[friend] === name) {
    //         return friend
    //     }
    // }

    // let friends = adjacencyList[name]

    let visited = new Set()

    friendsOfRecursion(name, adjacencyList, visited, distance, 0)
    visited.delete(name)

    return Array.from(visited)
        //return the visited list via Array.from()
}

/******************************************************************************
 * Do not change code beneath this line.
 */
try {
    exports.friendsOf = friendsOf;
} catch (e) {
    exports.friendsOf = () => { throw new Error('Cannot export friendsOf.') };
}