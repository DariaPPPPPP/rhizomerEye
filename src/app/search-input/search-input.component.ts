import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { SearchService } from '../services/search.service';

@Component({
  selector: 'app-search-input',
  templateUrl: './search-input.component.html',
  styleUrls: ['./search-input.component.css']
})
export class SearchInputComponent implements OnInit {
    searchQuery: string = '';
    datasetId: string;

    constructor(private searchService: SearchService, private router: Router, private route: ActivatedRoute) {}
  ngOnInit(): void {
    this.datasetId = "all2";
    console.log(this.datasetId);
  }

  onSearch(): void {
    /*     RESPONSE GROQ
    if (this.searchQuery.trim()) {
      this.searchService.search(this.searchQuery).subscribe(
        result => {
          console.log('Search result:', result.result);
        },
        error => {
          console.error('Error during search:', error);
        }
      );
    } else {
      console.log('Search query is empty');
    }
      RESPONSE LIKE SEARCH.COMPONENT

    if (this.searchQuery.trim()) {
      // Use the same route structure as in search.component
      this.router.navigate(['/datasets', 'all2', 'search'], { queryParams: { 'text': this.searchQuery } });
    } else {
      console.log('Search query is empty');
    }
    */
    if (this.searchQuery.trim()) {
      // Assuming 'bsbm' is your prefix for the "Product" class:
      const classCurie = 'bsbm:' + this.searchQuery;
      console.log("BEFORE")
      this.router.navigate(['/datasets', 'all2', 'classes', classCurie, 'instances']);
    } else {
      console.log('Search query is empty');
    }
  }

}