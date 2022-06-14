import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-tables',
  templateUrl: './data-tables.component.html',
  styleUrls: ['./data-tables.component.scss'],
})
export class DataTablesComponent implements OnInit {
  forestClassifier: any[] = [];
  forestClassifier2: any[] = [];

  constructor() {}

  ngOnInit(): void {
    this.forestClassifier = [
      {
        label: 0,
        presicion: 0.32,
        recall: 0.18,
        score: 0.23,
        support: 336,
      },
      {
        label: 1,
        presicion: 0.50,
        recall: 0.55,
        score: 0.52,
        support: 1099,
      },
      {
        label: 2,
        presicion: 0.50,
        recall: 0.56,
        score: 0.53,
        support: 952,
      },
      {
        label: 3,
        presicion: 0.27,
        recall: 0.05,
        score: 0.08,
        support: 88,
      },
      {
        label: 'accuracy',
        presicion: 0,
        recall: 0,
        score: 0.48,
        support: 2475,
      },
      {
        label: 'macro avg',
        presicion: 0.40,
        recall: 0.33,
        score: 0.34,
        support: 2475,
      },
      {
        label: 'weighted avg',
        presicion: 0.47,
        recall: 0.48,
        score: 0.47,
        support: 2475,
      },
    ];

    this.forestClassifier2 = [
      {
        label: 0,
        presicion: 0.6207,
        recall: 0.6923,
        score: 0.6545,
        support: 104,
      },
      {
        label: 1,
        presicion: 0.6304,
        recall: 0.5321,
        score: 0.5771,
        support: 109,
      },
      {
        label: 2,
        presicion: 0.5000,
        recall: 0.4811,
        score: 0.4904,
        support: 106,
      },
      {
        label: 3,
        presicion: 0.7315,
        recall: 0.7980,
        score: 0.7633,
        support: 99,
      },
      {
        label: 'accuracy',
        presicion: 0,
        recall: 0,
        score: 0.6220,
        support: 418,
      },
      {
        label: 'macro avg',
        presicion: 0.6207,
        recall: 0.6259,
        score: 0.6213,
        support: 418,
      },
      {
        label: 'weighted avg',
        presicion: 0.6189,
        recall: 0.6220,
        score: 0.6185,
        support: 418,
      },
    ];
  }
}
