import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../../../shared/shared.module';
import { UtilModule } from '../../../util/util.module';
import { SheetRoutingModule} from './sheet-routing.module';
import { SheetComponent } from './sheet/sheet.component';
import { SheetCharacterInfoComponent } from './sheet-character-info/sheet-character-info.component';
import { SheetCharacterAttributesComponent } from './sheet-character-attributes/sheet-character-attributes.component';
import { SheetCharacterMovementComponent } from './sheet-character-movement/sheet-character-movement.component';
import { SheetCharacterArmorClassComponent } from './sheet-character-armor-class/sheet-character-armor-class.component';
import { SheetCharacterPointsComponent } from './sheet-character-points/sheet-character-points.component';
import { SheetCharacterProtectionComponent } from './sheet-character-protection/sheet-character-protection.component';
import { SheetCharacterAttackBonusesComponent } from './sheet-character-attack-bonuses/sheet-character-attack-bonuses.component';
import { SheetCharacterWeaponsComponent } from './sheet-character-weapons/sheet-character-weapons.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    SheetRoutingModule,
    UtilModule
  ],
  declarations: [
    SheetComponent,
    SheetCharacterInfoComponent,
    SheetCharacterAttributesComponent,
    SheetCharacterMovementComponent,
    SheetCharacterArmorClassComponent,
    SheetCharacterPointsComponent,
    SheetCharacterProtectionComponent,
    SheetCharacterAttackBonusesComponent,
    SheetCharacterWeaponsComponent
  ]
})
export class SheetModule { }