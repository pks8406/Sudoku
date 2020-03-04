import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HttpModule } from '@angular/http';
import { SudokuContainerComponent } from './sudoku-container/sudoku-container.component';
import { SudokuGridComponent } from './sudoku-grid/sudoku-grid.component';
import { HttpClientModule } from '@angular/common/http';
import { ModalComponent } from './modal/modal.component';
import { ModalModule } from 'ngx-bootstrap/modal';

@NgModule({
	declarations: [
		AppComponent,
		SudokuContainerComponent,
		SudokuGridComponent,
		ModalComponent
	],
	imports: [
		BrowserModule,
		FormsModule,
		HttpModule,
		HttpClientModule,
		TooltipModule.forRoot(),
		ModalModule.forRoot()
	],
	entryComponents: [
		ModalComponent
	],
	providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
