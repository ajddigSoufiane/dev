// Import Libraries
import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
// Import Services
import { OrganismeService } from '../../services/organisme.service';
import { UserService } from '../../services/user.service';
// Import Models
import { Organisme } from '../../domain/manage_film_example_db/organisme';
import { User } from '../../domain/manage_film_example_db/user';

// START - USED SERVICES
/**
* organismeService.create
*	@description CRUD ACTION create
*
* organismeService.update
*	@description CRUD ACTION update
*	@param ObjectId id Id
*
* organismeService.get
*	@description CRUD ACTION get
*	@param ObjectId id Id resource
*
* UserService.list
*	@description CRUD ACTION list
*
*/
// END - USED SERVICES

/**
 * This component allows to edit a Organisme
 */
@Component({
    selector: 'app-organisme-edit',
    templateUrl: 'organisme-edit.component.html',
    styleUrls: ['organisme-edit.component.css']
})
export class OrganismeEditComponent implements OnInit {
    item: Organisme;
    listOrganisme_user: User[];
    model: Organisme;
    formValid: Boolean;

    constructor(
    private organismeService: OrganismeService,
    private userService: UserService,
    private route: ActivatedRoute,
    private location: Location) {
        // Init item
        this.item = new Organisme();
    }

    /**
     * Init
     */
    ngOnInit() {
        this.route.params.subscribe(param => {
            const id: string = param['id'];
            if (id !== 'new') {
                this.organismeService.get(id).subscribe(item => this.item = item);
            }
            // Get relations
            this.userService.list().subscribe(list => this.listOrganisme_user = list);
        });
    }


    /**
     * Save Organisme
     *
     * @param {boolean} formValid Form validity check
     * @param Organisme item Organisme to save
     */
    save(formValid: boolean, item: Organisme): void {
        this.formValid = formValid;
        if (formValid) {
            if (item._id) {
                this.organismeService.update(item).subscribe(data => this.goBack());
            } else {
                this.organismeService.create(item).subscribe(data => this.goBack());
            } 
        }
    }

    /**
     * Go Back
     */
    goBack(): void {
        this.location.back();
    }


}



