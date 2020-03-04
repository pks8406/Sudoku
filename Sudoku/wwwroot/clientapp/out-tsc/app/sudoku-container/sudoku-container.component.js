var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BsModalService } from 'ngx-bootstrap';
import { ModalComponent } from '../modal/modal.component';
var SudokuContainerComponent = /** @class */ (function () {
    function SudokuContainerComponent(httpClient, modalService) {
        this.httpClient = httpClient;
        this.modalService = modalService;
        this.sudokuPuzzleToProcess = "";
    }
    SudokuContainerComponent.prototype.ngOnInit = function () { this.resetSudoku(); };
    //Gets default board - Initial board on load and reset
    SudokuContainerComponent.prototype.getDefaultBorad = function () {
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
    };
    // Call API to process the Sudoku input and provide the output
    SudokuContainerComponent.prototype.solveSudoku = function () {
        var _this = this;
        this.httpClient.get('api/data/SolveSudoku/' + this.sudokuPuzzleToProcess)
            .subscribe(function (response) {
            if (response.sudokuOutput != null) {
                //Update the solved sudoku
                _this.showMessage("Congratulations - Sudoku Solved :", "Time taken to solve sudoku in milliseconds : " + response.timeTakenToProcess);
                _this.resultBoard = response.sudokuOutput;
            }
            else {
                _this.showMessage("Unable to process", "Oops, Unable to process provided Sudoku. Kindly validate.");
                _this.resultBoard = Array(9).fill(Array(9).fill(""));
            }
        });
    };
    /// reset sudoku grid
    SudokuContainerComponent.prototype.resetSudoku = function () {
        this.sudokuPuzzleToProcess = "4.....8.5.3..........7......2.....6.....8.4......1.......6.3.7.5..2.....1.4......";
        this.resultBoard = Array(9).fill(Array(9).fill(""));
        this.unsolvedBoard = this.getDefaultBorad();
    };
    /// Populate input sudoku string into left sudoku grid
    SudokuContainerComponent.prototype.populateInputSudoku = function (sudokuPuzzle) {
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
        var comma = ",";
        var input = "";
        var value = 0;
        for (var i = 0; i < 9; i++) {
            input += sudokuPuzzle.slice(value, value + 9) + comma;
            value += 9;
        }
        input = input.substring(0, input.length - 1);
        sudokuPuzzle = input;
        var board = sudokuPuzzle
            .split(',')
            .map(function (rows) {
            return rows.split('').map(function (value) { return value; });
        });
        // only put the board up if its valid
        if (board.length === 9 || board[0].length === 9) {
            this.unsolvedBoard = board;
        }
        else {
            this.showMessage("Unable to process sudoku input", "Invalid Sudoku entered. Please provide string in valid format.");
        }
    };
    // Show message (error/time taken to process sudoku etc.)
    SudokuContainerComponent.prototype.showMessage = function (title, errormessage) {
        var initialState = {};
        initialState = {
            title: title,
            message: errormessage
        };
        this.bsModalRefValidation = this.modalService.show(ModalComponent, { initialState: initialState });
    };
    SudokuContainerComponent = __decorate([
        Component({
            selector: 'app-sudoku-container',
            templateUrl: './sudoku-container.component.html',
            styleUrls: ['./sudoku-container.component.css']
        }),
        __metadata("design:paramtypes", [HttpClient, BsModalService])
    ], SudokuContainerComponent);
    return SudokuContainerComponent;
}());
export { SudokuContainerComponent };
//# sourceMappingURL=sudoku-container.component.js.map