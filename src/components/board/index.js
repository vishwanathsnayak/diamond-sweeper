/* eslint-disable no-console */
import React from 'react';

import './styles/style.scss';

import questionImage from './images/question.png';
import diamondImage from './images/diamond.png';

import Message from '../message';

export default class Board extends React.Component {

    constructor() {
        super();
        this.state = {
            data: [
                ["unknown", "unknown", "unknown", "unknown", "unknown", "unknown", "diamond", "unknown"],
                ["unknown", "unknown", "unknown", "unknown", "unknown", "unknown", "", ""],
                ["", "", "", "unknown", "diamond", "", "unknown", "unknown"],
                ["unknown", "", "unknown", "unknown", "", "", "", "unknown"],
                ["unknown", "unknown", "diamond", "unknown", "unknown", "", "arrow", "unknown"],
                ["unknown", "", "unknown", "", "unknown", "", "unknown", "unknown"],
                ["unknown", "unknown", "unknown", "unknown", "diamond", "unknown", "unknown", "unknown"],
                ["unknown", "", "", "unknown", "unknown", "unknown", "", ""]
            ],
            visited: [
                [false, false, false, false, false, false, false, false],
                [false, false, false, false, false, false, false, false],
                [false, false, false, false, false, false, false, false],
                [false, false, false, false, false, false, false, false],
                [false, false, false, false, false, false, false, false],
                [false, false, false, false, false, false, false, false],
                [false, false, false, false, false, false, false, false],
                [false, false, false, false, false, false, false, false]
            ],
            score: 64,
            completed: false
        };
    }

    onClick(rowIndex, colIndex) {
        if (!this.state.completed) {
            const { visited, score } = this.state;
            visited[rowIndex][colIndex] = true;
            if (this.completed()) {
                this.setState({ completed: true });
            } else {
                this.setState({ visited, score: score - 1 });
            }
        }
    }

    completed() {
        const { visited, data } = this.state;
        for (let i = 0; i < visited.length; i++) {
            for (let j = 0; j < visited.length; j++) {
                if (data[i][j] == "diamond" && visited[i][j] == false)
                    return false;
            }
        }
        return true;
    }

    renderCell(cell, rowIndex, colIndex) {
        const image = this.imageOf(cell, rowIndex, colIndex);
        return (
            <div className="box" key={colIndex}>
                {
                    image
                        ? <img src={image} onClick={() => this.onClick(rowIndex, colIndex)} />
                        : null
                }
            </div>
        );
    }

    imageOf(cell, rowIndex, colIndex) {
        if (!this.state.visited[rowIndex][colIndex])
            return questionImage;
        else if (cell == "diamond")
            return diamondImage;
    }

    renderRow(row, rowIndex) {
        return row.map((cell, colIndex) => this.renderCell(cell, rowIndex, colIndex));
    }

    render() {
        return (
            <div>
                <Message score={this.state.score} completed={this.state.completed} />
                <div className="wrapper">
                    {this.state.data.map((row, rowIndex) => this.renderRow(row, rowIndex))}
                </div>
            </div>
        );
    }
}