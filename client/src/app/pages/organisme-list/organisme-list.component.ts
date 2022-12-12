import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
// Import Services
import { OrganismeService } from '../../services/organisme.service';
// Import Models
import { Organisme } from '../../domain/manage_film_example_db/organisme';

// START - USED SERVICES
/**
* organismeService.delete
*	@description CRUD ACTION delete
*	@param ObjectId id Id
*
* organismeService.list
*	@description CRUD ACTION list
*
*/
// END - USED SERVICES

/**
 * This component shows a list of Organisme
 * @class OrganismeListComponent
 */
@Component({
    selector: 'app-organisme-list',
    templateUrl: './organisme-list.component.html',
    styleUrls: ['./organisme-list.component.css']
})
export class OrganismeListComponent implements OnInit {
    list: Organisme[];
    search: any = {};
    idSelected: string;
    constructor(
        private organismeService: OrganismeService,
    ) { }

    /**
     * Init
     */
    ngOnInit(): void {
        this.organismeService.list().subscribe(list => this.list = list);
    }

    /**
     * Select Organisme to remove
     *
     * @param {string} id Id of the Organisme to remove
     */
    selectId(id: string) {
        this.idSelected = id;
    }

    /**
     * Remove selected Organisme
     */
    deleteItem() {
        this.organismeService.remove(this.idSelected).subscribe(data => this.list = this.list.filter(el => el._id !== this.idSelected));
    }

}
