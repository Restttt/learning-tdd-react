import React from "react";
import { create } from "react-test-renderer";

function Button() {
  return <button>Nothing to do for now</button>;
}

describe("Button component", () => {
  test("Matches the snapshot", () => {
    const button = create(<Button />);
    expect(button.toJSON()).toMatchSnapshot();
  });
});


/*
-------------------------------------------------------------------
*/



// class Button2 extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = { text: "" };
//     this.handleClick = this.handleClick.bind(this);
//   }

//   handleClick() {
//     this.setState(() => {
//       return { text: "PROCEED TO CHECKOUT" };
//     });
//   }

//   render() {
//     return (
//       <button onClick={this.handleClick}>
//         {this.state.text || this.props.text}
//       </button>
//     );
//   }
// }

// describe("Button component", () => {
//   test("it shows the expected text when clicked (testing the wrong way!)", () => {
//     const component = create(<Button2 text="SUBSCRIBE TO BASIC" />);
//     const instance = component.getInstance();
//     expect(instance.state.text).toBe("");
//     instance.handleClick();
//     expect(instance.state.text).toBe("PROCEED TO CHECKOUT");
//   });
// });




/*
-------------------------------------------------------------------
*/





// class Button3 extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = { text: "" };
//     this.handleClick = this.handleClick.bind(this);
//   }

//   handleClick() {
//     this.setState(() => {
//       return { text: "PROCEED TO CHECKOUT" };
//     });
//   }

//   render() {
//     return (
//       <button onClick={this.handleClick}>
//         {this.state.text || this.props.text}
//       </button>
//     );
//   }
// }


// describe("Button component", () => {
//   test("it shows the expected text when clicked (testing the wrong way!)", () => {
//     const component = create(<Button3 text="SUBSCRIBE TO BASIC" />);
//     const instance = component.root;
//     const button = instance.findByType("button");
//     button.props.onClick();
//     expect(button.props.children).toBe("PROCEED TO CHECKOUT");
//   });
// });

/*
-------------------------------------------------------------------
*/

// import { useState } from 'react';
// import { act } from 'react-test-renderer';

// function HookButton(props) {
//   const [text, setText] = useState("");
//   function handleClick() {
//     setText("PROCEED TO CHECKOUT");
//   }
//   return <button onClick={handleClick}>{text || props.text}</button>;
// }

// // When you use hooks you need to use act. Act makes sure everything is ready and applied before you make any assertions/conditions. 
// // if you want to be a nerd learn more here http://wiki.c2.com/?ArrangeActAssert
// describe("Button component", () => {
//   test("it shows the expected text when clicked", () => {
//     let component;
//     act(() => {
//       component = create(<HookButton text="SUBSCRIBE TO BASIC" />);
//     });
//     const instance = component.root;
//     const button = instance.findByType("button");
//     act(() => button.props.onClick());
//     expect(button.props.children).toBe("PROCEED TO CHECKOUT");
//   });
// });


/*
-------------------------------------------------------------------
*/


// You can run tests using the ReactDOM and act! Here is a great example of a way to do it.
// More on ReactDOM: https://reactjs.org/docs/react-dom.html#render
// More on dispatchEvent: https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/dispatchEvent
// import ReactDOM from "react-dom";
// import { useState } from 'react';
// import { act } from "react-dom/test-utils";

// let container;

// beforeEach(() => {
//   container = document.createElement("div");
//   document.body.appendChild(container);
// });

// afterEach(() => {
//   document.body.removeChild(container);
//   container = null;
// });

// function HookButton2(props) {
//   const [text, setText] = useState("");
//   function handleClick() {
//     setText("PROCEED TO CHECKOUT");
//   }
//   return <button onClick={handleClick}>{text || props.text}</button>;
// }

// describe("Button component", () => {
//   test("it shows the expected text when clicked", () => {
//     act(() => {
//       ReactDOM.render(<HookButton2 text="SUBSCRIBE TO BASIC" />, container);
//     });
//     const button = container.getElementsByTagName("button")[0];
//     expect(button.textContent).toBe("SUBSCRIBE TO BASIC");
//     act(() => {
//       button.dispatchEvent(new MouseEvent("click", { bubbles: true }));
//     });
//     expect(button.textContent).toBe("PROCEED TO CHECKOUT");
//   });
// });



