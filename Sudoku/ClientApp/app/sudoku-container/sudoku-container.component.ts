import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BsModalService } from 'ngx-bootstrap';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { ModalComponent } from '../modal/modal.component';
import { resetComponentState } from '@angular/core/src/render3/instructions';

@Component({
	selector: 'app-sudoku-container',
	templateUrl: './sudoku-container.component.html',
	styleUrls: ['./sudoku-container.component.css']
})
export class SudokuContainerComponent implements OnInit {

	constructor(private httpClient: HttpClient, private modalService: BsModalService) { }

	bsModalRefValidation: BsModalRef;
	unsolvedBoard: any;
	sudokuPuzzleToProcess: string = "";
	resultBoard: any;

	ngOnInit(): void { this.resetSudoku(); }

	//Gets default board - Initial board on load and reset
	getDefaultBorad() {
		return [
			[4, "", "", "", "", "", 8, "", 5],
			["", 3, "", "", "", "", "", "", ""],
			["", "", "", 7, "", "", "", "", ""],

			["", 2, "", "", "", "", "", 6, ""],
			["", "", "", "", 8, "", 4, "", ""],
			["", "", "", "", 1, "", "", "", ""],

			["", "", "", 6, "", 3, "", 7, ""],
			[5, "", "", 2, "", "", "", "", ""],
			[1, "", 4, "", "", "", "", "", ""]
		];
	}

	// Call API to process the Sudoku input and provide the output
	solveSudoku() {
		this.httpClient.get('api/data/SolveSudoku/' + this.sudokuPuzzleToProcess)
			.subscribe((response: any) => {
				if (response.sudokuOutput != null) {
					//Update the solved sudoku
					this.showMessage("Congratulations - Sudoku Solved :", "Time taken to solve sudoku in milliseconds : " + response.timeTakenToProcess);
					this.resultBoard = response.sudokuOutput;
				}
				else {
					this.showMessage("Unable to process", "Oops, Unable to process provided Sudoku. Kindly validate.");
					this.resultBoard = Array(9).fill(Array(9).fill(""));
				}
			});
	}

	/// reset sudoku grid
	resetSudoku() {
		this.sudokuPuzzleToProcess = "4.....8.5.3..........7......2.....6.....8.4......1.......6.3.7.5..2.....1.4......";
		this.resultBoard = Array(9).fill(Array(9).fill(""));
		this.unsolvedBoard = this.getDefaultBorad();
	}

	/// Populate input sudoku string into left sudoku grid
	populateInputSudoku(sudokuPuzzle: string) {

		//Check if user has provided the sudoku input or not
		if (sudokuPuzzle.length === 0) {
			this.showMessage("Enter Sudoku", "Please enter sudoku string in valid format.");
			return;
		}

		//Validate sudoku input (Whitelist : 0-9. and length is 81)
		if (new RegExp("^[0-9.]*$").test(sudokuPuzzle) == false || sudokuPuzzle.length != 81) {
			this.showMessage("Invalid Sudoku", "Invalid sudoku entered. Please provide string in valid format.");
			return;
		}

		//Store origional input sudoku string - To process on solve
		this.sudokuPuzzleToProcess = sudokuPuzzle;
		sudokuPuzzle = sudokuPuzzle.replace(/\./g, " ");
		const comma = ",";
		var input: string = "";
		var value = 0;

		for (var i = 0; i < 9; i++) {
			input += sudokuPuzzle.slice(value, value + 9) + comma;
			value += 9;
		}

		input = input.substring(0, input.length - 1);
		sudokuPuzzle = input;

		let board = sudokuPuzzle
			.split(',')
			.map((rows) => {
				return rows.split('').map((value) => value);
			});

		// only put the board up if its valid
		if (board.length === 9 || board[0].length === 9) {
			this.unsolvedBoard = board;
		}
		else {
			this.showMessage("Unable to process sudoku input", "Invalid Sudoku entered. Please provide string in valid format.");
		}
	}

	// Show message (error/time taken to process sudoku etc.)
	showMessage(title, errormessage): void {
		let initialState = {};
		initialState = {
			title: title,
			message: errormessage
		};
		this.bsModalRefValidation = this.modalService.show(ModalComponent, { initialState });
	}
}
