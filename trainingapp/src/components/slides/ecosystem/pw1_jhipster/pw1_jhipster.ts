import {Component, Inject, ElementRef} from '@angular/core';

import {SlideCommon} from '../../slideCommon/slideCommon';
import {Editor} from '../../../editor/editor';
import {EditorTab} from '../../../editorTab/editorTab';

import {HOST_SLIDE_CONTAINER_CLASS} from '../../../../services/constants';


@Component({
	selector:'Pw1_jhipster',
	templateUrl:'src/components/slides/ecosystem/pw1_jhipster/pw1_jhipster.html',
	styleUrls: ['src/components/slides/ecosystem/pw1_jhipster/pw1_jhipster.css'],
    directives: [Editor, EditorTab]
})
export class Pw1_jhipster extends SlideCommon{
	constructor(elt: ElementRef, @Inject(HOST_SLIDE_CONTAINER_CLASS) hostClass: string) {
		super(elt, hostClass);
	}
}