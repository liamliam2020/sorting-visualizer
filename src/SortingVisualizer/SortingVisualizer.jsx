import React from "react";
import { getMergeSortAnimations } from "../SortingAlgorithms/MergeSort.js";
import { getBubbleSortAnimations } from "../SortingAlgorithms/BubbleSort.js";
import { getQuickSortAnimations } from "../SortingAlgorithms/QuickSort.js";
//import { getRadixSortAnimations } from "../SortingAlgorithms/RadixSort.js";
import "./SortingVisualizer.css";

// Change this value for the speed of the animations.
const ANIMATION_SPEED_MS = 2;

// Change this value for the number of bars (value) in the array.
const NUMBER_OF_ARRAY_BARS = 100;

// This is the main color of the array bars.
const PRIMARY_COLOR = "lightcoral";

// This is the color of array bars that are being compared throughout the animations.
const SECONDARY_COLOR = "blue";

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
    console.log(animations);
    for (let i = 0; i < animations.length; i++) {
      const arrayBars = document.getElementsByClassName("array-bar");
      const isColorChange = i % 6 === 0 || i % 6 === 1;
      if (isColorChange) {
        console.log(animations[i]);
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

  radixSort() {
    //const animations = getRadixSortAnimations(this.state.array);
  }

  render() {
    const { array } = this.state;

    return (
      <div className="wrapper">
        <div className="tool-bar">
          <button onClick={() => this.resetArray()}>Create New Array</button>
          <button onClick={() => this.mergeSort()}>MergeSort</button>
          <button onClick={() => this.bubbleSort()}>BubbleSort</button>
          <button onClick={() => this.quickSort()}>QuickSort</button>
          <button onClick={() => this.radixSort()}>RadixSort</button>
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
    );
  }
}

// From https://stackoverflow.com/questions/1527803/generating-random-whole-numbers-in-javascript-in-a-specific-range
function randomIntfromRange(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
