import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IPageInfo } from '../../types';
import { IPaginationQuery } from './types';
import { DecimalPipe, NgIf } from '@angular/common';

@Component({
  selector: 'app-paginator',
  standalone: true,
  imports: [DecimalPipe, NgIf],
  templateUrl: './paginator.component.html',
  styleUrl: './paginator.component.scss',
})
export class PaginatorComponent {
  @Input() totalCount?: number;
  @Input() pageInfo?: IPageInfo;
  @Input() reset!: EventEmitter<void>;
  @Output() pageChange = new EventEmitter<IPaginationQuery>();

  perPage = 10;
  currentPage = 0;

  ngOnInit() {
    this.reset.subscribe(() => (this.currentPage = 0));
  }

  get startCount() {
    return this.currentPage * this.perPage;
  }

  get endCount() {
    return Math.min(
      this.currentPage * this.perPage + this.perPage,
      this.totalCount ?? 0
    );
  }

  previousPage() {
    this.currentPage = this.currentPage - 1;

    this.pageChange.emit({
      last: this.perPage,
      before: this.pageInfo?.startCursor,
    });
  }

  nextPage() {
    this.currentPage = this.currentPage + 1;

    this.pageChange.emit({
      first: this.perPage,
      after: this.pageInfo?.endCursor,
    });
  }
}
