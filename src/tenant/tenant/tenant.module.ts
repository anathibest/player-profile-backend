import { Module } from '@nestjs/common';
import {MongooseModule} from '@nestjs/mongoose';
import { TenantController } from './tenant.controller';
import { TenantService } from './tenant.service';
import { TenantSchema } from './tenant.model';

@Module({
	imports: [
		MongooseModule.forFeature([ { name: "tenant", schema: TenantSchema } ]),
	],
	controllers: [TenantController],
    providers: [TenantService]
})
export class TenantModule {}

