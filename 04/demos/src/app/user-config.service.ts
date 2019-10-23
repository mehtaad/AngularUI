import { Injectable } from '@angular/core';
import { DisplayCase } from './display-case.enum';

@Injectable()
export class UserConfigService {

  caseSetting: DisplayCase = DisplayCase.Default;

}
