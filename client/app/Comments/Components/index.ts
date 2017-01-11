/* * * ./app/Comments/components/index.ts * * */
// Imports
import { Component} from '@angular/core';
import {EmitterService} from '../../emitter.service';

@Component({
    selector: 'comment-widget',
    template: `
        <div>
            <comment-form [listId]="listId" [editId]="editId"></comment-form>
            <comment-list [listId]="listId" [editId]="editId"></comment-list>
        </div>
    `,
})
export class CommentComponent { 
    // Event tracking properties
    private listId = 'COMMENT_COMPONENT_LIST';
    private editId = 'COMMENT_COMPONENT_EDIT';
 }
