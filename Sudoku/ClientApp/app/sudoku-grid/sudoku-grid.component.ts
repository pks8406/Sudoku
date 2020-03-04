import { Component, OnInit, Input } from '@angular/core';

@Component({
	selector: 'app-sudoku-grid',
	templateUrl: './sudoku-grid.component.html',
	styleUrls: ['./sudoku-grid.component.css']
})
export class SudokuGridComponent implements OnInit {
	@Input() board: string[][];
	constructor() { }
	ngOnInit() { }
}