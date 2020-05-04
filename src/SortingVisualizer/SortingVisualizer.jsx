import React from "react";
import { getMergeSortAnimations } from "../SortingAlgorithms/MergeSort.js";
import { getBubbleSortAnimations } from "../SortingAlgorithms/BubbleSort.js";
import { getQuickSortAnimations } from "../SortingAlgorithms/QuickSort.js";
import { getShellSortAnimations } from "../SortingAlgorithms/ShellSort.js";
import "./SortingVisualizer.css";

// Change this value for the speed of the animations.
const ANIMATION_SPEED_MS = 3;

// Change this value for the number of bars (value) in the array.
const NUMBER_OF_ARRAY_BARS = 250; //must be even or shell has issues

// This is the main color of the array bars.
const PRIMARY_COLOR = "#f3a33a";

// This is the color of array bars that are being compared throughout the animations.
const SECONDARY_COLOR = "white";

export default class SortingVisualizer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      array: []
    };
  }

  componentDidMount() {
    this.resetArray();
  }

  resetArray() {
    const array = [];

    for (let i = 0; i < NUMBER_OF_ARRAY_BARS; i++) {
      array.push(randomIntfromRange(10, 500));
    }
    this.setState({ array });
  }

  mergeSort() {
    const animations = getMergeSortAnimations(this.state.array);
    for (let i = 0; i < animations.length; i++) {
      const arrayBars = document.getElementsByClassName("array-bar");
      const isColorChange = i % 3 !== 2;
      if (isColorChange) {
        const [barOneIdx, barTwoIdx] = animations[i];
        const barOneStyle = arrayBars[barOneIdx].style;
        const barTwoStyle = arrayBars[barTwoIdx].style;
        const color = i % 3 === 0 ? SECONDARY_COLOR : PRIMARY_COLOR;
        setTimeout(() => {
          barOneStyle.backgroundColor = color;
          barTwoStyle.backgroundColor = color;
        }, i * ANIMATION_SPEED_MS);
      } else {
        setTimeout(() => {
          const [barOneIdx, newHeight] = animations[i];
          const barOneStyle = arrayBars[barOneIdx].style;
          barOneStyle.height = `${newHeight}px`;
        }, i * ANIMATION_SPEED_MS);
      }
    }
  }

  bubbleSort() {
    const animations = getBubbleSortAnimations(this.state.array);
    console.log(animations);
    for (let i = 0; i < animations.length; i++) {
      const arrayBars = document.getElementsByClassName("array-bar");
      const isColorChange = i % 4 !== 2 && i % 4 !== 3;
      if (isColorChange) {
        //updating compare color
        const [barOneIdx, barTwoIdx] = animations[i];
        const barOneStyle = arrayBars[barOneIdx].style;
        const barTwoStyle = arrayBars[barTwoIdx].style;
        const color = i % 4 === 0 ? SECONDARY_COLOR : PRIMARY_COLOR;
        setTimeout(() => {
          barOneStyle.backgroundColor = color;
          barTwoStyle.backgroundColor = color;
        }, i * ANIMATION_SPEED_MS);
      } else {
        // swapping
        setTimeout(() => {
          const [barOneIdx, newHeight] = animations[i];
          const barOneStyle = arrayBars[barOneIdx].style;
          barOneStyle.height = `${newHeight}px`;
        }, i * ANIMATION_SPEED_MS);
      }
    }
  }

  quickSort() {
    const animations = getQuickSortAnimations(this.state.array);
    for (let i = 0; i < animations.length; i++) {
      const arrayBars = document.getElementsByClassName("array-bar");
      const isColorChange = i % 6 === 0 || i % 6 === 1;
      if (isColorChange) {
        const [barOneIdx, barTwoIdx] = animations[i];
        const barOneStyle = arrayBars[barOneIdx].style;
        const barTwoStyle = arrayBars[barTwoIdx].style;
        const color = i % 6 === 0 ? SECONDARY_COLOR : PRIMARY_COLOR;
        setTimeout(() => {
          barOneStyle.backgroundColor = color;
          barTwoStyle.backgroundColor = color;
        }, i * ANIMATION_SPEED_MS);
      } else {
        setTimeout(() => {
          const [barOneIdx, newHeight] = animations[i];
          const barOneStyle = arrayBars[barOneIdx].style;
          barOneStyle.height = `${newHeight}px`;
        }, i * ANIMATION_SPEED_MS);
      }
    }
  }

  shellSort() {
    const animations = getShellSortAnimations(this.state.array);
    //console.log(animations);
    for (let i = 0; i < animations.length; i++) {
      const arrayBars = document.getElementsByClassName("array-bar");
      const isColorChange = i % 4 !== 2 && i % 4 !== 3;
      if (isColorChange) {
        //updating compare color
        const [barOneIdx, barTwoIdx] = animations[i];
        const barOneStyle = arrayBars[barOneIdx].style;
        //console.log("One: ", barOneIdx, "Two: ", barTwoIdx);
        const barTwoStyle = arrayBars[barTwoIdx].style;
        const color = i % 4 === 0 ? SECONDARY_COLOR : PRIMARY_COLOR;
        setTimeout(() => {
          barOneStyle.backgroundColor = color;
          barTwoStyle.backgroundColor = color;
        }, i * ANIMATION_SPEED_MS);
      } else {
        // swapping
        setTimeout(() => {
          const [barOneIdx, newHeight] = animations[i];
          const barOneStyle = arrayBars[barOneIdx].style;
          barOneStyle.height = `${newHeight}px`;
        }, i * ANIMATION_SPEED_MS);
      }
    }
  }

  render() {
    const { array } = this.state;

    return (
      <div className="wrapper">
        <div className="body">
          <header className="header">
            <div id="heading-text">
              <p> Last Updated: 05/04/2020 </p>
              <p>
                <a href="https://github.com/liamliam2020/sorting-visualizer/tree/master">
                  Github Source Code
                </a>
              </p>
              <p> &copy;2020. All Rights Reserved. </p>
            </div>
          </header>
          <div className="content-wrapper">
            <div className="title">
              <h2> Sorting Algorithm Visualizer </h2>
            </div>
            <div className="tool-bar">
              <p>
                <button onClick={() => this.resetArray()}>
                  <img
                    src={require("../icons/Icon_New Array.png")}
                    height="50"
                    width="50"
                    alt="New Array"
                  />
                </button>
                <p>Make New Array</p>
              </p>
              <p>
                <button onClick={() => this.mergeSort()}>
                  <img
                    src={require("../icons/Icon_MergeSort.png")}
                    height="50"
                    width="50"
                    alt="MergeSort"
                  />
                </button>
                <p>Merge Sort</p>
              </p>
              <p>
                <button onClick={() => this.bubbleSort()}>
                  <img
                    src={require("../icons/Icon_BubbleSort.png")}
                    height="50"
                    width="50"
                    alt="BubbleSort"
                  />
                </button>
                <p>Bubble Sort</p>
              </p>
              <p>
                <button onClick={() => this.quickSort()}>
                  <img
                    src={require("../icons/Icon_QuickSort.png")}
                    height="50"
                    width="70"
                    alt="QuickSort"
                  />
                </button>
                <p>Quick Sort</p>
              </p>
              <p>
                <button onClick={() => this.shellSort()}>
                  <img
                    src={require("../icons/Icon_ShellSort.png")}
                    height="50"
                    width="50"
                    alt="ShellSort"
                  />
                </button>
                <p>Shell Sort</p>
              </p>
            </div>
            <div className="array-container">
              {array.map((value, index) => (
                <div
                  className="array-bar"
                  key={index}
                  style={{ height: `${value}px` }}
                ></div>
              ))}
            </div>
          </div>
          <footer className="footer">
            <div id="footer-text">
              <p> Last Updated: 05/04/2020 </p>
              <p>
                <a href="https://github.com/liamliam2020/sorting-visualizer/tree/master">
                  Github Source Code
                </a>
              </p>
              <p> &copy;2020. All Rights Reserved. </p>
            </div>
          </footer>
        </div>
      </div>
    );
  }
}

// From https://stackoverflow.com/questions/1527803/generating-random-whole-numbers-in-javascript-in-a-specific-range
function randomIntfromRange(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
