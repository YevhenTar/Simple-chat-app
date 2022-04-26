import { Location } from '@angular/common';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AssetsPathService {
  constructor(
    private location: Location,
  ) {
  }

  public getFullPath(assetPath: string): string {
    return this.location.prepareExternalUrl(assetPath);
  }
}
