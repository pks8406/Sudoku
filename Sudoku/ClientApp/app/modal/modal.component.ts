import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { BsModalService } from 'ngx-bootstrap';

@Component({
	selector: 'app-modal',
	templateUrl: './modal.component.html',
	styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {
	title: string;
	message: string;

	constructor(public bsModalRef: BsModalRef, private httpClient: HttpClient, private modalService: BsModalService) { }

	ngOnInit() {
	}

	btnOkClick(): void {
		this.bsModalRef.hide();
	}
}
