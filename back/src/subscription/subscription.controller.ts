import { Controller, Param, Post, Body, UseGuards, Request, Get } from '@nestjs/common';
import { SubscriptionDto } from './dto/subscription.dto';
import { SubscriptionService } from './subscription.service';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@Controller('service')
@UseGuards(JwtAuthGuard)
export class SubscriptionController {
	constructor (private subscriptionService: SubscriptionService) {}

	@Post('/:name')
	async create(@Body() body: SubscriptionDto, @Param('name') name: string, @Request() req){
		return this.subscriptionService.create(body, name, req.user.userId);
	}

	@Get("/available")
	async getAvailable(@Request() req){
		return this.subscriptionService.getAvailable(req.user.userId);
	}
}
