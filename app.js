/**
 * nested element
 * <div id = "parent">
 *     <div id="child">
 *        <h1>I'm h1 tag</h1>
 *        <h1> I'm h2 tag <h2>
 *     </div>
 *     <div id="child2">
 *          <h1>I'm h1 tag</h1>
 *          <h2>I'm h2 tag</h1>
 *     </div>
 * </div>
 * ReactELement(oject) => gets converted into HTML behind the scene (browser understands)
 */

 //creating html element using core react
const parent = React.createElement("div",
{
    id:"parent"
}, [
React.createElement("div",
 {id: "child"}, 
 [React.createElement("h1", {}, "I am an h1 tag"), React.createElement("h2", {}, "I am an h2 tag")]),
 React.createElement("div",
 {id: "child2"}, 
 [React.createElement("h1", {}, "I am an h1 tag"), React.createElement("h2", {}, "I am an h2 tag")])
]);

//To overcome this tedious syntax, we have the concept of JSX
//Modern React Development

console.log(parent) //object

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent) 


// const heading = React.createElement("h1",
//  {id: "heading"}, 
//  "Hello World from React!");

// const root = ReactDOM.createRoot(document.getElementById("root"));
// console.log(heading)  //gives a react element/object

// // rendering heading inside root
// // Now react is putting heading inside root 
// root.render(heading);
