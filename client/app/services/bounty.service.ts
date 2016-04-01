import {BOUNTIES} from '../models/mock-bounties';
import {Injectable} from 'angular2/core';

@Injectable()
export class BountyService {
    getBounties() {
        return Promise.resolve(BOUNTIES);
    }
    
    getBounty(id: number) {
        return Promise.resolve(BOUNTIES).then(
            bounties => bounties.filter(bounty => bounty.id === id)[0]
        );
    }
}
