import { writable } from "svelte/store";

// 현재 점수
export const score = writable(0);

// 점수 리스트
export const scoreList = writable([
  {score: 0, name: "--"},
  {score: 0, name: "--"},
  {score: 0, name: "--"},
  {score: 0, name: "--"},
  {score: 0, name: "--"},
  {score: 0, name: "--"},
  {score: 0, name: "--"},
  {score: 0, name: "--"},
  {score: 0, name: "--"},
  {score: 0, name: "--"},
]);
/*
Mongodb query.
>
db.score.insertMany([
	{score: 0, name: "--"},
	{score: 0, name: "--"},
	{score: 0, name: "--"},
	{score: 0, name: "--"},
	{score: 0, name: "--"},
	{score: 0, name: "--"},
	{score: 0, name: "--"},
	{score: 0, name: "--"},
	{score: 0, name: "--"},
	{score: 0, name: "--"}
]);
*/

// 퀴즈 리스트
export const quizList = writable([
  { // no. 1
    question: { color: 'red', text: 'green' },
    choice: [
      { color: 'green', text: 'yellow' },
      { color: 'pink', text: 'red' },
      { color: 'blue', text: 'purple' },
      { color: 'yellow', text: 'gray' },
    ]
  },
  { // no. 2
    question: { color: 'red', text: 'green' },
    choice: [
      { color: 'green', text: 'yellow' },
      { color: 'pink', text: 'red' },
      { color: 'blue', text: 'purple' },
      { color: 'yellow', text: 'gray' },
    ]
  },
  { // no. 3
    question: { color: 'red', text: 'green' },
    choice: [
      { color: 'green', text: 'yellow' },
      { color: 'pink', text: 'red' },
      { color: 'blue', text: 'purple' },
      { color: 'yellow', text: 'gray' },
    ]
  },
  { // no. 4
    question: { color: 'red', text: 'green' },
    choice: [
      { color: 'green', text: 'yellow' },
      { color: 'pink', text: 'red' },
      { color: 'blue', text: 'purple' },
      { color: 'yellow', text: 'gray' },
    ]
  },
  { // no. 5
    question: { color: 'red', text: 'green' },
    choice: [
      { color: 'green', text: 'yellow' },
      { color: 'pink', text: 'red' },
      { color: 'blue', text: 'purple' },
      { color: 'yellow', text: 'gray' },
    ]
  },
  { // no. 6
    question: { color: 'red', text: 'green' },
    choice: [
      { color: 'green', text: 'yellow' },
      { color: 'pink', text: 'red' },
      { color: 'blue', text: 'purple' },
      { color: 'yellow', text: 'gray' },
    ]
  },
  { // no. 7
    question: { color: 'red', text: 'green' },
    choice: [
      { color: 'green', text: 'yellow' },
      { color: 'pink', text: 'red' },
      { color: 'blue', text: 'purple' },
      { color: 'yellow', text: 'gray' },
    ]
  },
  { // no. 8
    question: { color: 'red', text: 'green' },
    choice: [
      { color: 'green', text: 'yellow' },
      { color: 'pink', text: 'red' },
      { color: 'blue', text: 'purple' },
      { color: 'yellow', text: 'gray' },
    ]
  },
  { // no. 9
    question: { color: 'red', text: 'green' },
    choice: [
      { color: 'green', text: 'yellow' },
      { color: 'pink', text: 'red' },
      { color: 'blue', text: 'purple' },
      { color: 'yellow', text: 'gray' },
    ]
  },
  { // no. 10
    question: { color: 'pink', text: 'purple' },
    choice: [
      { color: 'purple', text: 'yellow' },
      { color: 'gray', text: 'pink' },
      { color: 'blue', text: 'green' },
      { color: 'yellow', text: 'red' },
    ]
  },
]);